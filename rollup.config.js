import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
// import path from 'path'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/shared-lib.esm.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    vue(),
    postcss(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.vue'],
      exclude: 'node_modules/**'
    })
  ],
  external: ['vue', 'axios']
}
