import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import type { Components } from "react-markdown"
import { safeHttpsUrl } from "@/lib/urls/safe-url"

export const markdownComponents: Components = {
  h2: ({ children }) => (
    <Typography variant="h2" sx={{ mt: 5, fontSize: "1.75rem" }}>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography color="text.secondary" sx={{ mt: 2, fontSize: "1.125rem", lineHeight: 1.7 }}>
      {children}
    </Typography>
  ),
  ul: ({ children }) => (
    <Typography component="ul" color="text.secondary" sx={{ mt: 2, pl: 3, fontSize: "1.125rem" }}>
      {children}
    </Typography>
  ),
  ol: ({ children }) => (
    <Typography component="ol" color="text.secondary" sx={{ mt: 2, pl: 3, fontSize: "1.125rem" }}>
      {children}
    </Typography>
  ),
  li: ({ children }) => (
    <Typography component="li" sx={{ mt: 1, lineHeight: 1.7 }}>
      {children}
    </Typography>
  ),
  a: ({ href, children }) => {
    const safe = href?.startsWith("/") ? href : safeHttpsUrl(href)
    if (!safe) return <span>{children}</span>
    const external = safe.startsWith("https:")
    return (
      <Link href={safe} color="primary" target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </Link>
    )
  },
}
