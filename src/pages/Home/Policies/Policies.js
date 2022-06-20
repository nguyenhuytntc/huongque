import {
    faCreditCard,
    faTruckFast,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Policies.module.scss';

const cx = classNames.bind(styles);
function Policies() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('policy')}>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faTruckFast}
                    />
                    <div className={cx('description')}>
                        <h5>Ship COD toàn quốc</h5>
                        <p>Thanh toán khi nhận hàng. Phí 20k - 25k</p>
                    </div>
                </div>
                <div className={cx('policy')}>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faUserGroup}
                    />
                    <div className={cx('description')}>
                        <h5>Ship COD toàn quốc</h5>
                        <p>Thanh toán khi nhận hàng. Phí 20k - 25k</p>
                    </div>
                </div>
                <div className={cx('policy')}>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faTruckFast}
                    />
                    <div className={cx('description')}>
                        <h5>Ship COD toàn quốc</h5>
                        <p>Thanh toán khi nhận hàng. Phí 20k - 25k</p>
                    </div>
                </div>
                <div className={cx('policy')}>
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faCreditCard}
                    />
                    <div className={cx('description')}>
                        <h5>Ship COD toàn quốc</h5>
                        <p>Thanh toán khi nhận hàng. Phí 20k - 25k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Policies;
