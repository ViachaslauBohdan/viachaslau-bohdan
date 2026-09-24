import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { AppLink } from "@/components/app-link"
import { ExternalLink } from "@/components/external-link"
import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <Container component="footer" maxWidth="lg" sx={{ py: 4 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ justifyContent: "space-between", borderTop: 1, borderColor: "divider", pt: 3 }}
      >
        <Typography color="text.secondary">
          {site.name} · {site.location}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href={`mailto:${site.email}`} color="text.secondary" underline="hover">
            Email
          </Link>
          <ExternalLink href={site.company.url} color="text.secondary" underline="hover">
            {site.company.name}
          </ExternalLink>
          <AppLink href="/blog" color="text.secondary" underline="hover">
            Blog
          </AppLink>
        </Stack>
      </Stack>
    </Container>
  )
}
