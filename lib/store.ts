import { createSidebarSlice, SidebarSlice } from 'lib/slices/createSidebarSlice';
import { create } from 'zustand';
import { createModalSlice, ModalSlice } from 'lib/slices/createModalSlice';
import { createDocumentSlice, DocumentSlice } from 'lib/slices/createDocumentSlice';

type StoreState = SidebarSlice & ModalSlice & DocumentSlice;

export const useAppStore = create<StoreState>()(
    (...a) => ({
        ...createSidebarSlice(...a),
        ...createModalSlice(...a),
        ...createDocumentSlice(...a),
    })
);
