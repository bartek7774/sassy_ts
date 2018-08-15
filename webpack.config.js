var Encore = require("@symfony/webpack-encore");

Encore
  // directory where compiled assets will be stored
  .setOutputPath("web/build/")
  // public path used by the web server to access the output path
  .setPublicPath("/build")
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')

  /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
  .createSharedEntry("app", "./assets/js/app.js")
  .addEntry("page1", "./assets/js/page1.js")

  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  // .enableVersioning(Encore.isProduction())
  // .enableTypeScriptLoader()
  // .enableForkedTypeScriptTypesChecking()
  .enableSassLoader()
  .autoProvidejQuery()
  .enablePostCssLoader(options => {
    options.config = {
      path: "./postcss.config.js"
    };
  })
  .configureBabel(function(babelConfig) {
    babelConfig.presets.push("es2017");
  });

module.exports = Encore.getWebpackConfig();
