"use client";

import React from "react";
import localData from "@/localdata";
import { useObserver } from "@/hooks/lazy-load/useObserver.jsx";

const ExpertiseSection = () => {
    const { expertiseCoverRight, expertiseCoverLeft } = localData.images;
    const { khanda, landmark, check } = localData.svgs;

    const { ref: civilRef, inView: civilInView } = useObserver();
    const { ref:  commercialRef, inView: commercialInView } = useObserver();

    return (
        <section className="expertise">
            <div className="grid">
                <div className="col col-1" ref={civilRef}>
                    <div
                        className={`wrapper ${civilInView ? "lazy-animate" : ""}`}
                        data-lazy="fade-right"
                        style={{ transitionDelay: 0.1 + "s" }}
                    >
                        <div className="icon">{landmark}</div>
                        <div className="content">
                            <h4 className="title display-3">Civil Law</h4>
                            <ul>
                                <li>
                                    <span className="check-icon">{check}</span>Family Law
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Crime Investigation
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Immigration
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Inheritance Law
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Real Estate
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Employment
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <img className="image" src={expertiseCoverRight.src} alt="" />
                </div>
                <div className="col col-3">
                    <img className="image" src={expertiseCoverLeft.src} alt="" />
                </div>
                <div className="col col-4" ref={commercialRef}>
                    <div
                        className={`wrapper ${commercialInView ? "lazy-animate" : ""}`}
                        data-lazy="fade-left"
                        style={{ transitionDelay: 0.1 + "s" }}
                    >
                        <div className="icon">{khanda}</div>
                        <div className="content">
                            <h4 className="title display-3">Commercial Law</h4>
                            <ul>
                                <li>
                                    <span className="check-icon">{check}</span>Corporate
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Tax Law
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Intellectual property
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Dispute Resolution
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Commerce
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Digital Law
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Privacy & Data Protection
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>Insolvency & Restructuring
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
