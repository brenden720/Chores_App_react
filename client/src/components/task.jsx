import React from 'react';

const Task = props => {
  const {tasks, name} = props.user;
  const {idx, move, addTask} = props;

  return (
    <div className="user">
      <div className={`names names${idx}`}>{name}</div>
      <div>{tasks.map((task, index) => {
        return (
        <div key={index} className="task">
          <div className={idx === 0 ? "arrowHidden" : "arrow"} 
               onClick={() => { move(task, idx, 'left'); }}>
               &lt;
          </div>
          <div className="value">{task}</div>
          <div onClick={() => { move(task, idx, 'right'); }} 
               className={idx === 3 ? "arrowHidden" : "arrow"}>
               &gt;
          </div>
        </div>);
      })}
      </div>
      <div onClick={() => { addTask(name); }}>+ Add Note</div>
    </div>
  );
};

export default Task;