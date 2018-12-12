const path = require('path')

module.exports = {
  // base: '/pragma-css/',
  contentLoading: true,
  title: 'PragmaCSS',
  description: 'A pragmatic CSS framework to facilitate the creation of custom UI and style systems.',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#41b883' }],

    // Icons for Apple devices
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#35495e' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }],

    // Icons for Android devices
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/android-icon-36x36.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/android-icon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],

    // Icons for MS devices
    ['link', { rel: 'mask-icon', href: '/icons/favicon-16x16.png', color: '#41b883' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#35495e' }]
  ],
  themeConfig: {
    repo: 'AlexanderReiswich/pragma-css',
    sidebar: {
      '/guide/': [
        ['', 'Introduction'],
        ['install', 'Installation'],
        ['overview', 'Overview'],
        ['colors', 'Color styles'],
        ['typography', 'Typography'],
        ['breakpoints', 'Breakpoints'],
        ['display', 'Display & Position'],
        ['layout', 'Layout & Grid'],
        ['effects', 'Effects'],
        ['buttons', 'Buttons'],
        ['forms', 'Form elements'],
        ['ui', 'UI elements'],
      ],
      '/': [
        ''
      ]
    }
  },
  plugins: {
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/plugin-register-components': true,
    '@vuepress/active-header-links': true,
    '@vuepress/search': true
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['src'] = path.resolve(__dirname, './../../src')
  }
}
