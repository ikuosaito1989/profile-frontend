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
    <p class="skill-evidence">{{ evidence }}</p>
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
  padding: 0.8rem;
  border: 1px solid rgb(255 255 255 / 25%);
  border-radius: 0.5rem;
  background: rgb(0 0 0 / 8%);
}
.skill-name {
  min-height: 2.5rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  overflow-wrap: anywhere;
}
.skill-evidence {
  margin: 0.25rem 0 0.5rem;
  font-size: 0.8rem;
  line-height: 1.4;
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
