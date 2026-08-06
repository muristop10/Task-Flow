import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useTheme = create<ThemeState>()(
    persist<ThemeState>(
        (set) => ({
            theme: 'dark',
            setTheme: (theme) => set({theme})
        }),
        {
            name: 'color-theme',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)
