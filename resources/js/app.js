window.Vue = require('vue');

Vue.component('Quiz', require('./components/Quiz.vue'));
Vue.component('Question', require('./components/Question.vue'));


const app = new Vue({
    el:'#app',
    data() {
      return {
      }
    }
  })