<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type Swiper as SwiperClass } from 'swiper';
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
  const slideLength = swiper.value?.slides.length ?? 0;
  ScrollTrigger.create({
    trigger: parentEl.value,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: trigger => {
      if (!swiper.value) {
        return;
      }
      let index = trigger.progress * (slideLength + 1);
      index = Math.ceil(index);
      index -= 2;
      index = Math.max(index, 0);
      index = Math.min(index, slideLength - 1);
      swiper.value.slideTo(index);
    }
  });
}

onMounted(() => {
  animateScroll();
});
</script>

<template>
  <div ref="parentEl" class="h-400vh relative">
    <div ref="el" class="h-100vh sticky top-0">
      <h1
        class="sm:text-12 text-8 h-3/10 pt-12 sm:pt-0 grid place-items-center"
      >
        在这里，你将收获
      </h1>
      <Swiper
        class="w-full h-540px sm:h-360px grid place-items-center"
        :modules="swiperModules"
        :space-between="30"
        :allow-touch-move="false"
        slides-per-view="auto"
        :centered-slides="true"
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
          <SwiperSlide class="pancake-slide max-w-540px w-4/5">
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
