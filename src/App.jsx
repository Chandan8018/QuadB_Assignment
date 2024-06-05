import React from "react";
import { Button } from "./components/ui/moving-border";

function App() {
  return (
    <div className='flex justify-center items-center mt-10'>
      <h1 className='font-bold text-blue-700 text-2xl'>Chandan</h1>
      <Button
        borderRadius='1.75rem'
        className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
      >
        <span className='px-1'>Click me lorem knknbis innmbhvhff</span>
      </Button>
    </div>
  );
}

export default App;
