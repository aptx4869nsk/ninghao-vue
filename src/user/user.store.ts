import { RootState } from '@/app/app.store';
import { Module } from 'vuex';

export interface UserState {
  currentUser: string;
}

const store: Module<UserState, RootState> = {
  namespaced: true,

  state: {
    currentUser: '',
  },

  getters: {
    currentUser(state) {
      return state.currentUser;
    },
  },

  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
  },

  actions: {
    getCurrentUser(context) {
      const user = 'Nang San Kham';
      context.commit('setCurrentUser', user);
    },
  },
};

export default store;
