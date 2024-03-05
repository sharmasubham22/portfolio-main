import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./Transitions";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
  ${TransitionStyles};
  ${Variables}

//   @font-face {
//     font-family: northden-free;
//     src: url();
//     font-display: swap;
// }

//   @font-face {
//     font-family: northdenrough-free;
//     src: url();
//     font-display: swap;
// }

body{
  background: var(--background-color);
  scroll-behavior: smooth;
  
}

#cursor-dot,
#cursor-dot-outline {
  z-index: 99999;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

#cursor-dot {
  width: 10px;
  height: 10px;

  mix-blend-mode: difference;
        background: white;
}

#cursor-dot-outline {
  width: 1px;
  height: 1px;
  // background-color: rgba(255,255,255, 0.3);
  mix-blend-mode: difference;
        background: white;
}


#loader {
  height:100%;
  width:100%;
  background-color:var(--background-color);
  position:fixed;
  z-index:9999;
  top:0;
  transition:all ease 1s;
}

#loader .center-content{
  height:78%;
}

.loader-text{
  color:var(--text-color);
  //   background-image: linear-gradient(45deg, var(--text-color2), var(--highlight-color));
  //  -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent; 
  // -moz-background-clip: text;
  // -moz-text-fill-color: transparent;
  font-size: clamp(40px,7vw, 120px);
  font-family: var(--heavy-font);
  font-weight:800;
  // text-transform: uppercase;
  position:absolute;
  opacity:0;
  animation-name:load;
  animation-duration:3s;
  animation-delay:0.5s;
  animation-timing-function:linear;
  overflow:hidden;
}

@keyframes load{
  0%{
opacity:0;
  }
  10%{
opacity:1;
  }
   90%{
opacity:1;
  }
   100%{
opacity:0;
  }
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

@media (max-width:991px){
  .patterned-col{
    display:none;
  }
}

    .hero-gradient {
      position: absolute;
      z-index: -2;
      display: block;
      width: clamp(200px, 60vw, 100vw);
      height:  clamp(200px, 60vw, 100vw);
      border-radius: 50%;
      // border-top-right-radius: 50%;
      // border-bottom-right-radius: 50%;
      filter: blur(120px);
      opacity:0.1;
      // left:-10%;
      top:-50%;
      // bottom: -5%;
      background-color: rgba(150, 150, 150, 1);
      // background: var(--highlight-color);
    }

  .section-head {
    font-family: var(--heavy-font);
    text-transform: uppercase;
    font-weight: 400;
    color: var(--text-color);
    font-size: clamp(3.7rem, 16vw, 20rem);
    line-height: 1;
  }

  .nav2 {
    // background-color: var(--background-color);
    padding: 1vw 3vw 0.5vw 3vw;
  }

.logo{
  text-decoration:none;
  color: var(--text-color);
  font-family:var(--general-font);
  user-select: none;
  font-weight:200;

  &:hover{
    color: var(--text-color);
  }
}

.nav-item2{
  border: 1px solid var(--border-color);
  border-radius:50px;
  padding:5px;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  // width:fit-content;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
}

.section{
  scroll-margin-top: 80px;
}

.section:first-child{
  margin-top:90px;
}

.nav-link{
  text-decoration:none;
  color: var(--content-color);
  font-family:var(--general-font);
  font-size: 1rem;
  padding:5px 20px;
  border-radius:50px;

  &:hover{
    color: var(--text-color);
    // border: 0.3px solid var(--border-color);
    background:linear-gradient(to right, transparent, var(--nav-bg));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}

.nav-link.active{
  color: var(--text-color);
  font-weight:500;
}

// .nav-active{
//   background-color: var(--highlight-color);
//   font-weight:500;
// }

.nav-social{
  display:inline-block;
    margin-left: 8px;
}

.nav-social .social-item{
  color: var(--text-color);
  text-decoration:none;
  font-size:1rem;
  width:42.5px;
  height:42.5px;
  margin-right: 8px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  // backdrop-filter: blur(10px);
  //   -webkit-backdrop-filter: blur(10px);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius:50%;

  &:hover{
    color:var(--text-color);
  }


&:before{
  content:"";
  width:42.5px;
  height:42.5px;
  position:absolute;
  background-color:var(--social-btn);
  border: 1px solid var(--highlight-color);
  // opacity:0.3;
  border-radius:50%;
  transform:scale(0);
  transition:0.3s ease;
}
}

.nav-social .social-item:hover::before{
   transform:scale(1);
}

.nav-social .social-item .fa-brands{
  z-index:1;
}

.nav-social .social-item .ph-fill{
  z-index:1;
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

.menu-bar{
  background: var(--background-color);
}
.menu-bar .nav-btn {
        visibility: visible;
        color:var(--text-color);
        z-index:2;
        padding: 22px 0 0 0;
        opacity: 1;
      }
      
      .menu-bar .menu-nav {
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
        transition: 0.5s;
        z-index: 1;
      }

      .menu-bar .responsive_nav {
        transform: translateY(100vh);
      }

      .menu-nav .menu-link {
        font-size: 28px;
        text-decoration:none;
        color:var(--content-color);
        font-family: var(--general-font);
        font-weight:700;
        text-transform: uppercase;
        line-height:1;
      }

  .menu {
  // background-color: var(--highlight-color);
  cursor: pointer;
  transition: 0.5s ease;
 
}
.menu .bar {
  width: 25px;
  height: 2px;
  background: var(--highlight-color);
  transition: 0.4s ease;
  transform: translate(-40%, 0%);
}

.menu .bar:not(:first-child) {
  margin-top: 5px;
}

// .menu .bar:nth-child(3) {
//   opacity:0.4;
// }

#hi {
  position: absolute;
  left: -999px;
  top: -999px;
}

#hi:checked + .menu {
  transform: translate(-40%, -0%) ;
}
// #hi:checked + .menu .bar {
//   transform: rotatey(180deg) rotatex(360deg);
// }
#hi:checked + .menu .bar:first-child {
  transform: rotate(-40deg);
  // margin-top: 20px;
}
// #hi:checked + .menu .bar:nth-child(2) {
//   opacity: 0;
// }
#hi:checked + .menu .bar:nth-child(2) {
  margin-top: -2px;
  transform: rotate(45deg);
  opacity:1
}

.profile-social{
  display:inline-block;
}

.profile-social .social-item2{
  color: var(--content-color);
  text-decoration:none;
  font-size:1rem;
  width:clamp(36px, 3vw,42.5px);
  height:clamp(36px, 3vw,42.5px);
  margin-right: 8px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  // backdrop-filter: blur(10px);
  //   -webkit-backdrop-filter: blur(10px);
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius:50%;

  &:hover{
    color:var(--text-color);
  }


&:before{
  content:"";
  width:clamp(36px, 3vw,42.5px);
  height:clamp(36px, 3vw,42.5px);
  position:absolute;
  background-color:var(--social-btn);
  border: 1px solid var(--highlight-color);
  // opacity:0.3;
  border-radius:50%;
  transform:scale(0);
  transition:0.3s ease;
}
}

.profile-social .social-item2:hover::before{
   transform:scale(1);
}

.profile-social .social-item2 .fa-brands{
  z-index:1;
}

  .text {
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family: var(--heavy-font);
      fontWeight:700;
      font-size: 5px;
      fill:var(--text-color);
    }

    @media (max-width:694px){
      .text{
        letter-spacing: 1.5px;
      }
    }

    #rotatingText {
      animation-name: rotate-circle2;
      animation-duration: 60s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    #wavy-circle{
      animation: none;
    }

    @keyframes rotate-circle2 {
      to {
        transform: rotate(-1turn);
      }
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
      color: var(--text-color);
      font-family: var(--general-font);
      font-size: clamp(17px, 2vw, 28px);
      font-weight:700;
    }

    .link-design::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background: linear-gradient(to right, var(--highlight-color), transparent);
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

// .ph-fill {
//  color:var(--content-color);
//  transition:0.3s ease-out;
// //  font-size:1rem;
// //  margin-left:15px;
//  border: 1px solid var(--border-color);
//  padding: 12px;
//  border-radius:50%;
//  background-color:var(--background-color);
// }

// .ph-fill:hover{
//  background-color:var(--highlight-color);
//  color:var(--text-color);
// }

.headSvg{
  height:clamp(15px, 3vw, 50px);
  width:clamp(15px, 3vw, 50px);
  animation-name: rotate-circle;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
}

.heroSvg{
  height:clamp(30px, 7vw, 75px);
  width:clamp(30px, 7vw, 75px);
  animation-name: rotate-circle;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

  .heroSvgFill{
        fill:var(--highlight-color);
      }
    }

   .handSvg{
    height:clamp(40px, 5vw, 65px);
  width:clamp(40px, 5vw, 65px);
  transition:0.7s ease;
   } 

   .hero-content:hover{

    .handSvg{
      transform: rotate(180deg);
    }
   }

   .headerSvg{
    width: clamp(250px, 40vw, 710px);
     height: clamp(250px, 40vw, 710px);
   }

.loaderSvg{
    height:clamp(200px, 35vw, 550px);
  width:clamp(200px, 35vw, 550px);
   opacity:0;
  animation: rotate-circle 10s linear, load 3.5s linear;
  animation-delay:0.3s;
      // animation-duration: 10s;
      // animation-timing-function: linear;
      // animation-iteration-count: infinite;
}

.loaderLogo{
  height:clamp(30px, 5vw, 45px);
  width:clamp(30px, 5vw, 45px);
    opacity:0;
    animation-name:load;
  animation-duration:3.5s;
  animation-delay:0.5s;
  animation-timing-function:linear;
  overflow:hidden;
}

.loader-item{
  opacity:0;
    animation-name:load;
  animation-duration:3.5s;
  animation-delay:0.5s;
  animation-timing-function:linear;
  overflow:hidden;
}

.counter{
  opacity:0;
    animation-name:load;
  animation-duration:3.5s;
  animation-delay:0.5s;
  animation-timing-function:linear;
  overflow:hidden;
  color:var(--text-color);
  font-family:var(--heavy-font);
  font-weight:700;
}

.counter:after{
  content:"%";
}


.duration-item{
  width:30%;
}

.about-item{
  width:70%;
}

@media (max-width:940px){
  .duration-item{
  width:35%;
}
.about-item{
  width:65%;
}
}

.elem{
  width:100%;
  position:relative;
  border-bottom: 1px solid var(--border-color);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 2vw;
  overflow:hidden;
  transition: 0.3s ease;
}

.elem .title{
 font-size: clamp(30px, 4vw, 47px);
  position:relative;
  color:var(--text-color);
  font-family:var(--heavy-font);
  font-weight:700;
}

.elem .title .ph{
  opacity:0;
}

.elem .overlay{
  height:100%;
  width:100%;
  background:var(--card-color);
  position:absolute;
  z-index:-2;
  left:0;
  top:-100%;
  transition: all ease 0.2s;
}

.elem:hover{
  padding:0 4vw;

  .title .ph{
  opacity:1;
}
}

@media (max-width:600px){
  .elem:hover{
    padding: 0 2vw;
  }
}

.elem:hover .overlay{
  top:0;
}

    header {
      display: table;
      width: 100%;
      max-width: 100%;
      padding: 0 2vw;
    }
    header div {
      display: table-row;
      line-height: 1.5em;
      white-space: nowrap;
    }
    header p {
      font-size: clamp(12px, 2vw, 14px);
      color: var(--content-color);
      font-family: var(--general-font);
      font-weight:200;
      text-transform:uppercase;
      overflow: hidden;
      display: table-cell;
      vertical-align: middle;
      width: 1px;
      table-layout: fixed;
    }
    header span.spacer {
      display: table-cell;
    }
    header p {
      padding: 0 1vw;
    }
    header span.spacer:after {
      display: inline-block;
      width: 100%;
      content: ".";
      font-size: 0;
      color: transparent;
      height: 1px;
      background: var(--border-color);
      vertical-align: middle;
      position: relative;
      top: -1px;
    }


@media (max-width: 1024px){
.navigation{
  display:none;
}
}

// @media (max-width: 554px){
//   .hero-section{
//   height:100%;
// }
// }

@media (max-width: 1104px){
  .nav2{
  display:none;
}


.section:first-child{
  margin-top:0px;
}
}

@media (min-width: 1104px){
.menu-bar{
  display:none;
}


}
`;


export default GlobalStyle;