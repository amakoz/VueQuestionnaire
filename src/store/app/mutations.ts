import { MutationTree } from 'vuex';
import { AppState } from './types';

export const mutations: MutationTree<AppState> = {
  // appLoaded(state, payload: User) {
  //   state.error = false;
  //   state.user = payload;
  // },
  // appError(state) {
  //   state.error = true;
  //   state.user = undefined;
  // }
  setIntro(state, newIntro: boolean) {
    state.intro = newIntro;
  },
};
