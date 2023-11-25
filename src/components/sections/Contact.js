import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
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
  timer: 2000
})

};

  const StyledForm = styled.div`
    h1 {
      ${({ theme }) => theme.mixins.chip};
    }

    .link-design {
      text-decoration: none;
      display: inline-block;
      position: relative;
      color: var(--highlight-color);
      font-family: sono;
      font-size: clamp(17px, 2vw, 20px);
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

    .link-design:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    .social-links {
      color: var(--text-color);
      font-size: 25px;
      margin-right: 20px;
      padding: 20px;
      border: 1px solid var(--highlight-color);
      background-color: rgb(126, 87, 194, 0.3);
      transition: 0.5s ease;
      opacity: 0.4;
      border-radius: 15px;
    }

    .social-links:hover {
      transform: scale(0.8);
      opacity: 1;
    }

    .form-label {
      color: var(--content-color);
    }

    .form-control {
      background-color: var(--card-color);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      padding: 12px;
    }
  `;

  const SubmitButton = styled.button`
    color: var(--highlight-color);
    background-color: transparent;
    border: 1px solid var(--highlight-color);
    border-radius: 5px;
    font-size: clamp(15px, 2vw, 18px);
    font-family: sono;
    line-height: 1;
    text-decoration: none;
    padding: 1.25rem 1.75rem;
    transition: var(--transition);
    transition:0.2s ease;

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--highlight-color);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `;
  return (
    <div
      className="d-flex w-100"
      style={{ marginTop: "6%", marginBottom: "5%" }}
    >
      <div className="container">
        <StyledForm>
          <div className="row row-cols-1 row-cols-md-2 my-5">
            <div className="col">
              <h1>Contact</h1>
              <h2
                className="my-5"
                style={{
                  fontFamily: "shapiro-air",
                  color: "var(--text-color)",
                  fontSize: "clamp(50px, 6vw, 5vw)",
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </h2>
              <Link
                to="mailto:subham.sharma221296@gmail.com"
                className="link-design mb-3"
              >
                subham.sharma221296@gmail.com
              </Link>
              <div>
                <div className="mt-4">
                  <Link
                    to="https://www.linkedin.com/in/subham-sharma-137985128/"
                    target="_blank"
                    className="social-links"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link to="/" className="social-links">
                    <i className="fa-brands fa-github"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col mt-5 text-white" style={{ fontFamily: "sono" }}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    id="name"
                    placeholder="Please enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Please enter your email address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Please enter your message"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <SubmitButton to="/" className="submit my-2">
                    Submit
                  </SubmitButton>
                </div>
                <div>{result ? <Result /> : null}</div>
              </form>
            </div>
          </div>
        </StyledForm>
      </div>
    </div>
  );
}
