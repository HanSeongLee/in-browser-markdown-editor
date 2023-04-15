interface IDocument {
    id: number;
    name: string;
    content: string;
    createdAt: string;
}

interface IDeleteDocument {
    documentId: number;
}
