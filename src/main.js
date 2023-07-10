import Vue from 'vue';
import App from './App.vue';
import router from './router';
if(localStorage.users === undefined){
  let users = [
    {
      email:"admin@gmail.com",
      password: "admin",

    },
  ];
  localStorage.setItem("users",JSON.stringify(users));

}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
