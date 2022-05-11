import React from "react";
import { StyledParagraph, StyledLink } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";
import Cards from "../Cards/Cards";

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle number="01">Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Selected projects I've worked on recently.{" "}
        <StyledLink
          href="https://github.com/sunnyshk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to see more?
        </StyledLink>
      </StyledParagraph>
      <ProjectsContainer>
        <Cards/>
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
