<template>
  <Loading :model-value="selectedPortfolio">
    <div v-if="selectedPortfolio" class="modal-body text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Portfolio Modal - Title -->
            <h2 class="portfolio-modal-title text-secondary mb-0">
              {{ selectedPortfolio.name }}
            </h2>
            <!-- Icon Divider -->
            <div class="divider-custom">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-star"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Modal - Image -->
            <img
              :src="selectedPortfolio.thumbnailUrl"
              class="image rounded mb-5"
              alt=""
            />
            <div class="text-left mb-5">
              <div ref="descriptionRef" v-html="descriptionHtml" />

              <div class="mb-3">
                URL :
                <a :href="selectedPortfolio.portfolioUrl" target="_blank">{{
                  selectedPortfolio.portfolioUrl
                }}</a>
              </div>
              <div class="mb-3">
                <Tag
                  v-for="(skill, index) in selectedPortfolio.skills"
                  :key="index"
                  :name="skill"
                />
              </div>
            </div>
            <NuxtLink to="/">
              <button class="btn btn-primary" data-dismiss="modal">
                <i class="fas fa-times fa-fw"></i>
                トップへもどる
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Loading>
</template>

<script setup lang="ts">
import { findPortfolio } from '~~/shared/data/portfolios'
import { renderMarkdown, toPlainText } from '~/utils/markdown'
import { toAbsoluteUrl } from '~/utils/url'

const route = useRoute()
const descriptionRef = useTemplateRef<HTMLElement>('descriptionRef')

const selectedPortfolio = computed(() =>
  findPortfolio(Number(route.params.id))
)

if (!selectedPortfolio.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const descriptionHtml = computed(() =>
  renderMarkdown(selectedPortfolio.value?.description ?? '')
)

// 作品ごとの OGP。app.vue の既定値を上書きする。
const config = useRuntimeConfig()
const { title: siteTitle, siteUrl } = config.public

const pageTitle = computed(
  () => `${selectedPortfolio.value?.name ?? ''} | ${siteTitle}`
)
const pageDescription = computed(() =>
  toPlainText(selectedPortfolio.value?.description ?? '')
)
const pageImage = computed(() =>
  toAbsoluteUrl(siteUrl, selectedPortfolio.value?.thumbnailUrl ?? '')
)

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'article',
  ogImage: pageImage,
  ogImageAlt: () => selectedPortfolio.value?.name,
  // サムネイルはサイズがまちまちなので、app.vue の 1200x630 指定を打ち消す
  ogImageType: null,
  ogImageWidth: null,
  ogImageHeight: null,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: pageImage,
  twitterImageAlt: () => selectedPortfolio.value?.name
})

// mermaid はブラウザの DOM を必要とするため、クライアント側でのみ描画する。
// import.meta.client のガードにより、サーバー(Workers)バンドルからは除外される。
onMounted(async () => {
  if (!import.meta.client) return

  const targets = descriptionRef.value?.querySelectorAll('pre.mermaid')
  if (!targets?.length) return

  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({ startOnLoad: false, theme: 'dark' })
  await mermaid.run({ nodes: Array.from(targets) as HTMLElement[] })
})
</script>

<style scoped>
.image {
  max-width: 100%;
  height: auto;
}

/* v-html で描画されるため :deep() で指定する */
:deep(pre.mermaid) {
  text-align: center;
  background: none;
  border: none;
  padding: 0;
  margin-bottom: 1rem;
  overflow-x: auto;
}
:deep(pre.mermaid svg) {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
