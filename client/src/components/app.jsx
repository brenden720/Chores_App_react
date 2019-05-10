import React from 'react';
import Task from './task';

const storage = [
  {
    name: 'Brenden',
    tasks: ['Study', 'Sleep'],
  },
  {
    name: 'Tony',
    tasks: ['Study', 'Work'],
  },
  {
    name: 'Warren',
    tasks: ['Work', 'Clean'],
  },
  {
    name: 'Jen',
    tasks: ['Sleep', 'Work'],
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.addTask = this.addTask.bind(this);
    this.move = this.move.bind(this);
  }

  componentDidMount() {
    this.setState({
      ['users']: storage,
    });
  }

  addTask(name) {
    const task = prompt('New task: ');
    if (!task) return;
    storage.map(content => {
      if (content.name === name) {
        return ({
          name,
          tasks: content.tasks.push(task),
        });
      }
    });
    this.setState({
      ['users']: storage,
    });
  }

  move(task, currentidx, direction) {
    if (direction === 'left') {
      const newTasks = storage[currentidx].tasks.filter(currentTask => {
        return task !== currentTask;
      });
      storage[currentidx].tasks = newTasks;
      storage[currentidx - 1].tasks.push(task);
    }
    if (direction === 'right') {
      const newTasks = storage[currentidx].tasks.filter(currentTask => {
        return task !== currentTask;
      });
      storage[currentidx].tasks = newTasks;
      storage[currentidx + 1].tasks.push(task);
    }
    this.setState({
      ['users']: storage,
    });
  }

  render() {
    const {users} = this.state;
    return (
      <div className="container">
        {users.map((user, idx) => {
          return <Task key={idx} user={user} addTask={this.addTask} idx={idx} move={this.move}/>;
        })}
      </div>
    );
  }
}

export default App;
