<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import { v4 as uuidv4 } from 'uuid';
import { Live2d } from '#components';

const live2dEl = ref<any>();
const idleMessage = [
  'Poi 酱什么都知道哦',
  '你想要问什么呢？',
  'Poi 被抓来当看板娘了 TAT',
  '关于这个页面的问题可以联系 qq1593510417 喵',
  'Ciallo～(∠・ω< )_'
];
const question = ref('');
const answerContent = ref('');
const showAnswer = ref(false);
const pinAnswer = ref(false);
const answerd = ref(false);
const sending = ref(false);

function getToken() {
  let token = localStorage.getItem('pioToken');
  if (!token) {
    token = uuidv4();
    localStorage.setItem('pioToken', token);
  }
  return token;
}

function showMessage(msg: string, timeout: number = 5000) {
  if (!msg) {
    msg = '你想要问什么呢？';
  }
  answerContent.value = msg;
  showAnswer.value = true;
  setTimeout(() => {
    showAnswer.value = false;
  }, timeout);
}

async function handleSendQuestion() {
  if (question.value.length >= 500) {
    showMessage('你问的太多了，Pio 酱反应不过来啦！');
    return;
  }
  if (question.value.length === 0) {
    showMessage('你想要问什么呢？');
    return;
  }
  answerd.value = true;
  sending.value = true;
  try {
    const res = await $fetch('/api/question', {
      method: 'post',
      body: {
        question: question.value,
        token: getToken()
      }
    });
    showMessage(res ?? '', 300 * 1000);
    sending.value = false;
    setTimeout(() => {
      answerd.value = false;
    }, 300 * 1000);
    question.value = '';
  } catch (e) {
    showMessage('Pio 酱宕机了 qwq');
    sending.value = false;
    answerd.value = false;
  }
}

async function handleChangeSkin() {
  try {
    await live2dEl.value.randomSkin?.();
    showMessage('我的新衣服好看吗？');
  } catch (_e) {
    showMessage('换装失败了...');
  }
}

onMounted(() => {
  useIntervalFn(() => {
    if (showAnswer.value) {
      return;
    }
    if (answerd.value) {
      return;
    }
    showMessage(useSample(idleMessage) ?? ',,,');
  }, 15000);
});
</script>

<template>
  <div>
    <div class="h-100vh relative">
      <h2 class="text-center text-8 pt-12 px-4">
        还有什么问题，就来问问全知的 Poi 酱吧！
      </h2>
      <div class="absolute bottom-0 w-full flex flex-col items-center">
        <VCard
          variant="outlined"
          class="transition-all duration-1000 max-w-120 hover:opacity-100 mb-2"
          :style="{
            opacity: pinAnswer || showAnswer || answerd ? 1 : 0
          }"
          @mouseenter="pinAnswer = true"
          @mouseleave="(pinAnswer = false), showMessage(answerContent)"
        >
          <VCardText>
            <span>
              {{ answerContent }}
            </span>
          </VCardText>
        </VCard>
        <Live2d ref="live2dEl" :scale="0.5"></Live2d>
        <div
          class="flex w-full h-24 border-t-1"
          :style="{ borderColor: variants.mocha.text.hex }"
        >
          <textarea
            v-model="question"
            class="flex-grow m-2 p-2 resize-none"
            placeholder="在这里输入你想知道的任何东西"
          ></textarea>

          <div
            class="inline-block flex items-center justify-center text-8 px-4 w-fit"
          >
            <VBtn
              variant="outlined"
              size="large"
              :loading="sending"
              @click="handleSendQuestion"
            >
              <Icon name="material-symbols:chat" class="text-6" />
              <span class="pl-2">发送</span>
            </VBtn>
          </div>
        </div>

        <div class="absolute left-1 bottom-25 z-101">
          <VBtn
            variant="text"
            icon
            :loading="sending"
            @click="handleChangeSkin"
          >
            <Icon name="game-icons:large-dress" class="text-6" />
          </VBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
