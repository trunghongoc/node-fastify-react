module.exports = (server) => {
  server.register(require("@fastify/http-proxy"), {
    upstream: "http://localhost:3000",
  });

  server.register(cors, {
    origin: true,
    methods: ["GET"],
    maxAge: 3600, // 1 hour
  });

  server.get("/test-url", (req, res) => {
    res.send({
      message: "This is the test API from node server",
      abcd: 123,
    });
  });
};
