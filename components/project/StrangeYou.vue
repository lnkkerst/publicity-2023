<script setup lang="ts">
import detailImg0 from '~/assets/img/strange-you/thumbnail.jpg';
import detailImg1 from '~/assets/img/strange-you/detail-1.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center">陌生的你</VCardTitle>
      <VCardText class="overflow-auto">
        <div class="grid grid-cols-2 py-2 gap-2">
          <div class="indent-8">
            <p>陌生的你</p>
          </div>
          <div class="img-container grid grid-cols-2 gap-2 place-items-center">
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
    --at-apply: 'border-solid border-1';
    border-color: var(--ctp-mocha-lavender);
    max-height: 32;
  }
}
</style>
