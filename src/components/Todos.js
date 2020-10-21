import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    // This takes the array of todos from the API and converts it into an array of todo objects (components)
    const todos = props.todos.map((todo) => {
        return (
            <Todo
            key = {todo._id}
            todo = {todo}
            // this passes the deleteTodo and updateTodo methods from the TodosContainer into each instance of Todo component, as props:
            deleteTodo={props.deleteTodo}
            updateTodo={props.updateTodo} />
        );
    });

    // this renders the list of todo objects
    return (
        <ul>
            {todos}
        </ul>
    );
};

export default Todos;