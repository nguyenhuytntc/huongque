import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import styles from './Resources.module.scss';

const cx = classNames.bind(styles);
function Resources() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>100% Minh bạch nguyên liệu</h2>
                <p className={cx('description')}>
                    Sản phẩm an LÀNH - Con người chân THẬT
                </p>
                <div className={cx('action')}>
                    <Link to="/resources">Xem thêm</Link>
                </div>
            </div>
            <div className={cx('resources-slider')}>
                <Slider {...settings}>
                    <div className={cx('card-resources')}>
                        <img
                            src="https://static.comem.vn/uploads/August2021/12395_58_m.png"
                            alt=""
                        />
                        <h2 className={cx('title')}>Lá bạc hà</h2>
                        <p className={cx('description')}>
                            Lá Bạc hà được sử dụng trong các sản phẩm mỹ phẩm
                            như: cao dược liệu để gội đầu, lá tắm cho trẻ em,
                            nước súc miệng...
                        </p>
                    </div>
                    <div className={cx('card-resources')}>
                        <img
                            src="https://static.comem.vn/uploads/August2021/12395_58_m.png"
                            alt=""
                        />
                        <h2 className={cx('title')}>Lá bạc hà</h2>
                        <p className={cx('description')}>
                            Lá Bạc hà được sử dụng trong các sản phẩm mỹ phẩm
                            như: cao dược liệu để gội đầu, lá tắm cho trẻ em,
                            nước súc miệng...
                        </p>
                    </div>
                    <div className={cx('card-resources')}>
                        <img
                            src="https://static.comem.vn/uploads/August2021/12395_58_m.png"
                            alt=""
                        />
                        <h2 className={cx('title')}>Lá bạc hà</h2>
                        <p className={cx('description')}>
                            Lá Bạc hà được sử dụng trong các sản phẩm mỹ phẩm
                            như: cao dược liệu để gội đầu, lá tắm cho trẻ em,
                            nước súc miệng...
                        </p>
                    </div>
                    <div className={cx('card-resources')}>
                        <img
                            src="https://static.comem.vn/uploads/August2021/12395_58_m.png"
                            alt=""
                        />
                        <h2 className={cx('title')}>Lá bạc hà</h2>
                        <p className={cx('description')}>
                            Lá Bạc hà được sử dụng trong các sản phẩm mỹ phẩm
                            như: cao dược liệu để gội đầu, lá tắm cho trẻ em,
                            nước súc miệng...
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Resources;
