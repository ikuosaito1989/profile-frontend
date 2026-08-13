#### 概要

車をもっと身近に感じてほしいとの想いで、SNS で販売されている格安中古車情報を掲載するサイトを作りました。
常に 7~10 万 PV あり、ご好評いただいております。

#### 使用技術

- Hosting
  - Cloud Run(フロント、バックエンド両方とも)
- Middreware
  - Docker
- Framework
  - NuxtJS 3 系
  - .NET6
  - Playwright（SNS 運用自動化に利用）
- Program
  - Vue 3 系
  - TypeScript
  - C#
- Storage
  - Cloud Storage
- Job
  - Cloud Scheduler
- SQL
  - PlanetScale
- CI/CD
  - GitHub Actions
  - Cloud Build
- Service
  - ChatGPT API

#### 技術選定の背景

- NuxtJS

Server Side Rendering(SSR)が必須であり、かつ知見があるフレームワークなので選定しました。

- .NET6
  [みんなの洋楽ランキング](https://festive-yonath-a04e1e.netlify.app/portfolio/1)で利用している
  共通機能（メールや外部 API 連携など）を使用するため.NET6 を選定しました。コンテナ化とバージョンアップによる破壊的変更が少ないので、比較的開発が楽です。

- GCP
  コストを抑えたい、コンテナでの開発でちょうど良くマッチした Cloud Run など他のサービスとの兼ね合いを
  考えた結果 GCP が最適と考えました。Heroku、Azure 等も候補にありましたが、Heroku は拡張性が少ない、
  Azure はみんなの洋楽ランキングでの経験から課題感があり選定しませんでした。
