import React from 'react';
import Header from 'components/commons/Header';
import { useAppStore } from 'lib/store';

const HeaderContainer: React.FC = () => {
    const { showSidebar, toggleSidebar } = useAppStore();

    return (
        <Header sidebarOpen={showSidebar}
                toggleSidebar={toggleSidebar}
        />
    );
};

export default HeaderContainer;
