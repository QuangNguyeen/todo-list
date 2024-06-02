import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddForm(props) {
    const [taskPriority, setTaskPriority] = useState('');
    const handleAdd = (event)=>{
        event.preventDefault();
    }
    const handleCheckboxChange = (value) => {
        setTaskPriority(value);
    };

    return (
        <div>
        <nav>
            <div className="info-item">
                <h5>Task</h5>
                <label>
                    <input type="text" placeholder="Type your task here..." />
                </label>
                <h5>Priority</h5>
                <div className="checkbox-group">
                    <label style={{color:'white', fontWeight:'bold', border:'1px solid red', borderRadius:'10px', backgroundColor:'indianred', }}>
                        <input
                            type="checkbox"
                            value="High"
                            checked={taskPriority === "High"}
                            onChange={() => handleCheckboxChange("High")}
                        /> <span>High</span>
                    </label>
                    <label style={{color:'white', fontWeight:'bold', border:'1px solid yellow', borderRadius:'10px',backgroundColor:'orange'}}>
                        <input
                            type="checkbox"
                            value="Medium"
                            checked={taskPriority === "Medium"}
                            onChange={() => handleCheckboxChange("Medium")}
                        /> <span>Medium</span>
                    </label>
                    <label style={{color:'white', fontWeight:'bold', border:'1px solid green', borderRadius:'10px', backgroundColor:'green'}}>
                        <input
                            type="checkbox"
                            value="Low"
                            checked={taskPriority === "Low"}
                            onChange={() => handleCheckboxChange("Low")}
                        /> <span>Low</span>
                    </label>
                </div>
            </div>
            <button
                style={{
                    marginLeft: '2rem',
                    marginTop: '2.5rem',
                    borderRadius: '15px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                }}
                onClick={handleAdd}
            >
                <FontAwesomeIcon icon={faPlus} style={{paddingLeft: '10px'}} />
                <span style={{marginLeft: '10px'}}>Add Task</span>
            </button>
        </nav>
        <select style={{marginLeft: '-32rem', width: '10rem', marginBottom:'2rem'}}>
            <option value="">Process</option>
            <option value="">To do</option>
            <option value="">Done</option>
        </select>
        </div>
    );
}

AddForm.propTypes = {};

export default AddForm;
