import React from 'react';
import TodoModel from '../models/TodoModel';
import Todos from '../components/Todos';

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
    
    render() {
        // this will pass the array of todos, as a prop, to the Todos component
        return (
            <div className="todosContainer">
                <Todos todos={this.state.todos} />
            </div>
        );
    };
};


export default TodosContainer;