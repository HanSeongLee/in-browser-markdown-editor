import { useAppStore } from 'lib/store';
import { useRouter } from 'next/router';

const useCurrentDocument = () => {
    const { query: { id }} = useRouter();
    const { currentDocument } = useAppStore();

    return {
        id,
        document: currentDocument,
    };
};

export default useCurrentDocument;
