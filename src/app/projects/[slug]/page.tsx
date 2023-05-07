import { getDocumentBySlug, getDocuments } from "outstatic/server";
import React from "react";
import { Project } from "@/types";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const allPosts = (await getDocuments("projects", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
  ])) as unknown as Project[];

  return allPosts.map((post: Project) => ({
    slug: post.slug,
  }));
}

async function Projectpage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getDocumentBySlug("projects", slug, [
    "title",
    "publishedAt",
    "description",
    "slug",
    "author",
    "content",
    "coverImage",
  ]) as unknown as Project;
  const content = await markdownToHtml(project.content || "");
  return (
    <div className="flex flex-col p-24 gap-8">
      {project.coverImage !== "" && (
        <div className="w-full relative h-screen">
          <Image
            src={project.coverImage}
            alt={project.description}
            fill
            className=" object-contain"
          />
        </div>
      )}
      <h1 className=" text-6xl font-bold">{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Projectpage;

export const revalidate = "force-cache";
