const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  addLessLoader,
  addWebpackPlugin,
  fixBabelImports,
} = require('customize-cra')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const paths = require('react-scripts/config/paths')

const isDev = process.env.NODE_ENV === 'development'
const OUTPUT_PATH = 'root'

module.exports = {
  webpack: override(
    (config) => {
      // 修改掉webpack里面devtool的配置
      config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false

      if (!isDev) {
        paths.appBuild = path.join(path.dirname(paths.appBuild), OUTPUT_PATH)

        config.entry = path.resolve(__dirname, 'src/index.tsx')

        config.output.path = path.join(path.dirname(config.output.path), OUTPUT_PATH)
        config.output.filename = '[name].[contenthash].js'
      }

      return config
    },
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),

    // adjust the underlying workbox
    adjustWorkbox((wb) =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat('index.html'),
      })
    ),

    addWebpackPlugin(new CleanWebpackPlugin())
  ),
}
