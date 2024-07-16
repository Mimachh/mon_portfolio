import React from "react";
import { useEffect, useRef } from "react";
import styles from "./rounded.module.scss";
import gsap from "gsap";
import Magnetic from "./magnetic";
import { cn } from "@/lib/utils";




const RoundedButton = ({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: {
  children: any;
  backgroundColor?: string;
  [key: string]: any;
}) => {
  const circle = useRef<HTMLDivElement | null>(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if(!timeline.current) return
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (!timeline.current) return;
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="rounded-full border bg-primary border-primary cursor-pointer relative flex items-center justify-center px-[15px] py-[60px]"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          // style={{ backgroundColor }}
          className={cn(styles.circle, 'bg-foreground')}
        ></div>
      </div>
    </Magnetic>
  );
}

export default RoundedButton;