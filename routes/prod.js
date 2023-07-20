const fastifyStatic = require("@fastify/static");
const { join } = require("path");
const cors = require("@fastify/cors");

module.exports = (server) => {
  server.register(fastifyStatic, {
    root: join(__dirname, "..", "dist"),
    // prefix: "/public/",
    maxAge: 43200000, // 12 hours
    preCompressed: true,
  });

  /*
  server.register(cors, {
    origin: true,
    methods: ["GET"],
    maxAge: 3600, // 1 hour
  });
  */

  server.setNotFoundHandler((req, res) => {
    res.sendFile("index.html");
  });
};
