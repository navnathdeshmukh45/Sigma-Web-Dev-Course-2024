// Load HTTP module
// const http = require("http");
// const mymodule = require("./mymodule2");

// Load http module Go to package.json  "type": "module",Then run app ES6 
// import http from "http"

//  import { a, b, c, d, e } from "./mymodule.js"
import obj from "./mymodule.js"


// const hostname = "127.0.0.1";
// const port = 8000;

// // Create HTTP server
// const server = http.createServer(function (req, res) {
//   // Set the response HTTP header with HTTP status and Content type
//   res.writeHead(200, { "Content-Type": "text/html" });
 
//   // Send the response body "Hello World"
//   // res.end("Hello World");
//   res.end('<h1>Hello World</h1>')
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, function () {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// console.log(a, b, c, d, e);
console.log(obj)
// console.log(mymodule)
