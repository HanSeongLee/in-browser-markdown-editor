import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import DeleteIcon from '/public/icons/icon-delete.svg';
import SaveIcon from '/public/icons/icon-save.svg';
import MenuIcon from '/public/icons/icon-menu.svg';
import CloseIcon from '/public/icons/icon-close.svg';
import ShowPreviewIcon from '/public/icons/icon-show-preview.svg';
import HidePreviewIcon from '/public/icons/icon-hide-preview.svg';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'default' | 'menu';
    icon?: 'delete' | 'save' | 'menu' | 'close' | 'show-preview' | 'hide-preview';
}

const Button: React.FC<IProps> = ({ variant, icon, className, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variant === 'primary',
            [styles.default]: variant === 'default',
            [styles.menu]: variant === 'menu',
            [styles.icon]: icon,
        }, className)}
                {...props}
        >
            {icon === 'delete' && (<DeleteIcon />)}
            {icon === 'save' && (<SaveIcon />)}
            {icon === 'menu' && (<MenuIcon className={styles.menuIcon} />)}
            {icon === 'close' && (<CloseIcon className={styles.closeIcon} />)}
            {icon === 'show-preview' && (<ShowPreviewIcon />)}
            {icon === 'hide-preview' && (<HidePreviewIcon />)}

            <div className={styles.content}>
                {children}
            </div>
        </button>
    );
};

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
