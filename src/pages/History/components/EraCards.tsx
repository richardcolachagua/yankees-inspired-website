"use client";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

const eras = [
  {
    title: "The Ruth & Gehrig Era",
    image: "/images/ruth-gehrig.jpg",
    description:
      "The Yankees became baseball’s first dynasty, led by Babe Ruth and Lou Gehrig.",
  },
  {
    title: "Mantle & Maris",
    image: "/images/mantle-maris.jpg",
    description:
      "The 1950s and 60s saw more championships with stars like Mickey Mantle and Roger Maris.",
  },
  {
    title: "The Jeter Years",
    image: "/images/jeter.jpg",
    description:
      "Derek Jeter led the Yankees to five World Series titles from 1996-2009.",
  },
];

export default function EraCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.querySelectorAll(".era-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {eras.map((era) => (
        <Card
          key={era.title}
          className="era-card bg-yankees-white shadow-xl border-yankees-blue border-2"
        >
          <CardContent className="flex flex-col items-center p-6">
            <img
              src={era.image}
              alt={era.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h4 className="text-lg font-bold text-yankees-blue mb-2">
              {era.title}
            </h4>
            <p className="text-yankees-gray text-center">{era.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
