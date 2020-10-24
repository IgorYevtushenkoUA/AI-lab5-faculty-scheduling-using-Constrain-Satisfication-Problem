export class Auditory {
    constructor(auditoryBuild, auditoryName, auditoryCapacity, auditoryType, auditoryTools) {
        this._auditoryBuild = auditoryBuild
        this._auditoryName = auditoryName;
        this._auditoryCapacity = auditoryCapacity;
        this._auditoryType = auditoryType
        this._auditoryTools = auditoryTools
    }

    get getAuditoryBuild()      {return this._auditoryBuild}
    get getAuditoryName()       {return this._auditoryName}
    get getAuditoryType()       {return this._auditoryType}
    get getAuditoryCapacity()   {return this._auditoryCapacity}
    get getAuditoryTools()      {return this._auditoryTools}

    set setAuditoryBuild(build)         {this._auditoryBuild = build}
    set setAuditoryName(name)           {this._auditoryName = name}
    set setAuditoryCapacity(capacity)   {this._auditoryCapacity = capacity}
    set setAuditoryType(type)           {this._auditoryType = type}
    set setAuditoryTools(tools)         {this._auditoryTools = tools}
}
