"use client"

import Button, { type ButtonProps } from "@mui/material/Button"
import Link, { type LinkProps } from "@mui/material/Link"
import NextLink from "next/link"

export function AppLink(props: LinkProps) {
  return <Link component={NextLink} {...props} />
}

export function AppButton(props: ButtonProps) {
  return <Button component={NextLink} {...props} />
}
