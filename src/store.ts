import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'buy-me',
    paths: [
      'collection', 'translations', 'photos',
    ],
  })],
  state: {
    photos: {
      'All-purpose flour': 'https://baconmockup.com/640/360',
    },
    translations: {
      'All-purpose flour': 'Allzweckmehl',
    },
    collection: [
      {
        'Store': 'Favorite Store',
        'Category': 'Baking',
        'Title': 'All-purpose flour',
        'Quantity': 960,
        'Unit': 'ml',
        'Ingredient Notes': '',
        'List Notes': '',
        'done': false,
      },
      {
        'Store': 'Favorite Store',
        'Category': 'Baking',
        'Title': 'Salt',
        'Quantity': 5,
        'Unit': 'ml',
        'Ingredient Notes': '',
        'List Notes': '',
        'done': false,
      },
      {
        'Store': 'Favorite Store',
        'Category': 'Dry Goods',
        'Title': 'Baking powder',
        'Quantity': 10,
        'Unit': 'ml',
        'Ingredient Notes': '',
        'List Notes': '',
        'done': false,
      },
      {
        'Store': 'Favorite Store',
        'Category': 'Misc.',
        'Title': 'Lard',
        'Quantity': 30,
        'Unit': 'ml',
        'Ingredient Notes': '',
        'List Notes': '',
        'done': false,
      },
      {
        'Store': 'Favorite Store',
        'Category': 'Misc.',
        'Title': 'Water',
        'Quantity': 360,
        'Unit': 'ml',
        'Ingredient Notes': '',
        'List Notes': '',
        'done': false,
      },
    ],
  },
  mutations: {
    triggerIngredient(state, itemIndex: number) {
      state.collection[itemIndex].done = !state.collection[itemIndex].done;
    },
    setTranslation(state, {itemKey, itemValue}) {
      state.translations[itemKey] = itemValue;
    },
    setPhoto(state, {itemKey, itemValue}) {
      state.photos[itemKey] = itemValue;
    },
    addIngredient(state, title) {
      state.collection.push({
        Title: title,
        done: false,
      });
    },
  },
  actions: {

  },
});
