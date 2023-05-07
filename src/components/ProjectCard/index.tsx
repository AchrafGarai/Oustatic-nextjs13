import { Project } from "@/types";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`projects/${project.slug}`}>
      <div className="p-4 bg-zinc-900 rounded-2xl w-full h-60">
        {project.title}
      </div>
    </Link>
  );
}

export default ProjectCard;
