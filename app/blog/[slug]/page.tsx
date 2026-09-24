import type { Metadata } from "next"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { notFound } from "next/navigation"
import { AppLink } from "@/components/app-link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { markdownComponents } from "@/components/markdown"
import { formatPostDate, getPostBySlug, getPosts } from "@/lib/posts"
import { site } from "@/lib/site"

type Params = { slug: string }

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post || post.draft) return { title: "Not found" }
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article" },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post || post.draft) notFound()

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.description,
    author: { "@type": "Person", name: site.name },
  }

  return (
    <Container component="main" maxWidth="md" sx={{ py: 8 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <AppLink href="/blog" color="text.secondary" underline="hover">
        All notes
      </AppLink>
      <Typography color="text.secondary" sx={{ mt: 4 }}>
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        {" · "}
        {site.name}
      </Typography>
      <Typography variant="h1" sx={{ mt: 1, fontSize: { xs: "2.4rem", sm: "3.25rem" } }}>
        {post.title}
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 2, fontSize: "1.125rem" }}>
        {post.description}
      </Typography>
      <Box component="article" sx={{ mt: 4 }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {post.content}
        </ReactMarkdown>
      </Box>
    </Container>
  )
}
