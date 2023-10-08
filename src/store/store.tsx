import { create } from 'zustand'
export const useTogglingStore = create((set) => ({
  currentPackage: "bit",
  changeCurrentPackage:(selectedPackage:string) => set((state:any) => ({ currentPackage: selectedPackage })),
  removeAllBears: () => set({ bears: 0 }),
}))