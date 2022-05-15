import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    console.log(cx);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-sale')}>
                <h2 className={cx('title')}>
                    Chào mừng bạn đến với website Thảo Dược Hương Quê. Chúc bạn một ngày vui vẻ!
                </h2>
            </div>
            <div className={cx('top-site')}>
                <div className={cx('container', 'top-header')}>
                    <div className={cx('logo')}>
                        <img width="90" height="90" src={images.logo} alt="logo" />
                    </div>
                    <div className={cx('search')}>
                        <input placeholder="Nhập sản phẩm muốn tìm..." />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('actions')}>
                        <div className={cx('account')}>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className={cx('cart')}>
                            <FontAwesomeIcon className={cx('cart-icon')} icon={faBasketShopping} />
                            <span className={cx('count')}>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className={cx('main-menu')}>
                    <li className={cx('menu-item')}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to="/products">Sản Phẩm</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to="/sale">Sale</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to="/about">Về Hương Quê</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to="/blog">Blog Sức Khỏe</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
