import React, { ButtonHTMLAttributes, forwardRef } from "react";
import s from "./Button.module.css";
import cn from "clsx";
import Link from "next/link";
import { DrukWide } from "@/app/fonts";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  className?: string;
  variant?: "yellow" | "ghost";
}

// eslint-disable-next-line react/display-name
const Button: React.FC<ButtonProps> = forwardRef((props) => {
  const { href, className, variant = "flat", children, style = {} } = props;

  const rootClassName = cn(
    s.root,
    {
      [s.yellow]: variant === "yellow",
      [s.ghost]: variant === "ghost",
    },
    className
  );

  return (
    <Link
      href={href}
      className={rootClassName}
      style={{
        ...style,
      }}
    >
      {children}
    </Link>
  );
});

export default Button;
