import type { Metadata } from "next"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { AppLink } from "@/components/app-link"
import { formatPostDate, getPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from Viachaslau Bohdan on building software with founders and CTOs.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="overline" color="primary">
        Blog
      </Typography>
      <Typography variant="h1" sx={{ mt: 1, fontSize: { xs: "2.75rem", sm: "3.5rem" } }}>
        Notes
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 2, fontSize: "1.125rem" }}>
        How I scope work, when a prototype should be thrown away, and what I expect a CTO engagement
        to look like.
      </Typography>
      <Stack component="ul" sx={{ mt: 6, p: 0, listStyle: "none" }}>
        {posts.map((post) => (
          <Stack
            component="li"
            key={post.slug}
            sx={{ borderTop: 1, borderColor: "divider", "&:last-child": { borderBottom: 1 } }}
          >
            <AppLink href={`/blog/${post.slug}`} underline="none" color="inherit" sx={{ py: 3, display: "block" }}>
              <Typography variant="body2" color="text.secondary">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, fontSize: "1.75rem" }}>
                {post.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {post.description}
              </Typography>
            </AppLink>
          </Stack>
        ))}
      </Stack>
    </Container>
  )
}
