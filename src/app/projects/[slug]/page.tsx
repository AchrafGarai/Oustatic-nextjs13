import { getDocumentBySlug, getDocuments } from "outstatic/server";
import React from "react";
import { Project } from "@/types";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import { Button } from "@/components";
import { DrukWide } from "@/app/fonts";
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
    <div className=" flex flex-col gap-8 mt-20 mx-auto max-w-3xl">
      <div className="flex">
        <Button href="/" variant="ghost">
          <Image
            src="/icons/Back.svg"
            alt={project.description}
            width={24}
            height={24}
          />
          Back
        </Button>
      </div>
      <h1 className="text-6xl font-bold" style={DrukWide.style}>
        {project.title}
      </h1>
      <p>{project.description}</p>
      {project.coverImage !== "" && (
        <div className="w-full">
          <Image
            src={project.coverImage}
            alt={project.description}
            width={1200}
            height={1200}
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default Projectpage;

export const revalidate = "force-cache";
