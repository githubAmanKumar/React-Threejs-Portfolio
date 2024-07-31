import React from 'react'

function GenericProject(props) {
  return (
    <div className="card">
          <img src={props.ImgPath} alt=""/>
          <a href={props.ProjectLink}>{props.ProjectName}</a>
        </div>
  )
}

export default GenericProject