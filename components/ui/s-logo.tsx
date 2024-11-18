"use client";

import { SITE_LOGO_PATH } from "@/lib/constants";
import NextImage, { ImageProps } from "next/image";

type SLogoProps = Partial<ImageProps>;

const SLogo = ({
    src = SITE_LOGO_PATH,
    alt = "Logo",
    width = 28,
    height = 28,
    ...rest
}: SLogoProps) => {
    return (
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            {...rest} // Spread remaining props
        />
    );
};

SLogo.displayName = "WebLogo";

export default SLogo;
