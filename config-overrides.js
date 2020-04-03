const webpack = require("webpack");

function ignoreBip39Wordlists(config, env) {
  config.plugins.push(
    new webpack.IgnorePlugin(/^\.\/wordlists\/(?!english)/, /bip39\/src$/)
  );
  return config;
}

module.exports = function override(config, env) {
  if (env === "production") {
    config = ignoreBip39Wordlists(config, env);
  }
  return config;
};
