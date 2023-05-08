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
      <div className={cn(s.container)} style={DrukWide.style}>
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
