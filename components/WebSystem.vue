<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const container = ref<HTMLDivElement>();
const svgEl = ref<SVGElement>();
const pcEl = ref<HTMLDivElement>();
const position = ref({
  xPercent: 50,
  yPercent: 50
});
const containerSize = useElementSize(container);
const centerOffset = ref({ x: 0, y: 0 });

const lines = reactive<
  {
    name: string;
    r: number | string;
    imgSrc: string;
    pathEl?: SVGCircleElement;
    ObjEl?: Element;
  }[]
>([
  {
    name: 'react',
    r: '70%',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
  },
  {
    name: 'vue',
    r: '60%',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg'
  },
  {
    name: 'vue2',
    r: '50%',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg'
  },
  {
    name: 'react3',
    r: '40%',
    imgSrc:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg'
  }
]);

onMounted(() => {
  if (!container.value) {
    return;
  }
  const tl = gsap.timeline({ defaults: { duration: 60 } });
  const initedLabel = 'inited';
  tl.add(initedLabel);

  lines.forEach(line => {
    if (!line.pathEl || !line.ObjEl) {
      return;
    }
    tl.fromTo(
      line.ObjEl,
      { xPercent: -50, yPercent: -50 },
      {
        motionPath: {
          path: MotionPathPlugin.convertToPath(line.pathEl, false)[0],
          start: 0,
          end: 1
        },
        ease: 'none',
        repeat: -1
      },
      initedLabel
    );
  });

  if (svgEl.value) {
    container.value.addEventListener('mousemove', evt => {
      gsap.to('.ws-obj', {
        duration: 1,
        x(i) {
          const offset =
            evt.clientX - (window.innerWidth / 100) * position.value.xPercent;
          return (offset / window.innerWidth) * (lines.length - i + 4) * 20;
        },
        y(i) {
          const offset =
            evt.clientY - (window.innerHeight / 100) * position.value.yPercent;
          return (offset / window.innerHeight) * (lines.length - i + 4) * 20;
        }
      });
    });
  }

  if (pcEl.value) {
    container.value.addEventListener('mousemove', evt => {
      const offsetX =
        evt.clientX - (window.innerWidth / 100) * position.value.xPercent;
      const offsetY =
        evt.clientY - (window.innerHeight / 100) * position.value.yPercent;

      gsap.to(centerOffset.value, {
        duration: 1,
        x: (offsetX / window.innerWidth) * 50,
        y: (offsetY / window.innerHeight) * 50
      });
    });
  }
});
</script>

<template>
  <div>
    <div ref="container" class="bg-black h-full w-full relative">
      <div class="w-full h-full absolute grid place-items-center">
        <ParticleCircle
          ref="pcEl"
          :height="containerSize.height.value * 0.8"
          :width="containerSize.width.value * 0.8"
          :amount="100"
          :center-offset="centerOffset"
          :color="variants.latte.green.hex"
        ></ParticleCircle>
      </div>

      <svg ref="svgEl" class="web-system-svg" height="100%" width="100%">
        <defs>
          <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop
              offset="10%"
              :style="{ stopColor: variants.latte.teal.hex, stopOpacity: 0.9 }"
            />
            <stop
              offset="99%"
              :style="{ stopColor: variants.latte.green.hex, stopOpacity: 0.9 }"
            />
          </linearGradient>
          <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop
              offset="25%"
              style="stop-color: rgb(0, 255, 200); stop-opacity: 0.1"
            />
            <stop
              offset="99%"
              style="stop-color: rgb(200, 255, 0); stop-opacity: 0.2"
            />
          </linearGradient>
        </defs>

        <rect fill="url(#grad2)" x="0" y="0" width="100%" height="100%"></rect>

        <template v-for="line in lines" :key="line.name">
          <g class="ws-obj">
            <circle
              :ref="
                el => {
                  line.pathEl = el as SVGCircleElement;
                }
              "
              :r="line.r"
              :cx="`${position.xPercent}%`"
              :cy="`${position.yPercent}%`"
              fill="none"
              stroke-width="2"
              stroke="url(#grad1)"
            />
          </g>

          <g
            :ref="
              el => {
                line.ObjEl = el as Element;
              }
            "
            class="ws-obj"
          >
            <image
              :xlink:href="line.imgSrc"
              width="40"
              height="40"
              :x="`${position.xPercent}%`"
              :y="`${position.yPercent}%`"
            />
          </g>
        </template>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
