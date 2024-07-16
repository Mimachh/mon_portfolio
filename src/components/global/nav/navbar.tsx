"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./magnetic";
import RoundedButton from "./rounded-button";
import Nav from "./content/nav";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../toggle-theme";

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Stack",
    href: "#stack",
  },
  {
    title: "Works",
    href: "#works",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  // https://www.youtube.com/watch?v=NOJCt7qyh9c
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        // @ts-ignore
        onEnterBack: () => {
          gsap.to(
            button.current,
            // @ts-ignore
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Mimach</p>
            <p className={styles.snellenberg}>Karl Muller</p>
          </div>
        </div>
        <div className={styles.nav}>
          {navItems.map((data, index) => {
            return (
              <Magnetic key={index}>
                <div className={styles.el}>
                  <a href={data.href}>{data.title}</a>
                  <Indicator />
                </div>
              </Magnetic>
            );
          })}
          <ModeToggle />
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <RoundedButton
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={cn(styles.button, "bg-primaryVariant  dark:bg-primary")}
        >
          <div
            className={cn(
              styles.burger,
              isActive ? styles.burgerActive : "",
              "before:bg-background after:bg-background"
            )}
          ></div>
        </RoundedButton>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav navItems={navItems} />}
      </AnimatePresence>
    </>
  );
};
export default Navbar;

const Indicator = () => {
  return <div className={cn(styles.indicator, "bg-primary")}></div>;
};
