import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kux Toolkit",
  description: "一个现代的uts全端实用库，提供了一系列强大的函数，适用于日常使用。",
  ignoreDeadLinks: true,
  metaChunk: true,
  markdown: {
    config: md => {
      md.use(timeline)
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.jpg',
      type: 'image/jpeg'
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/intro' },
      { text: '参考', link: '/reference/array/chunk' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '简介', link: '/intro' },
          { text: '安装和使用', link: '/usage' },
          { text: '更新日志', link: '/changelog' }
        ]
      },
      {
        text: '参考',
        items: [
          {
            text: '数组工具',
            items: [
              { text: 'chunk', link: '/reference/array/chunk' },
              { text: 'concat', link: '/reference/array/concat' },
              { text: 'concatValues', link: '/reference/array/concatValues' },
              { text: 'countBy', link: '/reference/array/countBy' },
              { text: 'compact', link: '/reference/array/compact' },
              { text: 'difference', link: '/reference/array/difference' },
              { text: 'differenceBy', link: '/reference/array/differenceBy' },
              { text: 'differenceWith', link: '/reference/array/differenceWith' },
              { text: 'drop', link: '/reference/array/drop' },
              { text: 'dropWhile', link: '/reference/array/dropWhile' },
              { text: 'dropRight', link: '/reference/array/dropRight' },
              { text: 'dropRightWhile', link: '/reference/array/dropRightWhile' },
              { text: 'toFilled', link: '/reference/array/toFilled' },
              { text: 'flatMap', link: '/reference/array/flatMap' },
              { text: 'flatten', link: '/reference/array/flatten' },
              { text: 'flattenDeep', link: '/reference/array/flattenDeep' },
              { text: 'forEachRight', link: '/reference/array/forEachRight' },
              { text: 'groupBy', link: '/reference/array/groupBy' },
              { text: 'intersection', link: '/reference/array/intersection' },
              { text: 'intersectionBy', link: '/reference/array/intersectionBy' },
              { text: 'intersectionWith', link: '/reference/array/intersectionWith' },
              { text: 'keyBy', link: '/reference/array/keyBy' },
              { text: 'minBy', link: '/reference/array/minBy' },
              { text: 'maxBy', link: '/reference/array/maxBy' },
              { text: 'min', link: '/reference/array/min' },
              { text: 'max', link: '/reference/array/max' },
              { text: 'orderBy', link: '/reference/array/orderBy' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitcode.com/kviewui/kux-toolkit' }
    ],

    editLink: {
      pattern: 'https://gitcode.com/kviewui/kux-toolkit-doc/edit/main/docs/:path',
      text: '对本页提出修改建议'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kux'
    }
  },
  vite: {
    server: {
      port: 3000
    }
  }
})
