const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Implement DApp on CKB layer1',
      /*
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      */
      items: [
        /*
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        */
       
        /* {to: '/blog', label: 'Blog', position: 'left'},*/
        {
          href: 'https://github.com/zengbing15/implement-dapp-doc',
          label: 'Docs GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Github',
              /*to: '/docs/intro',*/
              href: 'https://github.com/zengbing15/implement-dapp-doc',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/AqGTUE9',
            },
            {
              label: 'Nervos Talk',
              href: 'https://talk.nervos.org/',
            },
          ],
        },
        {
          title: 'More',
          
          items: [
            /*
            {
              label: 'Blog',
              to: '/blog',
            },
            */
            
            {
              label: 'Lumos-doc',
              href: 'https://cryptape.github.io/lumos-doc/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} zengbing. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          routeBasePath: '/'
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};