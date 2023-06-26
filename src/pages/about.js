// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
    <p>Hi!,This page is for dog lovers out there.</p>
    </Layout>
    
  )
}

// Step 3: Export your component
export const Head = () => <Seo title="About Us"/>
export default AboutPage