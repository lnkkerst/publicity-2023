<script setup lang="tsx">
import { variants } from '@catppuccin/palette';

type ArrowDirection = 'up' | 'down' | 'left' | 'right';

const props = withDefaults(defineProps<{ direction: ArrowDirection }>(), {
  direction: 'down'
});

const rotate = computed(() => {
  return { up: 0, right: 90, down: 180, left: 270 }[props.direction];
});

const Arrow = defineComponent({
  props: {
    direction: {
      type: String as PropType<ArrowDirection>,
      required: true
    }
  },
  setup(props) {
    const style = computed(() => {
      const rotate = {
        right: '0deg',
        down: '90deg',
        left: '180deg',
        up: '270deg'
      }[props.direction];
      return {
        transform: `rotate(${rotate})`
      };
    });
    return () => (
      <div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
          fill={variants.latte.base.hex}
          style={style.value}
        >
          <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
        </svg>
      </div>
    );
  }
});
</script>

<template>
  <div>
    <div
      class="relative h-18 w-18 grid place-items-center"
      :style="{ transform: `rotate(${rotate}deg)` }"
    >
      <Arrow
        v-for="i in 3"
        :key="i"
        v-motion="{
          initial: {
            opacity: 0,
            y: 100
          },
          enter: {
            opacity: (3 - i + 1) * 0.33,
            y: 0,
            transition: {
              delay: (i - 1) * 50,
              duration: 300
            }
          },
          levitate: {
            y: 15,
            transition: {
              duration: 3000,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'mirror'
            }
          }
        }"
        direction="up"
        class="w-10 absolute"
        :style="{ top: `${(i - 1) * 15}px` }"
      />
    </div>
  </div>
</template>

<style scoped></style>
