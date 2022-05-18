import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.logo} width={20} height={20} />
            <div className={cx('content')}>
                <h4>Dầu gội trị gàu</h4>
                <p>300.000 đ</p>
            </div>
        </div>
    );
}

export default ProductItem;
