import Products from '~/pages/About';
import About from '~/pages/Blog';
import Home from '~/pages/Home';
import Blog from '~/pages/Products';
import Sale from '~/pages/Sale';
import { NoSidebarLayout } from '~/components/Layouts';
import Login from '~/components/Layouts/components/Header/Login';
import Register from '~/components/Layouts/components/Header/Register';

const publicRoutes = [
    { path: '/', component: Home, layout: NoSidebarLayout },
    { path: '/about', component: About, layout: NoSidebarLayout },
    { path: '/products', component: Products },
    { path: '/blog', component: Blog, layout: NoSidebarLayout },
    { path: '/sale', component: Sale },
    { path: '/login', component: Login, layout: NoSidebarLayout },
    { path: '/register', component: Register, layout: NoSidebarLayout },
];

export { publicRoutes };
