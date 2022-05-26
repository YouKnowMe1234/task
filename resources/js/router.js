import Vue from 'vue';
import Router from "vue-router";
import axios from 'axios';
import Welcom from './components/views/Welcom.vue';
import Home from './components/views/Home.vue'
Vue.use(Router);

const routes = [

    {
        path: '/home',
        name: 'home',
        component: Home,
        beforeEnter: (to, form, next) => {
            axios.get('/api/athenticated').then(() => {
                next()
            }).catch(() => {
                return next({ path: '/login' })
            })
        },
        children: [{
                path: '/dashboard',
                name: 'welcom',
                component: Welcom,

            },
            {
                path: '/employee',
                name: 'employee',
                component: () =>
                    import ('./components/views/Employee.vue'),

            },
            {
                path: '/employee/create',
                name: 'createEmpl',
                component: () =>
                    import ('./components/views/CreateEmployee.vue'),

            },
            {
                path: '/employee/edit/:id',
                name: 'EditEmpl',
                component: () =>
                    import ('./components/views/EditEmployee.vue'),

            },
            {
                path: '/reason',
                name: 'Reason',
                component: () =>
                    import ('./components/views/reason/Reason.vue'),

            },
            {
                path: '/reason/create',
                name: 'CreateReason',
                component: () =>
                    import ('./components/views/reason/CreateReason.vue'),

            },
            {
                path: '/reason/edit/:id',
                name: 'EditReason',
                component: () =>
                    import ('./components/views/reason/EditReason.vue'),
            },
            {
                path: '/calendar',
                name: 'Calendar',
                component: () =>
                    import ('./components/views/calendar/Calendar.vue'),

            },

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('./components/views/auth/Login.vue'),

    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('./components/views/auth/Register.vue'),

    },
    {
        path: '/reset',
        name: 'reset',
        component: () =>
            import ('./components/user/auth/ResetPassword.vue')
    },
    {
        path: '/reset/:token',
        name: 'ResetForm',
        component: () =>
            import ('./components/user/auth/ResetForm.vue')
    },
    {
        path: '/user-login',
        name: 'UserLogin',
        component: () =>
            import ('./components/user/auth/Login.vue')
    },
    {
        path: '/user',
        name: 'UserHome',
        component: () =>
            import ('./components/user/views/Home.vue'),
        children: [

            {
                path: '/user-dashboard',
                name: 'UserDarboard',
                component: () =>
                    import ('./components/user/views/Dashboard.vue')
            },
            {
                path: '/user-info',
                name: 'UserInfo',
                component: () =>
                    import ('./components/user/views/Infomation.vue')
            },
            {
                path: '/user-calendar',
                name: 'UserCalendar',
                component: () =>
                    import ('./components/user/views/Calendar.vue')
            },
            {
                path: '/create-calendar',
                name: 'Createcalendar',
                component: () =>
                    import ('./components/user/views/CreateCalendar.vue')
            },
            {
                path: '/edit-calendar/:id',
                name: 'EditCalendar',
                component: () =>
                    import ('./components/user/views/EditCalendar.vue')
            }
        ]
    },

]


const router = new Router({
    routes: routes,
    linkActiveClass: 'active',

});

export default router;