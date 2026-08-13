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
    name: 'LAHYL（ライル）（サービス終了）',
    thumbnailUrl: '/lahyl.png',
    description: lahyl,
    portfolioUrl: 'https://lahyl.me/',
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
    name: 'みんなの洋楽ランキング（サービス終了）',
    thumbnailUrl: '/mygkrnk.jpg',
    description: mygkrnk,
    portfolioUrl: 'https://mygkrnk.com',
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
    portfolioUrl: 'https://festive-yonath-a04e1e.netlify.com/',
    skills: [
      'NuxtJS',
      'Vue',
      'Jest',
      '.NET Core',
      'Docker',
      'Netlify',
      'Heroku',
      'SendGrid'
    ]
  },
  {
    id: 3,
    name: 'ITunEsTooL',
    thumbnailUrl: '/ITunEsTooL.jpg',
    description: itunestool,
    portfolioUrl: 'https://freesoft-100.com/review/itunestool.html',
    skills: ['C#', 'Windows Forms']
  },
  {
    id: 4,
    name: 'Feed bank',
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
