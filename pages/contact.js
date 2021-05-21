import Layout from "../components/layout";
import Head from "next/head"

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Contact | Starbucks</title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>Contact</h1>
            <p>Contact content goes here.</p>
        </Layout>
    )
}