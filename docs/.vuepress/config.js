module.exports = {
  title: 'IPFS',
  description: 'IPFS IA scratchpad',
  themeConfig: {
    logo: '/assets/img/ipfs-logo.svg',
    search: false,
    nav: [
      { text: 'About IPFS', link: '/#about' },
      { text: 'Why IPFS?', link: '/#why' },
      { text: 'Who\'s Using IPFS?', link: '/#who' },
      {
        text: 'Docs & Resources',
        items: [
          { text: 'Docs', link: 'https://docs.ipfs.io' },
          { text: 'Discussion/Support Forum', link: 'https://docs.ipfs.io' },
          { text: 'Community Resources', link: 'https://docs.ipfs.io/community' },
          { text: 'ProtoSchool', link: 'https://proto.school' },
          { text: 'IPFS Repo Directory', link: '/does/not/exist' },
          { text: 'Newsletter', link: '/#newsletter' }
        ]
      },
      { text: 'Blog & News', link: '/blog-news' },
      { text: 'INSTALL', link: '/#install' }
    ]
  }
}
