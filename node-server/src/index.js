var http = require("http");
const json = require("fs").readFileSync(
  __dirname + "/assets/data.json",
  "utf-8"
);

//create a server object:
http
  .createServer(function (req, res) {
    console.log(req.method, req.url);
    // console.log(req.headers);
    if (req.method === "GET") {
      switch (req.url) {
        case "/data":
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.end(json); //end the response
          break;
        case "/credentials":
          res.setHeader("Set-Cookie", "page=2");
          res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
          /* The value of the 'Access-Control-Allow-Credentials' header in the response is ''
           which must be 'true' when the request's credentials mode is 'include'.*/
          res.setHeader("Access-Control-Allow-Credentials", true);
          res.end("credentials");
          break;
        default:
          res.end("invalid route");
      }
    } else if (req.method === "PUT") {
      switch (req.url) {
        case "/data":
          res.setHeader("Access-Control-Allow-Origin", "*");
          console.log(res);
          req.on("data", (data) => {
            console.log(data.toString("utf-8"));
          });
          res.end("good");
          break;
        default:
          break;
      }
    } else if (req.method === "OPTIONS") {
      // console.log(req.headers);
      switch (req.url) {
        case "/data":
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, PUT");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type, auth");
          res.end();
          break;
        default:
          break;
      }
    }
  })
  .listen(8081); //the server object listens on port 8080
