# profile

> Nuxt 4 + Cloudflare Workers で動かすプロフィールサイト

バックエンド（`mock` / ASP.NET Core）は廃止し、プロフィールの静的データはこのリポジトリに直接持っています。
外部通信が必要なのはお問い合わせメール送信（Resend）だけです。

## 構成

| ディレクトリ | 内容 |
| --- | --- |
| `app/` | ページ・コンポーネント・CSS などフロントエンド一式 |
| `shared/data/` | ポートフォリオ / スキル / ソーシャル / 経歴の静的データ |
| `content/` | ポートフォリオ詳細の Markdown |
| `server/api/` | お問い合わせ送信 API（Resend） |
| `public/` | 画像・favicon などの静的アセット |

## セットアップ

```bash
npm install
cp .env.example .env   # 値を埋める（NUXT_RESEND_API_KEY は各自の値）
npm run dev
```

## ビルド / デプロイ

`master` への push で Cloudflare Workers Builds が自動的にデプロイします。

```
npm install → npm run build → npx wrangler deploy
```

手元から確認・デプロイする場合は以下を使います。

```bash
npm run build      # .output/ を生成（Nitro preset: cloudflare_module）
npm run cf:preview # Workers ランタイムでローカル確認
npm run deploy     # Cloudflare Workers へデプロイ
```

`wrangler.jsonc` の `vars` はビルド時に `.output/server/wrangler.json` へ書き出されます。
値を変更したあとに `wrangler deploy` だけを実行しても反映されないため、必ず `npm run deploy` を使ってください。

## シークレット

APIキーはリポジトリに含めません。ローカルは `.env`（gitignore 済み）、本番は Workers のシークレットを使います。

```bash
npx wrangler secret put NUXT_RESEND_API_KEY
npx wrangler secret put NUXT_MAIL_SUPPORT
npx wrangler secret put NUXT_MAIL_SUPPORT_NAME
npx wrangler secret put NUXT_MAIL_ADMIN
```
