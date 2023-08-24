<script setup lang="ts">
const el = ref();
const size = useElementSize(el);
</script>

<template>
  <div ref="el" class="h-100vh">
    <p>{{ size }}</p>
    <input />
  </div>
</template>

<style scoped></style>
