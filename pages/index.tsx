import type { NextPage } from 'next'
import styles from './style.module.scss';
import DocumentContainer from 'containers/DocumentContainer';
import SidebarContainer from 'containers/SidebarContainer';
import HeaderContainer from 'containers/HeaderContainer';
import ModalContainer from 'containers/ModalContainer';
import { useRouter } from 'next/router';
import { useAppStore } from 'lib/store';
import { useEffect } from 'react';

const Home: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { documents, currentDocument, setCurrentDocument, findDocumentById } = useAppStore();

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const document = findDocumentById(Number(id));
        if (id && document) {
            if (currentDocument?.id === Number(id)) {
                return;
            }

            setCurrentDocument(Number(id));
            return;
        }

        router.push({
            query: {
                id: documents[0].id,
            },
        });
    }, [id, documents, currentDocument]);

    if (!id || !currentDocument || Number(id) !== currentDocument?.id) {
        return <></>;
    }

    return (
        <div className={styles.home}>
            <SidebarContainer />
            <section className={styles.rightSide}>
                <HeaderContainer />
                <main className={styles.main}>
                    <DocumentContainer className={styles.documentContainer} />
                </main>
            </section>
            <ModalContainer />
        </div>
    );
};

export default Home
