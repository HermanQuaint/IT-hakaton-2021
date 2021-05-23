// import Vue from 'vue'
// import VueRouter from 'vue-router'


// Vue.use(VueRouter)

// const routes = [
//   // {
//   //   path: '/',
//   //   name: 'Home',
//   //   component: Home
//   // },

// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
import Vue from 'vue';
import Router from 'vue-router';
import Eror from '@/views/Eror.vue';
import Home from "@/views/Home.vue";

Vue.use(Router)
export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },

        {
            path: "*",
            component: Eror
        },

    ]
})