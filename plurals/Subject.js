export class Subject {
    constructor(name, teacher, techTools){
        this._subName = name
        this._subTeacher = teacher
        this._subTechTools = techTools
    }

    get getSubName()        {return this._subName}
    get getSubTeacher()     {return this._subTeacher}
    get getSubTechTools()   {return this._subTechTools}

}
