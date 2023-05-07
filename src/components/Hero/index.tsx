import React from "react";
import Slider from "../Slider";
import { Project } from "@/types";
import Image from "next/image";

function Hero({ projects }: { projects: Project[] }) {
  return (
    <div className="mb-48">
      <div className="flex flex-col gap-4 items-center mx-auto my-24 uppercase text-center max-w-3xl  mb-24">
        <p>Welcome to my world</p>
        <h1 className="text-7xl font-semibold">
          Hey👋 i`m Achraf this is my W🌍RLD
        </h1>
      </div>
      <Slider projects={projects} />
    </div>
  );
}

export default Hero;
