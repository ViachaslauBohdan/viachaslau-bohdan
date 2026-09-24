import { expect, test } from "@playwright/test"

test("homepage introduces Viachaslau and links to the company site", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1, name: "Vyacheslav's" })).toBeVisible()
  await expect(page.getByText("Senior software developer").first()).toBeVisible()
  await expect(page.getByRole("img", { name: "Viachaslau Bohdan" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Book a call" }).first()).toHaveAttribute("href", /^https:\/\//)
  const company = page.getByRole("link", { name: "Slavaro Software" }).first()
  await expect(company).toHaveAttribute("href", /^https:\/\//)
})

test("blog index lists published notes and hides the draft", async ({ page }) => {
  await page.goto("/blog")
  await expect(page.getByRole("heading", { name: "How I scope an MVP" })).toBeVisible()
  await expect(page.getByText("Draft — notes template")).toHaveCount(0)
})

test("a published note shows its title and author", async ({ page }) => {
  await page.goto("/blog/how-i-scope-an-mvp")
  await expect(page.getByRole("heading", { level: 1, name: "How I scope an MVP" })).toBeVisible()
  await expect(page.getByText("9 September 2026 · Viachaslau Bohdan")).toBeVisible()
  await expect(page.getByRole("link", { name: "All notes" })).toHaveAttribute("href", "/blog")
})
