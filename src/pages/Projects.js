import React, { useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../helper/ProjectList';

export default function Projects() {
  return (
    <div className="projects">
      <h1 id="Title"> My Personal Projects </h1>
      <div className="projectList"></div>
      {ProjectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image} />;
      })}
    </div>
  )
}
