import React from "react";
import { Button } from "./components/ui/moving-border";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { HoverEffect } from "./components/ui/card-hover-effect";

function AppA() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='font-bold text-blue-700 text-2xl'>Chandan</h1>
      <Button
        borderRadius='1.75rem'
        className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
      >
        <span className='px-1'>Click me lorem knknbis innmbhvhff</span>
      </Button>
      <TypewriterEffectSmooth words={words} />
      {/* <div className='max-w-5xl mx-auto px-8'>
        <HoverEffect items={projects} />
      </div> */}
    </div>
  );
}

export default App;
