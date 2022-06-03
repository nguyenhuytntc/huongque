import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

function Slide() {
    return <div className={cx('wrapper')}></div>;
}

export default Slide;
