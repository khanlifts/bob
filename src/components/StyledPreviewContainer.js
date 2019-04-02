import styled from "styled-components"

const StyledIntroContainer = styled.div`
  width: 80%;
  margin: 0 auto 5rem auto;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  
  span {
    display: inline;
  }

  .preview__title {
    padding: 0 2rem;
  }
  .preview__points {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .preview__points-left {
    padding-right: 3rem;
  }
  .icons {
    margin-bottom: 20px;
    transition: color 1s;
    font-size: 40px;
  }
  .icons:hover {
    color: #B28564;
  }
  
  @media (max-width: 1200px) {
    display: block;
    .preview__image {
      width: 50%;
      margin: 0 auto;     
    }
  }
  
    @media (max-width: 550px) {
    .preview__points {
      display: block;
    }
    .preview__points-left, .preview__points-right {
      padding: 0;
    }
    .icons {
      font-size: 30px;
      width: 100%;
    }
    h4, h2 {
      text-align: center;
    }
    h4 {
      font-size: 18px;
    }
    p {
      margin-bottom: 40px;
    }
  }
`

export default StyledIntroContainer
