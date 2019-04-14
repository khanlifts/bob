import React, {Component} from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaEnvelope,  FaPhone} from 'react-icons/fa'

import StyledContactForm from './StyledContactForm'
import Logo from './Logo'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {isSubmitted: false}
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.setState({isSubmitted: true})
  }

  handleReloadForm = () => {
    this.setState({isSubmitted: false})
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <StaticQuery
        query={graphql`
          query {
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
              {!isSubmitted &&
                <form
                  onSubmit={this.handleFormSubmit}
                  className="contact"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="text" name="name" id="name" placeholder="Name"/>
                  <input type="email" name="email" id="email" placeholder="Email"/>
                  <textarea name="message" id="message" placeholder="Deine Nachricht" cols="30" rows="10" />
                  <button type="submit">SENDEN</button>
                </form>
              }
              {isSubmitted &&
                <div className="success-message">
                  <span className="turn-in"><Logo/></span>
                  <p>Vielen Dank für deine Nachricht.</p>
                  <div
                    onClick={this.handleReloadForm}
                    className="reload-form"
                  >
                    Formular neu laden</div>
                </div>
              }
            </div>
          </StyledContactForm>)
        }
      />
    )
  }
}

export default ContactForm