import { Button, Header } from "@/components";

export const metadata = {
    title: "About",
    description: "this is about page description",
};

const About = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>About Page</h1>
                </div>
            </main>
        </>
    );
};

export default About;
