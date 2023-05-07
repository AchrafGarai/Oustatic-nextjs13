import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" border-b border-zinc-800 p-4 flex gap-4">
      <span className="flex flex-grow">
        <Link href="/">Achraf Garai</Link>
      </span>
      <button>Contact me</button>
    </div>
  );
}

export default Navbar;
