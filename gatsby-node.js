const path = require("path");

module.exports = function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@mui/styled-engine": path.resolve(
          __dirname,
          "node_modules/@mui/styled-engine-sc"
        ),
      },
    },
  });
};
