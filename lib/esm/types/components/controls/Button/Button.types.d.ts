import { MouseEventHandler, ReactNode } from "react";
import { SizeType, TextTransformType, ViewType } from "../../../shared";
import { WidthType } from "../../../shared/types/WidthType";
import { JustifyContent } from "../../../shared/types/JustifyType";
export declare type ButtonProps = {
    className?: string;
    type?: "button" | "submit";
    width?: WidthType;
    size?: SizeType;
    textTransform?: TextTransformType;
    view?: ViewType;
    justify?: JustifyContent;
    outlined?: boolean;
    disabled?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
