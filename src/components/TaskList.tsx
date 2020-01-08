import React from 'react';
import { Task } from './Task';
import { TaskFormat }  from './Type';
import styled from 'styled-components';

type Props = {
  tasks: TaskFormat[];
  deleteTask: (id: string) => void;
  updateStatus: (id: string) => void;
};

const TaksList = styled.ul`
  list-style-type: none;
`;

export class TaskList extends React.Component<Props> {
  render() {
    // console.log(this.props.tasks);
    const tasks = this.props.tasks.map(
      task =>
      <Task
        key={`task-${task.id}`}
        task={task}
        deleteTask={this.props.deleteTask}
        updateStatus={this.props.updateStatus}
       />
    );
    return(
      this.props.tasks.length > 0
        ? <TaksList>
       {tasks}
     </TaksList>
       : <h3>you do not have any tasks</h3>
    )
  }
}