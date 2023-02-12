

/**
 * Regresar componente HTML que vamos a crear
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {

    if( !todo ) throw new Error('A TODO object is requiered');

    const html = `<h1>${ todo.description }</h1>`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;

    return liElement;
}