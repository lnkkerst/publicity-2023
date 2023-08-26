<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = withDefaults(
  defineProps<{
    trigger?: string | HTMLElement;
  }>(),
  {}
);

const parentEl = ref<HTMLDivElement>();
const el = ref<HTMLDivElement>();
const textEl = ref<HTMLParagraphElement>();
const textContent = ref('');
const tl = gsap.timeline({
  defaults: {
    duration: 0.2
  }
});

watchOnce(
  () => props.trigger,
  trigger => {
    if (!props.trigger) {
      return;
    }
    ScrollTrigger.create({
      trigger,
      start: 'bottom 39%',
      onEnter: () => {
        animateText();
      },
      once: true
    });
  }
);

function animateText() {
  if (!textEl.value) {
    return;
  }
  gsap.to(textEl.value, {
    '--typeCursorOpacity': 1,
    duration: 0.4,
    ease: 'none',
    yoyo: true,
    repeat: -1
  });
  const text =
    `      山东大学学生在线网络文化工作室是学生工作部指导下的学生独立自主开发、管理的学生组织。
      0nlineTek Web隶属于学生在线技术工程事业群，主要负责Web相关业务——网站，小程序，APP的研发与维护；成员主要分布在中心，兴隆山，洪家楼，趵突泉校区，掌握多种计算机语言，熟练使用主流开发及协作工具，积极探索新兴技术，各有所长，一起打造面向全校的，服务同学的，实用的，现代的网络产品。`.trim();
  const tmp = { x: 0 };
  text.split('').forEach(c => {
    let s = `<span>${c}</span>`;
    if (c === ' ') {
      s = '&nbsp';
    } else if (c === '\n') {
      s = '<br />';
    }
    tl.to(tmp, {
      duration: 0.05,
      onComplete: () => {
        if (!textEl.value) {
          return;
        }
        textContent.value += s;
      }
    });
  });
}

onMounted(() => {});
</script>

<template>
  <div ref="parentEl" class="h-250vh relative">
    <div ref="el" class="h-100vh sticky top-0 grid place-items-center">
      <div class="sm:text-6 text-5 w-4/5 max-w-540px">
        <div class="text-center text-8 sm:text-10 p-sm">关于我们</div>
        <p
          ref="textEl"
          class="inline-block text-content"
          v-html="textContent"
        ></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-content {
  &::after {
    content: '|';
    top: 0;
    right: -0.5em;
    height: 100%;
    color: white;
    text-shadow: 0 0 5px #000;
    opacity: var(--typeCursorOpacity);
  }
}
</style>
