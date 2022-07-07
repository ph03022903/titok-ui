import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    console.log(items);
    const renderItems = () => {
        return items.map((value, key) => (
            <MenuItem key={key} data={value} />
        ))
    }
    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;