import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/:productId" className={cx('product-image')}>
                <img
                    src="http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/slide-20610.png"
                    alt=""
                />
                <div className={cx('product-tag')}>
                    <div className={cx('tag-sale')}>-11%</div>
                    <div className={cx('tag-best-seller')}>Best seller</div>
                    <div className={cx('tag-new')}>New</div>
                </div>
            </Link>
            <div className={cx('description')}>
                <Link to="/:productId">
                    <h3 className={cx('title-product')}>
                        Dầu gội sạch gàu - Bồ kết thảo dược
                    </h3>
                </Link>
                <div className={cx('price')}>
                    <p className={cx('price-now')}>
                        150.000<sup>đ</sup>
                    </p>
                    <p className={cx('price-old')}>180.000</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
