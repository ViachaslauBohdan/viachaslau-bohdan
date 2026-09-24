import type { Metadata } from "next"
import { Fraunces, Outfit } from "next/font/google"
import { ThemeRegistry } from "@/components/theme-registry"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://viachaslau-bohdan.vercel.app"),
  title: {
    default: `${site.brand} — ${site.role}`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.brand} — ${site.role}`,
    description: site.description,
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    address: site.location,
    worksFor: { "@type": "Organization", name: site.company.name, url: site.company.url },
  }

  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <ThemeRegistry>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeRegistry>
      </body>
    </html>
  )
}
