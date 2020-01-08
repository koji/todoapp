import React from 'react';
import styled from 'styled-components';
import { TaskFormat } from "./Type";

type Props = {
  task: TaskFormat;
  deleteTask: (id: string) => void;
  updateStatus: (id: string) => void;
};

const TaskWrapper = styled.li`
  margin: auto;
`;

const TaskText = styled.span`
  font-size: 30px;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
`;

const DoneButton = styled.button`
  background-color: #4caf50;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
`;

export class Task extends React.Component<Props> {
  render() {
    const {id, title, done} = this.props.task;
    return (
      <TaskWrapper>
        <TaskText style={{ color: !done ? "#000" : "#eee" }}>{id}</TaskText>
        <TaskText style={{ color: !done ? "#000" : "#eee" }}>{title}</TaskText>
        <DeleteButton onClick={() => this.props.deleteTask(id)}>x</DeleteButton>
        <DoneButton onClick={() => this.props.updateStatus(id)}>✔︎</DoneButton>
      </TaskWrapper>
    );
  }
};