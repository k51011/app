import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// ルートコンポーネントをインポートする
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Navbar from './components/Navbar'

Vue.use(VueAxios, axios)
Vue.component('navbar-component',Navbar)


new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    
})