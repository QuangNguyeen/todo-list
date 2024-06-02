import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

TaskItem.propTypes = {
    taskContent: PropTypes.string,
    taskPriority: PropTypes.string,
    taskId: PropTypes.number,
    taskState: PropTypes.string,
};

function TaskItem(props) {
    const getPriorityColor = (priority) => {
        if (priority === 'High') {
            return 'red';
        } else if (priority === 'Medium') {
            return 'orange';
        } else if (priority === 'Low') {
            return 'green';
        } else {
            return 'black';
        }
    };

    const priorityColor = getPriorityColor(props.taskPriority);

    return (
        <li key={props.taskId} className="bg-white">
            <table className="task-table">
                <tbody>
                <tr className="task-row-1">
                    <th className="task-title" id="column-1">Task</th>
                    <th className="task-title" id="column-2">Priority</th>
                    <td rowSpan="2">
                        <div className="task-state">{props.taskState}</div>
                    </td>
                    <td rowSpan="2" className="task-circle-process">Data 1</td>
                    <td rowSpan="2" id="column-6">
                        <FontAwesomeIcon icon={faPenToSquare} className="task-write" />
                    </td>
                    <td rowSpan="2" id="column-6">
                        <FontAwesomeIcon icon={faTrashCan} className="task-trash" />
                    </td>
                </tr>
                <tr className="task-row-2">
                    <td id="column-1">{props.taskContent}</td>
                    <td className="task-priority" id="column-2" style={{ color: priorityColor }}>
                        {props.taskPriority}
                    </td>
                </tr>
                </tbody>
            </table>
        </li>
    );
}

export default TaskItem;
