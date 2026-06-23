import { GitHubIcon, LinkedInIcon, XIcon } from "../icons"
import type { ReactNode } from "react"

interface SocialLink {
  href: string
  icon: ReactNode
  label: string
}

export const socials: SocialLink[] = [
  {
    href: "https://github.com/DimpalGoyal",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dimpal-goyal-5136b3335/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/dimpalgoyal129",
    icon: <XIcon />,
    label: "X",
  },
]
