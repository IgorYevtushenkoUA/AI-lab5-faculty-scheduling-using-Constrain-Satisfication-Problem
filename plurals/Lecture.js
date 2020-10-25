import {Subject} from "./Subject.js";

export class Lecture extends Subject{
    constructor(name ="", teacher="", techTools=[]) {
        super(name, teacher, techTools);
    }

    toShow(){return "LECTURE"}

}
