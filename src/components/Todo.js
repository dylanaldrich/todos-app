import React from 'react';
import TodoForm from './TodoForm';

class Todo extends React.Component {
    state = {
        formStyle: {
            display: 'none',
        },
    };

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none'} })
        : this.setState({ formStyle: {display: 'block'} });
    };
    
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
                    className="edit" 
                    onClick={this.toggleBodyForm}>
                    Edit
                </span>
                <span 
                    className="remove" 
                    onClick={this.deleteClickedTodo}>
                    Remove
                </span>
                <TodoForm
                    todo={this.props.todo}
                    style={this.state.formStyle}
                    autoFocus={true}
                    updateTodo={this.props.updateTodo}
                    toggleBodyForm={this.toggleBodyForm} />
            </li>
        );
    };
};

export default Todo;