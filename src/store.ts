import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { RootState } from './store.d';
import ingredients from './store/ingredients';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  plugins: [createPersistedState({
    key: 'buy-me',
    paths: [
      'ingredients.collection',
    ],
  })],
  modules: {
    ingredients,
  },
  state: {
    loaded: true,
  },
};

export default new Vuex.Store<RootState>(store);
