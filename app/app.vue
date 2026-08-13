<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { title, description, metaImage, siteUrl } = config.public

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: metaImage },
    { property: 'og:site_name', content: title },
    { property: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:image', content: metaImage },
    { name: 'twitter:url', content: siteUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:description', content: description }
  ]
})
</script>
