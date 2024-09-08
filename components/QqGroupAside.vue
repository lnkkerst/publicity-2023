<script setup lang="ts">
import QqGroupXlsQrImg from '~/assets/img/qqgroupqr-xls.png';
import QqGroupXlsWebQrImg from '~/assets/img/qqgroupqr-xls.png';

const active = ref(true);

const items = [
  {
    url: 'https://qm.qq.com/q/3Jupquv8TK',
    img: QqGroupXlsWebQrImg,
    btnText: '点击加入纳新QQ群(兴隆山Web)',
    detailText: '群号：764662729'
  },
  {
    url: 'https://qm.qq.com/q/vNE4UR4mYK',
    img: QqGroupXlsQrImg,
    btnText: '点击加入纳新QQ群(学线兴隆山总群)',
    detailText: '群号：867116942'
  }
];
</script>

<template>
  <div>
    <div
      class="fixed right-0 top-0 z-201 transition-all duration-300"
      :style="{
        transform: active ? '' : 'translateX(calc(100% - 1.5rem))'
      }"
    >
      <VCard class="!rounded-r-0">
        <div class="flex">
          <div
            v-ripple
            class="cursor-pointer grid place-items-center w-6"
            @click="active = !active"
          >
            <Icon
              v-if="!active"
              name="material-symbols:keyboard-double-arrow-left"
            ></Icon>
            <Icon
              v-else
              name="material-symbols:keyboard-double-arrow-right"
            ></Icon>
          </div>
          <div class="flex flex-col">
            <div
              v-for="item in items"
              :key="item.url"
              class="flex flex-row items-center"
            >
              <div class="p-1">
                <img class="h-14" :src="item.img" />
              </div>
              <div>
                <VBtn
                  :href="item.url"
                  target="_blank"
                  variant="text"
                  size="small"
                >
                  {{ item.btnText }}
                </VBtn>
                <p class="text-3.5 text-center">{{ item.detailText }}</p>
              </div>
            </div>
          </div>
        </div>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
