import classNames from 'classnames/bind';
import Banner from '../Banner';
import ProductsSlider from '../ProductsSlider';
import styles from './ProductsHome.module.scss';

const cx = classNames.bind(styles);

function ProductsHome({ title, icon = '', banner = '', ...props }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <h2 className={cx('title')}>
                        <span
                            className={cx('icon-new')}
                            style={{
                                background: `url(${icon}) top center / cover no-repeat`,
                            }}
                        ></span>
                        {title}
                    </h2>
                    {banner !== '' && <Banner banner={banner} />}
                    <ProductsSlider />
                </div>
            </div>
        </div>
    );
}

export default ProductsHome;
