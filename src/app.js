import React, { Component } from 'react';
import { render } from 'react-dom';

import TodoActions from './actions/TodoActions';
import TodoStore from './stores/TodoStore';
import TodoInput from './components/TodoInput';
import './app.css';

const getStore = () => ({
    todos: TodoStore.getAll(),
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = getStore();

        this.handleChangedStore = this.handleChangedStore.bind(this);        
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.handleChangedStore);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.handleChangedStore);
    }

    handleChangedStore() {
        this.setState(getStore());
    }

    render() {
        return (
            <div>
                <h1 className="title">Todo List</h1>

                <TodoInput />

                <ul>
                    {this.state.todos.map((todo) =>
                        <li key={todo.id}>{todo.title}</li>
                    )}
                </ul>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);