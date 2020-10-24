export class Schedule {

    constructor(lessons) {
        this._scheduleLessons = lessons
    }

    get getScheduleLessons()        {return this._scheduleLessons}

    setScheduleLessons(lessons)     {this._scheduleLessons = lessons}

}
