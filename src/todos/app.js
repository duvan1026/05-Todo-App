
/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    //Función autoinvocada, Cuando la funcion App() se llama
    (()=> {

        const app = document.createElement('div');
        app.innerHTML = '<h1>Hola Mundo</h1>';
        document.querySelector( elementId ).append( app );

    })();


}