<script setup lang="ts">
import { Draggable } from 'gsap/Draggable';
import { variants } from '@catppuccin/palette';
import { gsap } from 'gsap';
import webVsImg from '~/assets/img/web-vs/thumbnail.jpg';
import iForestImg from '~/assets/img/iforest/thumbnail.jpg';
import thisSiteImg from '~/assets/img/this-site/thumbnail.jpg';
import draw2023Img from '~/assets/img/draw-2023/thumbnail.jpg';
import graduationPictureImg from '~/assets/img/graduation-picture/thumbnail.jpg';
import prizeImg from '~/assets/img/prize/thumbnail.jpg';
import strangeYouImg from '~/assets/img/strange-you/thumbnail.jpg';
import andMoreImg from '~/assets/img/and-more/thumbnail.jpg';
import dualPartnerImg from '~/assets/img/dual-partner/thumbnail.jpg';
import {
  ProjectAndMore,
  ProjectDraw2023,
  ProjectDualPartner,
  ProjectGraduationPicture,
  ProjectIForest,
  ProjectPrize,
  ProjectStrangeYou,
  ProjectThisSite,
  ProjectWebVs
} from '#components';

const parentEl = ref<HTMLDivElement>();
const el = ref<HTMLDivElement>();
const dragContainer = ref<HTMLDivElement>();

const projects = reactive([
  {
    name: '还有更多',
    img: andMoreImg,
    component: shallowRef(ProjectAndMore),
    active: false
  },
  {
    name: 'Web 语言大战甲方',
    img: webVsImg,
    component: shallowRef(ProjectWebVs),
    active: false
  },
  {
    name: 'iForest',
    img: iForestImg,
    component: shallowRef(ProjectIForest),
    active: false
  },
  {
    name: '你正在看的这个页面',
    img: thisSiteImg,
    component: shallowRef(ProjectThisSite),
    active: false
  },
  {
    name: '新春上上签',
    img: draw2023Img,
    component: shallowRef(ProjectDraw2023),
    active: false
  },
  {
    name: '毕业照报名系统',
    img: graduationPictureImg,
    component: shallowRef(ProjectGraduationPicture),
    active: false
  },
  {
    name: '展台抽奖系统',
    img: prizeImg,
    component: shallowRef(ProjectPrize),
    active: false
  },
  {
    name: '陌生的你',
    img: strangeYouImg,
    component: shallowRef(ProjectStrangeYou),
    active: false,
    disabled: true
  },
  {
    name: '决斗吧，对接人！',
    img: dualPartnerImg,
    component: shallowRef(ProjectDualPartner),
    active: false
  }
]);

onMounted(() => {
  if (!dragContainer.value) {
    return;
  }
  const height = dragContainer.value?.clientHeight ?? 320;
  const width = dragContainer.value?.clientWidth ?? 320;

  const r = Math.round(Math.sqrt(height ** 2 + width ** 2) / 2);
  const c = { x: width / 2, y: height / 2 };
  const startPos = Array.from({ length: projects.length }, () => {
    const rotate = Math.random() * 360;
    let x = r * Math.sin((rotate / 180) * Math.PI);
    let y = r * Math.cos((rotate / 180) * Math.PI);
    x += c.x;
    y += c.y;
    if (x > c.x) {
      x += c.x;
    } else {
      x -= c.x;
    }
    return { x, y };
  });

  gsap.fromTo(
    '.draggable',
    {
      // top: i => startPos[i].x,
      // left: i => startPos[i].y
      top: 0,
      left: 0
    },
    {
      scrollTrigger: {
        trigger: parentEl.value,
        start: 'top 50%'
      },
      x() {
        const min = height / 20;
        const max = min + height * 0.5;
        return Math.random() * (max - min) + min;
      },
      y() {
        const min = width / 20;
        const max = min + width * 0.6;
        return Math.random() * (max - min) + min;
      },
      duration: 0.5,
      onComplete() {
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
      }
    }
  );
});
</script>

<template>
  <div ref="parentEl" class="h-200vh relative">
    <div ref="el" class="h-100vh sticky top-0">
      <h2 class="text-8 sm:text-12 h-2/10 w-full absolute">
        <span class="mx-auto absolute bottom-6 left-1/2 translate-x--1/2">
          我们的作品
        </span>
      </h2>
      <div ref="dragContainer" class="top-2/10 w-full h-8/10 absolute">
        <template v-for="(project, index) in projects" :key="project.name">
          <VCard
            v-if="!project.disabled"
            class="w-fit h-fit draggable !absolute top-0 left-0"
            :color="variants.mocha.surface0.hex"
          >
            <VCardTitle class="text-center text-4 py-0">
              {{ project.name }}
            </VCardTitle>
            <div class="px-1 pb-1 grid place-items-center">
              <img
                :src="project.img"
                class="max-h-60 max-w-40 md:max-h-80 md:max-w-80"
                :data-project-index="index"
              />
            </div>
          </VCard>
        </template>
      </div>

      <VDialog
        v-for="project in projects"
        :key="project.name"
        v-model="project.active"
        scroll-strategy="none"
        class="z-100"
        width="auto"
      >
        <component
          :is="project.component"
          class="card-container max-w-200"
        ></component>
      </VDialog>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
