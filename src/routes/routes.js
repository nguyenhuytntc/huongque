import Products from '~/pages/About';
import About from '~/pages/Blog';
import Home from '~/pages/Home';
import Blog from '~/pages/Products';
import Sale from '~/pages/Sale';
import { NoSidebarLayout } from '~/layouts';
import Login from '~/layouts/components/Header/Login';
import Register from '~/layouts/components/Header/Register';
import ProductItem from '~/layouts/components/ProductItem';

const publicRoutes = [
    { path: '/', component: Home, layout: NoSidebarLayout },
    { path: '/about', component: About, layout: NoSidebarLayout },
    { path: '/products', component: Products },
    { path: '/products/:productId', component: ProductItem },
    { path: '/blog', component: Blog, layout: NoSidebarLayout },
    { path: '/sale', component: Sale },
    { path: '/login', component: Login, layout: NoSidebarLayout },
    { path: '/register', component: Register, layout: NoSidebarLayout },
];

export { publicRoutes };
