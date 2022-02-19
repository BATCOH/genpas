const webpack = require("webpack");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...(config.resolve.fallback ?? {}),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );
  if (env === "production") {
    // ignore bip39 wordlists
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/wordlists\/(?!english)/,
        contextRegExp: /bip39\/src$/,
      })
    );
  }
  return config;
};
