#### 概要

しっくりくるファッションサイトがなかったので AI でコーディネートするサイトを作りました

![sample.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/496802/d11301dd-2d0b-4e4d-af77-5a87f20a2caa.gif)

#### 使用技術

```mermaid
graph TD
    U[👤 ユーザー]
    DEV[🧑💻 開発者]

    subgraph Frontend["🌐 Frontend"]
        FE[⚛️ Next.js 16（Cloudflare Workers）]
    end

    subgraph Edge["🛡️ Edge"]
        CW[🛡️ CDN/WAF（Cloudflare）]
    end

    subgraph Backend["🖥️ Backend"]
        BE[🚀 Hono（Cloudflare Workers）]
    end

    subgraph Database["💾 Database"]
        DB[(🔍 Elasticsearch（ConoHa VPS）)]
    end

    subgraph AI["🤖 画像生成AIサーバー"]
        PY[🐍 Python（Kaggle Notebooks）]
    end


    subgraph Storage["🗄️ Storage"]
        ST[☁️ Cloudflare R2]
    end

    subgraph Observability["📈 Observability"]
        SE[🐞 Sentry]
        SL[💬 Slack]
    end

    subgraph Analytics["📊 Analytics"]
        GA[📈 Google Analytics]
    end

    subgraph Forms["📝 Forms"]
        GF[📝 Google Forms]
    end

    subgraph ExternalAPI["🔌 External API"]
        RA[🛍️ 楽天API]
    end

    %% Connections
    U --> CW
    CW --> FE
    FE --> BE
    BE --> DB
    ST --> FE
    FE --> SE
    BE --> SE
    FE --> GA
    FE --> GF
    FE --> RA
    SE --> SL
    SL --> DEV
    DEV --> PY
    PY --> ST
```

- Hosting
  - Cloudflare Workers(フロント、バックエンド両方とも)
  - ConoHa VPS(Elasticsearch)
  - Kaggle Notebooks
- Framework
  - Next.js
  - .Hono
- Program
  - React
  - TypeScript
  - Python
- Storage
  - Cloudflare R2
- DB
  - Elasticsearch
- AI
  - StableDiffusion

#### 技術選定の背景

ざっくりですがここに書いています

https://qiita.com/ikuosaito1989/items/8e6dff394d052655fed2
