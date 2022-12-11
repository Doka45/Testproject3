import './App.css';
import Head from './Components/Head/Head';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { PLUS } from "./image";
import { v4 as uuidv4 } from "uuid";


function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const handleTriggerModal = () => {
    setModalOpen((prevModal) => !prevModal);
  };
 
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      title: "Write Essay",
      type: "all",
      status: true
    },
    {
      id: uuidv4(),
      title: "One Hour CSS Course Online",
      type: "all",
      status: true
    },
    {
      id: uuidv4(),
      title: "Buy One Way Tickets to San Fransico",
      type: "all",
      status: false
    },
    {
      id: uuidv4(),
      title: "Go to Gym",
      type: "all",
      status: true
    },
    {
      id: uuidv4(),
      title: "Buy Groceries",
      type: "all",
      status: true
    },
  ])

  return (
    
    <Container>


      <button className="blackPlus"
        onClick={handleTriggerModal}> <img src={PLUS} /> </button>
      <Head />
      {isModalOpen && <AddTodo handleCloseModal={handleCloseModal} todo={todo} setTodo={setTodo} />}
      <TodoList todo={todo} setTodo={setTodo} />

    </Container>
  );
}

export default App;
