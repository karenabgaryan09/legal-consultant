import { Button } from "@/components";

export const metadata = {
    title: "Corporate",
    description: "this is Corporate page description",
};

const Corporate = () => {
    return (
        <main className="corporate-page markup-custom-style">
        <section className="corporate">
            <div className="container">
                <div className="container">
                    <h1 className="text-1">Corporate</h1>
                    <br />
                    <hr />
                    <br />
                    <p>
                        Our attorneys pride themselves on their professional yet sensitive approach to
                        family matters. Our aim is to minimize stress and uncertainty by providing clear
                        explanations of legal procedures and realistic expectations. We believe in
                        empowering our clients with the knowledge necessary to make informed decisions
                        that will shape their future. With many years of experience, we offer legal
                        support on a wide array of legal issues, including international marriage and
                        child abduction:
                    </p>
                    <br />
                    <br />
                    <hr />
                    <br />

                    <ul>
                        <li>
                            <strong>alimony </strong> 
                        </li>
                        <li>
                            <strong>child custody </strong>
                        </li>
                        <li>
                            <strong>prenuptial agreement </strong>
                        </li>
                        <li>
                            <strong>postnuptial agreement </strong>
                        </li>
                        <li>
                            <strong>contested divorce procedure</strong>
                        </li>
                        <li>
                            <strong>uncontested divorce procedure</strong>
                        </li>
                        <li>
                            <strong>international child abduction</strong>
                        </li>
                        <li>
                            <strong>child support and domestic violence</strong>
                        </li>
                    </ul>
                    <br />
                    <br />

                    <p>
                        If you are unable to find common ground with your spouse or common-law partner on
                        family matters, our team of lawyers and psychologists can assist you in reaching a
                        peaceful solution. We understand the importance of minimizing conflict and
                        protecting the best interests of all parties involved, especially the children.
                        Through family mediation, we strive to facilitate discussion and find mutually
                        acceptable solutions. In cases involving domestic violence, we are committed to
                        offering a safe and supportive environment where victims can share their
                        experiences and seek justice.
                    </p>
                </div>
            </div>
        </section>
    </main>
    );
};

export default Corporate;
