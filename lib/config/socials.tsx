import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import type { ReactNode } from "react";

interface SocialLink {
  href: string;
  icon: ReactNode;
  username: string;
  color: string;
}

export const socials: SocialLink[] = [
  {
    href: "https://github.com/DimpalGoyal",
    icon: <GitHubIcon />,
    username: "DimpalGoyal",
    color: "#333333",
  },
  {
    href: "https://www.linkedin.com/in/dimpal-goyal-5136b3335/",
    icon: <LinkedInIcon />,
    username: "dimpal-goyal-5136b3335",
    color: "#0A66C2",
  },
  {
    href: "https://x.com/dimpalgoyal129",
    icon: <XIcon />,
    username: "@dimpalgoyal129",
    color: "#000000",
  },
];
