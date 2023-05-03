import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
    state = {
        todos: [{isDone: false, text: "Tasks"}, {isDone: false, text: "Task Two"}],
        todoText: ''
    };
    handleOnChange = e =>{
        this.setState({
            todoText: e.target.value
        });
    }
    handelSubmit = e => {
        if (Boolean(this.state.todoText)=== false) return false;
        this.setState( state=> {
            let newTodos = state.todos.concat({
                isDone: false,
                text: state.todoText
            });
            return{
                todos: newTodos,
                todoText: ""
            }
        })
        e.preventDefault();
    }
    manageTodo = itemIndex => {
        this.setState(state => {
            let newTodos = state. todos.map((todo, index) => {
                if (index === itemIndex) {
                    return { isDone: !todo.isDone, text: todo.text}
                }
                return todo
            })
            return{
                todos: newTodos
            }
        })
    }
    render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <form onSubmit = {handelSubmit}>
                    <InputField
                    value= {this.state.todoText}
                    handleOnChange={this.handleOnChange}
                     />
                     <Button>Add</Button>
                    </form>
                    <TracProgress todos={this.state.todos}/>
                    <DisplayList todos={this.state.todos} manage={this.manageTodo}/>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}
const Title = ({children}) => <h2>{children}</h2>
const Button = ({children}) => (
    <button type = "submit" value = "submit"> 
    {children}
    </button>
)
const InputField = ({value, handleOnChange}) => {
    return <input type="text" value={value} onChange={handleOnChange} />
}
const TrackProgress = ({ todos}) => {
    const isNotDone = todos.filter(todo => todo.isDone !== true)
    return(
        <p className = "task-counter">
        {isNotDone.length} remaining out of {todos.length} Tasks
        </p>
    )
}
const DisplayList = ({todos, manage }) =>{
    return(
        <ul>
        {todos.map((element, index)=> (
            <li
            key={index}
            onClick={() => manage(index)}
            className={element.isDone? 'is-done': "is-not-done"}
            >
            {element.text}
            </li>
        ))}
        </ul>
    )
}
const rootElement = document.getElementById("root")
ReactDom.render(<TodoList />, rootElement)