module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://eten-api.vercel.app/pages/path*',
          },
        ]
      },
  };