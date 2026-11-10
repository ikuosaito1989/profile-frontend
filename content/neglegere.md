#### 概要

「地味に時間を取られる作業を少しだけ任せて、大事なところに力を残す」がコンセプトの Web ツール集です

- AI ボイス / 鬼ボイス
- 背景メーカー
- 画像変換
- 音読アシスト
- 手書き電子サイン
- ことばレンズ
- 騒音チェック（beta）
- コンディションチェック（beta）

#### 使用技術

- Hosting
  - Cloudflare Workers(OpenNext)
- Framework
  - Next.js 16
- Program
  - React 19
  - TypeScript
  - Tailwind CSS 4
- Storage
  - Cloudflare R2
- DB
  - Cloudflare D1
- AI
  - OpenAI GPT
  - Qwen3-TTS
  - Tesseract.js
  - IMG.LY Background Removal
- Other
  - PDF.js
  - pdf-lib
  - Playwright
  - Vitest
  - Sentry
  - Better Stack

#### アーキテクチャ

![Neglegere とチビ四駆 -セイラン- のシステム構成](/architecture/neglegere-miniyonku.png)

図は Neglegere と miniyonku の連携を含む構成です。音声クローン用 Qwen3-TTS は Kaggle の GPU Compute で実行し、Web アプリとデータベース、ジョブ処理は Cloudflare Workers、Durable Objects、D1、R2 で構成しています。外部連携として Google OAuth、OpenAI API、Sentry、Cloudflare Email を示しています。図中の赤線は HTTPS/API リクエスト、点線は非同期処理・通知を表します。

miniyonku は独立したゲームアプリで、Neglegere から Bearer JWT 認証付き API 連携を行い、ゲーム側 D1 にレース記録とランキングを保存する構成です。図のサービス名・役割の説明は図に記載された構成を示すもので、ここに記載した技術一覧と実装の全詳細を列挙するものではありません。

#### 技術選定の背景

ざっくりですがここに書いています

https://zenn.dev/ikuosaito1989/articles/47a9b4d4177d87
