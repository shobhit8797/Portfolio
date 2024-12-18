"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";

type ProvidesProps = {
    children: React.ReactNode;
};

const Providers = (props: ProvidesProps) => {
    const { children } = props;

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
};

export default Providers;
