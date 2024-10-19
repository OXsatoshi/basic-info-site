const http = require("node:http");
const fs = require("fs");
// Create a local server to receive data from
const path = __dirname;
const serverFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error:could not read File");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
};
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    serverFile(path + "/index.html", res);
  } else if (req.url == "/about") {
    serverFile(path + "/about.html", res);
  } else if (req.url == "/contact-me") {
    serverFile(path + "/contact-me.html", res);
  } else {
    serverFile(path + "/404.html", res);
  }
});
console.log(__dirname);
server.listen(8000);
