import type { Skill } from '../types/profile'

const repo = (
  name: string,
  url = `https://github.com/ikuosaito1989/${name}`,
) => ({
  name,
  url,
})

/**
 * 2026-11-10 に確認できた公開コードと、接続経由で確認した Private
 * repository の実装・設定を根拠にした推定評価。非公開の根拠は説明文に
 * 内容を掲載せず、公開可能な repository だけリンクしている。
 */
export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    category: 'Frontend',
    name: 'TypeScript',
    star: 4,
    evidence:
      '複数の実運用アプリで UI・API・ゲームロジックを実装し、型チェックとテストも利用。',
    repositories: [repo('miniyonku'), repo('profile-frontend')],
  },
  {
    id: 2,
    category: 'Frontend',
    name: 'JavaScript',
    star: 4,
    evidence:
      'Nuxt 2 世代のアプリと現在の TypeScript アプリ双方で実装経験を確認。',
    repositories: [repo('olcar-web'), repo('profile-frontend')],
  },
  {
    id: 3,
    category: 'Frontend',
    name: 'React',
    star: 4,
    evidence: 'Next.js の複合ツール群とゲーム UI を実装。',
    repositories: [repo('miniyonku')],
  },
  {
    id: 4,
    category: 'Frontend',
    name: 'Vue',
    star: 4,
    evidence: '複数の Nuxt アプリで画面・コンポーネントを継続的に実装。',
    repositories: [repo('olcar-web'), repo('profile-frontend')],
  },
  {
    id: 5,
    category: 'Frontend',
    name: 'Next.js',
    star: 4,
    evidence: 'OpenNext/Workers 上のアプリで認証・API・画面・運用構成を実装。',
    repositories: [],
  },
  {
    id: 6,
    category: 'Frontend',
    name: 'Nuxt',
    star: 4,
    evidence:
      'Nuxt 2 から Nuxt 4 まで複数の運用アプリで SSR、API 連携、i18n、配信を実装。',
    repositories: [repo('olcar-web'), repo('profile-frontend')],
  },
  {
    id: 7,
    category: 'Frontend',
    name: 'Angular',
    star: 2,
    evidence:
      '公開された Angular のチャート・音声・解析関連アプリで実装を確認。現行の主力フレームワークかは判断材料が限定的。',
    repositories: [
      repo('web-speech-angular-custom'),
      repo('angularChartjsSample'),
      repo('gaForAngular'),
    ],
  },
  {
    id: 8,
    category: 'Frontend',
    name: 'AngularJS',
    star: 2,
    evidence: '公開サンプルを確認。現在の実装経験を示す材料は少ない。',
    repositories: [repo('routingDOMChange'), repo('ScrollDispatchModule')],
  },
  {
    id: 9,
    category: 'Frontend',
    name: 'HTML / CSS',
    star: 4,
    evidence:
      '複数の UI でレスポンシブ表示、ブラウザ互換、デザインシステムを実装。',
    repositories: [repo('miniyonku'), repo('olcar-web')],
  },
  {
    id: 10,
    category: 'Frontend',
    name: 'Tailwind CSS',
    star: 4,
    evidence:
      '本番 Next.js アプリの UI で利用し、ブラウザ互換やテーマ調整も実施。',
    repositories: [],
  },

  // Backend
  {
    id: 11,
    category: 'Backend',
    name: 'C#',
    star: 4,
    evidence:
      '複数の .NET サービス、API、永続化・ユースケース分離を含む実装を確認。',
    repositories: [repo('dotnetcore_sample'), repo('itunestool')],
  },
  {
    id: 12,
    category: 'Backend',
    name: '.NET',
    star: 4,
    evidence:
      'ASP.NET Core の API とレイヤー分割、Docker 化、テスト/CI 構成の実績。',
    repositories: [repo('dotnetcore_sample'), repo('dotnet-core-docker')],
  },
  {
    id: 13,
    category: 'Backend',
    name: 'Node.js',
    star: 3,
    evidence:
      'TypeScript のサーバー側スクリプトと Node.js ベースのフロントエンド運用を確認。',
    repositories: [],
  },
  {
    id: 14,
    category: 'Backend',
    name: 'Hono',
    star: null,
    evidence: '今回確認したソースで実装根拠を確認できず、評価保留。',
    repositories: [],
  },
  {
    id: 15,
    category: 'Backend',
    name: 'REST API',
    star: 4,
    evidence:
      'ASP.NET Core および Workers 上で認証、入力検証、非同期ジョブ、外部 API 連携を実装。',
    repositories: [repo('dotnet-core-webapi-fileupload-sample')],
  },
  {
    id: 16,
    category: 'Backend',
    name: 'Python',
    star: 2,
    evidence:
      'Kaggle Notebook で音声生成バッチと API/R2 連携を実装。実績は限定された用途。',
    repositories: [repo('voice-clone-task')],
  },

  // Cloud / Infrastructure
  {
    id: 17,
    category: 'Cloud / Infrastructure',
    name: 'Cloudflare Workers',
    star: 4,
    evidence:
      '複数サービスを Workers/OpenNext または Static Assets で運用し、cron・queue・runtime binding を設定。',
    repositories: [
      repo('voice-clone-task'),
      repo('miniyonku'),
      repo('profile-frontend'),
    ],
  },
  {
    id: 18,
    category: 'Cloud / Infrastructure',
    name: 'Cloudflare D1',
    star: 4,
    evidence:
      'アプリのスキーマ・マイグレーションとユーザー/ジョブ等の永続化で利用。',
    repositories: [],
  },
  {
    id: 19,
    category: 'Cloud / Infrastructure',
    name: 'Cloudflare R2',
    star: 4,
    evidence: '音声・画像等の保存とジョブ処理連携を実装。',
    repositories: [],
  },
  {
    id: 20,
    category: 'Cloud / Infrastructure',
    name: 'Durable Objects',
    star: 4,
    evidence:
      'SSE/room 状態やレート制限など、用途別の Durable Object と migration を構成。',
    repositories: [],
  },
  {
    id: 21,
    category: 'Cloud / Infrastructure',
    name: 'GCP',
    star: 3,
    evidence:
      'Cloud Run / Cloud SQL を使った既存ポートフォリオ上の運用経験を確認。今回のコード調査では運用歴全体を検証していない。',
    repositories: [repo('olcar-web')],
  },
  {
    id: 22,
    category: 'Cloud / Infrastructure',
    name: 'Azure',
    star: 3,
    evidence:
      '既存ポートフォリオに App Service と Azure 上のアプリ運用実績が記載されている。',
    repositories: [repo('profile-frontend')],
  },
  {
    id: 23,
    category: 'Cloud / Infrastructure',
    name: 'Docker',
    star: 3,
    evidence: '複数の .NET アプリで Dockerfile とコンテナ起動手順を確認。',
    repositories: [repo('dotnet-core-docker')],
  },
  {
    id: 24,
    category: 'Cloud / Infrastructure',
    name: 'GitHub Actions',
    star: 4,
    evidence:
      'テスト、型チェック、カバレッジ、VRT/E2E など複数段階の CI を運用。',
    repositories: [repo('profile-frontend')],
  },
  {
    id: 25,
    category: 'Cloud / Infrastructure',
    name: 'Heroku',
    star: 2,
    evidence:
      '既存ポートフォリオに過去のデプロイ経験あり。現在の運用・設計の根拠は限定的。',
    repositories: [repo('profile-frontend')],
  },

  // Database / Search
  {
    id: 26,
    category: 'Database / Search',
    name: 'MySQL',
    star: 3,
    evidence:
      '既存プロフィールに Cloud SQL の利用実績が記載されている。今回のソース確認ではスキーマ設計の詳細は限定的。',
    repositories: [repo('olcar-web')],
  },
  {
    id: 27,
    category: 'Database / Search',
    name: 'SQLite',
    star: 3,
    evidence:
      'D1/ Durable Objects の SQLite 系ストレージと migration を実サービスで利用。',
    repositories: [],
  },
  {
    id: 28,
    category: 'Database / Search',
    name: 'Elasticsearch',
    star: null,
    evidence:
      '関連する Private リポジトリは確認したが、設定ファイルが Git LFS ポインターで実内容を参照できず評価保留。',
    repositories: [],
  },
  {
    id: 29,
    category: 'Database / Search',
    name: 'Drizzle ORM',
    star: 4,
    evidence: 'D1 と組み合わせて本番スキーマ・クエリに利用。',
    repositories: [],
  },

  // AI / Machine Learning
  {
    id: 30,
    category: 'AI / Machine Learning',
    name: 'OpenAI API',
    star: 3,
    evidence:
      'Responses API を呼ぶ小さな TypeScript CLI と実サービスの説明を確認。API統合の基本実装を評価。',
    repositories: [],
  },
  {
    id: 31,
    category: 'AI / Machine Learning',
    name: 'Qwen3-TTS',
    star: 4,
    evidence:
      'Kaggle Notebook でモデル実行、入力取得、生成、失敗通知、タイムアウト処理まで実装。',
    repositories: [repo('voice-clone-task')],
  },
  {
    id: 32,
    category: 'AI / Machine Learning',
    name: 'Stable Diffusion',
    star: null,
    evidence:
      '公開リポジトリはプロンプト資料中心で、モデルの推論実装を確認できず評価保留。',
    repositories: [repo('stable-diffusion-sample')],
  },
  {
    id: 33,
    category: 'AI / Machine Learning',
    name: 'FLUX',
    star: null,
    evidence: '今回確認したコードに実装根拠がなく、評価保留。',
    repositories: [],
  },
  {
    id: 34,
    category: 'AI / Machine Learning',
    name: 'AI推論・GPU実行環境',
    star: 3,
    evidence:
      'Kaggle GPU ノートブックで Qwen3-TTS 推論パイプラインを実行。GPU基盤の構築・学習運用までの証拠は限定的。',
    repositories: [repo('voice-clone-task')],
  },

  // Testing / Automation
  {
    id: 35,
    category: 'Testing / Automation',
    name: 'Playwright',
    star: 4,
    evidence:
      'E2E と Visual Regression の両方に利用し、ブラウザ・CI 上の運用を確認。',
    repositories: [],
  },
  {
    id: 36,
    category: 'Testing / Automation',
    name: 'Cypress',
    star: 2,
    evidence:
      'Cypress 3 の学習用ガイド追従とプロフィールの小規模テストを確認。現在の実運用経験を示す材料は限定的。',
    repositories: [repo('try-cypress')],
  },
  {
    id: 37,
    category: 'Testing / Automation',
    name: 'Vitest',
    star: 4,
    evidence:
      '広範なロジック単体テスト、coverage 設定、CI 実行を本番アプリで確認。',
    repositories: [repo('voice-clone-task')],
  },
  {
    id: 38,
    category: 'Testing / Automation',
    name: 'CI/CD',
    star: 4,
    evidence:
      'GitHub Actions と Cloudflare Workers Builds 等を使ったテスト・デプロイ自動化を確認。',
    repositories: [repo('profile-frontend')],
  },

  // Game Development
  {
    id: 39,
    category: 'Game Development',
    name: 'Three.js',
    star: 4,
    evidence: '3D レース描画、車体・パーツのモデル表示やプレビューを実装。',
    repositories: [repo('miniyonku')],
  },
  {
    id: 40,
    category: 'Game Development',
    name: 'Phaser',
    star: 4,
    evidence: '街・店内の探索、移動入力、当たり判定を含む 2D ゲームを実装。',
    repositories: [repo('miniyonku')],
  },
  {
    id: 41,
    category: 'Game Development',
    name: 'WebGL',
    star: 4,
    evidence: 'Three.js を使った 3D レース描画とモデル表示を実装。',
    repositories: [repo('miniyonku')],
  },
  {
    id: 42,
    category: 'Game Development',
    name: 'Zustand',
    star: 4,
    evidence: 'ゲームの所持品・進行・装備などの状態管理に利用。',
    repositories: [repo('miniyonku')],
  },
  {
    id: 43,
    category: 'Game Development',
    name: 'IndexedDB',
    star: 3,
    evidence: 'ゲームのセーブデータを保存・検証・復元する処理を実装。',
    repositories: [repo('miniyonku')],
  },

  // Others
  {
    id: 44,
    category: 'Others',
    name: 'Git',
    star: 4,
    evidence: '複数リポジトリでの継続的な開発、ブランチ運用、PR/CI を確認。',
    repositories: [
      repo('voice-clone-task'),
      repo('miniyonku'),
      repo('profile-frontend'),
    ],
  },
  {
    id: 45,
    category: 'Others',
    name: 'Ruby',
    star: null,
    evidence:
      '以前のプロフィール評価には記載があるが、今回参照できたソースで本人の Ruby 実装を確認できず評価保留。',
    repositories: [],
  },
  {
    id: 46,
    category: 'Others',
    name: 'Rails',
    star: null,
    evidence:
      '以前のプロフィール評価には記載があるが、今回参照できたソースで Rails 実装を確認できず評価保留。',
    repositories: [],
  },
]

export const skillCategories = [
  ...new Set(skills.map((skill) => skill.category)),
]
