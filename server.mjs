import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
let port = Number(process.env.PORT || 4173);
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error("PORT deve ser um número inteiro entre 0 e 65535.");
  process.exit(1);
}
let retries = 0;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
};

const server = http.createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      const filename = path.resolve(
        root,
        `.${pathname === "/" ? "/index.html" : pathname}`,
      );
      const relative = path.relative(root, filename);
      if (
        relative.startsWith("..") ||
        path.isAbsolute(relative) ||
        relative.split(path.sep).some((part) => part.startsWith("."))
      ) {
        response.writeHead(403).end("Acesso negado");
        return;
      }
      if (!(await stat(filename)).isFile())
        throw new Error("Arquivo não encontrado");
      response.writeHead(200, {
        "Content-Type":
          types[path.extname(filename)] || "application/octet-stream",
      });
      response.end(await readFile(filename));
    } catch {
      response
        .writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
        .end("Página não encontrada");
    }
  });

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && retries < 10 && port < 65535) {
    console.log(`Porta ${port} ocupada. Tentando a porta ${port + 1}...`);
    retries += 1;
    port += 1;
    server.listen(port, "127.0.0.1");
    return;
  }
  console.error(`Não foi possível iniciar o servidor: ${error.message}`);
  process.exitCode = 1;
});
server.on("listening", () => {
  console.log(`Portfólio disponível em http://localhost:${server.address().port}`);
});
server.listen(port, "127.0.0.1");
