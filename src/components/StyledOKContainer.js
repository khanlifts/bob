import styled from "styled-components"

const StyledOKContainer = styled.div`
  width: 80%;
  margin: 0 auto 5rem auto;
  padding-bottom: 10rem;
  
  .team__title {
    text-align: center;
    margin-bottom: 5rem;
  }

  .preview__title {
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  .preview__points {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    h4 {
      font-size: 120%;
      margin-bottom: 0;
      line-height: 1.6;
    }
    p {
      font-size: 80%;
      position: relative;
      bottom: 15px;
    }
  }
  .preview__points-left {
    padding-right: 3rem;
  }
  
  @media (max-width: 1200px) {
    display: block;
  }
  
    @media (max-width: 850px) {
    .preview__points {
      display: block;
    }
    .preview__points-left, .preview__points-right {
      padding: 0;
    }
    h4, h2 {
      text-align: center;
    }
    h4 {
      font-size: 18px;
    }
    p {
      margin-bottom: 20px;
      text-align: center;
    }
  }
`

export default StyledOKContainer
