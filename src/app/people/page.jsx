import { Button, Header } from "@/components";
import localData from "@/localdata";

export const metadata = {
    title: "People",
    description: "this is People page description",
};

const People = () => {
    const {placeholder} = localData.images

    return (
        <>
            <Header />
            <main className="people-page markup-custom-style">
                <section className="people">
                    <div className="container">
                        <h1 className="text-1">People</h1>
                        <br />
                        <hr />
                        <br />
                        <h2 className="display-3">Dedicated. Reliable. Persistent.</h2>
                        <p>
                            We assign each legal task to a lawyer with the appropriate expertise and form
                            multidisciplinary teams to suit the case, sector and client. Our lawyers and
                            consultants have expert knowledge of every key legal area and industry in Serbia.
                        </p>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />

                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',gap: '30px'}}>
                            <img src={placeholder.src} alt="" style={{border: '1px solid #ccc',width: '300px'}} />
                            <img src={placeholder.src} alt="" style={{border: '1px solid #ccc',width: '300px'}} />
                            <img src={placeholder.src} alt="" style={{border: '1px solid #ccc',width: '300px'}} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default People;
