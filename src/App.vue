<template>
  <div id="root">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { getSystemAgent, isAlipayOrWechat } from '@/utils';

function handleDocumentInit() {
  getSystemAgent();
  isAlipayOrWechat();
}

onBeforeMount(() => handleDocumentInit());
</script>

<style lang="less">
@font-face {
  font-family: DIN Medium;
  font-style: normal;
  src: url('https://assets.uphicoo.com/fonts/DIN-Medium.ttf') format('truetype');
}

@font-face {
  font-family: Source Han Sans CN;
  src: url('https://mat.uphicoo.com/packages/fonts/SourceHanSansCNRegular.woff') format('woff'),
    url('https://mat.uphicoo.com/packages/fonts/SourceHanSansCNRegular.ttf') format('truetype');
}

#root {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// fade-transform
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
