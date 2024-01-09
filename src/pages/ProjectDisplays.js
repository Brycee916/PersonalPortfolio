import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helper/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/ProjectDisplays.css';

export default function ProjectDisplays() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} />
      <p>
        <b>Technologies used:</b> {project.techUsed}
      </p>
      <p className="projectInfo"> 
        <b>More Information: </b> {project.info}
      </p>
    </div>
  )
}
