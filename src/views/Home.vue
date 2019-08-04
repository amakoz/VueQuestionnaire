<template>
    <div class="flex">
        <main>
            Home
        </main>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State, Action } from 'vuex-class';
    import { AppState } from '@/store/app/types';
    const namespace: string = 'app';

    @Component
    export default class Home extends Vue {
        @State('app') app!: AppState;
        @Action('setIntro', { namespace }) setIntro: any;

        mounted() {
            this.setIntro(true);
        }
    }
</script>
