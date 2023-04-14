import { StateCreator } from 'zustand';

export interface SidebarSlice {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

export const createSidebarSlice: StateCreator<SidebarSlice> = (set, get) => ({
    showSidebar: false,
    toggleSidebar: () => {
        set({
            showSidebar: !get().showSidebar,
        });
    },
});
