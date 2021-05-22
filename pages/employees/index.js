import Layout from "../../components/layout"
import Section from "../../components/section"

import Image from "next/image"
import Head from "next/head"
import Link from "next/link"

import { getAllPeople } from '../../lib/api'

export default function Menu({ employees }) {
    return (
        <Layout>
            <Head>
                <title>Employees | Starbucks</title>
                <meta name="description" content="A menu page"/>
            </Head>
            <h1>Employees</h1>
            <p>This is the employee portal.</p>
            {employees.edges.map(edge =>{
                const { title, featuredImage, slug } = edge.node;

                const { sourceUrl, mediaDetails, altText } = featuredImage.node;

                const { width, height } = mediaDetails;

                return <Link href={`/employees/${slug}`}>
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

    const employees = await getAllPeople()

    return {
        props: { employees }
    }
}