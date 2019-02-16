import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import ingredientsStore from './store/ingredients';

Vue.use(Vuex);

const store: StoreOptions<object> = {
  plugins: [
    ingredientsStore,
  ],
};

export default new Vuex.Store<object>(store);
