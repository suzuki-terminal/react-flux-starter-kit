import _ from 'lodash';
import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

let _todos = [];

const create = ({ title }) => {
    const newTodo = {
        id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
        title,
        completed: false,
    };

    _todos = [..._todos, newTodo];
};


const TodoStore = _.assignIn({}, EventEmitter.prototype, {

    getAll() {
        return _todos;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

});

Dispatcher.register((action) => {
    switch (action.type) {
        case TodoConstants.TODO_CREATE:
            create(action);
            TodoStore.emitChange();
            break;

        default:
            return;
    }
});

export default TodoStore;
