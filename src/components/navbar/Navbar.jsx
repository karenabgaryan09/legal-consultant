"use client";
import React, { useState, useEffect } from "react";
import { Dropdown, ControlledAccordion, Drawer, Button } from "../";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { v4 as uuidv4 } from "uuid";
import localData from "@/localdata";

const links = [
    { href: "/", title: "home" },
    { href: "/about", title: "about us" },
    { href: "/people", title: "people" },
    { href: "/news", title: "news" },
    { href: "/contact", title: "contact" },
];

const civilLaw = [
    { href: "/civil/family-law", title: "family law", id: "civil-law-1" },
    { href: "/civil/inheritance-law", title: "inheritance law", id: "civil-law-2" },
];

const commercialLaw = [
    { href: "/commercial/corporate", title: "corporate", id: "commercial-law-1" },
    { href: "/commercial/commerce", title: "commerce", id: "commercial-law-2" },
];

const DrawerChild = ({ parentCallback }) => {
    // const location = useLocation();
    const pathname = usePathname();

    return (
        <>
            {links.map(({ title, href }, index) => (
                <li className="nav-item" key={index}>
                    <Link
                        href={href}
                        className={`nav-link ${pathname === href ? "active" : ""}`}
                        onClick={parentCallback}
                    >
                        {title}
                    </Link>
                </li>
            ))}
            <ControlledAccordion
                items={[
                    {
                        buttonName: "civil law",
                        variant: "text",
                        color: "secondary",
                        content: civilLaw.map(({ href, title }, index) => (
                            <Link key={index} href={href} className="nav-link" onClick={parentCallback}>
                                {title}
                            </Link>
                        )),
                    },
                    {
                        buttonName: "commercial law",
                        variant: "text",
                        color: "secondary",
                        content: commercialLaw.map(({ href, title }, index) => (
                            <Link key={index} href={href} className="nav-link" onClick={parentCallback}>
                                {title}
                            </Link>
                        )),
                    },
                ]}
            />
        </>
    );
};

export default function Navbar() {
    // const location = useLocation();
    const pathname = usePathname();
    const { logo } = localData.images;
    const { bars, chevronRight } = localData.svgs;

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo.src} alt="" />
                </a>
                {/* <div className="burger">
                    <span></span>
                </div> */}
                <Drawer
                    togglerVariant="circle"
                    togglerColor="light"
                    togglerClassName="navbar-toggler"
                    togglerIcon={bars}
                    Child={DrawerChild}
                ></Drawer>

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {links.map(({ href, title }, index) => {
                            return index === 3 ? (
                                <React.Fragment key={index}>
                                    <Dropdown
                                        {...{
                                            className: "nav-item",
                                            title: "expertise",
                                            isInsideClick: true,
                                        }}
                                    >
                                        <h4 className="title">civil law</h4>
                                        {civilLaw.map(({ href, title }, index) => (
                                            <Link href={href} key={index} className="link">
                                                {title}
                                                {chevronRight}
                                            </Link>
                                        ))}
                                        <br />
                                        <h4 className="title">commercial law</h4>
                                        {commercialLaw.map(({ href, title }, index) => (
                                            <Link href={href} key={index} className="link">
                                                {title}
                                                {chevronRight}
                                            </Link>
                                        ))}
                                    </Dropdown>
                                    <li className="nav-item">
                                        <Link
                                            href={href}
                                            className={`nav-link ${pathname === href ? "active" : ""}`}
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                </React.Fragment>
                            ) : (
                                <li className="nav-item" key={index}>
                                    <Link
                                        href={href}
                                        className={`nav-link ${pathname === href ? "active" : ""}`}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                        <Button
                            name="Learn More"
                            variant="outlined"
                            color="warning"
                            className="learn-more-btn"
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
