import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reveal from '../Motion';

export default function Work() {
    const StyledSection = styled.div`
      .work-btn {
        ${({ theme }) => theme.mixins.button};
        font-size: clamp(19px, 2vw, 22px);
      }

      .row {
        background-color: var(--card-color);
        border-radius: 10px;
      }

      .col-text {
        border-right: 1px solid var(--highlight-color);
        padding: 10%;
      }

      .col-img {
        padding: 10%;
      }

      h2 {
        font-family: var(--heavy-font);
        font-weight: 700;
        color: var(--highlight-color);
        font-size: clamp(30px, 4vw, 60px);
      }

      h4 {
        font-family: var(--general-font);
        color: var(--content-color);
        font-size: clamp(18px, 2vw, 30px);
        margin: 30px 0;
      }

      @media (max-width: 991px) {
        margin-top: 20%;

        .row {
          border-radius:0px;
        }

        .col-text {
          padding: 10% 10% 0 10%;
          border-right: none;
          border-top: 1px solid var(--highlight-color);
          text-align:center
        }

        .col-img {
          padding: 0 10% 10% 10%;
        }
      }
    `;
  return (
    <>
      <div
        className="container"
        style={{ marginBottom: "5%" }}
      >
        <Reveal>
          <StyledSection>
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col col-text">
                <h2>I build & design stuff</h2>
                <h4>Projects, web apps and experimentals.</h4>
              </div>
              <div className="col col-img d-flex justify-content-center align-items-center">
                <Link type="button" className="work-btn" to="/">
                  Checkout My Work <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </StyledSection>
        </Reveal>
      </div>
    </>
  );
}
