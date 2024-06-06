import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "../../utils/cn";
import { words } from "../../data/data";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { Button } from "../../components/ui/moving-border";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../redux/todo/todoSlice";
import { Spotlight } from "../../components/ui/Spotlight";

function CreateTodo() {
  const [formData, setFormData] = useState({});
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(formData));
    navigate("/viewTodo");
    console.log(formData);
    setFormData({});
  };
  return (
    <div className='max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#1F2937] my-10'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill={theme === "dark" ? "white" : "#13C6F7"}
      />
      <div className='flex justify-center'>
        <TypewriterEffectSmooth words={words} />
      </div>

      <p className='text-neutral-600 text-md max-w-sm mt-2 dark:text-neutral-300'>
        Make a to-do list with built-in
        <br />
        tracking
      </p>

      <form className='my-8' onSubmit={handleSubmit}>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='title'>Todo Titel</Label>
          <Input
            id='title'
            placeholder='Title'
            type='text'
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
        </LabelInputContainer>

        <LabelInputContainer className='mb-4'>
          <Label htmlFor='description'>Todo Description</Label>
          <Input
            id='description'
            placeholder='What do you want to do?'
            type='text'
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
        </LabelInputContainer>

        <LabelInputContainer className='mb-8'>
          <Label htmlFor='date'>Date</Label>
          <Input
            id='date'
            placeholder='Date'
            type='date'
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            value={formData.date}
          />
        </LabelInputContainer>

        <Button
          borderRadius='1.75rem'
          className='bg-gray-400 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full text-md font-semibold'
          type='submit'
        >
          Create &rarr;
          <BottomGradient />
        </Button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default CreateTodo;
