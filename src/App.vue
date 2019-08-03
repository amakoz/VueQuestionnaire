<template>
  <div id="app" class="flex min-h-screen flex-col overflow-x-hidden">
    <nav :style="{backgroundColor: color}" ref="nav">
      <div class="flex items-center justify-center relative h-16 md:h-32 mx-4 md:mx-8">
        <img class="absolute h-12 md:h-24 object-contain max-logo max-logo--bigger"
             :style="{left: !intro ? '0' : 'auto'}"
             :src="intro ? require('@/assets/logo.png') : require('@/assets/logo_alt.png')"
             ref="themeLogo"
             alt="Logo">
      </div>
    </nav>
    <router-view class="flex-1"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
      private color: String = '#ddd';
      private intro: Boolean = true;
  }
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .max-logo {
    max-width: 70px;
    @screen sm {
      max-width: 100px;
    }
    @screen md {
      max-width: 200px;
    }

    &--bigger {
      max-width: 100%;
      @screen md {
        max-width: 320px;
      }
    }
  }
</style>
