import React from "react";
import Profile from "./sections/Profile";
import Work from "./sections/Work";

export default function About() {
  document.title = "About | Subham Sharma";
  return (
      <div>
        <main>
          <section id="section1" >
            <Profile />
          </section>
          <section id="section4" >
            <Work />
          </section>
        </main>
      </div>
  );
}
