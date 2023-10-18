"use client";

import { Header } from "@/components";

const error = ({ reset }) => {
    return (
       <>
       <Header/>
         <main>
             <section>
                <div className="container">
                    <h1>Error Page ㋛</h1>
                    <button onClick={() => reset()}>reset</button>
                </div>
             </section>
         </main>
       </>
    );
};

export default error;
