import React, { useEffect, useState } from "react";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { Spotlight } from "../../components/ui/Spotlight";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/todo/todoSlice";

function ViewTodo() {
  const todos = useSelector(selectTodos) || []; // Ensure todos is an array
  console.log(todos);
  const initialProjects = [
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

  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    setProjects((prevProjects) => [
      ...initialProjects,
      ...todos.map((todo) => ({
        title: todo.title,
        description: todo.description,
        link: "/edit-deltodo", // Assuming todos don't have a link, you can modify this accordingly
      })),
    ]);
  }, [todos]); // Only depend on todos, not projects

  return (
    <div className='max-w-5xl mx-auto px-8 min-h-screen'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill='white'
      />
      <HoverEffect items={projects} />
    </div>
  );
}

export default ViewTodo;
