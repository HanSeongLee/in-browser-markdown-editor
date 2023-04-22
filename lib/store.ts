import { createSidebarSlice, SidebarSlice } from 'lib/slices/createSidebarSlice';
import { create } from 'zustand';
import { createModalSlice, ModalSlice } from 'lib/slices/createModalSlice';
import { createDocumentSlice, DocumentSlice } from 'lib/slices/createDocumentSlice';
import { persist } from 'zustand/middleware';

type StoreState = SidebarSlice & ModalSlice & DocumentSlice;

export const useAppStore = create<StoreState>()(
    persist((...a) => ({
        ...createSidebarSlice(...a),
        ...createModalSlice(...a),
        ...createDocumentSlice(...a),
    }), {
        name: 'in-browser-markdown-editor-store',
        version: 1,
        partialize: (state) => ({
            documents: state.documents,
        }),
    })
);
