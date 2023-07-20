module.exports = (server) => {
  server.register(require("@fastify/http-proxy"), {
    upstream: "http://localhost:3000",
  });

  server.get("/test-url", (req, res) => {
    res.send({
      message: "This is the test API",
      abcd: 123,
    });
  });
};
