<template>
  <a :href="url" :target="target" class="btn btn-outline-light btn-social mx-1">
    <i :class="className" :name="name"></i>
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string
    prefix?: string
    iconName?: string
    url?: string
    target?: string
  }>(),
  {
    name: '',
    prefix: '',
    iconName: '',
    url: '',
    target: ''
  }
)

const className = computed(() => `${props.prefix} ${props.iconName}`)
</script>
