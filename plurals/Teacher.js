export class Teacher {

    /** _subjectList = { "subject_name" : [number1, number2] }
     * number1 := 1 if do lecture 0 if not do
     * number2 := 0 if NOT do practice n>0 how many groups take in practice
     * @type {{}}
     * @private
     */
    _subjectList = {}

    constructor(teacherName, teacherSubjectList, whatDo) {
        this._teacherName = teacherName;
        this._subjectList = teacherSubjectList
    }

    get getTeacherName ()        {return this._teacherName;}
    get getTeacherSubjects ()    {return this._subjectList}

}
