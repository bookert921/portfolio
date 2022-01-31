const babelOptions = {
  presets: [
    "babel-preset-gatsby",
    "@babel/preset-typescript",
  ],
};
/**
 * Transforms all file types mentioned in jest.config under transform...
 */
module.exports =
  require("babel-jest").default.createTransformer(
    babelOptions
  );
