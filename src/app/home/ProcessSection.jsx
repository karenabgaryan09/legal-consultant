"use client";

import React from "react";
import { useObserver } from "@/hooks/lazy-load/useObserver.jsx";
import localData from "@/localdata";

const ProcessSection = () => {
    const { dash } = localData.svgs;

    const { ref, inView } = useObserver();

    return (
        <section className="process">
            <div className="container">
                <h2 className="process-title display-2 text-warning">our process</h2>
                <div className="card-group process-card-group" ref={ref}>
                    <div
                        className={`card process-card ${inView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: 0.1 + "s" }}
                    >
                        <div className="card-icon">1 {dash}</div>
                        <h4 className="card-title">Case assessment</h4>
                        <h6 className="card-description">
                            Our lawyers consider all facts and evidence of your case and assess its strong and
                            weak points from the legal perspective. You will be informed about the success
                            probability and costs involved.
                        </h6>
                    </div>
                    <div
                        className={`card process-card ${inView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: 0.2 + "s" }}
                    >
                        <div className="card-icon">2 {dash}</div>
                        <h4 className="card-title">Strategy development</h4>
                        <h6 className="card-description">
                            Our legal team devises the most adequate approach to your case which outlines how
                            we intend to handle the case, including negotiation, settlement, or litigation.
                            You will be able to ask questions and give suggestions.
                        </h6>
                    </div>
                    <div
                        className={`card process-card ${inView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: 0.3 + "s" }}
                    >
                        <div className="card-icon">3 {dash}</div>
                        <h4 className="card-title">Objective achievement </h4>
                        <h6 className="card-description">
                            Our lawyers take necessary measures to safeguard your interests and support the
                            deployment of the strategy. You will be informed about the progress every step of
                            the way.
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
