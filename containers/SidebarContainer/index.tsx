import React from 'react';
import Sidebar from 'components/commons/Sidebar';
import { useAppStore } from 'lib/store';
import { useRouter } from 'next/router';

const SidebarContainer: React.FC = () => {
    const router = useRouter();
    const { showSidebar, documents, addDocument } = useAppStore();

    const onNewDocument = () => {
        const id = addDocument('untitled-document.md');
        router.push({
            query: {
                id,
            },
        });
    };

    return (
        <Sidebar open={showSidebar}
                 documents={documents}
                 onNewDocument={onNewDocument}
        />
    );
};

export default SidebarContainer;
