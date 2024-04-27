import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IntroState {
  isIntroDone: boolean;
  setIntroDone: (isDone: boolean) => void;
}

const useIntroStore = create<IntroState>()(
  persist(
    (set) => ({
      isIntroDone: false,
      setIntroDone: (isDone) => set({ isIntroDone: isDone }),
    }),
    {
      name: "introanimation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const getIntroDone = () => useIntroStore.getState().isIntroDone;
export const setIntroDone = (isDone: boolean) =>
  useIntroStore.getState().setIntroDone(isDone);
