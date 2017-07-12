/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/17.
 */



import Home from './main/home';
import Cidian from './main/cidian';
import Liju from './main/liju';

// 这里是路由的配置。
const appRoutes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/cidian',
        component: Cidian
    },
    {
        path: '/liju',
        component: Liju
    }
    /*{ path: '/cidian',
        component: Cidian,
        routes: [
            { path: '/snacks/spicy',
                component: Spicy
            },
            { path: '/snacks/chips',
                component: Chips
            }
        ]
    }*/
];
export default appRoutes;