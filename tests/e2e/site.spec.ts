import { expect, test } from "@playwright/test"

test("homepage introduces Viachaslau and links to the company site", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1, name: "Viachaslau Bohdan" })).toBeVisible()
  await expect(page.getByText("Senior software developer").first()).toBeVisible()
  await expect(page.getByRole("img", { name: "Viachaslau Bohdan" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Book a call" }).first()).toHaveAttribute("href", /^https:\/\//)
  const company = page.getByRole("link", { name: "Slavaro Software" }).first()
  await expect(company).toHaveAttribute("href", /^https:\/\//)
})

test("blog index lists published notes and hides the draft", async ({ page }) => {
  await page.goto("/blog")
  await expect(page.getByRole("heading", { name: "Winter in Poland for a Software Developer — How to Simulate a Sunny Climate" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "How I scope an MVP" })).toHaveCount(0)
  await expect(page.getByText("Draft — notes template")).toHaveCount(0)
})

test("a published note shows its title and author", async ({ page }) => {
  await page.goto("/blog/winter-in-poland-for-a-software-developer")
  await expect(page.getByRole("heading", { level: 1, name: "Winter in Poland for a Software Developer — How to Simulate a Sunny Climate" })).toBeVisible()
  await expect(page.getByRole("img", { name: "Viachaslau in a rainy Warsaw winter and in warm sunlight" })).toBeVisible()
  await expect(page.getByText("24 September 2026 · Viachaslau Bohdan")).toBeVisible()
  await expect(page.getByRole("link", { name: "All notes" })).toHaveAttribute("href", "/blog")
})
