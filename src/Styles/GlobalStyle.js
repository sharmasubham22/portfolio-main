import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./Transitions";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${TransitionStyles};
  ${Variables}

body{
  background-color: var(--background-color);
  scroll-behavior: smooth;
}

::selection {
  color: var(--background-color);
  background: var(--content-color);
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

.patterned-col{
  background: url(https://drive.google.com/uc?export=view&id=18Y3bQ_1Gu7ebqocRCe1JFvlOXuRRtbnM);
  height:500px;
  width:500px;
}

@media (max-width:991px){
  .patterned-col{
    display:none;
  }
}

.ex-section{
background: url(https://drive.google.com/uc?export=view&id=1PpBENYaRX2c0IfonfbL1z1tgm5ktwBEw);
  background-size:contain;
  background-repeat: no-repeat;
}

.blob {
	background: black;
	border-radius: 50%;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	margin: 10px;
	height: 15px;
	width: 15px;
	transform: scale(1);
	animation: pulse-black 2s infinite;
}

@keyframes pulse-black {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}


.blob.green {
	background: rgba(51, 217, 178, 1);
	box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
	animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
	}
}

.bullet-hashtag{
  width:58px;
  height:50px;
  margin-right:10px;
}

@media (max-width:684px){
.bullet-hashtag{
  width:35px;
  height:30px;
}
}

  .section-head {
    font-family: var(--heavy-font);
    // text-transform: uppercase;
    font-weight: 700;
    color: var(--text-color);
    font-size: clamp(40px, 4vw, 70px);
  }

  .nav2 {
    background-color: var(--background-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

.logo{
  text-decoration:none;
  color: var(--text-color);
  font-family:var(--general-font);
  user-select: none;

  &:hover{
    color: var(--text-color);
  }
}

.nav-section{
    border-right: 1px solid var(--border-color);
}

.nav-link{
  text-decoration:none;
  color: var(--content-color);
  font-family:var(--general-font);
  font-weight:700;

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
  transition: 0.3s;
  text-decoration:none;

  &:hover{
    color: var(--highlight-color);
    transform: translateY(-5px);
  }
}

.hero-section{
  height:90vh;
}

.section{
  width:100%;
  height:100vh;
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

.menu .nav-btn {
        visibility: visible;
        opacity: 1;
      }

      .nav-btn{
        color:var(--highlight-color);
        z-index:2;
      } 
      
      .menu .menu-nav {
        position: fixed;
        top: -100vh;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        background-color: var(--background-color);
        transition: 1s;
        z-index: 1;
      }

      .menu .responsive_nav {
        transform: translateY(100vh);
      }

      .menu-nav .nav-link {
        font-size: 24px;
        font-family: var(--heavy-font);
        font-weight:700;
        text-transform: uppercase;
      }

  .menu {
   background-color: var(--background-color);
  cursor: pointer;
  transition: 0.5s ease;
 

}
.menu .bar {
  width: 30px;
  height: 4px;
  background: var(--highlight-color);
  
  transition: 0.4s ease;
  transform: translate(-40%, 100%)
}

.menu .bar:not(:first-child) {
  margin-top: 5px;
}

#hi {
  position: absolute;
  left: -999px;
  top: -999px;
}

#hi:checked + .menu {
  transform: translate(-40%, -40%) rotatey(180deg);
}
#hi:checked + .menu .bar {
  transform: rotatey(180deg) rotatex(360deg);
}
#hi:checked + .menu .bar:first-child {
  transform: rotate(-40deg);
  margin-top: 20px;
}
#hi:checked + .menu .bar:nth-child(2) {
  opacity: 0;
}
#hi:checked + .menu .bar:nth-child(3) {
  margin-top: -13px;
  transform: rotate(45deg);
}

  .text {
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family: var(--general-font);
      font-size: 16.2px;
      fill:var(--content-color);
    }

    @media (max-width:694px){
      .text{
        letter-spacing: 1.5px;
      }
    }

    #rotatingText {
      animation-name: rotate-circle;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    #wavy-circle{
      animation: none;
    }

    @keyframes rotate-circle {
      to {
        transform: rotate(1turn);
      }
    }

.fa-arrow-right{
  transform:rotate(-45deg);
  transition: transform 0.25s ease-out;
}

       .link-design {
      text-decoration: none;
      display: inline-block;
      position: relative;
      color: var(--highlight-color);
      font-family: var(--general-font);
      font-size: clamp(17px, 2vw, 24px);
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

      .fa-arrow-right{
         transform:rotate(0deg);
      }
    }
    
    .link-design:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    .brand-icons{
      text-decoration:none;
      color:var(--content-color);

      &:hover{
        color:var(--content-color);
      }
    }

    .section-list{
   list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
    }

    .section-list:before{
      content: "";
  display: inline-block;
  width: 2px;
  background: var(--border-color);
  position: absolute;
  left: 3px;
  top: 20px;
  height: calc(100% - 25px );
    }

    .section-list .list-item {
  position: relative;
  padding-left: 30px;

}

.section-list .list-item:before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--highlight-color);
  position: absolute;
  left: 0;
  top: 5px;

  border-radius: 10px;
}

 .section-list2{
   list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    }

  .section-list2:before{
    content: "";
    display: inline-block;
    width: 2px;
    background: var(--border-color);
    position: absolute;
    left: 3px;
    top: 20px;
    height: calc(100% - 0px );
    }

    .section-list2:before .section-list2:last-child{
      content:none;
    }

  .section-list2 .list-item2 {
    position: relative;
    padding-left: 30px;
}

.section-list2 .list-item2:before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--highlight-color);
  position: absolute;
  left: 0;
  top: 8px;
  border-radius: 10px;
}

    .skills-container {
      width: 100%;
      background-color: var(--background-color);
      border-radius:10px;
    }

    .skills {
      text-align: right;
      padding-top: 3px;
      padding-bottom: 3px;
    }

.ph-fill {
 color:var(--content-color);
 font-size: clamp(25px, 3vw, 25px);
 transition:0.3s ease-out;
}

.ph-fill:hover{
 color:var(--highlight-color);
}


@media (max-width: 1024px){
.navigation{
  display:none;
}

.section{
  height:100%;
}
}

// @media (max-width: 554px){
//   .hero-section{
//   height:80vh;
// }
// }

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