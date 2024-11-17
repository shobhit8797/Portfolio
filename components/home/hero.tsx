"use client";
import { motion } from "framer-motion";
import BlurImage from "../ui/blur-image";

const Hero = () => {
    return (
        <div className="my-16 space-y-6">
            <div className="flex justify-between gap-8">
                <motion.div
                    className="flex flex-col gap-4 md:max-w-xl"
                    initial={{
                        y: 40,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <h1 className="font-title bg-gradient-to-b">
                        I'm Shobhit, a Full Stack Developer creating amazing
                        products and solving real world problems using coding.
                    </h1>
                    <div className="text-muted-foreground text-sm">
                        India • UTC/GMT +5:30
                    </div>
                </motion.div>
                <motion.div
                    className="relative hidden size-28 md:block"
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                >
                    {/* <SLogo width={128} height={128} /> */}
                    <BlurImage
                        src="/logo.jpeg"
                        className="rounded-full"
                        alt="Shobhit's Logo"
                        width={112}
                        height={112}
                        lazy={false}
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
