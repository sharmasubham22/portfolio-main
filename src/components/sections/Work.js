import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Reveal from '../Motion';

export default function Work() {
    const StyledSection = styled.div`
      .work-btn {
        ${({ theme }) => theme.mixins.button};
        font-size: clamp(19px, 2vw, 22px);
        font-weight:200;
      }

      .text1 {
        font-family: var(--heavy-font);
        color: var(--text-color);
        font-size: clamp(35px, 8vw, 84px);
        line-height:1;
      }

      .text2 {
        font-family: var(--general-font);
        color: var(--content-color);
        font-size: clamp(18px, 2vw, 30px);
        
      }

    `;
  return (
    <>
      <div className="container" style={{ marginBottom: "100px", marginTop:"100px" }}>
        <Reveal>
          <StyledSection>
            <div className="d-flex justify-content-center mt-5">
              <div>
                <p className="text1">
                  <span
                    style={{
                      color: "var(--highlight-color)",
                    }}
                  >
                    ●{" "}
                  </span>
                  I build & design stuff{" "}
                  <span
                    style={{
                      color: "var(--highlight-color)",
                    }}
                  >
                    ●
                  </span>
                </p>
                <p className="text2 text-center">
                  Projects, web apps and experimentals.
                </p>
              </div>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ margin: "5% 0 0 0" }}
            >
              <Link type="button" className="work-btn" to="/">
                Checkout My Work <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </StyledSection>
        </Reveal>
      </div>
    </>
  );
}
