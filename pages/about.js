import Layout from "../components/layout";
import Head from "next/head"

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Starbucks</title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>About</h1>
            <p>About content goes here.</p>
        </Layout>
    )
}