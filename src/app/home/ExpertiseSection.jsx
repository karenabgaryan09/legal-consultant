"use client";

import React from "react";
import localData from "@/localdata";
import { useObserver } from "@/hooks/lazy-load/useObserver.jsx";
import Link from "next/link";

const ExpertiseSection = () => {
    const { expertiseCoverRight, expertiseCoverLeft } = localData.images;
    const { khanda, landmark, check } = localData.svgs;

    const { ref: civilRef, inView: civilInView } = useObserver();
    const { ref: commercialRef, inView: commercialInView } = useObserver();

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
                                    <span className="check-icon">{check}</span>
                                    <Link href="/civil/family-law" className="text-dark expertise-link">
                                        Family Law
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/civil/crime-investigation" className="text-dark expertise-link">
                                        Crime Investigation
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/civil/immigration" className="text-dark expertise-link">
                                        Immigration
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/civil/inheritance-law" className="text-dark expertise-link">
                                        Inheritance Law
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/civil/real-estate" className="text-dark expertise-link">
                                        Real Estate
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/civil/employment" className="text-dark expertise-link">
                                        Employment
                                    </Link>
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
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/corporate" className="text-dark expertise-link">
                                        Corporate
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/tax-law" className="text-dark expertise-link">
                                        Tax Law
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/intellectual-property" className="text-dark expertise-link">
                                        Intellectual property
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/dispute-resolution" className="text-dark expertise-link">
                                        Dispute Resolution
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/commerce" className="text-dark expertise-link">
                                        Commerce
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/digital-law" className="text-dark expertise-link">
                                        Digital Law
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/privacy-data-protection" className="text-dark expertise-link">
                                        Privacy & Data Protection
                                    </Link>
                                </li>
                                <li>
                                    <span className="check-icon">{check}</span>
                                    <Link href="/commercial/restructuring-insolvency" className="text-dark expertise-link">
                                        Restructuring & Insolvency
                                    </Link>
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
