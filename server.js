const fastify = require("fastify");
const { validateEnvVariables } = require("./helper/validateEnvVariables");

const ENV = require("./env");

// stop process if missing any env variables
validateEnvVariables();

const server = fastify({
  keepAliveTimeout: 60 * 1000,
});

if (ENV.APP_ENV === "development") {
  require("./routes/dev")(server);
} else {
  require("./routes/prod")(server);
}

server.listen(
  {
    port: process.env.PORT || 80,
    host: "0.0.0.0",
  },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  }
);
