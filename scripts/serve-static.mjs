import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const outputDirectory = resolve("out");
const port = Number(process.env.PORT || 4173);
const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mp4", "video/mp4"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".vtt", "text/vtt; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".webp", "image/webp"],
]);

if (!existsSync(outputDirectory)) {
  console.error("Static export not found. Run `npm run build` first.");
  process.exit(1);
}

const server = createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  const requestUrl = new URL(request.url || "/", "http://localhost");
  let pathname;
  try {
    pathname = decodeURIComponent(requestUrl.pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  const relativePath = normalize(pathname.replace(/^[/\\]+/, ""));
  let filePath = resolve(join(outputDirectory, relativePath));
  if (filePath !== outputDirectory && !filePath.startsWith(`${outputDirectory}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, "index.html");
  if (!existsSync(filePath) && !extname(filePath)) filePath = join(filePath, "index.html");
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not Found");
    return;
  }

  const fileSize = statSync(filePath).size;
  const contentType = contentTypes.get(extname(filePath).toLowerCase()) || "application/octet-stream";
  const range = request.headers.range;
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2])) {
      response.writeHead(416, { "Content-Range": `bytes */${fileSize}` });
      response.end();
      return;
    }

    const suffixLength = match[1] ? 0 : Number(match[2]);
    const start = match[1] ? Number(match[1]) : Math.max(0, fileSize - suffixLength);
    const end = match[2] && match[1] ? Math.min(Number(match[2]), fileSize - 1) : fileSize - 1;
    if (start >= fileSize || start > end) {
      response.writeHead(416, { "Content-Range": `bytes */${fileSize}` });
      response.end();
      return;
    }

    response.writeHead(206, {
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff",
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    const stream = createReadStream(filePath, { start, end });
    stream.on("error", (error) => {
      console.error("Unable to serve static file range:", error.message);
      if (!response.headersSent) response.writeHead(500);
      response.end();
    });
    stream.pipe(response);
    return;
  }

  response.writeHead(200, {
    "Accept-Ranges": "bytes",
    "Content-Length": fileSize,
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  const stream = createReadStream(filePath);
  stream.on("error", (error) => {
    console.error("Unable to serve static file:", error.message);
    if (!response.headersSent) response.writeHead(500);
    response.end("Internal Server Error");
  });
  stream.pipe(response);
});

server.on("error", (error) => {
  console.error("Static preview server failed:", error.message);
  process.exitCode = 1;
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static preview ready at http://localhost:${port}`);
});
