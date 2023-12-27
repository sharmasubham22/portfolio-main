import React, { useRef, useState } from "react";
import styled from "styled-components";
import Reveal from "../Motion";
import { bullet4 } from "../../images/bullets";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  const StyledDiv = styled.div`
    justify-items: center;

    .fa-solid {
      position: absolute;
      color: var(--card-color);
      font-size: 70px;
      z-index: 999;
    }

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
      background-color: transparent;
      color: var(--text-color);
      border: 0;
      border-bottom: 1px solid var(--content-color);
      outline: 0;
      font-size: clamp(16px, 1vw, 24px);
      padding: 7px 0;
      transition: border-color 0.2s;
    }

    .form-input::placeholder {
      color: transparent;
    }
    .form-input:placeholder-shown ~ .form-label {
      cursor: text;
      font-size: clamp(18px, 1.3vw, 22px);
      top: 20px;
    }

    .form-label {
      position: absolute;
      top: 0;
      font-size: clamp(14px, 1vw, 16px);
      display: block;
      transition: 0.2s;
      color: var(--highlight-color);
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
    .form-input:focus ~ .form-label {
      position: absolute;
      top: 0;
      font-size: clamp(14px, 1vw, 16px);
      display: block;
      transition: 0.2s;
      color: var(--highlight-color);
    }

    /* reset input */
    .form-input:required,
    .form-input:invalid {
      box-shadow: none;
    }

    .form-control:focus {
      border-color: var(--highlight-color);
      box-shadow: 0 0 0 0.1rem rgba(163, 177, 138, 0.6);
    }

    .send-msg {
      color: var(--text-color);
      font-size: clamp(22px, 2vw, 30px);
      font-weight: 700;
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
      <div className="container" style={{ marginTop: "5%" }}>
        <Reveal>
          <h1 className="my-5 section-head d-flex">
            <div className="bullet-hashtag">{bullet4}</div> Get in Touch
          </h1>
        </Reveal>
        <div className="row row-cols-1 row-cols-lg-2 my-5 g-4">
          <Reveal>
            <div className="col">
              <p
                style={{
                  fontFamily: "var(--general-font)",
                  color: "var(--content-color)",
                  fontSize: "clamp(15px, 2vw, 22px)",
                }}
              >
                If you have questions or just want to say hi, do reach out and I
                will try my best to get back to you as soon as possible.
              </p>
              <Link
                to="mailto:subham.sharma221296@gmail.com"
                className="link-design my-4"
              >
                <i className="fa-solid fa-arrow-right"></i>{" "}
                subham.sharma221296@gmail.com
              </Link>
              <div className="my-2">
                <Link
                  to="https://www.linkedin.com/in/subham-sharma-137985128/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin fs-4 brand-icons"></i>
                  <span className="link-design mx-2">LinkedIn</span>
                </Link>
                <Link
                  to="https://github.com/sharmasubham22"
                  target="_blank"
                  className="mx-5"
                >
                  <i className="fa-brands fa-github fs-4 brand-icons"></i>
                  <span className="link-design mx-2">Github</span>
                </Link>
              </div>
              <Link
                type="button"
                className="link-design mt-4"
                to="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
                target="_blank"
              >
                <i className="fa-solid fa-arrow-right"></i> Resume
              </Link>
              <div className="mt-5">
                <p
                  style={{
                    color: "var(--content-color)",
                    fontFamily: "var(--general-font)",
                    fontSize: "clamp(15px, 2vw, 26px)",
                  }}
                >
                  <i class="fa-solid fa-map-pin"></i> Halifax, NS (Canada)
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <StyledDiv className="col text-white d-flex justify-content-center">
              <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
                <p className="send-msg">Send a message!</p>

                <div className="form-group mb-3" style={{ display: "grid" }}>
                  <input
                    type="text"
                    className="form-input"
                    name="fullName"
                    id="name"
                    placeholder="Please enter your full name"
                    required
                  />
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                </div>
                <div className="form-group mb-3" style={{ display: "grid" }}>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Please enter your email address"
                    required
                  />
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                </div>

                <div className="form-group" style={{ display: "grid" }}>
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Please enter your message"
                    required
                  ></textarea>
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                </div>
                <div className="mt-3">
                  <SubmitButton to="/" className="submit my-2">
                    Send it Now!
                  </SubmitButton>
                </div>
                <div>{result ? <Result /> : null}</div>
              </form>
            </StyledDiv>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
