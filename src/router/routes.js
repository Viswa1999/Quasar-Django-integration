const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },
  /*{ path: '/home', component: () => import('pages/Home.vue') ,    

  children: [
    { path: '/index', component: () => import('pages/Index.vue') },    
      { path: '/new', component: () => import('pages/New.vue') }
    ]
  },*/

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
