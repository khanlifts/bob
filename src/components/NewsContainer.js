import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StyledNewsContainer from './StyledNewsContainer'

export default () => (
  // This query now is not used but left in here to serve as a building block for
  // later api usage of content. Don't forget to add the data parameter after render.
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
    render={() => (
      <StyledNewsContainer>
        <div className="news">
          <h2>Liebe Besucher, Sponsoren und Fans vom Best of Beer Festival</h2>
          <p>
            Wir blicken auf eine erfolgreiche zweite Auflage des Best of Beer Festival zurück.
            <br />Dafür seid alleine ihr verantwortlich - DANKE!
          </p>
          <p>
            Das Kapuziner Kloster Stans,<br /> unsere Geburtsstätte, macht die Türen für neue <br /> Abenteuer auf.<br />
            Wir atmen deshalb durch und gewinnen mit einem <br /> neuen Konzept im Frühling 2020 eure
            <br />Geschmacksnerven zurück.
          </p>
          <p>Seid gespannt - Hopfenfreundliche Grüsse</p>
          <p><i>OK Best of Beer Festival</i></p>
        </div>
      </StyledNewsContainer>)
    }
  />
)