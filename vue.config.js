module.exports = {
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      https: true,
      disableHostCheck: true,
      port: 8080,
      public: 'https://localhost:8080',
    },
    externals: {
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:8000',
      }),
    },
  },
};
