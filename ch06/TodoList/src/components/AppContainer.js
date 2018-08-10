import React, { Component } from 'react';
import App from './App';
import produce from 'immer';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist : [
                { no:1, todo:"React 학습", done:false },
                { no:2, todo:"Redux 학습", done:false },
                { no:3, todo:"Bootstrap 살펴보기", done:true }
            ]
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }
    
    addTodo(todo) {
        let newTodo = { no: new Date().getTime(), todo:todo, done:false };
        const addedTodolist = produce(this.state.todolist, (draft) => {
            draft.push(newTodo);
        });
        this.setState({ todolist : addedTodolist })
    }

    deleteTodo(no) {
        let index = this.state.todolist.findIndex((todo) => todo.no === no)
        const deletedTodolist = produce(this.state.todolist, (draft) => {
            draft.splice(index, 1);
        });
        this.setState({ todolist : deletedTodolist })
    }

    toggleDone(no) {
        let index = this.state.todolist.findIndex((todo) => todo.no === no)
        const updatedTodolist = produce(this.state.todolist, (draft) => {
            draft[index].done = !draft[index].done;
        });
        this.setState({ todolist : updatedTodolist })
    }

    
    render() {
        return (
            <div>
                <App 
                    todolist = {this.state.todolist}
                    addTodo = {this.addTodo}
                    deleteTodo = {this.deleteTodo}
                    toggleDone = {this.toggleDone}/>
            </div>
        );
    }
}

export default AppContainer;