import React from "react";
import Image from "next/image";
import { DrukWide } from "@/app/fonts";
import Button from "../UI/Button";
function Footer() {
  return (
    <>
      <div className="p-4 flex gap-4 justify-center mt-24 h-screen relative">
        <Image
          src={"/graphics/Footer-bg.svg"}
          alt=""
          fill
          className=" object-cover -z-10"
        />
        <>
          <div
            className="flex flex-col gap-6 items-center mx-auto my-24 uppercase text-center mb-24 top-0"
            style={DrukWide.style}
          >
            <p>Welcome to my world</p>
            <h1 className="text-7xl font-semibold">Get in touch 👋</h1>
            <Button href="" variant="yellow">
              Contact Me
            </Button>
          </div>
        </>
      </div>
    </>
  );
}

export default Footer;
