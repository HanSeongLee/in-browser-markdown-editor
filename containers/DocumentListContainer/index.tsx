import React, { HTMLAttributes } from 'react';
import DocumentItem from 'components/DocumentItem';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    documents: IDocument[];
}

const DocumentListContainer: React.FC<IProps> = ({ documents, ...props }) => {
    return (
        <ul {...props}>
            {documents.map((document) => (
                <li key={document.id}>
                    <Link href={{
                        query: {
                            id: document.id,
                        }
                    }}>
                        <DocumentItem document={document} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DocumentListContainer;
