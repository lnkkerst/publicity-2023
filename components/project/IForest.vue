<script setup lang="ts">
import detailImg0 from '~/assets/img/iforest/thumbnail.jpg';
import detailImg1 from '~/assets/img/iforest/detail-1.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center">iForest - i森林</VCardTitle>
      <VCardText>
        <div class="grid grid-cols-2 gap-2">
          <div class="indent-8">
            <p>iForest 是由 Kynix 开发的一款云种树小程序。</p>
            <p>该项目目前正在重构阶段。</p>
          </div>
          <div class="img-container grid grid-cols-2 gap-2">
            <img :src="detailImg0" />
            <img :src="detailImg1" />
          </div>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
.img-container {
  img {
    --at-apply: 'border-solid border-2';
    border-color: var(--ctp-mocha-green);
    max-height: 24em;
  }
}
</style>
