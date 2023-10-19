import ShowcaseSection from "./home/ShowcaseSection.jsx";
import WhyUsSection from "./home/WhyUsSection.jsx";
import ProcessSection from "./home/ProcessSection.jsx";
import ExpertiseSection from "./home/ExpertiseSection.jsx";
import AboutSection from "./home/AboutSection.jsx";
import ServicesSection from "./home/ServicesSection.jsx";

export default function Home() {
    return (
        <main className="home-page">
            <ShowcaseSection />
            <ExpertiseSection />
            <AboutSection />
            <WhyUsSection />
            <ServicesSection />
            <ProcessSection />
        </main>
    );
}
