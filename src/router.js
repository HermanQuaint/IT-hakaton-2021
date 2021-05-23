import Vue from 'vue';
import Router from 'vue-router';
import Eror from '@/views/Eror.vue';
import Home from "@/views/Home.vue";
import Merops from "@/views/Merops.vue";
import Merop from "@/views/Merop.vue";
import Profile from "@/views/Profile.vue"
import Isbr from "@/views/Isbr.vue"
Vue.use(Router)
export default new Router ({
    mode: "history",
    routes: [
        {
           path: "/merop",
           component: Merop
        },
        {
           path: "/isbr",
           component: Isbr
        },
        {
            path: "/",
            component: Home
        },
   
        {
            path: "*",
            component: Eror
        },
        {
            path: "/merops",
            component: Merops
        },
        {
            path: "/profile",
            component: Profile
        }
    ]
})

