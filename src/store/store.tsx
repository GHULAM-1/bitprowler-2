import { create } from "zustand";
export const useTogglingStore = create((set) => ({
  currentPackage: "bit",
  isDarkTheme: true,
  isNavOpen: false,
  currentFormState: "default",
  currentClientName: "",
  isTeamMember: false,

  changeCurrentTheme: () =>
    set((state: any) => ({ isDarkTheme: !state.isDarkTheme })),

  changeMemberStatus: () =>
    set((state: any) => ({ isTeamMember: !state.isTeamMember })),

  toggleNav: () => set((state: any) => ({ isNavOpen: !state.isNavOpen })),

  changeCurrentPackage: (selectedPackage: string) =>
    set((state: any) => ({ currentPackage: selectedPackage })),

  changeCurrentFormState: (formState: string) =>
    set((state: any) => ({ currentFormState: formState })),

  changeCurrentClientName: (newName: string) =>
    set((state: any) => ({ currentClientName: newName })),
}));
