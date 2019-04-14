import styled from "styled-components"

const StyledSponsorenContainer = styled.attrs({
  id: 'sponsoren'
}).div`
  width: 80%;
  margin: 40vh auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
    
    h1 {
      font-size: 45px;
      margin-bottom: 15vh;
    }
    
    .categories {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
    }
    
    .ingredient-container {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      margin: 0 1rem 0 1rem;
      width: 33%;
      
      font-size: 16px;
      text-align: center;
    }
    
    .icon-container {
      height: auto;
      width: 120px;
      margin-bottom: 50px;
    }
  }
  
  .container-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
  }
  
  @media (max-width: 1200px) {
  }
  
  @media (max-width: 550px) {
  }
`

export default StyledSponsorenContainer
