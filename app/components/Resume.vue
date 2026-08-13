<template>
  <div class="col-lg-4 mr-auto mb-3">
    <h4>{{ company }}</h4>
    <div class="mb-2">期間：{{ convertPeriod }}</div>
    <p class="lead">
      {{ jobDescription }}
    </p>
    <div v-if="deliverables">
      <div>
        成果物 :
        <a
          v-for="(deliverable, index) in deliverables"
          :key="index"
          :href="deliverable.url"
          class="mr-1"
          >{{ deliverable.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Deliverable, EnrollmentPeriod } from '~~/shared/types/profile'

const props = withDefaults(
  defineProps<{
    company?: string
    enrollmentPeriod?: EnrollmentPeriod | null
    jobDescription?: string
    deliverables?: Deliverable[] | null
  }>(),
  {
    company: '',
    enrollmentPeriod: null,
    jobDescription: '',
    deliverables: null
  }
)

const convertPeriod = computed(() => {
  if (!props.enrollmentPeriod) return ''
  const to = props.enrollmentPeriod.to == null ? '現在' : props.enrollmentPeriod.to
  return `${props.enrollmentPeriod.from} ~ ${to}`
})
</script>
