import { Button, Header } from "@/components";
import Link from "next/link";

export const metadata = {
    title: "News",
    description: "this is News page description",
};

const News = () => {
    return (
        <>
            <Header />
            <main className="news-page markup-custom-style">
                <section className="news">
                    <div className="container">
                        <h1 className='text-1'>News</h1>
                        <br />
                        <hr />
                        <br />
                        <h2 className="display-3">Stay. In. Loop.</h2>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <Link href='/civil/family-law' className="text-primary">Family Law</Link> / {' '}
                        <Link href='/civil/family-law' className="text-primary">Family Law</Link> / {' '}
                        <Link href='/civil/family-law' className="text-primary">Family Law</Link> / {' '}
                        <Link href='/civil/family-law' className="text-primary">Family Law</Link> / {' '}
                        <Link href='/civil/family-law' className="text-primary">Family Law</Link> / {' '}
                        <Link href='/civil/family-law' className="text-primary">Family Law</Link> / {' '}
                    </div>
                </section>
            </main>
        </>
    );
};

export default News;
