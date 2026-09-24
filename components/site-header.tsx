"use client"

import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import NextLink from "next/link"
import { useState } from "react"
import { nav, site } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const links = nav.map((item) => (
    <Button
      key={item.href}
      component={NextLink}
      href={item.href}
      color="inherit"
      onClick={() => setOpen(false)}
    >
      {item.name}
    </Button>
  ))

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography
            component={NextLink}
            href="/"
            variant="h6"
            color="text.primary"
            sx={{ textDecoration: "none", flexGrow: 1, fontFamily: "var(--font-fraunces), serif" }}
          >
            {site.shortName}
          </Typography>
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
            {links}
          </Stack>
          <IconButton
            aria-label="Open menu"
            sx={{ display: { md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 2, width: 240 }}>{links}</Box>
      </Drawer>
    </AppBar>
  )
}
