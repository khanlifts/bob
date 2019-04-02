import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StyledImpressionsContainer from './StyledImpressionsContainer'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "bob-beer-glasses.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "bob-deciding.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageThree: file(relativePath: { eq: "burning-entries.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledImpressionsContainer>
        <h2 id="impressions" className="section_title">Impressionen 2018</h2>
        <div className="gallery">
          <div className="col-one">
            <div className="intro__image">
              <Img fluid={data.imageOne.childImageSharp.fluid} />
            </div>
            <div className="intro__image">
              <Img fluid={data.imageTwo.childImageSharp.fluid} />
            </div>
          </div>
          <div className="col-one">
            <div className="intro__image">
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </div>
            <div className="intro__image">
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </div>
          </div>
          <div className="col-one">
            <div className="intro__image">
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </div>
            <div className="intro__image">
              <Img fluid={data.imageTwo.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </StyledImpressionsContainer>)
    }
  />
)