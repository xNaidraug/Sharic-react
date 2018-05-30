import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';
import Navigator from './components/Navigator';
import Editar from "./components/Editar";
import Listas from './components/Listas';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    removeTodo(index) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        });
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-title text-center">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
                        </div>
                        <div className="card-body">
                            <iframe title={todo.title} width="180" height="227" src={todo.description} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={this.removeTodo.bind(this, i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        // RETURN THE COMPONENT
        return (
            <div className="App">

                <Navigator/>
                <Editar/>
                <div className="container">
                    <div className="row mt-4">

                        <div className="col-md-4 text-center">
                            <img src={logo} className="App-logo" alt="logo" />
                            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                        <Listas/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
