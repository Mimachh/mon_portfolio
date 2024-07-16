import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  classNames?: string;
  titleClassNames?: string;
};

const SectionLayout = (props: Props) => {
  const { children, title, classNames, titleClassNames } = props;
  return (
    <section className={cn(classNames, "pt-24")}>
      <h2
        className={cn(
          "text-center text-6xl tracking-tight font-anton",
          titleClassNames
        )}
      >
        {title}
      </h2>
      <div className="py-32">{children}</div>
    </section>
  );
};

export default SectionLayout;
