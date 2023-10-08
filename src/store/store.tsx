import { create } from 'zustand'
export const useTogglingStore = create((set) => ({
  currentPackage: "bit",
  isDarkTheme:true,
  changeCurrentTheme:(selectedPackage:string) => set((state:any) => ({ isDarkTheme: !state.isDarkTheme })),
  changeCurrentPackage:(selectedPackage:string) => set((state:any) => ({ currentPackage: selectedPackage })),
  
}))