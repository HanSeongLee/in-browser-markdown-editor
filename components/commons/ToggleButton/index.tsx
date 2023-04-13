import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    on: boolean;
}

const ToggleButton: React.FC<IProps> = ({ on, className, ...props }) => {
    return (
        <button className={cn(styles.toggleButton, {
            [styles.on]: on,
        }, className)}
                title={'Toggle Button'}
                {...props}
        />
    );
};

export default ToggleButton;
