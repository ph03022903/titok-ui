import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; //

import Button from '~/components/Button';
import style from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
const cx = classNames.bind(style)
function Header() {
    const [searchResuft, setSearchResuft] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResuft([]);
        }, 0)
    }, [])
    return <header className={cx('wrapper')} >
        <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />
            <Tippy
                interactive
                visible={searchResuft.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                <Button primary>Log in</Button>
            </div>
        </div>
    </header>
}

export default Header;