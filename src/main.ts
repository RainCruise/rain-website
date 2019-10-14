import Vue from 'vue';
import App from '@/app.vue';
import router from '@/router';
import '@common/styles/global.scss';
import './plugins/element.js';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
