import React from 'react'

export default function Footer() {
  
  return (
    <div>
      <section
        className={`w-100 d-flex flex-column justify-content-center`}
        style={{
          padding: "1.5rem",
          fontFamily: "Sono",
          borderTop: "1px solid",
          borderColor: "var(--border-color)",
        }}
      >
        <p className="text-muted">&#169; 2023 Subham Sharma </p>
      </section>
    </div>
  );
}
