import './App.css';
import {connect} from "react-redux";
import {useState} from "react";
import Header from "./Header";
import Task from "./Task";

function App(props) {
  console.log(props.tasks);
  const [taskName, setTaskName] = useState('');

  const create = () => {
      const newTask = {
          id: 2,
          name: taskName,
          status: 'progress',
          priority: '2'

      }
      props.createTask(newTask)
      setTaskName('');
  }

  return (
    <div className="App">
        <Header />

        <div className="input-group new-task mx-auto">
            <input type="text" className="form-control" value={taskName} placeholder={'Write new task here'} aria-label="New Task" onChange={e => setTaskName(e.target.value)}/>
            <button className="btn btn-success rounded-2" type="button" onClick={create}>Save</button>
        </div>

      <ol className="todo-list list-group list-group-numbered text-start">
        {props.tasks.map(el => <Task key={el.id} name={el.name}/>)}
      </ol>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
    createTask: (newTask) => dispatch({type: "CREATE", payload: newTask})
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
