import "@/styles/index.scss";
import { Inter } from "next/font/google";
import { Header,Footer } from "@/components";
import localData from "@/localdata";

const inter = Inter({ subsets: ["latin"] });

const { example } = localData.images;

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    openGraph: {
        title: "Acme",
        description: "Acme is a...",
        images: [
            {
                url: example.src,
                width: 1200,
                height: 630,
                alt: "Acme OG Image",
            },
        ],
    },
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header/>
                {children}
                <Footer />
            </body>
        </html>
    );
}
