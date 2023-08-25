<script setup lang="ts">
import detailImg0 from '~/assets/img/dual-partner/thumbnail.jpg';
import detailImg1 from '~/assets/img/dual-partner/detail-1.jpg';
import detailImg2 from '~/assets/img/dual-partner/detail-2.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center">决斗吧，对接人！</VCardTitle>
      <VCardText class="overflow-auto">
        <div class="grid grid-cols-2 py-2 gap-2">
          <div class="indent-8">
            <p>“稽鸽鸽” 2023 年最新企划！</p>
            <p>为您带来全新的卡牌游戏！</p>
          </div>
          <div
            class="img-container grid grid-cols-2 grid-rows-2 gap-2 place-items-center"
          >
            <img :src="detailImg0" />
            <img :src="detailImg1" />
            <img :src="detailImg2" />
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
