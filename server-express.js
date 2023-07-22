// npm i -s express cors
// npm i -D http-proxy-middleware
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { createProxyMiddleware } = require("http-proxy-middleware");
const ENV = require("./env");
const app = express();
const port = 80;

app.use(express.static("dist"));

if (ENV.APP_ENV === "development") {
  app.use(
    cors({
      // origin: [
      //   "http://localhost",
      //   "http://localhost:3000",
      //   "http://localhost:6006",
      // ],
      origin: "*",
    })
  );

  app.use(async (req, res, next) => {
    next();
  });

  app.get("/get-necessaries", async (req, res) => {
    const userJsonPlaceholder = await axios.get(
      "https://jsonplaceholder.typicode.com/users/3"
    );

    res.send({
      user: userJsonPlaceholder.data,
    });
  });

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
} else {
  app.use(cors());

  app.get("*", async (req, res) => {
    res.send("index.html");
  });
}

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
