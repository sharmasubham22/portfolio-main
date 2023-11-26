import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function OtherProjects(props) {
     let { title, description, techs, git, demo } = props;

     const StyledCard = styled.section`
       font-family: var(--general-font);

       .card {
         background-color: var(--card-color);
       }

       .card:hover{
        border: 1px solid var(--highlight-color);
       }

       .card-title {
         color: var(--text-color);
         text-transform: uppercase;
       }

       .card-subtitle {
         color: var(--highlight-color);
         text-transform: uppercase;
       }

       .card-text {
         color: var(--content-color);
       }

       .fa-folder {
         font-size: 50px;
         color: var(--highlight-color);
       }
       .fa-brands,
       .fa-solid {
         margin-left: 30px;
       }

       .project-link {
         text-decoration: none;
         color: var(--text-color);
         font-size: 24px;
       }

       .project-link:hover{
        color: var(--highlight-color);
       }
     `;
  return (
    <>
      <StyledCard>
        <div className="card p-4">
          <div className="card-body">
            <div className="d-flex bd-highlight mb-3">
              <div className="flex-grow-1 bd-highlight">
                <i className="fa-regular fa-folder"></i>
              </div>
              <div className="bd-highlight">
                <Link className="project-link" to={git}>
                  <i className="fa-brands fa-github"></i>
                </Link>
              </div>
              <div className="bd-highlight">
                <Link className="project-link" to={demo}>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </Link>
              </div>
            </div>
            <h5 className="card-title fs-3">{title}</h5>

            <p className="card-text">{description}</p>
            {techs.map((techKey, techIndex) => {
              return (
                <h6
                  className="card-subtitle mb-2"
                  style={{ display: "inline", marginRight: "10px" }}
                  key={techIndex}
                >
                  {techKey}
                </h6>
              );
            })}
          </div>
        </div>
      </StyledCard>
    </>
  );
}
