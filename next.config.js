
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domain: ''
  },

  async rewrites() {
    return[
      {
        source: '/',
        destination: '/'
      },

    ]
  }
}
