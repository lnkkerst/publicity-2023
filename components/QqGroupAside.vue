<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import QqGroupQrImg from '~/assets/img/qqgroupqr.png';

const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits(['update:modelValue']);
const active = ref(true);
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
            :style="{ backgroundColor: variants.mocha.crust.hex }"
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
          <div class="flex flex-row items-center justify-center">
            <div class="p-1">
              <img class="h-14" :src="QqGroupQrImg" />
            </div>
            <div>
              <VBtn
                href="https://qm.qq.com/q/lJye8TGb74"
                target="_blank"
                variant="text"
              >
                点此加入纳新QQ群
              </VBtn>
              <p class="text-3.5 text-center">群号：906743256</p>
            </div>
          </div>
        </div>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
