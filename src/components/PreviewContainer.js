import React from "react"
import { StaticQuery, graphql } from "gatsby"
import StyledPreviewContainer from './StyledPreviewContainer'
import Img from 'gatsby-image'

import { FaBookReader, FaBeer, FaDrum, FaUtensils } from 'react-icons/fa'

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
      <StyledPreviewContainer>
        <div className="preview__image">
          <Img fixed={data.file.childImageSharp.fixed}/>
        </div>
        <div className="preview__title">
          <h2>DAS ERWARTET DICH</h2>
          <div className="preview__points">
            <div className="preview__points-left">
              <h4>Entdecken</h4>
              <span>
                <FaBookReader className="icons"/>
                <p>Best of Beer Festival hat 40+ Biere aus aller Welt,
                die erwarten von dir entdeckt zu werden.
              </p>
              </span>
              <h4>Geselligkeit</h4>
              <FaBeer className="icons"/>
              <p>Mit Freunden über den Geschmack diskutieren und neue Biere weiterempfehlen.</p>
            </div>
            <div className="preview__points-right">
              <h4>Grill</h4>
              <FaUtensils className="icons"/>
              <p>Exzellente Verpflegung vom Grill während des ganzen Festivals bis spät in die Nacht hinein.</p>
              <h4>Bands</h4>
              <FaDrum className="icons"/>
              <p>Mehrere Bands verhelfen der Stimmung am Festival zum Höhepunkt.</p>
            </div>
          </div>
        </div>
      </StyledPreviewContainer>)
    }
  />
)
