import React from 'react';

class TodoForm extends React.Component {
    // creates state with empty string which will be populated with a selected todo's body 
    state = {
        todo: '',
    };

    // sets up a listener that updates state with whatever is typed into the form input
    onChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    // this handles the event when the edit form is submitted
    onSubmit = (event) => {
        event.preventDefault(); // stops the default post request
        const todo = this.props.todo; // stores the selected todo as a variable
        todo.body = this.state.todo; // replaces the selected todo's body with whatever is written into the form input (which becomes state because of the onChange method)
        this.props.updateTodo(todo); // invokes the updateTodo method (originally from TodosContainer) to save the updated todo
        this.setState({todo: ''}); // resets state to empty string
        this.props.toggleBodyForm(); // toggles the form so it goes away
    };

    render () {
        return (
            <div style={this.props.style} className='todoForm'>
                <form onSubmit={this.onSubmit}>
                    <input 
                        autoFocus={this.props.autoFocus}
                        onChange={this.onChange}
                        placeholder={this.props.todo.body}
                        type="text"
                        value={this.state.todo}
                    />
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    };
};

export default TodoForm;