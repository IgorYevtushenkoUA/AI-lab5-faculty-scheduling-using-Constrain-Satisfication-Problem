export class Subject {

    _subName        = ""
    _subTeacher     = ""
    _subTechTools   = []

    constructor(name="", teacher="", techTools=[]){
        this._subName       = name
        this._subTeacher    = teacher
        this._subTechTools  = techTools
    }

    get getSubName()        {return this._subName}
    get getSubTeacher()     {return this._subTeacher}
    get getSubTechTools()   {return this._subTechTools}

    toShow(){return this._subName+"\t"+this._subTeacher+"\t"+this._subTechTools}

}
