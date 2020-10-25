import {Teacher} from "../plurals/Teacher.js";
import {Rules} from "../plurals/Rules.js";

export const data_teachers_map = {
    "V.S. Protsenko": new Teacher("V.S. Protsenko",
        new Map().set("Haskell", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            ['projector', 'dashboard'],
            [[1, 2, 3, 5], [1, 2, 3, 5, 6, 7], [1, 2, 3, 7], [3, 5, 6, 7], [2, 3, 5, 6, 7], [1, 2, 3, 5]],
            [])),
    "V.V. Bublyk": new Teacher("V.V. Bublyk",
        new Map().set("Methods of object-oriented programming", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5,], [], [1, 2, 3, 5, 6, 7], [6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "O.P. Zhezherun": new Teacher("O.P. Zhezherun",
        new Map().set("System programming", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7]],
            [])),
    "D.I. Cherkasov": new Teacher("D.I. Cherkasov",
        new Map().set("Basic network technologies", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            ["dashboard"],
            [[], [1, 2, 3, 5, 6, 7], [5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], []],
            [])),
    "О.В. Kiriyenko": new Teacher("О.В. Kiriyenko",
        new Map().set("Computer virology", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 7], [6, 7], [3, 5, 6, 7], [], [5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "N.M. Gulaeva": new Teacher("N.M. Gulaeva",
        new Map().set("Databases", [1, 6]),
        new Rules(["dashboard"],
            [],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "T.A. Babich": new Teacher("T.A. Babich",
        new Map().set("Applied architecture enterprise level programs in Java", [1, 6])
            .set("Methods and tools of office programming", [1, 6])
            .set("Architecture of enterprise level applications", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            [],
            [[1, 2, 3, 5, 7], [1, 2, 3, 5, 7], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "S.A. Yaremko": new Teacher("S.A. Yaremko",
        new Map().set("Databases", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6], [1], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7], []],
            [])),
    "O.O. Franks": new Teacher("O.O. Franks",
        new Map().set("Programming under iOS", [1, 6])
            .set("Fundamentals of artificial intelligence", [1, 6]),
        new Rules(
            ['dashboard'],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "A.S. Shabinsky": new Teacher("A.S. Shabinsky",
        new Map().set("Basic network technologies", [1, 6])
            .set("Object-oriented analysis and programming design", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3], [1, 2, 3, 5, 6, 7], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            [])),
    "M.A Korniychuk": new Teacher("M.A Korniychuk",
        new Map().set("Web Search Engine Optimization applications", [1, 6]),
        new Rules(
            ["dashboard"],
            ['projector'],
            [[1], [1, 2, 3, 5, 6, 7], [1], [1, 2, 3, 5, 6, 7], [1], [1]],
            [])),
    "A.O. Afonin": new Teacher("A.O. Afonin",
        new Map().set("Multimedia technology", [1, 6])
            .set("Software systems design", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], []],
            [])),
    "V.M. Mikhalevich": new Teacher("V.M. Mikhalevich",
        new Map().set("Probability theory and mathematical statistics", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], []],
            [])),
    "O.V. Oletskiy": new Teacher("O.V. Oletskiy",
        new Map().set("Front-end Back-end technology web applications", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [], [], [], [], [1, 2, 3, 5, 6, 7]],
            [])),

    "A.V. Buckwheat": new Teacher("A.V. Buckwheat",
        new Map().set("Multitasking and parallel programming", [1, 6]),
        new Rules(
            ['projector'],
            [],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "A.A. Sidko": new Teacher("A.A. Sidko",
        new Map().set("Multitasking and parallel programming", [0, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "A.M. Upland": new Teacher("A.M. Upland",
        new Map().set("Software systems design", [0, 6]),
        new Rules(
            [],
            [],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "VV Gorborukov": new Teacher("VV Gorborukov",
        new Map().set("XML technology", [0, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], [], [], []],
            [])),
    "О.В. Oletsky": new Teacher("О.В. Oletsky",
        new Map().set("XML technology", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], [], []],
            [])),
    "O. Belyakova": new Teacher("O. Belyakova",
        new Map().set("Fundamentals of IT law", [1, 6]),
        new Rules(
            ["projector"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "O.V Kravchenko": new Teacher("O.V Kravchenko",
        new Map().set("Basics of the Scrum framework", [1, 6]),
        new Rules(
            ["projector"],
            ["projector"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "N.Yu. Shchestyuk": new Teacher("N.Yu. Shchestyuk",
        new Map().set("Methods and means of information processing", [1, 6]),
        new Rules(
            ["projector", "projector"],
            ["dashboard", "projector"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    "V.V. Huminsky": new Teacher("V.V. Huminsky",
        new Map().set("Intelligent networks", [1, 6]),
        new Rules(
            ["dashboard"],
            ["projector"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [6, 7]],
            [])),
    "G.I. Malashonok": new Teacher("G.I. Malashonok",
        new Map().set("Multitasking and parallel programming", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[5, 6, 7], [1, 5, 6, 7], [1, 7], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7]],
            [])),
    "D.I. Morozov": new Teacher("D.I. Morozov",
        new Map().set("Information coding systems", [1, 6]),
        new Rules(
            ["projector"],
            ["projector"],
            [[], [1, 2, 3, 5], [1, 2], [1, 6, 7], [1, 2, 3, 5, 6, 7], []],
            [])),
    "Ya.I. Voznyuk": new Teacher("Ya.I. Voznyuk",
        new Map().set("Electronics and digital electronics", [1, 6]),
        new Rules(
            ["projector"],
            [],
            [[1, 2, 3, 5, 6, 7], [], [1, 2, 3], [1, 2, 3], [1, 2, 7], [1, 2, 3, 6, 7]],
            [])),
}

export const data_teachers_arr = [

    new Teacher("V.S. Protsenko",
        new Map().set("Haskell", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            ['projector', 'dashboard'],
            [[1, 2, 3, 5], [1, 2, 3, 5, 6, 7], [1, 2, 3, 7], [3, 5, 6, 7], [2, 3, 5, 6, 7], [1, 2, 3, 5]],
            [])),
    new Teacher("V.V. Bublyk",
        new Map().set("Methods of object-oriented programming", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5,], [], [1, 2, 3, 5, 6, 7], [6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("O.P. Zhezherun",
        new Map().set("System programming", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("D.I. Cherkasov",
        new Map().set("Basic network technologies", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            ["dashboard"],
            [[], [1, 2, 3, 5, 6, 7], [5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], []],
            [])),
    new Teacher("О.В. Kiriyenko",
        new Map().set("Computer virology", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 7], [6, 7], [3, 5, 6, 7], [], [5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("N.M. Gulaeva",
        new Map().set("Databases", [1, 6]),
        new Rules(["dashboard"],
            [],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("T.A. Babich",
        new Map().set("Applied architecture enterprise level programs in Java", [1, 6])
            .set("Methods and tools of office programming", [1, 6])
            .set("Architecture of enterprise level applications", [1, 6]),
        new Rules(
            ['projector', 'dashboard'],
            [],
            [[1, 2, 3, 5, 7], [1, 2, 3, 5, 7], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("S.A. Yaremko",
        new Map().set("Databases", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6], [1], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7], []],
            [])),
    new Teacher("O.O. Franks",
        new Map().set("Programming under iOS", [1, 6])
            .set("Fundamentals of artificial intelligence", [1, 6]),
        new Rules(
            ['dashboard'],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("A.S. Shabinsky",
        new Map().set("Basic network technologies", [1, 6])
            .set("Object-oriented analysis and programming design", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3], [1, 2, 3, 5, 6, 7], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            [])),
    new Teacher("M.A Korniychuk",
        new Map().set("Web Search Engine Optimization applications", [1, 6]),
        new Rules(
            ["dashboard"],
            ['projector'],
            [[1], [1, 2, 3, 5, 6, 7], [1], [1, 2, 3, 5, 6, 7], [1], [1]],
            [])),
    new Teacher("A.O. Afonin",
        new Map().set("Multimedia technology", [1, 6])
            .set("Software systems design", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], []],
            [])),
    new Teacher("V.M. Mikhalevich",
        new Map().set("Probability theory and mathematical statistics", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], []],
            [])),
    new Teacher("O.V. Oletskiy",
        new Map().set("Front-end Back-end technology web applications", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [], [], [], [], [1, 2, 3, 5, 6, 7]],
            [])),

    new Teacher("A.V. Buckwheat",
        new Map().set("Multitasking and parallel programming", [1, 6]),
        new Rules(
            ['projector'],
            [],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("A.A. Sidko",
        new Map().set("Multitasking and parallel programming", [0, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("A.M. Upland",
        new Map().set("Software systems design", [0, 6]),
        new Rules(
            [],
            [],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("VV Gorborukov",
        new Map().set("XML technology", [0, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], [], [], []],
            [])),
    new Teacher("О.В. Oletsky",
        new Map().set("XML technology", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[1, 2, 3], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 5, 6, 7], [], [], []],
            [])),
    new Teacher("O. Belyakova",
        new Map().set("Fundamentals of IT law", [1, 6]),
        new Rules(
            ["projector"],
            ["dashboard"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("O.V Kravchenko",
        new Map().set("Basics of the Scrum framework", [1, 6]),
        new Rules(
            ["projector"],
            ["projector"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("N.Yu. Shchestyuk",
        new Map().set("Methods and means of information processing", [1, 6]),
        new Rules(
            ["projector", "projector"],
            ["dashboard", "projector"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("V.V. Huminsky",
        new Map().set("Intelligent networks", [1, 6]),
        new Rules(
            ["dashboard"],
            ["projector"],
            [[1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 7], [1, 2, 3, 5, 6, 7], [1, 2, 3, 5, 6, 7], [6, 7]],
            [])),
    new Teacher("G.I. Malashonok",
        new Map().set("Multitasking and parallel programming", [1, 6]),
        new Rules(
            ["dashboard"],
            ["dashboard"],
            [[5, 6, 7], [1, 5, 6, 7], [1, 7], [1, 2, 3, 5, 6, 7], [], [1, 2, 3, 5, 6, 7]],
            [])),
    new Teacher("D.I. Morozov",
        new Map().set("Information coding systems", [1, 6]),
        new Rules(
            ["projector"],
            ["projector"],
            [[], [1, 2, 3, 5], [1, 2], [1, 6, 7], [1, 2, 3, 5, 6, 7], []],
            [])),
    new Teacher("Ya.I. Voznyuk",
        new Map().set("Electronics and digital electronics", [1, 6]),
        new Rules(
            ["projector"],
            [],
            [[1, 2, 3, 5, 6, 7], [], [1, 2, 3], [1, 2, 3], [1, 2, 7], [1, 2, 3, 6, 7]],
            [])),
]
