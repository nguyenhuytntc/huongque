import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AboutHome.module.scss';

const cx = classNames.bind(styles);
function AboutHome() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.logo} alt="" />
            <div className={cx('about-home')}>
                <h4 className={cx('title')}>Thảo Dược Hương Quê</h4>
            </div>
        </div>
    );
}

export default AboutHome;
