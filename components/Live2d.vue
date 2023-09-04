<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import { Application, Ticker } from 'pixi.js';

const props = withDefaults(
  defineProps<{
    scale?: number;
  }>(),
  { scale: 1 }
);

defineExpose({ randomSkin });

const container = ref<HTMLDivElement>();
const canvas = ref<HTMLCanvasElement>();
const loading = ref(true);

const app = ref<Application>();
const modelJsonUrl =
  'https://fastly.jsdelivr.net/npm/live2d-widget-model@1.0.1/model/Potion-Maker/Pio/index.json';
const modelJson = await $fetch<any>(modelJsonUrl);
modelJson.url = modelJsonUrl;
const skinList = [
  'animal-costume-racoon.png',
  'animal-costume.png',
  'bunny-girl-costume-red.png',
  'bunny-girl-costume.png',
  'cake-costume-choco.png',
  'cake-costume-cream.png',
  'default-costume.png',
  'dress-costume-brown.png',
  'dress-costume.png',
  'elementary-school-costume-navy.png',
  'elementary-school-costume.png',
  'fall-dress-costume-beige.png',
  'fall-dress-costume-brown.png',
  'frill-bikini-costume-green.png',
  'frill-bikini-costume-purple.png',
  'frill-blouse-costume-green.png',
  'frill-blouse-costume-red.png',
  'furisode-costume.png',
  'halloween-costume.png',
  'hanbok-costume-pink.png',
  'hanbok-costume-red.png',
  'hanbok-costume-skyblue.png',
  'hanbok-costume-yellow.png',
  'hanbok-costume.png',
  'healer-costume.png',
  'kids-costume-navy.png',
  'kids-costume.png',
  'maid-costume-red.png',
  'maid-costume.png',
  'new2015-costume-pajamas.png',
  'new2015-costume.png',
  'night-witch-costume-black.png',
  'night-witch-costume-gray.png',
  'nightsky-costume.png',
  'overalls-costume-white.png',
  'overalls-costume.png',
  'pajamas-costume-pink.png',
  'pajamas-costume.png',
  'party-dress-costume-brown.png',
  'party-dress-costume-purple.png',
  'qipao-costume-pink.png',
  'qipao-costume-red.png',
  'ribbon-dress-costume-red.png',
  'ribbon-dress-costume-yellow.png',
  'sailor-costume-black.png',
  'sailor-costume.png',
  'sakura-costume-navy.png',
  'sakura-costume.png',
  'santa-costume-green.png',
  'santa-costume.png',
  'sarori-costume.png',
  'school-2017-costume-gray.png',
  'school-2017-costume-yellow.png',
  'school-costume-red.png',
  'school-costume.png',
  'sfc-uniform-costume-red.png',
  'sfc-uniform-costume-yellow.png',
  'shaman-costume-black.png',
  'shaman-costume-blue.png',
  'sinsiroad-shop-costume-junior.png',
  'sinsiroad-shop-costume-senior.png',
  'sorceress-costume.png',
  'sporty-hood-costume-black.png',
  'sporty-hood-costume-blue.png',
  'star-witch-costume-brown.png',
  'star-witch-costume.png',
  'succubus-costume-black.png',
  'succubus-costume-red.png',
  'sukumizu-costume-white.png',
  'sukumizu-costume.png',
  'summer-dress-costume-blue.png',
  'summer-dress-costume-white.png',
  'swimsuit-2017-costume-navy.png',
  'swimsuit-2017-costume-red.png',
  'tirami1-costume.png',
  'turtleneck-costume-red.png',
  'turtleneck-costume.png',
  'valentine-costume-brown.png',
  'valentine-costume-pink.png',
  'winter-coat-2017-costume-brown.png',
  'winter-coat-2017-costume-white.png',
  'winter-coat-costume-pink.png',
  'winter-coat-costume-white.png',
  'winter-costume-white.png',
  'winter-costume.png',
  'witch-costume-white.png',
  'witch-costume.png'
];

async function loadModel(
  { skin }: { skin?: string } = { skin: 'default-costume.png' }
) {
  loading.value = true;
  modelJson.textures = [`textures/${skin}`];
  await import('pixi-live2d-display').then(async live2d => {
    if (!app.value) {
      return;
    }
    live2d.Live2DModel.registerTicker(Ticker);
    const model = await live2d.Live2DModel.from(modelJson);
    model.scale = { x: props.scale, y: props.scale };
    app.value.stage.removeChildren();
    app.value.renderer.resize(model.width, model.height);
    app.value.stage.addChild(model);
    loading.value = false;
  });
}

async function randomSkin() {
  await loadModel({ skin: useSample(skinList) });
}

onMounted(async () => {
  app.value = new Application({
    view: canvas.value,
    backgroundAlpha: 0,
    width: 300,
    height: 300
  });

  if (!canvas.value) {
    return;
  }
  loadModel();
});
</script>

<template>
  <div ref="container" class="w-fit h-fit z-100 relative">
    <VOverlay
      contained
      scroll-strategy="none"
      :model-value="loading"
      class="flex items-center justify-center"
    >
      <VProgressCircular
        indeterminate
        size="large"
        :color="variants.mocha.lavender.hex"
      ></VProgressCircular>
    </VOverlay>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped></style>
