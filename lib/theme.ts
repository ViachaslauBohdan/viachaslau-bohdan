"use client"

import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    background: { default: "#f4f0e8", paper: "#fbf8f3" },
    text: { primary: "#1c1915", secondary: "#5c564c" },
    primary: { main: "#8c3a22", dark: "#6d2c1a", contrastText: "#fff" },
    divider: "#ddd6c8",
  },
  typography: {
    fontFamily: "var(--font-outfit), Outfit, sans-serif",
    h1: { fontFamily: "var(--font-fraunces), Fraunces, serif", fontWeight: 520, letterSpacing: "-0.03em" },
    h2: { fontFamily: "var(--font-fraunces), Fraunces, serif", fontWeight: 520, letterSpacing: "-0.03em" },
    h3: { fontFamily: "var(--font-fraunces), Fraunces, serif", fontWeight: 520, letterSpacing: "-0.03em" },
  },
  shape: { borderRadius: 16 },
})
