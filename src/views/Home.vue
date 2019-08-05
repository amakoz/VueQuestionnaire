<template>
    <div class="flex">
        <main class="flex-1 flex items-center justify-center flex-col py-10 px-4">
            <div class="max-w-xl mx-auto mb-4 md:mb-8">
                <div class="mb-6 md:mb-10 flex items-center justify-start">
                    <img class="w-20 mr-6 md:mr-10"
                         :src="require('@/assets/logo.png')"
                         alt="">
                    <p class="text-sm md:text-lg flex-1 leading-none md:leading-normal">Progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.</p>
                </div>
                <div class="mb-6 md:mb-10 flex items-center justify-start">
                    <img class="w-20 mr-6 md:mr-10"
                         :src="require('@/assets/typescript.png')"
                         alt="">
                    <p class="text-sm md:text-lg flex-1 leading-none md:leading-normal">An open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.</p>
                </div>
                <div class="mb-6 md:mb-10 flex items-center justify-start">
                    <img class="w-20 mr-6 md:mr-10"
                         :src="require('@/assets/tailwind.png')"
                         alt="">
                    <p class="text-sm md:text-lg flex-1 leading-none md:leading-normal">Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
                </div>
            </div>
            <button @click="animate"class="btn btn--white btn--flex" :style="{borderColor: app.color}">Start <img class="inline-block ml-2" :src="require('@/assets/arrow.svg')" alt="Arrow icon">
            </button>
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

        animate() {
            this.$emit('animate');
        }
    }
</script>
