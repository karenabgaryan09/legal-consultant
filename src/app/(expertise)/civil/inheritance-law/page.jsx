import { Button } from "@/components";

export const metadata = {
    title: "inheritance law",
    description: "this is inheritance law page description",
};

const InheritanceLaw = () => {
    return (
        <main className="inheritance-law-page markup-custom-style">
            <section className="inheritance-law">
                <div className="container">
                    <div className="container">
                        <h1 className="text-1">inheritance Law</h1>
                        <br />
                        <hr />
                        <br />
                        <p>
                            For most people the question of inheritance arises after a beloved person passes
                            away. Potentially, unresolved property matters can lead to poor family relations.
                            <br />
                            Our lawyers provide legal support and represent before courts and public notaries
                            in all inheritance matters:
                        </p>
                        <br />
                        <br />
                        <hr />
                        <br />

                        <ul>
                            <li>
                                <strong>will </strong>
                            </li>
                            <li>
                                <strong>probate proceedings</strong>
                            </li>
                            <li>
                                <strong>agreement on support for a lifetime</strong>
                            </li>
                            <li>
                                <strong>exclusion of a heir</strong>
                            </li>
                            <li>
                                <strong>annulment of a will</strong>
                            </li>
                            <li>
                                <strong>uncontested divorce procedure</strong>
                            </li>
                            <li>
                                <strong>dispute resolution among heirs</strong>
                            </li>
                            <li>
                                <strong>enforcement of necessary share of a heir</strong>
                            </li>
                        </ul>
                        <br />
                        <br />

                        <p>
                            If you have a property that you would like to divide among your future heirs in a
                            manner that reflects their individual merit and accomplishments, our team of
                            skilled lawyers is here to help. We understand the importance of ensuring a just
                            distribution of your wealth, and our legal experts will work closely with you to
                            draft a legally valid will that aligns with your intentions.
                            <br />
                            In situations where heirs find themselves unable to reach a consensus on how to
                            share an inheritance, our team of experienced lawyers is committed to providing
                            you with steadfast support. Through our expertise and mediation skills we
                            alleviate tensions and help you to navigate the complexities of inheritance
                            disputes and achieve a resolution that honors your interests and preserves
                            familial harmony.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InheritanceLaw;
