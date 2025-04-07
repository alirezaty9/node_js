const http = require("http");
const { title } = require("process");
const server = http.createServer((req, res) => {
  const writeHeadConst = res.writeHead(200, {
    "Content-Type": "application/json",
  });
  if (req.method === "GET" && req.url === "/") {
    writeHeadConst;
    res.write(
      JSON.stringify([
        { id: 1, title: "hello world1111", body: "this is my 11111 post" },
        { id: 2, title: "hello world2222", body: "this is my 22222 post" },
        { id: 3, title: "hello world3333", body: "this is my 33333 post" },
      ])
    );
    res.end();
  } else if (req.method === "GET" && req.url === "/posts") {
    writeHeadConst;
    res.write("<h3>welcome to post page </h3>");
    res.end();
  } else if (req.method === "GET" && req.url === "/books") {
    writeHeadConst;
    res.write("<h5>welcome to Books page </h5>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("secound server running on port 3000");
});
