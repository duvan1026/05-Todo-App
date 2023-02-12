import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./use-cases";


const ElementIDs = {
    TodoList: '.todo-list',//Apunta a .todo-list, se evita colocar string en  el codigo y centraliza la variable
    NewTodoInput: '#new-todo-input',
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


    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );


    // Listeners
    newDescriptionInput.addEventListener( 'keyup', ( event ) =>{
        if( event.keyCode !== 13 ) return;
        //.trim = metodo que quita los espacios al inicio y al final del string
        if( event.target.value.trim().length === 0 ) return; // Valida que tenga algun valor el string

        todoStore.addTodo( event.target.value );//obtenemos el valor de la caja de texto
        displayTodos();// renderizamos 
        event.target.value = ''; // seteamos el valor del target.
    });// Escucho cuando alguien presiona y suelta la tecla


}