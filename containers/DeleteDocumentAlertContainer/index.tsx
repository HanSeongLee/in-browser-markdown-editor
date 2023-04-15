import React, { HTMLAttributes } from 'react';
import AlertBox from 'components/commons/AlertBox';
import Button from 'components/commons/Button';
import { useAppStore } from 'lib/store';

interface IProps extends HTMLAttributes<HTMLDivElement>, IDeleteDocument {

}

const DeleteDocumentAlertContainer: React.FC<IProps> = ({ documentId, ...props }) => {
    const { closeModal } = useAppStore();

    const onDelete = () => {
        // TODO: Implement here.
        closeModal();
    };

    return (
        <AlertBox title={'Delete this document?'}
                  // TODO: Add the document's name
                  description={`Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.`}
                  {...props}
        >
            <Button onClick={onDelete}>
                Confirm & Delete
            </Button>
        </AlertBox>
    );
};

export default DeleteDocumentAlertContainer;
