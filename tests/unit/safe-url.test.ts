import { describe, expect, it } from "vitest"
import { safeHttpsUrl } from "@/lib/urls/safe-url"

describe("safeHttpsUrl", () => {
  it("accepts public https links", () => {
    expect(safeHttpsUrl("https://slavaro-landing.vercel.app")).toBe(
      "https://slavaro-landing.vercel.app/",
    )
  })

  it("rejects javascript, http, and credentialed urls", () => {
    expect(safeHttpsUrl("javascript:alert(1)")).toBeNull()
    expect(safeHttpsUrl("http://example.com")).toBeNull()
    expect(safeHttpsUrl("https://user:pass@example.com")).toBeNull()
    expect(safeHttpsUrl("not a url")).toBeNull()
  })
})
