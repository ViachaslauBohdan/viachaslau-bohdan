import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { AppButton } from "@/components/app-link"
import { ExternalLink } from "@/components/external-link"
import { experience, forCtos, services, site, stack, work } from "@/lib/site"
import { safeHttpsUrl } from "@/lib/urls/safe-url"

export function HomePage() {
  const calendly = safeHttpsUrl(site.calendly)

  return (
    <Box component="main">
      <Container maxWidth="lg" sx={{ pt: { xs: 6, sm: 10 }, pb: 10 }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" color="primary">
              {site.role}
            </Typography>
            <Typography variant="h1" sx={{ mt: 2, fontSize: { xs: "3rem", sm: "4.25rem" }, maxWidth: 720 }}>
              {site.brand}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 680, fontWeight: 400 }}>
              I build production software for founders and companies that need a senior software
              developer on the work — not another layer between the problem and the code. Company
              engagements run
              through {site.company.name}.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 4, flexWrap: "wrap" }}>
              {calendly ? (
                <Button variant="contained" href={calendly} size="large">
                  Book a call
                </Button>
              ) : null}
              <Button variant="outlined" href={`mailto:${site.email}`} size="large" color="inherit">
                {site.email}
              </Button>
            </Stack>
            <Typography sx={{ mt: 3 }} color="text.secondary">
              Based in {site.location}. Working remotely.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src="/portrait.png"
              alt={site.name}
              sx={{
                display: "block",
                width: "100%",
                maxWidth: 420,
                mx: { xs: "auto", md: 0 },
                ml: { md: "auto" },
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box id="work" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h2">What I do</Typography>
              <Typography color="text.secondary" sx={{ mt: 2 }}>
                Ten years of commercial engineering across SaaS, fintech, IoT, travel, and enterprise
                products. I take a piece of software from an idea or a broken prototype through to
                something people can use.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3} divider={<Box sx={{ borderTop: 1, borderColor: "divider" }} />}>
                {work.map((item) => (
                  <Box key={item.title} sx={{ pt: 1 }}>
                    <Typography variant="h3" sx={{ fontSize: "1.75rem" }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="ctos" sx={{ borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h2" sx={{ maxWidth: 560 }}>
            What I bring to a company and a CTO
          </Typography>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {forCtos.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" sx={{ height: "100%", bgcolor: "background.default" }}>
                  <CardContent>
                    <Typography variant="h3" sx={{ fontSize: "1.6rem" }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box id="services" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h2">Services</Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {services.map((item, index) => (
              <Grid key={item.name} size={{ xs: 12, sm: 6 }}>
                <Typography variant="overline" color="primary">
                  0{index + 1}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: "1.75rem", mt: 1 }}>
                  {item.name}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2">Selected work</Typography>
              <Stack spacing={2} sx={{ mt: 3 }}>
                {experience.map((item) => (
                  <Box key={item.company}>
                    <Typography fontWeight={600}>{item.company}</Typography>
                    <Typography color="text.secondary">{item.detail}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h2">Stack</Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 3, flexWrap: "wrap" }}>
                {stack.map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" />
                ))}
              </Stack>
              <Typography color="text.secondary" sx={{ mt: 3 }}>
                For a company engagement — MVP, rescue, SaaS, or automation — see{" "}
                <ExternalLink href={site.company.url} color="primary">
                  {site.company.name}
                </ExternalLink>
                .
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: { sm: "flex-end" } }}
          >
            <Box>
              <Typography variant="h2">Notes</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 520 }}>
                Short writing on scoping, prototypes, and working with engineering leadership.
              </Typography>
            </Box>
            <AppButton href="/blog" variant="text">
              Read the blog
            </AppButton>
          </Stack>
        </Container>
      </Box>

      <Box id="contact" sx={{ borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h2">Tell me what you need built or fixed</Typography>
          <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 560 }}>
            A short note is enough: the product, the deadline, and whether you are a founder or a
            CTO. I reply personally.
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ mt: 4 }}>
            {calendly ? (
              <Button variant="contained" href={calendly} size="large">
                Book 30 minutes
              </Button>
            ) : null}
            <Button variant="outlined" href={`mailto:${site.email}`} size="large" color="inherit">
              Email me
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
