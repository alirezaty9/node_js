const fs = require("fs");


fs.readFile('users.txt',(error,data)=>{

    if (error) {
        console.log("error", error);
        throw error;
    }
console.log(`Users List :' \n${data}`); 
})




// -----------------------------------------------------------------------
// const http = require("http");
// const { title } = require("process");

// const server = http.createServer((req, res) => {
//   const writeHeadConst = res.writeHead(200, {
//     "Content-Type": "application/json",
//   });


//   if (req.method === "GET" && req.url === "/") {

//     writeHeadConst;
//     res.write(
//       JSON.stringify([
//         { id: 1, title: " test1", body: "this is my test1 post" },
//         { id: 2, title: " test2", body: "this is my test2 post" },
//         { id: 3, title: " test3", body: "this is my test3 post" },
//       ])
//     );
//     res.end();

//   }
  
//   else if (req.method === "GET" && req.url === "/posts") {

//     writeHeadConst;
//     res.write("<h3>welcome to post page </h3>");
//     res.end();

//   } 
  
//   else if (req.method === "GET" && req.url === "/books") {

//     writeHeadConst;
//     res.write("<h5>welcome to Books page </h5>");
//     res.end();

//   }
// });

// server.listen(3000, () => {

//   console.log("secound server running on port 3000");

// });
