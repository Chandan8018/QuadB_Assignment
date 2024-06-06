import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, selectTodos } from "../../redux/todo/todoSlice";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/moving-border";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { updateWord } from "../../data/data";
import { Spotlight } from "../../components/ui/Spotlight";

function UpdateTodo() {
  const { id } = useParams(); // Get the todo id from the URL
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Find the todo with the given id from the Redux store
    const todoToUpdate = todos.find((todo) => todo.id === id);
    // Populate the formData state with the todo data
    setFormData(todoToUpdate);
  }, [id, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(formData));
    navigate("/edit-deltodo");
  };

  return (
    <div className='max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#1F2937] my-10'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill='white'
      />
      <div className='flex justify-center'>
        <TypewriterEffectSmooth words={updateWord} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <Input
            type='text'
            name='title'
            placeholder='Title'
            value={formData.title || ""}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className='mb-4'>
          <Input
            type='text'
            name='description'
            placeholder='Description'
            value={formData.description || ""}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className='mb-4'>
          <Input
            type='date'
            name='date'
            placeholder='Date'
            value={formData.date || ""}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <div className='mb-8'>
          <Input
            type='text'
            name='status'
            placeholder='status'
            value={formData.todoStatus || ""}
            onChange={(e) =>
              setFormData({ ...formData, todoStatus: e.target.value })
            }
          />
        </div>
        <Button
          borderRadius='1.75rem'
          className='bg-gray-400 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
          type='submit'
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default UpdateTodo;
