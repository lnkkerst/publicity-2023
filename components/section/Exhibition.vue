<script setup lang="ts">
const parentEl = ref<HTMLDivElement>();
const el = ref<HTMLDivElement>();
</script>

<template>
  <div ref="parentEl" class="h-200vh relative">
    <div ref="el" class="h-100vh sticky top-0"></div>
  </div>
</template>

<style scoped></style>
