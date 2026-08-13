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
              <div v-html="descriptionHtml" />

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
import { marked } from 'marked'
import { findPortfolio } from '~~/shared/data/portfolios'

const route = useRoute()

const selectedPortfolio = computed(() =>
  findPortfolio(Number(route.params.id))
)

if (!selectedPortfolio.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const descriptionHtml = computed(() =>
  marked.parse(selectedPortfolio.value?.description ?? '', { async: false })
)
</script>

<style scoped>
.image {
  max-width: 100%;
  height: auto;
}
</style>
