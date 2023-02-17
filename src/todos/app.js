import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import { renderTodos } from "./use-cases";


const ElementIDs = {
    clearCompletedButton: '.clear-completed',
    TodoList: '.todo-list',//Apunta a .todo-list, se evita colocar string en  el codigo y centraliza la variable
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
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


    const updatePendingCount = () => {
        
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
    const todoListUl = document.querySelector( ElementIDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementIDs.clearCompletedButton);
    const filtersLIs = document.querySelectorAll( ElementIDs.TodoFilters );



    // Listeners
    /**
    * Escucha el input para agregar nuevos todo
     */
    newDescriptionInput.addEventListener( 'keyup', ( event ) =>{
        if( event.keyCode !== 13 ) return;
        //.trim = metodo que quita los espacios al inicio y al final del string
        if( event.target.value.trim().length === 0 ) return; // Valida que tenga algun valor el string

        todoStore.addTodo( event.target.value );//obtenemos el valor de la caja de texto
        displayTodos();// renderizamos todos los todos 
        event.target.value = ''; // seteamos el valor del target.
    });// Escucho cuando alguien presiona y suelta la tecla

    /**
     * Escucha el event para cambiar el toggle todo
     */
    todoListUl.addEventListener( 'click', (event) => {
        //Todo: Importante.
        const element = event.target.closest('[data-id]'); // Busca el elemento HTML que tenga este datamas cercano
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    /**
     * Evento para eliminar un todo especifico
     */
    todoListUl.addEventListener( 'click', (event) => {
        //console.log(event);
        //console.log(event.target);//className: "destroy"
        const isDestroyElement = ( event.target.className === 'destroy' );
        const element = event.target.closest('[data-id]'); // Busca el elemento HTML que tenga este datamas cercano


        if( !element || !isDestroyElement ) return; // Validacion de element y isDestroyElement;

        //Todo: Importante.
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });


    clearCompletedButton.addEventListener( 'click', () => {

        todoStore.deleteCompleted();
        displayTodos();

    });


    filtersLIs.forEach( element => {

        element.addEventListener( 'click', (element) => {

            filtersLIs.forEach( el => el.classList.remove( 'selected' ) ); 
            element.target.classList.add('selected');


            switch( element.target.text ){
                case 'Todos':
                    todoStore.setFilter( Filters.All )
                break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed )
                break;
            }

            displayTodos();

        });

    });


}