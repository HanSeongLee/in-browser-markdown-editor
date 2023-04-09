import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import DeleteIcon from '/public/icons/icon-delete.svg';
import SaveIcon from '/public/icons/icon-save.svg';
import MenuIcon from '/public/icons/icon-menu.svg';
import CloseIcon from '/public/icons/icon-close.svg';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'default' | 'menu';
    icon?: 'delete' | 'save' | 'menu' | 'close';
}

const Button: React.FC<IProps> = ({ variant, icon, className, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variant === 'primary',
            [styles.default]: variant === 'default',
            [styles.menu]: variant === 'menu',
        }, className)}
                {...props}
        >
            {icon === 'delete' && (<DeleteIcon />)}
            {icon === 'save' && (<SaveIcon />)}
            {icon === 'menu' && (<MenuIcon />)}
            {icon === 'close' && (<CloseIcon />)}

            {children}
        </button>
    );
};

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
