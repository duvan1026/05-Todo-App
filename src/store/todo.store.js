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
        new Todo('Piedra del poder'),
        new Todo('Piedra del campo'),

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
    switch( filter ){

        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done );// (todo.done === true)
        
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );// (todo.done === false)
        
        default:
            throw new Error(`Option ${ filter } is not valid`);
        
    }
}

/**
 * crea un nuevo Todo
 * @param {String} description 
 */
const addTodo = ( description ) => {

    if( !description ) throw new Error('Description is requiered');

    state.todos.push( new Todo(description) );
}

/**
 * Regresar un nuevo arreglo con el todoId con su valor inverso
 * @param {String} todoId todo identifier
 */
const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {

        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    });
 
}

/**
 * 
 * @param {String} todoId todo identifier
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId ); //guarda todos los todo que no tengan ese id
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done ); // guarda todos los todo que esten completados
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All) => {
    if( !Object.keys(Filters).includes(newFilter) ) throw new Error(`filter = ${ newFilter } is no valid`);
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter.toString();
}



export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
