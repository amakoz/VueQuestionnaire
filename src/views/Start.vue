<template>
  <main class="flex-1 flex flex-col">
    <template>
      <!--<div-->
              <!--v-if="!isFinished"-->
              <!--class="flex flex-col md:flex-row items-start md:items-center justify-center h-auto md:h-10 bg-gray-600 text-white py-3 md:py-0 px-6 md:px-8"-->
      <!--&gt;-->
        <!--<div class="flex items-center justify-center md:mr-auto mb-2 md:mb-0">-->
          <!--<p class="text-sm md:text-base">-->
            <!--Część {{ partNumber }} z {{ numberOfParts }}-->
          <!--</p>-->
          <!--<div class="h-1 md:h-3 w-1 md:w-3 mx-2 md:mx-4"-->
               <!--:style="{backgroundColor: examRound.study_type.color}">-->
          <!--</div>-->
          <!--<p class="text-sm md:text-base">-->
            <!--Sekcja {{ numberOfSectionInPart }} z {{ numberOfSectionsInPart }}-->
          <!--</p>-->
        <!--</div>-->
        <!--<div class="md:absolute md:mx-auto flex items-center justify-center">-->
          <!--<p class="mr-4 w-24 md:text-right">-->
            <!--Pytanie {{ activeQuestion - 1 }}/{{ numberOfQuestionsInSectionTotal - 1 }}-->
          <!--</p>-->
          <!--<div class="flex items-center justify-center h-4" style="width: 31vw; min-width: 160px">-->
                        <!--<span v-for="(item, index) in numberOfQuestionsInSectionTotal"-->
                              <!--:key="index"-->
                              <!--class="w-full h-full"-->
                              <!--:class="{'border-r border-black': index !== numberOfQuestionsInSectionTotal-1}"-->
                              <!--:style="{backgroundColor: item <= activeQuestion ? examRound.study_type.color : 'white'}">-->
                        <!--</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <div class="flex flex-col flex-1 justify-center items-center px-6 py-8" ref="questionField">

        Test

        <!--<h2 v-if="!isTextQuestion" class="mb-8 md:mb-16 text-lg md:text-3xl max-w-xl text-center leading-snug">-->
          <!--{{ question.question }}-->
        <!--</h2>-->

        <!--<div v-if="isTextQuestion" class="max-w-5xl py-4 md:py-10 intro-question">-->
          <!--<template v-if="!isFinished">-->
            <!--<h2 class="text-2xl mb-2  uppercase" v-html="question.section.name"></h2>-->
            <!--<div class="section-line" :style="{borderColor: examRound.study_type.color}"></div>-->
          <!--</template>-->
          <!--<div class="text-lg" v-html="question.question"/>-->
        <!--</div>-->

        <!--<CircleLongQuestion-->
                <!--v-else-if="question.type === 'CustomQuestion'"-->
                <!--v-bind:answer="answer"-->
                <!--@answered="answerMade"-->
                <!--:type="'custom'"-->
                <!--:custom-options="question.data.options"-->
        <!--&gt;</CircleLongQuestion>-->

        <!--<OpenQuestion v-else-if="question.type === 'OpenQuestion'"-->
                      <!--:border-color="examRound.study_type.color"-->
                      <!--v-model="answer"></OpenQuestion>-->

        <!--<RateQuestion v-else-if="question.type === 'RateQuestion'"-->
                      <!--v-bind:answer="answer ? parseInt(answer) : null"-->
                      <!--@answered="answerMade"></RateQuestion>-->

        <!--<CircleQuestion v-else-->
                        <!--v-bind:answer="answer"-->
                        <!--@answered="answerMade"-->
                        <!--:type="question.type"></CircleQuestion>-->

      </div>
    </template>

    <footer>
      <div class="flex items-center justify-center py-4 md:py-6 bg-gray-300">
        <!--<button class="btn btn&#45;&#45;wide btn&#45;&#45;flex relative button-hover transition"-->
                <!--@click="prevQuestion"-->
                <!--:disabled="activeQuestion === 1 && numberOfSectionInPart === 1 && partNumber === 1"-->
                <!--:style="{color: examRound.study_type.color}">-->
          <!--<svg class="rotated-180 absolute left-0 ml-4 md:ml-6" :fill="examRound.study_type.color"-->
               <!--width="15"-->
               <!--height="18"-->
               <!--viewBox="0 0 19 15"-->
               <!--xmlns="http://www.w3.org/2000/svg">-->
            <!--<path d="M17.8678 6.79949L11.3103 0.288046C11.1232 0.101879 10.8737 0 10.6076 0C10.3411 0 10.092 0.102245 9.90491 0.288046L9.30961 0.879529C9.1225 1.06496 9.01953 1.31306 9.01953 1.57729C9.01953 1.84151 9.1225 2.09768 9.30961 2.28311L13.1349 6.09H0.980969C0.432911 6.09 0 6.51584 0 7.06042V7.89634C0 8.44055 0.432911 8.90963 0.980969 8.90963H13.1785L9.30961 12.7378C9.1225 12.9236 9.01953 13.1647 9.01953 13.4289C9.01953 13.6928 9.1225 13.9376 9.30961 14.1234L9.90491 14.7127C10.092 14.8985 10.3415 15 10.6076 15C10.8737 15 11.1232 14.8974 11.3103 14.7116L17.8678 8.20014C18.0553 8.01361 18.1586 7.76478 18.1579 7.50018C18.1586 7.23486 18.0557 6.98566 17.8678 6.79949Z"/>-->
          <!--</svg>-->
          <!--Wstecz-->
        <!--</button>-->
        <!--<button @click="chosen"-->
                <!--:disabled="isDisabled"-->
                <!--class="btn btn&#45;&#45;wide btn&#45;&#45;flex text-white relative button-hover"-->
                <!--:style="{backgroundColor: examRound.study_type.color}">-->
          <!--<svg class="absolute right-0 mr-4 md:mr-6" :fill="'white'"-->
               <!--width="15"-->
               <!--height="18"-->
               <!--viewBox="0 0 19 15"-->
               <!--xmlns="http://www.w3.org/2000/svg">-->
            <!--<path d="M17.8678 6.79949L11.3103 0.288046C11.1232 0.101879 10.8737 0 10.6076 0C10.3411 0 10.092 0.102245 9.90491 0.288046L9.30961 0.879529C9.1225 1.06496 9.01953 1.31306 9.01953 1.57729C9.01953 1.84151 9.1225 2.09768 9.30961 2.28311L13.1349 6.09H0.980969C0.432911 6.09 0 6.51584 0 7.06042V7.89634C0 8.44055 0.432911 8.90963 0.980969 8.90963H13.1785L9.30961 12.7378C9.1225 12.9236 9.01953 13.1647 9.01953 13.4289C9.01953 13.6928 9.1225 13.9376 9.30961 14.1234L9.90491 14.7127C10.092 14.8985 10.3415 15 10.6076 15C10.8737 15 11.1232 14.8974 11.3103 14.7116L17.8678 8.20014C18.0553 8.01361 18.1586 7.76478 18.1579 7.50018C18.1586 7.23486 18.0557 6.98566 17.8678 6.79949Z"/>-->
          <!--</svg>-->
          <!--Dalej-->
        <!--</button>-->
      </div>
      <div class="relative flex flex-col md:flex-row items-center justify-center relative h-auto md:h-10 mx-4 py-2 md:mpy-0">
        <svg class="mb-2 md:mb-0 md:mr-2 h-4 md:h-6" :fill="app.color"
             viewBox="0 0 20 24">
          <path d="M17.9147 9.6922H17.447V7.5035C17.447 3.45533 14.2346 0.0736667 10.2193 0.00147925C10.1096 -0.000493083 9.8904 -0.000493083 9.78073 0.00147925C5.76541 0.0736667 2.55297 3.45533 2.55297 7.5035V9.6922H2.08528C1.36459 9.6922 0.776733 10.4359 0.776733 11.3543V22.3319C0.776733 23.2494 1.36459 24 2.08533 24H17.9147C18.6354 24 19.2233 23.2494 19.2233 22.3319V11.3543C19.2233 10.4359 18.6354 9.6922 17.9147 9.6922ZM11.483 16.832V20.149C11.483 20.5288 11.165 20.8503 10.7849 20.8503H9.21522C8.83505 20.8503 8.51706 20.5288 8.51706 20.149V16.832C8.14838 16.4691 7.93374 15.9673 7.93374 15.4122C7.93374 14.3602 8.74689 13.4563 9.78078 13.4145C9.89035 13.4101 10.1098 13.4101 10.2194 13.4145C11.2533 13.4563 12.0664 14.3602 12.0664 15.4122C12.0663 15.9673 11.8517 16.4691 11.483 16.832ZM14.3648 9.6922H10.2193H9.78073H5.63528V7.5035C5.63528 5.09207 7.59499 3.09819 10 3.09819C12.405 3.09819 14.3648 5.09207 14.3648 7.5035V9.6922H14.3648Z"/>
        </svg>
        <p class="text-center md:text-right text-xs md:text-base">
          Twoje odpowiedzi są anonimowe. Po więcej informacji sięgnij do
          <a href="#"
             class="underline hover:opacity-50 transition">polityki prywatności
          </a>
        </p>
        <img class="md:absolute h-4 object-contain right-0 mt-2 md:mt-0"
             :src="require('@/assets/typescript.png')"
             alt="Second logo">
      </div>
    </footer>
  </main>
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