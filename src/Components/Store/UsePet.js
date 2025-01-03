import { create } from "zustand";

export const usePet = create((set) => ({
  pet: null,
  setPetToEdit: (pet) => set({ pet }),
  isAddPet: false,
  setIsAddPet: (value) => set({ isAddPet: value }),
  clearPet: () => set({ pet: null }),
}));