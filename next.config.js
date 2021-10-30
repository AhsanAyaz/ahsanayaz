const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  images: {
    domains: ['media.giphy.com', 'img.buymeacoffee.com', 'media1.tenor.com'],
  },
  async redirects() {
    return [
      {
        source: '/ng-book',
        destination:
          'https://www.amazon.com/Angular-Cookbook-recipes-enterprise-scale-development-dp-1838989439/dp/1838989439/',
        permanent: true,
        basePath: false,
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/c/CodewithAhsan',
        permanent: true,
        basePath: false,
      },
      {
        source: '/gde',
        destination:
          'https://developers.google.com/community/experts/directory/profile/profile-muhammad-ahsan-ayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/muhd.ahsanayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/facebook',
        destination: 'https://facebook.com/muhd.ahsanayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/tiktok',
        destination: 'https://tiktok.com/@muhd.ahsanayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/resume',
        destination: 'https://linkedin.com/in/ahsanayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/ahsanayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/muhd_ahsanayaz',
        permanent: true,
        basePath: false,
      },
      {
        source: '/author',
        destination: 'https://www.amazon.com/~/e/B098TSDC9B',
        permanent: true,
        basePath: false,
      },
    ]
  },
  target: 'serverless',
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
})
