import React from "react";
import Image from "next/image";
function HeroGraphics() {
  return (
    <>
      <Image
        src={"/graphics/Planet.svg"}
        alt="Planet"
        width={1200}
        height={1200}
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-180 -z-10 planet"
      />

      <Image
        src={"/graphics/Planet.svg"}
        alt="Planet"
        width={480}
        height={480}
        className="absolute top-[480px] right-0 transform translate-x-1/2 -translate-y-1/2 rotate-20 -z-10 planetR "
      />

      <div className="  mix-blend-lighten absolute top-0 left-0 right-0 w-full h-[900px] -z-20">
        <Image
          src={"/graphics/Hero-galaxy.webp"}
          alt="Planet"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}

export default HeroGraphics;
