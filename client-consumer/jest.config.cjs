const config = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "@components(.*)$": "<rootDir>/components$1",
    "@pages(.*)$": "<rootDir>/pages$1",
    "@hooks(.*)$": "<rootDir>/hooks$1",
  },
};

module.exports = config;
