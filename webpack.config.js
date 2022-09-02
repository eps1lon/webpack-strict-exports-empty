/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: "./index.ts",
  mode: "development",
  module: {
    parser: {
      javascript: {
        strictExportPresence: true,
      },
    },
    rules: [
      {
        test: /\.m?(j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};
module.exports = config;
