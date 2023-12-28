import { create } from "zustand";
export const useTogglingStore = create((set) => ({
  currentPackage: "bit",
  isDarkTheme: true,
  isNavOpen: false,
  currentFormState: "default",
  currentClientName: "",
  isTeamMember: false,
  isSearchActive: false,
  currentState: "Hot",
  searchCategory: "All",
  searchCategoryMainPage: "All",

  toggleSearchWindow: () =>
    set((state: any) => ({ isSearchActive: !state.isSearchActive })),

  changeCurrentTheme: () =>
    set((state: any) => ({ isDarkTheme: !state.isDarkTheme })),

  changeMemberStatus: () =>
    set((state: any) => ({ isTeamMember: !state.isTeamMember })),

  toggleNav: () => set((state: any) => ({ isNavOpen: !state.isNavOpen })),

  changeCurrentPackage: (selectedPackage: string) =>
    set((state: any) => ({ currentPackage: selectedPackage })),
  setSearchCategory: (selectedSearchCategory: string) =>
    set((state: any) => ({ searchCategory: selectedSearchCategory })),
  setSearchCategoryMainPage: (selectedSearchCategoryMainPage: string) =>
    set((state: any) => ({
      searchCategoryMainPage: selectedSearchCategoryMainPage,
    })),
  changeCurrentFormState: (formState: string) =>
    set((state: any) => ({ currentFormState: formState })),

  changeCurrentClientName: (newName: string) =>
    set((state: any) => ({ currentClientName: newName })),
  changeCurrentState: (newState: string) =>
    set((state: any) => ({ currentState: newState })),
}));
