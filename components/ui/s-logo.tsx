import { SITE_LOGO_PATH } from "@/lib/constants";
import Image from "next/image";
import { forwardRef } from "react";

const SLogo = ((props)) => {
        return (
            <>
                <Image
                    src={`${SITE_LOGO_PATH}`}
                    width={28}
                    height={28}
                    alt="Logo"
                    {...props}
                />
            </>
        );
    }

SLogo.displayName = "Logo";

export default SLogo;
