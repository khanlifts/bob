import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StyledSponsorenContainer from './StyledSponsorenContainer'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        hopfen: file(relativePath: { eq: "hopfen160.png" }) {
          childImageSharp {
            fluid(maxWidth: 160, maxHeight: 160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        malz: file(relativePath: { eq: "malz160.png" }) {
          childImageSharp {
            fluid(maxWidth: 160, maxHeight: 160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wasser: file(relativePath: { eq: "wasser160.png" }) {
          childImageSharp {
            fluid(maxWidth: 160, maxHeight: 160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        file(relativePath: { eq: "beer_transparent.png" }) {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledSponsorenContainer id="sponsoren">
        <h1>BoB-Sponsoren</h1>
        <div className="categories">
          <div className="ingredient-container">
            <div className="icon-container">
              <Img fluid={data.hopfen.childImageSharp.fluid}/>
            </div>
            <h2>Hopfen</h2>
            <p>Unsere Hauptsponsoren greifen unserem Festival finanziell am meisten unter die Arme.
              Ohne euch wäre unser Anlass nicht möglich. Wir danken euch von Herzen.
            </p>
          </div>
          <div className="ingredient-container">
            <div className="icon-container">
              <Img fluid={data.malz.childImageSharp.fluid}/>
            </div>
            <h2>Malz</h2>
            <p>Unsere Malzsponsoren vertreten die zweite Schicht von unseren grosszügigen Wohltätern. Auch Ihr habt
              ein herzliches Dankeschön verdient.
            </p>
          </div>
          <div className="ingredient-container">
            <div className="icon-container">
              <Img fluid={data.wasser.childImageSharp.fluid}/>
            </div>
            <h2>Wasser</h2>
            <p>
              Vielen Dank unseren Wassersponsoren. Ihr bildet den Abschluss unserer grossartigen Sponsorenreihe.
            </p>
          </div>
        </div>
      </StyledSponsorenContainer>)
    }
  />
)
