import {data_teachers_map} from "../data/data_teacher.js";
import {data_auditory_map} from "../data/data_auditory.js";
import {data_map_disciplines, data_plurals, fillDisciplines, fillPluralsForDiscipline} from "../algorithm.js";
import {Lesson} from "../plurals/Lesson.js";

'use strict'


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

    return (tools && size && type && day && pair)
}

function countConstraints(map_disciplines) {
    let count = 0

    function analyzeInMapDisciplines(value, key, map) {
        let discipline = key
        let constraintsList = value

        function analyzePluralsElements(value, key, map) {
            if (value) {
                if (isSuitableForSchedule(discipline, key)) {
                    constraintsList.push(key)
                }
            }
        }

        data_plurals.forEach(analyzePluralsElements)
        map_disciplines.set(discipline, constraintsList)
    }

    map_disciplines.forEach(analyzeInMapDisciplines)
    return map_disciplines
}

function sortByConstraints(data_map_disciplines) {
    data_map_disciplines[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1].length - b[1].length);
    }
    return data_map_disciplines
}


/**
 * беру найменшу по кількості можливих варіантів      <-------------------|
 * роблю фор                                                              |
 *      беру її першу можливість                                          |
 *      помічаю цю адудиторію-день-час - фолс                             |
 *      проходжуся по всіх інших варіантих і видаляю дану аудиторію       |
 *      сортую                                                            |
 *      Зацикленість             >-----------------------------------------
 *
 *      якщо немає варіантів ???
 *      зробити крок назад та обрати інший варіант із списку існуючих
 *          якщо варіанту немає - зробити ще крок назад ЗАЦИКЛИТИ ???
 *
 *
 * data_map_discipline_constraints     (index : list of possibilities)
 * data_disciplines             [new Discipline(),...]
 * data_plurals                 [auditory+day+pair : true]
 *
 * Need
 * discipline - list of possibilities
 *
 *
 * problems
 * що робити якщо є однакові по кількості можливотей ----- брати першу
 * якщо немає варіанту есь посередині - ЩО РОБИТИ
 *
 */

function getElemByIndexInMap(map, index) {
    return Array.from(map)[index]
}

/**
 * @param {Discipline} d1
 * @param {Discipline} d2
 */
function compare2Disciplines(d1, d2) {
    return d1.getDisciplineGroup === d2.getDisciplineGroup
}


/**
 * налаштувати алгоритм під data_map_disciplines
 * зробити тест
 * знайти рішення коли треба робити крок назад
 */
/**
 *
 * @param {[]} schedule
 * @param {Map} data_plurals
 * @param {Map} copyDisciplinesMap
 * @param {Map} originDisciplinesMap
 * @returns {*}
 */

let queueOfDeletedOperation = []

function solveSchedule(schedule, data_plurals, copyMap, originDisciplinesMap) {
    if (originDisciplinesMap.size === schedule.length) return schedule // ??? maybe true or schedule
    if (copyMap.size === 0) return schedule
    // завжди беремо перший елемент із всіх дисциплінн тому що цей 1 елем має найбільше обмежень
    let item = getElemByIndexInMap(copyMap, 0)
    let dis = item[0]
    let variablesList = item[1]

    for (let i = 0; i < variablesList.length; i++) {
        let variant = variablesList[i]
        data_plurals[variant] = "false"
        schedule.push(new Lesson(dis, variant[0], variant[1], variant[2]))
        queueOfDeletedOperation.push(dis)
        copyMap.delete(dis)

        //видаляємо [аудит-день-пара] із можливого списку кожної дисципліни тому що вона вже зайнята
        for (let item of copyMap) {
            for (let j = 0; j < item[1].length; j++) {
                if (item[1][j] === variant) {
                    item[1] = item[1].filter(value => value !== variant)
                }
            }
        }

        copyMap = countConstraints(copyMap)
        copyMap = sortByConstraints(copyMap)

        if (originDisciplinesMap.length === schedule.length) return schedule // ??? з чи тут вона треба по ідеї якщо масив розміру із дисциплін то зупинити
        if (copyMap.size === 0) {
            return "cant solve do step back"
        } else {
            solveSchedule(schedule, data_plurals, copyMap, originDisciplinesMap)
        }
    }
}


fillDisciplines()
fillPluralsForDiscipline()
countConstraints(data_map_disciplines)
sortByConstraints(data_map_disciplines)
let firstIndexFromMap = getElemByIndexInMap(data_map_disciplines, 0)[0]
let plurals_with_most_constraints = getElemByIndexInMap(data_map_disciplines, 0)[1]
// for (let i = 0; i < plurals_with_most_constraints.length; i++) {
    let schedule = []
    let copyMap = new Map(data_map_disciplines)
console.log(solveSchedule(schedule, data_plurals, copyMap, data_map_disciplines));
// }

// changePositionsInOriginDisciplineList()


// constraintPropagation()
