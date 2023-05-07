import { getDocuments } from "outstatic/server";
import { Project } from "@/types";
import { Hero, ProjectCard } from "@/components";
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
      <Hero />
      <div className="grid grid-cols-2 gap-6">
        {allPosts.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </main>
  );
}

export const revalidate = "force-cache";
