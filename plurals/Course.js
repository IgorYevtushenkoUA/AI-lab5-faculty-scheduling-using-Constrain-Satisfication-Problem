export class Course {
    constructor(name, size, disciplines) {
        this._courseName = name;
        this._courseSize = size;
        this._coursedisciplines = disciplines
    }

    get getCourseName()         {return this._courseName}
    get getCourseSize()         {return this._courseSize}
    get getCourseDisciplines()  {return this._coursedisciplines}

    set setCourseName(name)                 {this._courseName = name}
    set setCourseSize(size)                 {this._courseSize = size;}
    set setCourseDisciplines(disciplines)   {this._coursedisciplines = disciplines}
}
