import type { Social } from '../types/profile'

export const socials: Social[] = [
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/ikuosaito1989',
    fontawesome: {
      name: 'github',
      prefix: 'fab',
      iconName: 'fa-github'
    }
  },
  {
    id: 1,
    name: 'Twitter',
    url: 'https://twitter.com/mygkrnk',
    fontawesome: {
      name: 'twitter',
      prefix: 'fab',
      iconName: 'fa-twitter'
    }
  },
  {
    id: 3,
    name: 'Qiita',
    url: 'https://qiita.com/ikuosaito1989/',
    fontawesome: {
      name: 'Qiita',
      prefix: 'fab',
      iconName: 'fa-quora'
    }
  }
]
