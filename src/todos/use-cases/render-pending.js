import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * Lugar donde se quiere que se graben los pendientes
 * @param {String} elementId elemento en el cual voy a construirlo
 */
export const renderPending = ( elementId ) => {

    if( !element )
        element = document.querySelector( elementId );
    
    if( !element )
        throw new Error(`Element ${ elementId } not found`);
    
    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;

}