import { create } from "zustand";
export const useTogglingStore = create((set) => ({
  currentPackage: "bit",
  isDarkTheme: true,
  isNavOpen: false,
  changeCurrentTheme: () =>
    set((state: any) => ({ isDarkTheme: !state.isDarkTheme })),
  toggleNav: () => set((state: any) => ({ isNavOpen: !state.isNavOpen })),
  changeCurrentPackage: (selectedPackage: string) =>
    set((state: any) => ({ currentPackage: selectedPackage })),
}));
