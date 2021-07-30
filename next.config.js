
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    // path: 'http://pengaduan.petikdua.store/',
    path: 'http://localhost:3000/',
    domain: ''
  },

  env: {
    customKey: 'my-value',
  },

  async rewrites() {
    return[
      {
        source: '/',
        destination: '/'
      },
      {
        source: '/login',
        destination: '/login'
      },
      {
        source: '/register',
        destination: '/register'
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
        source: '/my-complaint',
        destination: '/my-complaint'
      },
      {
        source: '/my-profile',
        destination: '/my-profile'
      },
      {
        source: '/tag/:id',
        destination: '/tag/[id]'
      },
    ]
  }
}
