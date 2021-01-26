import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currenciesToShow: ['USD', 'EUR'],
  },
  mutations: {
    changeCurrenciesList(state, newCurrenciesList) {
      state.currenciesToShow = newCurrenciesList;
    },
  },
  actions: {
  },
  modules: {
  },
});
