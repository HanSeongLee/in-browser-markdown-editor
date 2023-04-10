import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    menu?: ReactNode;
}

const TitleBar: React.FC<IProps> = ({ menu, className, children, ...props }) => {
    return (
        <header className={cn(styles.titleBar, className)}
                {...props}
        >
            {children}

            {menu && (
                <div className={styles.buttonContainer}>
                    {menu}
                </div>
            )}
        </header>
    );
};

export default TitleBar;
