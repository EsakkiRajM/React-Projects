import React from 'react';

const TodoList = ({ filteredTodo, changeStatus }) => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='float-start align-items-col-center justify-content-col-center'>My Todos
            <div className='float-end   align-items-col-center justify-content-col-center'>
              <span className='m-2'> Status Filter: &nbsp;</span>
              <select name="" id="" className='form-select' onChange={changeStatus}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Render filtered todos */}
      {filteredTodo.map((todo) => (
        <div key={todo.id} className='card m-4' style={{ width: '18rem' }}>
          <div className='card-body'>
            <p>Name: {todo.name}</p>
            <p>Description: {todo.description}</p>
            <div>
              <div className='d-flex align-items-center'>
                Status:
                <select name='' id='' className='mx-2 form-select' >
                  <option value='Not Completed' selected={!todo.completed}>Not Completed</option>
                  <option value='Completed' selected={todo.completed}>Completed</option>
                </select>
              </div>
            </div>
            <div className='mt-4 d-flex justify-content-end'>
              <button className='btn btn-info' onClick={() => handleEditClick(todo)}>
                Edit
              </button>{' '}
              &nbsp;
              <button className='btn btn-danger' onClick={() => handleDeleteClick(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
