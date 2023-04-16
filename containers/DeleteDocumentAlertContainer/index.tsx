import React, { HTMLAttributes } from 'react';
import AlertBox from 'components/commons/AlertBox';
import Button from 'components/commons/Button';
import { useAppStore } from 'lib/store';

interface IProps extends HTMLAttributes<HTMLDivElement>, IDeleteDocument {

}

const DeleteDocumentAlertContainer: React.FC<IProps> = ({ documentId, ...props }) => {
    const { closeModal, deleteDocument, findDocumentById } = useAppStore();
    const document = findDocumentById(documentId);

    const onDelete = () => {
        deleteDocument(documentId);
        closeModal();
    };

    if (!document) {
        return <></>;
    }

    return (
        <AlertBox title={'Delete this document?'}
                  description={`Are you sure you want to delete the ‘${document.name}’ document and its contents? This action cannot be reversed.`}
                  {...props}
        >
            <Button onClick={onDelete}>
                Confirm & Delete
            </Button>
        </AlertBox>
    );
};

export default DeleteDocumentAlertContainer;
