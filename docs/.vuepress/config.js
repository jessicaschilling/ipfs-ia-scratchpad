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
    logo: '/assets/img/ipfs-logo.svg',
    search: false,
    nav: [
      { text: 'About IPFS', link: '/#about' },
      { text: 'Why IPFS?', link: '/#why' },
      { text: 'Who\'s Using IPFS?', link: '/#who' },
      {
        text: 'Docs & resources',
        items: [
          { text: 'Docs', link: 'https://docs.ipfs.io' },
          { text: 'ProtoSchool', link: 'https://proto.school' },
          { text: 'Community', link: 'https://docs.ipfs.io/community' },
          { text: 'Official forums', link: 'https://docs.ipfs.io' },
          { text: 'Repo guide', link: '/does/not/exist' },
          { text: 'Blog & media', link: '/media' },
          { text: 'Newsletter', link: '/#newsletter' }
        ]
      },
      { text: 'INSTALL', link: '/#install' }
    ]
  }
}
