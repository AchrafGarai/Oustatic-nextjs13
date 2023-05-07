import { Project } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import s from "./ProjectCard.module.css";
import cn from "clsx";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`projects/${project.slug}`}
      className="bg-zinc-900 rounded-2xl w-full h-[600px] border border-zinc-800 relative overflow-hidden"
    >
      <div className="p-4 w-full h-full">
        <div className="relative w-full h-full ">
          <Image
            src={project.coverImage}
            fill
            alt={project.description}
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-black bg-opacity-80 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-10 py-20 opacity-0 hover:opacity-100 transition-all">
        <h2 className="text-5xl">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
