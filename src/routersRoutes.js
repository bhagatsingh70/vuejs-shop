import SignupPage from './components/SignupPage.vue';
import LoginPage from './components/LoginPage.vue';
import CategoryPage from './components/CategoryPage.vue';
import HomePage from './components/HomePage.vue';
import {createRouter, createWebHistory  } from 'vue-router'

const routes=[
    {
        name: "Home",
        component:HomePage,
        path:'/'
    },
    {
        name: "Login",
        component:LoginPage,
        path:'/login'
    },
    {
        name: "signup",
        component:SignupPage,
        path:'/signup'
    },
    {
        name: "category",
        component:CategoryPage,
        path:'/category/:category/:sub_category'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router