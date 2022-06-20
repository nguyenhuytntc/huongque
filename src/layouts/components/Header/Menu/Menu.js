import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ className }) {
    return (
        <div className={cx('top-menu')}>
            <div className={className}>
                <div className={cx('menu-header')}>
                    <ul className={cx('main-menu')}>
                        <li className={cx('menu-item')}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to="/products">Chăm sóc tóc</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to="/products">Chăm sóc da</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to="/products">Sức khỏe</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to="/products">Khử mùi</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to="/sale">Sale</Link>
                        </li>
                    </ul>
                    <ul className={cx('main-menu')}>
                        <li className={cx('menu-item')}>
                            <Link to="/about">Về Hương Quê</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to="/blog">Blog Sức Khỏe</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;
