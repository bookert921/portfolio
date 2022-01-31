const { compilerOptions } = require("./tsconfig.json");
const {
  pathsToModuleNameMapper,
} = require("ts-jest/utils");
const paths = pathsToModuleNameMapper(
  compilerOptions.paths,
  {
    prefix: "<rootDir>/src",
  }
);

module.exports = {
  // Tells Jest to use babel-jest referenced in jest-preprocess
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  //   Tells Jest how to handle imports of static files
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    ...paths,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
  ],
  // Because Gatsby includes un-transpiled ES6 code.
  // By default Jest doesn’t try to transform code inside node_modules, so you will get an error.
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  // The setupFiles array lets you list files that will be included before all tests are run.
  setupFiles: [`<rootDir>/loadershim.js`],
};
