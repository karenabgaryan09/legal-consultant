'use client'

// import React, { useEffect, useRef } from "react";

// export function useObserver(options = { rootMargin: window && window.innerWidth > 576 ? "-300px" : '0px', threshold: 0 }) {
//     const [isIntersecting, setIsIntersecting] = React.useState(false);
//     const ref = useRef(null);

//     const observer = new IntersectionObserver(([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//         if (entry.isIntersecting) observer.unobserve(ref.current);
//         // if (entry.isIntersecting) observer.disconnect();
//     }, options);

//     useEffect(() => observer.observe(ref.current), []);

//     return { ref, inView: isIntersecting };
// }


import React, { useEffect, useRef } from "react";

export function useObserver(options = { threshold: 0.2 }) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Conditionally set the rootMargin based on the window width
    // const rootMargin = window && window.innerWidth > 576 ? "-300px" : "0px";
    const rootMargin = '0px'

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(ref.current);
    }, { ...options, rootMargin });

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, inView: isIntersecting };
}