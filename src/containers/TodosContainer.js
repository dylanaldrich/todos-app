import React from 'react';
import TodoModel from '../models/TodoModel';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends React.Component {
    state = {
        todos: [],
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        // this retrieves all the todos from the axios API
        TodoModel.all().then((res) => {
            // this changes state to add in the array of todos pulled from the API
            this.setState({
                todos: res.data.todos,
            });
        });
    };

    // this method handles the creation of a new todo; it gets passed a prop in the instance of the CreateTodoForm rendered below
    createTodo = (todo) => {
        // this creates a new todo object with two properties: body and completed
        const newTodo = {
            body: todo, // this is filled with the form input data
            completed: false,
        };

        // this tells the ToDo model to create a new ToDo in the database, based on the model
        TodoModel.create(newTodo)
        .then((res) => { // this handles the response from the API after the new todo has been added
            const todos = this.state.todos; // this grabs the current state (array of todos)
            todos.push(res.data); // this pushes the new todo from the API into our todos array
            this.setState({ todos: todos }); // finally updates state to include the most recent addition
        });
    };
    
    render() {
        // this will pass the array of todos, as a prop, to the Todos component
        // also renders a createTodoForm with the method createTodo passed as prop
        return (
            <div className="todosContainer">
                <CreateTodoForm createTodo={this.createTodo} /> 
                <Todos todos={this.state.todos} />
            </div>
        );
    };
};


export default TodosContainer;