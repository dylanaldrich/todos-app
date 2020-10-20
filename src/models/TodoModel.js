import axios from 'axios';

const URL = `https://super-crud.herokuapp.com/todos`;

class TodoModel {
    /* STATIC methods are available to all components (just have to import the model to that component) */
    // this method retrieves all the todos from the axios db
    static all = () => {
        const request = axios.get(URL);
        return request;
    };

    // this method sends a post request to the axios db and gives it the data from the input form
    static create = (todo) => {
        const request = axios.post(URL, todo);
        return request;
    }
};

export default TodoModel;