import {
    type IconType,
    SiGithub,
    SiInstagram,
    SiX,
    SiYoutube,
} from "@icons-pack/react-simple-icons";

export const isProduction = process.env.ENVIROMENT === "production";

export const SITE_URL = isProduction
    ? "https://iamshobhit.tech"
    : "http://localhost:3000";

export const GITHUB_USERNAME = "shobhit8797";

export const SITE_LOGO_PATH = "/logo.jpeg";
export const SITE_NAME = "Shobhit Goyal";
export const SITE_TITLE = "Shobhit - Developer";
export const SITE_DESCRIPTION = "Shobhit • Freelance • Passionate Developer";
export const SITE_KEYWORDS = [
    "shobhit8797",
    "shobhitgoyal",
    "shobhit goyal",
    "django",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
];

type SocialLinks = Array<{
    href: string;
    title: string;
    icon: IconType;
}>;

export const SOCIAL_LINKS: SocialLinks = [
    {
        href: "https://github.com/shobhit8797",
        title: "GitHub",
        icon: SiGithub,
    },
    {
        href: "https://www.instagram.com/shobhit8797",
        title: "Instagram",
        icon: SiInstagram,
    },
    {
        href: "https://x.com/shobhit8797",
        title: "X",
        icon: SiX,
    },
    {
        href: "https://www.linkedin.com/in/shobhit8797",
        title: "LinkedIn",
        icon: SiYoutube,
    },
];
