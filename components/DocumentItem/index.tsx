import React, { HTMLAttributes } from 'react';
import styles from 'components/DocumentItem/style.module.scss';
import cn from 'classnames';
import DocumentIcon from 'public/icons/icon-document.svg';
import moment from 'moment';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    document: IDocument;
}

const DocumentItem: React.FC<IProps> = ({ document, className, ...props }) => {
    const {
        name, createdAt,
    } = document;

    return (
        <div className={cn(styles.documentItem, className)}
             {...props}
        >
            <DocumentIcon />
            <div className={styles.content}>
                <div className={styles.date}>
                    {moment(createdAt).format('DD MMMM YYYY')}
                </div>
                <div className={styles.title}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default DocumentItem;
