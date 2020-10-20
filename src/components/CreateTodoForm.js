import React from 'react';

class CreateTodoForm extends React.Component {
    // creates a base state of an empty string todo
    state = {
        todo: ''
    };

    // method that updates state with the current value of the input whenever it changes (does NOT submit input yet)
    onInputChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    // takes the form data (as saved in state) and runs the createTodo method passed in as a prop from the parent
    // then it resets state back to an empty string, ready for another todo to be made
    onFormSubmit = (event) => {
        event.preventDefault(); // this stops the submit from its default action: sending a request 
        let todo = this.state.todo;
        this.props.createTodo(todo); // this method is passed in as prop from the parent
        this.setState({
            todo: '',
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} id='taskForm'>
                    <input 
                    onChange={this.onInputChange} // whenever the input changes, it triggers our onInputChange method
                    type="text" 
                    id="newItemDescription"
                    placeholder="What do you need to do?"
                    value={this.state.todo} // the value will match state
                    />
                    <button type="submit" id='addTask' className="btn">Add ToDo</button>
                </form>
            </div>
        );
    };
};

export default CreateTodoForm;