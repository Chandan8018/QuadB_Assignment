import React, { useEffect, useState } from "react";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { Spotlight } from "../../components/ui/Spotlight";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todo/todoSlice";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { viewWord } from "../../data/data";

function ViewTodo() {
  const todos = useSelector(selectTodos) || [];
  const { theme } = useSelector((state) => state.theme);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects((prevProjects) => [
      ...todos.map((todo) => ({
        date: "Date: " + todo.date,
        title: "Title: " + todo.title,
        description: `Desc: ${todo.description}`,
        todoStatus: "Status: " + todo.todoStatus,
        link: "/edit-deltodo", // Assuming todos don't have a link, you can modify this accordingly
      })),
    ]);
  }, [todos]); // Only depend on todos, not projects

  return (
    <div className='max-w-4xl mx-auto px-8 min-h-screen'>
      <div className='flex justify-center'>
        <TypewriterEffectSmooth words={viewWord} />
      </div>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill={theme === "dark" ? "white" : "#13C6F7"}
      />
      <HoverEffect items={projects} />
    </div>
  );
}

export default ViewTodo;
