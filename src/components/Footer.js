import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function Footer() {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
      var timer = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer);
      };
    });

    const Footer = styled.div`
      font-family: var(--general-font);
      border-top: 1px solid var(--border-color);
      display: flex;
      padding: 20px 15px 15px 15px;
      justify-content: space-between;

      @media (max-width: 870px) {
        display: inline-block;
        width:100%;
        padding: 10px;
        justify-content: start;
      }
    `;
  return (
    <Footer
    >
      <div >
        <p className="text-muted">&#169; 2023 Subham Sharma </p>
      </div>
      <div>
        {" "}
        <p className="text-muted">
          Designed and Developed with <i className="fa-solid fa-heart"></i>
        </p>
      </div>
      <div>
        <p className="text-muted">
          Halifax, NS (Canada), {date.toLocaleDateString()},{" "}
          {date.toLocaleTimeString()}
        </p>
      </div>
    </Footer>
  );
}
