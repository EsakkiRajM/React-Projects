import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoCards from './TodoCards'



const Input = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "Task-1",
      description: "Learn HTML",
      completed: false
    },
    {
      id: 2,
      name: "Task-2",
      description: "Learn CSS",
      completed: true
    },
    {
      id: 3,
      name: "Task-3",
      description: "Learn JS",
      completed: false
    }
  ]);
  const [filteredTodo, setFilteredTodo] = useState(todo);

  //console.log(filteredTodo);


  let formSubmit = ((event) => {
    event.preventDefault();
    //console.log(event.target[0].value);
    const newTodo = {
      id: todo.length + 1,
      name: event.target[0].value,
      description: event.target[1].value,
      completed: false,
    }
    setTodo([...todo, newTodo]);

    event.target[0].value = "";
    event.target[1].value = ""

  })

  //

  const updateTodo = (updatedTodo) => {
    const updatedTodoList = todo.map((item) =>
      item.id === updatedTodo.id ? updatedTodo : item
    );
    setTodo(updatedTodoList);
  };

  //

  const deleteClick = (id) => {
    setTodo(todo.filter((del) => del.id !== id));
  };

  // const filterStatus = (todoList) => {
  //   //setTodo(todoList);
  //   console.log(todoList);
  // }



  // const changeStatus = (event) => {

  //   const status = event.target.value;

  //   //console.log(event);

  //   if (status === "All") {
  //     setFilteredTodo(todo);
  //     //setTodo(filteredTodo);
  //     //console.log(status);
  //   } else {
  //     const filtered = todo.filter((todos) =>
  //       status === 'Completed' ? todos.completed : !todos.completed

  //     );
  //     //console.log(status);
  //     setFilteredTodo(filtered);
  //     //setTodo(filteredTodo);
  //     //console.log(filtered);
  //   }

  //   //setTodo(filteredTodo);
  //   console.log(filteredTodo);

  // }

  // //filterStatus(filteredTodo);

  // //filterStatus(todo);

  //
  const changeStatus = (event) => {
    const status = event.target.value;

    if (status === "All") {
      setFilteredTodo(todo);
    } else {
      const filtered = todo.filter((todos) =>
        status === 'Completed' ? todos.completed : !todos.completed
      );
      setFilteredTodo(filtered);
    }
  };

  //


  return (
    <div>
      <form action="" onSubmit={formSubmit} className=''>
        <div className='container mt-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4 col-12 mb-3'>
              <input type="text"
                className='border-success w-100 form-control'
                placeholder='Todo Name'
              />
            </div>
            <div className='col-md-6 col-12 mb-3'>
              <input type="text"
                className='border-success w-100 form-control'
                placeholder='Todo Description'
              />
            </div>
            <div className='col-md-2 col-12 mb-3 text-center'>
              <button
                className='btn btn-success btn-md float-md-end'
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </form>
      <TodoList todo={todo}
        changeStatus={changeStatus}
        filteredTodo = { filteredTodo }
      />
      <div className='container'>
        <div className='d-flex justify-content-col-center'>
          <div className='row row-cols-1 row-cols-md-2  row-cols-lg-3 row-cols-xxl-4'>
            {todo.map((todo) => (
              <TodoCards key={todo.id} todo={todo}
                updateTodo={updateTodo} deleteClick={deleteClick}
                changeStatus={changeStatus}
                filteredTodo = { filteredTodo }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input;

