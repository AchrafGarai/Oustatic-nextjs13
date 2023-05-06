import { getDocuments } from "outstatic/server";
import { Document } from "@/types";
export default async function Home() {
  const allPosts = getDocuments("projects", [
    "title",
    "publishedAt",
    "slug",
    "coverImage",
    "description",
  ]) as unknown as Document[];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{JSON.stringify(allPosts)}</div>
    </main>
  );
}

export const revalidate = "force-cache";
