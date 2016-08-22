import Dispatcher from '../dispatcher';
import TodoConstants from '../constants/TodoConstants';

export default {

    /**
     * @param {string} title
     */
    create(title) {
        Dispatcher.dispatch({
            type: TodoConstants.TODO_CREATE,
            title, 
        });
    },

};
