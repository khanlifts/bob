import styled from "styled-components"

const StyledNewsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 5rem;
  text-align: center;
  border: 1px solid white;
  border-radius: 5px;
  
  h2 {
    line-height: 1.5;
  }
   @media (max-width: 650px) {
   width: 70%;
   padding: 0;
   border: none;
   text-align: left;
   }
`

export default StyledNewsContainer
