import styled from "styled-components"

const StyledContactForm = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center; 
    background: white;
    color: black;
    height: 100vh;
    
  h2 {
    font-size: 30px;
  }
  
  .contact-info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    font-size: 18px;
  }
  
   .contact-info-data {
    display: inline-grid;
    grid-template-columns: 80px calc(100% - 80px);
    margin: 20px 0 20px 0;
  }
  
  .icon {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 30px;
    color: #b28564;
    transition: all .3s ease;
  }
  
  .icon:hover {
    color: black;
  }
  
  form {
    display: flex;
    flex-flow: column nowrap;
    min-width: 35vw;
    
    border: 1px solid #B18564;
    border-radius: 4px;
  }
  
  input, textarea, button {
    flex-grow: 1;
    padding: 20px;
    border: 1px solid #B18564;
    font-size: 14px;
    outline: none;
  }
  
  button {
    color: #B18564;
    transition: .3s ease;
  }
  
  button:hover {
    cursor: pointer;
    color: white;
    letter-spacing: 2px;
    background: #bd906f;
  }
  
  button:focus {
    outline: none;
  }
  
  .success-message {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    min-width: 35vw;
    height: 391px;
  }
  
  .turn-in {
    animation: rotate 2s;
  }
  
  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(-180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  
  .reload-form {
    opacity: .5;
    font-size: 12px;
    cursor: pointer;
    transition: opacity .5s;
  }
  
  .reload-form:hover {
    opacity: 1;
    color: #b28564;
  }
  
  @media (max-width: 1200px) {
     flex-direction: column;
     justify-content: space-evenly;
     padding: 100px 0;
     text-align: center;
     
     .contact-info {
       min-width: 40vw;
       justify-content: center;
       width: 90vw;
     }
     
     .contact-info-data {
        display: flex;
        flex-flow: column nowrap
     }
     
     .icon {
      display: -webkit-box;
     }
  }
`

export default StyledContactForm
