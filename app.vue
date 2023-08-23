<script setup lang="ts">
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(
  MotionPathPlugin,
  PixiPlugin,
  ScrollTrigger,
  DrawSVGPlugin,
  ScrollSmoother
);

useHead({
  title: '0nlineTek Web - 山东大学学生在线'
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
