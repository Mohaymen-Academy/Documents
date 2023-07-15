// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'آکادمی مهیمن',
    staticDirectories: ['public', 'static'],
    tagline: 'بزن بریم!',
    url: 'https://mohaymen-academy.github.io/',
    baseUrl: '/Documents/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'images/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Mohaymen-Academy', // Usually your GitHub org/user name.
    projectName: 'Documents', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
        localeConfigs: {
            fa: {
                direction: 'rtl',
                htmlLang: 'fa-IR',
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Mohaymen-Academy/Documents/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'آکادمی مهیمن',
                logo: {
                    alt: 'لوگو آکادمی مهیمن',
                    src: 'images/Logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'مقدمات',
                    },
                    {
                        type: 'doc',
                        docId: 'frontend',
                        position: 'left',
                        label: 'فرانت‌اند',
                    },
                    {
                        type: 'doc',
                        docId: 'software-engineering',
                        position: 'left',
                        label: 'مهندسی نرم‌افزار',
                    },
                    // {
                    //     type: 'doc',
                    //     docId: 'general',
                    //     position: 'left',
                    //     label: 'عمومی',
                    // },
                    // {
                    //     type: 'doc',
                    //     docId: 'project',
                    //     position: 'left',
                    //     label: 'پروژه',
                    // },
                    {
                        href: 'https://github.com/Mohaymen-Academy/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'مستندات',
                        items: [
                            {
                                label: 'مقدمات',
                                to: '/docs/intro',
                            },
                            {
                                label: 'فرانت‌اند',
                                to: '/docs/frontend',
                            },
                            {
                                label: 'مهندسی نرم‌افزار',
                                to: '/docs/software-engineering',
                            },
                            // {
                            //     label: 'عمومی',
                            //     to: '/docs/general',
                            // },
                        ],
                    },
                    {
                        title: 'بیشتر',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Mohaymen-Academy/',
                            },
                            {
                                label: 'Board',
                                href: 'https://docs.google.com/spreadsheets/d/1wV-_GX8N3G6THq_pg9brjYr8zrdgU5LxH3iMGHlapHk/edit#gid=0',
                            },
                        ],
                    },
                ],
                copyright: 'تمامی حقوق مادی و معنوی این سایت متعلق به آکادمی مهیمن می‌باشد.',
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 6,
            },
        }),
};

module.exports = config;
