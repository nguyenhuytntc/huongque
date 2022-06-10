import style from './NewProducts.module.scss';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { icons } from '~/assets/icons';
import Products from '../Products';

const cx = classNames.bind(style);

function NewProducts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>
                    <span
                        className={cx('icon-new')}
                        style={{
                            background: `url(${icons.start}) top center / cover no-repeat`,
                        }}
                    ></span>
                    Sản phẩm mới
                </h2>
                <Products />
            </div>
        </div>
    );
}

export default NewProducts;
