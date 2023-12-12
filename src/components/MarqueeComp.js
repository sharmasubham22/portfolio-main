import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

export default function MarqueeComp() {
  const StyledMarquee = styled.section`
    p {
      margin: 10px 30px;
      color: var(--text-color);
      font-family: var(--heavy-font);
      font-size: clamp(25px, 2vw, 32px);
      display: inline-block;
      text-transform: uppercase;
    }

    .dot {
      height: 15px;
      width: 15px;
      background-color: var(--highlight-color);
      border-radius: 50%;
      display: inline-block;
    }

    .marquee {
      border-top: 1px solid var(--border-color);
      padding: 25px 0px;
    }

    .marquee:hover {
      background-color: var(--card-color);
      pointer: cursor;
    }
  `;
  return (
    <div>
      <StyledMarquee>
        <Marquee className="marquee" autoFill={true}>
          <p>Just say hi</p>
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0144 22.4241C11.7756 21.4113 11.8065 20.4074 11.8419 19.4046C11.6307 19.6079 11.4124 19.803 11.1837 19.9854C10.5873 20.4633 9.89789 20.8185 9.20932 21.1733L9.2093 21.1733C8.78633 21.3912 8.36366 21.609 7.96306 21.8549C7.83877 21.9311 7.75406 22.0799 7.66776 22.2314C7.58093 22.3839 7.49249 22.5392 7.36049 22.6263C7.33317 22.6443 7.30384 22.664 7.27289 22.6848L7.2726 22.685C7.05255 22.8327 6.75051 23.0354 6.50166 23.0781L6.47308 23.0827C6.35648 23.1016 6.23479 23.1213 6.18999 23.224C5.96143 23.7591 2.45686 25.8927 1.35561 24.329C0.400521 22.9959 2.57898 21.1741 3.9298 20.0444C4.10711 19.8961 4.27017 19.7597 4.41 19.638L4.41007 19.6379C5.5542 18.6604 6.69834 17.6828 7.8349 16.6977C7.54352 16.6165 7.25362 16.5225 6.96436 16.4287C6.56026 16.2977 6.15743 16.1671 5.7536 16.0724C5.63095 16.0451 5.4865 16.0934 5.3384 16.143C5.18545 16.1941 5.0286 16.2466 4.88785 16.2184L4.82316 16.2068C4.59254 16.1659 4.25917 16.1068 4.06365 15.9612L4.04782 15.9489C3.96227 15.8824 3.87058 15.8112 3.77275 15.857C3.30178 16.0794 -0.230499 15.2871 0.0119126 13.3898C0.224904 11.7115 2.8743 11.8809 4.42397 11.9801L4.4241 11.9801C4.58771 11.9905 4.73907 12.0002 4.874 12.0068C5.869 12.0618 6.85887 12.1143 7.84516 12.161C7.74633 11.9791 7.65125 11.7941 7.55625 11.6093C7.33889 11.1866 7.1219 10.7645 6.86109 10.3811C6.79037 10.2746 6.64924 10.2135 6.50591 10.1514C6.3685 10.0918 6.22906 10.0314 6.1477 9.92934C6.13068 9.90798 6.11208 9.88516 6.09245 9.86107C5.95241 9.68917 5.75996 9.45295 5.71136 9.22742C5.7098 9.21904 5.70827 9.21058 5.70674 9.2021C5.68795 9.09796 5.66838 8.98955 5.56592 8.97028C5.33043 8.89383 4.66553 8.21971 4.21534 7.37184C3.73744 6.56568 3.43962 5.55797 4.02833 4.8074C4.61012 4.07768 5.55899 4.27227 6.52171 4.80045C6.97883 5.07843 7.44287 5.43287 7.85844 5.78036C8.1139 6.00628 8.34501 6.23221 8.55006 6.43267C8.673 6.55285 8.78657 6.66388 8.89042 6.76027C9.79222 7.63016 10.6403 8.53602 11.4578 9.45197C11.4959 8.87827 11.6214 8.30306 11.7468 7.7282L11.7469 7.72817C11.8458 7.27501 11.9446 6.82206 12.0005 6.37025C12.0179 6.23789 11.9535 6.09331 11.8875 5.94525L11.8875 5.94525C11.8219 5.7979 11.7547 5.64713 11.765 5.50153C11.7683 5.46417 11.7713 5.42264 11.7744 5.37825L11.7744 5.37819L11.7744 5.37815C11.7911 5.14185 11.8136 4.82477 11.9243 4.62587C11.9316 4.61227 11.9392 4.59867 11.9467 4.58507C11.9973 4.49443 12.0478 4.40378 11.9936 4.31313C11.7304 3.85445 12.0559 0.122454 13.9537 0.101605C15.6987 0.0885862 15.8336 3.08132 15.9063 4.69413C15.9112 4.80324 15.9158 4.90603 15.9207 5.00115C15.9935 6.29997 16.0506 7.59878 16.0951 8.8976C16.374 8.66281 16.6623 8.41111 16.8838 8.19177C18.1236 6.99642 19.3772 5.81496 20.9632 4.981C20.9986 4.96372 21.0867 4.90438 21.215 4.81788C22.0155 4.27827 24.3845 2.68137 25.3336 3.6397C26.4902 4.80726 24.1977 7.76783 23.8029 8.05277C23.5565 8.23461 23.2991 8.40503 23.0419 8.57536L23.0419 8.57537C22.316 9.05602 21.5912 9.53596 21.1156 10.2697C20.7362 10.8463 20.288 11.3473 19.8101 11.8158C21.2312 11.6823 22.6552 11.5544 24.1492 11.8609C24.1845 11.87 24.2862 11.8775 24.4347 11.8885C25.3049 11.9526 27.7851 12.1356 27.9862 13.4593C28.2355 15.0856 25.0288 16.0446 24.5855 16.0238C24.3 16.0162 24.0135 15.9918 23.7275 15.9675C22.9589 15.902 22.1938 15.8368 21.4619 16.1002C20.408 16.4924 19.3223 16.53 18.235 16.5676C18.1869 16.5692 18.1388 16.5709 18.0907 16.5726C18.1404 16.6311 18.2018 16.7056 18.2716 16.7901C18.5443 17.1208 18.9447 17.6061 19.2726 17.9007C19.4504 18.0709 19.6281 18.2378 19.8046 18.4036C20.6726 19.2189 21.5116 20.0069 22.2023 21.035C22.2233 21.0725 22.3067 21.1584 22.4279 21.2832C22.6658 21.5281 23.0494 21.923 23.3936 22.3971C23.9407 23.0435 24.4394 23.8774 24.1139 24.5932C23.7745 25.3369 22.7841 25.4272 21.7798 25.2604C20.824 25.038 19.889 24.5793 19.7366 24.4056C19.5165 24.1886 19.3089 23.959 19.1024 23.7307C18.9319 23.5422 18.7622 23.3546 18.5869 23.1755C18.2267 22.7585 17.8319 22.3832 17.3263 22.133C17.0104 21.9623 16.7184 21.7665 16.4438 21.5531C16.426 22.9861 16.3226 24.4123 15.8237 25.8225C15.8144 25.8506 15.7983 25.9203 15.7749 26.0218L15.7749 26.0218C15.5901 26.8234 14.9483 29.6069 13.5589 29.5267C11.9313 29.4364 11.585 26.0241 11.6612 25.5932C11.7091 25.3225 11.772 25.0523 11.8349 24.7822L11.8349 24.7822C12.0175 23.9981 12.1998 23.215 12.0144 22.4241Z"
              fill="var(--highlight-color)"
            />
          </svg>
          <p>Contact Me</p>
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0144 22.4241C11.7756 21.4113 11.8065 20.4074 11.8419 19.4046C11.6307 19.6079 11.4124 19.803 11.1837 19.9854C10.5873 20.4633 9.89789 20.8185 9.20932 21.1733L9.2093 21.1733C8.78633 21.3912 8.36366 21.609 7.96306 21.8549C7.83877 21.9311 7.75406 22.0799 7.66776 22.2314C7.58093 22.3839 7.49249 22.5392 7.36049 22.6263C7.33317 22.6443 7.30384 22.664 7.27289 22.6848L7.2726 22.685C7.05255 22.8327 6.75051 23.0354 6.50166 23.0781L6.47308 23.0827C6.35648 23.1016 6.23479 23.1213 6.18999 23.224C5.96143 23.7591 2.45686 25.8927 1.35561 24.329C0.400521 22.9959 2.57898 21.1741 3.9298 20.0444C4.10711 19.8961 4.27017 19.7597 4.41 19.638L4.41007 19.6379C5.5542 18.6604 6.69834 17.6828 7.8349 16.6977C7.54352 16.6165 7.25362 16.5225 6.96436 16.4287C6.56026 16.2977 6.15743 16.1671 5.7536 16.0724C5.63095 16.0451 5.4865 16.0934 5.3384 16.143C5.18545 16.1941 5.0286 16.2466 4.88785 16.2184L4.82316 16.2068C4.59254 16.1659 4.25917 16.1068 4.06365 15.9612L4.04782 15.9489C3.96227 15.8824 3.87058 15.8112 3.77275 15.857C3.30178 16.0794 -0.230499 15.2871 0.0119126 13.3898C0.224904 11.7115 2.8743 11.8809 4.42397 11.9801L4.4241 11.9801C4.58771 11.9905 4.73907 12.0002 4.874 12.0068C5.869 12.0618 6.85887 12.1143 7.84516 12.161C7.74633 11.9791 7.65125 11.7941 7.55625 11.6093C7.33889 11.1866 7.1219 10.7645 6.86109 10.3811C6.79037 10.2746 6.64924 10.2135 6.50591 10.1514C6.3685 10.0918 6.22906 10.0314 6.1477 9.92934C6.13068 9.90798 6.11208 9.88516 6.09245 9.86107C5.95241 9.68917 5.75996 9.45295 5.71136 9.22742C5.7098 9.21904 5.70827 9.21058 5.70674 9.2021C5.68795 9.09796 5.66838 8.98955 5.56592 8.97028C5.33043 8.89383 4.66553 8.21971 4.21534 7.37184C3.73744 6.56568 3.43962 5.55797 4.02833 4.8074C4.61012 4.07768 5.55899 4.27227 6.52171 4.80045C6.97883 5.07843 7.44287 5.43287 7.85844 5.78036C8.1139 6.00628 8.34501 6.23221 8.55006 6.43267C8.673 6.55285 8.78657 6.66388 8.89042 6.76027C9.79222 7.63016 10.6403 8.53602 11.4578 9.45197C11.4959 8.87827 11.6214 8.30306 11.7468 7.7282L11.7469 7.72817C11.8458 7.27501 11.9446 6.82206 12.0005 6.37025C12.0179 6.23789 11.9535 6.09331 11.8875 5.94525L11.8875 5.94525C11.8219 5.7979 11.7547 5.64713 11.765 5.50153C11.7683 5.46417 11.7713 5.42264 11.7744 5.37825L11.7744 5.37819L11.7744 5.37815C11.7911 5.14185 11.8136 4.82477 11.9243 4.62587C11.9316 4.61227 11.9392 4.59867 11.9467 4.58507C11.9973 4.49443 12.0478 4.40378 11.9936 4.31313C11.7304 3.85445 12.0559 0.122454 13.9537 0.101605C15.6987 0.0885862 15.8336 3.08132 15.9063 4.69413C15.9112 4.80324 15.9158 4.90603 15.9207 5.00115C15.9935 6.29997 16.0506 7.59878 16.0951 8.8976C16.374 8.66281 16.6623 8.41111 16.8838 8.19177C18.1236 6.99642 19.3772 5.81496 20.9632 4.981C20.9986 4.96372 21.0867 4.90438 21.215 4.81788C22.0155 4.27827 24.3845 2.68137 25.3336 3.6397C26.4902 4.80726 24.1977 7.76783 23.8029 8.05277C23.5565 8.23461 23.2991 8.40503 23.0419 8.57536L23.0419 8.57537C22.316 9.05602 21.5912 9.53596 21.1156 10.2697C20.7362 10.8463 20.288 11.3473 19.8101 11.8158C21.2312 11.6823 22.6552 11.5544 24.1492 11.8609C24.1845 11.87 24.2862 11.8775 24.4347 11.8885C25.3049 11.9526 27.7851 12.1356 27.9862 13.4593C28.2355 15.0856 25.0288 16.0446 24.5855 16.0238C24.3 16.0162 24.0135 15.9918 23.7275 15.9675C22.9589 15.902 22.1938 15.8368 21.4619 16.1002C20.408 16.4924 19.3223 16.53 18.235 16.5676C18.1869 16.5692 18.1388 16.5709 18.0907 16.5726C18.1404 16.6311 18.2018 16.7056 18.2716 16.7901C18.5443 17.1208 18.9447 17.6061 19.2726 17.9007C19.4504 18.0709 19.6281 18.2378 19.8046 18.4036C20.6726 19.2189 21.5116 20.0069 22.2023 21.035C22.2233 21.0725 22.3067 21.1584 22.4279 21.2832C22.6658 21.5281 23.0494 21.923 23.3936 22.3971C23.9407 23.0435 24.4394 23.8774 24.1139 24.5932C23.7745 25.3369 22.7841 25.4272 21.7798 25.2604C20.824 25.038 19.889 24.5793 19.7366 24.4056C19.5165 24.1886 19.3089 23.959 19.1024 23.7307C18.9319 23.5422 18.7622 23.3546 18.5869 23.1755C18.2267 22.7585 17.8319 22.3832 17.3263 22.133C17.0104 21.9623 16.7184 21.7665 16.4438 21.5531C16.426 22.9861 16.3226 24.4123 15.8237 25.8225C15.8144 25.8506 15.7983 25.9203 15.7749 26.0218L15.7749 26.0218C15.5901 26.8234 14.9483 29.6069 13.5589 29.5267C11.9313 29.4364 11.585 26.0241 11.6612 25.5932C11.7091 25.3225 11.772 25.0523 11.8349 24.7822L11.8349 24.7822C12.0175 23.9981 12.1998 23.215 12.0144 22.4241Z"
              fill="var(--highlight-color)"
            />
          </svg>
          <p>Get in Touch</p>
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0144 22.4241C11.7756 21.4113 11.8065 20.4074 11.8419 19.4046C11.6307 19.6079 11.4124 19.803 11.1837 19.9854C10.5873 20.4633 9.89789 20.8185 9.20932 21.1733L9.2093 21.1733C8.78633 21.3912 8.36366 21.609 7.96306 21.8549C7.83877 21.9311 7.75406 22.0799 7.66776 22.2314C7.58093 22.3839 7.49249 22.5392 7.36049 22.6263C7.33317 22.6443 7.30384 22.664 7.27289 22.6848L7.2726 22.685C7.05255 22.8327 6.75051 23.0354 6.50166 23.0781L6.47308 23.0827C6.35648 23.1016 6.23479 23.1213 6.18999 23.224C5.96143 23.7591 2.45686 25.8927 1.35561 24.329C0.400521 22.9959 2.57898 21.1741 3.9298 20.0444C4.10711 19.8961 4.27017 19.7597 4.41 19.638L4.41007 19.6379C5.5542 18.6604 6.69834 17.6828 7.8349 16.6977C7.54352 16.6165 7.25362 16.5225 6.96436 16.4287C6.56026 16.2977 6.15743 16.1671 5.7536 16.0724C5.63095 16.0451 5.4865 16.0934 5.3384 16.143C5.18545 16.1941 5.0286 16.2466 4.88785 16.2184L4.82316 16.2068C4.59254 16.1659 4.25917 16.1068 4.06365 15.9612L4.04782 15.9489C3.96227 15.8824 3.87058 15.8112 3.77275 15.857C3.30178 16.0794 -0.230499 15.2871 0.0119126 13.3898C0.224904 11.7115 2.8743 11.8809 4.42397 11.9801L4.4241 11.9801C4.58771 11.9905 4.73907 12.0002 4.874 12.0068C5.869 12.0618 6.85887 12.1143 7.84516 12.161C7.74633 11.9791 7.65125 11.7941 7.55625 11.6093C7.33889 11.1866 7.1219 10.7645 6.86109 10.3811C6.79037 10.2746 6.64924 10.2135 6.50591 10.1514C6.3685 10.0918 6.22906 10.0314 6.1477 9.92934C6.13068 9.90798 6.11208 9.88516 6.09245 9.86107C5.95241 9.68917 5.75996 9.45295 5.71136 9.22742C5.7098 9.21904 5.70827 9.21058 5.70674 9.2021C5.68795 9.09796 5.66838 8.98955 5.56592 8.97028C5.33043 8.89383 4.66553 8.21971 4.21534 7.37184C3.73744 6.56568 3.43962 5.55797 4.02833 4.8074C4.61012 4.07768 5.55899 4.27227 6.52171 4.80045C6.97883 5.07843 7.44287 5.43287 7.85844 5.78036C8.1139 6.00628 8.34501 6.23221 8.55006 6.43267C8.673 6.55285 8.78657 6.66388 8.89042 6.76027C9.79222 7.63016 10.6403 8.53602 11.4578 9.45197C11.4959 8.87827 11.6214 8.30306 11.7468 7.7282L11.7469 7.72817C11.8458 7.27501 11.9446 6.82206 12.0005 6.37025C12.0179 6.23789 11.9535 6.09331 11.8875 5.94525L11.8875 5.94525C11.8219 5.7979 11.7547 5.64713 11.765 5.50153C11.7683 5.46417 11.7713 5.42264 11.7744 5.37825L11.7744 5.37819L11.7744 5.37815C11.7911 5.14185 11.8136 4.82477 11.9243 4.62587C11.9316 4.61227 11.9392 4.59867 11.9467 4.58507C11.9973 4.49443 12.0478 4.40378 11.9936 4.31313C11.7304 3.85445 12.0559 0.122454 13.9537 0.101605C15.6987 0.0885862 15.8336 3.08132 15.9063 4.69413C15.9112 4.80324 15.9158 4.90603 15.9207 5.00115C15.9935 6.29997 16.0506 7.59878 16.0951 8.8976C16.374 8.66281 16.6623 8.41111 16.8838 8.19177C18.1236 6.99642 19.3772 5.81496 20.9632 4.981C20.9986 4.96372 21.0867 4.90438 21.215 4.81788C22.0155 4.27827 24.3845 2.68137 25.3336 3.6397C26.4902 4.80726 24.1977 7.76783 23.8029 8.05277C23.5565 8.23461 23.2991 8.40503 23.0419 8.57536L23.0419 8.57537C22.316 9.05602 21.5912 9.53596 21.1156 10.2697C20.7362 10.8463 20.288 11.3473 19.8101 11.8158C21.2312 11.6823 22.6552 11.5544 24.1492 11.8609C24.1845 11.87 24.2862 11.8775 24.4347 11.8885C25.3049 11.9526 27.7851 12.1356 27.9862 13.4593C28.2355 15.0856 25.0288 16.0446 24.5855 16.0238C24.3 16.0162 24.0135 15.9918 23.7275 15.9675C22.9589 15.902 22.1938 15.8368 21.4619 16.1002C20.408 16.4924 19.3223 16.53 18.235 16.5676C18.1869 16.5692 18.1388 16.5709 18.0907 16.5726C18.1404 16.6311 18.2018 16.7056 18.2716 16.7901C18.5443 17.1208 18.9447 17.6061 19.2726 17.9007C19.4504 18.0709 19.6281 18.2378 19.8046 18.4036C20.6726 19.2189 21.5116 20.0069 22.2023 21.035C22.2233 21.0725 22.3067 21.1584 22.4279 21.2832C22.6658 21.5281 23.0494 21.923 23.3936 22.3971C23.9407 23.0435 24.4394 23.8774 24.1139 24.5932C23.7745 25.3369 22.7841 25.4272 21.7798 25.2604C20.824 25.038 19.889 24.5793 19.7366 24.4056C19.5165 24.1886 19.3089 23.959 19.1024 23.7307C18.9319 23.5422 18.7622 23.3546 18.5869 23.1755C18.2267 22.7585 17.8319 22.3832 17.3263 22.133C17.0104 21.9623 16.7184 21.7665 16.4438 21.5531C16.426 22.9861 16.3226 24.4123 15.8237 25.8225C15.8144 25.8506 15.7983 25.9203 15.7749 26.0218L15.7749 26.0218C15.5901 26.8234 14.9483 29.6069 13.5589 29.5267C11.9313 29.4364 11.585 26.0241 11.6612 25.5932C11.7091 25.3225 11.772 25.0523 11.8349 24.7822L11.8349 24.7822C12.0175 23.9981 12.1998 23.215 12.0144 22.4241Z"
              fill="var(--highlight-color)"
            />
          </svg>

          <p>Hire Me</p>
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0144 22.4241C11.7756 21.4113 11.8065 20.4074 11.8419 19.4046C11.6307 19.6079 11.4124 19.803 11.1837 19.9854C10.5873 20.4633 9.89789 20.8185 9.20932 21.1733L9.2093 21.1733C8.78633 21.3912 8.36366 21.609 7.96306 21.8549C7.83877 21.9311 7.75406 22.0799 7.66776 22.2314C7.58093 22.3839 7.49249 22.5392 7.36049 22.6263C7.33317 22.6443 7.30384 22.664 7.27289 22.6848L7.2726 22.685C7.05255 22.8327 6.75051 23.0354 6.50166 23.0781L6.47308 23.0827C6.35648 23.1016 6.23479 23.1213 6.18999 23.224C5.96143 23.7591 2.45686 25.8927 1.35561 24.329C0.400521 22.9959 2.57898 21.1741 3.9298 20.0444C4.10711 19.8961 4.27017 19.7597 4.41 19.638L4.41007 19.6379C5.5542 18.6604 6.69834 17.6828 7.8349 16.6977C7.54352 16.6165 7.25362 16.5225 6.96436 16.4287C6.56026 16.2977 6.15743 16.1671 5.7536 16.0724C5.63095 16.0451 5.4865 16.0934 5.3384 16.143C5.18545 16.1941 5.0286 16.2466 4.88785 16.2184L4.82316 16.2068C4.59254 16.1659 4.25917 16.1068 4.06365 15.9612L4.04782 15.9489C3.96227 15.8824 3.87058 15.8112 3.77275 15.857C3.30178 16.0794 -0.230499 15.2871 0.0119126 13.3898C0.224904 11.7115 2.8743 11.8809 4.42397 11.9801L4.4241 11.9801C4.58771 11.9905 4.73907 12.0002 4.874 12.0068C5.869 12.0618 6.85887 12.1143 7.84516 12.161C7.74633 11.9791 7.65125 11.7941 7.55625 11.6093C7.33889 11.1866 7.1219 10.7645 6.86109 10.3811C6.79037 10.2746 6.64924 10.2135 6.50591 10.1514C6.3685 10.0918 6.22906 10.0314 6.1477 9.92934C6.13068 9.90798 6.11208 9.88516 6.09245 9.86107C5.95241 9.68917 5.75996 9.45295 5.71136 9.22742C5.7098 9.21904 5.70827 9.21058 5.70674 9.2021C5.68795 9.09796 5.66838 8.98955 5.56592 8.97028C5.33043 8.89383 4.66553 8.21971 4.21534 7.37184C3.73744 6.56568 3.43962 5.55797 4.02833 4.8074C4.61012 4.07768 5.55899 4.27227 6.52171 4.80045C6.97883 5.07843 7.44287 5.43287 7.85844 5.78036C8.1139 6.00628 8.34501 6.23221 8.55006 6.43267C8.673 6.55285 8.78657 6.66388 8.89042 6.76027C9.79222 7.63016 10.6403 8.53602 11.4578 9.45197C11.4959 8.87827 11.6214 8.30306 11.7468 7.7282L11.7469 7.72817C11.8458 7.27501 11.9446 6.82206 12.0005 6.37025C12.0179 6.23789 11.9535 6.09331 11.8875 5.94525L11.8875 5.94525C11.8219 5.7979 11.7547 5.64713 11.765 5.50153C11.7683 5.46417 11.7713 5.42264 11.7744 5.37825L11.7744 5.37819L11.7744 5.37815C11.7911 5.14185 11.8136 4.82477 11.9243 4.62587C11.9316 4.61227 11.9392 4.59867 11.9467 4.58507C11.9973 4.49443 12.0478 4.40378 11.9936 4.31313C11.7304 3.85445 12.0559 0.122454 13.9537 0.101605C15.6987 0.0885862 15.8336 3.08132 15.9063 4.69413C15.9112 4.80324 15.9158 4.90603 15.9207 5.00115C15.9935 6.29997 16.0506 7.59878 16.0951 8.8976C16.374 8.66281 16.6623 8.41111 16.8838 8.19177C18.1236 6.99642 19.3772 5.81496 20.9632 4.981C20.9986 4.96372 21.0867 4.90438 21.215 4.81788C22.0155 4.27827 24.3845 2.68137 25.3336 3.6397C26.4902 4.80726 24.1977 7.76783 23.8029 8.05277C23.5565 8.23461 23.2991 8.40503 23.0419 8.57536L23.0419 8.57537C22.316 9.05602 21.5912 9.53596 21.1156 10.2697C20.7362 10.8463 20.288 11.3473 19.8101 11.8158C21.2312 11.6823 22.6552 11.5544 24.1492 11.8609C24.1845 11.87 24.2862 11.8775 24.4347 11.8885C25.3049 11.9526 27.7851 12.1356 27.9862 13.4593C28.2355 15.0856 25.0288 16.0446 24.5855 16.0238C24.3 16.0162 24.0135 15.9918 23.7275 15.9675C22.9589 15.902 22.1938 15.8368 21.4619 16.1002C20.408 16.4924 19.3223 16.53 18.235 16.5676C18.1869 16.5692 18.1388 16.5709 18.0907 16.5726C18.1404 16.6311 18.2018 16.7056 18.2716 16.7901C18.5443 17.1208 18.9447 17.6061 19.2726 17.9007C19.4504 18.0709 19.6281 18.2378 19.8046 18.4036C20.6726 19.2189 21.5116 20.0069 22.2023 21.035C22.2233 21.0725 22.3067 21.1584 22.4279 21.2832C22.6658 21.5281 23.0494 21.923 23.3936 22.3971C23.9407 23.0435 24.4394 23.8774 24.1139 24.5932C23.7745 25.3369 22.7841 25.4272 21.7798 25.2604C20.824 25.038 19.889 24.5793 19.7366 24.4056C19.5165 24.1886 19.3089 23.959 19.1024 23.7307C18.9319 23.5422 18.7622 23.3546 18.5869 23.1755C18.2267 22.7585 17.8319 22.3832 17.3263 22.133C17.0104 21.9623 16.7184 21.7665 16.4438 21.5531C16.426 22.9861 16.3226 24.4123 15.8237 25.8225C15.8144 25.8506 15.7983 25.9203 15.7749 26.0218L15.7749 26.0218C15.5901 26.8234 14.9483 29.6069 13.5589 29.5267C11.9313 29.4364 11.585 26.0241 11.6612 25.5932C11.7091 25.3225 11.772 25.0523 11.8349 24.7822L11.8349 24.7822C12.0175 23.9981 12.1998 23.215 12.0144 22.4241Z"
              fill="var(--highlight-color)"
            />
          </svg>
          <p>Work together</p>
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0144 22.4241C11.7756 21.4113 11.8065 20.4074 11.8419 19.4046C11.6307 19.6079 11.4124 19.803 11.1837 19.9854C10.5873 20.4633 9.89789 20.8185 9.20932 21.1733L9.2093 21.1733C8.78633 21.3912 8.36366 21.609 7.96306 21.8549C7.83877 21.9311 7.75406 22.0799 7.66776 22.2314C7.58093 22.3839 7.49249 22.5392 7.36049 22.6263C7.33317 22.6443 7.30384 22.664 7.27289 22.6848L7.2726 22.685C7.05255 22.8327 6.75051 23.0354 6.50166 23.0781L6.47308 23.0827C6.35648 23.1016 6.23479 23.1213 6.18999 23.224C5.96143 23.7591 2.45686 25.8927 1.35561 24.329C0.400521 22.9959 2.57898 21.1741 3.9298 20.0444C4.10711 19.8961 4.27017 19.7597 4.41 19.638L4.41007 19.6379C5.5542 18.6604 6.69834 17.6828 7.8349 16.6977C7.54352 16.6165 7.25362 16.5225 6.96436 16.4287C6.56026 16.2977 6.15743 16.1671 5.7536 16.0724C5.63095 16.0451 5.4865 16.0934 5.3384 16.143C5.18545 16.1941 5.0286 16.2466 4.88785 16.2184L4.82316 16.2068C4.59254 16.1659 4.25917 16.1068 4.06365 15.9612L4.04782 15.9489C3.96227 15.8824 3.87058 15.8112 3.77275 15.857C3.30178 16.0794 -0.230499 15.2871 0.0119126 13.3898C0.224904 11.7115 2.8743 11.8809 4.42397 11.9801L4.4241 11.9801C4.58771 11.9905 4.73907 12.0002 4.874 12.0068C5.869 12.0618 6.85887 12.1143 7.84516 12.161C7.74633 11.9791 7.65125 11.7941 7.55625 11.6093C7.33889 11.1866 7.1219 10.7645 6.86109 10.3811C6.79037 10.2746 6.64924 10.2135 6.50591 10.1514C6.3685 10.0918 6.22906 10.0314 6.1477 9.92934C6.13068 9.90798 6.11208 9.88516 6.09245 9.86107C5.95241 9.68917 5.75996 9.45295 5.71136 9.22742C5.7098 9.21904 5.70827 9.21058 5.70674 9.2021C5.68795 9.09796 5.66838 8.98955 5.56592 8.97028C5.33043 8.89383 4.66553 8.21971 4.21534 7.37184C3.73744 6.56568 3.43962 5.55797 4.02833 4.8074C4.61012 4.07768 5.55899 4.27227 6.52171 4.80045C6.97883 5.07843 7.44287 5.43287 7.85844 5.78036C8.1139 6.00628 8.34501 6.23221 8.55006 6.43267C8.673 6.55285 8.78657 6.66388 8.89042 6.76027C9.79222 7.63016 10.6403 8.53602 11.4578 9.45197C11.4959 8.87827 11.6214 8.30306 11.7468 7.7282L11.7469 7.72817C11.8458 7.27501 11.9446 6.82206 12.0005 6.37025C12.0179 6.23789 11.9535 6.09331 11.8875 5.94525L11.8875 5.94525C11.8219 5.7979 11.7547 5.64713 11.765 5.50153C11.7683 5.46417 11.7713 5.42264 11.7744 5.37825L11.7744 5.37819L11.7744 5.37815C11.7911 5.14185 11.8136 4.82477 11.9243 4.62587C11.9316 4.61227 11.9392 4.59867 11.9467 4.58507C11.9973 4.49443 12.0478 4.40378 11.9936 4.31313C11.7304 3.85445 12.0559 0.122454 13.9537 0.101605C15.6987 0.0885862 15.8336 3.08132 15.9063 4.69413C15.9112 4.80324 15.9158 4.90603 15.9207 5.00115C15.9935 6.29997 16.0506 7.59878 16.0951 8.8976C16.374 8.66281 16.6623 8.41111 16.8838 8.19177C18.1236 6.99642 19.3772 5.81496 20.9632 4.981C20.9986 4.96372 21.0867 4.90438 21.215 4.81788C22.0155 4.27827 24.3845 2.68137 25.3336 3.6397C26.4902 4.80726 24.1977 7.76783 23.8029 8.05277C23.5565 8.23461 23.2991 8.40503 23.0419 8.57536L23.0419 8.57537C22.316 9.05602 21.5912 9.53596 21.1156 10.2697C20.7362 10.8463 20.288 11.3473 19.8101 11.8158C21.2312 11.6823 22.6552 11.5544 24.1492 11.8609C24.1845 11.87 24.2862 11.8775 24.4347 11.8885C25.3049 11.9526 27.7851 12.1356 27.9862 13.4593C28.2355 15.0856 25.0288 16.0446 24.5855 16.0238C24.3 16.0162 24.0135 15.9918 23.7275 15.9675C22.9589 15.902 22.1938 15.8368 21.4619 16.1002C20.408 16.4924 19.3223 16.53 18.235 16.5676C18.1869 16.5692 18.1388 16.5709 18.0907 16.5726C18.1404 16.6311 18.2018 16.7056 18.2716 16.7901C18.5443 17.1208 18.9447 17.6061 19.2726 17.9007C19.4504 18.0709 19.6281 18.2378 19.8046 18.4036C20.6726 19.2189 21.5116 20.0069 22.2023 21.035C22.2233 21.0725 22.3067 21.1584 22.4279 21.2832C22.6658 21.5281 23.0494 21.923 23.3936 22.3971C23.9407 23.0435 24.4394 23.8774 24.1139 24.5932C23.7745 25.3369 22.7841 25.4272 21.7798 25.2604C20.824 25.038 19.889 24.5793 19.7366 24.4056C19.5165 24.1886 19.3089 23.959 19.1024 23.7307C18.9319 23.5422 18.7622 23.3546 18.5869 23.1755C18.2267 22.7585 17.8319 22.3832 17.3263 22.133C17.0104 21.9623 16.7184 21.7665 16.4438 21.5531C16.426 22.9861 16.3226 24.4123 15.8237 25.8225C15.8144 25.8506 15.7983 25.9203 15.7749 26.0218L15.7749 26.0218C15.5901 26.8234 14.9483 29.6069 13.5589 29.5267C11.9313 29.4364 11.585 26.0241 11.6612 25.5932C11.7091 25.3225 11.772 25.0523 11.8349 24.7822L11.8349 24.7822C12.0175 23.9981 12.1998 23.215 12.0144 22.4241Z"
              fill="var(--highlight-color)"
            />
          </svg>
        </Marquee>
      </StyledMarquee>
    </div>
  );
}
