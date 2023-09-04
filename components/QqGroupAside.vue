<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import QqGroupXlsQrImg from '~/assets/img/qqgroupqr-xls.png';
import QqGroupZxQrImg from '~/assets/img/qqgroupqr-zx.png';

const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits(['update:modelValue']);
const active = ref(true);

const items = [
  {
    url: 'https://qm.qq.com/q/lJye8TGb74',
    img: QqGroupXlsQrImg,
    btnText: '点击加入纳新QQ群(兴隆山校区)',
    detailText: '群号：906743256'
  },
  {
    url: 'https://qm.qq.com/q/QLLONiIvwA',
    img: QqGroupZxQrImg,
    btnText: '点击加入纳新QQ群(中心校区和其他)',
    detailText: '群号：906965915'
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
              name="material-symbols:keyboard-double-arrow-left"
              v-if="!active"
            ></Icon>
            <Icon
              v-else
              name="material-symbols:keyboard-double-arrow-right"
            ></Icon>
          </div>
          <div class="flex flex-col">
            <div v-for="item in items" class="flex flex-row items-center">
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
