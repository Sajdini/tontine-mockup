import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Project.css";
import Project from "@/types/Project";

interface T {
  project: Project;
}

const Project = ({ project }: T) => {
  return (
    <div className="project-card">
      <Image src={project.image} height={150} width={300} alt="Project Image" />
      <div className="info-container">
        <h4 className="project-title">{project.title}</h4>
        <div className="stacks">
          {project.stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <Link href={project.link} className="project-link">
          Visit website
        </Link>
      </div>
    </div>
  );
};

export default Project;
