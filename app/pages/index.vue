<template>
  <div id="page-top">
    <!-- Masthead -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image -->
        <img
          class="masthead-avatar mb-5"
          src="~/assets/img/profile.png"
          alt="斉藤育男（ikuosaito1989）のプロフィール画像"
        />

        <!-- Masthead Heading -->
        <h1 class="masthead-heading mb-0">Ikuo Saito</h1>
        <p class="profile-handle mb-0">ikuosaito1989 / 斉藤 育男</p>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Masthead Subheading -->
        <p class="masthead-subheading font-weight-light mb-0">
          Full Stack Engineer
        </p>
      </div>
    </header>

    <!-- Portfolio Section -->
    <section id="portfolio" class="page-section portfolio">
      <div class="container">
        <!-- Portfolio Section Heading -->
        <h2 class="page-section-heading text-center text-secondary mb-0">
          ポートフォリオ
        </h2>
        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <p class="lead">
          個人で作ったサービスです。アーキテクチャや苦労話など書いてますのでぜひご覧ください！
        </p>
        <Loading :model-value="portfolios">
          <div class="row">
            <Portfolio
              v-for="(portfolio, index) in portfolios"
              :key="index"
              :name="portfolio.name"
              :id="portfolio.id"
              :thumbnail-url="portfolio.thumbnailUrl"
            />
          </div>
        </Loading>
      </div>
    </section>

    <section id="about" class="page-section bg-primary text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center text-white">スキル</h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <Loading :model-value="skills">
          <p class="lead">
            はじめまして、斉藤育男（ikuosaito1989）です。東京近郊でWEBエンジニアをやっています。<br />
            WEBサービスを作ることが好きなのでフロントエンド、サーバー問わずやっています。
          </p>
          <div class="skill-categories">
            <section
              v-for="category in skillCategories"
              :key="category"
              class="skill-category"
            >
              <h3>{{ category }}</h3>
              <div class="skill-grid">
                <Skill
                  v-for="skill in skillsByCategory[category]"
                  :key="skill.id"
                  :name="skill.name"
                  :star="skill.star"
                  :evidence="skill.evidence"
                  :repositories="skill.repositories"
                />
              </div>
            </section>
          </div>
          <aside class="skill-evaluation-note">
            <h3>AIによるスキル評価</h3>
            <p>
              GitHub の Public / Private
              リポジトリで確認できたソースコード、技術構成、テスト、インフラ設定などをもとに、OpenAI
              GPT-6 が技術スキルを5段階で評価しました。
            </p>
            <ul>
              <li>評価モデル：OpenAI GPT-6</li>
              <li>
                評価対象：アクセス可能な GitHub Public / Private
                リポジトリのうち、実際に参照できた範囲
              </li>
              <li>評価方法：コード・設計・テスト・運用構成の分析</li>
              <li>評価日：2026年11月10日</li>
              <li>
                ★1〜★5は GitHub
                で確認できる実績に基づく推定で、職務能力を保証せず、実務経験のすべてを反映するものではありません。
              </li>
            </ul>
            <details>
              <summary>5段階評価の基準</summary>
              <ol>
                <li>使用経験が限定的で、習熟度を判断する材料が少ない</li>
                <li>小規模な実装・検証・学習の経験がある</li>
                <li>実際のプロジェクトで利用し、基本的な実装ができる</li>
                <li>
                  複数の実践的な開発経験があり、自立した設計・実装を確認できる
                </li>
                <li>
                  高度な設計・実装・運用経験と深い理解をコードから確認できる
                </li>
              </ol>
              「評価保留」は、今回確認できた証拠では星評価を決められない技術です。
            </details>
            <p>
              参照した公開リポジトリ：
              <a
                href="https://github.com/ikuosaito1989"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub の公開リポジトリ一覧</a
              >
            </p>
            <p>
              今回、非公開リポジトリは一覧・ブランチ情報と一部の
              README、依存関係、設定・ソースを接続経由で確認しました。全ファイル・全ブランチの網羅的な監査ではありません。確認できなかったものやブランチは最終評価報告に記載しています。非公開リポジトリの名前やソース内容は公開していません。
            </p>
          </aside>
        </Loading>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">経歴</h2>

        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <Loading :model-value="resumes">
          <div class="row">
            <Resume
              v-for="(resume, index) in resumes"
              :key="index"
              :company="resume.company"
              :enrollment-period="resume.enrollmentPeriod"
              :job-description="resume.jobDescription"
              :deliverables="resume.deliverables"
            />
          </div>
        </Loading>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section bg-primary text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">ソーシャル</h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <Loading :model-value="socials">
          <div style="text-align: center">
            <Social
              v-for="(social, index) in socials"
              :key="index"
              :name="social.fontawesome.name"
              :prefix="social.fontawesome.prefix"
              :icon-name="social.fontawesome.iconName"
              :url="social.url"
              target="_blank"
            />
          </div>
        </Loading>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="page-section">
      <div class="container">
        <!-- Contact Section Heading -->
        <h2 class="page-section-heading text-center text-secondary mb-0">
          お問い合わせ
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Contact Section Form -->
        <div class="row">
          <div class="col-lg-8 mx-auto">
            正社員のお誘いやお手伝いさせて頂けそうな企業様がいらっしゃいましたら、下記の問合せフォームにでご連絡お願いします。
            <Contact @submit="sendMail" />
          </div>
        </div>
      </div>
    </section>

    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="mt-4 col-lg-6 mx-auto">
            <h4 class="mb-4">Link</h4>
            <div class="mb-0">
              <div>このサイトはNuxtJsの勉強用に作成しました。</div>
              このサイトの概要は
              <NuxtLink :to="{ name: 'portfolio-id', params: { id: 2 } }"
                >こちら</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright Section -->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; ikuo Saito 2019</small>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { portfolios } from '~~/shared/data/portfolios'
import { skills, skillCategories } from '~~/shared/data/skills'
import { socials } from '~~/shared/data/socials'
import { resumes } from '~~/shared/data/resumes'

const skillsByCategory = Object.fromEntries(
  skillCategories.map((category) => [
    category,
    skills.filter((skill) => skill.category === category),
  ]),
)

const config = useRuntimeConfig()
const { siteUrl } = config.public

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#profile-page`,
  url: siteUrl,
  mainEntity: {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: '斉藤育男',
    alternateName: ['ikuosaito1989', 'Ikuo Saito'],
    identifier: 'ikuosaito1989',
    description:
      'Web上でikuosaito1989として活動し、Webサービスを開発するフルスタックエンジニア',
    url: siteUrl,
    image: toAbsoluteUrl(siteUrl, '/profile_main.png'),
    jobTitle: 'フルスタックエンジニア',
    sameAs: socials.map((social) => social.url),
  },
}

useSeoMeta({
  title: '斉藤育男（ikuosaito1989）のプロフィール',
  description:
    'ikuosaito1989としてGitHub・Qiita・Zennで活動する、斉藤育男（Ikuo Saito）のプロフィール、経歴、スキル、ポートフォリオを紹介します。',
  ogTitle: '斉藤育男（ikuosaito1989）のプロフィール',
  ogDescription:
    'ikuosaito1989として活動する斉藤育男（Ikuo Saito）の経歴、スキル、ポートフォリオを紹介します。',
  twitterTitle: '斉藤育男（ikuosaito1989）のプロフィール',
  twitterDescription:
    'ikuosaito1989として活動する斉藤育男（Ikuo Saito）の経歴、スキル、ポートフォリオを紹介します。',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personStructuredData),
    },
  ],
})

const sendMail = async (value: {
  name: string
  email: string
  message: string
}) => {
  // sweetalert はインポート時にブラウザのグローバルを触るため、
  // SSR(Workers)で評価されないよう送信時に動的インポートする
  const { default: swal } = await import('sweetalert')

  try {
    await $fetch('/api/contact', { method: 'POST', body: value })
    swal(
      'Thank you！',
      'お問い合わせありがとうございます！出来る限り早急にご返信いたしますので今しばらくお待ちください。',
      'success',
    )
  } catch {
    swal(
      'エラー',
      '送信に失敗しました。お手数ですが時間をおいて再度お試しください。',
      'error',
    )
  }
}
</script>

<style scoped>
.skill-categories {
  display: grid;
  gap: 1.5rem;
  margin: 1.5rem 0;
}
.skill-category h3,
.skill-evaluation-note h3 {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 0.75rem;
}
.skill-evaluation-note {
  padding: 1rem;
  border: 1px solid rgb(255 255 255 / 35%);
  border-radius: 0.5rem;
  background: rgb(0 0 0 / 8%);
  font-size: 0.9rem;
  overflow-wrap: anywhere;
}
.skill-evaluation-note ul {
  padding-left: 1.25rem;
}
.skill-description {
  padding: 0px 20px;
  text-align: center;
}
.profile-handle {
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}
</style>
