import React, { useRef, useState } from "react";
import styled from "styled-components";
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
      padding: 10px 10px 10px 0;
      background-color: transparent;
      outline: 0;
      border: 0;
      border-bottom: 1px solid var(--border-color);
      border-width: 1px;
      border-image: linear-gradient(
        to right,
        var(--border-color),
        transparent
      );
      border-image-slice: 1;
      font-family: var(--heavy-font);
      color: var(--text-color);
      font-size: var(--content-font);
      font-weight: 400;
    }

    .form-input:-webkit-autofill {
      -webkit-background-clip: text;
      -webkit-text-fill-color: var(--text-color) !important;
    }

    .form-input:focus {
      border-width: 1px;
      border-image: linear-gradient(
        to right,
        var(--highlight-color),
        transparent
      );
      border-image-slice: 1;
    }

    .form-input::placeholder {
      color: var(--content-color);
    }

    .form-input:focus::placeholder {
      color: var(--highlight-color);
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
    <>
      <div className="container-xxl mb-5">
        <div>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--general-font)",
              color: "var(--content-color)",
              fontSize: "var(--content-font)",
              fontWeight: "400",
            }}
          >
            I am currently looking for my next opportunity! If you like my work,
            have questions or just want to say hi, do reach out and I will try
            my best to get back to you as soon as possible.
          </p>
        </div>
        <div className="mb-4">
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
        </div>
        <div className="d-flex justify-content-center mt-4 nav-social">
          <Link
            className="social-item"
            to="https://www.linkedin.com/in/subham-sharma-137985128/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in "></i>
          </Link>
          <Link
            to="https://github.com/sharmasubham22"
            className="social-item"
            target="_blank"
          >
            <i className="fa-brands fa-github "></i>
          </Link>
        </div>
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
                  placeholder="Full Name *"
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
                  placeholder="Email Address *"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-input mt-2 mt-md-3"
              id="message"
              name="message"
              rows="3"
              placeholder="Your Message *"
              required
            ></textarea>

            <div className="mt-3 d-flex justify-content-center ">
              <SubmitButton to="/" className="submit my-2">
                <span>
                  Send Message <i class="fa-regular fa-paper-plane"></i>
                </span>
              </SubmitButton>
            </div>
            <div>{result ? <Result /> : null}</div>
          </form>
        </StyledDiv>
      </div>
    </>
  );
}
