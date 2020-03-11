import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('@/components/Home').default
        },
        {
            path: '/pvp',
            name: 'home',
            component: require('@/components/Home').default
        },
        {
            path: '/egg',
            name: '',
            component: require('@/components/Not').default
        },
        {
            path: '/shu',
            name: 'home',
            component: require('@/components/Not').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
