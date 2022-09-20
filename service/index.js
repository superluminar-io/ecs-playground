const http = require("http");

const port = process.env.PORT || 80;
const response = { ok: true, hello: "world" };

console.log(`Starting server …`);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(response));
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
