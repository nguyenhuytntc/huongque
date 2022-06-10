import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/:productId">
                <img
                    src="http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/slide-20610.png"
                    alt=""
                />
            </Link>
            <div className={cx('description')}>
                <Link to="/:productId">
                    <h3 className={cx('title-product')}>
                        Dầu gội sạch gàu - Bồ kết thảo dược
                    </h3>
                </Link>
                <p className={cx('price')}>
                    150.000<sup>đ</sup>
                </p>
            </div>
        </div>
    );
}

export default Product;
