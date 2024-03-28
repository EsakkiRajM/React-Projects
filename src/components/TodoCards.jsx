import React, { useState } from 'react';
import { useEffect } from 'react';

const TodoCards = ({ todo, updateTodo, deleteClick, filterStatus, changeStatus, updateTodoStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });
  const [selectedStatus, setSelectedStatus] = useState(todo.completed ? 'Completed' : 'Not Completed');

  useEffect(() => {
    setSelectedStatus(todo.completed ? 'Completed' : 'Not Completed');
  }, [todo.completed]);

  //console.log(typeof changeStatus)
  //console.log(todo)

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };

  const handleUpdateClick = () => {
    updateTodo(editedTodo);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    //deleteClick(todo.id);
    deleteClick(todo.id);
  }

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setSelectedStatus(status);
    updateTodoStatus(todo.id, status === 'Completed');
  };

  

  return (
    <div>
    
        <div className='card m-4' style={{ width: '18rem' }}>
        <div className='card-body'>
          {isEditing ? (
            <div>
              <input
                type='text'
                name='name'
                value={editedTodo.name}
                onChange={handleInputChange}
                className='form-control mb-2'
              />
              <input
                type='text'
                name='description'
                value={editedTodo.description}
                onChange={handleInputChange}
                className='form-control mb-2'
              />
              <div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-success' onClick={handleUpdateClick}>
                Update Todo
              </button>
              </div>
            </div>
          ) : (
            <div>
              <p>Name: {todo.name}</p>
              <p>Description: {todo.description}</p>
              <div>
                <div className='d-flex align-items-center'>
                  Status:
                  <select name='' id='' className='mx-2 form-select'
                   value={selectedStatus}
                   onChange={handleStatusChange}
                  >
                    <option value="Not Completed"  >Not Completed</option>
                    <option value="Completed" >Completed</option>
                  </select>
                </div>
              </div>
              <div className='mt-4 d-flex justify-content-end'>
                <button className='btn btn-info' onClick={handleEditClick}>
                  Edit
                </button>{' '}
                &nbsp;
                <button className='btn btn-danger' onClick={ handleDeleteClick } >Delete</button>
              </div>
            </div>
          )}
        </div>
      </div>
   
       </div>
        );
};

export default TodoCards;
