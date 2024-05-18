import {ReactNode} from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";
import './globals.css';
import {exo2, orbitron} from "@/app/fonts/fonts";
import {Metadata} from "next";

interface LayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer',
    },
};
export default function RootLayout({children}: LayoutProps) {
    return (
        <html className={`${exo2.variable} ${orbitron.variable}`}>
            <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
                <header>
                    <NavBar></NavBar>
                </header>
                <main className="grow py-3">{children}</main>
                <footer className={"border-t text-center text-xs"}>footer</footer>
            </body>
        </html>
    );
}