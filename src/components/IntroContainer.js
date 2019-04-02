import React from "react"
import { StaticQuery, graphql } from "gatsby"

import StyledIntroContainer from './StyledIntroContainer'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "bars.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 466, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledIntroContainer>
        <div className="intro__text">
          <h3>LIEBE BESUCHERINNEN | LIEBE BESUCHER</h3>
          <p>Herzlich willkommen in der Welt der Biere! Die sensorische Vielfalt von Bier
            ist nahezu unbegrenzt. Je nach Kategorisierung gibt es deutlich mehr als 100
            verschiedene Bierstile, die ein grandioses Spiel an Aromen und Geschmackseindrücken vermitteln.
          </p>
          <p>
            Bei der vielfältigen Bierauswahl haben wir einen speziellen Fokus dem Trappisten Bier gewidmet.
            „Bier darf sich nur Trappistenbier nennen, wenn es innerhalb der Mauern einer Trappisten-Abtei,
            unter Aufsicht von Mönchen gebraut wurde und ein Teil des Ertrages Wohltätigkeitsinitiativen zugutekommt.“
            Pur & ehrlich – und das schmeckt man. Weltweit gibt es 11 Trappistenklöster und 8 davon haben wir für euch
            zusammengestellt.<br />
            Viel Vergnügen beim AusproBIERen.
          </p>
          <p>Prost- und auf eine genussreiche Entdeckungsreise!</p>
          <p><i>Roger Fuchs</i></p>
          <p>Diplom Biersommelier<br />
            OK-Präsident Best of Beer Festival
          </p>
        </div>
        <div className="intro__image">
          <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
      </StyledIntroContainer>)
    }
  />
)