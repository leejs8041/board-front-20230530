import { create } from 'zustand';

interface BoardWriteStore {
  boardTitle: string;
  boardContent: string;
  boardImage: File | null;

  setBoardTitle: (boardTitle: string) => void;
  setBoardContent: (boardContent: string) => void;
  setBoardImage: (boardImage: File | null) => void;

  resetBoard: () => void;
}

const useStore = create<BoardWriteStore>((set) => ({
  boardTitle: '',
  boardContent: '',
  boardImage: null,
  setBoardTitle: (boardTitle) => set((state) => ({ ...state, boardTitle })),
  setBoardContent: (boardContent) => set((state) => ({ ...state, boardContent })),
  setBoardImage: (boardImage) => set((state) => ({ ...state, boardImage })),
  resetBoard: () => set((state) => ({ ...state, boardTitle: '', boardContent: '', boardImage: null })),
}));

export default useStore;