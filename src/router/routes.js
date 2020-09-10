import store from '@state/store'

// auth related routes
const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => lazyLoadView(import('@views/pages/account/login')),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'dashboard' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => lazyLoadView(import('@views/pages/account/register')),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'dashboard' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/confirm-account',
        name: 'confirm-account',
        component: () => lazyLoadView(import('@views/pages/account/confirm')),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'dashboard' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/forget-password',
        name: 'forget-password',
        component: () =>
            lazyLoadView(import('@views/pages/account/forgetPassword')),
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                // If the user is already logged in
                if (store.getters['auth/loggedIn']) {
                    // Redirect to the home page instead
                    next({ name: 'dashboard' })
                } else {
                    // Continue to the login page
                    next()
                }
            },
        },
    },
    {
        path: '/logout',
        name: 'logout',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                store.dispatch('auth/logOut')
                const authRequiredOnPreviousRoute = routeFrom.matched.some(
                    (route) => route.meta.authRequired
                )
                // Navigate back to previous page, or home as a fallback
                next(
                    authRequiredOnPreviousRoute ? { name: 'dashboard' } : { ...routeFrom }
                )
            },
        },
    },
]

// error pages
const errorPagesRoutes = [
    {
        path: '/404',
        name: '404',
        component: require('@views/pages/secondary/error-404').default,
        // Allows props to be passed to the 404 page through route
        // params, such as `resource` to define what wasn't found.
        props: true,
    },
    {
        path: '/500',
        name: '500',
        component: require('@views/pages/secondary/error-500').default,
        props: true,
    },
    // Redirect any unmatched routes to the 404 page. This may
    // require some server configuration to work in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    {
        path: '*',
        redirect: '404',
    },
]

// dashboard
const dashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        header: 'Navegación',
        icon: 'home',
        badge: {
            text: '1',
            varient: 'success',
        },
        component: () => lazyLoadView(import('@views/pages/dashboard/dashboard')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
    },
]

// apps
const calendarAppsRoutes = [
    {
        path: '/apps/calendar',
        name: 'Calendario',
        header: 'Apps',
        icon: 'calendar',
        component: () => lazyLoadView(import('@views/pages/apps/calendar')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
    }
];

const callAppsRoutes = [
    {
        path: '/apps/calls',
        name: 'Llamadas',
        header: 'Llamadas',
        icon: 'user',
        component: () => lazyLoadView(import('@views/pages/apps/calls/calls')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
    }
];

const clientsAppsRoutes = [
    {
        path: '/apps/clients',
        name: 'Clientes',
        header: 'Apps',
        icon: 'user',
        component: () => lazyLoadView(import('@views/pages/apps/clients/clients-list')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
    }
];

const emailAppsRoutes = [
    {
        path: '/apps/email',
        name: 'Email',
        icon: 'inbox',
        meta: { authRequired: true },
        // create a container component
        component: {
            render(c) {
                return c('router-view')
            },
        },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
        children: [
            {
                name: 'Inbox',
                path: 'inbox',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/email/inbox')),
            },
            {
                path: 'read',
                name: 'Leer el correo electrónico',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/email/reademail')),
            },
            {
                path: 'compose',
                name: 'Escribir correo',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/email/emailcompose')),
            },
        ],
    }
];

const projectAppsRoutes = [
    {
        path: '/apps/project',
        name: 'Proyecto',
        icon: 'briefcase',
        meta: { authRequired: true },
        // create a container component
        component: {
            render(c) {
                return c('router-view')
            },
        },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
        children: [
            {
                path: 'list',
                name: 'Lista',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/project/list')),
            },
            {
                path: 'detail',
                name: 'Detalle',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/project/detail')),
            },
        ],
    }
];

const taskAppsRoutes = [
    {
        path: '/apps/task',
        name: 'Tareas',
        icon: 'bookmark',
        meta: { authRequired: true },
        // create a container component
        component: {
            render(c) {
                return c('router-view')
            },
        },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
        children: [
            {
                path: 'list',
                name: 'Lista tarea',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/tasks/task-list')),
            },
            {
                path: 'task-board',
                name: 'Tablero de tarea',
                meta: { authRequired: true },
                component: () =>
                    lazyLoadView(import('@views/pages/apps/tasks/task-board')),
            },
        ],
    }
];

const appsRoutes = [
    ...calendarAppsRoutes,
    ...emailAppsRoutes,
    ...projectAppsRoutes,
    ...taskAppsRoutes,
    ...clientsAppsRoutes,
    ...callAppsRoutes
]

// pages
const pagesRoutes = [
    {
        path: '/pages',
        name: 'Paginas',
        icon: 'file-text',
        header: 'Custom',
        meta: { authRequired: true },
        // create a container component
        component: {
            render(c) {
                return c('router-view')
            },
        },
        children: [
            {
                path: 'starter',
                name: 'Inicio',
                component: () => lazyLoadView(import('@views/pages/secondary/starter')),
            },
            {
                path: 'invoice',
                name: 'Factura',
                component: () => lazyLoadView(import('@views/pages/secondary/invoice')),
            },
            {
                path: 'profile',
                name: 'Perfiles',
                component: () => lazyLoadView(import('@views/pages/secondary/profile/')),
            },
            {
                path: 'activity',
                name: 'Actividades',
                component: () =>
                    lazyLoadView(import('@views/pages/secondary/activity')),
            },
            // {
            //     path: 'pricing',
            //     name: 'Pricing',
            //     component: () => lazyLoadView(import('@views/pages/secondary/pricing')),
            // },
        ],
    },
]

// ui
// const uiRoutes = [
//     {
//         path: '/ui',
//         name: 'UI Elementos',
//         icon: 'package',
//         header: 'Componentes',
//         meta: { authRequired: true },
//         // create a container component
//         component: {
//             render(c) {
//                 return c('router-view')
//             },
//         },
//         children: [
//             {
//                 path: 'bootstrap',
//                 name: 'Bootstrap UI',
//                 component: () => lazyLoadView(import('@views/pages/ui/bootstrap/')),
//             },
//             {
//                 path: 'icons',
//                 name: 'Icons',
//                 // create a container component
//                 component: {
//                     render(c) {
//                         return c('router-view')
//                     },
//                 },
//                 children: [
//                     {
//                         path: 'feather',
//                         name: 'Feather',
//                         component: () =>
//                             lazyLoadView(import('@views/pages/ui/icons/feather')),
//                     },
//                     {
//                         path: 'unicons',
//                         name: 'Unicons',
//                         component: () =>
//                             lazyLoadView(import('@views/pages/ui/icons/unicons')),
//                     },
//                 ],
//             },
//             {
//                 path: 'widgets',
//                 name: 'Widgets',
//                 component: () => lazyLoadView(import('@views/pages/ui/widget/')),
//             },
//         ],
//     },
// ]

// forms
// const formsRoutes = [
//     {
//         path: '/forms',
//         name: 'Formularios',
//         icon: 'file-text',
//         meta: { authRequired: true },
//         // create a container component
//         component: {
//             render(c) {
//                 return c('router-view')
//             },
//         },
//         children: [
//             {
//                 path: 'basic',
//                 name: 'Basic',
//                 component: () => lazyLoadView(import('@views/pages/ui/forms/basic')),
//             },
//             {
//                 path: 'advanced',
//                 name: 'Advanced',
//                 component: () => lazyLoadView(import('@views/pages/ui/forms/advanced')),
//             },
//             {
//                 path: 'validation',
//                 name: 'Validation',
//                 component: () =>
//                     lazyLoadView(import('@views/pages/ui/forms/validation')),
//             },
//             {
//                 path: 'wizard',
//                 name: 'Wizard',
//                 component: () => lazyLoadView(import('@views/pages/ui/forms/wizard/')),
//             },
//             {
//                 path: 'editor',
//                 name: 'Editor',
//                 component: () => lazyLoadView(import('@views/pages/ui/forms/editor')),
//             },
//             {
//                 path: 'uploads',
//                 name: 'File Uploads',
//                 component: () => lazyLoadView(import('@views/pages/ui/forms/uploads')),
//             },
//         ],
//     },
// ]

// tables
// const tablesRoutes = [
//     {
//         path: '/tables',
//         name: 'Tablas',
//         icon: 'grid',
//         meta: { authRequired: true },
//         // create a container component
//         component: {
//             render(c) {
//                 return c('router-view')
//             },
//         },
//         children: [
//             {
//                 path: 'basic',
//                 name: 'Basic Tables',
//                 component: () =>
//                     lazyLoadView(import('@views/pages/ui/tables/basic-table')),
//             },
//             {
//                 path: 'advanced',
//                 name: 'Advanced Tables',
//                 component: () =>
//                     lazyLoadView(import('@views/pages/ui/tables/advanced-table')),
//             },
//         ],
//     },
// ]

// charts
// const chartsRoutes = [
//     {
//         path: '/charts',
//         name: 'Charts',
//         icon: 'pie-chart',
//         component: () => lazyLoadView(import('@views/pages/ui/chart/')),
//         meta: { authRequired: true },
//         props: (route) => ({ user: store.state.auth.currentUser || {} }),
//     },
// ]


const authProtectedRoutes = [
    ...dashboardRoutes,
    ...appsRoutes,
    ...pagesRoutes
    // ...uiRoutes,
    // ...formsRoutes,
    // ...chartsRoutes,
    // ...tablesRoutes
]
const allRoutes = [...authRoutes, ...authProtectedRoutes, ...errorPagesRoutes]

export { allRoutes, authProtectedRoutes }

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
    const AsyncHandler = () => ({
        component: AsyncView,
        // A component to use while the component is loading.
        loading: require('@components/_loading').default,
        // Delay before showing the loading component.
        // Default: 200 (milliseconds).
        delay: 400,
        // A fallback component in case the timeout is exceeded
        // when loading the component.
        // error: require('@views/_timeout').default,
        // Time before giving up trying to load the component.
        // Default: Infinity (milliseconds).
        timeout: 10000,
    })

    return Promise.resolve({
        functional: true,
        render(h, { data, children }) {
            // Transparently pass any props or children
            // to the view component.
            return h(AsyncHandler, data, children)
        },
    })
}
