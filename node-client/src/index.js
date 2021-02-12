var http = require("http");

const html = require("fs").readFileSync(
  __dirname + "/assets/index.html",
  "utf-8"
);
const js = require("fs").readFileSync(__dirname + "/assets/index.js", "utf-8");

//create a server object:
http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      switch (req.url) {
        case "/":
          return res.end(html); //end the response
        case "/index.js":
          return res.end(js); //end the response
        default:
          res.end("invalid route");
          break;
      }
    }
  })
  .listen(8080); //the server object listens on port 8080
