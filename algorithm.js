import {data_course_arr} from "./data/data_course.js";
import {Discipline} from "./plurals/Discipline.js";
import {StudentsGroup} from "./plurals/StudentsGroup.js";
import {data_auditory_arr} from "./data/data_auditory.js";

'use strict'
/**
 * Використати евристики:

 Minimum Remaining Values
 степеневу евристику
 евристику з найменш обмежуючим значенням
 forward checking
 constraint propagation

 роблю графи що складаються із дисциплін
  */

console.log(data_course_arr[0].getCourseDisciplines.length)


const GROUP_PRACTICE_SIZE = 10
let data_disciplines = []
let data_plurals = new Map()

/**
 * тут я буду щось по типу графів (як і карта із АВСТРАЛІЄЮ, де вершиною графа було місто + множина можливих дій)
 * у мене ж вершиною графі є дисципліна, і кожна вершина пов'язана із іншою вершиною
 */
function fillDisciplines() {
    for (let i = 0; i < data_course_arr.length; i++) {

        for (let j = 0; j < data_course_arr[i].getCourseDisciplines.length; j++) {

            let disciplineName = data_course_arr[i].getCourseDisciplines[j]
            let disciplineType = 'l'
            let disciplineTeacher = getTeacher(disciplineName, disciplineType)
            let studentGroupName = disciplineName + " - " + " ( L )"
            let studentGroupCourseName = data_course_arr[i].getCourseName
            let studentGroupSubject = disciplineName
            let studentGroupSize = data_course_arr[i].getCourseSize

            let disciplineGroup = new StudentsGroup(studentGroupName, studentGroupCourseName, studentGroupSubject, studentGroupSize)
            let newDiscipline = new Discipline(disciplineName, disciplineType, disciplineTeacher, disciplineGroup)
            data_disciplines.push(newDiscipline)

            for (let k = 0; k < Math.round(data_course_arr[i].getCourseSize / GROUP_PRACTICE_SIZE); k++) {
                let type = 'p'
                let name = disciplineName + " - " + k + " ( P )"
                let group = new StudentsGroup(name, studentGroupCourseName, studentGroupSubject, GROUP_PRACTICE_SIZE)
                let newDis = new Discipline(disciplineName, type, disciplineTeacher, group)
                data_disciplines.push(newDis)
            }
        }
    }
}

/**
 * Тут я заповнюю множину всіх можливих значеть для дисциплін
 * воно має вигляд
 *              key              -      value
 * (аудиторія, день, номер пари) - (вільна чи не вільна)
 */
function fillPluralsForDiscipline() {
    for (let auditory = 0; auditory < data_auditory_arr; auditory++) {
        for (let day = 0; day < 6; day++) {
            for (let pair = 1; pair <= 7; pair++) {
                let auditoryName = data_auditory_arr[auditory].getAuditoryBuild + data_auditory_arr[auditory].getAuditoryName
                data_plurals.set([auditory, day, pair], "true")
            }
        }
    }
}


function minRemainVal() {

}

function degreeHeuristics() {
}

function heuristicLeastRestrictVal() {
}

function ForwardCheck() {
}

function constraintPropagation() {
}
