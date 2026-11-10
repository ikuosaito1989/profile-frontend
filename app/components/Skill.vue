<template>
  <article class="skill-box">
    <div class="skill-name">{{ name }}</div>
    <div class="box" :aria-label="ratingLabel">
      <div class="star-rating">
        <div class="star-rating-front">{{ starRating }}</div>
        <div v-if="star !== null" class="star-rating-back">★★★★★</div>
        <span v-else class="pending">評価保留</span>
      </div>
    </div>
    <div v-if="repositories.length" class="skill-repositories">
      <a
        v-for="repository in repositories"
        :key="repository.url"
        :href="repository.url"
        target="_blank"
        rel="noopener noreferrer"
        >{{ repository.name }}</a
      >
    </div>
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string
    thumbnailUrl?: string
    star?: number | null
    evidence?: string
    repositories?: Array<{ name: string; url: string }>
  }>(),
  {
    name: '',
    thumbnailUrl: '',
    star: 0,
    evidence: '',
    repositories: () => [],
  },
)

const starRating = computed(() => '★'.repeat(props.star ?? 0))
const ratingLabel = computed(() =>
  props.star === null ? '評価保留' : `5段階評価 ${props.star} 星`,
)
</script>

<style scoped>
.box {
  height: 37px;
}
.star-rating {
  position: absolute;
  font-size: 25px;
}
.star-rating-back {
  color: #ccc;
}

.star-rating-front {
  position: absolute;
  color: #ffcc33;
  z-index: 100;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 300;
  margin-right: 13px;
}
.skill-box {
  min-width: 0;
  margin: 10px 20px;
  width: 140px;
}
.skill-name {
  min-height: 0;
  margin-right: 13px;
  font-size: 1.25rem;
  font-weight: 300;
  overflow-wrap: anywhere;
}
.skill-repositories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.6rem;
  font-size: 0.75rem;
}
.pending {
  color: #fff;
  font-size: 0.85rem;
}
</style>
