import { getDocuments } from "outstatic/server";
import { Project } from "@/types";
import { ProjectCard } from "@/components";
export default async function Home() {
  const allPosts = getDocuments("projects", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
  ]) as unknown as Project[];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <>
        {allPosts.map((project) => (
          <ProjectCard project={project} />
        ))}
      </>
    </main>
  );
}

export const revalidate = "force-cache";
