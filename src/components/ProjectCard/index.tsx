import { Project } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import cn from "clsx";
import s from "./ProjectCard.module.css";
import { CARD_COLORS } from "@/consts";
import { DrukWide } from "@/app/fonts";

function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const randomIndex = Math.floor(Math.random() * CARD_COLORS.length);
  const randomColor = CARD_COLORS[randomIndex];
  const dynamicStyles = {
    backgroundColor: randomColor.value,
  };

  return (
    <Link
      href={`projects/${project.slug}`}
      className={cn(s.root, className)}
      style={dynamicStyles}
    >
      <div className={cn(s.imageOuterWrapper)}>
        <div className={cn(s.imageInnerWrapper)}>
          <Image
            src={project.coverImage}
            fill
            alt={project.description}
            className="object-contain"
          />
        </div>
      </div>
      <div className={cn(s.cardInfo)}>
        <h2 className={cn(s.cardHeading)} style={DrukWide.style}>
          {project.title}
        </h2>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
