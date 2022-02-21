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
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path')
const paths = require('react-scripts/config/paths')
const chalk = require('chalk')
const { name } = require('./package.json')

const isDev = process.env.NODE_ENV === 'development'
const OUTPUT_PATH = 'docs'

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

        config.optimization = {
          runtimeChunk: {
            name: 'manifest',
            /* 管理被分出来的包，runtime 指的是 webpack 的运行环境(具体作用就是模块解析, 加载) 和 模块信息清单，
                            模块信息清单在每次有模块变更(hash 变更)时都会变更 */
          },
          splitChunks: {
            chunks: 'all',
            minSize: 512000,
            maxSize: 1024000,
          },
          minimize: true,
          minimizer: [
            new TerserWebpackPlugin({
              parallel: true,
              terserOptions: {
                ecma: undefined,
                warnings: false,
                parse: {},
                // test: /\.js(\?.*)?$/i,
                compress: {
                  drop_console: false,
                  drop_debugger: true,
                  pure_funcs: ['console.log', 'console.group'],
                },
              },
            }),
          ],
        }
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

    addWebpackPlugin(new CleanWebpackPlugin()),

    // 进度条
    addWebpackPlugin(
      new ProgressBarPlugin({
        complete: '█',
        format: `[${name}]: ${chalk.green('构建中')} [ ${chalk.green(':bar')} ] :msg ${chalk.bold('(:percent)')}`,
        clear: true,
        summary: true,
        summaryContent: true,
      })
    ),

    !isDev &&
      addWebpackPlugin(
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, './build'),
            to: path.resolve(__dirname, '../'),
          },
        ])
      )
  ),
}
