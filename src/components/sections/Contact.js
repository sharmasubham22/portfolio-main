import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Reveal from "../Motion";

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

    .social-links {
      color: var(--text-color);
      font-size: 25px;
      margin-right: 20px;
      padding: 25px 30px;
      border: 1px solid var(--highlight-color);
      transition: 0.5s ease;
      border-radius: 50%;
    }

    .social-links:hover {
      transform: scale(0.6);
      background-color: rgb(163, 177, 138, 0.3);
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
    ${({ theme }) => theme.mixins.button};
  `;
  return (
    <div
      className="d-flex w-100"
      style={{ marginTop: "6%", marginBottom:"6%" }}
    >
      <div className="container ">
        <StyledForm>
          <div className="row row-cols-1 row-cols-xl-2 my-5">
            <div className="col">
              <h1>Contact</h1>
              <Reveal>
                <h2
                  className="my-5"
                  style={{
                    fontFamily: "var(--heavy-font)",
                    color: "var(--text-color)",
                    fontSize: "clamp(40px, 6vw, 5.5vw)",
                    textTransform: "uppercase",
                  }}
                >
                  Get In Touch
                </h2>
              </Reveal>
              <Reveal>
                <Link
                  to="mailto:subham.sharma221296@gmail.com"
                  className="link-design mb-5"
                >
                  <i className="fa-solid fa-arrow-right"></i> subham.sharma221296@gmail.com
                </Link>
              </Reveal>
              <div>
                <div className="mt-4">
                  <Reveal>
                    <Link
                      to="https://www.linkedin.com/in/subham-sharma-137985128/"
                      target="_blank"
                      className="social-links"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      to="https://github.com/sharmasubham22"
                      target="_blank"
                      className="social-links"
                    >
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
            <div
              className="col mt-5 text-white"
              style={{ fontFamily: "var(--general-font)" }}
            >
              <form ref={form} onSubmit={sendEmail}>
                <Reveal>
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
                      required
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
                      required
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
                      required
                    ></textarea>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="mt-3">
                    <SubmitButton to="/" className="submit my-2">
                      Submit
                    </SubmitButton>
                  </div>
                </Reveal>
                <div>{result ? <Result /> : null}</div>
              </form>
            </div>
          </div>
        </StyledForm>
      </div>
    </div>
  );
}
