const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.write("welcome to HOme page ");
    res.end();
  } else if (req.method === "GET" && req.url === "/posts") {
    res.write("welcome to post page ");
    res.end();
  } else if (req.method === "GET" && req.url === "/books") {
    res.write("welcome to Books page ");
    res.end();
  }

});

server.listen(3000, () => {
  console.log("secound server running on port 3000");
});
