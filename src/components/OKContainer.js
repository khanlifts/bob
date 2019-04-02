import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StyledOKContainer from './StyledOKContainer'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "beer_transparent.png" }) {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <StyledOKContainer>
        <h2 className="team__title">OK MITGLIEDER</h2>
        <div className="preview__title">
          <div className="preview__points">
            <div className="preview__points-left">
              <h4>ROGER FUCHS</h4>
              <p>Diplom Biersommelier | OK-Präsident | Festwirt</p>
              <h4>DANIEL FLÜELER</h4>
              <p>Personal | Catering</p>
              <h4>CYRIL KHAN</h4>
              <p>Web | Social Media</p>
            </div>
            <div className="preview__points-left">
              <h4>REMO LIEM</h4>
              <p>Vize-Präsident | Sponsoring | Sicherheit | Aktuar</p>
              <h4>WALTER LIEM</h4>
              <p>Finanzen</p>
              <h4>MARC ZIMMERMANN</h4>
              <p>Werbung | Design</p>
            </div>
            <div className="preview__points-right">
              <h4>DANIEL BIRRER</h4>
              <p>Unterhaltung | Technik | Elektro</p>
              <h4>DAVIDE MORETTI</h4>
              <p>Logistik | Infrastruktur | Dekoration</p>
            </div>
          </div>
        </div>
      </StyledOKContainer>)
    }
  />
)
