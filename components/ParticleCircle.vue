<script setup lang="ts">
import { clone } from 'remeda';
import Color from 'color';

const props = withDefaults(
  defineProps<{
    height?: number;
    width?: number;
    amount?: number;
    center?: { x: number; y: number };
    centerOffset?: { x: number; y: number };
    color?: string;
  }>(),
  {
    width: 300,
    height: 300,
    amount: 60,
    centerOffset: () => ({ x: 0, y: 0 }),
    color: '#ffffff'
  }
);
interface Point {
  r: number;
  p: { x?: number; y?: number };
  w: number;
  c: string;
  d: number;
  s: number;
}

const r = computed(() => {
  return Math.floor(Math.min(props.height, props.width) / 2);
});
const canvas = ref<HTMLCanvasElement>();
const timer = ref<NodeJS.Timer>();

onMounted(() => {
  if (!canvas.value) {
    return;
  }
  const ctx = canvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  const m = computed(() => {
    const center = props.center ?? { x: props.width / 2, y: props.height / 2 };
    center.x += props.centerOffset.x;
    center.y += props.centerOffset.y;
    return center;
  });
  const speed = 3;
  const ratio = 0.09;
  const dis = computed(() => {
    return {
      max: r.value * 0.8,
      min: r.value * 0.6
    };
  });
  const points: Point[] = [];
  const trailBuffer: Point[][] = [];
  const bufferSize = 10;

  for (let i = 0; i < props.amount; ++i) {
    points.push({
      r: (360 / props.amount) * i,
      p: {},
      w: Math.random() * 5,
      c: props.color,
      d: Math.random(),
      s: Math.random() * (speed + 5) - 5
    });
  }

  function render() {
    if (!ctx) {
      return;
    }
    ctx.fillStyle = new Color(props.color).alpha(ratio).hsl().string();
    ctx.clearRect(0, 0, props.width, props.height);
    ctx.lineCap = 'round';

    const pointsBackup: Point[] = [];
    points.forEach(p => {
      p.r += p.s;
      if (p.r > 360) {
        p.r -= 360;
      }

      const vel = {
        x:
          (p.d * (dis.value.max - dis.value.min) + dis.value.min) *
          Math.cos((p.r * Math.PI) / 180),
        y:
          (p.d * (dis.value.max - dis.value.min) + dis.value.min) *
          Math.sin((p.r * Math.PI) / 180)
      };
      if (p.p.x != null && p.p.y != null) {
        ctx.strokeStyle = p.c;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p.p.x, p.p.y);
        ctx.lineTo(m.value.x + vel.x, m.value.y + vel.y);
        ctx.stroke();
        ctx.closePath();
      }
      pointsBackup.push(clone(p));

      p.p.x = m.value.x + vel.x;
      p.p.y = m.value.y + vel.y;
    });
    trailBuffer.forEach((points, index) => {
      points.forEach(p => {
        const vel = {
          x:
            (p.d * (dis.value.max - dis.value.min) + dis.value.min) *
            Math.cos((p.r * Math.PI) / 180),
          y:
            (p.d * (dis.value.max - dis.value.min) + dis.value.min) *
            Math.sin((p.r * Math.PI) / 180)
        };
        if (p.p.x != null && p.p.y != null) {
          ctx.strokeStyle = new Color(props.color)
            .alpha((index + 1) * (1 / (bufferSize + 1)))
            .hsl()
            .string();
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.p.x, p.p.y);
          ctx.lineTo(m.value.x + vel.x, m.value.y + vel.y);
          ctx.stroke();
          ctx.closePath();
        }
      });
    });
    trailBuffer.push(pointsBackup);
    while (trailBuffer.length > bufferSize) {
      trailBuffer.shift();
    }
  }

  timer.value = setInterval(render, 1000 / 30);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<template>
  <div>
    <canvas ref="canvas" :height="props.height" :width="props.width"></canvas>
  </div>
</template>

<style scoped></style>
