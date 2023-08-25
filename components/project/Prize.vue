<script setup lang="ts">
import detailImg0 from '~/assets/img/prize/thumbnail.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center">抽奖</VCardTitle>
      <VCardText class="overflow-auto">
        <div class="grid grid-cols-2 py-2 gap-2">
          <div class="indent-8">
            <p>一个简单的抽奖页面，用于展台等活动。</p>
            <p>正在积极重构中。</p>
          </div>
          <div class="img-container grid gap-2 place-items-center">
            <img :src="detailImg0" />
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
    max-height: 32em;
  }
}
</style>
