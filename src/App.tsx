import React from 'react';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { generateId } from './components/util';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: generateId(),
        title: "task1",
        done: false
      },
      {
        id: generateId(),
        title: "task2",
        done: false
      }
    ]
  };

  // delete a task
  deleteTask = (id: string) => {
    console.log(id);
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks
    });
  };

  //  add a new task
  addTask = (newTask: string) => {
    const id = generateId();
    const newData = {
      id: id,
      title: newTask,
      done: false
    };
    const tasks = [...this.state.tasks, newData];
    this.setState({
      tasks: tasks
    });
  };

  // update status(done)
  updateStatus = (id: string) => {
    const updatedTasks = this.state.tasks.filter(task => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task;
      // return task.id === id && this.setState({ ...task, !task.done})
    });
    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          updateStatus={this.updateStatus}
        />
      </div>
    );
  }
}

export default App;
