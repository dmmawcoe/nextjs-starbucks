import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Starbucks</h1>
        <p>Coffee</p>
        <Button 
          label="View menu" 
          path="/menu"
          type="primary"
        />
        <Button 
          label="View locations"
          path="/locations"
          type="primary" 
        />
        <Button 
          label="View employees"
          path="/employees"
          type="primary" 
        />
        <Button 
          label="View portfolio" 
          path="/portfolio"
          type="primary"
        />
        <Button 
          label="About me"
          path="/about"
          type="secondary" 
        />
      </section>
    </Layout>
  )
}