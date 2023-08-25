<script setup lang="ts">
import detailImg0 from '~/assets/img/web-vs/thumbnail.jpg';
import detailImg1 from '~/assets/img/web-vs/detail-1.jpg';
import detailImg2 from '~/assets/img/web-vs/detail-2.jpg';
import detailImg3 from '~/assets/img/web-vs/detail-3.jpg';
import qrImg from '~/assets/img/web-vs/qr.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center">Web 语言大战甲方</VCardTitle>
      <VCardText class="overflow-auto">
        <div class="grid grid-cols-2 py-2 gap-2">
          <div class="indent-8">
            <p>来自“稽鸽鸽”的礼物</p>
            <p>塔防类休闲游戏</p>
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
