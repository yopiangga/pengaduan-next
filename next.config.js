
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    // path: 'http://pengaduan.petikdua.store/',
    // path: 'http://localhost:3000/',
    domain: ''
  },

  async rewrites() {
    return[
      {
        source: '/',
        destination: '/',
        locale: false
      },
      {
        source: '/login',
        destination: '/login',
        locale: false
      },
      {
        source: '/register',
        destination: '/register',
        locale: false
      },
      {
        source: '/create-complaint',
        destination: '/create-complaint',
        locale: false
      },
      {
        source: '/complaint/:id',
        destination: '/complaint/[id]',
        locale: false
      },
      {
        source: '/chat',
        destination: '/chat',
        locale: false
      },
      {
        source: '/my-complaint',
        destination: '/my-complaint',
        locale: false
      },
      {
        source: '/my-profile',
        destination: '/my-profile',
        locale: false
      },
      {
        source: '/tag/:id',
        destination: '/tag/[id]',
        locale: false
      },
    ]
  }
}
