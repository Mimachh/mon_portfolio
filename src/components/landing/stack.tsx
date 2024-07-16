import React from "react";
import SectionLayout from "../layouts/section";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

type Props = {};

const Stack = (props: Props) => {
  const stacks = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <SectionLayout
      title="My Stack"
      titleClassNames="text-primary-foreground"
      classNames="bg-gradient-to-r dark:to-primaryVariant/80 to-primaryVariant/50 from-primaryVariant "
    >
      <div className="h-fit rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div>
          <h3>My frontend stack</h3>
          <InfiniteMovingCards
            liClassNames="md:w-[115px] "
            className="max-w-4xl"
            items={stacks}
            direction="right"
            speed="normal"
          />
        </div>


        <div>
          <h3>My backend stack</h3>
          <InfiniteMovingCards
            liClassNames="md:w-[115px] "
            className="max-w-4xl"
            items={stacks}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Stack;
