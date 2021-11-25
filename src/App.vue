<template>
  <div id="root">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
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
