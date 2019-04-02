import React from 'react'
import { FaFacebookF, FaBeer } from 'react-icons/fa'
import Scrollchor from 'react-scrollchor'

import StyledHeader from './StyledHeader'
import Logo from './Logo'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: true
    }
  }

  setHeader = () => {
    if (window.innerWidth >= 850) {
      this.setState({showMenu : true})
    } else {
      this.setState({showMenu : false})
    }
  }

  componentDidMount() {
    this.setHeader()
    window.addEventListener('resize', this.setHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeader)
  }

  render() {
    return (
      <StyledHeader>
        <FaBeer
          className="fa-beer"
          onClick={() => {this.setState({showMenu: !this.state.showMenu})}}
        />
        <div
          className="menu-wrapper"
          style={{left: this.state.showMenu ? '0' : '-100vw'}}
        >
          <nav className="menu">
            <ul>
              <li><Scrollchor to="">Home</Scrollchor></li>
              <li><Scrollchor to="">Sponsoren</Scrollchor></li>
              <li><Scrollchor to="">Programm</Scrollchor></li>
              <li className="logo__item"><Scrollchor to=""><Logo/></Scrollchor></li>
              <li><Scrollchor to="">Kontakt</Scrollchor></li>
              <li><Scrollchor to="#impressions">Impressionen</Scrollchor></li>
              <li>
                <a
                  href="https://www.facebook.com/Best-of-Beer-Festival-1770034253278039/"
                  className="fa-facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </StyledHeader>
    )
  }
}

export default Header
