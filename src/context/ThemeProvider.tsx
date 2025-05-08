
// This file is deprecated in favor of using @/components/theme-provider
// It's kept here for backward compatibility but should be removed in future refactors

import { createContext, useContext } from "react"
import { useTheme as useNextTheme } from "next-themes"

type ThemeProviderState = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => null,
})

export const useTheme = () => {
  console.warn(
    "Warning: useTheme from ThemeProvider.tsx is deprecated. Use useTheme from @/components/theme-provider instead."
  );
  return useContext(ThemeProviderContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useNextTheme()

  return (
    <ThemeProviderContext.Provider value={{ theme: theme || "light", setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
