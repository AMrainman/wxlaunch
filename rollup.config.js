//  rollup.config.js
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
// import commonjs from 'rollup-plugin-commonjs'
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { uglify } from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";

export default {
  input: "src/main.ts",
  output: {
    file: "lib/bundle.js",
    format: "iife",
    name: "wxlaunch",
    sourcemap: true, // 代码调试  开发环境填true
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    typescript(),
    // commonjs()
    // replace({
    //   "process.env.NODE_ENV": JSON.stringify("development"),
    // }),
    // 压缩代码
    // uglify(),
    // 热更新 默认监听根文件夹
    livereload(),
    // 本地服务器
    serve({
      open: false, // 自动打开页面
      port: 8000,
      // openPage: '/public/index.html', // 打开的页面
      contentBase: "",
    }),
  ],
};
