import React from 'react';

class Todo extends React.Component {
    // adds a method to handle deleting a todo when 'Remove' is clicked
    deleteClickedTodo = () => {
        // this invokes the deleteTodo method passed as props from TodosContainer to Todos component and finally to this component
        this.props.deleteTodo(this.props.todo);
    };
    
    render() {
        return (
            <li data-todos-index={this.props.todo._id}>
                <span className="todo-item">{this.props.todo.body}</span>
                <span 
                    className="remove" 
                    onClick={this.deleteClickedTodo}>
                        Remove
                </span>
            </li>
        );
    };
};

export default Todo;