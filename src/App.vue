<template>
  <div id="app" :style="`background-color: ${darkMode ? '#333' : '#fff'}`">
    <n-config-provider :theme="darkMode ? darkTheme : null">
      <n-button type="info" @click="darkMode = !darkMode">213123</n-button>
      <router-view />
    </n-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { darkTheme } from 'naive-ui';

export default defineComponent({
  name: 'App',
  data() {
    return {
      darkMode: false,
      darkTheme,
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

#app {
  min-width: 100vw;
  min-height: 100vh;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #333;
}
</style>
