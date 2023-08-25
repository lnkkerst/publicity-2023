<script setup lang="ts">
import detailImg0 from '~/assets/img/draw-2023/thumbnail.jpg';
import detailImg1 from '~/assets/img/draw-2023/detail-1.jpg';
import detailImg2 from '~/assets/img/draw-2023/detail-2.jpg';
import detailImg3 from '~/assets/img/draw-2023/detail-3.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center">2023 新春上上签</VCardTitle>
      <VCardText class="overflow-auto">
        <div class="grid grid-cols-2 py-2 gap-2">
          <div class="indent-8">
            <p>回答问题，抽取你的新年运势签！</p>
            <p>新手也能完成的项目！</p>
            <div class="flex items-center flex-col mt-4">
              <img :src="qrImg" class="max-h-24" />
            </div>
          </div>
          <div
            class="img-container grid grid-cols-2 grid-rows-2 gap-2 place-items-center"
          >
            <img :src="detailImg0" />
            <img :src="detailImg1" />
            <img :src="detailImg2" />
            <img :src="detailImg3" />
          </div>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.img-container {
  img {
    --at-apply: 'border-solid border-1';
    border-color: var(--ctp-mocha-lavender);
    max-height: 16em;
  }
}
</style>
