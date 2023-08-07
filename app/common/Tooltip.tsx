"use client";
//Refs only work in client side code. Also this interactivity is better served at client.
import React, { useCallback } from 'react'
import { TooltipProps } from '../../types/ModuleTypes';

export const Tooltip: React.FC<TooltipProps> = (props) => {
    const { children, content, position = "left", className } = props;
    const toolTipRef = React.useRef<HTMLDivElement>(null);
    const parentRef = React.useRef<HTMLDivElement>(null);

    const handleOnMouseEnter = useCallback(({ clientX, clientY }: { clientX: number, clientY: number }) => {
        if (!toolTipRef.current || !parentRef.current) return;
        let left: number = 0, top: number = 0;
        if (isTruncatedWidth(parentRef.current)) {
            left = toolTipRef.current.offsetWidth
        }
        if (isTruncatedHeight(parentRef.current)) {
            top = toolTipRef.current.getBoundingClientRect().y < toolTipRef.current.offsetHeight ? toolTipRef.current.offsetHeight : -toolTipRef.current.offsetHeight;
        }
        toolTipRef.current.style.left = `${clientX - parentRef.current.getBoundingClientRect().left - left}px`;
    }, [])

    const isTruncatedWidth = (element: HTMLElement) => {
        return element.offsetWidth <= element.scrollWidth;
    }

    const isTruncatedHeight = (element: HTMLElement) => {
        return element.offsetHeight <= element.scrollHeight;
    }

    return (
        <div className='tooltip' ref={parentRef} onMouseEnter={handleOnMouseEnter}>
            {children}
            <div className="message rounded text-treat" ref={toolTipRef}><span> {content} </span></div>
        </div>)
}
export default Tooltip;
