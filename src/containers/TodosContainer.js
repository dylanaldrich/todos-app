import React from 'react';
import TodoModel from '../models/TodoModel';

class TodosContainer extends React.Component {
    render() {
        TodoModel.all().then((res) => {
            console.log(res);
        })
        return (
            <div className="todosContainer">
                <h2>This is the todos container</h2>
            </div>
        );
    };
};


export default TodosContainer;