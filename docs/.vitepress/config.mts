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
              { text: 'orderBy', link: '/reference/array/orderBy' },
              { text: `sample【v1.0.1新增】`, link: '/reference/array/sample' },
              { text: 'sampleSize【v1.0.1新增】', link: '/reference/array/sampleSize' },
              { text: 'shuffle【v1.0.1新增】', link: '/reference/array/shuffle' },
              { text: 'size【v1.0.1新增】', link: '/reference/array/size' },
              { text: 'take【v1.0.1新增】', link: '/reference/array/take' },
              { text: 'takeWhile【v1.0.1新增】', link: '/reference/array/takeWhile' },
              { text: 'takeRight【v1.0.1新增】', link: '/reference/array/takeRight' },
              { text: 'takeRightWhile【v1.0.1新增】', link: '/reference/array/takeRightWhile' },
              { text: 'union【v1.0.1新增】', link: '/reference/array/union' },
              { text: 'unionBy【v1.0.1新增】', link: '/reference/array/unionBy' },
              { text: 'unionWith【v1.0.1新增】', link: '/reference/array/unionWith' },
              { text: 'uniq【v1.0.1新增】', link: '/reference/array/uniq' },
              { text: 'uniqBy【v1.0.1新增】', link: '/reference/array/uniqBy' },
              { text: 'uniqWith【v1.0.1新增】', link: '/reference/array/uniqWith' },
              { text: 'unzip【v1.0.1新增】', link: '/reference/array/unzip' },
              { text: 'without【v1.0.1新增】', link: '/reference/array/without' },
              { text: 'xor【v1.0.1新增】', link: '/reference/array/xor' },
              { text: 'xorBy【v1.0.1新增】', link: '/reference/array/xorBy' },
              { text: 'xorWith【v1.0.1新增】', link: '/reference/array/xorWith' },
              { text: 'zip【v1.0.1新增】', link: '/reference/array/zip' },
              { text: 'zipObject【v1.0.1新增】', link: '/reference/array/zipObject' },
              { text: 'head【v1.0.1新增】', link: '/reference/array/head' },
              { text: 'tail【v1.0.1新增】', link: '/reference/array/tail' },
              { text: 'last【v1.0.1新增】', link: '/reference/array/last' },
              { text: 'initial【v1.0.1新增】', link: '/reference/array/initial' },
            ]
          },
          {
            text: '数学工具',
            items: [
              { text: 'clamp【v1.0.2新增】', link: '/reference/math/clamp' },
              { text: 'inRange【v1.0.2新增】', link: '/reference/math/inRange' },
              { text: 'mean【v1.0.2新增】', link: '/reference/math/mean' },
              { text: 'meanBy【v1.0.2新增】', link: '/reference/math/meanBy' },
              { text: 'random【v1.0.2新增】', link: '/reference/math/random' },
              { text: 'randomInt【v1.0.2新增】', link: '/reference/math/randomInt' },
              { text: 'range【v1.0.2新增】', link: '/reference/math/range' },
              { text: 'round【v1.0.2新增】', link: '/reference/math/round' },
              { text: 'sum【v1.0.2新增】', link: '/reference/math/sum' },
              { text: 'sumBy【v1.0.2新增】', link: '/reference/math/sumBy' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitcode.com/uvuejs/kux-toolkit' }
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
