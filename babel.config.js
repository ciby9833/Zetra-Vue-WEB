module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ],
  env: {
    development: {
      sourceMaps: true,
      retainLines: true
    }
  }
}
