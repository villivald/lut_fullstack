const http = require("http");

//Create server object
http
  .createServer((req, res) => {
    //Write response
    res.write("hello world");
    res.end();
  })
  .listen(5000, () => console.log("server running"));
//http://localhost:5000/
