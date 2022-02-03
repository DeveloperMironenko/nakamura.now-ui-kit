import { MouseEventHandler, ReactNode } from "react";
import { SizeType, ViewType } from "../../../shared";
import { WidthType } from "../../../shared/types/WidthType";
import { JustifyContent } from "../../../shared/types/JustifyType";

export type ButtonProps = {
  className?: string;
  type?: "button" | "submit";
  width?: WidthType;
  size?: SizeType;
  view?: ViewType;
  justify?: JustifyContent;
  outlined?: boolean;
  // loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
