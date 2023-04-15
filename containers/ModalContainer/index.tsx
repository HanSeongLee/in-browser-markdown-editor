import React from 'react';
import Modal from 'components/commons/Modal';
import { useAppStore } from 'lib/store';
import { ModalID } from 'types/modal';
import DeleteDocumentAlertContainer from 'containers/DeleteDocumentAlertContainer';

const ModalContainer: React.FC = () => {
    const { modalId, modalProps, showModal, closeModal } = useAppStore();

    return (
        <Modal open={showModal}
               onClose={closeModal}
        >
            {modalId === ModalID.DELETE_DOCUMENT && (
                <DeleteDocumentAlertContainer {...modalProps as IDeleteDocument} />
            )}
        </Modal>
    );
};

export default ModalContainer;
