import React from 'react';
import Slide from './Slide';
import ProductsHome from './ProductsHome';
import { icons } from '~/assets/icons';
import images from '~/assets/images';
import AboutHome from './AboutHome';
import Policies from './Policies';

function Home() {
    return (
        <div>
            <Slide />
            <Policies />
            <ProductsHome
                title="Sản phẩm mới ra mắt"
                icon={icons.stars}
                banner={images.banners.newProduct}
            />
            <ProductsHome title="Sản phẩm bán chạy nhất" />
            <ProductsHome
                title="Quà tặng"
                icon={icons.gits}
                banner={images.banners.bestSeller}
            />
            <ProductsHome
                title="Khuyến mãi và Combo"
                icon={icons.gits}
                banner={images.banners.bestSeller}
            />
            <AboutHome />
        </div>
    );
}

export default Home;
