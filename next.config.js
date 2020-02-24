/* eslint-disable */
require('dotenv').config()

const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const { BASE_API_URL, PORT } = process.env


// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './less/antd-custom.less'), 'utf8')
)


const nextConfig = {
  env: {
    BASE_API_URL: BASE_API_URL || 'default route',
    PORT,
  },

  // Exporting Static
  // exportTrailingSlash: true,
  // async exportPathMap() {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/user': { page: '/user' },
  //   }
  //   const data = await Array.from({ length: 10 }, (_, i) => i + 1)

  //   data.forEach((id) => {
  //     paths[`/user/${id}`] = { page: '/user/[id]', query: { id } }
  //   })

  //   return paths
  // },
}

const plugins = [
	withCss,
  withSass,
  withLess({
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars: themeVariables, // make your antd custom effective
		},
		webpack: (config, { isServer }) => {
			if (isServer) {
				const antStyles = /antd\/.*?\/style.*?/
				const origExternals = [...config.externals]
				config.externals = [
					(context, request, callback) => {
						if (request.match(antStyles)) return callback()
						if (typeof origExternals[0] === 'function') {
							origExternals[0](context, request, callback)
						} else {
							callback()
						}
					},
					...(typeof origExternals[0] === 'function' ? [] : origExternals),
				]

				config.module.rules.unshift({
					test: antStyles,
					use: 'null-loader',
				})
			}
			return config
		},
	}),
]

module.exports = withPlugins(plugins, nextConfig)
