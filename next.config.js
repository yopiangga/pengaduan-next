module.exports = {
  target: 'serverless',
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/',
  },

  async rewrites() {
    return[
      {
        source: '/',
        destination: '/',
      },
      {
        source: '/login',
        destination: '/login',
      },
      {
        source: '/register',
        destination: '/register',
      },
      {
        source: '/create-complaint',
        destination: '/create-complaint',
      },
      {
        source: '/complaint/:id',
        destination: '/complaint/[id]',
      },
      {
        source: '/chat',
        destination: '/chat',
      },
      {
        source: '/my-complaint',
        destination: '/my-complaint',
      },
      {
        source: '/my-profile',
        destination: '/my-profile',
      },
      {
        source: '/report',
        destination: '/report',
      },
      {
        source: '/tag/:id',
        destination: '/tag/[id]',
      },
    ]
  }
}
