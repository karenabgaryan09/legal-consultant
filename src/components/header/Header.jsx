import React from "react";
import { Navbar } from "../";

export default function Header({ className,children }) {
    return (
        <header className={"hero " + className}>
            <Navbar />
            {children}
        </header>
    );
}
