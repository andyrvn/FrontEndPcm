module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    proxy: 'http://server.pcm-app.xyz:8080/test-0.0.1/user/login',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*"
    }
  }
}
