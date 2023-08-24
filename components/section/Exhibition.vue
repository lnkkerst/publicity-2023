<script setup lang="ts">
import { Draggable } from 'gsap/Draggable';
import { variants } from '@catppuccin/palette';
import { gsap } from 'gsap';
import goodNightImg from '~/assets/img/GoodNight.jpg';
import sduOneHourImg from '~/assets/img/SDUOneHour.png';
import { ProjectGoodNight, ProjectSduOneHour } from '#components';

const parentEl = ref<HTMLDivElement>();
const el = ref<HTMLDivElement>();
const dragContainer = ref<HTMLDivElement>();

const projects = reactive([
  {
    name: '晚安计划',
    img: goodNightImg,
    component: shallowRef(ProjectGoodNight),
    active: false
  },
  {
    name: '山大一小时',
    img: sduOneHourImg,
    component: shallowRef(ProjectSduOneHour),
    active: false
  }
]);

onMounted(() => {
  if (!dragContainer.value) {
    return;
  }
  Draggable.create('.draggable', {
    bounds: dragContainer.value,
    edgeResistance: 0.65,
    type: 'x,y',
    inertia: true,
    onClick: evt => {
      const index = evt.target.dataset.projectIndex;
      if (!index) {
        return;
      }
      const project = projects[index];
      project.active = true;
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: parentEl.value,
      start: 'top bottom',
      end: 'top top-=720',
      scrub: 1
    }
  });

  tl.fromTo(
    '.draggable',
    {
      x() {
        return (Math.random() - 0.5) * 1000 + 300;
      },
      y() {
        return (Math.random() - 0.5) * 1000 + 300;
      }
    },
    {
      x() {
        return (dragContainer.value?.clientWidth ?? 1000) / 2;
      },
      y() {
        return 0;
      },
      duration: 1
    }
  );
});
</script>

<template>
  <div ref="parentEl" class="h-200vh relative">
    <div ref="el" class="h-100vh sticky top-0">
      <h2 class="text-8 sm:text-12 h-2/10 w-full relative">
        <span class="mx-auto absolute bottom-6 left-1/2 translate-x--1/2">
          我们的作品
        </span>
      </h2>
      <div ref="dragContainer" class="top-24 w-full h-8/10">
        <template v-for="(project, index) in projects" :key="project.name">
          <VCard
            class="w-fit h-fit draggable absolute"
            :color="variants.mocha.surface0.hex"
          >
            <VCardTitle class="text-center text-4 py-0">
              {{ project.name }}
            </VCardTitle>
            <div class="px-1 pb-1">
              <img
                :src="project.img"
                class="max-h-80 max-w-80"
                :data-project-index="index"
              />
            </div>
          </VCard>

          <VDialog v-model="project.active">
            <VCard :color="variants.mocha.surface0.hex">
              <VCardTitle class="text-center text-4 py-0">
                {{ project.name }}
              </VCardTitle>
              <component :is="project.component"></component>
            </VCard>
          </VDialog>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
