import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import ToggleButton from 'components/commons/ToggleButton';
import DarkModeIcon from 'public/icons/icon-dark-mode.svg';
import LightModeIcon from 'public/icons/icon-light-mode.svg';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    on: boolean;
}

const ThemeToggleButton: React.FC<IProps> = ({ on, className, ...props }) => {
    return (
        <div className={cn(styles.themeToggleButton, {
            [styles.on]: on,
        }, className)}>
            <DarkModeIcon className={styles.darkModeIcon} />
            <ToggleButton on={on}
                          {...props}
            />
            <LightModeIcon className={styles.lightModeIcon} />
        </div>
    );
};

export default ThemeToggleButton;
