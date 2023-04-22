import React from 'react';
import DocumentTitleBar from 'components/DocumentTitleBar';
import useCurrentDocument from 'lib/useCurrentDocument';
import { useAppStore } from 'lib/store';

const DocumentTitleBarContainer: React.FC = () => {
    const { document } = useCurrentDocument();
    const { updateCurrentDocument, saveCurrentDocument } = useAppStore();

    if (!document) {
        return <></>;
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateCurrentDocument({
            name: e.target.value,
        });
    };

    const onKeyDownTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            saveCurrentDocument();
            e.currentTarget.blur();
        }
    }

    return (
        <DocumentTitleBar value={document.name}
                          onChange={onChangeTitle}
                          onKeyDown={onKeyDownTitle}
        />
    );
};

export default DocumentTitleBarContainer;
