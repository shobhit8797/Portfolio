import PageTitle from "@/components/page-title";
import About from "@/content/about.mdx";

const title = "About";
const description =
    " 👋 I'm a software engineer who loves to build things for the web.";

const AboutPage = () => {
    return (
        <>
            <PageTitle title={title} description={description} />
            <About />
        </>
    );
};

export default AboutPage;
