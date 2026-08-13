<template>
  <div class="col-md-6 col-lg-4">
    <h5 style="text-align: center;">{{ name }}</h5>
    <div class="portfolio-item mx-auto">
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
