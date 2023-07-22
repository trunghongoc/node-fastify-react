// npm i -s express cors http-proxy-middleware
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const ENV = require("./env");
const app = express();
const port = 80;

app.use(express.static("dist"));

if (ENV.APP_ENV === "development") {
  app.use(
    cors({
      origin: ["http://localhost", "http://localhost:3000"],
      // origin: "*",
    })
  );

  app.get("/test-url", (req, res) => {
    res.send({
      message: "This is the test API from node server",
      abcd: 123,
    });
  });

  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: false,
    })
  );
  console.log("=====> node dev mode");
} else {
  app.use(cors());

  app.get("*", (req, res) => {
    res.send("index.html");
  });
}

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
