import Layout from "../../components/layout"
import Section from "../../components/section"

import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

import { getAllLocations } from '../../lib/api'

export default function Menu({ locations }) {
    return (
        <Layout>
            <Head>
                <title>Locations | Starbucks</title>
                <meta name="description" content="A menu page"/>
            </Head>
            <h1>Locations</h1>
            <p>This is the locations intro.</p>
            {locations.edges.map(edge =>{
                const { title, featuredImage, slug } = edge.node;

                const { sourceUrl, mediaDetails, altText } = featuredImage.node;

                const { width, height } = mediaDetails;

                return <Link href={`/locations/${slug}`}>
                    <a>
                        <Section title={title}>
                            <Image 
                                src={sourceUrl}
                                width={width}
                                height={height}
                                alt={altText}
                            />

                        </Section>
                    </a>
                </Link>   
            })}
        </Layout>
    )
}

export async function getStaticProps() {

    const locations = await getAllLocations()

    return {
        props: { locations }
    }
}