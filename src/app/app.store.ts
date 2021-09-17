import user, { UserState } from '@/user/user.store';
import { createStore, createLogger } from 'vuex';
import { logger } from './app.plugin';

export interface RootState {
  name: string;
  loading: boolean;
  user?: UserState;
}
/**
 * 创建 Store
 */
const store = createStore({
  /**
   * 数据
   */
  state: {
    name: '',
    loading: false,
  },

  /**
   * 获取器
   */
  getters: {
    name(state) {
      return `😁 ${state.name}`;
    },
  },

  /**
   * 修改器
   */
  mutations: {
    setName(state, data) {
      state.name = data;
    },

    setLoading(state, data) {
      state.loading = data;
    },
  },

  /**
   * 动作
   */
  actions: {
    // getName(context) {
    //   const name = 'Hello World';
    //   context.commit('setName', name);
    //   console.log(context);
    // },
    getName({ commit, rootState }) {
      //console.log(rootState);

      commit('setLoading', true);
      setTimeout(() => {
        const name = 'Hello World';
        commit('setName', name);
        commit('setLoading', false);
      }, 2000);
    },
  },

  modules: {
    //user: user,
    user,
  },

  plugins: [createLogger(), logger],
});

export default store;
