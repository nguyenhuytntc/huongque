import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

const slideShow = [
    {
        image: 'http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/bo-san-pham-cham-soc-toc-40170.png',
        name: 'Cham soc toc',
    },
    {
        image: 'http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/2-16311.jpg',
        name: 'Goi chuom da nang',
    },
    {
        image: 'http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/slide-20610.png',
        name: 'Khu mui khu khuan',
    },
    {
        image: 'http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/bo-san-pham-cham-soc-toc-40170.png',
        name: 'Cham soc toc',
    },
    {
        image: 'http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/2-16311.jpg',
        name: 'Goi chuom da nang',
    },
    {
        image: 'http://thaoduochuongque.com/thumbs/1366x435x1/upload/photo/slide-20610.png',
        name: 'Khu mui khu khuan',
    },
];

const Indicators = ({ current, amountSlides, nextSlide }) => {
    return (
        <div className={cx('indicator')}>
            {Array(amountSlides)
                .fill(1)
                .map((_, index) => (
                    <div
                        className={cx('dot', current === index ? 'active' : '')}
                        key={index}
                        onClick={() => nextSlide(index)}
                    />
                ))}
        </div>
    );
};

function Slide() {
    const [current, setCurrent] = useState(0);
    const length = slideShow.length;

    const nextSlide = (slideIndex = current + 1) => {
        const newSlideIndex = slideIndex >= length ? 0 : slideIndex;
        setCurrent(newSlideIndex);
    };

    useEffect(() => {
        const timeId = setTimeout(() => {
            nextSlide();
        }, 5000);
        return () => clearTimeout(timeId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);
    return (
        <div className={cx('wrapper')}>
            {slideShow.map((item, index) => (
                <Link
                    to="/products/:productId"
                    key={index}
                    className={cx('slider')}
                    style={{
                        backgroundImage: `url(${item.image})`,
                        marginLeft:
                            index === 0 ? `-${current * 100}%` : undefined,
                    }}
                ></Link>
            ))}
            <Indicators
                current={current}
                amountSlides={length}
                nextSlide={nextSlide}
            />
        </div>
    );
}

export default Slide;
