import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import TeamHero from "../components/TeamHero";
import Footer from "../components/Footer";
import "../app/globals.css";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll(".team-section");
    if (sections) {
      gsap.utils.toArray(sections).forEach((section: any, i: number) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            duration: 0.8,
            delay: i * 0.1,
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <main ref={containerRef} className="pt-24 space-y-24">
        <div className="team-section">
          <TeamHero
            image="/images/yankees.jpg"
            title="The New York Yankees"
            description="The most storied franchise in baseball history. Discover their legacy, championships, and legendary players."
            buttonText="More About the Yankees"
            buttonLink="/history"
          />
        </div>
        <div className="team-section">
          <TeamHero
            image="/images/renegades.jpg"
            title="Hudson Valley Renegades"
            description="High-A affiliate, developing the next generation of Yankees stars."
            buttonText="More About the Renegades"
            buttonLink="/affiliate/hudson-valley"
          />
        </div>
        <div className="team-section">
          <TeamHero
            image="/images/patriots.jpg"
            title="Somerset Patriots"
            description="Double-A affiliate, a crucial step in the Yankees pipeline."
            buttonText="More About the Patriots"
            buttonLink="/affiliate/somerset"
          />
        </div>
        <div className="team-section">
          <TeamHero
            image="/images/railriders.jpg"
            title="Scranton/Wilkes-Barre RailRiders"
            description="Triple-A affiliate, the final stop before the Bronx."
            buttonText="More About the RailRiders"
            buttonLink="/affiliate/railriders"
          />
        </div>
      </main>
      <Footer />{" "}
    </div>
  );
}
