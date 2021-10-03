import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {//사이트 자체가 만들어질때 올라감. 인스턴스 생성됨과 동시에..
        path: "/signup",
        name: "Signup",
        component: Signup
    },
    {//메뉴가 클릭된 순간 임포트 한다. (지연임포트)
        path: "/login",
        name: "Login",
        component: () => import("../components/user/UserLogin.vue")
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
