<template>
  <div class="main-header" :class="{'has-border': isBorderShow}">
    <div class="container">
      <el-menu class="header-wrapper" :router="true" mode="horizontal">
        <el-menu-item index="/">
          RainCruise / 甘雨田
        </el-menu-item>

        <div class="header-gap" />

        <el-submenu class="menu-wrapper" popper-class="submenu-popper" index="">
          <template slot="title">
            <i class="iconfont icon-menu" />
          </template>

          <el-menu-item index="/blogs">
            My Blogs
          </el-menu-item>
          <el-menu-item index="/about">
            About Me
          </el-menu-item>
          <el-menu-item index="/contact">
            Contact Me
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'MainHeader'
})
export default class MainHeader extends Vue {
  private isBorderShow: boolean = false

  created(): void {
    const vm = this;

    window.addEventListener('scroll', () => {
      vm.isBorderShow = window.scrollY > 100;
    });
  }
}
</script>

<style lang="scss">
.main-header {
  position: fixed;
  width: 100%;
  background-color: $white;

  &.has-border {
    box-shadow: 0 0 2px 0 $gray-border-color;
  }

  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $header-height;
    color: $black;

    span {
      opacity: 0.6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    .header-gap {
      flex: 1;
    }

    .menu-wrapper {
      .iconfont {
        opacity: 0.6;
        color: $black !important;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

.submenu-popper {
  text-align: center;

  .el-menu--popup-bottom-start {
    min-width: unset !important;
    padding: 16px;

    .el-menu-item {
      padding: 0 !important;
    }
  }
}
</style>
