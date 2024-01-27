const http = require("http");
const port = 3000;

// creates a local server that can be accessed by typing localhost:(port) into your browser
const server = http.createServer((req, res) => {
  res.end("This is an http server");
});

// logs "http server running..." once the server is active
server.listen(port, () => {
  console.log("http server running...");
});
