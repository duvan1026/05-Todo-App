import { v4 as uuid } from "uuid";

export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor( description ){
        this.id = uuid();
        this.description = description;
        this.done = false; //Nos permite identificar si el todo esta terminado o pendiente.
        this.createAt = new Date();
    }
}