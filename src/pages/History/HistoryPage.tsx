"use client";
import Timeline from "./components/Timeline";
import EraCards from "./components/EraCards";

export default function HistoryPage() {
  return (
    <main className="bg-yankees-gray min-h-screen py-8">
      <section className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-yankees-blue mb-8 text-center">
          Yankees History
        </h1>
        <Timeline />
        <h2 className="text-3xl font-bold text-yankees-blue mt-16 mb-8 text-center">
          Yankees Eras
        </h2>
        <EraCards />
      </section>
    </main>
  );
}
