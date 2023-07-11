import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import {userStore} from '@/store/user'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: to => {
            // 方法接收目标路由作为参数
            // return 重定向的字符串路径/路径对象
            return { path: '/login'}
        },
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/login/serviceAgree',
        component: () => import('@/views/login/serviceAgree.vue')
    },
    {
        path: '/login/privacyPolicy',
        component: () => import('@/views/login/privacyPolicy.vue')
    },
    {
        path: '/task',
        component: () => import('@/views/task/index.vue')
    },
    {
        path: '/task/search',
        component: () => import('@/views/task/search.vue')
    },
    {
        path: '/task/details/:id',
        component: () => import('@/views/task/details.vue')
    },
    {
        path: '/task/companySource/:companyId/:taskId',
        component: () => import('@/views/task/companySource.vue')
    },
    {
        path: '/contract',
        component: () => import('@/views/contract/index.vue')
    },
    {
        path: '/contract/details/:id',
        component: () => import('@/views/contract/details.vue')
    },
    {
        path: '/contract/progress/:id',
        component: () => import('@/views/contract/progress.vue')
    },
    {
        path: '/message',
        component: () => import('@/views/message/index.vue')
    },
    {
        path: '/message/systemList',
        component: () => import('@/views/message/systemList.vue')
    },
    {
        path: '/message/systemDetails/:id',
        component: () => import('@/views/message/systemDetails.vue')
    },
    {
        path: '/message/talk/:taskId/:userId',
        component: () => import('@/views/message/talk.vue')
    },
    {
        path: '/message/talent/:resumeId/:userId',
        component: () => import('@/views/message/talent.vue')
    },
    {
        path: '/my',
        component: () => import('@/views/my/index.vue')
    },
    {
        path: '/my/user',
        component: () => import('@/views/my/user/index.vue')
    },
    {
        path: '/my/user/authReal',
        component: () => import('@/views/my/user/authReal.vue')
    },
    {
        path: '/my/user/certified',
        component: () => import('@/views/my/user/certified.vue')
    },
    {
        path: '/my/company/authReal',
        component: () => import('@/views/my/company/authReal.vue')
    },
    {
        path: '/my/company/certified',
        component: () => import('@/views/my/company/certified.vue')
    },
    {
        path: '/my/user/identitySwitch',
        component: () => import('@/views/my/user/identitySwitch.vue')
    },
    {
        path: '/my/set',
        component: () => import('@/views/my/set/index.vue')
    },
    {
        path: '/my/feedback',
        component: () => import('@/views/my/feedback/index.vue')
    },
    {
        path: '/my/account',
        component: () => import('@/views/my/account/index.vue')
    },
    {
        path: '/my/account/advance',
        component: () => import('@/views/my/account/advance.vue')
    },
    {
        path: '/my/account/coinExplain',
        component: () => import('@/views/my/account/coinExplain.vue')
    },
    {
        path: '/my/account/depositExplain',
        component: () => import('@/views/my/account/depositExplain.vue')
    },
    {
        path: '/my/resume',
        component: () => import('@/views/my/resume/index.vue')
    },
    {
        path: '/my/resume/preview',
        component: () => import('@/views/my/resume/preview.vue')
    },
    {
        path: '/my/collect',
        component: () => import('@/views/my/collect/index.vue')
    },
    {
        path: '/my/collect/talent',
        component: () => import('@/views/my/collect/talent.vue')
    },
    {
        path: '/my/about',
        component: () => import('@/views/my/about/index.vue')
    },
    {
        path: '/my/partner/person',
        component: () => import('@/views/my/partner/person.vue')
    },
    {
        path: '/my/partner/company',
        component: () => import('@/views/my/partner/company.vue')
    },
    {
        path: '/my/task/details/:id',
        component: () => import('@/views/my/task/details.vue')
    },
    {
        path: '/my/coupon',
        component: () => import('@/views/my/coupon/index.vue')
    },
    {
        path: '/my/coupon/rule',
        component: () => import('@/views/my/coupon/rule.vue')
    },
    {
        path: '/talent',
        component: () => import('@/views/talent/index.vue')
    },
    {
        path: '/talent/details/:id',
        component: () => import('@/views/talent/details.vue')
    },
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    const store=userStore()
    if(store.token){
        next()
    }else{
        if(to.path==='/login' || to.path==='/login/serviceAgree' || to.path==='/login/servicePolicy'){
            next()
        }else{
            next('/login')
        }
    }
})

export default router