import _ from 'lodash';
import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

let _todos = [];

const set = ({ todos }) => {
    _todos = todos;
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
        case TodoConstants.TODO_SET:
            set(action);
            TodoStore.emitChange();
            break;

        default:
            return;
    }
});

export default TodoStore;
