import Link from "next/link";
import React from "react";
import Button from "@/components/UI/Button";

function Navbar() {
  return (
    <div className=" border-b border-white border-opacity-10 p-4 px-12 flex gap-4 items-center">
      <span className="flex flex-grow">
        <Link href="/" className="text-lg font-medium">
          Achraf Garai
        </Link>
      </span>
      <Button href="/" variant="yellow">
        Get in touch
      </Button>
    </div>
  );
}

export default Navbar;
