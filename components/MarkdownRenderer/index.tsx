import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import MarkdownIt from 'markdown-it';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    markdown: string;
}

const MarkdownRenderer: React.FC<IProps> = ({ markdown, className, ...props }) => {
    const md = MarkdownIt();
    const html = md.render(markdown);

    return (
        <div className={cn(styles.markdownRenderer, className)}
             {...props}
        >
            <div className={styles.content}
                 dangerouslySetInnerHTML={{
                __html: html,
            }} />
        </div>
    );
};

export default MarkdownRenderer;
