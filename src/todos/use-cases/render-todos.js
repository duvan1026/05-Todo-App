import { createTodoHTML } from "./create-todo-html";


let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

    if( !element )//Evita estar creando el elemento
        element = document.querySelector( elementId );

    if( !element ) throw new Error(`Element ${ elementId } not found`); // Validación de elementID

    element.innerHTML = '';// purgo todo su contenido


    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );

        
    });

}