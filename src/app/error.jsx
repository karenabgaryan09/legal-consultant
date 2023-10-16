"use client";

const error = ({ reset }) => {
    return (
        <main>
            <div className="container">
                <h1>Error Page ㋛</h1>
                <button onClick={() => reset()}>reset</button>
            </div>
        </main>
    );
};

export default error;
