<script setup lang="ts">
import { gsap } from 'gsap';

const second = ref<HTMLDivElement>();
const first = ref<HTMLDivElement>();
const third = ref<HTMLDivElement>();
const bongoCatEl = ref<HTMLDivElement>();

onMounted(() => {
  if (bongoCatEl.value && first.value) {
    gsap.fromTo(
      bongoCatEl.value,
      { opacity: 0, yPercent: 100 },
      {
        scrollTrigger: {
          trigger: first.value,
          start: 'bottom 80%'
        },
        opacity: 1,
        yPercent: 0
      }
    );
  }
});
</script>

<template>
  <main class="scroll-smooth">
    <div ref="bongoCatEl" class="fixed bottom-0 right-0">
      <BongoCatCodes></BongoCatCodes>
    </div>
    <div ref="first" class="absolute top-0 w-full z-100">
      <SectionWelcome></SectionWelcome>
    </div>
    <div ref="second">
      <SectionAbout :trigger="first"></SectionAbout>
    </div>
    <div ref="third">
      <SectionPancake></SectionPancake>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
