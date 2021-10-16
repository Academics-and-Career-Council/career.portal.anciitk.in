const { useBabelRc, override, addWebpackPlugin } = require("customize-cra");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = override(
  useBabelRc(), //eslint-disable-line
  addWebpackPlugin(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "node_modules/pdfjs-dist/cmaps/",
          to: "cmaps/",
        },
      ],
    })
  )
);
