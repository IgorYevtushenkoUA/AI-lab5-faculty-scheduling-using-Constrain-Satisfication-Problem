// (Minimum Remaining Values - MRV).

/**
 Ми отримали інтуїтивну ідею згідно якої в першу чергу необхідно обирати змінну з найменшою кількістю «допустимих» значень називається евристикою з мінімальною кількістю значень, що залишилися (Minimum Remaining Values - MRV).
 Цю евристику також називають евристикою з «змінною на яку поширюється найбільша кількість обмежень» або евристикою «до першого невдалого завершення»
 Якщо існує змінна Х з нульовою кількістю допустимих значень, що залишилися, евристична функція MRV вибере Х і невдача буде локалізована миттєво

 */


/**
 1) Написати пошук найменш можливого варіанту
 2) зробити сортування по можливості вибору
 3) алгоритм що проходить всі Н кількість разів робить
 */


import {data_teachers_map} from "../data/data_teacher.js";
import {data_auditory_map} from "../data/data_auditory.js";
import {data_disciplines, data_plurals, fillDisciplines, fillPluralsForDiscipline} from "../algorithm.js";

'use strict'


let disciplineMap = new Map()

/**
 * @param {Discipline} discipline
 * @param {} plural
 */
function isSuitableForSchedule(discipline, plural) {
    /**
     * @param {[]} teacherTools
     * @param {[]} auditoryTools
     * @returns {boolean}
     */
    function isAllToolsAvailable(teacherTools, auditoryTools) {
        for (let i = 0; i < teacherTools.length; i++)
            if (!auditoryTools.includes(teacherTools[i]))
                return false
        return true
    }

    function isSizeRequire(groupSize, auditorySize) {
        return auditorySize >= groupSize
    }

    function isCorrectAuditoryType(disciplineType, auditoryType) {
        return auditoryType === "l|p" ? true : auditoryType === disciplineType
    }

    function isCorrectDay(teacherAvailableDays, day) {
        return teacherAvailableDays[day].length > 0
    }

    function isFreePair(teacherAvailablePair, day, auditoryPair) {
        return teacherAvailablePair[day].includes(auditoryPair)
    }

    let disciplineType = discipline.getDisciplineType

    let teacherName = discipline.getDisciplineTeacher

    let teacherRules = data_teachers_map[teacherName].getTeacherRules //new Rules
    let teacherTools = disciplineType === "l" ? teacherRules.getRuleTeacherToolsForLecture : teacherRules.getRuleTeacherToolsForPractice
    let teachersAvailableDays = teacherRules.getRuleCanWork
    // console.log(teachersAvailableDays)


    let auditoryName = plural[0]
    let auditory = data_auditory_map[auditoryName]
    let auditoryDay = plural[1]
    let auditoryPair = plural[2]
    let auditoryTools = auditory.getAuditoryTools
    let auditorySize = auditory.getAuditoryCapacity

    let groupSize = discipline.getDisciplineGroup.getStudentGroupSize

    let tools = isAllToolsAvailable(teacherTools, auditoryTools)
    let size = isSizeRequire(groupSize, auditorySize)
    let type = isCorrectAuditoryType(disciplineType, auditory.getAuditoryType)
    let day = isCorrectDay(teachersAvailableDays, auditoryDay)
    let pair = isFreePair(teachersAvailableDays, auditoryDay, auditoryPair)

    // console.log(tools);
    // console.log(size);
    // console.log(type);
    // console.log(day);
    // console.log(pair);

    return (tools && size && type && day && pair)
}

fillDisciplines()
fillPluralsForDiscipline()

let count = 0

for (let i = 0; i < data_disciplines.length; i++) {
    let constraints = 0
    let discipline = data_disciplines[i]
    function analyzeMapElements(value, key, map) {
        if (value){
            console.log("D :: " + discipline.toShow())
            console.log("V :: " + value)
            console.log("K :: " + key)
            console.log(i)
            if (isSuitableForSchedule(discipline, key)) {
                constraints +=1
            }else {
                // console.log('mistake')
            }
        }
    }

    data_plurals.forEach(analyzeMapElements)
    disciplineMap.set(i, constraints)
}

console.log(disciplineMap);
