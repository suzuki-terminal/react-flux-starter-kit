import Dispatcher from '../dispatcher';
import TodoApis from '../apis/TodoApis';
import TodoConstants from '../constants/TodoConstants';

export default {

    getList() {
        TodoApis.list().then((res) => {
            Dispatcher.dispatch({
                type: TodoConstants.TODO_SET,
                todos: res.todos,
            });
        });
    },

    create(title) {
        TodoApis.create(title).then((res) => {
            Dispatcher.dispatch({
                type: TodoConstants.TODO_SET,
                todos: res.todos,
            });
        });
    },

};
