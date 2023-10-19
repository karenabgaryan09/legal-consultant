"use client";

import localData from "@/localdata";
import { Header, Button } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const ShowcaseSection = () => {
    const { showcaseCover } = localData.images;

    const [width,setWidth] = useState(0)
    const [height,setHeight] = useState(0)
    const [bottom, setBottom] = useState(360)
    useEffect(()=>{
        if(!window)return
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setBottom(window.innerWidth > 1400 ? 360 : 300)

    },[])


    const framerMotionParallax = useRef(null);
    const { scrollY, scrollYProgress } = useScroll({
        target: framerMotionParallax,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const bgimage = useTransform(scrollYProgress, [0, 1], [-bottom, 2000]);
    // const bgimage = useTransform(scrollYProgress, [0, 1], [-230, 1000]);
    const yValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 120]);



    return (
        <section className="showcase">
            {width > 1060 && width < 2200 && height < 1000 ? (
                <motion.img style={{ y: bgimage }} className="cover" src={showcaseCover.src} alt="" />
            ) : (
                <img src={showcaseCover.src} className="cover" alt='' />
            )}

            <div className="container">
                <div className="showcase-content">
                    <h2 className="showcase-description description text-warning">
                        Most Legal is a qualified law firm in Belgrade with international and
                        multidisciplinary practice.
                    </h2>
                    <br />
                    <h1 className="showcase-title display-1">Experience matters most</h1>
                    <Link href="/not-exist" className="btn-link text-warning">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
