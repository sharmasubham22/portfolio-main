import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./Transitions";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${TransitionStyles};
  ${Variables}

body{
  background-color: var(--background-color);
}

::selection {
  color: #060b19;
  background: #8a6de8;
  padding: 2%;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: var(--background-color) 
}
 
::-webkit-scrollbar-thumb {
  background-color: var(--border-color); 
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}

  .section-head {
    font-family: var(--heavy-font);
    text-transform: uppercase;
    color: var(--text-color);
    font-size: clamp(20px, 4vw, 40px);
  }

  .nav2 {
    background-color: rgb(6, 11, 25, 0.9);
    backdrop-filter: blur(10px);
  }

    .menu {
    background-color: rgb(6, 11, 25, 0.9);
    backdrop-filter: blur(10px);
  }

.logo{
  text-decoration:none;
  color: var(--text-color);
  font-family:var(--general-font);

  &:hover{
    color: var(--text-color);
  }
}

.nav-section{
    border-right: 1px solid var(--border-color);
}

.nav-link{
  text-decoration:none;
  color: var(--text-color);
  font-family:var(--general-font);

  &:hover{
    color: var(--highlight-color);
  }
}

.nav-link.active{
  color: var(--highlight-color);
}

.nav-active{
  background-color: var(--highlight-color);
}


.nav-social{
  color: var(--content-color);
  margin: 0px 30px;
  font-size: clamp(12px, 2vw, 25px);

  &:hover{
    color: var(--highlight-color);
    transform: translateY(-5px);
  }
}

.section{
  width:100%;
  height:90vh;
 display:flex;
 justify-content:center;
 align-items:center;
}

.navigation {
  position: fixed;
  z-index: 2;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}
.nav__item {
  width: 12px;
  height: 12px;
  display: block;
  margin: 12px auto;
  border: solid 2px var(--text-color);
  border-radius: 50%;
  cursor: pointer;
}
.nav__item:hover {
  background-color: var(--highlight-color);
  border: solid 2px var(--highlight-color);
}

  .text {
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family: var(--general-font);
      font-size: 24px;
      fill:var(--background-color);
    }

    #rotatingText {
      animation-name: rotate-circle;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes rotate-circle {
      to {
        transform: rotate(1turn);
      }
    }

       .link-design {
      text-decoration: none;
      display: inline-block;
      position: relative;
      color: var(--highlight-color);
      font-family: var(--general-font);
      font-size: clamp(17px, 2vw, 20px);
    }

    .link-design::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--highlight-color);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .link-design:hover {
      color: var(--highlight-color);
    }
    
    .link-design:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
      
    }

@media (max-width: 1024px){
.navigation{
  display:none;
}

.section{
  height:100%;
}
}

@media (max-width: 1104px){
  .nav2{
  display:none;
}
}

@media (min-width: 1104px){
.menu{
  display:none;
}
}
`;


export default GlobalStyle;