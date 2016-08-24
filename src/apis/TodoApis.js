import $ from 'jquery';

export default {

    /**
     * Get Todo List.
     * @return {Promise} todos
     */
    list() {
        return new Promise((resolve) => {
            $.ajax({
                type: 'GET',
                url: '/api/todos',
                success: (res) => {
                    resolve(res);
                },
            });
        });
    },

    /**
     * Create New Todo.
     * @params {String} title
     * @return {Promise} updated todos
     */
    create(title) {
        return new Promise((resolve) => {
            $.ajax({
                type: 'POST',
                url: '/api/todos',
                data: {
                    title,
                },
                success: (res) => {
                    resolve(res);
                },
            });
        });
    },

    /**
     * Update Todo.
     * @params {object} todo
     * @return {Promise} updated todos
     */
    update(todo) {
        return new Promise((resolve) => {
            $.ajax({
                type: 'PUT',
                url: `/api/todos/${todo.id}`,
                data: {
                    todo,
                },
                success: (res) => {
                    resolve(res);
                },
            });
        });
    },

    /**
     * Update Todo.
     * @params {object} todo
     * @return {Promise} updated todos
     */
    update(id) {
        return new Promise((resolve) => {
            $.ajax({
                type: 'DELETE',
                url: `/api/todos/${id}`,
                success: (res) => {
                    resolve(res);
                },
            });
        });
    },

}