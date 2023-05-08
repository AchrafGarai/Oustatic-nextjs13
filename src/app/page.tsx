import { getDocuments } from "outstatic/server";
import { Project } from "@/types";
import { Hero, ProjectCard } from "@/components";
import s from "./home.module.css";
import cn from "clsx";

export default async function Home() {
  const allPosts = getDocuments("projects", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
  ]) as unknown as Project[];

  return (
    <main className="p-8">
      <Hero projects={allPosts} />
      <div className={cn(s.root)}>
        {allPosts.map((project) => (
          <ProjectCard project={project} className={cn(s.gridItem)} />
        ))}
      </div>
    </main>
  );
}

export const revalidate = "force-cache";
