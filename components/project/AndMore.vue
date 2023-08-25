<script setup lang="ts"></script>

<template>
  <div>
    <VCard>
      <VCardTitle class="text-center py-2">更多作品</VCardTitle>
      <VCardText>
        <p>这里只列出了最近一年（当前 2023 年 9 月左右）的项目。</p>
        <p>除此之外还有部分娱乐项目、个人项目未列出。</p>
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
