module.exports = {
  title: 'IPFS',
  description: 'IPFS powers the distributed web',
  themeConfig: {
    logo: '/assets/img/ipfs-logo.svg',
    search: false,
    nav: [
      { text: 'About', link: '/#about' },
      { text: 'Why IPFS?', link: '/#why' },
      { text: 'Docs', link: 'https://docs.ipfs.io' },
      { text: 'Blog & News', link: '/blog-news' },
      {
        text: 'Resources',
        items: [
          { text: 'Discussion/Support Forum', link: 'https://docs.ipfs.io' },
          { text: 'ProtoSchool', link: 'https://proto.school' },
          { text: 'IPFS Repo Directory', link: '/does/not/exist' },
          { text: 'Teams & Community', link: 'https://docs.ipfs.io/community' },
          { text: 'How to Contribute', link: 'https://docs.ipfs.io/community/contribute/ways-to-contribute/' },
          { text: 'Newsletter', link: '/#newsletter' },
          { text: 'Press Kit', link: '/press' }
        ]
      }
    ]
  }
}
