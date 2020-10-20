import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    // This takes the array of todos from the API and converts it into an array of todo objects (components)
    const todos = props.todos.map((todo) => {
        return (
            <Todo
            key = {todo._id}
            todo = {todo}
            // this passes the deleteTodo method from the TodosContainer into each instance of Todo component, as a prop:
            deleteTodo={props.deleteTodo} />
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