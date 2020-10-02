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
          { text: 'IPFS Repos', link: '/does/not/exist' },
          { text: 'IPFS Community Guide', link: 'https://docs.ipfs.io/community' },
          { text: 'How to Contribute', link: 'https://docs.ipfs.io/community/contribute/ways-to-contribute/' },
          { text: 'Newsletter', link: '/#newsletter' },
          { text: 'Press Kit', link: '/press' },
          { text: 'Core Team', link: 'https://github.com/ipfs/team-mgmt/blob/master/TEAMS_ROLES_STRUCTURES.md' }
        ]
      }
    ]
  }
}
