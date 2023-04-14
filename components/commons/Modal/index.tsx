import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
}

const Modal: React.FC<IProps> = ({
                                     open, onClose, className, children,
                                     ...props
                                 }) => {
    return (
        <div className={cn(styles.modal, {
            [styles.open]: open,
        }, className)}
             {...props}
        >
            <div className={styles.overlay}
                 onClick={onClose}
            />
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
