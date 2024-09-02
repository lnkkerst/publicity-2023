<script setup lang="ts">
import detailImg0 from '~/assets/img/booth-map/detail-1.jpg';
import detailImg1 from '~/assets/img/booth-map/detail-2.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center py-2">
        毕业跑展台地图
      </VCardTitle>
      <VCardText>
        <div class="grid grid-cols-2 gap-4 p-2">
          <div class="indent-8">
            <p>RT.</p>
            <p>2024 年毕业跑{{'&'}}毕业游园活动的地图。</p>
            <p>查看排队信息～</p>
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
    --at-apply: 'border-solid border-1 max-h-80';
    border-color: var(--ctp-mocha-lavender);
  }
}
</style>
