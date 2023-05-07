import { Project } from "@/types";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`projects/${project.slug}`}
      className="bg-zinc-900 rounded-2xl w-full p-16 pt-96"
    >
      <div>
        <h2 className=" text-5xl">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
