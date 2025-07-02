"use client";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    year: 1923,
    title: "Joe Dimaggio's 56-Game Hit Streak",
    summary: "Joe DiMaggio sets a record that still stands.",
    details:
      "DiMaggio’s streak captivated the nation and is considered one of baseball’s unbreakable records.",
  },
];

export default function Timeline() {
  const timelineref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (timelineref.current) {
      gsap.fromTo(
        timelineref.current.querySelectorAll(".timeline-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stragger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: timelineref.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return <div ref={timelineref} className="flex flex-col gap-8 py-8"></div>;
}
