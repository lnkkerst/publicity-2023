<script setup lang="ts">
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { InteractionManager, extensions } from 'pixi.js';

if (process.client) {
  gsap.registerPlugin(
    MotionPathPlugin,
    PixiPlugin,
    ScrollTrigger,
    Draggable,
    DrawSVGPlugin,
    ScrollSmoother,
    InertiaPlugin
  );

  extensions.add(InteractionManager);
}

useHead({
  title: '0nlineTek Web - 山东大学学生在线',
  script: [
    {
      src: 'https://fastly.jsdelivr.net/npm/live2dcubismcore@1.0.2/live2dcubismcore.min.js'
    },
    {
      src: 'https://fastly.jsdelivr.net/npm/live2dcubismcore@1.0.2/live2d.min.js'
    },
    {
      src: 'https://hm.baidu.com/hm.js?a304ec8a3bc39058eea0ae6eb8b95378'
    }
  ]
});

// 修复移动设备因为输入法弹出导致视口高度变化引起的 bug
onMounted(() => {
  setTimeout(() => {
    const viewport = document.querySelector(
      'meta[name=viewport]'
    ) as HTMLMetaElement;
    if (viewport) {
      viewport.setAttribute(
        'content',
        `${viewport.content}, height=${window.innerHeight}`
      );
    }
  }, 2000);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
