import type { Portfolio } from '../types/profile'

import neglegere from '../../content/neglegere.md?raw'
import lahyl from '../../content/lahyl.md?raw'
import olcar from '../../content/olcar.md?raw'
import mygkrnk from '../../content/mygkrnk.md?raw'
import profile from '../../content/profile.md?raw'
import itunestool from '../../content/itunestool.md?raw'
import feedbank from '../../content/feedbank.md?raw'
import notFollow from '../../content/not-follow.md?raw'

export const portfolios: Portfolio[] = [
  {
    id: 8,
    name: 'neglegere（ネグレゲレ）',
    thumbnailUrl: '/neglegere.png',
    description: neglegere,
    portfolioUrl: 'https://neglegere.com/',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Cloudflare Workers',
      'Cloudflare D1',
      'Cloudflare R2',
      'OpenNext'
    ]
  },
  {
    id: 7,
    name: 'LAHYL（ライル）（サ終）',
    thumbnailUrl: '/lahyl.png',
    description: lahyl,
    // サービス終了済みのため Internet Archive のスナップショットを指す
    portfolioUrl:
      'https://web.archive.org/web/20251113012228/https://lahyl.me/',
    skills: []
  },
  {
    id: 6,
    name: 'olcar（オルカー）',
    thumbnailUrl: '/olcar.jpg',
    description: olcar,
    portfolioUrl: 'https://ol-car.com/',
    skills: [
      'C#',
      '.NET Core',
      'Cloud Run',
      'Cloud SQL',
      'TypeScript',
      'NuxtJS',
      'Docker'
    ]
  },
  {
    id: 1,
    name: 'みんなの洋楽ランキング（サ終）',
    thumbnailUrl: '/mygkrnk.jpg',
    description: mygkrnk,
    // サービス終了済みのため Internet Archive のスナップショットを指す
    portfolioUrl:
      'https://web.archive.org/web/20200507235913/https://mygkrnk.com/',
    skills: [
      'C#',
      '.NET Core3.1',
      'Azure App Service on Linux',
      'React',
      'TypeScript',
      'SendGrid',
      "Let's Encrypt"
    ]
  },
  {
    id: 2,
    name: 'プロフィールサイト',
    thumbnailUrl: '/profile_main.png',
    description: profile,
    portfolioUrl: 'https://profile-frontend.ikuosaito1989.workers.dev/',
    skills: [
      'Nuxt',
      'Vue',
      'TypeScript',
      'Cloudflare Workers',
      'Resend'
    ]
  },
  {
    id: 3,
    name: 'ITunEsTooL',
    thumbnailUrl: '/ITunEsTooL.jpg',
    description: itunestool,
    // 配布終了済みのため Internet Archive のスナップショットを指す
    portfolioUrl:
      'https://web.archive.org/web/20171116192556/http://itunestool.html.xdomain.jp/',
    skills: ['C#', 'Windows Forms']
  },
  {
    id: 4,
    name: 'Feed bank（サ終）',
    thumbnailUrl: '/feedbank.png',
    description: feedbank,
    portfolioUrl: 'https://feedbank.herokuapp.com',
    skills: ['HTML', 'CSS', 'Bootstrap']
  },
  {
    id: 5,
    name: '検証用bot（譲渡済）',
    thumbnailUrl: '/not-follow.png',
    description: notFollow,
    portfolioUrl: 'https://twitter.com/mygkrnk1',
    skills: ['C#', '.NET Core', 'Twitter API', 'Azure']
  }
]

export const findPortfolio = (id: number): Portfolio | undefined =>
  portfolios.find((portfolio) => portfolio.id === id)
