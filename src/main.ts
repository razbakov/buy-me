import Vue from 'vue';
import './firebase/index';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch('ingredients/fetchAndAdd');
  },
}).$mount('#app');
