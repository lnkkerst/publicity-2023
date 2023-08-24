<script setup lang="ts">
import { Application, Ticker } from 'pixi.js';

const props = withDefaults(
  defineProps<{
    scale?: number;
  }>(),
  { scale: 1 }
);

const container = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();

onMounted(async () => {
  if (!canvas.value) {
    return;
  }
  const app = new Application({
    view: canvas.value,
    backgroundAlpha: 0
  });
  import('pixi-live2d-display').then(async live2d => {
    live2d.Live2DModel.registerTicker(Ticker);
    const model = await live2d.Live2DModel.from(
      '/live2d_models/Pio/index.json'
    );
    model.scale = { x: props.scale, y: props.scale };
    app.renderer.resize(model.width, model.height);
    app.stage.addChild(model);
  });
});
</script>

<template>
  <div ref="container" class="w-fit h-fit z-100">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped></style>
