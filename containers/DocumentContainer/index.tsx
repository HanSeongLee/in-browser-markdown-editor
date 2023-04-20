import React, { HTMLAttributes, useEffect, useState } from 'react';
import DocumentView from 'components/DocumentView';
import useCurrentDocument from 'lib/useCurrentDocument';
import { useAppStore } from 'lib/store';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const DocumentContainer: React.FC<IProps> = (props) => {
    const { id, document } = useCurrentDocument();

    if (!document) {
        return <></>;
    }

    const { updateCurrentDocument } = useAppStore();
    const [markdown, setMarkdown] = useState<string>(document.content);
    const [previewMode, setPreviewMode] = useState<boolean>(false);

    const onMarkdownChange = (data: string) => {
        setMarkdown(data);
        updateCurrentDocument({
            content: data,
        });
    };

    const onPreviewModeToggle = () => {
        setPreviewMode(!previewMode);
    };

    useEffect(() => {
        setMarkdown(document.content);
    }, [id, document]);

    return (
        <DocumentView markdown={markdown}
                      onMarkdownChange={onMarkdownChange}
                      previewMode={previewMode}
                      onPreviewModeToggle={onPreviewModeToggle}
                      {...props}
        />
    );
};

export default DocumentContainer;
