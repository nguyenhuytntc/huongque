import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
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
];

function Slide() {
    const [current, setCurrent] = useState(0);
    const length = slideShow.length;

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (current < length - 1) {
                setCurrent(current + 1);
            }
        }, 3000);

        return clearTimeout(timeId);
    }, [current, length]);
    return (
        <div className={cx('wrapper')}>
            {slideShow.map((item, index) => (
                <div
                    className={cx('slider')}
                    key={item.name}
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
            ))}
        </div>
    );
}

export default Slide;
