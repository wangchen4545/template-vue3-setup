const { defineConfig } = require('@vue/cli-service')
const glob = require("glob");
const path = require("path");
const getEntrys = function (entryPattern) {
	let entrys = {};
	let entry = {};
	glob.sync(entryPattern).forEach((path) => {
		let length = path.split("/").length - 1;
		path = path.split("/")[length - 1];
		entry = {
			entry: "./src/main.js",
			template: "./public/index.html",
			filename: `${path}/index.html`,
			// chunks: ['chunk-vendors', 'chunk-common', 'index']
		};
		entrys[`${path}`] = entry;
	});
	//根目录下增加一个index.html
	entrys["base"] = {
		entry: "./src/main.js",
		template: "./public/index.html",
		filename: "index.html",
	};

	return entrys;
};
const { projectPath, projectName } = require("./ask.js");
const entryPattern = "./src/views/**/index.vue";
const isProduction = process.env.NODE_ENV == "production";
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: `${projectPath}`,
  outputDir: `dist/${projectName}`,
  pages: getEntrys(entryPattern),
  css: {
		extract: true, //是否使用css分离插件 ExtractTextPlugin
		sourceMap: false,
		loaderOptions: {
      scss: {
        //添加固定的css文件
        // additionalData: `
        // @import "./src/css/index.scss";
        // `
      }
		}
	},
  lintOnSave: false,
  chainWebpack: (config) => {
		config.module
			.rule("compile")
			.test(/\.js$/)
			.include.add(path.join(__dirname, "node_modules/swiper/dist"))
			.add(path.join(__dirname, "node_modules/dom7/dist"))
			.end()
			.use("babel")
			.loader("babel-loader")
			.options({
				presets: [["@babel/preset-env", { modules: false }]],
			})
    config.resolve.symlinks(true);
	},
  configureWebpack: {
	
	}
})
