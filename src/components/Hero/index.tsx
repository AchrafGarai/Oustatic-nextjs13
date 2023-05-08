import React from "react";
import Slider from "../Slider";
import { Project } from "@/types";
import Image from "next/image";
import { DrukWide } from "@/app/fonts";
import s from "./Hero.module.css";
import cn from "clsx";

function Hero({ projects }: { projects: Project[] }) {
  return (
    <div className={cn(s.root)}>
      <div className={cn(s.container)}>
        <h1 className={cn(s.heading)} style={DrukWide.style}>
          Hey👋 i`m Achraf this is my W🌍RLD
        </h1>
        <p>
          This is a free portfolio template made with NextJS 13 and Outstatic
        </p>
      </div>
      <Slider projects={projects} />
    </div>
  );
}

export default Hero;
