import Link from "next/link";
import React from "react";
import Button from "@/components/UI/Button";
import Image from "next/image";
function Navbar() {
  return (
    <div className=" border-b border-white border-opacity-10 p-4 px-12 flex gap-4 items-center">
      <span className="flex flex-grow">
        <Link href="/" className="text-lg font-medium">
          <Image
            src="/graphics/Logo.svg"
            alt={"/graphics/Logo.svg"}
            width={71}
            height={34}
          />
        </Link>
      </span>
      <Button
        href="mailto:achrafgarai@hotmail.com?subject=Hello&body=Just wanted to say hi!"
        variant="yellow"
      >
        Get in touch
      </Button>
    </div>
  );
}

export default Navbar;
