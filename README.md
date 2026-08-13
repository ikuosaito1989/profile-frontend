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

```bash
npm run build      # .output/ を生成（Nitro preset: cloudflare_module）
npm run cf:preview # Workers ランタイムでローカル確認
npm run deploy     # Cloudflare Workers へデプロイ
```

## シークレット

APIキーはリポジトリに含めません。ローカルは `.env`（gitignore 済み）、本番は Workers のシークレットを使います。

```bash
npx wrangler secret put NUXT_RESEND_API_KEY
npx wrangler secret put NUXT_MAIL_SUPPORT
npx wrangler secret put NUXT_MAIL_SUPPORT_NAME
npx wrangler secret put NUXT_MAIL_ADMIN
```
