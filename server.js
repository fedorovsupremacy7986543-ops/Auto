const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === "GET" && (req.url === "/" || req.url === "/health")) {
    res.writeHead(200);
    return res.end(JSON.stringify({
      ok: true,
      project: "Evertale Daily Bot",
      status: "backend-starter",
      note: "Server is online. Evertale integration is not implemented."
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ ok: false, error: "Not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend listening on port ${PORT}`);
});
