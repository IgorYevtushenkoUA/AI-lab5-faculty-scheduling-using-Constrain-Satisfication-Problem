import {Subject} from "./Subject.js";

export class Practice extends Subject{

    _practiceGroupMaxSize = 0

    constructor(name="",teacher="", techTools=[], practiceGroupMaxSize=0) {
        super(name, teacher, techTools);
        this._practiceGroupMaxSize = practiceGroupMaxSize
    }

    get getPracticeGroupMaxSize()       {return this._practiceGroupMaxSize}

    toShow(){return "PRACTICE"}

}
