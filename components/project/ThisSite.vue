<script setup lang="ts">
import detailImg0 from '~/assets/img/this-site/thumbnail.jpg';
import detailImg1 from '~/assets/img/this-site/detail-1.jpg';
</script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center py-2">
        0nlineTek Web 2024 年的宣传页面
      </VCardTitle>
      <VCardText>
        <div class="grid grid-cols-2 gap-4 p-2">
          <div class="indent-8">
            <p>RT.</p>
            <p>由 lnk. 开发，发现 bug 可以联系 qq1593510417 狠狠羞辱它 😠</p>
            <p>不要忘记到页面最底端找 Pio 酱玩喵～</p>
          </div>

          <div class="img-container grid grid-rows-2 gap-2">
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
