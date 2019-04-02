import styled from "styled-components"

const StyledIntroContainer = styled.div`
  width: 80%;
  margin: 10rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  .intro__text {
    width: 50%;
    padding: 0 2rem;
  }
  .intro__image {
    width: 40%;
    padding: 0 3rem;
  }
  
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    width: 90%;
    .intro__text, .intro__image {
      padding: 0 .5rem 5rem .5rem;
    }
  }
  @media (max-width: 550px) {
    margin: 6rem auto;
    .intro__text, .intro__image {
      width: 80%;
    }
  }
`

export default StyledIntroContainer
