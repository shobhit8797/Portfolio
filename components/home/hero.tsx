import SLogo from "../ui/s-logo";

const Hero = () => {
    return (
        <div className="my-16 space-y-6">
            <div className="flex justify-between gap-8">
                <div className="flex flex-col gap-4 md:max-w-xl">
                    <h1 className="font-title bg-gradient-to-b">
                        I'm Shobhit, a Full Stack Developer creating amazing
                        products and solving real world problems using coding.
                    </h1>
                </div>
                <div className="relative hidden size-28 md:block">
                    <p>Hello</p>
                    <SLogo />
                </div>
            </div>
        </div>
    );
};

export default Hero;
