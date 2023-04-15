import { StateCreator } from 'zustand';
import { ModalID } from 'types/modal';

type ModalProps = IDeleteDocument | object;

export interface ModalSlice {
    modalId: ModalID;
    modalProps: ModalProps;
    showModal: boolean;
    openModal: (modalId: ModalID, modalProps: ModalProps) => void;
    closeModal: () => void;
}

export const createModalSlice: StateCreator<ModalSlice> = (set, get) => ({
    modalId: ModalID.UNKNOWN,
    modalProps: {},
    showModal: false,
    openModal: (modalId: ModalID, modalProps: ModalProps) => {
        set({
            showModal: true,
            modalId,
            modalProps,
        });
    },
    closeModal: () => {
        set({
            showModal: false,
            modalId: ModalID.UNKNOWN,
            modalProps: {},
        });
    },
});
