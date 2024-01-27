import React, { ReactNode } from "react";
import "./index.css";
export default function ModalWindow(props: {
    isActive: boolean;
    children?: ReactNode;
    onClose?(): void;
    animationDuration?: number;
    backgroundClassName?: string;
    containerClassName?: string;
}): React.JSX.Element;
