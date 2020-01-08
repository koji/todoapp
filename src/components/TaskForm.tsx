import React from 'react';

type Props = {
  addTask: (task: string) => void;
}

export class TaskForm extends React.Component<Props> {
  state = {
    title: '',
  }
  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // console.log(this.state.title);
    this.props.addTask(this.state.title);
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value);
    this.setState({
      title: e.currentTarget.value
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='title' placeholder='add a new task' onChange={this.handleChange}/>
          <button  type='submit'>add</button>
        </form>
      </div>
    );
  }

}