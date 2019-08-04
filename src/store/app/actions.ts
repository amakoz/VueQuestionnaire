import { ActionTree } from 'vuex';
import axios from 'axios';
import { AppState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<AppState, RootState> = {
  // fetchData({ commit }): any {
  //   axios({
  //     url: 'http://127.0.0.1:8000/api',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     }
  //   }).then((response) => {
  //     const payload: User = response && response.data;
  //     commit('profileLoaded', payload);
  //   }, (error) => {
  //     console.log(error);
  //     commit('profileError');
  //   });
  // }
  setIntro({ commit }, newIntro): any {
    commit('setIntro', newIntro);
  },
};
