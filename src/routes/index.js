import Products from '~/pages/About';
import About from '~/pages/Blog';
import Home from '~/pages/Home';
import Blog from '~/pages/Products';
import Sale from '~/pages/Sale';
import { NoSidebarLayout } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home, layout: NoSidebarLayout },
    { path: '/about', component: About, NoSidebarLayout },
    { path: '/products', component: Products },
    { path: '/blog', component: Blog, NoSidebarLayout },
    { path: '/sale', component: Sale },
];

export { publicRoutes };
