import { inter } from "@/fonts";
import classNames from "classnames";
import type { MouseEventHandler } from "react";
import css from "./button.module.scss";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(inter.className, css.button)}
    >
      {children}
    </button>
  );
}
