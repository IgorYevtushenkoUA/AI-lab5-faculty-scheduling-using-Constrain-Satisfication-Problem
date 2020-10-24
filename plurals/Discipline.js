export class Discipline {
    _disciplineName         = ""
    _disciplineType         = ""
    _disciplineTeacher      = ""
    _disciplineGroup        = ""

    constructor(disciplineName="", disciplineType="", teacherName="", groupName="") {
        this._disciplineName        = disciplineName
        this._disciplineType        = disciplineType
        this._disciplineTeacher     = teacherName
        this._disciplineGroup       = groupName
    }

    get getDisciplineDiscipline()       {return this._disciplineName}
    get getDisciplineType()             {return this._disciplineType}
    get getDisciplineGroup()            {return this._disciplineGroup}
    get getDisciplineTeacher()          {return this._disciplineTeacher}

}
