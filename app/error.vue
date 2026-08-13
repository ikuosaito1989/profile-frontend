<template>
  <div class="modal-body text-center">
    <div class="container mb-4">
      <img src="~/assets/img/computer_error_bluescreen.png" class="image" />
      <h1 v-if="error?.statusCode === 404">ページが見つかりません</h1>
      <h3 v-else>人気すぎてHerokuの無料枠を超えたか、普通にバグっています。</h3>
    </div>
    <NuxtLink to="/" @click="handleError">トップに戻る</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error?: NuxtError | null }>()

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.image {
  width: 100%;
}
</style>
