<template>
  <div class="col-md-6 col-lg-4">
    <h5 class="portfolio-title" style="text-align: center;">{{ name }}</h5>
    <div class="portfolio-item portfolio-thumb mx-auto">
      <NuxtLink :to="{ name: 'portfolio-id', params: { id } }">
        <div
          class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
        >
          <div class="portfolio-item-caption-content text-center text-white">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img :src="thumbnailUrl" class="img-fluid" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string
    id?: number
    thumbnailUrl?: string
  }>(),
  {
    name: '',
    id: 0,
    thumbnailUrl: ''
  }
)
</script>

<style scoped>
/*
 * サムネイルの元画像は縦横比が 1.00〜1.73 とばらついているため、
 * 4:3 の枠に固定して object-fit: cover で切り抜き、グリッドの段差をなくす。
 * freelancer.css の `.portfolio .portfolio-item` より詳細度を上げている。
 */
.portfolio-item.portfolio-thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  max-height: none;
}

.portfolio-item.portfolio-thumb a {
  display: block;
  height: 100%;
}

.portfolio-item.portfolio-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* タイトルが 1 行/2 行で混在しても画像の上端を揃える */
.portfolio-title {
  min-height: 3rem;
}
</style>
