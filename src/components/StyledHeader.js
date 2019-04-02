import styled from "styled-components"

const StyledHeader = styled.div`
  .menu-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    padding-top: 3rem;
    height: 5.5rem;
    background: black;
    font-size: 18px;
    z-index: 2;
  }
  
  .menu ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 60%;
  }
   
   
  .menu ul li > ul {
    flex-direction: column;
    opacity: 0;
    height: auto;
    width: 100%;
    margin-top: 30px;
    transition: opacity .2s ease-in;
    li {
      width: 100%;
      background-color: white;
      border-bottom: 1px solid gray;
      a {
        color: black;
      }
    }
  }  
  
  .logo__item {
    position: relative;
    bottom: 30px;
  }
  
  .menu a {
    display: flex;
    text-decoration: none;
    color: white;
    padding: 15px;
    text-transform: uppercase;
    &:hover {
      color: #b28564;
    }
  }
  
  .fa-facebook {
    margin-top: 4px;
  }
  
  .fa-beer {
    display: none; 
  }
  
   @media (max-width: 850px) {
    .menu-wrapper {
      width: 40%;
      display: flex;
      justify-content: center;
      padding: 4rem;
      border-right: 1px solid white;
      height: 100vh;
      transition: left 1s ease;
      position: fixed;
      left: 0;
    }
    
    .menu {
      margin-top: 50px;
    }
    
    .menu ul {
      flex-direction: column;
      width: 100%;
      padding: 0;
      li {
        transition: all .1s ease-in;
        width: 40vw;
      }
      li:hover {
        background-color: white;
      }
    }
    .menu a {
      justify-content: center;
    }
    .logo__item {
      display: none;
    }
    
   .fa-beer {
      display: initial;
      font-size: 50px;
      position: fixed;
      top: 25px;
      left: 0;
      transition: transform .3s ease;
      cursor: pointer;
      padding-left: 30px;
      z-index: 30;
    }
    
    .fa-beer:hover {
      color: #B28564;
      transform: rotate(25deg);
    }
   
  }
`

export default StyledHeader
