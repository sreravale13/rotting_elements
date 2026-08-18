import { create } from 'zustand'

export const useBoardSize = create((set) => ({
  boarddata: [],
  updateBoardSize: (newBoardSize) => set({ boarddata: newBoardSize }),
}));

export default { useBoardSize };