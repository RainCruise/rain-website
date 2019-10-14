<template>
  <div id="app">
    <main-header />
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'" />
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@components/HelloWorld';
import MainHeader from '@components/main-header';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainHeader
  }
};
</script>
