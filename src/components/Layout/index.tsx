import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import Head from "next/head";

interface LayoutProps {
    children: ReactNode
}
export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Head>
                <link rel="shortcurt icon" href="/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Navbar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
    )
}