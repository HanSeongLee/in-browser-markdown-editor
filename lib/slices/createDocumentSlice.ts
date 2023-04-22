import { StateCreator } from 'zustand';
import produce from 'immer';
import moment from 'moment';

export interface DocumentSlice {
    currentDocument: IDocument | null;
    documents: IDocument[];
    findDocumentById: (id: number) => IDocument | undefined;
    addDocument: (name: string) => number;
    deleteDocument: (id: number) => void;
    updateDocument: (id: number, {name, content}: {name?: string, content?: string}) => void;
    setCurrentDocument: (id: number) => void;
    updateCurrentDocument: ({name, content}: {name?: string, content?: string}) => void;
    saveCurrentDocument: () => void;
    isChangedCurrentDocument: () => boolean;
}

export const createDocumentSlice: StateCreator<DocumentSlice> = (set, get) => {
    let lastId = 0;

    const generateId = () => {
        return ++lastId;
    };

    return {
        currentDocument: null,
        documents: [{
            id: generateId(),
            'name': 'untitled-document.md',
            'content': '',
            createdAt: '04-01-2022'
        }, {
            id: generateId(),
            name: 'welcome.md',
            content: '# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You\'ll see in this guide that we\'ve used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I\'m inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```',
            createdAt: '04-01-2022'
        }],
        findDocumentById: (id: number) => {
            const { documents } = get();
            return documents.find(({ id: _id }) => _id === id);
        },
        addDocument: (name: string) => {
            const id = generateId();
            const createdAt = moment().format('MM-DD-YYYY');
            set(
                produce((draft) => {
                    draft.documents.push({
                        id,
                        name,
                        createdAt,
                        content: '',
                    });
                })
            );
            return id;
        },
        deleteDocument: (id: number) => {
            set(
                produce((draft) => {
                    draft.documents = draft.documents.filter(({ id: _id }: { id: number }) => _id !== id);
                })
            );

            const { documents, addDocument } = get();
            if (documents.length === 0) {
                addDocument('untitled-document.md');
            }
        },
        updateDocument: (id: number, { name, content }: { name?: string, content?: string }) => {
            set(
                produce((draft) => {
                    const document = draft.documents.find(({ id: _id }: { id: number }) => _id === id);
                    if (name) {
                        document.name = name;
                    }
                    if (content) {
                        document.content = content;
                    }
                })
            );
        },
        setCurrentDocument: (id: number) => {
            set(
                produce((draft) => {
                    const document = draft.documents.find(({ id: _id }: { id: number }) => _id === id);
                    if (!document) {
                        return ;
                    }

                    draft.currentDocument = document;
                })
            );
        },
        updateCurrentDocument: ({name, content}: {name?: string, content?: string}) => {
            set(
                produce((draft) => {
                    if (name || name === '') {
                        draft.currentDocument.name = name;
                    }
                    if (content || content === '') {
                        draft.currentDocument.content = content;
                    }
                })
            );
        },
        saveCurrentDocument: () => {
            set(
                produce((draft) => {
                    const { id } = draft.currentDocument;
                    const document = draft.documents.find(({ id: _id }: { id: number }) => _id === id);
                    document.name = draft.currentDocument.name;
                    document.content = draft.currentDocument.content;
                })
            );
        },
        isChangedCurrentDocument: () => {
            const { currentDocument, documents } = get();
            if (!currentDocument) {
                return false;
            }
            const { id, name, content } = currentDocument;
            if (!name) {
                return false;
            }
            const document = documents.find(({ id: _id }: { id: number }) => _id === id);
            return document ? name !== document.name || content !== document.content : false;
        }
    };
};
