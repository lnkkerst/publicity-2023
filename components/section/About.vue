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
    '    山东大学学生在线网络文化工作室成立于 2000 年，是在山东大学党委学生工作部的领导下学生独立自主开发、运营的学生组织。\n    0nlineTek Web 隶属于兴隆山校区学生在线技术工程工作站，主要负责 Web 相关业务（网站、小程序、APP），的开发。';
  const tmp = { x: 0 };
  text.split('').forEach(c => {
    let s = `<span>${c}</span>`;
    if (c === ' ') {
      s = '&nbsp';
    } else if (c === '\n') {
      s = '<br />';
    }
    tl.to(tmp, {
      duration: 0.1,
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
