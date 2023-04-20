import React, { HTMLAttributes } from 'react';
import Button from 'components/commons/Button';
import { useAppStore } from 'lib/store';
import { ModalID } from 'types/modal';
import { useRouter } from 'next/router';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const DocumentControlContainer: React.FC<IProps> = (props) => {
    const { query: { id } } = useRouter();
    const { openModal, saveCurrentDocument, isChangedCurrentDocument } = useAppStore();

    const onDocumentDelete = () => {
        const documentId = Number(id);
        openModal(ModalID.DELETE_DOCUMENT, { documentId });
    };

    const onDocumentSave = () => {
        saveCurrentDocument();
    };

    return (
        <div {...props}>
            <Button variant={'default'}
                    icon={'delete'}
                    onClick={onDocumentDelete}
            />
            <Button icon={'save'}
                    onClick={onDocumentSave}
                    disabled={!isChangedCurrentDocument()}
            />
        </div>
    );
};

export default DocumentControlContainer;
