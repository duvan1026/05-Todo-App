import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Peding'
}


const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}



const initStore = () => {
    console.log(state),
    console.log('initStore 🥑');
}

const loadStore = () => {
    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}

const getTodos = ( filter = Filters.All ) => {

}

/**
 * crea un nuevo Todo
 * @param {String} description 
 */
const addTodo = ( description ) => {

    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}

/**
 * 
 * @param {String} todoId todo identifier
 */
const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}

/**
 * 
 * @param {String} todoId todo identifier
 */
const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}

const deleteCompleted = () => {
    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}

const setFilter = ( newFilter = Filters.All) => {
    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');// por si alguien lo llama, aviso que aun noe sta implementado
}



export default{
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
