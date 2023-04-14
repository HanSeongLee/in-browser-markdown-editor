import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, IAlert {

}

const AlertBox: React.FC<IProps> = ({
                                        title, description, className, children,
                                        ...props
                                    }) => {
    return (
        <div className={cn(styles.alertBox, className)}
             {...props}
        >
            <h4 className={styles.title}>
                {title}
            </h4>
            <p className={styles.description}>
                {description}
            </p>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default AlertBox;
