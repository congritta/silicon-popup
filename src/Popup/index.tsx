import React, {ReactNode, useEffect, useState} from "react";

import "./index.css";

const defaultAnimationDuration = 0;

export default function ModalWindow(props: {
  isActive: boolean,
  children?: ReactNode,
  onClose?(): void,

  animationDuration?: number,

  backgroundClassName?: string,
  containerClassName?: string,
}) {

  // State
  const [isScrollable, setIsScrollbable] = useState(props.isActive);

  // Handle outside click function
  const handleOutsideClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if(event.target === event.currentTarget) {
      props.onClose?.();
    }
  };

  // Watch for isScrollbable
  useEffect(() => {
    if(props.isActive) {
      setTimeout(() => {
        setIsScrollbable(true);
      }, props.animationDuration ?? defaultAnimationDuration);
    } else {
      setTimeout(() => setIsScrollbable(false), 0);
    }
  }, [props.isActive]);

  // Render
  return (
    <div
      className={[
        "SiliconPopup",
        ...(isScrollable ? ["isScrollable"] : []),
        ...(props.isActive ? ["isShown"] : []),
        props.backgroundClassName,
      ].join(" ")}
      style={{
        "--transition-duration": `${props.animationDuration ?? defaultAnimationDuration}ms`
      } as never}
      onClick={handleOutsideClick}
    >
      <div
        className={[
          "SiliconPopup__container",
          ...(props.containerClassName ? [props.containerClassName] : []),
          ...(props.isActive ? ["_isShown"] : [])
        ].join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
}
