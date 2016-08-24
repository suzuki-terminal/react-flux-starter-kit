import React, { Component, PropTypes } from 'react';

import TodoActions from '../actions/TodoActions';

class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeValue(e) {
        this.setState({
            title: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { title } = this.state;

        if (!title) {
            alert('タイトルを入力してください');
        }

        TodoActions.create(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">Todoを追加</label>
                <br />
                <input
                    id="todo"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChangeValue}
                    placeholder="タイトルを入力"
                />
            </form>
        );
    }
}

export default TodoInput;
