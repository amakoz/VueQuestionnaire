<template>
  <div id="app" class="flex min-h-screen flex-col overflow-x-hidden">
    <nav :style="{backgroundColor: color}" ref="nav">
      <div class="flex items-center justify-center relative h-16 md:h-32 mx-4 md:mx-8">
        Test
      </div>
    </nav>
    <router-view class="flex-1"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
      color: String = '#ddd';
  }
</script>
