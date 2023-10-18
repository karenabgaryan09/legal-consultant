import { Header } from "@/components";

const NotFound = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <h1>page not exist ☹</h1>
                    </div>
                </section>
            </main>
        </>
    );
};

export default NotFound;
