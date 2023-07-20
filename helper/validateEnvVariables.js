const mandatoryEnvs = ["API_ENDPOINT"];
// APP_ENV default is "production"
const optionalEnvs = ["APP_ENV"];

const validateMandatoryEnvs = () => {
  for (const env of mandatoryEnvs) {
    if (!process.env[env]) {
      console.log(`Environment Variable "${env}" is required`);
      process.exit(1);
    }
  }
};

const validateOptionalEnvs = () => {};

const validateEnvVariables = () => {
  validateMandatoryEnvs();
  validateOptionalEnvs();
};

module.exports = {
  validateEnvVariables,
};
