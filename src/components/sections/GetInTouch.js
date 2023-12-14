import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Reveal from "../Motion";

export default function GetInTouch() {
  const StyledDiv = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;

    .fa-solid {
      position: absolute;
      color: var(--card-color);
      font-size: 70px;
      z-index:999;
    }



    .circle {
      position: relative;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      user-select: none;
    }

    @media (max-width: 991px) {
      display: none;

      .bg {
        display: none;
      }
    }
  `;

    var [date, setDate] = useState(new Date());

    useEffect(() => {
      var timer = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer);
      };
    });

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "5%"}}
      >
        <Reveal>
          <h1 className="section-head">
            <svg
              width="78"
              height="54"
              viewBox="0 0 128 164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.6575 77.9464L76.6585 77.9359C74.2461 78.6069 71.801 79.1774 69.351 79.7491C67.6895 80.1367 66.0258 80.5249 64.3685 80.9454C64.3927 81.0376 64.4175 81.1298 64.4423 81.2219L64.443 81.2244C64.7201 82.2549 64.996 83.2813 64.5086 84.2644C64.5526 84.8043 64.6256 85.3479 64.6986 85.8914C64.8376 86.9263 64.9765 87.9606 64.915 88.968C64.7985 90.5372 64.7371 92.1262 64.694 93.7199C66.501 93.2515 68.3048 92.8592 70.1032 92.6892C70.1774 92.6892 70.2517 92.6047 70.3359 92.5089C70.4299 92.402 70.5363 92.2809 70.669 92.2477C71.0337 92.1586 71.695 92.0324 72.5107 91.8767C73.4333 91.7007 74.5534 91.4869 75.6646 91.2467C75.6886 90.8033 75.7096 90.3595 75.7269 89.9153C75.8654 85.9198 76.2613 81.9339 76.6574 77.947L76.6574 77.9467L76.6575 77.9464ZM97.3754 87.678C97.4418 86.7555 97.5012 85.8287 97.5607 84.9011C97.707 82.6181 97.8537 80.3301 98.1059 78.0882C98.216 77.0057 98.1102 75.8922 98.0045 74.7803L98.0045 74.7802C97.9603 74.3143 97.916 73.8487 97.8877 73.3858C98.3002 72.6382 98.2425 71.8468 98.0817 71.0486C98.5773 70.784 99.068 70.5034 99.553 70.2048C102.645 68.3155 106.201 67.996 109.75 67.677C111 67.5647 112.249 67.4524 113.477 67.2717C115.426 66.9879 129.256 60.5224 127.213 53.3947C125.478 47.3984 113.247 48.5441 109.462 48.8987L109.462 48.8987C108.927 48.9488 108.561 48.9831 108.417 48.9792C105.212 48.912 102.133 49.2407 99.1315 49.8063C99.9426 42.0303 100.866 34.2763 101.815 26.5223C101.916 25.612 102.055 24.5675 102.205 23.4306L102.205 23.4281L102.205 23.4272C103.311 15.0709 105.075 1.73427 97.8545 0.124307C89.3995 -1.70494 84.0247 17.2183 84.9048 19.8361C85.0755 20.3499 84.7312 20.8121 84.4079 21.2459L84.3603 21.3099C84.3528 21.3201 84.3453 21.3302 84.3378 21.3404C84.3277 21.3541 84.3176 21.3678 84.3076 21.3815C83.5623 22.4169 83.1569 24.2129 82.8768 25.4541C82.8497 25.5739 82.8238 25.6886 82.7989 25.7969C82.6085 26.5453 82.7866 27.3903 82.9611 28.218C83.1323 29.0297 83.2999 29.8248 83.1132 30.4962C82.5266 32.6703 81.7759 34.8262 81.0243 36.9846C79.8024 40.4935 78.5782 44.0093 78.0527 47.6217C77.6695 50.2761 77.5537 52.9694 77.5332 55.6749C74.7051 56.0753 71.856 56.886 69.0051 57.6973C67.7008 58.0685 66.3961 58.4398 65.0929 58.7719C65.6439 51.4792 66.3218 44.2041 67.0209 36.929C67.1039 35.9133 67.2301 34.7323 67.3678 33.4433L67.3679 33.4431C68.2738 24.9663 69.6784 11.8243 62.5576 10.3733C58.3144 9.55334 54.9198 13.9057 52.6882 18.8573C50.5194 23.8089 49.5136 29.2966 49.9537 30.5897C50.1254 31.1067 49.8019 31.5714 49.4816 32.0314L49.4813 32.0318C49.4672 32.0521 49.453 32.0724 49.4389 32.0927C49.4218 32.1174 49.4048 32.142 49.3879 32.1667C48.7187 33.1604 48.3687 34.8174 48.1048 36.0665L48.1047 36.0671C48.0588 36.2846 48.0154 36.4897 47.9735 36.6767C47.7983 37.444 48.0025 38.3004 48.2016 39.135C48.3953 39.9472 48.584 40.7387 48.4135 41.4075C47.8873 43.5782 47.2132 45.7313 46.5385 47.8865L46.5385 47.8865L46.5385 47.8866C45.3995 51.5246 44.2588 55.1683 43.8245 58.9116C43.5949 61.0047 43.5254 63.1154 43.5373 65.2338C43.3817 65.261 43.2262 65.2885 43.0709 65.3163C35.9045 66.6409 28.7067 67.6187 21.5404 68.1233C20.5361 68.2039 19.336 68.2588 18.0244 68.3187H18.0242C15.2307 68.4464 11.9307 68.5973 8.9364 69.0694C4.536 69.8264 0.701379 71.4033 0.0727514 75.6295C-0.587307 79.8557 3.34161 83.0411 7.89915 84.7127C12.4253 86.4473 17.4228 86.5735 18.4915 85.9742C18.9524 85.7276 19.4434 86.0235 19.9056 86.302L19.9374 86.3212C20.8903 86.8258 22.3783 86.8831 23.5001 86.9263H23.5003C23.7105 86.9344 23.9078 86.942 24.0863 86.9519C24.7856 86.9846 25.5101 86.6457 26.2163 86.3154C26.8751 86.0073 27.5179 85.7067 28.1095 85.7219C29.866 85.8275 31.6437 86.0496 33.4271 86.2724C36.8574 86.7009 40.3092 87.1322 43.6734 86.742C43.623 87.6549 43.5696 88.5674 43.5163 89.4799L43.5162 89.4807L43.5162 89.4809C43.2901 93.3461 43.064 97.2091 43.0668 101.088C42.6122 101.191 42.1572 101.291 41.7025 101.391C40.731 101.605 39.7606 101.818 38.7976 102.056L19.3416 106.819C18.7621 106.965 18.1047 107.117 17.3929 107.282C11.1926 108.721 0.863696 111.117 1.99147 118.614C3.28016 127.193 18.21 126.467 19.7816 124.89C20.097 124.603 20.5171 124.787 20.9224 124.966C20.9614 124.983 21.0002 125 21.0388 125.016C21.9833 125.419 23.3707 125.271 24.3232 125.17C24.4168 125.161 24.5062 125.151 24.5906 125.143C25.1681 125.08 25.6992 124.667 26.2184 124.264C26.7446 123.855 27.2587 123.455 27.7966 123.44C29.5245 123.367 31.2896 123.457 33.0562 123.548C35.8848 123.692 38.717 123.838 41.4064 123.313C41.9825 123.203 42.5538 123.07 43.1211 122.92C43.2708 124.092 43.4697 125.264 43.7302 126.436C44.6433 130.513 44.0147 134.607 43.3853 138.705C43.1481 140.25 42.9108 141.795 42.7559 143.341C42.5987 144.508 43.2588 149.586 44.8618 154.316C46.4962 159.047 49.105 163.4 52.8139 163.242C56.3656 163.084 58.4716 158.385 59.7288 153.623C60.6833 150.179 61.1777 146.67 61.4496 144.74C61.5538 144.001 61.6253 143.493 61.6776 143.309C63.7846 135.101 63.7534 126.955 63.7219 118.748L63.7206 118.394C63.7028 117.715 63.7085 116.964 63.73 116.184C63.8011 116.167 63.8722 116.15 63.9433 116.134C66.6856 115.491 69.425 114.85 72.1148 114.009C73.0997 113.701 74.0944 113.43 75.0937 113.175C75.1426 113.517 75.1964 113.858 75.2554 114.2C75.9636 118.258 75.1108 122.249 74.2542 126.258C73.9323 127.764 73.6099 129.273 73.3695 130.79C72.9609 133.092 74.8154 150.943 82.2646 151.037C88.2649 151.118 90.9549 138.027 91.9107 133.376C92.0765 132.569 92.19 132.017 92.2597 131.83C94.8371 123.693 95.2457 115.462 95.5914 107.23C95.598 106.983 95.608 106.727 95.621 106.463C96.6265 106.362 97.647 106.313 98.6686 106.263C99.7964 106.209 100.926 106.154 102.037 106.03C103.829 105.872 116.119 99.9431 114.013 92.7838C112.289 86.8521 101.628 87.4482 98.216 87.639C97.8412 87.66 97.5538 87.676 97.3754 87.678Z"
                fill="var(--highlight-color)"
              />
            </svg>
            Get in Touch
          </h1>
        </Reveal>
        <div className="row row-cols-1 row-cols-lg-2 my-5 d-flex align-items-center">
          <Reveal>
            <div className="col">
              <p
                style={{
                  fontFamily: "var(--general-font)",
                  color: "var(--content-color)",
                  fontSize: "clamp(15px, 2vw, 26px)",
                }}
              >
                Liked my profile? I am always open for a great chat. My inbox is
                always open. If you have questions or just want to say hi, do
                reach out and I will try my best to get back to you as soon as
                possible.
              </p>
              <div className="mt-5">
                <h2
                  style={{
                    color: "var(--highlight-color)",
                    fontFamily: "var(--general-font)",
                    fontSize: "clamp(15px, 2vw, 26px)",
                  }}
                >
                  Location
                </h2>
                <p
                  style={{
                    color: "var(--content-color)",
                    fontFamily: "var(--general-font)",
                    fontSize: "clamp(15px, 2vw, 26px)",
                  }}
                >
                  Halifax, NS (Canada)
                  <br /> {date.toLocaleDateString()},{" "}
                  {date.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <StyledDiv className="col">
              <div className="bg">
                <div className="circle">
                  <div className="fa-solid">
                    <svg
                      width="32"
                      height="55"
                      viewBox="0 0 22 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7523 19.5281C13.7983 20.0991 13.9055 20.67 13.8825 21.241C13.8136 23.3954 13.7064 25.5575 13.6298 27.712C13.6221 27.8185 13.7217 27.9328 13.7676 28.047L13.7753 28.0394C13.7217 29.3412 13.6221 30.643 13.6145 31.9524C13.5992 34.9747 13.5226 37.9894 12.9023 40.9889C12.8028 41.4609 12.7798 42.2602 11.0492 42.1993C9.24969 42.1384 8.20827 41.5827 8.2925 40.7605C8.49925 38.7811 8.96636 36.7942 8.69835 34.8072C8.30781 31.9067 8.62177 29.0214 8.59114 26.1361C8.56817 23.5401 8.72132 20.9517 8.68303 18.3557C8.64475 15.9195 8.30781 13.4758 8.38439 11.0397C8.44565 8.93852 8.94339 6.84497 9.15014 4.75142C9.19609 4.25658 9.30329 3.73131 8.6524 3.2517L8.62943 3.25932C9.43347 2.70358 7.97088 2.00322 9.15014 1.47792C9.18843 1.2876 9.30329 1.08966 9.24969 0.899337C8.97402 0.0314656 9.60959 -0.181688 11.5776 0.145667C12.0141 0.221796 12.5807 0.160837 12.8794 0.373998L12.8487 0.389239L12.8794 0.381618C14.2041 0.998263 13.5456 1.70634 13.5609 2.36105C13.6221 5.57369 13.5685 8.78627 13.5532 11.9989C13.5456 13.9707 13.423 15.9424 13.6145 17.9142C13.6681 18.4547 13.9131 18.9952 13.7447 19.5433L13.7523 19.5281Z"
                        fill="var(--background-color)"
                      />
                      <path
                        d="M13.6519 43.6765C13.1312 44.2703 12.5798 44.7271 11.8447 44.9022L11.4006 44.9784C10.6884 45.0545 9.98392 44.9251 9.40195 44.6586C8.81232 44.3922 8.28395 43.9887 7.77856 43.4101C7.2655 42.8315 6.85965 42.0398 6.42318 41.3242L5.58085 39.8929C5.5349 39.8168 5.40472 39.7864 5.31283 39.7331L5.30518 39.7483C4.75383 38.7967 4.24078 37.8223 3.65115 36.8935C2.28811 34.7467 0.971018 32.5694 0.128691 30.118C-0.00148738 29.7374 -0.346075 29.1511 1.14714 28.2756C2.70162 27.3621 3.83493 27.2099 4.13358 27.8341C4.86104 29.3491 5.38175 31.0011 6.50741 32.2648C7.33442 33.186 8.01594 34.1985 8.65152 35.2415L9.59339 36.8021L10.0682 37.5786L10.3132 37.9669L10.3745 38.0658C10.3898 38.0963 10.3898 38.0811 10.3974 38.0963L10.4281 38.1268C10.5123 38.2181 10.5812 38.3095 10.6425 38.4085C10.7037 38.4998 10.8033 38.6064 10.9335 38.5759C11.0943 38.5226 11.1402 38.3247 11.1938 38.18C11.2091 38.1344 11.2168 38.0887 11.2168 38.0431C11.2168 38.0202 11.2168 38.0049 11.2244 37.9669L11.3853 37.6167L12.0132 36.2007C12.4267 35.2567 12.8555 34.3203 13.3762 33.4372C14.2721 31.907 15.5433 30.59 16.5617 29.1359C16.7991 28.7933 17.1054 28.4507 16.7302 27.7884L16.7072 27.7808C17.6338 27.7503 16.6307 26.5399 17.8788 26.7074C17.986 26.5856 18.1698 26.4943 18.1928 26.3268C18.3 25.5503 18.9356 25.6949 20.536 26.8749C20.8882 27.1337 21.4166 27.3621 21.5851 27.659C22.504 28.7477 21.6463 28.9608 21.3936 29.4481C20.1684 31.8613 18.836 34.2137 17.5419 36.5966L16.3244 38.7662C16.1253 39.1317 15.9262 39.497 15.75 39.8701L14.946 41.5145C14.5938 42.2758 14.2875 43.3187 13.6595 43.6765H13.6519Z"
                        fill="var(--background-color)"
                      />
                    </svg>
                  </div>
                  <svg
                    id="rotatingText"
                    viewBox="0 0 210 210"
                    width="300"
                    height="300"
                  >
                    <path
                      className="shield-background"
                      d="m88.6 6.2c-8.8-0.6-13.2 7.8-19.5 12.1-7.2 1.4-15.9-1.4-21.7 4.7-5.7 4.3-4.7 13.3-10.7 17-7.2 2.7-15.9 5.9-17.5 14.6-1.5 6.2 2 14.1-4.2 18.4-5.9 4.9-11 12.6-8 20.6 1.7 5.3 6.2 10.8 2.6 16.3-3.6 6.9-5.3 15.8 0.5 22.1 3.6 4.2 10 7.6 8.7 14.1-0.7 7.7 1.1 16.7 8.9 20.1 4.9 2.5 12.1 3.2 13.4 9.7 2.3 7.4 7.4 14.9 15.9 15.2 5.5 0.4 12.4-1.6 16.1 3.9 4.9 5.8 12.3 10.9 20.2 8 5.4-1.6 11.1-6.4 16.7-2.7 6.8 3.5 15.5 5.4 21.8-0.3 4.4-3.6 7.8-10.2 14.4-8.9 7.7 0.7 16.7-1.2 20.1-8.9 2.5-4.9 3.2-12.1 9.7-13.4 7.4-2.3 14.9-7.4 15.2-15.9 0.5-5.5-1.6-12.4 3.9-16.1 6-4.9 10.9-12.6 7.9-20.6-1.7-5.3-6.2-10.8-2.6-16.3 3.6-6.8 5.3-15.8-0.5-22.1-3.6-4.2-9.9-7.6-8.7-14 0.7-7.7-1.1-16.7-8.9-20.1-4.9-2.5-12.1-3.2-13.4-9.7-2.3-7.4-7.4-15-16-15.3-5.5-0.4-12.4 1.6-16.1-3.9-4.9-5.8-12.3-10.9-20.2-8-5.4 1.7-11.1 6.4-16.7 2.7-3.7-1.4-7.3-3.5-11.4-3.4z"
                      fill="var(--highlight-color)"
                    />
                    <defs>
                      <path
                        id="circle"
                        d="M 105, 105
                m -80, 0
                a 80, 80 0 1, 0 160, 0
                a 80, 80 0 1, 0 -160, 0
                "
                      ></path>
                    </defs>
                    <text width="400">
                      <textPath
                        alignmentBaseline="top"
                        href="#circle"
                        className="text"
                      >
                        Click down below for my contact details &#x2022;
                      </textPath>
                    </text>
                    <path
                      className="shield-outline"
                      d="m87.7 1c-4.6 0-8.9 1.8-12.1 5l-6.3 6.3c-1.2 1.2-2.9 1.9-4.7 1.9h-8.9c-6.9 0-13.2 4.2-15.8 10.6l-3.4 8.2c-0.7 1.6-1.9 2.9-3.6 3.6l-8.2 3.4c-6.4 2.7-10.6 8.9-10.6 15.8v8.9c0 1.8-0.7 3.4-1.9 4.7l-6.3 6.3c-4.9 4.9-6.4 12.3-3.7 18.7l3.4 8.2c0.7 1.6 0.7 3.4 0 5.1l-3.4 8.2c-2.6 6.4-1.2 13.7 3.7 18.7l6.4 6.3c1.2 1.2 1.9 2.9 1.9 4.7v8.9c0 6.9 4.1 13.2 10.6 15.8l8.2 3.4c1.6 0.7 2.9 1.9 3.6 3.6l3.4 8.2c2.7 6.4 8.9 10.6 15.8 10.6h8.9c1.8 0 3.4 0.7 4.7 1.9l6.3 6.3c3.3 3.3 7.6 5 12.1 5 2.2 0 4.5-0.4 6.5-1.3l8.2-3.4c1.6-0.7 3.4-0.7 5.1 0l8.2 3.4c2.1 0.9 4.3 1.3 6.5 1.3 4.6 0 8.9-1.8 12.1-5l6.3-6.3c1.2-1.2 2.9-1.9 4.7-1.9h8.9c6.9 0 13.2-4.2 15.8-10.6l3.4-8.2c0.7-1.6 1.9-2.9 3.6-3.6l8.2-3.4c6.4-2.7 10.6-8.9 10.6-15.8v-8.9c0-1.8 0.7-3.4 1.9-4.7l6.3-6.3c4.9-4.9 6.3-12.3 3.7-18.7l-3.4-8.2c-0.7-1.6-0.7-3.4 0-5l3.4-8.2c2.7-6.4 1.2-13.7-3.7-18.7l-6.3-6.2c-1.2-1.2-1.9-2.9-1.9-4.7v-8.9c0-6.9-4.1-13.2-10.6-15.8l-8.2-3.4c-1.6-0.7-2.9-1.9-3.6-3.6l-3.4-8.3c-2.7-6.4-8.9-10.6-15.8-10.6h-8.9c-1.8 0-3.4-0.7-4.7-1.9l-6.3-6.3c-3.2-3.2-7.6-5-12.1-5-2.2 0-4.5 0.4-6.5 1.3l-8.2 3.4c-1.6 0.7-3.4 0.7-5 0l-8.2-3.4c-2.1-0.9-4.3-1.3-6.5-1.3zm0.3 11.5c0.9 0 1.7 0.2 2.5 0.5l8.1 3.4c2.1 0.9 4.3 1.3 6.5 1.3 2.2 0 4.4-0.4 6.5-1.3l8.1-3.3c0.8-0.3 1.7-0.5 2.5-0.5 1.7 0 3.4 0.7 4.6 1.9l6.2 6.2c3.2 3.2 7.5 5 12 5h8.7c2.7 0 5 1.6 6 4l3.4 8.1c1.7 4.2 5 7.4 9.2 9.2l8.1 3.4c2.4 1 4 3.4 4 6v8.8c0 4.5 1.8 8.8 5 12l6.2 6.2c1.9 1.9 2.4 4.7 1.4 7.1l-3.3 8.1c-1.7 4.2-1.7 8.8 0 13l3.4 8.1c1.1 2.4 0.5 5.2-1.3 7.1l-6.2 6.2c-3.2 3.2-5 7.4-5 12v8.8c0 2.7-1.6 5-4 6l-8.1 3.4c-4.2 1.7-7.4 5-9.2 9.2l-3.3 8.1c-1 2.4-3.4 4-6 4h-8.8c-4.5 0-8.8 1.8-12 5l-6.2 6.2c-1.2 1.2-2.9 1.9-4.6 1.9-0.9 0-1.7-0.2-2.5-0.5l-8.1-3.3c-2.1-0.9-4.3-1.3-6.5-1.3-2.2 0-4.4 0.4-6.5 1.3l-8.1 3.4c-0.8 0.3-1.6 0.5-2.5 0.5-1.7 0-3.4-0.7-4.6-1.9l-6.2-6.2c-3.2-3.2-7.4-5-12-5h-8.8c-2.6 0-5-1.6-6-4l-3.3-8.1c-1.7-4.2-5-7.4-9.2-9.2l-8.1-3.3c-2.4-1-4-3.4-4-6v-8.8c0-4.5-1.8-8.8-5-12l-6.2-6.2c-1.9-1.9-2.4-4.6-1.4-7.1l3.4-8.1c1.7-4.2 1.7-8.8 0-13l-3.3-8.1c-1-2.4-0.5-5.2 1.4-7.1l6.2-6.2c3.2-3.2 5-7.5 5-12v-8.8c0-2.6 1.6-5 4-6l8.1-3.3c4.2-1.7 7.4-5 9.2-9.2l3.4-8.1c1-2.4 3.4-4 6-4h8.8c4.5 0 8.8-1.8 12-5l6.2-6.2c1.2-1.2 2.9-1.9 4.6-1.9z"
                      fill="var(--highlight-color)"
                    />
                  </svg>
                </div>
              </div>
            </StyledDiv>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
