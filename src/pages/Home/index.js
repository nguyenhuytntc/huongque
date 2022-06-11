import React from 'react';
import Policys from './Policys';
import Slide from './Slide';
import ProductsHome from './ProductsHome';
import { icons } from '~/assets/icons';
import images from '~/assets/images';

function Home() {
    return (
        <div>
            <Slide />
            <Policys />
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
        </div>
    );
}

export default Home;
