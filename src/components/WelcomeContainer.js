import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from "styled-components"

const StyledWelcomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center; 
  text-align: center;
  
  @media (max-width: 550px) {
    height: 80vh;
    margin: 0 2rem 0 2rem;
    flex-direction: column;
    justify-content: center;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            subtitle
          }
        }
        file(relativePath: { eq: "logo-bob-full.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledWelcomeContainer>
        <div className="container__left">
          <h1>{data.site.siteMetadata.subtitle}</h1>
        </div>
        <div className="container__right">
          <Img fixed={data.file.childImageSharp.fixed}/>
        </div>
      </StyledWelcomeContainer>)
    }
  />
)