import { create } from "zustand";

export const usePet = create((set) => ({
  pet: null,
  setPetToEdit: (pet) => set({ pet }),
  clearPet: () => set({ pet: null }),
}));