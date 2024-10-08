//--------------------- CursoMateria ---------------------//
export class TipoCurso {
    curid: number = 0;
    curnombre: string = '';
    curnivel: number = 0;
    constructor(codTipoCurso: number,desTipoCurso: string, codCurnivel: number){
        this.curid = codTipoCurso;
        this.curnombre = desTipoCurso;
        this.curnivel = codCurnivel;
    }
}

export class TipoCurso2 {
    curid: number = 0;
    curnombre: string = '';
    constructor(codTipoCurso: number,desTipoCurso: string){
        this.curid = codTipoCurso;
        this.curnombre = desTipoCurso;
    }
}

export class TipoMenu {
    menid: number = 0;
	mennombre: string = '';
    constructor(codmenid: number, desmennombre: string){
        this.menid = codmenid;
        this.mennombre = desmennombre;
    }
}
export class TipoIcono {
    icoid: number = 0;
    iconombre: string = '';
    constructor(codIcoid: number, desIconombre: string){
        this.icoid = codIcoid;
        this.iconombre = desIconombre;
    }
}

export class TipoRol {
    rolid: number = 0;
	rolnombre: string = '';
    constructor(codrolid: number, desrolnombre: string){
        this.rolid = codrolid;
        this.rolnombre = desrolnombre;
    }
}

export class TipoOperacion {
    opeid: number = 0;
	openombre: string = '';
    constructor(opeid: number, openombre: string){
        this.opeid = opeid;
        this.openombre = openombre;
    }
}

export class TipoSubMenu {
    submenid: number = 0;
	submennombre: string = '';
    constructor(submenid: number, submennombre: string){
        this.submenid = submenid;
        this.submennombre = submennombre;
    }
}

export class TipoPersona {
    perid: number = 0;
    pernomcompleto: string = '';
    constructor(codperid: number, despernombrecompleto: string){
        this.perid = codperid;
        this.pernomcompleto = despernombrecompleto;
    }
}
//--------------------- CursoMateria ---------------------//

export class TipoModulo {
    codTipoModulo: number = 0;
    desTipoModulo: string = '';
    constructor(codTipoModulo: number,desTipoModulo: string){
        this.codTipoModulo = codTipoModulo;
        this.desTipoModulo = desTipoModulo;
    }
}
export class TipoEstado {
    codTipoEstado: number = 0;
    desTipoEstado: string = '';
    constructor(codTipoEstado: number,desTipoEstado: string){
        this.codTipoEstado = codTipoEstado;
        this.desTipoEstado = desTipoEstado;
    }
}
export class TipoNivelEstado {
    codTipoNivelEstado: number = 0;
    desTipoNivelEstado: string = '';
    constructor(codTipoNivelEstado: number,desTipoNivelEstado: string){
        this.codTipoNivelEstado = codTipoNivelEstado;
        this.desTipoNivelEstado = desTipoNivelEstado;
    }
}
export class TipoMateria {
    matid: number = 0;
    matnombre: string = '';
    matnivel: number = 0;
    constructor(codTipoMateria: number, desTipoMateria: string, codMatNivel: number){
        this.matid = codTipoMateria;
        this.matnombre = desTipoMateria;
        this.matnivel = codMatNivel;
    }
}

export class TipoMateria2 {
    matid: number = 0;
    matnombre: string = '';
    constructor(codTipoMateria: number, desTipoMateria: string){
        this.matid = codTipoMateria;
        this.matnombre = desTipoMateria;
    }
}

export class TipoMateriaCombo {
    matid: number = 0;
    matnombre: string = '';
    curmatfecini: string = '';
    curmatfecfin: string = '';
    constructor(codTipoMateria: number, desTipoMateria: string, curmatfecini: string, curmatfecfin: string){
        this.matid = codTipoMateria;
        this.matnombre = desTipoMateria;
        this.curmatfecini = curmatfecini;
        this.curmatfecfin = curmatfecfin;
    }
}


export class TipoTexto {
    texid: number = 0;
    texnombre: string = '';
    constructor(codTipoTexto: number, desTipoTexto: string){
        this.texid = codTipoTexto;
        this.texnombre = desTipoTexto;
    }
}
//--------------------- CursoMatricuña ---------------------//
export class TipoEstadoMatricula {
    matrestado: number = 0;
    matrestadodescripcion: string = '';
    constructor(matrestado: number, matrestadodescripcion: string){
        this.matrestado = matrestado;
        this.matrestadodescripcion = matrestadodescripcion;
    }
}

//-----------------------Inscripcion------------------------//
export class TipoCursoMateria {
    curmatid: number = 0;
    curmatdescripcion: string = '';
    constructor(curmatid: number, curmatdescripcion: string){
        this.curmatid = curmatid;
        this.curmatdescripcion = curmatdescripcion;
    }
}
export class TipoMatricula {
    matrid: number = 0;
    matrgestion: number = 0;
    constructor(matrid: number, matrgestion: number){
        this.matrid = matrid;
        this.matrgestion = matrgestion;
    }
}


//------------------------Persona--------------------------------//
export class TipoDocumento {
    tipodocid: number = 0;
    tipodocnombre: string = '';
    constructor(tipodocid: number, tipodocnombre: string) {
        this.tipodocid = tipodocid;
        this.tipodocnombre = tipodocnombre;
    }
}
export class TipoEstadoCivil {
    estadocivilid: number = 0;
    estadocivilnombre: string = '';
    constructor(estadocivilid: number, estadocivilnombre: string) {
        this.estadocivilid = estadocivilid;
        this.estadocivilnombre = estadocivilnombre;
    }
}
export class TipoGenero {
    generoid: number = 0;
    generonombre: string = '';
    constructor(generoid: number, generonombre: string) {
        this.generoid = generoid;
        this.generonombre = generonombre;
    }
}
export class TipoPais {
    paisid: number = 0;
    paisnombre: string = '';
    constructor(paisid: number, paisnombre: string) {
        this.paisid = paisid;
        this.paisnombre = paisnombre;
    }
}
export class TipoCiudad {
    ciudadid: number = 0;
    ciudadnombre: string = '';
    paisid: number = 0;
    constructor(ciudadid: number, ciudadnombre: string, paisid: number) {
        this.ciudadid = ciudadid;
        this.ciudadnombre = ciudadnombre;
        this.paisid = paisid;
    }
}

// Usuario
export class TipoPersona2 {
    perid: number = 0;
    pernomcompleto: string = '';
    pernrodoc: number = 0;
    perfoto: string = '';
    constructor(perid: number, pernomcompleto: string, pernrodoc: number, perfoto: string) {
        this.perid = perid;
        this.pernomcompleto = pernomcompleto;
        this.pernrodoc = pernrodoc;
        this.perfoto = perfoto
    }
}
