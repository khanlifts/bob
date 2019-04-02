import styled from "styled-components"

const StyledFooter = styled.div`
  .footer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    border-top: 1px solid white;
    font-size: 1.2em;
  }
  
  .intro__image {
    height: auto;
    width: 120px;
  }
  
  .copyright {
    width: 60%;
    margin: 1rem auto;
    height: 10vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
    font-size: .8em;
    text-align: center;
  }
  
  @media (max-width: 500px) {
    .footer {
      flex-direction: column;
    }
  }
`

export default StyledFooter
