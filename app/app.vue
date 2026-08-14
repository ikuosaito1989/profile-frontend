<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { toAbsoluteUrl } from '~/utils/url'

const config = useRuntimeConfig()
const { title, description, metaImage, siteUrl } = config.public
const route = useRoute()

const imageUrl = toAbsoluteUrl(siteUrl, metaImage)
// ページ遷移でも og:url / canonical が追従するようにルートから組み立てる
const canonicalUrl = computed(() => toAbsoluteUrl(siteUrl, route.path))

useHead({
  htmlAttrs: { lang: 'ja' },
  link: [{ rel: 'canonical', href: canonicalUrl }]
})

// ページ側の useSeoMeta で個別に上書きできるよう、ここでは既定値のみ定義する
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogSiteName: title,
  ogLocale: 'ja_JP',
  ogImage: imageUrl,
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: title,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: imageUrl,
  twitterImageAlt: title
})
</script>
