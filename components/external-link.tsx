import Link, { type LinkProps } from "@mui/material/Link"
import { safeHttpsUrl } from "@/lib/urls/safe-url"

type ExternalLinkProps = Omit<LinkProps, "href"> & { href: string }

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  const safe = safeHttpsUrl(href)
  if (!safe) return null
  return (
    <Link href={safe} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  )
}
