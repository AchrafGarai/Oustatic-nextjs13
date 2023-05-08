import React from "react";
import Image from "next/image";
import { DrukWide } from "@/app/fonts";
import Button from "../UI/Button";
import s from "./Footer.module.css";
import cn from "clsx";

function Footer() {
  return (
    <>
      <div className={cn(s.root)}>
        <Image
          src={"/graphics/Footer-bg.svg"}
          alt=""
          fill
          className={cn(s.background)}
        />
        <>
          <div className={cn(s.footerDetails)}>
            <h1 className={cn(s.heading)} style={DrukWide.style}>
              Get in touch 👋
            </h1>
            <p style={DrukWide.style}>Would love to hear from you.</p>
            <Button
              href="mailto:achrafgarai@hotmail.com?subject=Hello&body=Just wanted to say hi!"
              variant="yellow"
            >
              Contact Me
            </Button>
          </div>
        </>
      </div>
    </>
  );
}

export default Footer;
