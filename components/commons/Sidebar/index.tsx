import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Logo from 'components/commons/Logo';
import Button from 'components/commons/Button';
import ThemeToggleButtonContainer from 'containers/ThemeToggleButtonContainer';
import DocumentListContainer from 'containers/DocumentListContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    documents: IDocument[];
    onNewDocument: () => void;
}

const Sidebar: React.FC<IProps> = ({
                                       open, documents, onNewDocument, className,
                                       ...props
                                   }) => {
    return (
        <nav className={cn(styles.sidebar, {
            [styles.open]: open,
        }, className)}
             {...props}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <Logo className={styles.logo} />
                    <h2 className={styles.title}>
                        My Documents
                    </h2>
                    <Button onClick={onNewDocument}>
                        + New Document
                    </Button>
                </header>
                <div className={styles.body}>
                    <DocumentListContainer className={styles.documentListContainer}
                                           documents={documents}
                    />
                </div>
                <footer className={styles.footer}>
                    <ThemeToggleButtonContainer />
                </footer>
            </div>
        </nav>
    );
};

export default Sidebar;
