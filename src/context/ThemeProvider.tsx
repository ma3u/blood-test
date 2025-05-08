
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
