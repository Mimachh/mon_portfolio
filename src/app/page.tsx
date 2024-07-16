"use client"
import Hero from "@/components/landing/hero";
import Stack from "@/components/landing/stack";
import Works from "@/components/landing/works";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Home() {
  return (
    <main className="space-y-36">
      <Hero />
      <Stack />
      <Works />

    </main>
  );
}
