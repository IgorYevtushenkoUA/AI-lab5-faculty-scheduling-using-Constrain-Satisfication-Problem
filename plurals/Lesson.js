export class Lesson {
    constructor( lessonName, lessonType, teacherName, groupName, auditoryName, day, pair) {
        this._lessonName = lessonName
        this._lessonType = lessonType
        this._lessonTeacher = teacherName
        this._lessonGroup = groupName
        this._lessonAuditory = auditoryName
        this._lessonDay = day
        this._lessonPair = pair
    }

    get getLessonDiscipline()       {return this._lessonName}
    get getLessonType()             {return this._lessonType}
    get getLessonGroup()            {return this._lessonGroup}
    get getLessonTeacher()          {return this._lessonTeacher}
    get getLessonAuditory()         {return this._lessonAuditory}
    get getLessonDay()              {return this._lessonDay}
    get getLessonPair()             {return this._lessonPair}

}
