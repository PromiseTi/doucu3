const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Welcome to web3medicallabs',
  tagline: '  ',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '星硕',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logos.png',
      },
      items: [
        {
          label: 'DOCS',
          position: 'right',
          to: 'docs/intro',
        },
        {
          label: 'FAQ',
          position: 'right',
          items: [
            {
              label: '参与开源的方式',
              to: 'docs/Faq/openSource',
            },
            {
              label: '角色',
              to: 'docs/Faq/role',
            },
            {
              label: '激励模式',
              to: 'docs/Faq/excitation',
            },
            {
              label: '为什么要建立Web3 medical labs？',
              to: 'docs/Faq/labs',
            },
          ],
        },

        {
          label: 'Resource',
          position: 'right',
          items: [
            {
              label: 'Resource',
              to: 'docs/MarketPlace/marketPlaceOne',
            },
          ],
        },
        // { to: '/blog', label: 'Blog', position: 'left' },

        {
          label: 'Parts',
          position: 'right',
          items: [
            {
              label: 'DicomNetwork',
              to: 'docs/parts/dicomNetwork',
            },
          ],
        },
        {
          label: 'About',
          position: 'right',
          items: [
            {
              label: 'Who we are',
              to: 'docs/About/are',
            },
            {
              label: 'Teams',
              to: 'docs/About/teams',
            },
            {
              label: '联系我们',
              to: 'docs/About/contactus',
            },
          ],
        },
        {
          label: 'MarketPlace',
          position: 'right',
          items: [
            {
              label: 'MarketPlace',
              to: 'docs/MarketPlace/marketPlaceOne',
            },
          ],
        },
        // {
        //   label: 'Downloads',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'CSS 完全指南',
        //       to: 'docs/css/css-tutorial-intro',
        //     },
        //     {
        //       label: '资源导航',
        //       // position: "right",
        //       to: 'docs/resources/',
        //     },
        //   ],
        // },
        // {
        //   label: '课程',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'React 即时通信 UI 开发实战',
        //       to: 'docs/course/react-chat-ui',
        //     },
        //   ],
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  ],
}
