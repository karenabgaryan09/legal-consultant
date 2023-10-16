import Image from "next/image";
import localData from "@/localdata";
import { Header } from "../components";

const HomeHero = () => {
    const { heroCover } = localData.images;
    return (
        <section className="hero">
            <img className="cover" src={heroCover.src} alt="" />
            <div className="container">header</div>
        </section>
    );
};

export default function Home() {
    return (
        <>
            <Header className='home-hero'>
                <HomeHero/>
            </Header>
            <main className="home-page">
                <div className="container">
                    <h1>home page</h1>
                </div>
            </main>
        </>
    );
}
