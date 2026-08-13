import type { Resume } from '../types/profile'

export const resumes: Resume[] = [
  {
    id: 1,
    company: '株式会社ガウス',
    enrollmentPeriod: { from: '2012/04/01', to: '2015/04/30' },
    jobDescription:
      '新卒で入社し、汎用、オープンともに経験。某官公庁の大規模システムを運用、保守。汎用系であるCobol、JCLに２年近く従事し、平成生まれとしては貴重なCobolコーダーとなる。',
    deliverables: null
  },
  {
    id: 2,
    company: 'コンテンツワークス株式会社',
    enrollmentPeriod: { from: '2015/05/01', to: '2018/03/31' },
    jobDescription:
      'WEB系の事業会社に強く憧れを持ち、転職。WEB未経験であったが、MVCの仕組みと楽しさを知る。subversionからGitに移行、データベース移行などのシステム系から企画、運用などのビジネス系まで幅広く活動。',
    deliverables: [
      { name: 'Photoback', url: 'https://www.photoback.jp/' },
      { name: 'MEMEPAPER', url: 'https://www.memepaper.jp/' }
    ]
  },
  {
    id: 3,
    company: 'フリーランス',
    enrollmentPeriod: { from: '2018/04/01', to: '2021/02/28' },
    jobDescription:
      '20代後半〜30前半まではさまざまな経験をした方が良いと思いフリーランスとして活動。NuxtJS、Angularをはじめとしたフロントエンドエンジニアとして活動。バックエンドもやりたかったが、C#で面白い案件が少ないためフロントエンドに専任する形となった。',
    deliverables: null
  },
  {
    id: 4,
    company: 'パーソルキャリア株式会社',
    enrollmentPeriod: { from: '2021/03/01', to: null },
    jobDescription:
      'フロントエンドアーキテクチャ設計、チームリーダーとしてマネジメントを担当。',
    deliverables: null
  }
]
