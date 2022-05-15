import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className="announcement">
                <h2>Chào mừng bạn đến với website Thảo Dược Hương Quê. Chúc bạn một ngày vui vẻ!</h2>
            </div>
            <div className="top-header"></div>
            <div className="main-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Sản Phẩm</Link>
                    </li>
                    <li>
                        <Link to="/sale">Sale</Link>
                    </li>
                    <li>
                        <Link to="/about">Về Hương Quê</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog Sức Khỏe</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
