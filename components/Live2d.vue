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
const loading = ref(true);

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
      'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Pio/index.json'
    );
    model.scale = { x: props.scale, y: props.scale };
    app.renderer.resize(model.width, model.height);
    app.stage.addChild(model);
    loading.value = false;
  });
});
</script>

<template>
  <div ref="container" class="w-fit h-fit z-100 relative">
    <VOverlay
      contained
      scroll-strategy="none"
      :model-value="loading"
      class="grid place-items-center"
    >
      <VProgressCircular indeterminate size="large"></VProgressCircular>
    </VOverlay>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped></style>
