<template>
    <div id="app" class="flex min-h-screen flex-col overflow-x-hidden">
        <nav :style="{backgroundColor: app.color}" ref="nav">
            <div class="flex items-center justify-center relative h-16 md:h-32 mx-4 md:mx-8">
                <img class="absolute h-12 md:h-24 object-contain max-logo max-logo--bigger"
                     :style="{left: !app.intro ? '0' : 'auto'}"
                     :src="app.intro ? require('@/assets/logo.png') : require('@/assets/logo_alt.png')"
                     ref="themeLogo"
                     alt="Logo">
                <img v-if="app.intro"
                     class="absolute h-10 md:h-24 right-0 object-contain max-logo"
                     :src="require('@/assets/typescript.png')"
                     alt="Second logo"
                     ref="companyLogo">
            </div>
        </nav>
        <transition name="fade"
                    mode="out-in"
                    @beforeLeave="beforeLeave"
                    @enter="enter"
                    @afterEnter="afterEnter">
            <router-view @animate="animate" class="flex-1"/>
        </transition>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State } from 'vuex-class';
    import { AppState } from '@/store/app/types';
    import { TimelineLite } from 'gsap';
    import { Power2 } from 'gsap/EasePack';

    @Component
    export default class App extends Vue {
        @State('app') app!: AppState;

        beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
        }

        enter(element) {
            const {height} = getComputedStyle(element);
            element.style.height = this.prevHeight;
            setTimeout(() => {
                element.style.height = height;
            });
        }

        afterEnter(element) {
            element.style.height = 'auto';
        }

        animate() {
            let tl = new TimelineLite();
            tl.to(this.$refs.themeLogo, 0.8, {left: '0', ease: Power2.easeInOut});
            tl.to(this.$refs.companyLogo, 0.8, {opacity: 0, delay: -0.8, ease: Power2.easeInOut});
            tl.to(this.$refs.nav, 0.5, {backgroundColor: this.app.color, delay: -0.3});
            tl.eventCallback("onComplete", () => {
                this.$router.push({name: 'start'})
            });
        }
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
