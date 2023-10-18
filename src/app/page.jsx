import { Header } from "@/components";
import HomeHero from "./home/HomeHero.jsx";
import WhyUsSection from "./home/WhyUsSection.jsx";
import ProcessSection from "./home/ProcessSection.jsx";
import ExpertiseSection from "./home/ExpertiseSection.jsx";
import AboutSection from "./home/AboutSection.jsx";
import ServicesSection from "./home/ServicesSection.jsx";

export default function Home() {
    return (
        <>
            <Header className="home-hero">
                <HomeHero />
            </Header>
            <main className="home-page">
                <ExpertiseSection />
                <AboutSection />
                <WhyUsSection />
                <ServicesSection />
                <ProcessSection />
            </main>
        </>
    );
}
