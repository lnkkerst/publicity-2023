<script setup lang="ts">
import { gsap } from 'gsap';

const second = ref<HTMLDivElement>();
const first = ref<HTMLDivElement>();
const third = ref<HTMLDivElement>();
const faq = ref<HTMLDivElement>();
const bongoCatEl = ref<HTMLDivElement>();

onMounted(() => {
  if (bongoCatEl.value && first.value) {
    gsap.from(bongoCatEl.value, {
      scrollTrigger: {
        trigger: first.value,
        start: 'bottom 80%'
      },
      opacity: 0,
      yPercent: 100
    });

    gsap.to(bongoCatEl.value, {
      scrollTrigger: {
        trigger: faq.value,
        start: 'end end+=200'
      },
      xPercent: 100,
      duration: 1,
      ease: 'none'
    });
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
    <div>
      <SectionExhibition></SectionExhibition>
    </div>
    <div ref="faq">
      <SectionFaq></SectionFaq>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
