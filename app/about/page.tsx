import Heading from "../components/Heading";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About',
};

export default function AboutPage() {
    return (
        <>
            <Heading>About me</Heading>
            <p>
                hi i am fran
            </p>
        </>
    );
}