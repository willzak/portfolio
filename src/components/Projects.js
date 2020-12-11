import ProjectList from "./ProjectList";

import "../styles/projects.sass";

export default function Projects(props) {

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <ProjectList />
    </div>
  )
}