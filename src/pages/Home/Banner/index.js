import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ banner }) {
    return (
        <div className={cx('wrapper')}>
            <img src={banner} alt="" />
        </div>
    );
}

export default Banner;
