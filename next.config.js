
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
      {
        source: '/auth',
        destination: '/auth'
      },
      {
        source: '/create-complaint',
        destination: '/create-complaint'
      },
      {
        source: '/complaint/:id',
        destination: '/complaint/[id]'
      },
      {
        source: '/chat',
        destination: '/chat'
      },
      {
        source: '/my-profile',
        destination: '/my-profile'
      },
      
    ]
  }
}
