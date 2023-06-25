import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"


// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle={"Home Page"}>
      <p>This is an awesome Gatsby App.</p>
      <StaticImage
        //alt = "Mochi and Snowy , two cute and playfull pomerians"
        //src = "https://images.pexels.com/photos/4262325/pexels-photo-4262325.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt = "Snowy , cute and playfull pomerians"
        src = "../images/snowy.jpg"
      
      />      
      </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage