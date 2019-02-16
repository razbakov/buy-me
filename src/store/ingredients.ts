import { Module } from 'vuex';
import { IngredientsState, RootState } from '../store.d';

const module: Module<IngredientsState, RootState> = {
  namespaced: true,
  state: {
    collection: [
      {
        store: 'Favorite Store',
        category: 'Baking',
        title: 'All-purpose flour',
        quantity: 960,
        unit: 'ml',
        done: false,
        translation: 'Allzweckmehl',
        photo: 'https://baconmockup.com/640/360',
      },
      {
        store: 'Favorite Store',
        category: 'Baking',
        title: 'Salt',
        quantity: 5,
        unit: 'ml',
        done: false,
      },
      {
        store: 'Favorite Store',
        category: 'Dry Goods',
        title: 'Baking powder',
        quantity: 10,
        unit: 'ml',
        done: false,
      },
      {
        store: 'Favorite Store',
        category: 'Misc.',
        title: 'Lard',
        quantity: 30,
        unit: 'ml',
        done: false,
      },
      {
        store: 'Favorite Store',
        category: 'Misc.',
        title: 'Water',
        quantity: 360,
        unit: 'ml',
        done: false,
      },
    ],
  },
  mutations: {
    trigger(state, itemIndex: number) {
      state.collection[itemIndex].done = !state.collection[itemIndex].done;
    },
    update(state, { itemIndex, itemValue }) {
      state.collection[itemIndex] = {
        ...state.collection[itemIndex],
        ...itemValue,
      };
    },
    add(state, title) {
      state.collection.push({
        title,
        done: false,
      });
    },
  },
  actions: {

  },
};

export default module;
