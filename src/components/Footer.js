import React from 'react'

export default function Footer() {
  
  return (
    <div
      className="d-flex p-3 bd-highlight flex-wrap"
      style={{
        fontFamily: "var(--general-font)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="p-2 d-flex justify-content-start bd-highlight">
        <p className="text-muted">&#169; 2023 Subham Sharma </p>
      </div>
      <div className="p-2 d-flex justify-content-end bd-highlight justify-content-sm-start">
     
      </div>
    </div>
  );
}
