import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from "../TaskItem/TaskItem";
import './styles.css'
TaskList.propTypes = {
    taskList : PropTypes.array
};
TaskList.defaultProps = {
    taskList: []
}
function TaskList({taskList}) {
    return (
        <div className="">
            <ul children="task-list">
                {taskList.map((task) => (
                    <TaskItem key = {task.taskId} taskContent={task.taskContent}
                              taskPriority={task.taskPriority} taskState={task.taskState}
                    ></TaskItem>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;