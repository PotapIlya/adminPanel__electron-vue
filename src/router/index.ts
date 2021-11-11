import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import { Route, Factory } from 'vue-routisan'


const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'index', component: () => import('../views/index.vue') },

    { path: '/demo', name: 'demoIndex', component: () => import('../views/demo/index.vue') },
    { path: '/demo/button', name: 'indexDemoButton', component: () => import('../views/demo/button.vue') },
    { path: '/demo/input', name: 'indexDemoInputs', component: () => import('../views/demo/input.vue') },
    { path: '/demo/form', name: 'indexDemoTable', component: () => import('../views/demo/table.vue') },
    { path: '/demo/modal', name: 'indexDemoModal', component: () => import('../views/demo/modal.vue') },
    { path: '/demo/tablePaginate', name: 'demoTablePaginate', component: () => import('../views/demo/tablePagiante.vue') },



    { path: '/arm', name: 'armIndex', component: () => import('../views/arm/index.vue') },
    { path: '/arm/create', name: 'armCreate', component: () => import('../views/arm/create.vue') },


    { path: '/option', name: 'optionIndex', component: () => import('../views/option/index.vue') },


]

// Route.view('blog', 'Blog').name('blog').children(() => {
//     // All Posts
//     Route.view('/', 'Blog/Posts').name('posts')
//
//     // Single Post
//     Route.view('{post}', 'Blog/Post').name('single-post').children(() => {
//         Route.view('edit', 'Blog/Post/Edit').name('edit')
//         Route.view('stats', 'Blog/Post/Stats').name('stats')
//     })
// })


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
