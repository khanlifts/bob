import styled from "styled-components"

const StyledImpressionsContainer = styled.div`
  margin: 20vh 0 30vh 0;
  
  .section_title {
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 6rem;
  }
  
  .gallery {
    margin: 0 auto 10rem auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  
  .col-one {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .intro__image {
    height: auto;
    width: 300px;
    border: 1px solid white;
    margin: 1rem;
  }
  
  @media (max-width: 1050px) {
    .gallery {
      flex-direction: column;
      align-items: center;
    }
  }
`

export default StyledImpressionsContainer
