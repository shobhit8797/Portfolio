import {
    BarChartIcon,
    FlameIcon,
    MessageCircleIcon,
    MonitorIcon,
    PencilIcon,
    UserCircleIcon,
} from "lucide-react";

import { SOCIAL_LINKS } from "../../lib/constants";

type HeaderLinks = Array<{
    icon: React.ReactNode;
    href: string;
    text: string;
}>;

type FooterLinks = Array<{
    id: number;
    links: Array<{
        href: string;
        text: string;
    }>;
}>;

export const HEADER_LINKS: HeaderLinks = [
    {
        icon: <PencilIcon className="size-3.5" />,
        href: "/blog",
        text: "Blog",
    },
    {
        icon: <MessageCircleIcon className="size-3.5" />,
        href: "/guestbook",
        text: "Guestbook",
    },
    {
        icon: <BarChartIcon className="size-3.5" />,
        href: "/dashboard",
        text: "Dashboard",
    },
    {
        icon: <FlameIcon className="size-3.5" />,
        href: "/projects",
        text: "Projects",
    },
    {
        icon: <UserCircleIcon className="size-3.5" />,
        href: "/about",
        text: "About",
    },
    {
        icon: <MonitorIcon className="size-3.5" />,
        href: "/uses",
        text: "Uses",
    },
];

export const FOOTER_LINKS: FooterLinks = [
    {
        id: 1,
        links: [
            {
                href: "/",
                text: "Home",
            },
            {
                href: "/blog",
                text: "Blog",
            },
            {
                href: "/about",
                text: "About",
            },
            {
                href: "/dashboard",
                text: "Dashboard",
            },
        ],
    },
    {
        id: 2,
        links: [
            {
                href: "/guestbook",
                text: "Guestbook",
            },
            {
                href: "/uses",
                text: "Uses",
            },
            {
                href: "/projects",
                text: "Projects",
            },
            {
                href: "https://links.honghong.me",
                text: "Links",
            },
        ],
    },
    {
        id: 3,
        links: Object.entries(SOCIAL_LINKS).map(([key, value]) => ({
            href: value.href,
            text: key.charAt(0).toUpperCase() + key.slice(1),
        })),
    },
];
