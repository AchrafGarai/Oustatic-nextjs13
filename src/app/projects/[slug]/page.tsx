import { getDocumentBySlug, getDocuments } from "outstatic/server";
import React from "react";
import { Document } from "@/types";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const allPosts = (await getDocuments("projects", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
  ])) as unknown as Document[];

  return allPosts.map((post: Document) => ({
    slug: post.slug,
  }));
}

function Projectpage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getDocumentBySlug("projects", slug, [
    "title",
    "publishedAt",
    "description",
    "slug",
    "author",
    "content",
    "coverImage",
  ]) as unknown as Document[];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(project)}
    </div>
  );
}

export default Projectpage;

export const revalidate = "force-cache";
