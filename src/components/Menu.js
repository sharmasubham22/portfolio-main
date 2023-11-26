import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div
      className="container-fluid sticky-top menu"
      style={{
        borderBottom: "1px solid",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="d-flex bd-highlight">
        <div className="p-3 flex-fill bd-highlight menu-section">
          <Link className="fs-3 logo" to="/">
            &#60;subham.sharma/&#62;
          </Link>
        </div>
        <div className="p-3 fs-3 bd-highlight menu-section">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}
