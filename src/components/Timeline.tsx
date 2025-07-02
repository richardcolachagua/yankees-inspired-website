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
    title: "First World Series Win",
    summary:
      "Yankees win their first World Series at the original Yankee Stadium.",
    details:
      "The Yankees defeated the New York Giants in six games, marking the start of a dynasty.",
  },
  {
    year: 1941,
    title: "DiMaggio’s 56-Game Hit Streak",
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

  return (
    <div ref={timelineref} className="flex flex-col gap-8 py-8">
      {events.map((event, idx) => (
        <Dialog key={event.year}>
          <DialogTrigger asChild>
            <Card className="timeline-card cursor-pointer bg-yankees-white hover:bg-yankees-gray transition border-1-4 border-yankees-blue shadow-lg">
              <CardContent className="flex items-center gap-6 py-6">
                <span className="text-3x1 font-bold text-yankees-blue w-24">
                  {event.year}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              {event.title} ({event.year})
            </DialogTitle>
            <p>{event.details}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
