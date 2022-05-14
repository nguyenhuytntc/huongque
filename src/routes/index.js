import Products from '~/pages/About';
import About from '~/pages/Blog';
import Home from '~/pages/Home';
import Blog from '~/pages/Products';
import Sale from '~/pages/Sale';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/products', component: Products },
    { path: '/blog', component: Blog },
    { path: '/sale', component: Sale },
];

export { publicRoutes };
