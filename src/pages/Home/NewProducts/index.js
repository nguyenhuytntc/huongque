import style from './NewProducts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function NewProducts() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <h2 className={cx('title')}>Sản phẩm mới</h2>
                    <div className={cx('product-list')}>
                        <div className={cx('product')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/280x315x1/upload/product/dau-goi-bo-ket-va-thao-duoc-9420.png"
                                alt=""
                            />
                            <div className={cx('description')}>
                                <h3 className={cx('title-product')}>
                                    Dầu gội sạch gàu - Bồ kết thảo dược
                                </h3>
                                <p className={cx('price')}>
                                    150.000 <sub>đ</sub>
                                </p>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/280x315x1/upload/product/dau-goi-bo-ket-va-thao-duoc-9420.png"
                                alt=""
                            />
                            <div className={cx('description')}>
                                <h3 className={cx('title-product')}>
                                    Dầu gội sạch gàu - Bồ kết thảo dược
                                </h3>
                                <p className={cx('price')}>
                                    150.000 <sub>đ</sub>
                                </p>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/280x315x1/upload/product/dau-goi-bo-ket-va-thao-duoc-9420.png"
                                alt=""
                            />
                            <div className={cx('description')}>
                                <h3 className={cx('title-product')}>
                                    Dầu gội sạch gàu - Bồ kết thảo dược
                                </h3>
                                <p className={cx('price')}>
                                    150.000 <sub>đ</sub>
                                </p>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/280x315x1/upload/product/dau-goi-bo-ket-va-thao-duoc-9420.png"
                                alt=""
                            />
                            <div className={cx('description')}>
                                <h3 className={cx('title-product')}>
                                    Dầu gội sạch gàu - Bồ kết thảo dược
                                </h3>
                                <p className={cx('price')}>
                                    150.000 <sub>đ</sub>
                                </p>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/280x315x1/upload/product/dau-goi-bo-ket-va-thao-duoc-9420.png"
                                alt=""
                            />
                            <div className={cx('description')}>
                                <h3 className={cx('title-product')}>
                                    Dầu gội sạch gàu - Bồ kết thảo dược
                                </h3>
                                <p className={cx('price')}>
                                    150.000 <sub>đ</sub>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProducts;
