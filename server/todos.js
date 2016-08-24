import express from 'express';

const router = express.Router();

const createTodo = (title) => ({
    id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
    title,
    completed: false,
});

// Todos Data
let todos = [
    createTodo('Learn ReactJS'),
    createTodo('Learn JavaScript'),
    createTodo('Learn Flux'),
];

/**
 * Todo Apis
 */
router.get('/', (req, res) => {
    res.send({ todos });
});

router.post('/', (req, res) => {
    const { title } = req.body;

    todos = [...todos, createTodo(title)];

    res.send({ todos });
});

router.put('/:todoId', (req, res) => {
    const { todoId } = req.params;
    const { title, completed } = req.body.todo; 

    todos = todos.map((todo) => {
        if (todo.id === todoId) {
            todo.title = title === undefined ? todo.title : title;
            todo.completed = completed === undefined ? todo.completed : completed;
        }
        return todo;
    });

    res.send({ todos });
});

router.delete('/:todoId', (req, res) => {
    const { todoId } = req.params;

    todos = todos.filter((todo) => todo.id !== todoId);

    res.send({ todos });
});

export default router;
