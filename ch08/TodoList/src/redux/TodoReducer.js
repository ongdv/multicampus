import Constant from '../Constant';
import produce from 'immer';

//Private State
const initialState = {
    todolist : [
        { no:1533781058905, todo:"React 학습", done:false },
        { no:1533781060993, todo:"Redux 학습", done:false },
        { no:1533781656153, todo:"Bootstrap 살펴보기", done:true }
    ]
}

//Pure Function
const TodoReducer = (todolist=initialState.todolist, action) => {
    let index, newTodoList, newTodo;
    switch (action.type) {
        case Constant.ADD_TODO:
            newTodo = { no: new Date().getTime(), todo: action.payload.todo, done: false}
            newTodoList = produce(todolist, (draft) => {
                draft.push(newTodo);
            })
            return newTodoList;
        case Constant.DELETE_TODO:
            index = todolist.findIndex((item) => action.payload.no === item.no );
            newTodoList = produce(todolist, (draft) => {
                draft.splice(index, 1);
            });
            return newTodoList;
        case Constant.TOGGLE_DONE:
            index = todolist.findIndex((item) => action.payload.no === item.no );
            newTodoList = produce(todolist, (draft) => {
                draft[index].done = !draft[index].done;
            });
            return newTodoList;
        default:
            return todolist;
    }
}

export default TodoReducer;