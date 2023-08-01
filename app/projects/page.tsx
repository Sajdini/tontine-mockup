import Project from "@/components/project/Project";
import { getProjects } from "@/sanity/sanity-utils";
import "./page.css";
const Projects = async () => {
  const projects = await getProjects();

  return (
    <section className="project-section">
      <div className="project-items-container">
        <h1 className="section-title">My projects</h1>
        <div className="projects-flex_container">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
