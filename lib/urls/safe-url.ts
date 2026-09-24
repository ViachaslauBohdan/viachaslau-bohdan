/** Allow only https links with no embedded credentials. */
export function safeHttpsUrl(value: string | undefined): string | null {
  if (!value) return null
  try {
    const url = new URL(value)
    if (url.protocol !== "https:") return null
    if (url.username || url.password) return null
    return url.toString()
  } catch {
    return null
  }
}
