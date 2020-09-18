module.exports = {
  title: 'IPFS',
  description: 'IPFS IA scratchpad',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      }
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    search: false,
    nav: [
      { text: 'About IPFS', link: '/scroll/down' },
      { text: 'Why IPFS?', link: '/scroll/down' },
      { text: 'Who\'s Using IPFS?', link: '/scroll/down' },
      {
        text: 'Docs & resources',
        items: [
          { text: 'Docs', link: 'https://docs.ipfs.io' },
          { text: 'ProtoSchool', link: 'https://docs.ipfs.io' },
          { text: 'Community', link: 'https://docs.ipfs.io' },
          { text: 'Official forums', link: 'https://docs.ipfs.io' },
          { text: 'Repo guide', link: '/does/not/exist' },
          { text: 'Newsletter', link: '/to/footer' }
        ]
      },
      { text: 'INSTALL', link: '/scroll/down' }
    ]
  }
}
