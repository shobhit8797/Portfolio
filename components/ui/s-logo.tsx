"use client";
import { SITE_LOGO_PATH } from "@/lib/constants";
import NextImage from "next/image";

const SLogo = (props) => {
    return (
        <>
            <NextImage
                src={`${SITE_LOGO_PATH}`}
                width={28}
                height={28}
                alt="Logo"
                {...props}
            />
        </>
    );
};

SLogo.displayName = "Logo";

export default SLogo;
