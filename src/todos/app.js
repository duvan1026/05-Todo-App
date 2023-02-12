import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";


const ElementIDs = {
    TodoList: '.todo-list',//Apunta a .todo-list, se evita colocar string en  el codigo y centraliza la variable

}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos );
    }

    //Función anonima autoinvocada, Cuando la funcion App() se llama
    (()=> {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();

    })();


}