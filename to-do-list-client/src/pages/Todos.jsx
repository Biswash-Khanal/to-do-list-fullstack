import React, { useEffect, useState } from 'react';

import axios from '../api/axios';
import TodoCard from '../components/TodoCard';

const Todos = () => {
  
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("/todos/");
        if (response.data.success === true) {
          setUserTodos(response.data.todos);
        }
      } catch (error) {
        console.log(error.response?.data?.error || "Fetch failed");
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="mt-30 flex flex-col gap-10 items-center">
      {userTodos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (

        userTodos.map(todo => (
          <div key={todo._id}>
          <TodoCard key={todo._id} todo={todo}/>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
