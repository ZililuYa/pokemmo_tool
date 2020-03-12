import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: require('@/components/Home').default
        },
        {
            path: '/pvp',
            component: require('@/components/Pvp').default
        },
        {
            path: '/egg',
            component: require('@/components/Not').default
        },
        {
            path: '/shu',
            component: require('@/components/Not').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
