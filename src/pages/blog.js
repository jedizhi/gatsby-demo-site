import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={"Pet Blog Posts"}>
            <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }

            </ul>
        </Layout>
        
    )

}
export const quer = graphql`
    query {
        allFile{
            nodes {
              name
            }
        }
    }
`
export const Head = () => <Seo title = "Pet Blog Posts"/>

export default BlogPage