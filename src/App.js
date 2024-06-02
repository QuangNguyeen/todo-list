import React, { useState, useEffect } from 'react';
import TaskList from "./components/TaskList/TaskList";
import './App.css'
import AddForm from "./components/TaskFormAdd/AddForm";
import data from './data/data.json';
function App() {
    const taskList = data.taskList
    return (
        <div className="App">
            <h1 style={{fontWeight:"bold"}}>TASK LIST</h1>
            <AddForm></AddForm>
            <TaskList taskList={taskList}/>
        </div>
    );
}

export default App;
