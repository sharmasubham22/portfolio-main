import React from "react";
import FeaturedProjects from "../FeaturedProjects";
import projectsData from "../../data/Projects.json";
import styled from "styled-components";
import OtherProjects from "../OtherProjects";
import otherData from "../../data/Others.json";
import { Link } from "react-router-dom";
import Reveal from "../Motion";
import MarqueeComp from "../MarqueeComp";

export default function Projects() {
  const StyledProjects = styled.section`
    h1 {
      ${({ theme }) => theme.mixins.chip};
    }

    .connect {
      ${({ theme }) => theme.mixins.button};
      margin-bottm: 15px;
    }

    .contact-section {
      text-align: center;
    }

    .contact-section p {
      font-size: clamp(15px, 2vw, 20px);
      color: var(--content-color);
      font-family: var(--general-font);
      margin: 30px 0px;
    }

    .container {
      margin-top: 10%;
    }

    @media (max-width: 784px) {
      .container {
        margin-top: 20%;
      }
    }
  `;

  document.title = "Work | Subham Sharma | Portfolio";
  return (
    <>
      <StyledProjects>
        <div className="container" style={{ marginBottom: "5%" }}>
          <h1>My Work</h1>
          <Reveal>
            <h2
              className="my-5"
              style={{
                fontFamily: "var(--heavy-font)",
                color: "var(--text-color)",
                fontSize: "clamp(50px, 8vw, 100px)",
                textTransform: "uppercase",
              }}
            >
              Projects
            </h2>
          </Reveal>
          <Reveal>
            {projectsData.map((element, index) => {
              return (
                <div key={index}>
                  <FeaturedProjects
                    title={element.title}
                    description={element.description}
                    techs={element.technologies}
                    imageLink={element.imgLink}
                    git={element.git}
                    demo={element.demo}
                  />
                </div>
              );
            })}
          </Reveal>
          <h3 className="section-head" style={{ marginTop: "15%" }}>
            <svg
              width="60"
              height="45"
              viewBox="0 0 138 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.5228 101.404C53.439 96.8083 53.5791 92.2524 53.7401 87.7017C52.7814 88.6243 51.791 89.5094 50.753 90.3375C48.0465 92.5061 44.9179 94.1181 41.7931 95.728C39.8735 96.717 37.9554 97.7053 36.1374 98.8214C35.5733 99.1673 35.1889 99.8423 34.7973 100.53C34.4032 101.222 34.0019 101.927 33.4029 102.322C33.2785 102.404 33.1449 102.494 33.004 102.588C32.0054 103.259 30.6347 104.179 29.5054 104.372C29.4624 104.379 29.4191 104.386 29.3756 104.393C28.8465 104.479 28.2943 104.568 28.091 105.035C27.0537 107.463 11.1495 117.145 6.15188 110.049C1.81753 103.999 11.7037 95.7316 17.8339 90.6049L17.8341 90.6047C18.6387 89.9318 19.3786 89.3131 20.0131 88.7606L20.0136 88.7601C25.2059 84.3239 30.3981 79.8876 35.556 75.4169C34.2337 75.0484 32.918 74.6219 31.6053 74.1964C29.7714 73.6019 27.9433 73.0093 26.1107 72.5794C25.554 72.4553 24.8985 72.6746 24.2264 72.8995C23.5323 73.1318 22.8205 73.3699 22.1817 73.2417C22.0891 73.2248 21.9909 73.2074 21.8882 73.1892H21.8881L21.888 73.1892C20.8414 73.0036 19.3287 72.7353 18.4414 72.0748L18.3695 72.0191C17.9813 71.7173 17.5652 71.3938 17.1213 71.6017C14.984 72.611 -1.04604 69.0155 0.054061 60.4054C1.02065 52.789 13.044 53.5579 20.0766 54.0077C20.8193 54.0552 21.5064 54.0991 22.1189 54.1292C26.6343 54.3788 31.1264 54.6167 35.6024 54.8287C35.1539 54.0032 34.7224 53.164 34.2913 52.3255C33.3049 50.4068 32.3202 48.4914 31.1366 46.7514C30.8156 46.2684 30.1752 45.9908 29.5247 45.709C28.9011 45.4387 28.2684 45.1645 27.8991 44.7014C27.8219 44.6045 27.7374 44.5009 27.6484 44.3915C27.0129 43.6115 26.1395 42.5395 25.919 41.516C25.9118 41.478 25.9049 41.4396 25.898 41.4011C25.8127 40.9285 25.7239 40.4365 25.2589 40.349C24.1902 40.0021 21.1728 36.9429 19.1298 33.0951C16.961 29.4366 15.6095 24.8635 18.2811 21.4573C20.9214 18.1457 25.2275 19.0288 29.5964 21.4258C31.6709 22.6873 33.7768 24.2958 35.6627 25.8727C36.822 26.898 37.8708 27.9233 38.8013 28.833C39.3593 29.3784 39.8747 29.8823 40.3459 30.3197C44.4384 34.2673 48.2869 38.3782 51.9967 42.5348C52.1697 39.9314 52.7393 37.3211 53.3087 34.7123C53.7575 32.6558 54.2061 30.6002 54.4599 28.5497C54.5387 27.9491 54.2463 27.2929 53.947 26.621C53.6491 25.9524 53.3442 25.2681 53.3912 24.6074C53.4062 24.4377 53.4195 24.2491 53.4338 24.0475C53.5097 22.9751 53.6115 21.5361 54.1142 20.6335C54.147 20.5718 54.1814 20.5101 54.2158 20.4484C54.4451 20.037 54.6745 19.6256 54.4285 19.2143C53.2341 17.1327 54.7114 0.196371 63.3236 0.101755C71.2428 0.0426741 71.8549 13.6241 72.1848 20.9432C72.2071 21.4384 72.2281 21.9049 72.2501 22.3366C72.5803 28.2309 72.8398 34.1251 73.0417 40.0194C74.3072 38.9539 75.6159 37.8116 76.621 36.8161C82.2472 31.3915 87.9363 26.0299 95.134 22.2452C95.2947 22.1668 95.6941 21.8975 96.2765 21.505C99.9093 19.0561 110.66 11.8092 114.967 16.1582C120.216 21.4567 109.812 34.8923 108.021 36.1854C106.902 37.0106 105.734 37.784 104.567 38.557C101.273 40.7382 97.9838 42.9163 95.8255 46.2462C94.1038 48.8628 92.07 51.1364 89.9011 53.2624C96.3502 52.6563 102.812 52.0761 109.592 53.4669C109.753 53.5083 110.214 53.5423 110.888 53.592L110.888 53.5921C114.837 53.8833 126.092 54.7134 127.005 60.7208C128.137 68.1009 113.584 72.4533 111.573 72.3586C110.277 72.3244 108.977 72.2137 107.679 72.1032L107.679 72.1031C104.191 71.806 100.719 71.5103 97.397 72.7056C92.6142 74.4855 87.6871 74.6559 82.7532 74.8265H82.7531C82.5347 74.834 82.3162 74.8416 82.0978 74.8493C82.3235 75.115 82.6023 75.4529 82.919 75.8368C84.1568 77.3372 85.9739 79.5396 87.4615 80.8764C88.2687 81.649 89.075 82.4064 89.8758 83.1586C93.815 86.8586 97.6225 90.435 100.757 95.1004C100.853 95.2707 101.231 95.6603 101.781 96.2267C102.861 97.338 104.602 99.1301 106.163 101.282C108.646 104.215 110.909 108 109.432 111.248C107.892 114.623 103.397 115.033 98.8397 114.276C94.5022 113.267 90.2589 111.185 89.5675 110.397C88.5687 109.412 87.6265 108.37 86.6892 107.334C85.9158 106.479 85.1457 105.627 84.3498 104.814C82.7154 102.922 80.9238 101.219 78.6293 100.084C77.1953 99.3087 75.8701 98.4201 74.624 97.4516C74.5433 103.954 74.074 110.427 71.81 116.827C71.7677 116.954 71.6948 117.27 71.5887 117.731L71.5886 117.731L71.5885 117.731C70.7497 121.369 67.8371 134.001 61.532 133.637C54.1456 133.227 52.574 117.741 52.9198 115.786C53.1372 114.558 53.4228 113.331 53.7082 112.106C54.5368 108.548 55.3644 104.993 54.5228 101.404Z"
                fill="var(--highlight-color)"
              />
            </svg>
            Other Projects
          </h3>

          <div className="row my-5 row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
            {otherData.map((element2, index2) => {
              return (
                <div className="col" key={index2}>
                  <OtherProjects
                    title={element2.title}
                    description={element2.description}
                    techs={element2.technologies}
                    git={element2.git}
                    demo={element2.demo}
                  />
                </div>
              );
            })}
          </div>
          <div className="contact-section">
            <p> Did you like my profile? Click below to connect!</p>
          </div>
        </div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <MarqueeComp />
        </Link>
      </StyledProjects>
    </>
  );
}
