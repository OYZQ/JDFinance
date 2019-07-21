import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Borrow from '../borrow/index.vue'
import Save from '../save/index.vue'
import Member from '../member/index.vue'
import '../../css/reset.scss';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path:'/money',
            name:'money',
            component:Money,
        },
        {
            path:'/borrow',
            name:'borrow',
            component:Borrow,
        },
        {
            path:'/save',
            name:'save',
            component:Save,
        },
        {
            path:'/member',
            name:'member',
            component:Member,
        }
    ],
})
