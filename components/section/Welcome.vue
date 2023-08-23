<script setup lang="ts">
const parentEl = ref<HTMLDivElement>();
const el = ref<HTMLDivElement>();
</script>

<template>
  <div ref="parentEl" class="h-100vh">
    <div ref="el" class="h-100vh bg-black relative">
      <div
        class="absolute left-1/10 top-1/2 translate-y--1/2 text-8 sm:text-16"
      >
        <p v-motion-slide-visible-bottom :duration="800">欢迎来到</p>
        <p
          v-motion-slide-visible-bottom
          :duration="800"
          :delay="200"
          class="text-6 sm:text-8"
        >
          山东大学 学生在线
        </p>
        <p v-motion-slide-visible-bottom :duration="800" :delay="400">
          0nlineTek Web
        </p>
      </div>
      <StackSystem class="h-full"></StackSystem>
      <div
        v-motion-slide-visible-once-bottom
        class="absolute bottom-16 w-full grid place-items-center"
      >
        <Icon
          name="material-symbols:keyboard-double-arrow-down"
          class="w-12 h-12 animate-bounce opacity-80 relative top-10"
        ></Icon>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
