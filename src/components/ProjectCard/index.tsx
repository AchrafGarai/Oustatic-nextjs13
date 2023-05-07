import { Project } from "@/types";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }: { project: Project }) {
  return <Link href={`projects/${project.slug}`}>{project.title}</Link>;
}

export default ProjectCard;
