import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/moving-border";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { homeWord } from "../../data/data";
import { Spotlight } from "../../components/ui/Spotlight";

function Home() {
  return (
    <div className='max-w-3xl w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-[#1F2937] my-10 rounded-lg'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill='white'
      />
      <div className='flex justify-center mb-8'>
        <TypewriterEffectSmooth words={homeWord} />
      </div>

      <h1 className='text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white'>
        Todo App
      </h1>
      <p className='text-neutral-600 text-md max-w-sm mx-auto text-center dark:text-neutral-300 mb-8'>
        Manage your tasks efficiently with our easy-to-use todo app. Create,
        update, and view your todos effortlessly.
      </p>

      <div className='flex justify-center gap-12 items-center'>
        <Link to='/createTodo'>
          <Button
            borderRadius='1.75rem'
            className='bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full p-4 text-lg font-semibold'
          >
            Create Todo &rarr;
          </Button>
        </Link>
        <Link to='/edit-deltodo'>
          <Button
            borderRadius='1.75rem'
            className='bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full p-4 text-lg font-semibold'
          >
            View Todos &rarr;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
