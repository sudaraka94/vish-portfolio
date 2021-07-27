import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteMetadata = data.site.siteMetadata.title

  return (
    <Layout siteMetadata={siteMetadata}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            About Me
          </h2>
          {/* <h3 id="dynamic-styles">About Me</h3> */}
          <p>
            Photography is the best way to freeze the precious moments of your
            life. And it will bring back the exact emotion you had even after
            ages. Since I am a memory collector in my personal life, I am more
            than happy to help people to collect their wonderful memories in
            their day-to-day lives.
          </p>
          <p>
            Hello! I am Vishaka, a female freelance photographer based in
            Singapore. I am a creative person who is keen on colors, shapes,
            people, and nature. Photography was one of my hobbies since
            childhood. If you like my work, trust me I will help you to create
            and explore the best stories about you. I am friendly, flexible, and
            reliable when it comes to working with clients.
          </p>
          <p>
            Please do not hesitate to contact me if you need to keep magical
            moments in your life.
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <img
              src={
                "https://live.staticflickr.com/65535/51339612450_fe6d97ab83_k.jpg"
              }
            />
            <figcaption>It's Just Me</figcaption>
          </figure>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          instagram
          twitter
          facebook
          medium
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
