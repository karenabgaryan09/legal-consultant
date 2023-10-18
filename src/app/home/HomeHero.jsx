"use client";

import localData from "@/localdata";
import { Header, Button } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const HomeHero = () => {
    const { heroCover } = localData.images;
    const framerMotionParallax = useRef(null);
    const { scrollY, scrollYProgress } = useScroll({
        target: framerMotionParallax,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const bgimage = useTransform(scrollYProgress, [0, 1], [-360, 2000]);
    // const bgimage = useTransform(scrollYProgress, [0, 1], [-230, 1000]);
    const yValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 120]);

    const [width,setWidth] = useState(0)
    const [height,setHeight] = useState(0)
    useEffect(()=>{
        if(!window)return
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    },[])

    return (
        <>
            {width > 1000 && width < 2200 && height < 970 ? (
                <motion.img style={{ y: bgimage }} className="cover" src={heroCover.src} alt="" />
            ) : (
                <img src={heroCover.src} className="cover" alt='' />
            )}

            <div className="container">
                <div className="hero-content">
                    <h2 className="hero-description description text-warning">
                        Most Legal is a qualified law firm in Belgrade with international and
                        multidisciplinary practice.
                    </h2>
                    <br />
                    <h1 className="hero-title display-1">Experience matters most</h1>
                    <Link href="/not-exist" className="btn-link text-warning">
                        Learn More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeHero;
