const env = process.env;

const ENV = {
  APP_ENV: env.APP_ENV || "production",
  API_ENDPOINT: env.API_ENDPOINT,
};

module.exports = ENV;
