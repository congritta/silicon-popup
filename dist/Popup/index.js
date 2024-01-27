import React, { useEffect, useState } from "react";
import "./index.css";
const defaultAnimationDuration = 0;
export default function ModalWindow(props) {
    // State
    const [isScrollable, setIsScrollbable] = useState(props.isActive);
    // Handle outside click function
    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            props.onClose?.();
        }
    };
    // Watch for isScrollbable
    useEffect(() => {
        if (props.isActive) {
            setTimeout(() => {
                setIsScrollbable(true);
            }, props.animationDuration ?? defaultAnimationDuration);
        }
        else {
            setTimeout(() => setIsScrollbable(false), 0);
        }
    }, [props.isActive]);
    // Render
    return (React.createElement("div", { className: [
            'SiliconPopup',
            ...(isScrollable ? ["isScrollable"] : []),
            ...(props.isActive ? ["isShown"] : []),
            props.backgroundClassName,
        ].join(' '), style: {
            '--transition-duration': `${props.animationDuration ?? defaultAnimationDuration}ms`
        }, onClick: handleOutsideClick },
        React.createElement("div", { className: [
                'SiliconPopup__container',
                ...(props.containerClassName ? [props.containerClassName] : []),
                ...(props.isActive ? ['_isShown'] : [])
            ].join(' ') }, props.children)));
}
//# sourceMappingURL=index.js.map