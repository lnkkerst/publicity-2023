<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import { type Swiper as SwiperClass } from 'swiper';
import { gsap } from 'gsap';
import {
  PancakeFun,
  PancakeOrganization,
  PancakeProgramming
} from '#components';

const parentEl = ref<HTMLDivElement>();
const el = ref<HTMLDivElement>();
const swiper = ref<SwiperClass>();

const swiperModules = [SwiperFreeMode, SwiperPagination];

function animateScroll() {
  if (!parentEl.value) {
    return;
  }
  gsap.fromTo(
    '.pancake-swiper .swiper-wrapper',
    { xPercent: 0 },
    {
      xPercent: -200,
      scrollTrigger: {
        trigger: parentEl.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    }
  );
}

onMounted(() => {
  animateScroll();
});
</script>

<template>
  <div ref="parentEl" class="h-300vh relative">
    <div ref="el" class="h-100vh sticky top-0">
      <h1
        class="sm:text-12 text-8 h-3/10 pt-12 sm:pt-0 grid place-items-center"
      >
        在这里，你将收获
      </h1>
      <Swiper
        class="pancake-swiper w-full h-540px sm:h-360px grid place-items-center"
        :modules="swiperModules"
        :space-between="30"
        :allow-touch-move="false"
        slides-per-view="auto"
        :centered-slides="true"
        :free-mode="true"
        :centered-slides-bounds="false"
        @swiper="(ins: SwiperClass) => (swiper = ins)"
      >
        <template
          v-for="cardComonent in [
            PancakeProgramming,
            PancakeOrganization,
            PancakeFun
          ]"
          :key="cardComonent.name"
        >
          <SwiperSlide class="pancake-slide !max-w-540px !w-4/5">
            <div>
              <VCard :color="variants.mocha.surface0.hex" class="p-2 pt-1">
                <component :is="cardComonent"></component>
              </VCard>
            </div>
          </SwiperSlide>
        </template>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
