import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import images from '~/assets/images';
import styles from './AboutHome.module.scss';

const cx = classNames.bind(styles);
function AboutHome() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <div className={cx('wrapper')}>
            <img src={images.logo} alt="" />
            <div className={cx('about-home')}>
                <h4 className={cx('title')}>Thảo Dược Hương Quê</h4>
                <p className={cx('description')}>
                    CÔNG TY TNHH TNHH TM DV SX THẢO DƯỢC HƯƠNG QUÊ <br />
                    Thương hiệu đã được đăng ký chứng nhận độc quyền Đầu tiên
                    cho phép Công Ty chúng tôi gửi lời chào đến Quý khách. Kính
                    chúc Quý khách mạnh khỏe, thành đạt và hạnh phúc. Tôi xin
                    giới thiệu: Chúng tôi là Công Ty TNHH TM DV SX THẢO DƯỢC
                    HƯƠNG QUÊ Công ty chúng tôi chuyên sản xuất và gia công các
                    loại sản phẩm chăm sóc sức khỏe và làm đẹp từ cỏ cây hoa lá
                    Việt, lấy thương hiệu HQherbals
                </p>
                <Link to="/about" className={cx('btn-about')}>
                    Xem them
                </Link>
                <div className={cx('card-about')}>
                    <Slider {...settings}>
                        <div className={cx('card-about-item')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/375x370x2/upload/photo/web-dau-goi-thao-duoc-96521.png"
                                alt=""
                            />
                            <p>
                                Tất cả sản phẩm Thảo Dược Hương Quê đều được
                                kiểm nghiệm và cấp phép
                            </p>
                        </div>
                        <div className={cx('card-about-item')}>
                            <img
                                src="http://thaoduochuongque.com/thumbs/375x370x2/upload/photo/web-dau-goi-thao-duoc-96521.png"
                                alt=""
                            />
                            <p>
                                Tất cả sản phẩm Thảo Dược Hương Quê đều được
                                kiểm nghiệm và cấp phép
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default AboutHome;
