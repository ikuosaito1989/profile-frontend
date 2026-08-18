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
    id: 3,
    name: 'Qiita',
    url: 'https://qiita.com/ikuosaito1989/',
    fontawesome: {
      name: 'Qiita',
      prefix: 'fab',
      iconName: 'fa-quora'
    }
  },
  {
    id: 6,
    name: 'Zenn',
    url: 'https://zenn.dev/ikuosaito1989',
    fontawesome: {
      name: 'Zenn',
      // Font Awesome 5 に Zenn のブランドアイコンはないため、
      // ロゴに近い開いた本のアイコンで代用する
      prefix: 'fas',
      iconName: 'fa-book-open'
    }
  }
]
