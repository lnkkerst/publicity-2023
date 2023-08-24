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
      src: 'https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js'
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js'
    }
  ]
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
