import { create } from 'zustand';

interface IAddBeerDialogState {
  isAddBeerFormVisible: boolean;
  showAddBeerForm: () => void;
  hideAddBeerForm: () => void;
}

export const useAddBeerDialogStore = create<IAddBeerDialogState>()((set) => ({
  isAddBeerFormVisible: false,
  showAddBeerForm: () => set((state) => ({ isAddBeerFormVisible: true })),
  hideAddBeerForm: () => set((state) => ({ isAddBeerFormVisible: false }))
}));
