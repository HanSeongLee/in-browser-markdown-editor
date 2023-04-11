import React, { TextareaHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const MarkdownEditor: React.FC<IProps> = ({ className, children, ...props }) => {
    return (
        <textarea className={cn(styles.markdownEditor, className)}
                  {...props}
        >
            {children}
        </textarea>
    );
};

export default MarkdownEditor;
