import { createSidebarSlice, SidebarSlice } from 'lib/slices/createSidebarSlice';
import { create } from 'zustand';

type StoreState = SidebarSlice;

export const useAppStore = create<StoreState>()(
    (...a) => ({
        ...createSidebarSlice(...a),
    })
);
