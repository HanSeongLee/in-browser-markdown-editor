import React, { HTMLAttributes } from 'react';
import styles from 'components/DocumentView/style.module.scss';
import cn from 'classnames';
import TitleBar from 'components/commons/TitleBar';
import MarkdownEditor from 'components/MarkdownEditor';
import Button from 'components/commons/Button';
import MarkdownRenderer from 'components/MarkdownRenderer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    markdown: string;
    onMarkdownChange: (data: string) => void;
    previewMode: boolean;
    onPreviewModeToggle: () => void;
}

const DocumentView: React.FC<IProps> = ({
                                            markdown, onMarkdownChange, previewMode, onPreviewModeToggle,
                                            className, ...props
                                        }) => {
    return (
        <div className={cn(styles.documentView, {
            [styles.previewMode]: previewMode,
        }, className)}
             {...props}
        >
            <div className={styles.editorContainer}>
                <TitleBar menu={(
                    <Button className={styles.showPreviewButton}
                            variant={'default'}
                            icon={'show-preview'}
                            onClick={onPreviewModeToggle}
                    />
                )}>
                    Markdown
                </TitleBar>
                <MarkdownEditor onChange={e => onMarkdownChange(e.target.value)}
                                value={markdown}
                >
                    {markdown}
                </MarkdownEditor>
            </div>
            <div className={styles.previewContainer}>
                <TitleBar menu={(
                    <>
                        <Button className={styles.showPreviewButton}
                                variant={'default'}
                                icon={'show-preview'}
                                onClick={onPreviewModeToggle}
                        />
                        <Button className={styles.hidePreviewButton}
                                variant={'default'}
                                icon={'hide-preview'}
                                onClick={onPreviewModeToggle}
                        />
                    </>
                )}>
                    Preview
                </TitleBar>
                <MarkdownRenderer className={styles.markdownRenderer}
                                  markdown={markdown}
                />
            </div>
        </div>
    );
};

export default DocumentView;
