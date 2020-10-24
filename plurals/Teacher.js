import {Rules} from "./Rules.js";

export class Teacher {

    /** _subjectList = { "subject_name" : [number1, number2] }
     * number1 := 1 if do lecture 0 if not do
     * number2 := 0 if NOT do practice n>0 how many groups take in practice
     * @type {{}}
     * @private
     */
    _teacherName = ""
    _teacherSubjectList = {}
    _teacherRules = new Rules()

    constructor(teacherName, teacherSubjectList, teacherRules) {
        this._teacherName = teacherName;
        this._teacherSubjectList = teacherSubjectList
        this._teacherRules = teacherRules
    }

    get getTeacherName ()        {return this._teacherName;}
    get getTeacherSubjects ()    {return this._teacherSubjectList}
    get getTeacherRules ()       {return this._teacherRules}

}
