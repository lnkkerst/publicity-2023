<script setup lang="ts">
import uniappIcon from '~/assets/img/uniapp-icon.png';
const icons = [
  'logos:visual-studio-code',
  'logos:webstorm',
  'logos:pycharm',
  'logos:vim',
  'skill-icons:neovim-dark',
  'logos:html-5',
  'logos:css-3',
  'logos:javascript',
  'logos:vue',
  'logos:python',
  'devicon:fastapi',
  'logos:mysql',
  'logos:postgresql',
  'tabler:brand-miniprogram',
  'logos:linux-tux',
  'logos:nginx',
  'vscode-icons:file-type-caddy',
  'logos:docker-icon',
  'logos:typescript-icon',
  'logos:nuxt-icon',
  'logos:react',
  'logos:ionic-icon',
  'logos:electron'
];
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="col-span-2 indent-8 text-4 sm:text-5 px-6 py-4">
      <h2 class="text-center sm:text-8 text-5 my-2">学习一门技术</h2>
      <p>想要制作自己网站？想要制作一个小程序？想要搭建自己的服务器？</p>
      <p>小孩子才做选择题，俺全都要学！</p>
      <p>
        学长学姐每周手把手教学，每时每刻在线答疑，
        让你知道什么是半专业的保姆教学团队！
      </p>
    </div>
    <div class="sm:text-10 text-7 icons">
      <template v-for="icon in icons" :key="icon">
        <Icon :name="icon"></Icon>
        <!-- <Icon v-if="index % 4 === 0" v-motion-roll-top :name="icon"></Icon> -->
        <!-- <Icon -->
        <!--   v-else-if="index % 4 === 1" -->
        <!--   v-motion-roll-right -->
        <!--   :name="icon" -->
        <!-- ></Icon> -->
        <!-- <Icon -->
        <!--   v-else-if="index % 4 === 2" -->
        <!--   v-motion-roll-bottom -->
        <!--   :name="icon" -->
        <!-- ></Icon> -->
        <!-- <Icon v-else v-motion-roll-left :name="icon"></Icon> -->
      </template>
      <img :src="uniappIcon" class="inline-block h-1em w-1em" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  * {
    --at-apply: p-1;
  }
}
</style>
