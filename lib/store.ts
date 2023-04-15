import { createSidebarSlice, SidebarSlice } from 'lib/slices/createSidebarSlice';
import { create } from 'zustand';
import { createModalSlice, ModalSlice } from 'lib/slices/createModalSlice';

type StoreState = SidebarSlice & ModalSlice;

export const useAppStore = create<StoreState>()(
    (...a) => ({
        ...createSidebarSlice(...a),
        ...createModalSlice(...a),
    })
);
