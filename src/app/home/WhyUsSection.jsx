"use client";

import React from "react";
import { useObserver } from "@/hooks/lazy-load/useObserver.jsx";
import localData from "@/localdata";

const WhyUsSection = () => {
    const { performance, mitigation, moneyManagment } = localData.images;
    const { dash } = localData.svgs;

    const { ref, inView } = useObserver();

    return (
        <section className="why-us">
            <div className="container">
                <h2 className="why-us-title display-2 text-warning">why choose us</h2>
                <div className="card-group why-us-card-group" ref={ref}>
                    <div
                        className={`card why-us-card ${inView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: 0.1 + "s" }}
                    >
                        <div className="card-icon">
                            <img src={performance.src} alt="" /> {dash}
                        </div>
                        <h6 className="card-sup-description">time optimization</h6>
                        <h4 className="card-title">Because we know</h4>
                        <h6 className="card-description">how the courts work</h6>
                    </div>
                    <div
                        className={`card why-us-card ${inView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: 0.2 + "s" }}
                    >
                        <div className="card-icon">
                            <img src={mitigation.src} alt="" />
                            {dash}
                        </div>
                        <h6 className="card-sup-description">risk mitigation</h6>
                        <h4 className="card-title">Because we can</h4>
                        <h6 className="card-description">help avoid legal pitfalls</h6>
                    </div>
                    <div
                        className={`card why-us-card ${inView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: 0.3 + "s" }}
                    >
                        <div className="card-icon">
                            <img src={moneyManagment.src} alt="" />
                            {dash}
                        </div>
                        <h6 className="card-sup-description">cost-effective solutions</h6>
                        <h4 className="card-title">Because we protect</h4>
                        <h6 className="card-description">your interests unscrupulously</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyUsSection;
