import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

import material from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons/iconfont/material-icons.css'
import './assets/css/poke.css'

Vue.use(material);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
const baseUrl = 'https://pokemon.fantasticmao.cn'
Vue.http = Vue.prototype.$http = function(param) {
    if (param.lsn) {
        let lsnData = window.localStorage.getItem(param.lsn)
        if (lsnData) return param.callback(JSON.parse(lsnData))
    }
    let config = {
        method: param.method || 'GET',
        url: baseUrl + param.url,
        data: param.data,
        params: param.data,
    };
    axios(config).then(function(data) {
        console.log(data);
        if (data.data.code === 200) {
            param.callback(data.data.data);
            if (param.lsn) {
                window.localStorage.setItem(param.lsn, JSON.stringify(data.data.data))
            }
        } else {

        }
    }).catch(function(error) {

    })
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    template: '<App/>'
}).$mount('#app')
