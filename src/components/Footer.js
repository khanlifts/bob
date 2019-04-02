import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Scrollchor from 'react-scrollchor'

import StyledFooter from './StyledFooter'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        logoBob: file(relativePath: { eq: "logo-bob-full.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledFooter>
        <div className="footer">
          <h4>5. Mai 2018</h4>
          <div className="intro__image">
            <Scrollchor to="">
              <Img fluid={data.logoBob.childImageSharp.fluid} />
            </Scrollchor>
          </div>
          <h4>Kloster Stans</h4>
        </div>
        <div className="copyright">
          &copy; Best of Beer Festival. All rights reserved.
        </div>
      </StyledFooter>)
    }
  />
)