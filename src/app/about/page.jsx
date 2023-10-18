import { Button, Header } from "@/components";

export const metadata = {
    title: "About",
    description: "this is about page description",
};

const About = () => {
    return (
        <>
            <Header />
            <main className="about-page markup-custom-style">
                <section className="about">
                    <div className="container">
                        <h1 className="text-1">About us</h1>
                        <br />
                        <hr />
                        <br />
                        <h2 className="display-3">Objective. Strategy. Tactics.</h2>
                        <p>
                            We are a team of lawyers and specialist consultants. We work alongside clients to
                            devise tailored solutions. Our experience is founded on numerous commercial
                            transactions and court cases. Companies, start-ups, NGO’s and government bodies
                            can count on our help.
                        </p>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <p>
                            The fundamental principle of our practice is OST - Objective, Strategy, Tactics.
                            The objective consists in a desirable outcome, the strategy represents a general
                            plan to achieve that outcome, while tactics specify the concrete steps to execute
                            the general plan.
                        </p>
                        <br />
                        <br />

                        <ul>
                            <li>
                                <strong>Objective </strong> - client’s best interest.
                            </li>
                            <li>
                                <strong>Strategy </strong> - approach to meet the objective.
                            </li>
                            <li>
                                <strong>Tactics </strong> - specific actions that feed into the strategy.
                            </li>
                        </ul>
                        <br />
                        <br />

                        <p>
                            At the start our client states the case at hand and his interest in the matter
                            outlining the objective. Building on that foundation our lawyers devise few
                            workable strategies and come together with the client to choose the best available
                            one. Subsequently, our lawyers develop and implement individual tactics and go on
                            to keep the client up to date on the success rate.
                            <br />
                            We tend to draft an OST document as a visual representation of what and how we are
                            trying to accomplish, so our clients can visualize the course of legal
                            proceedings.
                            <br />
                            The OST principle has proved applicable in practice within the legal sphere.
                            Thanks to it our clients are able to make well-informed decisions on how to
                            proceed with their legal matters.
                            <br />
                            The OST document provides the utmost clarity about legal options, fosters the
                            attorney- client relationship and ensures more favorable outcomes.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;
