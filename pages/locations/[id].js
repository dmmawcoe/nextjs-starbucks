import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import Card from '../../components/card'

import { getAllLocationsSlugs, getLocationBySlug } from '../../lib/api'

export async function getStaticPaths() {

    const allSlugs = await getAllLocationsSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        } 
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    
    const locationData = await getLocationBySlug(params.id)

    return {
        props: {
            locationData
        }
    }
}

export default function Location({ locationData }) {

    const { title, featuredImage, content, relatedPeople, menuTypes, locationInformation } = locationData

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width, height } = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>Back to locations</a>
                    </Link>
                </Col>
            </Row>
            
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            {menuTypes.edges.map(edge =>{
                const { name, items } = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3} key={index}>
                                <Card node={node} />
                            </Col>
                        })}
                    </Row>
                </Section>   
            })}

            {relatedPeople.locationsEmployees.map(edge =>{
                return <Link href={`/employees/${edge.slug}`}>
                    <a>
                        <Card node={edge} />
                    </a>
                </Link>
            })}

        </Layout>
    )
}