<template>
  <div class="blog-side-field" :style="{ top: scrollTop + 'px'}">
    <router-link class="avatar-container" :to="{ name: 'about'}">
      <img :src="ColaJpg">
    </router-link>

    <div class="blog-categories">
      Blog Categories
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const ColaJpg = require('../assets/cola.jpg');

const MAX_DISTANCE: number = 48;

@Component({
  name: 'BlogSideField'
})
export default class BlogSideField extends Vue {
  private scrollTop: number = 2 * MAX_DISTANCE

  private ColaJpg = ColaJpg

  created(): void {
    const vm = this;

    window.addEventListener('scroll', () => {
      vm.scrollTop = window.scrollY > MAX_DISTANCE ? MAX_DISTANCE : 2 * MAX_DISTANCE - window.scrollY;
    });
  }
}
</script>

<style lang="scss">
.blog-side-field {
  position: fixed;
  width: 280px;
  height: 400px;
  padding: 20px 0;
  background-color: $white;
  border-radius: 2px;
  border: 1px solid $gray-font-color;
  z-index: $z-index-header;

  &:hover {
    box-shadow: 0 0 2px 0 $gray-border-color;
  }

  .avatar-container {
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }

  .blog-categories {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }
}
</style>
