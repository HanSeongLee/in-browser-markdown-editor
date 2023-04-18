import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import DocumentIcon from '/public/icons/icon-document.svg';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const DocumentTitleBar: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.titleContainer, className)}>
            <DocumentIcon />
            <input className={styles.input}
                   {...props}
            />
        </div>
    );
};

export default DocumentTitleBar;
