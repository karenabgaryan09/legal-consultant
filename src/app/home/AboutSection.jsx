import React from 'react'
import localData from '@/localdata';
import Link from 'next/link';

const AboutSection = () => {
    const { aboutCover } = localData.images;
    return (
        <section className="about">
            <img className="cover" src={aboutCover.src} alt="" />
            <div className="container">
                <div className="about-content">
                    <h2 className="about-title display-2">About Us</h2>
                    <p className="about-description description-secondary">
                        We are a team of lawyers and specialists who Work alongside clients to devise tailored
                        solutions.
                        <br />
                        <br />
                        Our expertise is based on numerous Court cases and commercial transactions.
                        <br />
                        <br />
                        Inventive thinking and speed of action Build the core of our practice.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <Link href="/not-exist">
                        <Button variant="contained" color="warning" name="View More" size="lg" />
                    </Link> */}
                    <Link href="/not-exist" className="btn-link text-warning">
                        view more
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection