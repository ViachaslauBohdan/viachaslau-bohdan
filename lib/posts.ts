import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  draft: boolean
}

export type Post = PostMeta & {
  content: string
}

const postsDirectory = path.join(process.cwd(), "content/blog")

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function readString(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key]
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${file} is missing a ${key}`)
  }
  return value.trim()
}

function readDate(data: Record<string, unknown>, file: string) {
  const value = data.date
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value
  throw new Error(`${file} is missing a date`)
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)
  if (!isRecord(data)) throw new Error(`${slug}.md has invalid frontmatter`)

  return {
    slug,
    title: readString(data, "title", slug),
    description: readString(data, "description", slug),
    date: readDate(data, slug),
    draft: data.draft === true,
    content: content.trim(),
  }
}

export function getPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && !post.draft)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}
