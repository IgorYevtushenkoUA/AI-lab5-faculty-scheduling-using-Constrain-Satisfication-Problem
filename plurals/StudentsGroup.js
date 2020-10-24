export class StudentsGroup {
    constructor(name, courseName, subject, size, ) {
        this._studentGroupName = name;
        this._studentGroupCourseName = courseName
        this._studentGroupSubject = subject
        this._studentGroupSize = size;
    }

    get getStudentGroupName()       {return this._studentGroupName}
    get getStudentGroupCourseName() {return this._studentGroupCourseName}
    get getStudentGroupSubject()    {return this._studentGroupSubject}
    get getStudentGroupSize()       {return this._studentGroupSize}

}
