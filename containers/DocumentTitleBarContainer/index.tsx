import React from 'react';
import DocumentTitleBar from 'components/DocumentTitleBar';
import useCurrentDocument from 'lib/useCurrentDocument';
import { useAppStore } from 'lib/store';

const DocumentTitleBarContainer: React.FC = () => {
    const { document } = useCurrentDocument();
    const { updateCurrentDocument } = useAppStore();

    if (!document) {
        return <></>;
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateCurrentDocument({
            name: e.target.value,
        });
    };

    return (
        <DocumentTitleBar value={document.name}
                          onChange={onChangeTitle}
        />
    );
};

export default DocumentTitleBarContainer;
