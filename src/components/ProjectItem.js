import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div 
      className="projectItem" 
      onClick={() => {navigate("/project/" + id);
      }}
      >
        <h1 className="ProjectName"> {name} </h1>
        <div 
          style={{backgroundImage: `url(${image})` }} 
          className="projectImage"
        />
    </div>
  )
}
export default ProjectItem;
