import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import DocumentControlContainer from 'containers/DocumentControlContainer';
import Button from 'components/commons/Button';
import DocumentTitleBarContainer from 'containers/DocumentTitleBarContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Header: React.FC<IProps> = ({ sidebarOpen, toggleSidebar, className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <div className={styles.leftSide}>
                <Button variant={'menu'}
                        icon={!sidebarOpen ? 'menu' : 'close'}
                        onClick={toggleSidebar}
                />
                <DocumentTitleBarContainer />
            </div>

            <DocumentControlContainer className={styles.documentControlContainer} />
        </header>
    );
};

export default Header;
