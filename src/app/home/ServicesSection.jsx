import React from "react";
import localData from "@/localdata";
import Link from "next/link";

const ServicesSection = () => {
    const { servicesCover } = localData.images;
    return (
        <section className="services">
            <img className="cover" src={servicesCover.src} alt="" />
            <div className="container">
                <div className="services-content">
                    <h2 className="services-title display-2">Free Consultations Affordable Services</h2>
                    <p className="services-description description-secondary">
                        We offer a free consultation so that you can tell your story, learn your options, and
                        discover how we can help.
                        <br />
                        <br />
                        People may be tempted to give up their case or handle alone, which is often a recipe
                        for an undesirable outcome.
                        <br />
                        <br />
                        With us you have easy access to justice and compliance.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <Link href="/not-exist">
                        <Button variant="contained" color="warning" name="request free consultation" size="lg" />
                    </Link> */}
                    <Link href="/not-exist" className="btn-link text-warning">
                        request free consultation
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
