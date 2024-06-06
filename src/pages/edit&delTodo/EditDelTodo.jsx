import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, deleteTodo } from "../../redux/todo/todoSlice";
import { Modal, Table } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button } from "../../components/ui/moving-border";

function EditDelTodo() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='table-auto overflow-x-scroll max-w-4xl md:mx-auto p-3 min-h-screen scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      <Table hoverable className='shadow-md'>
        <Table.Head>
          <Table.HeadCell>Todo Id</Table.HeadCell>
          <Table.HeadCell>Date created</Table.HeadCell>
          <Table.HeadCell>Titel</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
        </Table.Head>
        {todos.map((todo) => (
          <Table.Body className='divide-y' key={todo.id}>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell>{todo.id}</Table.Cell>
              <Table.Cell>{todo.date}</Table.Cell>
              <Table.Cell>{todo.title}</Table.Cell>
              <Table.Cell>{todo.description}</Table.Cell>
              <Table.Cell>
                <Button
                  borderRadius='1.75rem'
                  className='bg-red-600 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full'
                  onClick={() => {
                    setShowModal(true);
                    setTodoId(todo.id);
                  }}
                >
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  borderRadius='1.75rem'
                  className='bg-red-600 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full'
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-red-600 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this todo?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                borderRadius='1.75rem'
                className='bg-blue-700 dark:bg-blue-500 text-white border-neutral-200 dark:border-slate-800 w-full'
                onClick={() => {
                  handleDelete(todoId);
                  setShowModal(false);
                  setTodoId(null);
                }}
              >
                Yes, I'm sure
              </Button>
              <Button
                borderRadius='1.75rem'
                className='bg-red-600 dark:bg-red-800 text-white border-neutral-200 dark:border-slate-800 w-full'
                onClick={() => {
                  setShowModal(false);
                  setTodoId(null);
                }}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditDelTodo;
