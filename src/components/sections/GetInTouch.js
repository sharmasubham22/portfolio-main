import React, { useRef, useState } from "react";
import styled from "styled-components";
import Reveal from "../Motion";
// import { bullet4 } from "../../images/bullets";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  const StyledDiv = styled.div`
    justify-items: center;
    border-radius: 10px;

    .circle {
      position: relative;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      user-select: none;
    }

    .form-group {
      position: relative;
      font-family: var(--general-font);
      padding: 15px 0 0;
    }

    .form-input {
      width: 100%;
      padding: 10px ;
      background-color: transparent;
      outline: 0;
      border:0;
      border: 1px solid var(--text-color); 
      font-family: var(--general-font);
      color: var(--text-color);
      font-size: clamp(15px, 2vw, 20px);
      font-weight: 200;
    }

    .form-input:focus {
      border-width: 1px;
      border-image: linear-gradient(
        to right,
        var(--highlight-color),
        var(--highlight-color)
      );
      border-image-slice: 1;
    }

    .form-input::placeholder {
      color: var(--content-color);
      opacity:0.7;
    }

    .form-div {
      width: 70%;
    }

    @media (max-width: 1091px) {
      .form-div {
        width: 100%;
      }
    }
  `;

  const [result, showResult] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eq769mw",
        "subham-portfolio",
        form.current,
        "Y3cUPmlGmNZfS3sZ_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  const Result = () => {
    Swal.fire({
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const SubmitButton = styled.button`
    ${({ theme }) => theme.mixins.button};

  `;

  return (
    <div>
      <div className="container-xxl" style={{ marginTop: "100px" }}>
        <p
          className="text-center"
          style={{
            fontFamily: "var(--heavy-font)",
            color: "var(--text-color)",
            fontSize: "clamp(35px, 8vw, 84px)",
            lineHeight: "1",
          }}
        >
          <span
            style={{
              color: "var(--highlight-color)",
            }}
          >
            ●{" "}
          </span>
          Get in Touch{" "}
          <span
            style={{
              color: "var(--highlight-color)",
            }}
          >
            ●
          </span>
        </p>
        <Reveal>
          <div>
            <p
              className="text-center"
              style={{
                fontFamily: "var(--general-font)",
                color: "var(--content-color)",
                fontSize: "clamp(15px, 2vw, 20px)",
                fontWeight: "200",
              }}
            >
              If you have questions or just want to say hi, do reach out and I
              will try my best to get back to you as soon as possible.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <StyledDiv className="form-box text-white d-flex justify-content-center my-5">
            <form ref={form} onSubmit={sendEmail} className="form-div">
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                  {" "}
                  <input
                    type="text"
                    className="form-input mt-2"
                    style={{ float: "left" }}
                    name="fullName"
                    id="name"
                    placeholder="Full Name (required)"
                    required
                  />
                </div>
                <div className="col">
                  {" "}
                  <input
                    type="email"
                    className="form-input mt-2"
                    style={{ float: "right" }}
                    name="email"
                    id="email"
                    placeholder="Email Address (required)"
                    required
                  />
                </div>
              </div>

              <textarea
                className="form-input mt-2 mt-md-3"
                id="message"
                name="message"
                rows="3"
                placeholder="Your Message (required)"
                required
              ></textarea>

              <div className="mt-3 d-flex justify-content-center ">
                <SubmitButton to="/" className="submit my-2">
                  Send Message
                </SubmitButton>
              </div>
              <div>{result ? <Result /> : null}</div>
            </form>
          </StyledDiv>
          <div className="mb-5">
            <div className="d-flex justify-content-center">
              {" "}
              <Link
                to="mailto:subham.sharma221296@gmail.com"
                className="link-design my-4"
              >
                <i className="fa-solid fa-arrow-right"></i>{" "}
                subham.sharma221296@gmail.com
              </Link>
            </div>
            <div className="my-2 d-flex justify-content-center">
              <Link
                to="https://www.linkedin.com/in/subham-sharma-137985128/"
                target="_blank"
                className="fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="ph ph-linkedin-logo brand-icons"></i>
                <span className="link-design mx-2">LinkedIn</span>
              </Link>
              <Link
                to="https://github.com/sharmasubham22"
                target="_blank"
                className="mx-4 fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="ph ph-github-logo brand-icons"></i>
                <span className="link-design mx-2">Github</span>
              </Link>
              <Link
                type="button"
                className="fs-4"
                to="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <i class="ph ph-read-cv-logo brand-icons"></i>{" "}
                <span className="link-design mx-2">Resume</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
