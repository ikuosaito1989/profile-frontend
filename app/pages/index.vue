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
        <h1 class="masthead-heading mb-0">
          斉藤育男
        </h1>
        <p class="profile-handle mb-0">ikuosaito1989 / Ikuo Saito</p>

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

    <section id="profile" class="page-section profile-summary">
      <div class="container text-center">
        <h2 class="page-section-heading text-secondary">斉藤育男とは</h2>
        <p class="lead mb-4">
          斉藤育男は、Web上で「ikuosaito1989」の名前を使用しているフルスタックエンジニアです。<br />
          GitHub、Qiita、Zennでのアカウント名はいずれもikuosaito1989です。
        </p>
        <ul class="profile-links mb-0" aria-label="ikuosaito1989の外部プロフィール">
          <li v-for="social in socials" :key="social.id">
            <a :href="social.url" target="_blank" rel="me noopener noreferrer">
              {{ social.name }}: ikuosaito1989
            </a>
          </li>
        </ul>
      </div>
    </section>

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
        <h2 class="page-section-heading text-center text-white">
          スキル
        </h2>

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
          <div style="justify-content: center;" class="row">
            <Skill
              v-for="(skill, index) in skills"
              :key="index"
              :name="skill.name"
              :star="skill.star"
            />
          </div>
        </Loading>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="page-section mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">
          経歴
        </h2>

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
    <section id="about" class="page-section bg-primary  text-white mb-0">
      <div class="container">
        <!-- About Section Heading -->
        <h2 class="page-section-heading text-center">
          ソーシャル
        </h2>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <Loading :model-value="socials">
          <div style="text-align: center;">
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
            <h4 class="mb-4">
              Link
            </h4>
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
import { skills } from '~~/shared/data/skills'
import { socials } from '~~/shared/data/socials'
import { resumes } from '~~/shared/data/resumes'

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
    sameAs: socials.map((social) => social.url)
  }
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
    'ikuosaito1989として活動する斉藤育男（Ikuo Saito）の経歴、スキル、ポートフォリオを紹介します。'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personStructuredData)
    }
  ]
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
      'success'
    )
  } catch {
    swal(
      'エラー',
      '送信に失敗しました。お手数ですが時間をおいて再度お試しください。',
      'error'
    )
  }
}
</script>

<style scoped>
.skill-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skill-description {
  padding: 0px 20px;
  text-align: center;
}
.profile-handle {
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}
.profile-summary {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.profile-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 1.5rem;
  padding: 0;
  list-style: none;
}
</style>
