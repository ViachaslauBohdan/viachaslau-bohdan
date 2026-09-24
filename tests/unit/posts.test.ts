import { describe, expect, it } from "vitest"
import { formatPostDate, getPostBySlug, getPosts } from "@/lib/posts"

describe("blog posts", () => {
  it("lists published posts newest first and hides drafts", () => {
    const posts = getPosts()
    expect(posts.map((post) => post.slug)).toEqual([
      "how-i-scope-an-mvp",
      "when-a-prototype-is-not-a-product",
      "what-a-cto-should-expect",
    ])
    expect(posts.every((post) => post.draft === false)).toBe(true)
    for (const post of posts) {
      expect(post.title.length).toBeGreaterThan(0)
      expect(post.description.length).toBeGreaterThan(0)
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it("reads a post body from markdown", () => {
    const post = getPostBySlug("what-a-cto-should-expect")
    expect(post?.title).toBe("What a CTO should expect from me")
    expect(post?.content).toContain("You should know who is writing the code")
  })

  it("formats dates without shifting the calendar day", () => {
    expect(formatPostDate("2026-09-01")).toBe("1 September 2026")
  })
})
