import { Button, Header } from "@/components";

export const metadata = {
    title: "News",
    description: "this is News page description",
};

const News = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>News Page</h1>
                </div>
            </main>
        </>
    );
};

export default News;
