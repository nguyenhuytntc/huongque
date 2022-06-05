import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Popper from '~/components/Layouts/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import ProductItem from '~/components/Layouts/components/ProductItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <Popper>
                            <ProductItem />
                            <ProductItem />
                            <ProductItem />
                        </Popper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Nhập sản phẩm muốn tìm..." />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
