import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaEnvelope,  FaPhone} from 'react-icons/fa'

import StyledContactForm from './StyledContactForm'

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
      <StyledContactForm>
        <div>
          <h2>Direkter Kontakt</h2>
          <div className="contact-info">
            <div className="contact-info-data">
              <span className="icon"><FaEnvelope/></span>
              <span>Schreibt uns auf info@bestofbeerfestival.ch <br/> oder über das Formular auf dieser Seite.</span>
            </div>
            <div className="contact-info-data">
              <span className="icon"><FaPhone/></span>
              <span>Erreiche uns telefonisch unter +41 79 409 58 76.</span>
            </div>
          </div>
        </div>
        <div>
          <form className="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="text" name="name" id="name" placeholder="Name"/>
            <input type="text" name="email" id="email" placeholder="Email"/>
            <textarea name="message" id="message" placeholder="Deine Nachricht" cols="30" rows="10" />
            <button type="submit">Senden</button>
          </form>
        </div>
      </StyledContactForm>)
    }
  />
)