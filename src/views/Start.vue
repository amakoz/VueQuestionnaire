<template>
  <div class="start">
    <h1>This is an start page</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Action } from 'vuex-class';
  import { AppState } from '@/store/app/types';
  const namespace: string = 'app';

  @Component
  export default class Start extends Vue {
    @State('app') app!: AppState;
    @Action('setIntro', { namespace }) setIntro: any;

    mounted() {
      this.setIntro(false);
    }
  }
</script>