import { useAppStore } from 'lib/store';
import { useRouter } from 'next/router';

const useCurrentDocument = () => {
    const { query: { id }} = useRouter();
    const { findDocumentById } = useAppStore();
    const document = findDocumentById(Number(id));

    return {
        id,
        document,
    };
};

export default useCurrentDocument;
