<template>
  <div id="app">
    <main-header />

    <div class="main-container container">
      <blog-side-field />
      <router-view />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

import MainHeader from '@components/main-header';
import BlogSideField from '@components/blog-side-field';

@Component({
  components: {
    MainHeader,
    BlogSideField
  }
})
export default class App extends Vue {}
</script>
