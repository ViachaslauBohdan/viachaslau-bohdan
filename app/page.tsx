import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "Viachaslau Bohdan — Software developer",
}

export default function Page() {
  return <HomePage />
}
