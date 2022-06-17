import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
};

module.exports = config;
