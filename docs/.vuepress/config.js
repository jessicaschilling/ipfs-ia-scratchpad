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
      { text: 'Docs', link: 'https://docs.ipfs.io' },
      { text: 'Blog & News', link: '/blog-news' },
      {
        text: 'Resources',
        items: [
          { text: 'Discussion/Support Forum', link: 'https://docs.ipfs.io' },
          { text: 'Community Resources', link: 'https://docs.ipfs.io/community' },
          { text: 'ProtoSchool', link: 'https://proto.school' },
          { text: 'IPFS Repo Directory', link: '/does/not/exist' },
          { text: 'Newsletter', link: '/#newsletter' },
          { text: 'Press Kit', link: '/press' }
        ]
      },
      { text: 'INSTALL', link: '/#install' }
    ]
  }
}
