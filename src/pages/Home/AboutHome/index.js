import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './AboutHome.module.scss';

const cx = classNames.bind(styles);
function AboutHome() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.logo} alt="" />
            <div className={cx('about-home')}>
                <h4 className={cx('title')}>Thảo Dược Hương Quê</h4>
                <p className={cx('description')}>
                    Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản phẩm
                    thuần tuý, tối giản, chỉ tập trung vào mục đính sử dụng của
                    chính nó. Nghĩa là nước giặt thì chỉ cần giặt sạch, chứ
                    không cần phải nhiều bọt. Nghĩa là dưỡng da dưỡng tóc thì để
                    da tóc khoẻ từ gốc chứ không cần cảm giác giả mướt tay từ
                    silicon. Tôi từ chối mọi sản phẩm chứa hạt vi nhựa, chỉ dùng
                    cafe xay mịn và muối biển để tẩy tế bào chết. Tôi không dùng
                    những hoá chất tẩy rửa mà thay bằng xà bông dầu dừa và quả
                    bồ hòn xưa cũ...
                </p>
                <Link to="/about" className={cx('btn-about')}>
                    Xem them
                </Link>
            </div>
        </div>
    );
}

export default AboutHome;
