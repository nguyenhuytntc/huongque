import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/components/Search';
import Menu from './Menu';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-sale')}>
                <p className={cx('title')}>
                    Chào mừng bạn đến với website Thảo Dược Hương Quê. Chúc bạn
                    một ngày vui vẻ!
                </p>
            </div>
            <div
                className={cx('top-site')}
                style={{
                    background: `url(${images.backgroundHeader}) center / cover no-repeat`,
                }}
            >
                <div className={cx('container', 'top-header')}>
                    <Link to="/" className={cx('logo')}>
                        <img
                            width="90"
                            height="90"
                            src={images.logo}
                            alt="logo"
                        />
                    </Link>
                    <Search />
                    <div className={cx('actions')}>
                        <div className={cx('account')}>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className={cx('cart')}>
                            <FontAwesomeIcon
                                className={cx('cart-icon')}
                                icon={faBasketShopping}
                            />
                            <span className={cx('count')}>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <Menu className={cx('container')} />
        </div>
    );
}

export default Header;
