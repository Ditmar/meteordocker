var require = meteorInstall({"imports":{"api":{"collections":{"server":{"publications.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/server/publications.js                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Usuarios, ClaveRegistro, Cargos, Images, Especialidades, Consultorios, Medicos, Pacientes, Empresas, Turnos, Salas, Camas, Medicamentos, Compras, Ventas, Clientes, ReporteFarmacia, Fichas, FichasEnfermeria, ReporteFichas, Historiales, Consultas, Internaciones, Quirofano, SignosVitales, SalaPartos, Diagnostico, Laboratorios, PlanCuentas, Comprobantes, Mayores, EstadosFinancieros, EstadoConta, Lineas, FichaInternacion, DetalleFicha, Servicios;
module.link("../collections.js", {
  Usuarios(v) {
    Usuarios = v;
  },

  ClaveRegistro(v) {
    ClaveRegistro = v;
  },

  Cargos(v) {
    Cargos = v;
  },

  Images(v) {
    Images = v;
  },

  Especialidades(v) {
    Especialidades = v;
  },

  Consultorios(v) {
    Consultorios = v;
  },

  Medicos(v) {
    Medicos = v;
  },

  Pacientes(v) {
    Pacientes = v;
  },

  Empresas(v) {
    Empresas = v;
  },

  Turnos(v) {
    Turnos = v;
  },

  Salas(v) {
    Salas = v;
  },

  Camas(v) {
    Camas = v;
  },

  Medicamentos(v) {
    Medicamentos = v;
  },

  Compras(v) {
    Compras = v;
  },

  Ventas(v) {
    Ventas = v;
  },

  Clientes(v) {
    Clientes = v;
  },

  ReporteFarmacia(v) {
    ReporteFarmacia = v;
  },

  Fichas(v) {
    Fichas = v;
  },

  FichasEnfermeria(v) {
    FichasEnfermeria = v;
  },

  ReporteFichas(v) {
    ReporteFichas = v;
  },

  Historiales(v) {
    Historiales = v;
  },

  Consultas(v) {
    Consultas = v;
  },

  Internaciones(v) {
    Internaciones = v;
  },

  Quirofano(v) {
    Quirofano = v;
  },

  SignosVitales(v) {
    SignosVitales = v;
  },

  SalaPartos(v) {
    SalaPartos = v;
  },

  Diagnostico(v) {
    Diagnostico = v;
  },

  Laboratorios(v) {
    Laboratorios = v;
  },

  PlanCuentas(v) {
    PlanCuentas = v;
  },

  Comprobantes(v) {
    Comprobantes = v;
  },

  Mayores(v) {
    Mayores = v;
  },

  EstadosFinancieros(v) {
    EstadosFinancieros = v;
  },

  EstadoConta(v) {
    EstadoConta = v;
  },

  Lineas(v) {
    Lineas = v;
  },

  FichaInternacion(v) {
    FichaInternacion = v;
  },

  DetalleFicha(v) {
    DetalleFicha = v;
  },

  Servicios(v) {
    Servicios = v;
  }

}, 1);
module.exportDefault(function () {
  /*UploadServer.init({
    tmpDir:  'D:/meteor_projects/clinical_system_0.9/.tmp',
    uploadDir: 'D:/meteor_projects/clinical_system_0.9/.uploads/',
    checkCreateDirectories: true //create the directories for you
  });*/
  //ADMINISTRADOR
  Meteor.publish('usuarios', function () {
    return Usuarios.find({}, {
      sort: {
        nombre: 1,
        ap_paterno: 1,
        ap_materno: 1
      }
    }); //{estado:{$ne:'Eliminado'}}
  });
  Meteor.publish('claveRegistro', function () {
    return ClaveRegistro.find({});
  });
  /*Meteor.publish('images', function(){
      return Images.find({}, {sort: {nombre_img: 1}});
  });*/

  /*Meteor.publish('especialidades', function () {
      return Especialidades.find({}, {sort: {nombre_esp: 1}});
  });*/
  //CONSULTORIOS

  Meteor.publish('consultorios', function () {
    return Consultorios.find({}, {
      sort: {
        nombre_cons: 1
      }
    });
  }); //CARGOS

  Meteor.publish('cargos', function () {
    return Cargos.find({}, {
      sort: {
        nombre_cargo: 1
      }
    });
  }); //EMPRESAS

  Meteor.publish('empresas', function () {
    return Empresas.find({}, {
      sort: {
        nombre_empresa: 1
      }
    });
  }); //TURNOS

  Meteor.publish('turnos', function () {
    return Turnos.find({}, {
      sort: {
        nombre_turno: 1
      }
    });
  }); //MEDICOS

  Meteor.publish('medicos', function () {
    return Medicos.find({}, {
      sort: {
        especialidad: 1
      }
    });
  }); //SALAS

  Meteor.publish('salas', function () {
    return Salas.find({}, {
      sort: {
        nombre_sala: 1
      }
    });
  }); //CAMAS

  Meteor.publish('camas', function () {
    return Camas.find({}, {
      sort: {
        nro_cama: 1
      }
    });
  }); //SERVICIOS

  Meteor.publish('servicios', function () {
    return Servicios.find({}, {
      sort: {
        servicio: 1
      }
    });
  }); //FARMACIA
  // MEDICAMENTOS

  Meteor.publish('medicamentos', function () {
    return Medicamentos.find({}, {
      sort: {
        nombre_comercial: 1
      }
    });
  }); //COMPRA DE MEDICAMENTOS

  Meteor.publish('compras', function () {
    return Compras.find({}, {
      sort: {
        codigo_compra: -1
      }
    });
  }); //VENTA DE MEDICAMENTOS

  Meteor.publish('ventas', function () {
    return Ventas.find({}, {
      sort: {
        codigo_venta: 1
      }
    });
  }); //REPORTE FARMACIA

  Meteor.publish('reportefarmacia', function () {
    return ReporteFarmacia.find({}, {
      sort: {
        codigo_reporte: -1
      }
    });
  }); //CLIENTES

  Meteor.publish('clientes', function () {
    return Clientes.find({}, {
      sort: {
        nombre: 1
      }
    });
  }); //LINEA FARMACEUTICA

  Meteor.publish('lineas', function () {
    return Lineas.find({}, {
      sort: {
        nombre_linea: 1
      }
    });
  }); //AFILIACION Y FICHAJE
  //PACIENTES

  Meteor.publish('pacientes', function () {
    return Pacientes.find({}, {
      sort: {
        codigo_asegurado: 1
      }
    });
  }); //FICHAS

  Meteor.publish('fichas', function () {
    return Fichas.find({});
  }); //FICHAS ENFERMERIA

  Meteor.publish('fichasenfermeria', function () {
    return FichasEnfermeria.find({}, {
      sort: {
        nro: -1
      }
    });
  }); //REPORTE DE FICHAS

  Meteor.publish('reportefichas', function () {
    return ReporteFichas.find({});
  }); //FICHA INTERNACION

  Meteor.publish('fichainternacion', function () {
    return FichaInternacion.find({}, {
      sort: {
        fecha_reg: 1
      }
    });
  }); // DETALLE FICHA ENFERMERIA

  Meteor.publish('detalleficha', function () {
    return DetalleFicha.find({});
  }); //CONSULTAS MEDICAS

  Meteor.publish('historiales', function () {
    return Historiales.find({});
  }); //DIAGNOSTICO

  Meteor.publish('diagnostico', function () {
    return Diagnostico.find({}, {
      sort: {
        nombre_diag: 1
      }
    });
  }); //LABORATORIOS

  Meteor.publish('laboratorios', function () {
    return Laboratorios.find({}, {
      sort: {
        nomb_gral: 1,
        nomb_analisis: 1
      }
    });
  }); //CONSULTAS

  Meteor.publish('consultas', function () {
    return Consultas.find({}, {
      sort: {
        fecha_reg: 1
      }
    });
  }); //INTERNACIONES

  Meteor.publish('internaciones', function () {
    return Internaciones.find({}, {
      sort: {
        fecha_reg: 1
      }
    });
  }); //QUIROFANO

  Meteor.publish('quirofano', function () {
    return Quirofano.find({});
  }); //SIGNOS VITALES

  Meteor.publish('signosvitales', function () {
    return SignosVitales.find({});
  }); //SIGNOS VITALES

  Meteor.publish('salapartos', function () {
    return SalaPartos.find({});
  }); //CONTABILIDAD
  //PLAN DE CUENTAS

  Meteor.publish('plancuentas', function () {
    return PlanCuentas.find({}, {
      sort: {
        codigo_cuenta: 1
      }
    });
  }); // COMPROBANTES

  Meteor.publish('comprobantes', function () {
    return Comprobantes.find({}, {
      sort: {
        fecha: 1
      }
    });
  }); //MAYORES

  Meteor.publish('mayores', function () {
    return Mayores.find({});
  }); //ESTADOS FINANCIEROS

  Meteor.publish('estadosfinancieros', function () {
    return EstadosFinancieros.find({});
  }); //ESTADO CONTABILIDAD

  Meteor.publish('estadoconta', function () {
    return EstadoConta.find({});
  });
  Meteor.publish('images', function () {
    return Images.find().cursor;
  });
});
;
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/collections.js                                                        //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  Images: () => Images,
  Usuarios: () => Usuarios,
  UsuariosIndex: () => UsuariosIndex,
  ClaveRegistro: () => ClaveRegistro,
  Especialidades: () => Especialidades,
  Consultorios: () => Consultorios,
  Cargos: () => Cargos,
  Medicos: () => Medicos,
  Empresas: () => Empresas,
  Turnos: () => Turnos,
  Salas: () => Salas,
  Camas: () => Camas,
  Servicios: () => Servicios,
  Medicamentos: () => Medicamentos,
  MedicamentosIndex: () => MedicamentosIndex,
  MedicamentosInventarioIndex: () => MedicamentosInventarioIndex,
  Compras: () => Compras,
  Ventas: () => Ventas,
  ReporteFarmacia: () => ReporteFarmacia,
  Clientes: () => Clientes,
  ClientesIndex: () => ClientesIndex,
  Lineas: () => Lineas,
  Pacientes: () => Pacientes,
  PacientesAsegIndex: () => PacientesAsegIndex,
  PacientesIndex: () => PacientesIndex,
  Fichas: () => Fichas,
  FichasEnfermeria: () => FichasEnfermeria,
  ReporteFichas: () => ReporteFichas,
  FichaInternacion: () => FichaInternacion,
  DetalleFicha: () => DetalleFicha,
  Diagnostico: () => Diagnostico,
  Historiales: () => Historiales,
  HistorialesIndex: () => HistorialesIndex,
  Consultas: () => Consultas,
  Laboratorios: () => Laboratorios,
  LaboratoriosIndex: () => LaboratoriosIndex,
  Internaciones: () => Internaciones,
  Quirofano: () => Quirofano,
  SignosVitales: () => SignosVitales,
  SalaPartos: () => SalaPartos,
  PlanCuentas: () => PlanCuentas,
  Comprobantes: () => Comprobantes,
  Mayores: () => Mayores,
  EstadosFinancieros: () => EstadosFinancieros,
  EstadoConta: () => EstadoConta
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let Index, MinimongoEngine;
module.link("meteor/easy:search", {
  Index(v) {
    Index = v;
  },

  MinimongoEngine(v) {
    MinimongoEngine = v;
  }

}, 2);
let FilesCollection;
module.link("meteor/ostrio:files", {
  FilesCollection(v) {
    FilesCollection = v;
  }

}, 3);
const Images = new FilesCollection({
  //debug: true,
  collectionName: 'Images',
  allowClientCode: false,
  // Disallow remove files from Client
  storagePath: function (fileObj) {
    // Do not use "fat arrow" as context is matters
    if (fileObj && fileObj._id) {
      let path = process.env.PWD + '/Uploads/Images'; //'assets/app/uploads/Images'; //'/meteor_projects/clinical_system_1.0/Img';
      //fs.ensureDirSync(path); /home/isma/Documentos/meteor_projects/clinical_system_1.0'

      return path;
    } else {
      return 'assets/app/uploads/Images';
    }
  },
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024 * 1024 * 10 && /png|gif|jpg|jpeg|pdf/i.test(file.extension)) {
      return true;
    }

    return 'Suba la imagen, con un tamaño igual o inferior a 10MB';
  }
});
const Usuarios = new Mongo.Collection('Usuarios');
const UsuariosIndex = new Index({
  collection: Usuarios,
  fields: ['ci', 'nombre', 'ap_paterno', 'subsistema'],
  engine: new MinimongoEngine({
    sort: () => {
      nombre: 1;
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      selector.eliminado = false;
      return selector;
    }
  }),
  defaultSearchOptions: {
    limit: 10
  }
});
const ClaveRegistro = new Mongo.Collection('ClaveRegistro');
const Especialidades = new Mongo.Collection('Especialidades');
const Consultorios = new Mongo.Collection('Consultorios');
const Cargos = new Mongo.Collection('Cargos');
const Medicos = new Mongo.Collection('Medicos');
const Empresas = new Mongo.Collection('Empresas');
const Turnos = new Mongo.Collection('Turnos');
const Salas = new Mongo.Collection('Salas');
const Camas = new Mongo.Collection('Camas');
const Servicios = new Mongo.Collection('Servicios');
const Medicamentos = new Mongo.Collection('Medicamentos');
const MedicamentosIndex = new Index({
  collection: Medicamentos,
  fields: ['item', 'nombre_comercial', 'nombre_generico'],
  engine: new MinimongoEngine({
    sort: () => {
      nombre_comercial: 1;
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      selector.activo = true;
      return selector;
    }
  }),
  defaultSearchOptions: {
    limit: 3
  }
});
const MedicamentosInventarioIndex = new Index({
  collection: Medicamentos,
  fields: ['item', 'nombre_comercial', 'nombre_generico', 'linea'],
  engine: new MinimongoEngine({
    sort: () => {
      nombre_comercial: 1;
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      selector.activo = true;
      return selector;
    }
  }) //defaultSearchOptions: {limit: 50}

});
const Compras = new Mongo.Collection('Compras');
const Ventas = new Mongo.Collection('Ventas');
const ReporteFarmacia = new Mongo.Collection('ReporteFarmacia');
const Clientes = new Mongo.Collection('Clientes');
const ClientesIndex = new Index({
  collection: Clientes,
  fields: ['ci', 'nombre'],
  engine: new MinimongoEngine({
    sort: () => {
      item: 1;
    }
    /*selector: function (searchObject, options, aggregation) {
        let selector = this.defaultConfiguration().selector(searchObject, options, aggregation)
        selector.activo = true
        return  selector
    }*/

  }),
  defaultSearchOptions: {
    limit: 3
  }
});
const Lineas = new Mongo.Collection('Lineas');
const Pacientes = new Mongo.Collection('Pacientes');
const PacientesAsegIndex = new Index({
  collection: Pacientes,
  fields: ['codigo_asegurado', 'ci', 'nombre', 'ap_paterno'],
  engine: new MinimongoEngine({
    sort: () => {
      codigo_asegurado: -1;
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      selector.asegurado = true; //selector.tipo_paciente = 'Titular'

      return selector;
    }
  }),
  defaultSearchOptions: {
    limit: 20
  }
});
const PacientesIndex = new Index({
  collection: Pacientes,
  fields: ['codigo_asegurado', 'ci', 'nombre', 'ap_paterno'],
  engine: new MinimongoEngine({
    sort: () => {
      nombre: 1;
    }
    /*selector: function (searchObject, options, aggregation) {
        let selector = this.defaultConfiguration().selector(searchObject, options, aggregation)
        selector.asegurado = true
        //selector.tipo_paciente = 'Titular'
        return  selector
    }*/

  }),
  defaultSearchOptions: {
    limit: 10
  }
});
const Fichas = new Mongo.Collection('Fichas');
const FichasEnfermeria = new Mongo.Collection('FichasEnfermeria');
const ReporteFichas = new Mongo.Collection('ReporteFichas');
const FichaInternacion = new Mongo.Collection('FichaInternacion');
const DetalleFicha = new Mongo.Collection('DetalleFicha');
const Diagnostico = new Mongo.Collection('Diagnostico');
const Historiales = new Mongo.Collection('Historiales');
const HistorialesIndex = new Index({
  collection: Historiales,
  fields: ['codigo_h', 'ci', 'nombre', 'ap_paterno'],
  engine: new MinimongoEngine({
    sort: () => {
      codigo_h: 1;
    }
    /*selector: function (searchObject, options, aggregation) {
        let selector = this.defaultConfiguration().selector(searchObject, options, aggregation)
        selector.asegurado = true
        //selector.tipo_paciente = 'Titular'
        return  selector
    }*/

  }),
  defaultSearchOptions: {
    limit: 10
  }
});
const Consultas = new Mongo.Collection('Consultas');
const Laboratorios = new Mongo.Collection('Laboratorios');
const LaboratoriosIndex = new Index({
  collection: Laboratorios,
  fields: ['nomb_gral', 'nomb_analisis'],
  engine: new MinimongoEngine({
    sort: () => {
      nomb_gral: 1;
    }
  }),
  defaultSearchOptions: {
    limit: 35
  }
});
const Internaciones = new Mongo.Collection('Internaciones');
const Quirofano = new Mongo.Collection('Quirofano');
const SignosVitales = new Mongo.Collection('SignosVitales');
const SalaPartos = new Mongo.Collection('SalaPartos');
const PlanCuentas = new Mongo.Collection('PlanCuentas');
const Comprobantes = new Mongo.Collection('Comprobantes');
const Mayores = new Mongo.Collection('Mayores');
const EstadosFinancieros = new Mongo.Collection('EstadosFinancieros');
const EstadoConta = new Mongo.Collection('EstadoConta');
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_cargos.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_cargos.js                                                     //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertCargo: () => insertCargo,
  updateCargo: () => updateCargo,
  updateCargoNroUs: () => updateCargoNroUs,
  removeCargo: () => removeCargo
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Cargos;
module.link("./collections.js", {
  Cargos(v) {
    Cargos = v;
  }

}, 3);
const insertCargo = new ValidatedMethod({
  name: 'cargo.insert',
  validate: new SimpleSchema({
    nombre_cargo: {
      type: String
    },
    descripcion_cargo: {
      type: String
    },
    nro_usuarios: {
      type: Number
    },
    color: {
      type: String
    }
  }).validator(),

  run({
    nombre_cargo,
    descripcion_cargo,
    nro_usuarios,
    color
  }) {
    return Cargos.insert({
      nombre_cargo: nombre_cargo,
      descripcion_cargo: descripcion_cargo,
      nro_usuarios: nro_usuarios,
      color: color
    });
  }

});
const updateCargo = new ValidatedMethod({
  name: 'cargo.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    nombre_cargo: {
      type: String
    },
    descripcion_cargo: {
      type: String
    },
    nro_usuarios: {
      type: Number
    },
    color: {
      type: String
    }
  }).validator(),

  run({
    id,
    nombre_cargo,
    descripcion_cargo,
    nro_usuarios,
    color
  }) {
    return Cargos.update({
      _id: id
    }, {
      $set: {
        nombre_cargo: nombre_cargo,
        descripcion_cargo: descripcion_cargo,
        nro_usuarios: nro_usuarios,
        color: color
      }
    });
  }

});
const updateCargoNroUs = new ValidatedMethod({
  name: 'cargo.updatenrous',
  validate: new SimpleSchema({
    nombre_cargo: {
      type: String
    },
    nro_usuarios: {
      type: Number
    }
  }).validator(),

  run({
    nombre_cargo,
    nro_usuarios
  }) {
    return Cargos.update({
      nombre_cargo: nombre_cargo
    }, {
      $set: {
        nro_usuarios: nro_usuarios
      }
    });
  }

});
const removeCargo = new ValidatedMethod({
  name: 'cargo.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Cargos.remove({
      _id: id
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_comprobantes.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_comprobantes.js                                               //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertComprobante: () => insertComprobante,
  insertEstadoConta: () => insertEstadoConta,
  updateEstadoConta: () => updateEstadoConta
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Comprobantes, EstadoConta;
module.link("./collections.js", {
  Comprobantes(v) {
    Comprobantes = v;
  },

  EstadoConta(v) {
    EstadoConta = v;
  }

}, 3);
const insertComprobante = new ValidatedMethod({
  name: 'comprobante.insert',
  validate: new SimpleSchema({
    nro: {
      type: Number
    },
    nro_comprobante: {
      type: String
    },
    tipo_comprobante: {
      type: String
    },
    dia: {
      type: String
    },
    mes: {
      type: String
    },
    año: {
      type: String
    },
    nro_cheque: {
      type: String
    },
    glosa: {
      type: String
    },
    cuentas: {
      type: [Object]
    },
    'cuentas.$.codigo_c': {
      type: String
    },
    //'cuentas.$.nombre_c': {type:String},
    'cuentas.$.debe': {
      type: String
    },
    'cuentas.$.haber': {
      type: String
    },
    total_debe: {
      type: String
    },
    total_haber: {
      type: String
    },
    fecha_reg: {
      type: Date
    }
  }).validator(),

  run({
    nro,
    nro_comprobante,
    tipo_comprobante,
    dia,
    mes,
    año,
    nro_cheque,
    glosa,
    cuentas,
    total_debe,
    total_haber,
    fecha_reg
  }) {
    return Comprobantes.insert({
      nro: nro,
      nro_comprobante: nro_comprobante,
      tipo_comprobante: tipo_comprobante,
      dia: dia,
      mes: mes,
      año: año,
      nro_cheque: nro_cheque,
      glosa: glosa,
      cuentas: cuentas,
      total_debe: total_debe,
      total_haber: total_haber,
      fecha_reg: fecha_reg
    });
  }

});
const insertEstadoConta = new ValidatedMethod({
  name: 'estadoconta.insert',
  validate: new SimpleSchema({
    abierto: {
      type: Boolean
    },
    cerrado: {
      type: Boolean
    },
    año: {
      type: String
    }
  }).validator(),

  run({
    abierto,
    cerrado,
    año
  }) {
    return EstadoConta.insert({
      abierto: abierto,
      cerrado: cerrado,
      año: año
    });
  }

});
const updateEstadoConta = new ValidatedMethod({
  name: 'estadoconta.update',
  validate: new SimpleSchema({
    año: {
      type: String
    },
    abierto: {
      type: Boolean
    },
    cerrado: {
      type: Boolean
    }
  }).validator(),

  run({
    año,
    abierto,
    cerrado
  }) {
    return EstadoConta.update({
      año: año
    }, {
      $set: {
        abierto: abierto,
        cerrado: cerrado
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_consultorio.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_consultorio.js                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertConsultorio: () => insertConsultorio,
  removeConsultorio: () => removeConsultorio,
  updateConsultorio: () => updateConsultorio,
  updateActivConsultorio: () => updateActivConsultorio
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Consultorios;
module.link("./collections.js", {
  Consultorios(v) {
    Consultorios = v;
  }

}, 3);
const insertConsultorio = new ValidatedMethod({
  name: 'consultorio.insert',
  validate: new SimpleSchema({
    imagen_cons: {
      type: String
    },
    nombre_cons: {
      type: String
    },
    codigo_cons: {
      type: String
    },
    descripcion_cons: {
      type: String
    },
    precio_aseg: {
      type: String
    },
    precio_part: {
      type: String
    },
    precio_aseg_recons: {
      type: String
    },
    precio_part_recons: {
      type: String
    },
    precio_aseg_emer: {
      type: String
    },
    precio_part_emer: {
      type: String
    },
    tiempo_consulta: {
      type: String
    },
    turnos: {
      type: Boolean
    },
    medico_cons: {
      type: [Object]
    },
    'medico_cons.$.medico': {
      type: String
    },
    sin_horario: {
      type: Boolean
    },
    hora_ing_am: {
      type: String
    },
    hora_sal_am: {
      type: String
    },
    hora_ing_pm: {
      type: String
    },
    hora_sal_pm: {
      type: String
    },
    hora_ing_nc: {
      type: String
    },
    hora_sal_nc: {
      type: String
    },
    lunes_am: {
      type: Boolean
    },
    martes_am: {
      type: Boolean
    },
    miercoles_am: {
      type: Boolean
    },
    jueves_am: {
      type: Boolean
    },
    viernes_am: {
      type: Boolean
    },
    sabado_am: {
      type: Boolean
    },
    lunes_pm: {
      type: Boolean
    },
    martes_pm: {
      type: Boolean
    },
    miercoles_pm: {
      type: Boolean
    },
    jueves_pm: {
      type: Boolean
    },
    viernes_pm: {
      type: Boolean
    },
    sabado_pm: {
      type: Boolean
    },
    lunes_nc: {
      type: Boolean
    },
    martes_nc: {
      type: Boolean
    },
    miercoles_nc: {
      type: Boolean
    },
    jueves_nc: {
      type: Boolean
    },
    viernes_nc: {
      type: Boolean
    },
    sabado_nc: {
      type: Boolean
    }
  }).validator(),

  run({
    imagen_cons,
    nombre_cons,
    codigo_cons,
    descripcion_cons,
    precio_aseg,
    precio_part,
    precio_aseg_recons,
    precio_part_recons,
    precio_aseg_emer,
    precio_part_emer,
    tiempo_consulta,
    turnos,
    medico_cons,
    sin_horario,
    hora_ing_am,
    hora_sal_am,
    hora_ing_pm,
    hora_sal_pm,
    hora_ing_nc,
    hora_sal_nc,
    lunes_am,
    martes_am,
    miercoles_am,
    jueves_am,
    viernes_am,
    sabado_am,
    lunes_pm,
    martes_pm,
    miercoles_pm,
    jueves_pm,
    viernes_pm,
    sabado_pm,
    lunes_nc,
    martes_nc,
    miercoles_nc,
    jueves_nc,
    viernes_nc,
    sabado_nc
  }) {
    return Consultorios.insert({
      imagen_cons: imagen_cons,
      nombre_cons: nombre_cons,
      codigo_cons: codigo_cons,
      descripcion_cons: descripcion_cons,
      precio_aseg: precio_aseg,
      precio_part: precio_part,
      precio_aseg_recons: precio_aseg_recons,
      precio_part_recons: precio_part_recons,
      precio_aseg_emer: precio_aseg_emer,
      precio_part_emer: precio_part_emer,
      tiempo_consulta: tiempo_consulta,
      turnos: turnos,
      activo: true,
      medico_cons: medico_cons,
      sin_horario: sin_horario,
      hora_ing_am: hora_ing_am,
      hora_sal_am: hora_sal_am,
      hora_ing_pm: hora_ing_pm,
      hora_sal_pm: hora_sal_pm,
      hora_ing_nc: hora_ing_nc,
      hora_sal_nc: hora_sal_nc,
      lunes_am: lunes_am,
      martes_am: martes_am,
      miercoles_am: miercoles_am,
      jueves_am: jueves_am,
      viernes_am: viernes_am,
      sabado_am: sabado_am,
      lunes_pm: lunes_pm,
      martes_pm: martes_pm,
      miercoles_pm: miercoles_pm,
      jueves_pm: jueves_pm,
      viernes_pm: viernes_pm,
      sabado_pm: sabado_pm,
      lunes_nc: lunes_nc,
      martes_nc: martes_nc,
      miercoles_nc: miercoles_nc,
      jueves_nc: jueves_nc,
      viernes_nc: viernes_nc,
      sabado_nc: sabado_nc
    });
  }

});
const removeConsultorio = new ValidatedMethod({
  name: 'remove.consultorio',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Consultorios.remove({
      _id: id
    });
  }

});
const updateConsultorio = new ValidatedMethod({
  name: 'consultorio.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    imagen_cons: {
      type: String
    },
    nombre_cons: {
      type: String
    },
    codigo_cons: {
      type: String
    },
    descripcion_cons: {
      type: String
    },
    precio_aseg: {
      type: String
    },
    precio_part: {
      type: String
    },
    precio_aseg_recons: {
      type: String
    },
    precio_part_recons: {
      type: String
    },
    precio_aseg_emer: {
      type: String
    },
    precio_part_emer: {
      type: String
    },
    tiempo_consulta: {
      type: String
    },
    turnos: {
      type: Boolean
    },
    medico_cons: {
      type: [Object]
    },
    'medico_cons.$.medico': {
      type: String
    },
    sin_horario: {
      type: Boolean
    },
    hora_ing_am: {
      type: String
    },
    hora_sal_am: {
      type: String
    },
    hora_ing_pm: {
      type: String
    },
    hora_sal_pm: {
      type: String
    },
    hora_ing_nc: {
      type: String
    },
    hora_sal_nc: {
      type: String
    },
    lunes_am: {
      type: Boolean
    },
    martes_am: {
      type: Boolean
    },
    miercoles_am: {
      type: Boolean
    },
    jueves_am: {
      type: Boolean
    },
    viernes_am: {
      type: Boolean
    },
    sabado_am: {
      type: Boolean
    },
    lunes_pm: {
      type: Boolean
    },
    martes_pm: {
      type: Boolean
    },
    miercoles_pm: {
      type: Boolean
    },
    jueves_pm: {
      type: Boolean
    },
    viernes_pm: {
      type: Boolean
    },
    sabado_pm: {
      type: Boolean
    },
    lunes_nc: {
      type: Boolean
    },
    martes_nc: {
      type: Boolean
    },
    miercoles_nc: {
      type: Boolean
    },
    jueves_nc: {
      type: Boolean
    },
    viernes_nc: {
      type: Boolean
    },
    sabado_nc: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    imagen_cons,
    nombre_cons,
    codigo_cons,
    descripcion_cons,
    precio_aseg,
    precio_part,
    precio_aseg_recons,
    precio_part_recons,
    precio_aseg_emer,
    precio_part_emer,
    tiempo_consulta,
    turnos,
    medico_cons,
    sin_horario,
    hora_ing_am,
    hora_sal_am,
    hora_ing_pm,
    hora_sal_pm,
    hora_ing_nc,
    hora_sal_nc,
    lunes_am,
    martes_am,
    miercoles_am,
    jueves_am,
    viernes_am,
    sabado_am,
    lunes_pm,
    martes_pm,
    miercoles_pm,
    jueves_pm,
    viernes_pm,
    sabado_pm,
    lunes_nc,
    martes_nc,
    miercoles_nc,
    jueves_nc,
    viernes_nc,
    sabado_nc
  }) {
    return Consultorios.update({
      _id: id
    }, {
      $set: {
        imagen_cons: imagen_cons,
        nombre_cons: nombre_cons,
        codigo_cons: codigo_cons,
        descripcion_cons: descripcion_cons,
        precio_aseg: precio_aseg,
        precio_part: precio_part,
        precio_aseg_recons: precio_aseg_recons,
        precio_part_recons: precio_part_recons,
        precio_aseg_emer: precio_aseg_emer,
        precio_part_emer: precio_part_emer,
        tiempo_consulta: tiempo_consulta,
        turnos: turnos,
        medico_cons: medico_cons,
        sin_horario: sin_horario,
        hora_ing_am: hora_ing_am,
        hora_sal_am: hora_sal_am,
        hora_ing_pm: hora_ing_pm,
        hora_sal_pm: hora_sal_pm,
        hora_ing_nc: hora_ing_nc,
        hora_sal_nc: hora_sal_nc,
        lunes_am: lunes_am,
        martes_am: martes_am,
        miercoles_am: miercoles_am,
        jueves_am: jueves_am,
        viernes_am: viernes_am,
        sabado_am: sabado_am,
        lunes_pm: lunes_pm,
        martes_pm: martes_pm,
        miercoles_pm: miercoles_pm,
        jueves_pm: jueves_pm,
        viernes_pm: viernes_pm,
        sabado_pm: sabado_pm,
        lunes_nc: lunes_nc,
        martes_nc: martes_nc,
        miercoles_nc: miercoles_nc,
        jueves_nc: jueves_nc,
        viernes_nc: viernes_nc,
        sabado_nc: sabado_nc
      }
    });
  }

});
const updateActivConsultorio = new ValidatedMethod({
  name: 'activconsultorio.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    activo: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    activo
  }) {
    return Consultorios.update({
      _id: id
    }, {
      $set: {
        activo: activo
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_empresas.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_empresas.js                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertEmpresa: () => insertEmpresa,
  updateEmpresa: () => updateEmpresa,
  removeEmpresa: () => removeEmpresa
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Empresas;
module.link("./collections.js", {
  Empresas(v) {
    Empresas = v;
  }

}, 3);
const insertEmpresa = new ValidatedMethod({
  name: 'empresa.insert',
  validate: new SimpleSchema({
    nit: {
      type: String
    },
    nombre_empresa: {
      type: String
    },
    logo: {
      type: String
    },
    registrado_por: {
      type: String
    },
    fecha_reg: {
      type: Date
    }
  }).validator(),

  run({
    nit,
    nombre_empresa,
    logo,
    registrado_por,
    fecha_reg
  }) {
    return Empresas.insert({
      nit: nit,
      nombre_empresa: nombre_empresa,
      logo: logo,
      registrado_por: registrado_por,
      fecha_reg: fecha_reg
    });
  }

});
const updateEmpresa = new ValidatedMethod({
  name: 'empresa.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    nit: {
      type: String
    },
    nombre_empresa: {
      type: String
    },
    logo: {
      type: String
    }
  }).validator(),

  run({
    id,
    nit,
    nombre_empresa,
    logo
  }) {
    return Empresas.update({
      _id: id
    }, {
      $set: {
        nit: nit,
        nombre_empresa: nombre_empresa,
        logo: logo
      }
    });
  }

});
const removeEmpresa = new ValidatedMethod({
  name: 'empresa.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Empresas.remove({
      _id: id
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_estados_financieros.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_estados_financieros.js                                        //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertEstadoFinanciero: () => insertEstadoFinanciero,
  updateEstadoFinanciero: () => updateEstadoFinanciero,
  removeEstadoFinanciero: () => removeEstadoFinanciero
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let EstadosFinancieros;
module.link("./collections.js", {
  EstadosFinancieros(v) {
    EstadosFinancieros = v;
  }

}, 3);
const insertEstadoFinanciero = new ValidatedMethod({
  name: 'estadofinanciero.insert',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    tipo: {
      type: String
    },
    nivel: {
      type: String
    },
    gestion: {
      type: String
    },
    saldo: {
      type: String
    }
  }).validator(),

  run({
    codigo_cuenta,
    tipo,
    nivel,
    gestion,
    saldo
  }) {
    return EstadosFinancieros.insert({
      codigo_cuenta: codigo_cuenta,
      tipo: tipo,
      nivel: nivel,
      gestion: gestion,
      saldo: saldo
    });
  }

});
const updateEstadoFinanciero = new ValidatedMethod({
  name: 'estadofinanciero.update',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    gestion: {
      type: String
    },
    saldo: {
      type: String
    }
  }).validator(),

  run({
    codigo_cuenta,
    gestion,
    saldo
  }) {
    return EstadosFinancieros.update({
      codigo_cuenta: codigo_cuenta,
      gestion: gestion
    }, {
      $set: {
        saldo: saldo
      }
    });
  }

});
const removeEstadoFinanciero = new ValidatedMethod({
  name: 'estadofinanciero.remove',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    }
  }).validator(),

  run({
    codigo_cuenta
  }) {
    return EstadosFinancieros.remove({
      codigo_cuenta: codigo_cuenta
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_fichas.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_fichas.js                                                     //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertFicha: () => insertFicha,
  ventaFicha: () => ventaFicha,
  updateEstadoFicha: () => updateEstadoFicha,
  updateMedFicha: () => updateMedFicha,
  updateEstadoFichaMed: () => updateEstadoFichaMed,
  updateHistLlenaFichaMed: () => updateHistLlenaFichaMed,
  updateElimFicha: () => updateElimFicha,
  insertReporteFicha: () => insertReporteFicha,
  updateReporteFicha: () => updateReporteFicha,
  insertFichaFarmacia: () => insertFichaFarmacia,
  updateElimFichaFarm: () => updateElimFichaFarm,
  updateFichaFarmacia: () => updateFichaFarmacia,
  updateEstadoFichaEnf: () => updateEstadoFichaEnf,
  updateFinConsFichaEnf: () => updateFinConsFichaEnf,
  updatePrecioFichaEnf: () => updatePrecioFichaEnf,
  insertDetalleFicha: () => insertDetalleFicha,
  updatePrecioDetalleFicha: () => updatePrecioDetalleFicha,
  removeDetalleFicha: () => removeDetalleFicha,
  removeAllDetalleFicha: () => removeAllDetalleFicha,
  insertFichaInternacion: () => insertFichaInternacion,
  updatePrecioFichaInternacion: () => updatePrecioFichaInternacion,
  updateReporteFichaInternacion: () => updateReporteFichaInternacion,
  removeFichaInternacion: () => removeFichaInternacion
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Fichas, FichasEnfermeria, ReporteFichas, FichaInternacion, DetalleFicha;
module.link("./collections.js", {
  Fichas(v) {
    Fichas = v;
  },

  FichasEnfermeria(v) {
    FichasEnfermeria = v;
  },

  ReporteFichas(v) {
    ReporteFichas = v;
  },

  FichaInternacion(v) {
    FichaInternacion = v;
  },

  DetalleFicha(v) {
    DetalleFicha = v;
  }

}, 3);
const insertFicha = new ValidatedMethod({
  name: 'ficha.insert',
  validate: new SimpleSchema({
    nro: {
      type: String
    },
    hora_cons: {
      type: String
    },
    consultorio: {
      type: String
    },
    medico: {
      type: String,
      optional: true
    },
    estado: {
      type: String
    },
    tipo: {
      type: String
    },
    fecha_cons: {
      type: String
    },
    turno: {
      type: String,
      optional: true
    },
    precio: {
      type: String
    },
    paciente: {
      type: String
    },
    asegurado: {
      type: Boolean,
      optional: true
    },
    empleador: {
      type: String,
      optional: true
    },
    tipo_consulta: {
      type: String,
      optional: true
    },
    por: {
      type: String,
      optional: true
    },
    en_fech: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    nro,
    hora_cons,
    consultorio,
    medico,
    estado,
    tipo,
    fecha_cons,
    turno,
    precio,
    paciente,
    asegurado,
    empleador,
    tipo_consulta,
    por,
    en_fech
  }) {
    /*console.log(fecha_cons.substr(0,2));
    console.log(fecha_cons.substr(3,2));
    console.log(fecha_cons.substr(6,4));*/
    return Fichas.insert({
      nro: nro,
      hora_cons: hora_cons,
      consultorio: consultorio,
      medico: medico,
      estado: estado,
      tipo: tipo,
      fecha_cons: fecha_cons,
      dia: fecha_cons.substr(0, 2),
      mes: fecha_cons.substr(3, 2),
      año: fecha_cons.substr(6, 4),
      turno: turno,
      precio: precio,
      paciente: paciente,
      asegurado: asegurado,
      empleador: empleador,
      tipo_consulta: tipo_consulta,
      por: por,
      en_fech: new Date(),
      reportado: false,
      historia_llena: false
    });
  }

});
const ventaFicha = new ValidatedMethod({
  name: 'ficha.venta',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    estado: {
      type: String
    },
    precio: {
      type: String
    },
    paciente: {
      type: String
    },
    asegurado: {
      type: Boolean,
      optional: true
    },
    empleador: {
      type: String,
      optional: true
    },
    tipo_consulta: {
      type: String,
      optional: true
    },
    por: {
      type: String,
      optional: true
    },
    en_fech: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    id,
    estado,
    precio,
    paciente,
    asegurado,
    empleador,
    tipo_consulta,
    por,
    en_fech
  }) {
    return Fichas.update({
      _id: id
    }, {
      $set: {
        estado: estado,
        precio: precio,
        paciente: paciente,
        asegurado: asegurado,
        empleador: empleador,
        tipo_consulta: tipo_consulta,
        por: por,
        en_fech: new Date(),
        reportado: false,
        historia_llena: false
      }
    });
  }

});
const updateEstadoFicha = new ValidatedMethod({
  name: 'estadoficha.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    medico: {
      type: String,
      optional: true
    },
    estado: {
      type: String
    },
    precio: {
      type: String
    },
    tipo_consulta: {
      type: String,
      optional: true
    },
    por: {
      type: String,
      optional: true
    },
    en_fech: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    id,
    medico,
    estado,
    precio,
    tipo_consulta,
    por,
    en_fech
  }) {
    return Fichas.update({
      _id: id
    }, {
      $set: {
        medico: medico,
        estado: estado,
        precio: precio,
        tipo_consulta: tipo_consulta,
        por: por,
        en_fech: new Date(),
        reportado: false
      }
    });
  }

});
const updateMedFicha = new ValidatedMethod({
  name: 'medficha.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    medico: {
      type: String
    },
    precio: {
      type: String
    },
    tipo_consulta: {
      type: String
    }
  }).validator(),

  run({
    id,
    medico,
    precio,
    tipo_consulta
  }) {
    return Fichas.update({
      _id: id
    }, {
      $set: {
        medico: medico,
        precio: precio,
        tipo_consulta: tipo_consulta
      }
    });
  }

});
const updateEstadoFichaMed = new ValidatedMethod({
  name: 'estadofichamed.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    estado: {
      type: String
    }
  }).validator(),

  run({
    id,
    estado
  }) {
    return Fichas.update({
      _id: id
    }, {
      $set: {
        estado: estado //por: por,

      }
    });
  }

});
const updateHistLlenaFichaMed = new ValidatedMethod({
  name: 'histllenafichamed.update',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Fichas.update({
      _id: id
    }, {
      $set: {
        historia_llena: true
      }
    });
  }

});
const updateElimFicha = new ValidatedMethod({
  name: 'elimficha.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    estado: {
      type: String
    }
  }).validator(),

  run({
    id,
    estado
  }) {
    return Fichas.update({
      _id: id
    }, {
      $set: {
        tipo_consulta: '',
        estado: estado,
        precio: '0.00',
        paciente: estado,
        reportado: false
      }
    });
  }

});
const insertReporteFicha = new ValidatedMethod({
  name: 'reporteficha.insert',
  validate: new SimpleSchema({
    codigo_reporte: {
      type: String
    },
    fecha_reporte: {
      type: String
    },
    hora_reporte: {
      type: String
    },
    reporte_enviado: {
      type: Boolean
    },
    us_env: {
      type: String
    },
    total: {
      type: String
    },
    reporte_recibido: {
      type: Boolean
    },
    dia_rec: {
      type: String
    },
    mes_rec: {
      type: String
    },
    año_rec: {
      type: String
    },
    //fecha_recibido: {type: String},
    hora_recibido: {
      type: String
    },
    us_rec: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    codigo_reporte,
    fecha_reporte,
    hora_reporte,
    reporte_enviado,
    us_env,
    total,
    reporte_recibido,
    dia_rec,
    mes_rec,
    año_rec,
    //fecha_recibido,
    hora_recibido,
    us_rec
  }) {
    return [ReporteFichas.insert({
      codigo_reporte: codigo_reporte,
      fecha_reporte: fecha_reporte,
      dia_env: fecha_reporte.substr(0, 2),
      mes_env: fecha_reporte.substr(3, 2),
      año_env: fecha_reporte.substr(6, 4),
      hora_reporte: hora_reporte,
      reporte_enviado: reporte_enviado,
      us_env: us_env,
      total: total,
      reporte_recibido: reporte_recibido,
      fecha_recibido: '',
      dia_rec: dia_rec,
      mes_rec: mes_rec,
      año_rec: año_rec,
      //fecha_recibido: fecha_recibido,
      hora_recibido: hora_recibido,
      us_rec: us_rec,
      fecha_reg: new Date()
    }), Fichas.update({
      por: us_env,
      reportado: false,
      $and: [{
        estado: {
          $ne: 'Libre'
        }
      }, {
        estado: {
          $ne: 'Reservado'
        }
      }, {
        estado: {
          $ne: 'Eliminado'
        }
      }]
    }, {
      $set: {
        reportado: true,
        codigo_reporte: codigo_reporte
      }
    }, {
      multi: true
    }), FichasEnfermeria.update({
      por: us_env,
      reportado: false,
      //fin_consulta: true,
      pagado: true,
      $and: [{
        estado: {
          $ne: 'Eliminado'
        }
      }]
    }, {
      $set: {
        reportado: true,
        codigo_reporte: codigo_reporte
      }
    }, {
      multi: true
    })];
  }

});
const updateReporteFicha = new ValidatedMethod({
  name: 'reporteficha.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    reporte_recibido: {
      type: Boolean
    },
    dia_rec: {
      type: String
    },
    mes_rec: {
      type: String
    },
    año_rec: {
      type: String
    },
    //fecha_recibido: {type: String},
    hora_recibido: {
      type: String
    },
    us_rec: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    id,
    reporte_recibido,
    dia_rec,
    mes_rec,
    año_rec,
    //fecha_recibido,
    hora_recibido,
    us_rec
  }) {
    return ReporteFichas.update({
      _id: id
    }, {
      $set: {
        reporte_recibido: reporte_recibido,
        dia_rec: dia_rec,
        mes_rec: mes_rec,
        año_rec: año_rec,
        fecha_recibido: dia_rec + '/' + mes_rec + '/' + año_rec,
        hora_recibido: hora_recibido,
        us_rec: us_rec
      }
    });
  }

});
const insertFichaFarmacia = new ValidatedMethod({
  name: 'fichafarmacia.insert',
  validate: new SimpleSchema({
    nro: {
      type: String
    },
    hora_cons: {
      type: String
    },
    consultorio: {
      type: String
    },
    //medico: {type: String, optional: true},
    estado: {
      type: String
    },
    //tipo: {type: String},
    fecha_cons: {
      type: String
    },
    //turno: {type: String, optional: true},
    precio: {
      type: String
    },
    paciente: {
      type: String
    },
    asegurado: {
      type: Boolean,
      optional: true
    },
    empleador: {
      type: String
    },
    diagnostico: {
      type: [String]
    },

    /*detalle_diag: {type: [Object]},
    'detalle_diag.$.nombre_diag': {type:String},
    'detalle_diag.$.precio_diag': {type: String},
    'detalle_diag.$.pagado_diag': {type: Boolean},*/

    /*inyectable_iv: {type: String, optional: true},
    pago_iny_iv: {type: String, optional: true},
      inyectable_im: {type: String, optional: true},
    pago_iny_im: {type: String, optional: true},
      curaciones: {type: String, optional: true},
    pago_curaciones: {type: String, optional: true},
      sueros: {type: String, optional: true},
    pago_sueros: {type: String, optional: true},
      suturas: {type: String, optional: true},
    pago_suturas: {type: String, optional: true},
      oxigeno: {type: String, optional: true},
    pago_oxigeno: {type: String, optional: true},
      uñero: {type: String, optional: true},
    pago_uñero: {type: String, optional: true},
      enema: {type: String, optional: true},
    pago_enema: {type: String, optional: true},
      p_art: {type: String, optional: true},
    pago_p_art: {type: String, optional: true},
      sonda: {type: String, optional: true},
    pago_sonda: {type: String, optional: true},
      otros: {type: String, optional: true},
    pago_otros: {type: String, optional: true},*/

    /*cuentas: {type: [Object]},
    'cuentas.$.codigo_c': {type:String},
    'cuentas.$.debe': {type: String},
    'cuentas.$.haber': {type: String},*/
    tipo_consulta: {
      type: String,
      optional: true
    },
    por: {
      type: String,
      optional: true
    },
    en_fech: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    nro,
    hora_cons,
    consultorio,
    //medico,
    estado,
    //tipo,
    fecha_cons,
    //turno,
    precio,
    paciente,
    asegurado,
    empleador,
    diagnostico,
    tipo_consulta,
    por,
    en_fech
  }) {
    return FichasEnfermeria.insert({
      nro: nro,
      hora_cons: hora_cons,
      consultorio: consultorio,
      //medico: medico,
      estado: estado,
      fin_consulta: false,
      //tipo: tipo,
      fecha_cons: fecha_cons,
      dia: fecha_cons.substr(0, 2),
      mes: fecha_cons.substr(3, 2),
      año: fecha_cons.substr(6, 4),
      //turno: turno,
      precio: precio,
      pagado: false,
      paciente: paciente,
      asegurado: asegurado,
      empleador: empleador,
      diagnostico: diagnostico,
      tipo_consulta: tipo_consulta,
      por: por,
      en_fech: new Date(),
      reportado: false
    });
  }

});
const updateElimFichaFarm = new ValidatedMethod({
  name: 'elimfichafarm.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    estado: {
      type: String
    }
  }).validator(),

  run({
    id,
    estado
  }) {
    return FichasEnfermeria.update({
      _id: id
    }, {
      $set: {
        tipo_consulta: '',
        estado: estado,
        diagnostico: [],
        precio: '0.00',
        paciente: estado,
        reportado: false
      }
    });
  }

});
const updateFichaFarmacia = new ValidatedMethod({
  name: 'fichafarmacia.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    diagnostico: {
      type: [String]
    },
    tipo_consulta: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    id,
    diagnostico,
    tipo_consulta
  }) {
    return FichasEnfermeria.update({
      _id: id
    }, {
      $set: {
        diagnostico: diagnostico,
        tipo_consulta: tipo_consulta,
        precio: '0.00',
        pagado: false
      }
    });
  }

});
const updateEstadoFichaEnf = new ValidatedMethod({
  name: 'estadofichaenf.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    estado: {
      type: String
    }
  }).validator(),

  run({
    id,
    estado
  }) {
    return FichasEnfermeria.update({
      _id: id
    }, {
      $set: {
        estado: estado
      }
    });
  }

});
const updateFinConsFichaEnf = new ValidatedMethod({
  name: 'finconsfichaenf.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    fin_consulta: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    fin_consulta
  }) {
    return FichasEnfermeria.update({
      _id: id
    }, {
      $set: {
        fin_consulta: fin_consulta
      }
    });
  }

});
const updatePrecioFichaEnf = new ValidatedMethod({
  name: 'preciofichaenf.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    precio: {
      type: String
    }
  }).validator(),

  run({
    id,
    precio
  }) {
    return FichasEnfermeria.update({
      _id: id
    }, {
      $set: {
        precio: precio,
        pagado: true
      }
    });
  }

});
const insertDetalleFicha = new ValidatedMethod({
  name: 'detalleficha.insert',
  validate: new SimpleSchema({
    id_ficha: {
      type: String
    },
    nombre_diag: {
      type: String
    },
    precio_diag: {
      type: String
    },
    pagado_diag: {
      type: Boolean
    },
    fecha_cons: {
      type: String
    }
  }).validator(),

  run({
    id_ficha,
    nombre_diag,
    precio_diag,
    pagado_diag,
    fecha_cons
  }) {
    return DetalleFicha.insert({
      id_ficha: id_ficha,
      nombre_diag: nombre_diag,
      precio_diag: precio_diag,
      pagado_diag: pagado_diag,
      fecha_cons: fecha_cons,
      dia: fecha_cons.substr(0, 2),
      mes: fecha_cons.substr(3, 2),
      año: fecha_cons.substr(6, 4),
      fecha_reg: new Date()
    });
  }

});
const updatePrecioDetalleFicha = new ValidatedMethod({
  name: 'preciodetalleficha.update',
  validate: new SimpleSchema({
    id_ficha: {
      type: String
    },
    nombre_diag: {
      type: String
    },
    precio_diag: {
      type: String
    },
    pagado_diag: {
      type: Boolean
    }
  }).validator(),

  run({
    id_ficha,
    nombre_diag,
    precio_diag,
    pagado_diag
  }) {
    return DetalleFicha.update({
      id_ficha: id_ficha,
      nombre_diag: nombre_diag
    }, {
      $set: {
        precio_diag: precio_diag,
        pagado_diag: pagado_diag
      }
    });
  }

});
const removeDetalleFicha = new ValidatedMethod({
  name: 'detalleficha.remove',
  validate: new SimpleSchema({
    id_ficha: {
      type: String
    },
    nombre_diag: {
      type: String
    }
  }).validator(),

  run({
    id_ficha,
    nombre_diag
  }) {
    return DetalleFicha.remove({
      id_ficha: id_ficha,
      nombre_diag: nombre_diag
    });
  }

});
const removeAllDetalleFicha = new ValidatedMethod({
  name: 'detallefichaall.remove',
  validate: new SimpleSchema({
    id_ficha: {
      type: String
    }
  }).validator(),

  run({
    id_ficha
  }) {
    return DetalleFicha.remove({
      id_ficha: id_ficha
    });
  }

});
const insertFichaInternacion = new ValidatedMethod({
  name: 'fichainternacion.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    id_paciente: {
      type: String
    },
    id_servicio: {
      type: String
    },
    servicio: {
      type: String
    },
    detalle: {
      type: String
    },
    dia: {
      type: String
    },
    mes: {
      type: String
    },
    año: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    id_paciente,
    id_servicio,
    servicio,
    detalle,
    dia,
    mes,
    año
  }) {
    return FichaInternacion.insert({
      codigo_internacion: codigo_internacion,
      id_paciente: id_paciente,
      id_servicio: id_servicio,
      servicio: servicio,
      detalle: detalle,
      dia: dia,
      mes: mes,
      año: año,
      monto: '0.00',
      pagado: false,
      fecha_reg: new Date()
    });
  }

});
const updatePrecioFichaInternacion = new ValidatedMethod({
  name: 'preciofichainternacion.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    monto: {
      type: String
    },
    factura: {
      type: String
    }
  }).validator(),

  run({
    id,
    monto,
    factura
  }) {
    return FichaInternacion.update({
      _id: id
    }, {
      $set: {
        monto: monto,
        factura: factura,
        pagado: true
      }
    });
  }

});
const updateReporteFichaInternacion = new ValidatedMethod({
  name: 'reportefichainternacion.update',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    por: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    por
  }) {
    return FichaInternacion.update({
      codigo_internacion: codigo_internacion
    }, {
      $set: {
        por: por,
        reportado: false
      }
    }, {
      multi: true
    });
  }

});
const removeFichaInternacion = new ValidatedMethod({
  name: 'fichainternacion.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return FichaInternacion.remove({
      _id: id
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_historiales.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_historiales.js                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  createHistorial: () => createHistorial,
  updateHistorial: () => updateHistorial,
  insertConsulta: () => insertConsulta,
  insertReceta: () => insertReceta,
  insertDiagnostico: () => insertDiagnostico,
  insertConsultaEnfermeria: () => insertConsultaEnfermeria,
  insertInternacionPaciente: () => insertInternacionPaciente,
  insertEvolucionPaciente: () => insertEvolucionPaciente,
  insertIndicacionMedica: () => insertIndicacionMedica,
  insertIndicacionEnfermeria: () => insertIndicacionEnfermeria,
  insertEpicrisisMedica: () => insertEpicrisisMedica,
  insertCirugiaMedica: () => insertCirugiaMedica,
  insertInternacion: () => insertInternacion,
  updateAdmisionInternacion: () => updateAdmisionInternacion,
  updateAltaMedicaInternacion: () => updateAltaMedicaInternacion,
  updateAltaEnfermeriaInternacion: () => updateAltaEnfermeriaInternacion,
  updatePagoEnfermeriaInternacion: () => updatePagoEnfermeriaInternacion,
  updateReportadoInternacion: () => updateReportadoInternacion,
  insertQuirofano: () => insertQuirofano,
  updateEditQuirofano: () => updateEditQuirofano,
  updateQuirofano: () => updateQuirofano,
  removeQuirofano: () => removeQuirofano,
  insertSignosVitales: () => insertSignosVitales,
  insertPartos: () => insertPartos
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Historiales, Consultas, Internaciones, Quirofano, Diagnostico, SignosVitales, SalaPartos;
module.link("./collections.js", {
  Historiales(v) {
    Historiales = v;
  },

  Consultas(v) {
    Consultas = v;
  },

  Internaciones(v) {
    Internaciones = v;
  },

  Quirofano(v) {
    Quirofano = v;
  },

  Diagnostico(v) {
    Diagnostico = v;
  },

  SignosVitales(v) {
    SignosVitales = v;
  },

  SalaPartos(v) {
    SalaPartos = v;
  }

}, 3);
const createHistorial = new ValidatedMethod({
  name: 'historial.create',
  validate: new SimpleSchema({
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    //fecha_creacion: {type: Date},
    reg_por: {
      type: String
    }
  }).validator(),

  run({
    codigo_h,
    id_paciente,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    //fecha_creacion,
    reg_por
  }) {
    return Historiales.insert({
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      ci: ci,
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      fecha_creacion: new Date(),
      //fecha_creacion,
      reg_por: reg_por
    });
  }

});
const updateHistorial = new ValidatedMethod({
  name: 'historial.update',
  validate: new SimpleSchema({
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    }
  }).validator(),

  run({
    codigo_h,
    id_paciente,
    ci,
    nombre,
    ap_paterno,
    ap_materno
  }) {
    return Historiales.update({
      codigo_h: codigo_h,
      id_paciente: id_paciente
    }, {
      $set: {
        ci: ci,
        nombre: nombre,
        ap_paterno: ap_paterno,
        ap_materno: ap_materno
      }
    });
  }

});
const insertConsulta = new ValidatedMethod({
  name: 'consulta.insert',
  validate: new SimpleSchema({
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    edad: {
      type: Number
    },
    tipo_edad: {
      type: String
    },
    domicilio: {
      type: String
    },
    ocupacion: {
      type: String
    },
    ficha_id: {
      type: String
    },
    nro_ficha: {
      type: String
    },
    fecha_consulta: {
      type: String
    },
    hora_consulta: {
      type: String
    },
    consultorio: {
      type: String
    },
    medico: {
      type: String
    },
    tipo_consulta: {
      type: String
    },
    pre_art: {
      type: Number
    },
    frec_card: {
      type: Number
    },
    frec_resp: {
      type: Number
    },
    temperatura: {
      type: Number
    },
    gestas: {
      type: Number
    },
    para: {
      type: Number
    },
    abortos: {
      type: Number
    },
    cesareas: {
      type: Number
    },
    fum: {
      type: String
    },
    motivo_consulta: {
      type: String
    },
    enfermedad_actual: {
      type: String
    },
    ant_patologicos: {
      type: String
    },
    examen_fisico: {
      type: String
    },
    diagnostico: {
      type: String
    },

    /*diagnostico: {type: [Object]},
    'diagnostico.$.nom_diagnostico': {type: String},*/
    tratamiento: {
      type: [Object]
    },
    'tratamiento.$.medicamento': {
      type: String
    },
    'tratamiento.$.cantidad': {
      type: String
    },
    'tratamiento.$.uso': {
      type: String
    },
    est_solicitados: {
      type: String
    },
    recomendaciones: {
      type: String
    }
  }).validator(),

  run({
    codigo_h,
    id_paciente,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    asegurado,
    edad,
    tipo_edad,
    domicilio,
    ocupacion,
    ficha_id,
    nro_ficha,
    fecha_consulta,
    hora_consulta,
    consultorio,
    medico,
    tipo_consulta,
    pre_art,
    frec_card,
    frec_resp,
    temperatura,
    gestas,
    para,
    abortos,
    cesareas,
    fum,
    motivo_consulta,
    enfermedad_actual,
    ant_patologicos,
    examen_fisico,
    diagnostico,
    tratamiento,
    est_solicitados,
    recomendaciones
  }) {
    return Consultas.insert({
      ambulatorio: true,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      ci: ci,
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      sexo: sexo,
      asegurado: asegurado,
      edad: edad,
      tipo_edad: tipo_edad,
      domicilio: domicilio,
      ocupacion: ocupacion,
      ficha_id: ficha_id,
      nro_ficha: nro_ficha,
      fecha_consulta: fecha_consulta,
      dia: fecha_consulta.substr(0, 2),
      mes: fecha_consulta.substr(3, 2),
      año: fecha_consulta.substr(6, 4),
      hora_consulta: hora_consulta,
      consultorio: consultorio,
      medico: medico,
      tipo_consulta: tipo_consulta,
      pre_art: pre_art,
      frec_card: frec_card,
      frec_resp: frec_resp,
      temperatura: temperatura,
      gestas: gestas,
      para: para,
      abortos: abortos,
      cesareas: cesareas,
      fum: fum,
      motivo_consulta: motivo_consulta,
      enfermedad_actual: enfermedad_actual,
      ant_patologicos: ant_patologicos,
      examen_fisico: examen_fisico,
      diagnostico: diagnostico,
      tratamiento: tratamiento,
      est_solicitados: est_solicitados,
      recomendaciones: recomendaciones,
      fecha_reg: new Date()
    });
  }

});
const insertReceta = new ValidatedMethod({
  name: 'receta.insert',
  validate: new SimpleSchema({
    ficha_id: {
      type: String
    },
    medicamento: {
      type: String
    },
    cantidad: {
      type: String
    },
    uso: {
      type: String
    }
  }).validator(),

  run({
    ficha_id,
    medicamento,
    cantidad,
    uso
  }) {
    return Consultas.update({
      ficha_id: ficha_id
    }, {
      $push: {
        tratamiento: {
          medicamento: medicamento,
          cantidad: cantidad,
          uso: uso
        }
      }
    });
  }

});
const insertDiagnostico = new ValidatedMethod({
  name: 'diagnostico.insert',
  validate: new SimpleSchema({
    nombre_diag: {
      type: String
    }
  }).validator(),

  run({
    nombre_diag
  }) {
    return Diagnostico.insert({
      nombre_diag: nombre_diag
    });
  }

});
const insertConsultaEnfermeria = new ValidatedMethod({
  name: 'consultaenfermeria.insert',
  validate: new SimpleSchema({
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    sexo: {
      type: String
    },
    edad: {
      type: String
    },
    nro_ficha: {
      type: String
    },
    fecha_consulta: {
      type: String
    },
    hora_consulta: {
      type: String
    },
    consultorio: {
      type: String
    },
    tipo_consulta: {
      type: String
    },
    diagnostico: {
      type: [String]
    },
    otro: {
      type: String
    },
    administracion: {
      type: String
    },
    via: {
      type: String
    },
    medicamento: {
      type: String
    },
    medico: {
      type: String
    },
    enfermera: {
      type: String
    }
  }).validator(),

  run({
    codigo_h,
    id_paciente,
    ci,
    nombre,
    sexo,
    edad,
    nro_ficha,
    fecha_consulta,
    hora_consulta,
    consultorio,
    tipo_consulta,
    diagnostico,
    otro,
    administracion,
    via,
    medicamento,
    medico,
    enfermera
  }) {
    return Consultas.insert({
      ambulatorio_enf: true,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      ci: ci,
      nombre: nombre,
      sexo: sexo,
      edad: edad,
      nro_ficha: nro_ficha,
      fecha_consulta: fecha_consulta,
      hora_consulta: hora_consulta,
      consultorio: consultorio,
      tipo_consulta: tipo_consulta,
      diagnostico: diagnostico,
      otro: otro,
      administracion: administracion,
      via: via,
      medicamento: medicamento,
      medico: medico,
      enfermera: enfermera,
      dia: fecha_consulta.substr(0, 2),
      mes: fecha_consulta.substr(3, 2),
      año: fecha_consulta.substr(6, 4),
      fecha_reg: new Date()
    });
  }

});
const insertInternacionPaciente = new ValidatedMethod({
  name: 'internacionPaciente.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    edad: {
      type: Number
    },
    tipo_edad: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    tipo_sala: {
      type: String
    },
    sala: {
      type: String
    },
    cama: {
      type: String
    },
    fecha_ing: {
      type: String
    },
    hora_ing: {
      type: String
    },
    servicio: {
      type: String
    },
    medico: {
      type: String
    },
    pre_art: {
      type: Number
    },
    frec_card: {
      type: Number
    },
    frec_resp: {
      type: Number
    },
    temperatura: {
      type: Number
    },
    gestas: {
      type: Number
    },
    para: {
      type: Number
    },
    abortos: {
      type: Number
    },
    cesareas: {
      type: Number
    },
    fum: {
      type: String
    },
    motivo_consulta: {
      type: String
    },
    ant_patologicos: {
      type: String
    },
    examen_fisico: {
      type: String
    },
    piel_mucosas: {
      type: String
    },
    glasgow: {
      type: String
    },
    cabeza: {
      type: String
    },
    cuello: {
      type: String
    },
    torax: {
      type: String
    },
    abdomen: {
      type: String
    },
    extremidades: {
      type: String
    },
    diagnostico: {
      type: String
    },

    /*diagnostico: {type: [Object]},
    'diagnostico.$.nom_diagnostico': {type: String},*/

    /*tratamiento: {type: [Object]},
    'tratamiento.$.medicamento': {type: String},
    'tratamiento.$.cantidad': {type: String},
    'tratamiento.$.uso': {type: String},
    plan: {type: String},*/
    conducta: {
      type: String
    } //est_solicitados: {type: String},

  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    edad,
    tipo_edad,
    asegurado,
    tipo_sala,
    sala,
    cama,
    fecha_ing,
    hora_ing,
    servicio,
    medico,
    pre_art,
    frec_card,
    frec_resp,
    temperatura,
    gestas,
    para,
    abortos,
    cesareas,
    fum,
    motivo_consulta,
    ant_patologicos,
    examen_fisico,
    piel_mucosas,
    glasgow,
    cabeza,
    cuello,
    torax,
    abdomen,
    extremidades,
    diagnostico,

    /*tratamiento,
    plan,*/
    conducta //est_solicitados,

  }) {
    return Consultas.insert({
      internacion: true,
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      ci: ci,
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      sexo: sexo,
      edad: edad,
      tipo_edad: tipo_edad,
      asegurado: asegurado,
      tipo_sala: tipo_sala,
      sala: sala,
      cama: cama,
      fecha_ing: fecha_ing,
      hora_ing: hora_ing,
      servicio: servicio,
      medico: medico,
      pre_art: pre_art,
      frec_card: frec_card,
      frec_resp: frec_resp,
      temperatura: temperatura,
      gestas: gestas,
      para: para,
      abortos: abortos,
      cesareas: cesareas,
      fum: fum,
      motivo_consulta: motivo_consulta,
      ant_patologicos: ant_patologicos,
      examen_fisico: examen_fisico,
      piel_mucosas: piel_mucosas,
      glasgow: glasgow,
      cabeza: cabeza,
      cuello: cuello,
      torax: torax,
      abdomen: abdomen,
      extremidades: extremidades,
      diagnostico: diagnostico,

      /*tratamiento: tratamiento,
      plan: plan,*/
      conducta: conducta,
      //est_solicitados: est_solicitados,
      fecha_reg: new Date()
    });
  }

});
const insertEvolucionPaciente = new ValidatedMethod({
  name: 'evolucionPaciente.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    fecha: {
      type: String
    },
    hora: {
      type: String
    },
    detalle: {
      type: String
    },
    subjetivo: {
      type: String
    },
    objetivo: {
      type: String
    },
    evolucion: {
      type: String
    },
    plan: {
      type: String
    },
    medico: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    fecha,
    hora,
    detalle,
    subjetivo,
    objetivo,
    evolucion,
    plan,
    medico
  }) {
    return Consultas.insert({
      evolucion: true,
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      fecha: fecha,
      hora: hora,
      detalle: detalle,
      subjetivo: subjetivo,
      objetivo: objetivo,
      analisis: evolucion,
      plan: plan,
      medico: medico,
      fecha_reg: new Date()
    });
  }

});
const insertIndicacionMedica = new ValidatedMethod({
  name: 'indicacionMedica.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    fecha: {
      type: String
    },
    hora: {
      type: String
    },
    indicaciones: {
      type: [Object]
    },
    'indicaciones.$.indicacion': {
      type: String
    },
    'indicaciones.$.via': {
      type: String
    },
    'indicaciones.$.horario': {
      type: String
    },
    medico: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    fecha,
    hora,
    indicaciones,
    medico
  }) {
    return Consultas.insert({
      indicacion: true,
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      fecha: fecha,
      hora: hora,
      indicaciones: indicaciones,
      medico: medico,
      fecha_reg: new Date()
    });
  }

});
const insertIndicacionEnfermeria = new ValidatedMethod({
  name: 'indicacionEnfermeria.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    fecha: {
      type: String
    },
    hora: {
      type: String
    },
    indicaciones: {
      type: [Object]
    },
    'indicaciones.$.medicamento': {
      type: String
    },
    'indicaciones.$.descripcion': {
      type: String
    },
    enfermera: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    fecha,
    hora,
    indicaciones,
    enfermera
  }) {
    return Consultas.insert({
      indicacion_enf: true,
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      fecha: fecha,
      hora: hora,
      indicaciones: indicaciones,
      enfermera: enfermera,
      fecha_reg: new Date()
    });
  }

});
const insertEpicrisisMedica = new ValidatedMethod({
  name: 'epicrisisMedica.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    paciente: {
      type: String
    },
    fecha_ing: {
      type: String
    },
    hora_ing: {
      type: String
    },
    edad: {
      type: String
    },
    resumen_enf_actual: {
      type: String
    },
    exploracion_fisica: {
      type: String
    },
    pruebas_lab: {
      type: String
    },
    fecha_quirurgica: {
      type: String
    },
    hora_quirurgica: {
      type: String
    },
    diagnostico_prequirurgico: {
      type: String
    },
    evolucion: {
      type: String
    },
    antibioterapia: {
      type: String
    },
    indicaciones_alta: {
      type: String
    },
    tipo_alta: {
      type: String
    },
    estado_clinico_alta: {
      type: String
    },
    diag_definitivo: {
      type: String
    },
    medico_responsable: {
      type: String
    },
    fecha_alta: {
      type: String
    },
    hora_alta: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    paciente,
    fecha_ing,
    hora_ing,
    edad,
    resumen_enf_actual,
    exploracion_fisica,
    pruebas_lab,
    fecha_quirurgica,
    hora_quirurgica,
    diagnostico_prequirurgico,
    evolucion,
    antibioterapia,
    indicaciones_alta,
    tipo_alta,
    estado_clinico_alta,
    diag_definitivo,
    medico_responsable,
    fecha_alta,
    hora_alta
  }) {
    return Consultas.insert({
      epicrisis: true,
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      paciente: paciente,
      fecha_ing: fecha_ing,
      hora_ing: hora_ing,
      edad: edad,
      resumen_enf_actual: resumen_enf_actual,
      exploracion_fisica: exploracion_fisica,
      pruebas_lab: pruebas_lab,
      fecha_quirurgica: fecha_quirurgica,
      hora_quirurgica: hora_quirurgica,
      diagnostico_prequirurgico: diagnostico_prequirurgico,
      evolucion: evolucion,
      antibioterapia: antibioterapia,
      indicaciones_alta: indicaciones_alta,
      tipo_alta: tipo_alta,
      estado_clinico_alta: estado_clinico_alta,
      diag_definitivo: diag_definitivo,
      medico_responsable: medico_responsable,
      fecha_alta: fecha_alta,
      hora_alta: hora_alta,
      fecha_reg: new Date()
    });
  }

});
const insertCirugiaMedica = new ValidatedMethod({
  name: 'cirugiaMedica.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_cirugia: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    //paciente: {type: String},
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    edad: {
      type: Number
    },
    tipo_edad: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    fecha_int: {
      type: String
    },
    cirujano: {
      type: String
    },
    especialidad: {
      type: String
    },
    diagnostico: {
      type: String
    },
    procedimiento: {
      type: String
    },
    fecha_cirugia: {
      type: String
    },
    hora_cirugia: {
      type: String
    },
    tiempo_cirugia: {
      type: String
    },
    inf_cirugia: {
      type: String
    },
    reg_por: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    //paciente: {type: String},
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    edad,
    tipo_edad,
    asegurado,
    fecha_int,
    cirujano,
    especialidad,
    diagnostico,
    procedimiento,
    fecha_cirugia,
    hora_cirugia,
    tiempo_cirugia,
    inf_cirugia,
    reg_por
  }) {
    return Consultas.insert({
      cirugia: true,
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      //paciente: {type: String},
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      sexo: sexo,
      edad: edad,
      tipo_edad: tipo_edad,
      asegurado: asegurado,
      fecha_int: fecha_int,
      cirujano: cirujano,
      especialidad: especialidad,
      diagnostico: diagnostico,
      procedimiento: procedimiento,
      fecha_cirugia: fecha_cirugia,
      dia_cirugia: fecha_cirugia.substr(8, 2),
      mes_cirugia: fecha_cirugia.substr(5, 2),
      año_cirugia: fecha_cirugia.substr(0, 4),
      hora_cirugia: hora_cirugia,
      tiempo_cirugia: tiempo_cirugia,
      inf_cirugia: inf_cirugia,
      reg_por: reg_por,
      fecha_reg: new Date()
    });
  }

});
const insertInternacion = new ValidatedMethod({
  name: 'internacion.insert',
  validate: new SimpleSchema({
    paciente: {
      type: String
    },
    transferido_por: {
      type: String
    }
  }).validator(),

  run({
    paciente,
    transferido_por
  }) {
    return Internaciones.insert({
      paciente: paciente,
      transferido_por: transferido_por,
      admision: false,
      alta_medica: false,
      alta_enfermeria: false,
      fecha_reg: new Date()
    });
  }

});
const updateAdmisionInternacion = new ValidatedMethod({
  name: 'admisioninternacion.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    medico: {
      type: String
    },
    fecha_ing: {
      type: String
    },
    hora_ing: {
      type: String
    },
    sala: {
      type: String
    },
    cama: {
      type: String
    },
    admision: {
      type: Boolean
    },
    admision_enf: {
      type: Boolean
    },
    diagnostico: {
      type: String
    }
  }).validator(),

  run({
    id,
    medico,
    fecha_ing,
    hora_ing,
    sala,
    cama,
    admision,
    admision_enf,
    diagnostico
  }) {
    return Internaciones.update({
      _id: id
    }, {
      $set: {
        medico: medico,
        fecha_ing: fecha_ing,
        dia: fecha_ing.substr(8, 2),
        mes: fecha_ing.substr(5, 2),
        año: fecha_ing.substr(0, 4),
        hora_ing: hora_ing,
        sala: sala,
        cama: cama,
        admision: admision,
        admision_enf: admision_enf,
        diagnostico: diagnostico
      }
    });
  }

});
const updateAltaMedicaInternacion = new ValidatedMethod({
  name: 'altamedicainternacion.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    alta_medica: {
      type: Boolean
    },
    medico_alta: {
      type: String
    },
    alta_medica_fecha: {
      type: String
    },
    alta_medica_hora: {
      type: String
    }
  }).validator(),

  run({
    id,
    alta_medica,
    alta_medica_fecha,
    alta_medica_hora,
    medico_alta
  }) {
    return Internaciones.update({
      _id: id
    }, {
      $set: {
        alta_medica: alta_medica,
        alta_medica_fecha: alta_medica_fecha,
        dia_alta: alta_medica_fecha.substr(0, 2),
        mes_alta: alta_medica_fecha.substr(3, 2),
        año_alta: alta_medica_fecha.substr(6, 4),
        alta_medica_hora: alta_medica_hora,
        medico_alta: medico_alta,
        fecha_alta_reg: new Date()
      }
    });
  }

});
const updateAltaEnfermeriaInternacion = new ValidatedMethod({
  name: 'altaenfermeriainternacion.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    alta_enfermeria: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    alta_enfermeria
  }) {
    return Internaciones.update({
      _id: id
    }, {
      $set: {
        alta_enfermeria: alta_enfermeria,
        pagado: false
      }
    });
  }

});
const updatePagoEnfermeriaInternacion = new ValidatedMethod({
  name: 'pagoenfermeriainternacion.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    cobrado_por: {
      type: String
    }
  }).validator(),

  run({
    id,
    cobrado_por
  }) {
    return Internaciones.update({
      _id: id
    }, {
      $set: {
        pagado: true,
        cobrado_por: cobrado_por,
        reportado: false
      }
    });
  }

});
const updateReportadoInternacion = new ValidatedMethod({
  name: 'reportadointernacion.update',
  validate: new SimpleSchema({
    cobrado_por: {
      type: String
    },
    codigo_reporte: {
      type: String
    }
  }).validator(),

  run({
    cobrado_por,
    codigo_reporte
  }) {
    return Internaciones.update({
      cobrado_por: cobrado_por,
      reportado: false
    }, {
      $set: {
        reportado: true,
        codigo_reporte: codigo_reporte
      }
    }, {
      multi: true
    });
  }

});
const insertQuirofano = new ValidatedMethod({
  name: 'quirofano.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    //paciente: {type: String},
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    edad: {
      type: Number
    },
    tipo_edad: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    fecha_int: {
      type: String
    },
    cirujano: {
      type: String
    },
    especialidad: {
      type: String
    },
    diagnostico: {
      type: String
    },
    procedimiento: {
      type: String
    },
    fecha_cirugia: {
      type: String
    },
    hora_cirugia: {
      type: String
    },
    tiempo_cirugia: {
      type: String
    },
    otros: {
      type: String
    },
    reg_por: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    edad,
    tipo_edad,
    asegurado,
    fecha_int,
    cirujano,
    especialidad,
    diagnostico,
    procedimiento,
    fecha_cirugia,
    hora_cirugia,
    tiempo_cirugia,
    otros,
    reg_por
  }) {
    return Quirofano.insert({
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      sexo: sexo,
      edad: edad,
      tipo_edad: tipo_edad,
      asegurado: asegurado,
      fecha_int: fecha_int,
      cirujano: cirujano,
      especialidad: especialidad,
      diagnostico: diagnostico,
      procedimiento: procedimiento,
      fecha_cirugia: fecha_cirugia,
      hora_cirugia: hora_cirugia,
      tiempo_cirugia: tiempo_cirugia,
      otros: otros,
      finalizado: false,
      reg_por: reg_por,
      fecha_reg: new Date()
    });
  }

});
const updateEditQuirofano = new ValidatedMethod({
  name: 'editquirofano.insert',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    cirujano: {
      type: String
    },
    especialidad: {
      type: String
    },
    diagnostico: {
      type: String
    },
    procedimiento: {
      type: String
    },
    fecha_cirugia: {
      type: String
    },
    hora_cirugia: {
      type: String
    },
    tiempo_cirugia: {
      type: String
    },
    otros: {
      type: String
    },
    reg_por: {
      type: String
    }
  }).validator(),

  run({
    id,
    cirujano,
    especialidad,
    diagnostico,
    procedimiento,
    fecha_cirugia,
    hora_cirugia,
    tiempo_cirugia,
    otros,
    reg_por
  }) {
    return Quirofano.update({
      _id: id
    }, {
      $set: {
        cirujano: cirujano,
        especialidad: especialidad,
        diagnostico: diagnostico,
        procedimiento: procedimiento,
        fecha_cirugia: fecha_cirugia,
        hora_cirugia: hora_cirugia,
        tiempo_cirugia: tiempo_cirugia,
        otros: otros,
        finalizado: false,
        reg_por: reg_por,
        fecha_reg: new Date()
      }
    });
  }

});
const updateQuirofano = new ValidatedMethod({
  name: 'quirofano.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    informe: {
      type: String,
      optional: true
    },
    finalizado: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    informe,
    finalizado
  }) {
    return Quirofano.update({
      _id: id
    }, {
      $set: {
        informe: informe,
        finalizado: finalizado
      }
    });
  }

});
const removeQuirofano = new ValidatedMethod({
  name: 'quirofano.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Quirofano.remove({
      _id: id
    });
  }

});
const insertSignosVitales = new ValidatedMethod({
  name: 'signosvitales.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    fecha: {
      type: String
    },
    turno: {
      type: String,
      optional: true
    },
    sin_control: {
      type: Boolean
    },
    nombre_control: {
      type: String,
      optional: true
    },
    dato_control: {
      type: String,
      optional: true
    }
    /*presion_art: {type: String},
    f_respiratorias: {type: String},
    l_parenterales: {type: String},
    l_ingeridos: {type: String},
    orina: {type: String},
    vomitos: {type: String},
    deposicion: {type: String},
    otros: {type: String},*/

  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    fecha,
    turno,
    sin_control,
    nombre_control,
    dato_control
    /*
    presion_art,
    f_respiratorias,
    l_parenterales,
    l_ingeridos,
    orina,
    vomitos,
    deposicion,
    otros,*/

  }) {
    return SignosVitales.insert({
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      fecha: fecha,
      turno: turno,
      sin_control: sin_control,
      nombre_control: nombre_control,
      dato_control: dato_control,

      /*
      presion_art: presion_art,
      f_respiratorias: f_respiratorias,
      l_parenterales: l_parenterales,
      l_ingeridos: l_ingeridos,
      orina: orina,
      vomitos: vomitos,
      deposicion: deposicion,
      otros: otros,*/
      fecha_reg: new Date()
    });
  }

});
const insertPartos = new ValidatedMethod({
  name: 'partos.insert',
  validate: new SimpleSchema({
    codigo_internacion: {
      type: String
    },
    codigo_h: {
      type: String
    },
    id_paciente: {
      type: String
    },
    fecha_ing: {
      type: String
    },
    hora_ing: {
      type: String
    },
    fecha_salida: {
      type: String
    },
    hora_salida: {
      type: String
    },
    fecha_nac: {
      type: String
    },
    hora_nac: {
      type: String
    },
    sexo: {
      type: String
    },
    peso: {
      type: String
    },
    talla: {
      type: String
    },
    descripcion: {
      type: String
    },
    medico: {
      type: String
    },
    enfermera: {
      type: String
    }
  }).validator(),

  run({
    codigo_internacion,
    codigo_h,
    id_paciente,
    fecha_ing,
    hora_ing,
    fecha_salida,
    hora_salida,
    fecha_nac,
    hora_nac,
    sexo,
    peso,
    talla,
    descripcion,
    medico,
    enfermera
  }) {
    return SalaPartos.insert({
      codigo_internacion: codigo_internacion,
      codigo_h: codigo_h,
      id_paciente: id_paciente,
      fecha_ing: fecha_ing,
      hora_ing: hora_ing,
      fecha_salida: fecha_salida,
      hora_salida: hora_salida,
      fecha_nac: fecha_nac,
      dia_nac: fecha_nac.substr(8, 2),
      mes_nac: fecha_nac.substr(5, 2),
      año_nac: fecha_nac.substr(0, 4),
      hora_nac: hora_nac,
      sexo: sexo,
      peso: peso,
      talla: talla,
      descripcion: descripcion,
      medico: medico,
      enfermera: enfermera,
      fecha_reg: new Date()
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_mayores.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_mayores.js                                                    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertMayor: () => insertMayor,
  updateMayor: () => updateMayor,
  updateTotalesMayor: () => updateTotalesMayor
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Mayores;
module.link("./collections.js", {
  Mayores(v) {
    Mayores = v;
  }

}, 3);
const insertMayor = new ValidatedMethod({
  name: 'mayor.insert',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    //nombre_cuenta: {type: String},
    tipo: {
      type: String
    },
    gestion: {
      type: String
    }
  }).validator(),

  run({
    codigo_cuenta,
    //nombre_cuenta,
    tipo,
    gestion
  }) {
    return Mayores.insert({
      codigo_cuenta: codigo_cuenta,
      //nombre_cuenta: nombre_cuenta,
      tipo: tipo,
      gestion: gestion,
      total_debe: '0.00',
      total_haber: '0.00'
    });
  }

});
const updateMayor = new ValidatedMethod({
  name: 'mayor.update',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    gestion: {
      type: String
    },
    fecha: {
      type: String
    },
    nro_comprobante: {
      type: String
    },
    detalle: {
      type: String
    },
    nro_cheque: {
      type: String
    },
    debe: {
      type: String
    },
    haber: {
      type: String
    } //total_debe: {type: String},
    //total_haber: {type: String}

  }).validator(),

  run({
    codigo_cuenta,
    //nombre_cuenta,
    gestion,
    fecha,
    nro_comprobante,
    detalle,
    nro_cheque,
    debe,
    haber //total_debe,
    //total_haber

  }) {
    return Mayores.update({
      codigo_cuenta: codigo_cuenta,
      gestion: gestion //total_debe: total_debe,
      //total_haber: total_haber

    }, {
      $push: {
        movimientos: {
          fecha: fecha,
          nro_comprobante: nro_comprobante,
          detalle: detalle,
          nro_cheque: nro_cheque,
          debe: debe,
          haber: haber
        }
      }
    });
  }

});
const updateTotalesMayor = new ValidatedMethod({
  name: 'totalesmayor.update',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    gestion: {
      type: String
    },
    debe: {
      type: String
    },
    haber: {
      type: String
    } //total_debe: {type: String},
    //total_haber: {type: String}

  }).validator(),

  run({
    codigo_cuenta,
    gestion,
    debe,
    haber
  }) {
    return Mayores.update({
      codigo_cuenta: codigo_cuenta,
      gestion: gestion
    }, {
      $set: {
        total_debe: debe,
        total_haber: haber
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_medicamentos.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_medicamentos.js                                               //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertMedicamento: () => insertMedicamento,
  updateMedicamCant: () => updateMedicamCant,
  updateStockMedicam: () => updateStockMedicam,
  updateMedicamento: () => updateMedicamento,
  removeMedicamento: () => removeMedicamento,
  insertCompraMedicamento: () => insertCompraMedicamento,
  insertVentaMedicamento: () => insertVentaMedicamento,
  devolucionMedicamFarmacia: () => devolucionMedicamFarmacia,
  devolucionVentaFarmacia: () => devolucionVentaFarmacia,
  updateClienteVenta: () => updateClienteVenta,
  insertReporteFarmacia: () => insertReporteFarmacia,
  updateReporteFarmacia: () => updateReporteFarmacia,
  insertCliente: () => insertCliente,
  updateCliente: () => updateCliente,
  insertLinea: () => insertLinea,
  updateLinea: () => updateLinea,
  removeLinea: () => removeLinea
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Medicamentos, Compras, Ventas, ReporteFarmacia, Clientes, Lineas;
module.link("./collections.js", {
  Medicamentos(v) {
    Medicamentos = v;
  },

  Compras(v) {
    Compras = v;
  },

  Ventas(v) {
    Ventas = v;
  },

  ReporteFarmacia(v) {
    ReporteFarmacia = v;
  },

  Clientes(v) {
    Clientes = v;
  },

  Lineas(v) {
    Lineas = v;
  }

}, 3);
const insertMedicamento = new ValidatedMethod({
  name: 'medicamento.insert',
  validate: new SimpleSchema({
    linea: {
      type: String
    },
    item: {
      type: String
    },
    nombre_comercial: {
      type: String
    },
    nombre_generico: {
      type: String
    },
    unidad: {
      type: String
    },
    fecha_caducidad: {
      type: Date
    },
    puc: {
      type: String
    },
    puv: {
      type: String
    },
    cantidad: {
      type: Number
    },
    devolucion: {
      type: Boolean
    }
  }).validator(),

  run({
    linea,
    item,
    nombre_comercial,
    nombre_generico,
    unidad,
    fecha_caducidad,
    puc,
    puv,
    cantidad,
    devolucion
  }) {
    return Medicamentos.insert({
      activo: true,
      linea: linea,
      item: item,
      nombre_comercial: nombre_comercial,
      nombre_generico: nombre_generico,
      unidad: unidad,
      fecha_caducidad: fecha_caducidad,
      puc: puc,
      puv: puv,
      cantidad: cantidad,
      devolucion: devolucion
    });
  }

});
const updateMedicamCant = new ValidatedMethod({
  name: 'medicamcant.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    cantidad: {
      type: Number
    },
    fecha_caducidad: {
      type: Date
    },
    puc: {
      type: String
    },
    puv: {
      type: String
    }
  }).validator(),

  run({
    id,
    cantidad,
    fecha_caducidad,
    puc,
    puv
  }) {
    return Medicamentos.update({
      _id: id
    }, {
      $set: {
        cantidad: Medicamentos.find({
          _id: id
        }).fetch()[0].cantidad + cantidad,
        fecha_caducidad: fecha_caducidad,
        puc: puc,
        puv: puv
      }
    });
  }

});
const updateStockMedicam = new ValidatedMethod({
  name: 'stockmedicam.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    cantidad: {
      type: Number
    }
  }).validator(),

  run({
    id,
    cantidad
  }) {
    return Medicamentos.update({
      _id: id
    }, {
      $set: {
        cantidad: Medicamentos.find({
          _id: id
        }).fetch()[0].cantidad - cantidad
      }
    });
  }

});
const updateMedicamento = new ValidatedMethod({
  name: 'medicamento.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    linea: {
      type: String
    },
    item: {
      type: String
    },
    nombre_comercial: {
      type: String
    },
    nombre_generico: {
      type: String
    },
    unidad: {
      type: String
    },
    fecha_caducidad: {
      type: Date
    },
    puc: {
      type: String
    },
    puv: {
      type: String
    },
    cantidad: {
      type: Number
    },
    devolucion: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    linea,
    item,
    nombre_comercial,
    nombre_generico,
    unidad,
    fecha_caducidad,
    puc,
    puv,
    cantidad,
    devolucion
  }) {
    return Medicamentos.update({
      _id: id
    }, {
      $set: {
        linea: linea,
        item: item,
        nombre_comercial: nombre_comercial,
        nombre_generico: nombre_generico,
        unidad: unidad,
        fecha_caducidad: fecha_caducidad,
        puc: puc,
        puv: puv,
        cantidad: cantidad,
        devolucion: devolucion
      }
    });
  }

});
const removeMedicamento = new ValidatedMethod({
  name: 'medicamento.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    activo: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    activo
  }) {
    return Medicamentos.update({
      _id: id
    }, {
      $set: {
        activo: activo,
        cantidad: 0
      }
    });
  }

});
const insertCompraMedicamento = new ValidatedMethod({
  name: 'compra_medicamento.insert',
  validate: new SimpleSchema({
    codigo_compra: {
      type: String
    },
    total: {
      type: String
    },
    reg_por: {
      type: String
    },
    detalle_compra: {
      type: [Object]
    },
    'detalle_compra.$.id_medicamento': {
      type: String
    },
    'detalle_compra.$.nombre_comercial': {
      type: String
    },
    'detalle_compra.$.unidad': {
      type: String
    },
    'detalle_compra.$.linea': {
      type: String
    },
    'detalle_compra.$.item': {
      type: String
    },
    'detalle_compra.$.puc': {
      type: String
    },
    'detalle_compra.$.puv': {
      type: String
    },
    'detalle_compra.$.cantidad': {
      type: Number
    },
    'detalle_compra.$.fecha_caducidad': {
      type: Date
    },
    'detalle_compra.$.nro_factura': {
      type: String
    },
    'detalle_compra.$.total': {
      type: String
    }
  }).validator(),

  run({
    codigo_compra,
    total,
    reg_por,
    detalle_compra
  }) {
    return Compras.insert({
      codigo_compra: codigo_compra,
      total: total,
      reg_por: reg_por,
      fecha_registro: new Date(),
      dia: new Date().getDate() + '',
      mes: new Date().getMonth() + 1 + '',
      año: new Date().getFullYear() + '',
      detalle_compra: detalle_compra
    });
  }

});
const insertVentaMedicamento = new ValidatedMethod({
  name: 'venta_medicamento.insert',
  validate: new SimpleSchema({
    codigo_venta: {
      type: String
    },
    total: {
      type: String
    },
    reg_por: {
      type: String
    },
    id_us: {
      type: String
    },
    dia_reg: {
      type: String
    },
    mes_reg: {
      type: String
    },
    año_reg: {
      type: String
    },
    hora_reg: {
      type: String
    },
    baja: {
      type: Boolean
    },
    detalle_venta: {
      type: [Object]
    },
    //'detalle_venta.$.cod_venta': {type: String},
    'detalle_venta.$.id_medicamento': {
      type: String
    },
    'detalle_venta.$.item': {
      type: String
    },
    'detalle_venta.$.nombre_comercial': {
      type: String
    },
    'detalle_venta.$.unidad': {
      type: String
    },
    'detalle_venta.$.puv': {
      type: String
    },
    'detalle_venta.$.cantidad': {
      type: Number
    },
    'detalle_venta.$.precio_total': {
      type: String
    },
    'detalle_venta.$.motivo': {
      type: String
    }
  }).validator(),

  run({
    codigo_venta,
    total,
    reg_por,
    id_us,
    dia_reg,
    mes_reg,
    año_reg,
    hora_reg,
    baja,
    detalle_venta
  }) {
    return Ventas.insert({
      codigo_venta: codigo_venta,
      total: total,
      reg_por: reg_por,
      id_us: id_us,
      devuelto: false,
      fecha_registro: new Date(),
      dia: dia_reg,
      mes: mes_reg,
      año: año_reg,
      hora_reg: hora_reg,
      reportado: false,
      baja: baja,
      detalle_venta: detalle_venta
    });
  }

});
const devolucionMedicamFarmacia = new ValidatedMethod({
  name: 'devolucionmedicamfarmacia.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    medicamento: {
      type: String
    },
    total: {
      type: String
    },
    cantidad: {
      type: Number
    }
  }).validator(),

  run({
    id,
    medicamento,
    total,
    cantidad
  }) {
    return [Ventas.update({
      _id: id
    }, {
      $pull: {
        detalle_venta: {
          id_medicamento: medicamento
        }
      }
    }), Ventas.update({
      _id: id
    }, {
      $set: {
        total: total
      }
    }), Medicamentos.update({
      _id: medicamento
    }, {
      $set: {
        cantidad: Medicamentos.find({
          _id: medicamento
        }).fetch()[0].cantidad + cantidad
      }
    })];
  }

});
const devolucionVentaFarmacia = new ValidatedMethod({
  name: 'devolucionventafarmacia.update',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Ventas.update({
      _id: id
    }, {
      $set: {
        devuelto: true
      }
    });
  }

});
const updateClienteVenta = new ValidatedMethod({
  name: 'clienteventa.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    }
  }).validator(),

  run({
    id,
    ci,
    nombre
  }) {
    return Ventas.update({
      _id: id
    }, {
      $set: {
        ci: ci,
        nombre: nombre
      }
    });
  }

});
const insertReporteFarmacia = new ValidatedMethod({
  name: 'reportefarmacia.insert',
  validate: new SimpleSchema({
    codigo_reporte: {
      type: String
    },
    //fecha_reporte: {type: String},
    dia: {
      type: String
    },
    mes: {
      type: String
    },
    año: {
      type: String
    },
    hora_reporte: {
      type: String
    },
    reporte_enviado: {
      type: Boolean
    },
    us_env: {
      type: String
    },
    total: {
      type: String
    }
    /*reporte_recibido: {type: Boolean},
    dia_rec: {type: String},
    mes_rec: {type: String},
    año_rec: {type: String},
    //fecha_recibido: {type: String},
    hora_recibido: {type: String},
    us_rec: {type: String , optional: true},*/

  }).validator(),

  run({
    codigo_reporte,
    //fecha_reporte,
    dia,
    mes,
    año,
    hora_reporte,
    reporte_enviado,
    us_env,
    total
    /*reporte_recibido,
    dia_rec,
    mes_rec,
    año_rec,
    //fecha_recibido,
    hora_recibido,
    us_rec,*/

  }) {
    return [ReporteFarmacia.insert({
      codigo_reporte: codigo_reporte,
      fecha_reporte: dia + '/' + mes + '/' + año,
      dia: dia,
      mes: mes,
      año: año,
      hora_reporte: hora_reporte,
      reporte_enviado: reporte_enviado,
      us_env: us_env,
      total: total,
      reporte_recibido: false,
      fecha_registro: new Date()
      /*dia_rec: dia_rec,
      mes_rec: mes_rec,
      año_rec: año_rec,
      //fecha_recibido: fecha_recibido,
      hora_recibido: hora_recibido,
      us_rec: us_rec,*/

    }), Ventas.update({
      id_us: us_env,
      reportado: false,
      devuelto: false
    }, {
      $set: {
        reportado: true,
        codigo_reporte: codigo_reporte
      }
    }, {
      multi: true
    })];
  }

});
const updateReporteFarmacia = new ValidatedMethod({
  name: 'reportefarmacia.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    reporte_recibido: {
      type: Boolean
    },
    dia_rec: {
      type: String
    },
    mes_rec: {
      type: String
    },
    año_rec: {
      type: String
    },
    //fecha_recibido: {type: String},
    hora_recibido: {
      type: String
    },
    us_rec: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    id,
    reporte_recibido,
    dia_rec,
    mes_rec,
    año_rec,
    //fecha_recibido,
    hora_recibido,
    us_rec
  }) {
    return ReporteFarmacia.update({
      _id: id
    }, {
      $set: {
        reporte_recibido: reporte_recibido,
        dia_rec: dia_rec,
        mes_rec: mes_rec,
        año_rec: año_rec,
        fecha_recibido: dia_rec + '/' + mes_rec + '/' + año_rec,
        hora_recibido: hora_recibido,
        us_rec: us_rec
      }
    });
  }

});
const insertCliente = new ValidatedMethod({
  name: 'cliente.insert',
  validate: new SimpleSchema({
    ci: {
      type: String
    },
    nombre: {
      type: String
    }
  }).validator(),

  run({
    ci,
    nombre
  }) {
    return Clientes.insert({
      ci: ci,
      nombre: nombre
    });
  }

});
const updateCliente = new ValidatedMethod({
  name: 'cliente.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    }
  }).validator(),

  run({
    id,
    ci,
    nombre
  }) {
    return Clientes.update({
      _id: id
    }, {
      $set: {
        ci: ci,
        nombre: nombre
      }
    });
  }

});
const insertLinea = new ValidatedMethod({
  name: 'linea.insert',
  validate: new SimpleSchema({
    nombre_linea: {
      type: String
    },
    telefono: {
      type: String
    }
  }).validator(),

  run({
    nombre_linea,
    telefono
  }) {
    return Lineas.insert({
      nombre_linea: nombre_linea,
      telefono: telefono
    });
  }

});
const updateLinea = new ValidatedMethod({
  name: 'linea.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    nombre_linea: {
      type: String
    },
    telefono: {
      type: String
    }
  }).validator(),

  run({
    id,
    nombre_linea,
    telefono
  }) {
    return Lineas.update({
      _id: id
    }, {
      $set: {
        nombre_linea: nombre_linea,
        telefono: telefono
      }
    });
  }

});
const removeLinea = new ValidatedMethod({
  name: 'linea.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Lineas.remove({
      _id: id
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_medicos.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_medicos.js                                                    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertMedico: () => insertMedico,
  updateMedico: () => updateMedico,
  updateMedicoUs: () => updateMedicoUs,
  removeMedico: () => removeMedico,
  updateMedicoEsp: () => updateMedicoEsp
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Medicos;
module.link("./collections.js", {
  Medicos(v) {
    Medicos = v;
  }

}, 3);
const insertMedico = new ValidatedMethod({
  name: 'medico.insert',
  validate: new SimpleSchema({
    medico: {
      type: String
    },
    consultorio: {
      type: String
    },
    asignado: {
      type: Boolean
    }
  }).validator(),

  run({
    medico,
    consultorio,
    asignado
  }) {
    return Medicos.insert({
      medico: medico,
      consultorio: consultorio,
      asignado: asignado
    });
  }

});
const updateMedico = new ValidatedMethod({
  name: 'medico.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    medico: {
      type: String
    },
    consultorio: {
      type: String
    },
    asignado: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    medico,
    consultorio,
    asignado
  }) {
    return Medicos.update({
      _id: id
    }, {
      $set: {
        medico: medico,
        consultorio: consultorio,
        asignado: asignado
      }
    });
  }

});
const updateMedicoUs = new ValidatedMethod({
  name: 'medicous.update',
  validate: new SimpleSchema({
    idUs: {
      type: String
    },
    ci: {
      type: String
    },
    titulo: {
      type: String
    },
    nombre: {
      type: String
    },
    avatar: {
      type: String
    }
  }).validator(),

  run({
    idUs,
    ci,
    titulo,
    nombre,
    avatar
  }) {
    return Medicos.update({
      idUs: idUs
    }, {
      $set: {
        ci: ci,
        titulo: titulo,
        nombre: nombre,
        avatar: avatar
      }
    });
  }

});
const removeMedico = new ValidatedMethod({
  name: 'medico.remove',
  validate: new SimpleSchema({
    idUs: {
      type: String
    }
  }).validator(),

  run({
    idUs
  }) {
    return Medicos.remove({
      idUs: idUs
    });
  }

});
const updateMedicoEsp = new ValidatedMethod({
  name: 'medicoesp.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    especialidad: {
      type: String
    }
  }).validator(),

  run({
    id,
    especialidad
  }) {
    return Medicos.update({
      _id: id
    }, {
      $set: {
        especialidad: especialidad
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_pacientes.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_pacientes.js                                                  //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertPaciente: () => insertPaciente,
  updatePaciente: () => updatePaciente,
  updatePartAseg: () => updatePartAseg,
  removeAsegDep: () => removeAsegDep,
  removeAsegTit: () => removeAsegTit
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Pacientes;
module.link("./collections.js", {
  Pacientes(v) {
    Pacientes = v;
  }

}, 3);
const insertPaciente = new ValidatedMethod({
  name: 'asegurado.insert',
  validate: new SimpleSchema({
    tipo_paciente: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    codigo_asegurado: {
      type: String,
      optional: true
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    parentesco: {
      type: String,
      optional: true
    },
    sexo: {
      type: String
    },
    fecha_nac: {
      type: String
    },
    fecha_extincion: {
      type: String,
      optional: true
    },
    direccion: {
      type: String
    },
    empleador: {
      type: String,
      optional: true
    },
    foto: {
      type: String,
      optional: true
    },
    fecha_reg: {
      type: Date
    },
    registrado_por: {
      type: String
    },
    observaciones: {
      type: [Object],
      optional: true
    },
    'observaciones.$.obs_fecha': {
      type: Date
    },
    'observaciones.$.obs_titulo': {
      type: String
    },
    'observaciones.$.obs_concepto': {
      type: String
    },
    'observaciones.$.obs_propietario': {
      type: String
    }
  }).validator(),

  run({
    tipo_paciente,
    asegurado,
    codigo_asegurado,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    parentesco,
    sexo,
    fecha_nac,
    fecha_extincion,
    direccion,
    empleador,
    foto,
    fecha_reg,
    registrado_por,
    observaciones
  }) {
    return Pacientes.insert({
      tipo_paciente: tipo_paciente,
      asegurado: asegurado,
      codigo_asegurado: codigo_asegurado,
      ci: ci,
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      parentesco: parentesco,
      sexo: sexo,
      fecha_nac: fecha_nac,
      fecha_extincion: fecha_extincion,
      direccion: direccion,
      empleador: empleador,
      foto: foto,
      observaciones: observaciones
    });
  }

});
const updatePaciente = new ValidatedMethod({
  name: 'asegurado.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    tipo_paciente: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    codigo_aseg_ant: {
      type: String,
      optional: true
    },
    codigo_asegurado: {
      type: String,
      optional: true
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    fecha_nac: {
      type: String
    },
    fecha_extincion: {
      type: String
    },
    direccion: {
      type: String
    },
    empleador: {
      type: String
    },
    foto: {
      type: String,
      optional: true
    },
    parentesco: {
      type: String,
      optional: true
    }
  }).validator(),

  run({
    id,
    tipo_paciente,
    asegurado,
    codigo_aseg_ant,
    codigo_asegurado,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    fecha_nac,
    fecha_extincion,
    direccion,
    empleador,
    foto,
    parentesco
  }) {
    return [Pacientes.update({
      _id: id
    }, {
      $set: {
        tipo_paciente: tipo_paciente,
        asegurado: asegurado,
        codigo_asegurado: codigo_asegurado,
        ci: ci,
        nombre: nombre,
        ap_paterno: ap_paterno,
        ap_materno: ap_materno,
        sexo: sexo,
        fecha_nac: fecha_nac,
        fecha_extincion: fecha_extincion,
        direccion: direccion,
        empleador: empleador,
        foto: foto,
        parentesco: parentesco
      }
    }), Pacientes.update({
      codigo_asegurado: codigo_aseg_ant
    }, {
      $set: {
        codigo_asegurado: codigo_asegurado,
        direccion: direccion,
        empleador: empleador
      }
    }, {
      multi: true
    })];
  }

});
const updatePartAseg = new ValidatedMethod({
  name: 'partaseg.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    tipo_paciente: {
      type: String
    },
    asegurado: {
      type: Boolean
    },
    //codigo_aseg_ant: {type: String, optional: true },
    codigo_asegurado: {
      type: String,
      optional: true
    },
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    fecha_nac: {
      type: String
    },
    fecha_extincion: {
      type: String
    },
    direccion: {
      type: String
    },
    empleador: {
      type: String
    },
    foto: {
      type: String,
      optional: true
    },
    parentesco: {
      type: String,
      optional: true
    },
    obs_fecha: {
      type: Date
    },
    obs_titulo: {
      type: String
    },
    obs_concepto: {
      type: String
    },
    obs_propietario: {
      type: String
    }
  }).validator(),

  run({
    id,
    tipo_paciente,
    asegurado,
    codigo_aseg_ant,
    codigo_asegurado,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    fecha_nac,
    fecha_extincion,
    direccion,
    empleador,
    foto,
    parentesco,
    obs_fecha,
    obs_titulo,
    obs_concepto,
    obs_propietario
  }) {
    return [Pacientes.update({
      _id: id
    }, {
      $set: {
        tipo_paciente: tipo_paciente,
        asegurado: asegurado,
        codigo_asegurado: codigo_asegurado,
        ci: ci,
        nombre: nombre,
        ap_paterno: ap_paterno,
        ap_materno: ap_materno,
        sexo: sexo,
        fecha_nac: fecha_nac,
        fecha_extincion: fecha_extincion,
        direccion: direccion,
        empleador: empleador,
        foto: foto,
        parentesco
      }
    }), Pacientes.update({
      _id: id
    }, {
      $push: {
        observaciones: {
          obs_fecha: obs_fecha,
          obs_titulo: obs_titulo,
          obs_concepto: obs_concepto,
          obs_propietario: obs_propietario
        }
      }
    })];
  }

});
const removeAsegDep = new ValidatedMethod({
  name: 'asegdep.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    obs_fecha: {
      type: Date
    },
    obs_titulo: {
      type: String
    },
    obs_concepto: {
      type: String
    },
    obs_propietario: {
      type: String
    }
  }).validator(),

  run({
    id,
    obs_fecha,
    obs_titulo,
    obs_concepto,
    obs_propietario
  }) {
    return [Pacientes.update({
      _id: id
    }, {
      $set: {
        tipo_paciente: 'Particular',
        asegurado: false,
        codigo_asegurado: '',
        parentesco: '',
        empleador: ''
      }
    }), Pacientes.update({
      _id: id
    }, {
      $push: {
        observaciones: {
          obs_fecha: obs_fecha,
          obs_titulo: obs_titulo,
          obs_concepto: obs_concepto,
          obs_propietario: obs_propietario
        }
      }
    })];
  }

});
const removeAsegTit = new ValidatedMethod({
  name: 'asegtit.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    codigo_asegurado: {
      type: String
    },
    obs_fecha: {
      type: Date
    },
    obs_titulo: {
      type: String
    },
    obs_concepto: {
      type: String
    },
    obs_propietario: {
      type: String
    }
  }).validator(),

  run({
    id,
    codigo_asegurado,
    obs_fecha,
    obs_titulo,
    obs_concepto,
    obs_propietario
  }) {
    return [Pacientes.update({
      _id: id
    }, {
      $set: {
        tipo_paciente: 'Particular',
        asegurado: false,
        codigo_asegurado: '',
        empleador: ''
      }
    }), Pacientes.update({
      _id: id
    }, {
      $push: {
        observaciones: {
          obs_fecha: obs_fecha,
          obs_titulo: obs_titulo,
          obs_concepto: obs_concepto,
          obs_propietario: obs_propietario
        }
      }
    }), Pacientes.update({
      codigo_asegurado: codigo_asegurado
    }, {
      $push: {
        observaciones: {
          obs_fecha: obs_fecha,
          obs_titulo: obs_titulo,
          obs_concepto: "'Desafiliado' porque el asegurado titular fue 'Desafiliado'",
          obs_propietario: obs_propietario
        }
      }
    }, {
      multi: true
    }), Pacientes.update({
      codigo_asegurado: codigo_asegurado
    }, {
      $set: {
        tipo_paciente: 'Particular',
        asegurado: false,
        codigo_asegurado: '',
        empleador: ''
      }
    }, {
      multi: true
    })];
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_plan_cuentas.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_plan_cuentas.js                                               //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertPlanCuenta: () => insertPlanCuenta,
  removePlanCuenta: () => removePlanCuenta,
  updatePlanCuenta: () => updatePlanCuenta
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let PlanCuentas;
module.link("./collections.js", {
  PlanCuentas(v) {
    PlanCuentas = v;
  }

}, 3);
const insertPlanCuenta = new ValidatedMethod({
  name: 'plancuenta.insert',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    codigo_superior: {
      type: String,
      optional: true
    },
    nombre_cuenta: {
      type: String
    },
    tipo: {
      type: String
    },
    nivel: {
      type: String
    },
    cuenta_mayor: {
      type: String
    },
    libro_mayor: {
      type: Boolean
    }
  }).validator(),

  run({
    codigo_cuenta,
    codigo_superior,
    nombre_cuenta,
    tipo,
    nivel,
    cuenta_mayor,
    libro_mayor
  }) {
    return PlanCuentas.insert({
      codigo_cuenta: codigo_cuenta,
      codigo_superior: codigo_superior,
      nombre_cuenta: nombre_cuenta,
      tipo: tipo,
      nivel: nivel,
      cuenta_mayor: cuenta_mayor,
      libro_mayor: libro_mayor
    });
  }

});
const removePlanCuenta = new ValidatedMethod({
  name: 'plancuenta.remove',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    }
  }).validator(),

  run({
    codigo_cuenta
  }) {
    return PlanCuentas.remove({
      codigo_cuenta: codigo_cuenta
    });
  }

});
const updatePlanCuenta = new ValidatedMethod({
  name: 'plancuenta.update',
  validate: new SimpleSchema({
    codigo_cuenta: {
      type: String
    },
    nombre_cuenta: {
      type: String
    },
    tipo: {
      type: String
    },
    nivel: {
      type: String
    },
    cuenta_mayor: {
      type: String
    },
    libro_mayor: {
      type: Boolean
    }
  }).validator(),

  run({
    codigo_cuenta,
    nombre_cuenta,
    tipo,
    nivel,
    cuenta_mayor,
    libro_mayor
  }) {
    return PlanCuentas.update({
      codigo_cuenta: codigo_cuenta
    }, {
      $set: {
        nombre_cuenta: nombre_cuenta,
        tipo: tipo,
        nivel: nivel,
        cuenta_mayor: cuenta_mayor,
        libro_mayor: libro_mayor
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_roles.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_roles.js                                                      //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertRoles: () => insertRoles,
  editRoles: () => editRoles
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
const insertRoles = new ValidatedMethod({
  name: 'roles.insert',
  validate: new SimpleSchema({
    userId: {
      type: String
    },
    roles: {
      type: [String]
    }
  }).validator(),

  run({
    userId,
    roles
  }) {
    /*console.log('Hola');
    console.log(roles);*/
    return Roles.addUsersToRoles(userId, roles); //return Roles.setUserRoles(userId, roles);
  }

});
const editRoles = new ValidatedMethod({
  name: 'roles.edit',
  validate: new SimpleSchema({
    userId: {
      type: String
    },
    roles: {
      type: [String]
    }
  }).validator(),

  run({
    userId,
    roles
  }) {
    //console.log('Hola');
    //console.log(roles);
    //return Roles.addUsersToRoles(userId, roles);
    return Roles.setUserRoles(userId, roles);
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_salas.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_salas.js                                                      //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertSala: () => insertSala,
  updateSala: () => updateSala,
  removeSala: () => removeSala,
  insertCama: () => insertCama,
  updateCama: () => updateCama,
  removeCama: () => removeCama,
  insertServicio: () => insertServicio,
  updateServicio: () => updateServicio,
  removeServicio: () => removeServicio
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Salas, Camas, Servicios;
module.link("./collections.js", {
  Salas(v) {
    Salas = v;
  },

  Camas(v) {
    Camas = v;
  },

  Servicios(v) {
    Servicios = v;
  }

}, 3);
const insertSala = new ValidatedMethod({
  name: 'sala.insert',
  validate: new SimpleSchema({
    imagen: {
      type: String
    },
    nombre_sala: {
      type: String
    },
    tipo_sala: {
      type: String,
      optional: true
    },
    estado: {
      type: Boolean
    }
  }).validator(),

  run({
    imagen,
    nombre_sala,
    tipo_sala,
    estado
  }) {
    return Salas.insert({
      imagen: imagen,
      nombre_sala: nombre_sala,
      tipo_sala: tipo_sala,
      estado: estado
    });
  }

});
const updateSala = new ValidatedMethod({
  name: 'sala.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    imagen: {
      type: String
    },
    nombre_sala: {
      type: String
    },
    tipo_sala: {
      type: String,
      optional: true
    },
    estado: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    imagen,
    nombre_sala,
    tipo_sala,
    estado
  }) {
    return Salas.update({
      _id: id
    }, {
      $set: {
        imagen: imagen,
        nombre_sala: nombre_sala,
        tipo_sala: tipo_sala,
        estado: estado
      }
    });
  }

});
const removeSala = new ValidatedMethod({
  name: 'sala.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return [Salas.remove({
      _id: id
    }), Camas.remove({
      id_sala: id
    })];
  }

});
const insertCama = new ValidatedMethod({
  name: 'cama.insert',
  validate: new SimpleSchema({
    id_sala: {
      type: String
    },
    nro_cama: {
      type: Number
    },
    //estado: {type: Boolean},
    ocupado: {
      type: Boolean
    }
  }).validator(),

  run({
    id_sala,
    nro_cama,
    //estado,
    ocupado
  }) {
    return Camas.insert({
      id_sala: id_sala,
      nro_cama: nro_cama,
      //estado: estado,
      ocupado: ocupado
    });
  }

});
const updateCama = new ValidatedMethod({
  name: 'cama.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    ocupado: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    ocupado
  }) {
    return Camas.update({
      _id: id
    }, {
      $set: {
        ocupado: ocupado
      }
    });
  }

});
const removeCama = new ValidatedMethod({
  name: 'cama.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Camas.remove({
      _id: id
    });
  }

});
const insertServicio = new ValidatedMethod({
  name: 'servicio.insert',
  validate: new SimpleSchema({
    servicio: {
      type: String
    }
  }).validator(),

  run({
    servicio
  }) {
    return Servicios.insert({
      servicio: servicio
    });
  }

});
const updateServicio = new ValidatedMethod({
  name: 'servicio.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    servicio: {
      type: String
    }
  }).validator(),

  run({
    id,
    servicio
  }) {
    return Servicios.update({
      _id: id
    }, {
      $set: {
        servicio: servicio
      }
    });
  }

});
const removeServicio = new ValidatedMethod({
  name: 'Servicio.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Servicios.remove({
      _id: id
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_turnos.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_turnos.js                                                     //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertTurno: () => insertTurno,
  updateTurno: () => updateTurno,
  removeTurno: () => removeTurno
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Turnos;
module.link("./collections.js", {
  Turnos(v) {
    Turnos = v;
  }

}, 3);
const insertTurno = new ValidatedMethod({
  name: 'turno.insert',
  validate: new SimpleSchema({
    nombre_turno: {
      type: String
    },
    //año: {type: String},
    //mes: {type: String},
    codigo_turno: {
      type: String
    },
    imagen_turno: {
      type: String
    },
    precio_aseg: {
      type: String
    },
    precio_part: {
      type: String
    },
    medicos: {
      type: [Object]
    },
    'medicos.$.nro_orden': {
      type: String
    },
    'medicos.$.medico': {
      type: String
    }
  }).validator(),

  run({
    nombre_turno,

    /*año, mes,*/
    codigo_turno,
    imagen_turno,
    precio_aseg,
    precio_part,
    medicos
  }) {
    return Turnos.insert({
      nombre_turno: nombre_turno,
      //año: año,
      //mes: mes,
      codigo_turno: codigo_turno,
      tipo: 'Turno',
      imagen_turno: imagen_turno,
      precio_aseg: precio_aseg,
      precio_part: precio_part,
      medicos: medicos
    });
  }

});
const updateTurno = new ValidatedMethod({
  name: 'turno.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    nombre_turno: {
      type: String
    },
    //año: {type: String},
    //mes: {type: String},
    codigo_turno: {
      type: String
    },
    imagen_turno: {
      type: String
    },
    precio_aseg: {
      type: String
    },
    precio_part: {
      type: String
    },
    medicos: {
      type: [Object]
    },
    'medicos.$.nro_orden': {
      type: String
    },
    'medicos.$.medico': {
      type: String
    }
  }).validator(),

  run({
    id,
    nombre_turno,

    /*año, mes,*/
    codigo_turno,
    imagen_turno,
    precio_aseg,
    precio_part,
    medicos
  }) {
    return Turnos.update({
      _id: id
    }, {
      $set: {
        nombre_turno: nombre_turno,
        //año: año,
        //mes: mes,
        codigo_turno: codigo_turno,
        tipo: 'Turno',
        imagen_turno: imagen_turno,
        precio_aseg: precio_aseg,
        precio_part: precio_part,
        medicos: medicos
      }
    });
  }

});
const removeTurno = new ValidatedMethod({
  name: 'turno.remove',
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    return Turnos.remove({
      _id: id
    });
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

},"methods_users.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// imports/api/collections/methods_users.js                                                      //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({
  insertUsuario: () => insertUsuario,
  claveReg: () => claveReg,
  updateEstadoUs: () => updateEstadoUs,
  updateRolesUs: () => updateRolesUs,
  updateUsuario: () => updateUsuario,
  updateRemoveUs: () => updateRemoveUs,
  removeForeverUs: () => removeForeverUs,
  updateCargoUs: () => updateCargoUs,
  updateAvatarUs: () => updateAvatarUs,
  updateUserId: () => updateUserId
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let ValidateMethod;
module.link("meteor/mdg:validated-method", {
  ValidateMethod(v) {
    ValidateMethod = v;
  }

}, 1);
let SimpleSchema;
module.link("meteor/aldeed:simple-schema", {
  SimpleSchema(v) {
    SimpleSchema = v;
  }

}, 2);
let Usuarios, ClaveRegistro;
module.link("./collections.js", {
  Usuarios(v) {
    Usuarios = v;
  },

  ClaveRegistro(v) {
    ClaveRegistro = v;
  }

}, 3);
const insertUsuario = new ValidatedMethod({
  name: 'usuario.insert',
  validate: new SimpleSchema({
    subsistema: {
      type: String
    },
    //cargo: {type: String},
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    fecha_nacimiento: {
      type: String
    },
    direccion: {
      type: String
    },
    celular: {
      type: String
    },
    telf_referencia: {
      type: String
    },
    avatar: {
      type: String
    },
    userId: {
      type: String,
      optional: true
    },
    user: {
      type: String,
      optional: true
    },
    password: {
      type: String,
      optional: true
    },
    propietario_reg: {
      type: String
    },
    fecha_registro: {
      type: Date
    },
    eliminado: {
      type: Boolean
    },
    propietario_elim: {
      type: String
    },
    fecha_elim: {
      type: Date,
      optional: true
    },
    roles: {
      type: [String]
    }
  }).validator(),

  run({
    subsistema,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    fecha_nacimiento,
    direccion,
    celular,
    telf_referencia,
    avatar,
    userId,
    user,
    password,
    propietario_reg,
    fecha_registro,
    eliminado,
    propietario_elim,
    fecha_elim,
    roles
  }) {
    return Usuarios.insert({
      subsistema: subsistema,
      //cargo: cargo,
      ci: ci,
      nombre: nombre,
      ap_paterno: ap_paterno,
      ap_materno: ap_materno,
      sexo: sexo,
      fecha_nacimiento: fecha_nacimiento,
      direccion: direccion,
      celular: celular,
      telf_referencia: telf_referencia,
      avatar: avatar,
      estado: true,
      userId: userId,
      user: user,
      password: password,
      propietario_reg: propietario_reg,
      fecha_registro: fecha_registro,
      eliminado: eliminado,
      propietario_elim: propietario_elim,
      fecha_elim: fecha_elim,
      roles: roles
    });
  }

});
const claveReg = new ValidatedMethod({
  name: 'clave.reg',
  validate: new SimpleSchema({
    ci: {
      type: String
    },
    codigoReg: {
      type: String
    }
  }).validator(),

  run({
    ci,
    codigoReg
  }) {
    return ClaveRegistro.insert({
      ci: ci,
      codigoReg: codigoReg
    });
  }

});
const updateEstadoUs = new ValidatedMethod({
  name: 'update.estadoUs',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    estado: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    estado
  }) {
    return Usuarios.update({
      _id: id
    }, {
      $set: {
        estado: estado
      }
    });
  }

});
const updateRolesUs = new ValidatedMethod({
  name: 'update.rolesUs',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    roles: {
      type: [String]
    }
  }).validator(),

  run({
    id,
    roles
  }) {
    return Usuarios.update({
      _id: id
    }, {
      $set: {
        roles: roles
      }
    });
  }

});
const updateUsuario = new ValidatedMethod({
  name: 'usuarios.update',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    subsistema: {
      type: String
    },
    //cargo: {type: String},
    ci: {
      type: String
    },
    nombre: {
      type: String
    },
    ap_paterno: {
      type: String
    },
    ap_materno: {
      type: String
    },
    sexo: {
      type: String
    },
    fecha_nacimiento: {
      type: String
    },
    direccion: {
      type: String
    },
    celular: {
      type: String
    },
    telf_referencia: {
      type: String
    } //estado: {type: Boolean},
    //avatar: {type: String}

  }).validator(),

  run({
    id,
    subsistema,
    //cargo,
    ci,
    nombre,
    ap_paterno,
    ap_materno,
    sexo,
    fecha_nacimiento,
    direccion,
    celular,
    telf_referencia //estado,
    //avatar

  }) {
    return Usuarios.update({
      _id: id
    }, {
      $set: {
        subsistema: subsistema,
        //cargo: cargo,
        ci: ci,
        nombre: nombre,
        ap_paterno: ap_paterno,
        ap_materno: ap_materno,
        sexo: sexo,
        fecha_nacimiento: fecha_nacimiento,
        direccion: direccion,
        celular: celular,
        telf_referencia: telf_referencia //estado: estado,
        //avatar: avatar

      }
    });
  }

});
const updateRemoveUs = new ValidatedMethod({
  name: 'update.removeUs',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    eliminado: {
      type: Boolean
    },
    propietario_elim: {
      type: String
    },
    fecha_elim: {
      type: Date,
      optional: true
    },
    estado: {
      type: Boolean
    }
  }).validator(),

  run({
    id,
    eliminado,
    propietario_elim,
    fecha_elim,
    estado
  }) {
    return Usuarios.update({
      _id: id
    }, {
      $set: {
        eliminado: eliminado,
        propietario_elim: propietario_elim,
        fecha_elim: fecha_elim,
        estado: estado
      }
    });
  }

});
const removeForeverUs = new ValidatedMethod({
  name: 'remove.forever.us',
  validate: new SimpleSchema({
    id: {
      type: String
    },
    ci: {
      type: String
    }
  }).validator(),

  run({
    id,
    ci
  }) {
    return [Usuarios.remove({
      _id: id
    }), ClaveRegistro.remove({
      ci: ci
    })];
  }

});
const updateCargoUs = new ValidatedMethod({
  name: 'update.cargoUs',
  validate: new SimpleSchema({
    id: {
      type: String
    } //cargo: {type: String}

  }).validator(),

  run({
    id,
    cargo
  }) {
    return Usuarios.update({
      _id: id
    }, {
      $set: {
        cargo: cargo
      }
    });
  }

});
const updateAvatarUs = new ValidatedMethod({
  name: 'update.avatarUs',
  validate: new SimpleSchema({
    userId: {
      type: String
    },
    avatar: {
      type: String
    }
  }).validator(),

  run({
    userId,
    avatar
  }) {
    return Usuarios.update({
      userId: userId
    }, {
      $set: {
        avatar: avatar
      }
    });
  }

});
const updateUserId = new ValidatedMethod({
  name: 'update.userId',
  validate: new SimpleSchema({
    ci: {
      type: String
    },
    userId: {
      type: String
    },
    user: {
      type: String
    },
    password: {
      type: String
    }
  }).validator(),

  run({
    ci,
    userId,
    user,
    password
  }) {
    return [Usuarios.update({
      ci: ci
    }, {
      $set: {
        userId: userId,
        user: user,
        password: password
      }
    })];
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// server/main.js                                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let pubs;
module.link("../imports/api/collections/server/publications.js", {
  default(v) {
    pubs = v;
  }

}, 1);
let Images;
module.link("../imports/api/collections/collections.js", {
  Images(v) {
    Images = v;
  }

}, 2);
let insertUsuario, claveReg, updateEstadoUs, updateUsuario, updateRemoveUs, removeForeverUs, updateCargoUs, updateAvatarUs, updateUserId, updateRolesUs;
module.link("../imports/api/collections/methods_users.js", {
  insertUsuario(v) {
    insertUsuario = v;
  },

  claveReg(v) {
    claveReg = v;
  },

  updateEstadoUs(v) {
    updateEstadoUs = v;
  },

  updateUsuario(v) {
    updateUsuario = v;
  },

  updateRemoveUs(v) {
    updateRemoveUs = v;
  },

  removeForeverUs(v) {
    removeForeverUs = v;
  },

  updateCargoUs(v) {
    updateCargoUs = v;
  },

  updateAvatarUs(v) {
    updateAvatarUs = v;
  },

  updateUserId(v) {
    updateUserId = v;
  },

  updateRolesUs(v) {
    updateRolesUs = v;
  }

}, 3);
let insertCargo, updateCargo, updateCargoNroUs, removeCargo;
module.link("../imports/api/collections/methods_cargos.js", {
  insertCargo(v) {
    insertCargo = v;
  },

  updateCargo(v) {
    updateCargo = v;
  },

  updateCargoNroUs(v) {
    updateCargoNroUs = v;
  },

  removeCargo(v) {
    removeCargo = v;
  }

}, 4);
let insertMedico, updateMedico, updateMedicoUs, removeMedico, updateMedicoEsp;
module.link("../imports/api/collections/methods_medicos.js", {
  insertMedico(v) {
    insertMedico = v;
  },

  updateMedico(v) {
    updateMedico = v;
  },

  updateMedicoUs(v) {
    updateMedicoUs = v;
  },

  removeMedico(v) {
    removeMedico = v;
  },

  updateMedicoEsp(v) {
    updateMedicoEsp = v;
  }

}, 5);
let insertConsultorio, removeConsultorio, updateConsultorio, updateActivConsultorio;
module.link("../imports/api/collections/methods_consultorio.js", {
  insertConsultorio(v) {
    insertConsultorio = v;
  },

  removeConsultorio(v) {
    removeConsultorio = v;
  },

  updateConsultorio(v) {
    updateConsultorio = v;
  },

  updateActivConsultorio(v) {
    updateActivConsultorio = v;
  }

}, 6);
let insertEmpresa, updateEmpresa, removeEmpresa;
module.link("../imports/api/collections/methods_empresas.js", {
  insertEmpresa(v) {
    insertEmpresa = v;
  },

  updateEmpresa(v) {
    updateEmpresa = v;
  },

  removeEmpresa(v) {
    removeEmpresa = v;
  }

}, 7);
let insertTurno, updateTurno, removeTurno;
module.link("../imports/api/collections/methods_turnos", {
  insertTurno(v) {
    insertTurno = v;
  },

  updateTurno(v) {
    updateTurno = v;
  },

  removeTurno(v) {
    removeTurno = v;
  }

}, 8);
let insertSala, updateSala, removeSala, insertCama, updateCama, removeCama, insertServicio, updateServicio, removeServicio;
module.link("../imports/api/collections/methods_salas", {
  insertSala(v) {
    insertSala = v;
  },

  updateSala(v) {
    updateSala = v;
  },

  removeSala(v) {
    removeSala = v;
  },

  insertCama(v) {
    insertCama = v;
  },

  updateCama(v) {
    updateCama = v;
  },

  removeCama(v) {
    removeCama = v;
  },

  insertServicio(v) {
    insertServicio = v;
  },

  updateServicio(v) {
    updateServicio = v;
  },

  removeServicio(v) {
    removeServicio = v;
  }

}, 9);
let insertPaciente, updatePaciente, updatePartAseg, removeAsegDep, removeAsegTit;
module.link("../imports/api/collections/methods_pacientes.js", {
  insertPaciente(v) {
    insertPaciente = v;
  },

  updatePaciente(v) {
    updatePaciente = v;
  },

  updatePartAseg(v) {
    updatePartAseg = v;
  },

  removeAsegDep(v) {
    removeAsegDep = v;
  },

  removeAsegTit(v) {
    removeAsegTit = v;
  }

}, 10);
let insertFicha, ventaFicha, updateEstadoFicha, updateEstadoFichaMed, updateElimFicha, insertReporteFicha, updateReporteFicha, updateMedFicha, insertFichaFarmacia, updateElimFichaFarm, updateFichaFarmacia, updateEstadoFichaEnf, updateFinConsFichaEnf, updateHistLlenaFichaMed, updatePrecioFichaEnf, insertFichaInternacion, removeFichaInternacion, updatePrecioFichaInternacion, updateReporteFichaInternacion, insertDetalleFicha, updatePrecioDetalleFicha, removeDetalleFicha, removeAllDetalleFicha;
module.link("../imports/api/collections/methods_fichas.js", {
  insertFicha(v) {
    insertFicha = v;
  },

  ventaFicha(v) {
    ventaFicha = v;
  },

  updateEstadoFicha(v) {
    updateEstadoFicha = v;
  },

  updateEstadoFichaMed(v) {
    updateEstadoFichaMed = v;
  },

  updateElimFicha(v) {
    updateElimFicha = v;
  },

  insertReporteFicha(v) {
    insertReporteFicha = v;
  },

  updateReporteFicha(v) {
    updateReporteFicha = v;
  },

  updateMedFicha(v) {
    updateMedFicha = v;
  },

  insertFichaFarmacia(v) {
    insertFichaFarmacia = v;
  },

  updateElimFichaFarm(v) {
    updateElimFichaFarm = v;
  },

  updateFichaFarmacia(v) {
    updateFichaFarmacia = v;
  },

  updateEstadoFichaEnf(v) {
    updateEstadoFichaEnf = v;
  },

  updateFinConsFichaEnf(v) {
    updateFinConsFichaEnf = v;
  },

  updateHistLlenaFichaMed(v) {
    updateHistLlenaFichaMed = v;
  },

  updatePrecioFichaEnf(v) {
    updatePrecioFichaEnf = v;
  },

  insertFichaInternacion(v) {
    insertFichaInternacion = v;
  },

  removeFichaInternacion(v) {
    removeFichaInternacion = v;
  },

  updatePrecioFichaInternacion(v) {
    updatePrecioFichaInternacion = v;
  },

  updateReporteFichaInternacion(v) {
    updateReporteFichaInternacion = v;
  },

  insertDetalleFicha(v) {
    insertDetalleFicha = v;
  },

  updatePrecioDetalleFicha(v) {
    updatePrecioDetalleFicha = v;
  },

  removeDetalleFicha(v) {
    removeDetalleFicha = v;
  },

  removeAllDetalleFicha(v) {
    removeAllDetalleFicha = v;
  }

}, 11);
let insertPlanCuenta, removePlanCuenta, updatePlanCuenta;
module.link("../imports/api/collections/methods_plan_cuentas.js", {
  insertPlanCuenta(v) {
    insertPlanCuenta = v;
  },

  removePlanCuenta(v) {
    removePlanCuenta = v;
  },

  updatePlanCuenta(v) {
    updatePlanCuenta = v;
  }

}, 12);
let insertComprobante, insertEstadoConta, updateEstadoConta;
module.link("../imports/api/collections/methods_comprobantes.js", {
  insertComprobante(v) {
    insertComprobante = v;
  },

  insertEstadoConta(v) {
    insertEstadoConta = v;
  },

  updateEstadoConta(v) {
    updateEstadoConta = v;
  }

}, 13);
let insertMayor, updateMayor, updateTotalesMayor;
module.link("../imports/api/collections/methods_mayores.js", {
  insertMayor(v) {
    insertMayor = v;
  },

  updateMayor(v) {
    updateMayor = v;
  },

  updateTotalesMayor(v) {
    updateTotalesMayor = v;
  }

}, 14);
let EstadosFinancieros, updateEstadoFinanciero, removeEstadoFinanciero;
module.link("../imports/api/collections/methods_estados_financieros.js", {
  EstadosFinancieros(v) {
    EstadosFinancieros = v;
  },

  updateEstadoFinanciero(v) {
    updateEstadoFinanciero = v;
  },

  removeEstadoFinanciero(v) {
    removeEstadoFinanciero = v;
  }

}, 15);
let createHistorial, updateHistorial, insertConsulta, insertInternacionPaciente, insertReceta, insertDiagnostico, insertInternacion, insertEvolucionPaciente, insertIndicacionMedica, insertEpicrisisMedica, insertCirugiaMedica, insertQuirofano, updateEditQuirofano, updateQuirofano, removeQuirofano, updateAltaMedicaInternacion, updateAdmisionInternacion, insertConsultaEnfermeria, updateAltaEnfermeriaInternacion, insertIndicacionEnfermeria, updatePagoEnfermeriaInternacion, insertSignosVitales, insertPartos, updateReportadoInternacion;
module.link("../imports/api/collections/methods_historiales.js", {
  createHistorial(v) {
    createHistorial = v;
  },

  updateHistorial(v) {
    updateHistorial = v;
  },

  insertConsulta(v) {
    insertConsulta = v;
  },

  insertInternacionPaciente(v) {
    insertInternacionPaciente = v;
  },

  insertReceta(v) {
    insertReceta = v;
  },

  insertDiagnostico(v) {
    insertDiagnostico = v;
  },

  insertInternacion(v) {
    insertInternacion = v;
  },

  insertEvolucionPaciente(v) {
    insertEvolucionPaciente = v;
  },

  insertIndicacionMedica(v) {
    insertIndicacionMedica = v;
  },

  insertEpicrisisMedica(v) {
    insertEpicrisisMedica = v;
  },

  insertCirugiaMedica(v) {
    insertCirugiaMedica = v;
  },

  insertQuirofano(v) {
    insertQuirofano = v;
  },

  updateEditQuirofano(v) {
    updateEditQuirofano = v;
  },

  updateQuirofano(v) {
    updateQuirofano = v;
  },

  removeQuirofano(v) {
    removeQuirofano = v;
  },

  updateAltaMedicaInternacion(v) {
    updateAltaMedicaInternacion = v;
  },

  updateAdmisionInternacion(v) {
    updateAdmisionInternacion = v;
  },

  insertConsultaEnfermeria(v) {
    insertConsultaEnfermeria = v;
  },

  updateAltaEnfermeriaInternacion(v) {
    updateAltaEnfermeriaInternacion = v;
  },

  insertIndicacionEnfermeria(v) {
    insertIndicacionEnfermeria = v;
  },

  updatePagoEnfermeriaInternacion(v) {
    updatePagoEnfermeriaInternacion = v;
  },

  insertSignosVitales(v) {
    insertSignosVitales = v;
  },

  insertPartos(v) {
    insertPartos = v;
  },

  updateReportadoInternacion(v) {
    updateReportadoInternacion = v;
  }

}, 16);
let insertMedicamento, updateMedicamCant, updateMedicamento, removeMedicamento, insertCompraMedicamento, insertVentaMedicamento, updateStockMedicam, insertReporteFarmacia, updateReporteFarmacia, devolucionMedicamFarmacia, devolucionVentaFarmacia, insertCliente, updateCliente, updateClienteVenta, insertLinea, updateLinea, removeLinea;
module.link("../imports/api/collections/methods_medicamentos.js", {
  insertMedicamento(v) {
    insertMedicamento = v;
  },

  updateMedicamCant(v) {
    updateMedicamCant = v;
  },

  updateMedicamento(v) {
    updateMedicamento = v;
  },

  removeMedicamento(v) {
    removeMedicamento = v;
  },

  insertCompraMedicamento(v) {
    insertCompraMedicamento = v;
  },

  insertVentaMedicamento(v) {
    insertVentaMedicamento = v;
  },

  updateStockMedicam(v) {
    updateStockMedicam = v;
  },

  insertReporteFarmacia(v) {
    insertReporteFarmacia = v;
  },

  updateReporteFarmacia(v) {
    updateReporteFarmacia = v;
  },

  devolucionMedicamFarmacia(v) {
    devolucionMedicamFarmacia = v;
  },

  devolucionVentaFarmacia(v) {
    devolucionVentaFarmacia = v;
  },

  insertCliente(v) {
    insertCliente = v;
  },

  updateCliente(v) {
    updateCliente = v;
  },

  updateClienteVenta(v) {
    updateClienteVenta = v;
  },

  insertLinea(v) {
    insertLinea = v;
  },

  updateLinea(v) {
    updateLinea = v;
  },

  removeLinea(v) {
    removeLinea = v;
  }

}, 17);
let insertRoles, editRoles;
module.link("../imports/api/collections/methods_roles.js", {
  insertRoles(v) {
    insertRoles = v;
  },

  editRoles(v) {
    editRoles = v;
  }

}, 18);
pubs();
/*
var ip = "0.0.0.0";
Meteor.onConnection(function(conn) {
    console.log(Usuarios.find({}));
    console.log(conn.clientAddress);
    console.log(conn.httpHeaders.host);
});*/
///////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvc2VydmVyL3B1YmxpY2F0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfY2FyZ29zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX2NvbXByb2JhbnRlcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19jb25zdWx0b3Jpby5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19lbXByZXNhcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19lc3RhZG9zX2ZpbmFuY2llcm9zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX2ZpY2hhcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19oaXN0b3JpYWxlcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19tYXlvcmVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX21lZGljYW1lbnRvcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19tZWRpY29zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX3BhY2llbnRlcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19wbGFuX2N1ZW50YXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfcm9sZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfc2FsYXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfdHVybm9zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJtb2R1bGUiLCJsaW5rIiwidiIsIlVzdWFyaW9zIiwiQ2xhdmVSZWdpc3RybyIsIkNhcmdvcyIsIkltYWdlcyIsIkVzcGVjaWFsaWRhZGVzIiwiQ29uc3VsdG9yaW9zIiwiTWVkaWNvcyIsIlBhY2llbnRlcyIsIkVtcHJlc2FzIiwiVHVybm9zIiwiU2FsYXMiLCJDYW1hcyIsIk1lZGljYW1lbnRvcyIsIkNvbXByYXMiLCJWZW50YXMiLCJDbGllbnRlcyIsIlJlcG9ydGVGYXJtYWNpYSIsIkZpY2hhcyIsIkZpY2hhc0VuZmVybWVyaWEiLCJSZXBvcnRlRmljaGFzIiwiSGlzdG9yaWFsZXMiLCJDb25zdWx0YXMiLCJJbnRlcm5hY2lvbmVzIiwiUXVpcm9mYW5vIiwiU2lnbm9zVml0YWxlcyIsIlNhbGFQYXJ0b3MiLCJEaWFnbm9zdGljbyIsIkxhYm9yYXRvcmlvcyIsIlBsYW5DdWVudGFzIiwiQ29tcHJvYmFudGVzIiwiTWF5b3JlcyIsIkVzdGFkb3NGaW5hbmNpZXJvcyIsIkVzdGFkb0NvbnRhIiwiTGluZWFzIiwiRmljaGFJbnRlcm5hY2lvbiIsIkRldGFsbGVGaWNoYSIsIlNlcnZpY2lvcyIsImV4cG9ydERlZmF1bHQiLCJwdWJsaXNoIiwiZmluZCIsInNvcnQiLCJub21icmUiLCJhcF9wYXRlcm5vIiwiYXBfbWF0ZXJubyIsIm5vbWJyZV9jb25zIiwibm9tYnJlX2NhcmdvIiwibm9tYnJlX2VtcHJlc2EiLCJub21icmVfdHVybm8iLCJlc3BlY2lhbGlkYWQiLCJub21icmVfc2FsYSIsIm5yb19jYW1hIiwic2VydmljaW8iLCJub21icmVfY29tZXJjaWFsIiwiY29kaWdvX2NvbXByYSIsImNvZGlnb192ZW50YSIsImNvZGlnb19yZXBvcnRlIiwibm9tYnJlX2xpbmVhIiwiY29kaWdvX2FzZWd1cmFkbyIsIm5ybyIsImZlY2hhX3JlZyIsIm5vbWJyZV9kaWFnIiwibm9tYl9ncmFsIiwibm9tYl9hbmFsaXNpcyIsImNvZGlnb19jdWVudGEiLCJmZWNoYSIsImN1cnNvciIsImV4cG9ydCIsIlVzdWFyaW9zSW5kZXgiLCJNZWRpY2FtZW50b3NJbmRleCIsIk1lZGljYW1lbnRvc0ludmVudGFyaW9JbmRleCIsIkNsaWVudGVzSW5kZXgiLCJQYWNpZW50ZXNBc2VnSW5kZXgiLCJQYWNpZW50ZXNJbmRleCIsIkhpc3RvcmlhbGVzSW5kZXgiLCJMYWJvcmF0b3Jpb3NJbmRleCIsIk1vbmdvIiwiSW5kZXgiLCJNaW5pbW9uZ29FbmdpbmUiLCJGaWxlc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uTmFtZSIsImFsbG93Q2xpZW50Q29kZSIsInN0b3JhZ2VQYXRoIiwiZmlsZU9iaiIsIl9pZCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwib25CZWZvcmVVcGxvYWQiLCJmaWxlIiwic2l6ZSIsInRlc3QiLCJleHRlbnNpb24iLCJDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImZpZWxkcyIsImVuZ2luZSIsInNlbGVjdG9yIiwic2VhcmNoT2JqZWN0Iiwib3B0aW9ucyIsImFnZ3JlZ2F0aW9uIiwiZGVmYXVsdENvbmZpZ3VyYXRpb24iLCJlbGltaW5hZG8iLCJkZWZhdWx0U2VhcmNoT3B0aW9ucyIsImxpbWl0IiwiYWN0aXZvIiwiaXRlbSIsImFzZWd1cmFkbyIsImNvZGlnb19oIiwiaW5zZXJ0Q2FyZ28iLCJ1cGRhdGVDYXJnbyIsInVwZGF0ZUNhcmdvTnJvVXMiLCJyZW1vdmVDYXJnbyIsIlZhbGlkYXRlTWV0aG9kIiwiU2ltcGxlU2NoZW1hIiwiVmFsaWRhdGVkTWV0aG9kIiwibmFtZSIsInZhbGlkYXRlIiwidHlwZSIsIlN0cmluZyIsImRlc2NyaXBjaW9uX2NhcmdvIiwibnJvX3VzdWFyaW9zIiwiTnVtYmVyIiwiY29sb3IiLCJ2YWxpZGF0b3IiLCJydW4iLCJpbnNlcnQiLCJpZCIsInVwZGF0ZSIsIiRzZXQiLCJyZW1vdmUiLCJpbnNlcnRDb21wcm9iYW50ZSIsImluc2VydEVzdGFkb0NvbnRhIiwidXBkYXRlRXN0YWRvQ29udGEiLCJucm9fY29tcHJvYmFudGUiLCJ0aXBvX2NvbXByb2JhbnRlIiwiZGlhIiwibWVzIiwiYcOxbyIsIm5yb19jaGVxdWUiLCJnbG9zYSIsImN1ZW50YXMiLCJPYmplY3QiLCJ0b3RhbF9kZWJlIiwidG90YWxfaGFiZXIiLCJEYXRlIiwiYWJpZXJ0byIsIkJvb2xlYW4iLCJjZXJyYWRvIiwiaW5zZXJ0Q29uc3VsdG9yaW8iLCJyZW1vdmVDb25zdWx0b3JpbyIsInVwZGF0ZUNvbnN1bHRvcmlvIiwidXBkYXRlQWN0aXZDb25zdWx0b3JpbyIsImltYWdlbl9jb25zIiwiY29kaWdvX2NvbnMiLCJkZXNjcmlwY2lvbl9jb25zIiwicHJlY2lvX2FzZWciLCJwcmVjaW9fcGFydCIsInByZWNpb19hc2VnX3JlY29ucyIsInByZWNpb19wYXJ0X3JlY29ucyIsInByZWNpb19hc2VnX2VtZXIiLCJwcmVjaW9fcGFydF9lbWVyIiwidGllbXBvX2NvbnN1bHRhIiwidHVybm9zIiwibWVkaWNvX2NvbnMiLCJzaW5faG9yYXJpbyIsImhvcmFfaW5nX2FtIiwiaG9yYV9zYWxfYW0iLCJob3JhX2luZ19wbSIsImhvcmFfc2FsX3BtIiwiaG9yYV9pbmdfbmMiLCJob3JhX3NhbF9uYyIsImx1bmVzX2FtIiwibWFydGVzX2FtIiwibWllcmNvbGVzX2FtIiwianVldmVzX2FtIiwidmllcm5lc19hbSIsInNhYmFkb19hbSIsImx1bmVzX3BtIiwibWFydGVzX3BtIiwibWllcmNvbGVzX3BtIiwianVldmVzX3BtIiwidmllcm5lc19wbSIsInNhYmFkb19wbSIsImx1bmVzX25jIiwibWFydGVzX25jIiwibWllcmNvbGVzX25jIiwianVldmVzX25jIiwidmllcm5lc19uYyIsInNhYmFkb19uYyIsImluc2VydEVtcHJlc2EiLCJ1cGRhdGVFbXByZXNhIiwicmVtb3ZlRW1wcmVzYSIsIm5pdCIsImxvZ28iLCJyZWdpc3RyYWRvX3BvciIsImluc2VydEVzdGFkb0ZpbmFuY2llcm8iLCJ1cGRhdGVFc3RhZG9GaW5hbmNpZXJvIiwicmVtb3ZlRXN0YWRvRmluYW5jaWVybyIsInRpcG8iLCJuaXZlbCIsImdlc3Rpb24iLCJzYWxkbyIsImluc2VydEZpY2hhIiwidmVudGFGaWNoYSIsInVwZGF0ZUVzdGFkb0ZpY2hhIiwidXBkYXRlTWVkRmljaGEiLCJ1cGRhdGVFc3RhZG9GaWNoYU1lZCIsInVwZGF0ZUhpc3RMbGVuYUZpY2hhTWVkIiwidXBkYXRlRWxpbUZpY2hhIiwiaW5zZXJ0UmVwb3J0ZUZpY2hhIiwidXBkYXRlUmVwb3J0ZUZpY2hhIiwiaW5zZXJ0RmljaGFGYXJtYWNpYSIsInVwZGF0ZUVsaW1GaWNoYUZhcm0iLCJ1cGRhdGVGaWNoYUZhcm1hY2lhIiwidXBkYXRlRXN0YWRvRmljaGFFbmYiLCJ1cGRhdGVGaW5Db25zRmljaGFFbmYiLCJ1cGRhdGVQcmVjaW9GaWNoYUVuZiIsImluc2VydERldGFsbGVGaWNoYSIsInVwZGF0ZVByZWNpb0RldGFsbGVGaWNoYSIsInJlbW92ZURldGFsbGVGaWNoYSIsInJlbW92ZUFsbERldGFsbGVGaWNoYSIsImluc2VydEZpY2hhSW50ZXJuYWNpb24iLCJ1cGRhdGVQcmVjaW9GaWNoYUludGVybmFjaW9uIiwidXBkYXRlUmVwb3J0ZUZpY2hhSW50ZXJuYWNpb24iLCJyZW1vdmVGaWNoYUludGVybmFjaW9uIiwiaG9yYV9jb25zIiwiY29uc3VsdG9yaW8iLCJtZWRpY28iLCJvcHRpb25hbCIsImVzdGFkbyIsImZlY2hhX2NvbnMiLCJ0dXJubyIsInByZWNpbyIsInBhY2llbnRlIiwiZW1wbGVhZG9yIiwidGlwb19jb25zdWx0YSIsInBvciIsImVuX2ZlY2giLCJzdWJzdHIiLCJyZXBvcnRhZG8iLCJoaXN0b3JpYV9sbGVuYSIsImZlY2hhX3JlcG9ydGUiLCJob3JhX3JlcG9ydGUiLCJyZXBvcnRlX2VudmlhZG8iLCJ1c19lbnYiLCJ0b3RhbCIsInJlcG9ydGVfcmVjaWJpZG8iLCJkaWFfcmVjIiwibWVzX3JlYyIsImHDsW9fcmVjIiwiaG9yYV9yZWNpYmlkbyIsInVzX3JlYyIsImRpYV9lbnYiLCJtZXNfZW52IiwiYcOxb19lbnYiLCJmZWNoYV9yZWNpYmlkbyIsIiRhbmQiLCIkbmUiLCJtdWx0aSIsInBhZ2FkbyIsImRpYWdub3N0aWNvIiwiZmluX2NvbnN1bHRhIiwiaWRfZmljaGEiLCJwcmVjaW9fZGlhZyIsInBhZ2Fkb19kaWFnIiwiY29kaWdvX2ludGVybmFjaW9uIiwiaWRfcGFjaWVudGUiLCJpZF9zZXJ2aWNpbyIsImRldGFsbGUiLCJtb250byIsImZhY3R1cmEiLCJjcmVhdGVIaXN0b3JpYWwiLCJ1cGRhdGVIaXN0b3JpYWwiLCJpbnNlcnRDb25zdWx0YSIsImluc2VydFJlY2V0YSIsImluc2VydERpYWdub3N0aWNvIiwiaW5zZXJ0Q29uc3VsdGFFbmZlcm1lcmlhIiwiaW5zZXJ0SW50ZXJuYWNpb25QYWNpZW50ZSIsImluc2VydEV2b2x1Y2lvblBhY2llbnRlIiwiaW5zZXJ0SW5kaWNhY2lvbk1lZGljYSIsImluc2VydEluZGljYWNpb25FbmZlcm1lcmlhIiwiaW5zZXJ0RXBpY3Jpc2lzTWVkaWNhIiwiaW5zZXJ0Q2lydWdpYU1lZGljYSIsImluc2VydEludGVybmFjaW9uIiwidXBkYXRlQWRtaXNpb25JbnRlcm5hY2lvbiIsInVwZGF0ZUFsdGFNZWRpY2FJbnRlcm5hY2lvbiIsInVwZGF0ZUFsdGFFbmZlcm1lcmlhSW50ZXJuYWNpb24iLCJ1cGRhdGVQYWdvRW5mZXJtZXJpYUludGVybmFjaW9uIiwidXBkYXRlUmVwb3J0YWRvSW50ZXJuYWNpb24iLCJpbnNlcnRRdWlyb2Zhbm8iLCJ1cGRhdGVFZGl0UXVpcm9mYW5vIiwidXBkYXRlUXVpcm9mYW5vIiwicmVtb3ZlUXVpcm9mYW5vIiwiaW5zZXJ0U2lnbm9zVml0YWxlcyIsImluc2VydFBhcnRvcyIsImNpIiwicmVnX3BvciIsImZlY2hhX2NyZWFjaW9uIiwic2V4byIsImVkYWQiLCJ0aXBvX2VkYWQiLCJkb21pY2lsaW8iLCJvY3VwYWNpb24iLCJmaWNoYV9pZCIsIm5yb19maWNoYSIsImZlY2hhX2NvbnN1bHRhIiwiaG9yYV9jb25zdWx0YSIsInByZV9hcnQiLCJmcmVjX2NhcmQiLCJmcmVjX3Jlc3AiLCJ0ZW1wZXJhdHVyYSIsImdlc3RhcyIsInBhcmEiLCJhYm9ydG9zIiwiY2VzYXJlYXMiLCJmdW0iLCJtb3Rpdm9fY29uc3VsdGEiLCJlbmZlcm1lZGFkX2FjdHVhbCIsImFudF9wYXRvbG9naWNvcyIsImV4YW1lbl9maXNpY28iLCJ0cmF0YW1pZW50byIsImVzdF9zb2xpY2l0YWRvcyIsInJlY29tZW5kYWNpb25lcyIsImFtYnVsYXRvcmlvIiwibWVkaWNhbWVudG8iLCJjYW50aWRhZCIsInVzbyIsIiRwdXNoIiwib3RybyIsImFkbWluaXN0cmFjaW9uIiwidmlhIiwiZW5mZXJtZXJhIiwiYW1idWxhdG9yaW9fZW5mIiwidGlwb19zYWxhIiwic2FsYSIsImNhbWEiLCJmZWNoYV9pbmciLCJob3JhX2luZyIsInBpZWxfbXVjb3NhcyIsImdsYXNnb3ciLCJjYWJlemEiLCJjdWVsbG8iLCJ0b3JheCIsImFiZG9tZW4iLCJleHRyZW1pZGFkZXMiLCJjb25kdWN0YSIsImludGVybmFjaW9uIiwiaG9yYSIsInN1YmpldGl2byIsIm9iamV0aXZvIiwiZXZvbHVjaW9uIiwicGxhbiIsImFuYWxpc2lzIiwiaW5kaWNhY2lvbmVzIiwiaW5kaWNhY2lvbiIsImluZGljYWNpb25fZW5mIiwicmVzdW1lbl9lbmZfYWN0dWFsIiwiZXhwbG9yYWNpb25fZmlzaWNhIiwicHJ1ZWJhc19sYWIiLCJmZWNoYV9xdWlydXJnaWNhIiwiaG9yYV9xdWlydXJnaWNhIiwiZGlhZ25vc3RpY29fcHJlcXVpcnVyZ2ljbyIsImFudGliaW90ZXJhcGlhIiwiaW5kaWNhY2lvbmVzX2FsdGEiLCJ0aXBvX2FsdGEiLCJlc3RhZG9fY2xpbmljb19hbHRhIiwiZGlhZ19kZWZpbml0aXZvIiwibWVkaWNvX3Jlc3BvbnNhYmxlIiwiZmVjaGFfYWx0YSIsImhvcmFfYWx0YSIsImVwaWNyaXNpcyIsImNvZGlnb19jaXJ1Z2lhIiwiZmVjaGFfaW50IiwiY2lydWphbm8iLCJwcm9jZWRpbWllbnRvIiwiZmVjaGFfY2lydWdpYSIsImhvcmFfY2lydWdpYSIsInRpZW1wb19jaXJ1Z2lhIiwiaW5mX2NpcnVnaWEiLCJjaXJ1Z2lhIiwiZGlhX2NpcnVnaWEiLCJtZXNfY2lydWdpYSIsImHDsW9fY2lydWdpYSIsInRyYW5zZmVyaWRvX3BvciIsImFkbWlzaW9uIiwiYWx0YV9tZWRpY2EiLCJhbHRhX2VuZmVybWVyaWEiLCJhZG1pc2lvbl9lbmYiLCJtZWRpY29fYWx0YSIsImFsdGFfbWVkaWNhX2ZlY2hhIiwiYWx0YV9tZWRpY2FfaG9yYSIsImRpYV9hbHRhIiwibWVzX2FsdGEiLCJhw7FvX2FsdGEiLCJmZWNoYV9hbHRhX3JlZyIsImNvYnJhZG9fcG9yIiwib3Ryb3MiLCJmaW5hbGl6YWRvIiwiaW5mb3JtZSIsInNpbl9jb250cm9sIiwibm9tYnJlX2NvbnRyb2wiLCJkYXRvX2NvbnRyb2wiLCJmZWNoYV9zYWxpZGEiLCJob3JhX3NhbGlkYSIsImZlY2hhX25hYyIsImhvcmFfbmFjIiwicGVzbyIsInRhbGxhIiwiZGVzY3JpcGNpb24iLCJkaWFfbmFjIiwibWVzX25hYyIsImHDsW9fbmFjIiwiaW5zZXJ0TWF5b3IiLCJ1cGRhdGVNYXlvciIsInVwZGF0ZVRvdGFsZXNNYXlvciIsImRlYmUiLCJoYWJlciIsIm1vdmltaWVudG9zIiwiaW5zZXJ0TWVkaWNhbWVudG8iLCJ1cGRhdGVNZWRpY2FtQ2FudCIsInVwZGF0ZVN0b2NrTWVkaWNhbSIsInVwZGF0ZU1lZGljYW1lbnRvIiwicmVtb3ZlTWVkaWNhbWVudG8iLCJpbnNlcnRDb21wcmFNZWRpY2FtZW50byIsImluc2VydFZlbnRhTWVkaWNhbWVudG8iLCJkZXZvbHVjaW9uTWVkaWNhbUZhcm1hY2lhIiwiZGV2b2x1Y2lvblZlbnRhRmFybWFjaWEiLCJ1cGRhdGVDbGllbnRlVmVudGEiLCJpbnNlcnRSZXBvcnRlRmFybWFjaWEiLCJ1cGRhdGVSZXBvcnRlRmFybWFjaWEiLCJpbnNlcnRDbGllbnRlIiwidXBkYXRlQ2xpZW50ZSIsImluc2VydExpbmVhIiwidXBkYXRlTGluZWEiLCJyZW1vdmVMaW5lYSIsImxpbmVhIiwibm9tYnJlX2dlbmVyaWNvIiwidW5pZGFkIiwiZmVjaGFfY2FkdWNpZGFkIiwicHVjIiwicHV2IiwiZGV2b2x1Y2lvbiIsImZldGNoIiwiZGV0YWxsZV9jb21wcmEiLCJmZWNoYV9yZWdpc3RybyIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiaWRfdXMiLCJkaWFfcmVnIiwibWVzX3JlZyIsImHDsW9fcmVnIiwiaG9yYV9yZWciLCJiYWphIiwiZGV0YWxsZV92ZW50YSIsImRldnVlbHRvIiwiJHB1bGwiLCJpZF9tZWRpY2FtZW50byIsInRlbGVmb25vIiwiaW5zZXJ0TWVkaWNvIiwidXBkYXRlTWVkaWNvIiwidXBkYXRlTWVkaWNvVXMiLCJyZW1vdmVNZWRpY28iLCJ1cGRhdGVNZWRpY29Fc3AiLCJhc2lnbmFkbyIsImlkVXMiLCJ0aXR1bG8iLCJhdmF0YXIiLCJpbnNlcnRQYWNpZW50ZSIsInVwZGF0ZVBhY2llbnRlIiwidXBkYXRlUGFydEFzZWciLCJyZW1vdmVBc2VnRGVwIiwicmVtb3ZlQXNlZ1RpdCIsInRpcG9fcGFjaWVudGUiLCJwYXJlbnRlc2NvIiwiZmVjaGFfZXh0aW5jaW9uIiwiZGlyZWNjaW9uIiwiZm90byIsIm9ic2VydmFjaW9uZXMiLCJjb2RpZ29fYXNlZ19hbnQiLCJvYnNfZmVjaGEiLCJvYnNfdGl0dWxvIiwib2JzX2NvbmNlcHRvIiwib2JzX3Byb3BpZXRhcmlvIiwiaW5zZXJ0UGxhbkN1ZW50YSIsInJlbW92ZVBsYW5DdWVudGEiLCJ1cGRhdGVQbGFuQ3VlbnRhIiwiY29kaWdvX3N1cGVyaW9yIiwibm9tYnJlX2N1ZW50YSIsImN1ZW50YV9tYXlvciIsImxpYnJvX21heW9yIiwiaW5zZXJ0Um9sZXMiLCJlZGl0Um9sZXMiLCJ1c2VySWQiLCJyb2xlcyIsIlJvbGVzIiwiYWRkVXNlcnNUb1JvbGVzIiwic2V0VXNlclJvbGVzIiwiaW5zZXJ0U2FsYSIsInVwZGF0ZVNhbGEiLCJyZW1vdmVTYWxhIiwiaW5zZXJ0Q2FtYSIsInVwZGF0ZUNhbWEiLCJyZW1vdmVDYW1hIiwiaW5zZXJ0U2VydmljaW8iLCJ1cGRhdGVTZXJ2aWNpbyIsInJlbW92ZVNlcnZpY2lvIiwiaW1hZ2VuIiwiaWRfc2FsYSIsIm9jdXBhZG8iLCJpbnNlcnRUdXJubyIsInVwZGF0ZVR1cm5vIiwicmVtb3ZlVHVybm8iLCJjb2RpZ29fdHVybm8iLCJpbWFnZW5fdHVybm8iLCJtZWRpY29zIiwiaW5zZXJ0VXN1YXJpbyIsImNsYXZlUmVnIiwidXBkYXRlRXN0YWRvVXMiLCJ1cGRhdGVSb2xlc1VzIiwidXBkYXRlVXN1YXJpbyIsInVwZGF0ZVJlbW92ZVVzIiwicmVtb3ZlRm9yZXZlclVzIiwidXBkYXRlQ2FyZ29VcyIsInVwZGF0ZUF2YXRhclVzIiwidXBkYXRlVXNlcklkIiwic3Vic2lzdGVtYSIsImZlY2hhX25hY2ltaWVudG8iLCJjZWx1bGFyIiwidGVsZl9yZWZlcmVuY2lhIiwidXNlciIsInBhc3N3b3JkIiwicHJvcGlldGFyaW9fcmVnIiwicHJvcGlldGFyaW9fZWxpbSIsImZlY2hhX2VsaW0iLCJjb2RpZ29SZWciLCJjYXJnbyIsInB1YnMiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUMsUUFBSixFQUFhQyxhQUFiLEVBQTJCQyxNQUEzQixFQUFrQ0MsTUFBbEMsRUFBeUNDLGNBQXpDLEVBQXdEQyxZQUF4RCxFQUFxRUMsT0FBckUsRUFBNkVDLFNBQTdFLEVBQXVGQyxRQUF2RixFQUFnR0MsTUFBaEcsRUFBdUdDLEtBQXZHLEVBQTZHQyxLQUE3RyxFQUFtSEMsWUFBbkgsRUFBZ0lDLE9BQWhJLEVBQXdJQyxNQUF4SSxFQUErSUMsUUFBL0ksRUFBd0pDLGVBQXhKLEVBQXdLQyxNQUF4SyxFQUErS0MsZ0JBQS9LLEVBQWdNQyxhQUFoTSxFQUE4TUMsV0FBOU0sRUFBME5DLFNBQTFOLEVBQW9PQyxhQUFwTyxFQUFrUEMsU0FBbFAsRUFBNFBDLGFBQTVQLEVBQTBRQyxVQUExUSxFQUFxUkMsV0FBclIsRUFBaVNDLFlBQWpTLEVBQThTQyxXQUE5UyxFQUEwVEMsWUFBMVQsRUFBdVVDLE9BQXZVLEVBQStVQyxrQkFBL1UsRUFBa1dDLFdBQWxXLEVBQThXQyxNQUE5VyxFQUFxWEMsZ0JBQXJYLEVBQXNZQyxZQUF0WSxFQUFtWkMsU0FBblo7QUFBNlp2QyxNQUFNLENBQUNDLElBQVAsQ0FBWSxtQkFBWixFQUFnQztBQUFDRSxVQUFRLENBQUNELENBQUQsRUFBRztBQUFDQyxZQUFRLEdBQUNELENBQVQ7QUFBVyxHQUF4Qjs7QUFBeUJFLGVBQWEsQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNFLGlCQUFhLEdBQUNGLENBQWQ7QUFBZ0IsR0FBMUQ7O0FBQTJERyxRQUFNLENBQUNILENBQUQsRUFBRztBQUFDRyxVQUFNLEdBQUNILENBQVA7QUFBUyxHQUE5RTs7QUFBK0VJLFFBQU0sQ0FBQ0osQ0FBRCxFQUFHO0FBQUNJLFVBQU0sR0FBQ0osQ0FBUDtBQUFTLEdBQWxHOztBQUFtR0ssZ0JBQWMsQ0FBQ0wsQ0FBRCxFQUFHO0FBQUNLLGtCQUFjLEdBQUNMLENBQWY7QUFBaUIsR0FBdEk7O0FBQXVJTSxjQUFZLENBQUNOLENBQUQsRUFBRztBQUFDTSxnQkFBWSxHQUFDTixDQUFiO0FBQWUsR0FBdEs7O0FBQXVLTyxTQUFPLENBQUNQLENBQUQsRUFBRztBQUFDTyxXQUFPLEdBQUNQLENBQVI7QUFBVSxHQUE1TDs7QUFBNkxRLFdBQVMsQ0FBQ1IsQ0FBRCxFQUFHO0FBQUNRLGFBQVMsR0FBQ1IsQ0FBVjtBQUFZLEdBQXROOztBQUF1TlMsVUFBUSxDQUFDVCxDQUFELEVBQUc7QUFBQ1MsWUFBUSxHQUFDVCxDQUFUO0FBQVcsR0FBOU87O0FBQStPVSxRQUFNLENBQUNWLENBQUQsRUFBRztBQUFDVSxVQUFNLEdBQUNWLENBQVA7QUFBUyxHQUFsUTs7QUFBbVFXLE9BQUssQ0FBQ1gsQ0FBRCxFQUFHO0FBQUNXLFNBQUssR0FBQ1gsQ0FBTjtBQUFRLEdBQXBSOztBQUFxUlksT0FBSyxDQUFDWixDQUFELEVBQUc7QUFBQ1ksU0FBSyxHQUFDWixDQUFOO0FBQVEsR0FBdFM7O0FBQXVTYSxjQUFZLENBQUNiLENBQUQsRUFBRztBQUFDYSxnQkFBWSxHQUFDYixDQUFiO0FBQWUsR0FBdFU7O0FBQXVVYyxTQUFPLENBQUNkLENBQUQsRUFBRztBQUFDYyxXQUFPLEdBQUNkLENBQVI7QUFBVSxHQUE1Vjs7QUFBNlZlLFFBQU0sQ0FBQ2YsQ0FBRCxFQUFHO0FBQUNlLFVBQU0sR0FBQ2YsQ0FBUDtBQUFTLEdBQWhYOztBQUFpWGdCLFVBQVEsQ0FBQ2hCLENBQUQsRUFBRztBQUFDZ0IsWUFBUSxHQUFDaEIsQ0FBVDtBQUFXLEdBQXhZOztBQUF5WWlCLGlCQUFlLENBQUNqQixDQUFELEVBQUc7QUFBQ2lCLG1CQUFlLEdBQUNqQixDQUFoQjtBQUFrQixHQUE5YTs7QUFBK2FrQixRQUFNLENBQUNsQixDQUFELEVBQUc7QUFBQ2tCLFVBQU0sR0FBQ2xCLENBQVA7QUFBUyxHQUFsYzs7QUFBbWNtQixrQkFBZ0IsQ0FBQ25CLENBQUQsRUFBRztBQUFDbUIsb0JBQWdCLEdBQUNuQixDQUFqQjtBQUFtQixHQUExZTs7QUFBMmVvQixlQUFhLENBQUNwQixDQUFELEVBQUc7QUFBQ29CLGlCQUFhLEdBQUNwQixDQUFkO0FBQWdCLEdBQTVnQjs7QUFBNmdCcUIsYUFBVyxDQUFDckIsQ0FBRCxFQUFHO0FBQUNxQixlQUFXLEdBQUNyQixDQUFaO0FBQWMsR0FBMWlCOztBQUEyaUJzQixXQUFTLENBQUN0QixDQUFELEVBQUc7QUFBQ3NCLGFBQVMsR0FBQ3RCLENBQVY7QUFBWSxHQUFwa0I7O0FBQXFrQnVCLGVBQWEsQ0FBQ3ZCLENBQUQsRUFBRztBQUFDdUIsaUJBQWEsR0FBQ3ZCLENBQWQ7QUFBZ0IsR0FBdG1COztBQUF1bUJ3QixXQUFTLENBQUN4QixDQUFELEVBQUc7QUFBQ3dCLGFBQVMsR0FBQ3hCLENBQVY7QUFBWSxHQUFob0I7O0FBQWlvQnlCLGVBQWEsQ0FBQ3pCLENBQUQsRUFBRztBQUFDeUIsaUJBQWEsR0FBQ3pCLENBQWQ7QUFBZ0IsR0FBbHFCOztBQUFtcUIwQixZQUFVLENBQUMxQixDQUFELEVBQUc7QUFBQzBCLGNBQVUsR0FBQzFCLENBQVg7QUFBYSxHQUE5ckI7O0FBQStyQjJCLGFBQVcsQ0FBQzNCLENBQUQsRUFBRztBQUFDMkIsZUFBVyxHQUFDM0IsQ0FBWjtBQUFjLEdBQTV0Qjs7QUFBNnRCNEIsY0FBWSxDQUFDNUIsQ0FBRCxFQUFHO0FBQUM0QixnQkFBWSxHQUFDNUIsQ0FBYjtBQUFlLEdBQTV2Qjs7QUFBNnZCNkIsYUFBVyxDQUFDN0IsQ0FBRCxFQUFHO0FBQUM2QixlQUFXLEdBQUM3QixDQUFaO0FBQWMsR0FBMXhCOztBQUEyeEI4QixjQUFZLENBQUM5QixDQUFELEVBQUc7QUFBQzhCLGdCQUFZLEdBQUM5QixDQUFiO0FBQWUsR0FBMXpCOztBQUEyekIrQixTQUFPLENBQUMvQixDQUFELEVBQUc7QUFBQytCLFdBQU8sR0FBQy9CLENBQVI7QUFBVSxHQUFoMUI7O0FBQWkxQmdDLG9CQUFrQixDQUFDaEMsQ0FBRCxFQUFHO0FBQUNnQyxzQkFBa0IsR0FBQ2hDLENBQW5CO0FBQXFCLEdBQTUzQjs7QUFBNjNCaUMsYUFBVyxDQUFDakMsQ0FBRCxFQUFHO0FBQUNpQyxlQUFXLEdBQUNqQyxDQUFaO0FBQWMsR0FBMTVCOztBQUEyNUJrQyxRQUFNLENBQUNsQyxDQUFELEVBQUc7QUFBQ2tDLFVBQU0sR0FBQ2xDLENBQVA7QUFBUyxHQUE5NkI7O0FBQSs2Qm1DLGtCQUFnQixDQUFDbkMsQ0FBRCxFQUFHO0FBQUNtQyxvQkFBZ0IsR0FBQ25DLENBQWpCO0FBQW1CLEdBQXQ5Qjs7QUFBdTlCb0MsY0FBWSxDQUFDcEMsQ0FBRCxFQUFHO0FBQUNvQyxnQkFBWSxHQUFDcEMsQ0FBYjtBQUFlLEdBQXQvQjs7QUFBdS9CcUMsV0FBUyxDQUFDckMsQ0FBRCxFQUFHO0FBQUNxQyxhQUFTLEdBQUNyQyxDQUFWO0FBQVk7O0FBQWhoQyxDQUFoQyxFQUFrakMsQ0FBbGpDO0FBQTdkRixNQUFNLENBQUN3QyxhQUFQLENBR2UsWUFBVTtBQUNyQjs7Ozs7QUFNSDtBQUNHekMsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFVBQWYsRUFBMkIsWUFBVTtBQUNqQyxXQUFPdEMsUUFBUSxDQUFDdUMsSUFBVCxDQUFjLEVBQWQsRUFBaUI7QUFBQ0MsVUFBSSxFQUFDO0FBQUNDLGNBQU0sRUFBRSxDQUFUO0FBQVlDLGtCQUFVLEVBQUUsQ0FBeEI7QUFBMkJDLGtCQUFVLEVBQUU7QUFBdkM7QUFBTixLQUFqQixDQUFQLENBRGlDLENBQ3lDO0FBQzdFLEdBRkQ7QUFHQS9DLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxlQUFmLEVBQWdDLFlBQVU7QUFDdEMsV0FBT3JDLGFBQWEsQ0FBQ3NDLElBQWQsQ0FBbUIsRUFBbkIsQ0FBUDtBQUNILEdBRkQ7QUFHQTs7OztBQUdBOzs7QUFHQTs7QUFDQTNDLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxjQUFmLEVBQStCLFlBQVU7QUFDckMsV0FBT2pDLFlBQVksQ0FBQ2tDLElBQWIsQ0FBa0IsRUFBbEIsRUFBc0I7QUFBQ0MsVUFBSSxFQUFFO0FBQUNJLG1CQUFXLEVBQUU7QUFBZDtBQUFQLEtBQXRCLENBQVA7QUFDSCxHQUZELEVBckJxQixDQXdCckI7O0FBQ0FoRCxRQUFNLENBQUMwQyxPQUFQLENBQWUsUUFBZixFQUF5QixZQUFVO0FBQy9CLFdBQU9wQyxNQUFNLENBQUNxQyxJQUFQLENBQVksRUFBWixFQUFnQjtBQUFDQyxVQUFJLEVBQUU7QUFBQ0ssb0JBQVksRUFBRTtBQUFmO0FBQVAsS0FBaEIsQ0FBUDtBQUNILEdBRkQsRUF6QnFCLENBNEJyQjs7QUFDQWpELFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxVQUFmLEVBQTJCLFlBQVU7QUFDakMsV0FBTzlCLFFBQVEsQ0FBQytCLElBQVQsQ0FBYyxFQUFkLEVBQWtCO0FBQUNDLFVBQUksRUFBRTtBQUFDTSxzQkFBYyxFQUFFO0FBQWpCO0FBQVAsS0FBbEIsQ0FBUDtBQUNILEdBRkQsRUE3QnFCLENBZ0NyQjs7QUFDQWxELFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxRQUFmLEVBQXlCLFlBQVU7QUFDL0IsV0FBTzdCLE1BQU0sQ0FBQzhCLElBQVAsQ0FBWSxFQUFaLEVBQWdCO0FBQUNDLFVBQUksRUFBRTtBQUFDTyxvQkFBWSxFQUFFO0FBQWY7QUFBUCxLQUFoQixDQUFQO0FBQ0gsR0FGRCxFQWpDcUIsQ0FvQ3JCOztBQUNBbkQsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFNBQWYsRUFBMEIsWUFBVTtBQUNoQyxXQUFPaEMsT0FBTyxDQUFDaUMsSUFBUixDQUFhLEVBQWIsRUFBZ0I7QUFBQ0MsVUFBSSxFQUFFO0FBQUNRLG9CQUFZLEVBQUU7QUFBZjtBQUFQLEtBQWhCLENBQVA7QUFDSCxHQUZELEVBckNxQixDQXdDckI7O0FBQ0FwRCxRQUFNLENBQUMwQyxPQUFQLENBQWUsT0FBZixFQUF3QixZQUFVO0FBQzlCLFdBQU81QixLQUFLLENBQUM2QixJQUFOLENBQVcsRUFBWCxFQUFjO0FBQUNDLFVBQUksRUFBRTtBQUFDUyxtQkFBVyxFQUFFO0FBQWQ7QUFBUCxLQUFkLENBQVA7QUFDSCxHQUZELEVBekNxQixDQTRDckI7O0FBQ0FyRCxRQUFNLENBQUMwQyxPQUFQLENBQWUsT0FBZixFQUF3QixZQUFVO0FBQzlCLFdBQU8zQixLQUFLLENBQUM0QixJQUFOLENBQVcsRUFBWCxFQUFjO0FBQUNDLFVBQUksRUFBRTtBQUFDVSxnQkFBUSxFQUFFO0FBQVg7QUFBUCxLQUFkLENBQVA7QUFDSCxHQUZELEVBN0NxQixDQWdEckI7O0FBQ0F0RCxRQUFNLENBQUMwQyxPQUFQLENBQWUsV0FBZixFQUE0QixZQUFVO0FBQ2xDLFdBQU9GLFNBQVMsQ0FBQ0csSUFBVixDQUFlLEVBQWYsRUFBa0I7QUFBQ0MsVUFBSSxFQUFFO0FBQUNXLGdCQUFRLEVBQUU7QUFBWDtBQUFQLEtBQWxCLENBQVA7QUFDSCxHQUZELEVBakRxQixDQXVEekI7QUFDSTs7QUFDQXZELFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxjQUFmLEVBQStCLFlBQVU7QUFDckMsV0FBTzFCLFlBQVksQ0FBQzJCLElBQWIsQ0FBa0IsRUFBbEIsRUFBcUI7QUFBQ0MsVUFBSSxFQUFFO0FBQUNZLHdCQUFnQixFQUFFO0FBQW5CO0FBQVAsS0FBckIsQ0FBUDtBQUNILEdBRkQsRUF6RHFCLENBNERyQjs7QUFDQXhELFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxTQUFmLEVBQTBCLFlBQVU7QUFDaEMsV0FBT3pCLE9BQU8sQ0FBQzBCLElBQVIsQ0FBYSxFQUFiLEVBQWdCO0FBQUNDLFVBQUksRUFBRTtBQUFDYSxxQkFBYSxFQUFFLENBQUM7QUFBakI7QUFBUCxLQUFoQixDQUFQO0FBQ0gsR0FGRCxFQTdEcUIsQ0FnRXJCOztBQUNBekQsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFFBQWYsRUFBeUIsWUFBVTtBQUMvQixXQUFPeEIsTUFBTSxDQUFDeUIsSUFBUCxDQUFZLEVBQVosRUFBZTtBQUFDQyxVQUFJLEVBQUU7QUFBQ2Msb0JBQVksRUFBRTtBQUFmO0FBQVAsS0FBZixDQUFQO0FBQ0gsR0FGRCxFQWpFcUIsQ0FvRXJCOztBQUNBMUQsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLGlCQUFmLEVBQWtDLFlBQVU7QUFDeEMsV0FBT3RCLGVBQWUsQ0FBQ3VCLElBQWhCLENBQXFCLEVBQXJCLEVBQXlCO0FBQUNDLFVBQUksRUFBRTtBQUFDZSxzQkFBYyxFQUFFLENBQUM7QUFBbEI7QUFBUCxLQUF6QixDQUFQO0FBQ0gsR0FGRCxFQXJFcUIsQ0F3RXJCOztBQUNBM0QsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFVBQWYsRUFBMkIsWUFBVTtBQUNqQyxXQUFPdkIsUUFBUSxDQUFDd0IsSUFBVCxDQUFjLEVBQWQsRUFBa0I7QUFBQ0MsVUFBSSxFQUFFO0FBQUNDLGNBQU0sRUFBRTtBQUFUO0FBQVAsS0FBbEIsQ0FBUDtBQUNILEdBRkQsRUF6RXFCLENBNEVyQjs7QUFDQTdDLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxRQUFmLEVBQXlCLFlBQVU7QUFDL0IsV0FBT0wsTUFBTSxDQUFDTSxJQUFQLENBQVksRUFBWixFQUFnQjtBQUFDQyxVQUFJLEVBQUU7QUFBQ2dCLG9CQUFZLEVBQUU7QUFBZjtBQUFQLEtBQWhCLENBQVA7QUFDSCxHQUZELEVBN0VxQixDQWdGekI7QUFDSTs7QUFDQTVELFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxXQUFmLEVBQTRCLFlBQVU7QUFDbEMsV0FBTy9CLFNBQVMsQ0FBQ2dDLElBQVYsQ0FBZSxFQUFmLEVBQWtCO0FBQUNDLFVBQUksRUFBRTtBQUFDaUIsd0JBQWdCLEVBQUU7QUFBbkI7QUFBUCxLQUFsQixDQUFQO0FBQ0gsR0FGRCxFQWxGcUIsQ0FxRnJCOztBQUNBN0QsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFFBQWYsRUFBeUIsWUFBVTtBQUMvQixXQUFPckIsTUFBTSxDQUFDc0IsSUFBUCxDQUFZLEVBQVosQ0FBUDtBQUNILEdBRkQsRUF0RnFCLENBeUZyQjs7QUFDQTNDLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxrQkFBZixFQUFtQyxZQUFVO0FBQ3pDLFdBQU9wQixnQkFBZ0IsQ0FBQ3FCLElBQWpCLENBQXNCLEVBQXRCLEVBQXlCO0FBQUNDLFVBQUksRUFBRTtBQUFDa0IsV0FBRyxFQUFFLENBQUM7QUFBUDtBQUFQLEtBQXpCLENBQVA7QUFDSCxHQUZELEVBMUZxQixDQTZGckI7O0FBQ0E5RCxRQUFNLENBQUMwQyxPQUFQLENBQWUsZUFBZixFQUFnQyxZQUFVO0FBQ3RDLFdBQU9uQixhQUFhLENBQUNvQixJQUFkLENBQW1CLEVBQW5CLENBQVA7QUFDSCxHQUZELEVBOUZxQixDQWlHckI7O0FBQ0EzQyxRQUFNLENBQUMwQyxPQUFQLENBQWUsa0JBQWYsRUFBbUMsWUFBVTtBQUN6QyxXQUFPSixnQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0IsRUFBdEIsRUFBMEI7QUFBQ0MsVUFBSSxFQUFFO0FBQUNtQixpQkFBUyxFQUFFO0FBQVo7QUFBUCxLQUExQixDQUFQO0FBQ0gsR0FGRCxFQWxHcUIsQ0FzR3JCOztBQUNBL0QsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLGNBQWYsRUFBK0IsWUFBVTtBQUNyQyxXQUFPSCxZQUFZLENBQUNJLElBQWIsQ0FBa0IsRUFBbEIsQ0FBUDtBQUNILEdBRkQsRUF2R3FCLENBMkd6Qjs7QUFDSTNDLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxhQUFmLEVBQThCLFlBQVU7QUFDcEMsV0FBT2xCLFdBQVcsQ0FBQ21CLElBQVosQ0FBaUIsRUFBakIsQ0FBUDtBQUNILEdBRkQsRUE1R3FCLENBK0dyQjs7QUFDQTNDLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxhQUFmLEVBQThCLFlBQVU7QUFDcEMsV0FBT1osV0FBVyxDQUFDYSxJQUFaLENBQWlCLEVBQWpCLEVBQW9CO0FBQUNDLFVBQUksRUFBRTtBQUFDb0IsbUJBQVcsRUFBRTtBQUFkO0FBQVAsS0FBcEIsQ0FBUDtBQUNILEdBRkQsRUFoSHFCLENBbUhyQjs7QUFDQWhFLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxjQUFmLEVBQStCLFlBQVU7QUFDckMsV0FBT1gsWUFBWSxDQUFDWSxJQUFiLENBQWtCLEVBQWxCLEVBQXFCO0FBQUNDLFVBQUksRUFBRTtBQUFDcUIsaUJBQVMsRUFBRSxDQUFaO0FBQWVDLHFCQUFhLEVBQUU7QUFBOUI7QUFBUCxLQUFyQixDQUFQO0FBQ0gsR0FGRCxFQXBIcUIsQ0F1SHJCOztBQUNBbEUsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFdBQWYsRUFBNEIsWUFBVTtBQUNsQyxXQUFPakIsU0FBUyxDQUFDa0IsSUFBVixDQUFlLEVBQWYsRUFBa0I7QUFBQ0MsVUFBSSxFQUFFO0FBQUNtQixpQkFBUyxFQUFFO0FBQVo7QUFBUCxLQUFsQixDQUFQO0FBQ0gsR0FGRCxFQXhIcUIsQ0EySHJCOztBQUNBL0QsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLGVBQWYsRUFBZ0MsWUFBVTtBQUN0QyxXQUFPaEIsYUFBYSxDQUFDaUIsSUFBZCxDQUFtQixFQUFuQixFQUFzQjtBQUFDQyxVQUFJLEVBQUU7QUFBQ21CLGlCQUFTLEVBQUU7QUFBWjtBQUFQLEtBQXRCLENBQVA7QUFDSCxHQUZELEVBNUhxQixDQWdJckI7O0FBQ0EvRCxRQUFNLENBQUMwQyxPQUFQLENBQWUsV0FBZixFQUE0QixZQUFVO0FBQ2xDLFdBQU9mLFNBQVMsQ0FBQ2dCLElBQVYsQ0FBZSxFQUFmLENBQVA7QUFDSCxHQUZELEVBaklxQixDQXFJckI7O0FBQ0EzQyxRQUFNLENBQUMwQyxPQUFQLENBQWUsZUFBZixFQUFnQyxZQUFVO0FBQ3RDLFdBQU9kLGFBQWEsQ0FBQ2UsSUFBZCxDQUFtQixFQUFuQixDQUFQO0FBQ0gsR0FGRCxFQXRJcUIsQ0EwSXJCOztBQUNBM0MsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFlBQWYsRUFBNkIsWUFBVTtBQUNuQyxXQUFPYixVQUFVLENBQUNjLElBQVgsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUNILEdBRkQsRUEzSXFCLENBK0l6QjtBQUNJOztBQUNBM0MsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLGFBQWYsRUFBOEIsWUFBVTtBQUNwQyxXQUFPVixXQUFXLENBQUNXLElBQVosQ0FBaUIsRUFBakIsRUFBcUI7QUFBQ0MsVUFBSSxFQUFFO0FBQUN1QixxQkFBYSxFQUFFO0FBQWhCO0FBQVAsS0FBckIsQ0FBUDtBQUNILEdBRkQsRUFqSnFCLENBb0pyQjs7QUFDQW5FLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxjQUFmLEVBQStCLFlBQVU7QUFDckMsV0FBT1QsWUFBWSxDQUFDVSxJQUFiLENBQWtCLEVBQWxCLEVBQXNCO0FBQUNDLFVBQUksRUFBRTtBQUFDd0IsYUFBSyxFQUFFO0FBQVI7QUFBUCxLQUF0QixDQUFQO0FBQ0gsR0FGRCxFQXJKcUIsQ0F3SnJCOztBQUNBcEUsUUFBTSxDQUFDMEMsT0FBUCxDQUFlLFNBQWYsRUFBMEIsWUFBVTtBQUNoQyxXQUFPUixPQUFPLENBQUNTLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDSCxHQUZELEVBekpxQixDQTRKckI7O0FBQ0EzQyxRQUFNLENBQUMwQyxPQUFQLENBQWUsb0JBQWYsRUFBcUMsWUFBVTtBQUMzQyxXQUFPUCxrQkFBa0IsQ0FBQ1EsSUFBbkIsQ0FBd0IsRUFBeEIsQ0FBUDtBQUNILEdBRkQsRUE3SnFCLENBZ0tyQjs7QUFDQTNDLFFBQU0sQ0FBQzBDLE9BQVAsQ0FBZSxhQUFmLEVBQThCLFlBQVU7QUFDcEMsV0FBT04sV0FBVyxDQUFDTyxJQUFaLENBQWlCLEVBQWpCLENBQVA7QUFDSCxHQUZEO0FBSUEzQyxRQUFNLENBQUMwQyxPQUFQLENBQWUsUUFBZixFQUF5QixZQUFVO0FBQy9CLFdBQU9uQyxNQUFNLENBQUNvQyxJQUFQLEdBQWMwQixNQUFyQjtBQUNILEdBRkQ7QUFRSCxDQWhMRDtBQWdMQyxDOzs7Ozs7Ozs7OztBQ2hMRHBFLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUFDL0QsUUFBTSxFQUFDLE1BQUlBLE1BQVo7QUFBbUJILFVBQVEsRUFBQyxNQUFJQSxRQUFoQztBQUF5Q21FLGVBQWEsRUFBQyxNQUFJQSxhQUEzRDtBQUF5RWxFLGVBQWEsRUFBQyxNQUFJQSxhQUEzRjtBQUF5R0csZ0JBQWMsRUFBQyxNQUFJQSxjQUE1SDtBQUEySUMsY0FBWSxFQUFDLE1BQUlBLFlBQTVKO0FBQXlLSCxRQUFNLEVBQUMsTUFBSUEsTUFBcEw7QUFBMkxJLFNBQU8sRUFBQyxNQUFJQSxPQUF2TTtBQUErTUUsVUFBUSxFQUFDLE1BQUlBLFFBQTVOO0FBQXFPQyxRQUFNLEVBQUMsTUFBSUEsTUFBaFA7QUFBdVBDLE9BQUssRUFBQyxNQUFJQSxLQUFqUTtBQUF1UUMsT0FBSyxFQUFDLE1BQUlBLEtBQWpSO0FBQXVSeUIsV0FBUyxFQUFDLE1BQUlBLFNBQXJTO0FBQStTeEIsY0FBWSxFQUFDLE1BQUlBLFlBQWhVO0FBQTZVd0QsbUJBQWlCLEVBQUMsTUFBSUEsaUJBQW5XO0FBQXFYQyw2QkFBMkIsRUFBQyxNQUFJQSwyQkFBclo7QUFBaWJ4RCxTQUFPLEVBQUMsTUFBSUEsT0FBN2I7QUFBcWNDLFFBQU0sRUFBQyxNQUFJQSxNQUFoZDtBQUF1ZEUsaUJBQWUsRUFBQyxNQUFJQSxlQUEzZTtBQUEyZkQsVUFBUSxFQUFDLE1BQUlBLFFBQXhnQjtBQUFpaEJ1RCxlQUFhLEVBQUMsTUFBSUEsYUFBbmlCO0FBQWlqQnJDLFFBQU0sRUFBQyxNQUFJQSxNQUE1akI7QUFBbWtCMUIsV0FBUyxFQUFDLE1BQUlBLFNBQWpsQjtBQUEybEJnRSxvQkFBa0IsRUFBQyxNQUFJQSxrQkFBbG5CO0FBQXFvQkMsZ0JBQWMsRUFBQyxNQUFJQSxjQUF4cEI7QUFBdXFCdkQsUUFBTSxFQUFDLE1BQUlBLE1BQWxyQjtBQUF5ckJDLGtCQUFnQixFQUFDLE1BQUlBLGdCQUE5c0I7QUFBK3RCQyxlQUFhLEVBQUMsTUFBSUEsYUFBanZCO0FBQSt2QmUsa0JBQWdCLEVBQUMsTUFBSUEsZ0JBQXB4QjtBQUFxeUJDLGNBQVksRUFBQyxNQUFJQSxZQUF0ekI7QUFBbTBCVCxhQUFXLEVBQUMsTUFBSUEsV0FBbjFCO0FBQSsxQk4sYUFBVyxFQUFDLE1BQUlBLFdBQS8yQjtBQUEyM0JxRCxrQkFBZ0IsRUFBQyxNQUFJQSxnQkFBaDVCO0FBQWk2QnBELFdBQVMsRUFBQyxNQUFJQSxTQUEvNkI7QUFBeTdCTSxjQUFZLEVBQUMsTUFBSUEsWUFBMThCO0FBQXU5QitDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUE3K0I7QUFBKy9CcEQsZUFBYSxFQUFDLE1BQUlBLGFBQWpoQztBQUEraENDLFdBQVMsRUFBQyxNQUFJQSxTQUE3aUM7QUFBdWpDQyxlQUFhLEVBQUMsTUFBSUEsYUFBemtDO0FBQXVsQ0MsWUFBVSxFQUFDLE1BQUlBLFVBQXRtQztBQUFpbkNHLGFBQVcsRUFBQyxNQUFJQSxXQUFqb0M7QUFBNm9DQyxjQUFZLEVBQUMsTUFBSUEsWUFBOXBDO0FBQTJxQ0MsU0FBTyxFQUFDLE1BQUlBLE9BQXZyQztBQUErckNDLG9CQUFrQixFQUFDLE1BQUlBLGtCQUF0dEM7QUFBeXVDQyxhQUFXLEVBQUMsTUFBSUE7QUFBenZDLENBQWQ7QUFBcXhDLElBQUlwQyxNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUk0RSxLQUFKO0FBQVU5RSxNQUFNLENBQUNDLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUM2RSxPQUFLLENBQUM1RSxDQUFELEVBQUc7QUFBQzRFLFNBQUssR0FBQzVFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFBa0QsSUFBSTZFLEtBQUosRUFBVUMsZUFBVjtBQUEwQmhGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG9CQUFaLEVBQWlDO0FBQUM4RSxPQUFLLENBQUM3RSxDQUFELEVBQUc7QUFBQzZFLFNBQUssR0FBQzdFLENBQU47QUFBUSxHQUFsQjs7QUFBbUI4RSxpQkFBZSxDQUFDOUUsQ0FBRCxFQUFHO0FBQUM4RSxtQkFBZSxHQUFDOUUsQ0FBaEI7QUFBa0I7O0FBQXhELENBQWpDLEVBQTJGLENBQTNGO0FBQThGLElBQUkrRSxlQUFKO0FBQW9CakYsTUFBTSxDQUFDQyxJQUFQLENBQVkscUJBQVosRUFBa0M7QUFBQ2dGLGlCQUFlLENBQUMvRSxDQUFELEVBQUc7QUFBQytFLG1CQUFlLEdBQUMvRSxDQUFoQjtBQUFrQjs7QUFBdEMsQ0FBbEMsRUFBMEUsQ0FBMUU7QUFjbGhELE1BQU1JLE1BQU0sR0FBRyxJQUFJMkUsZUFBSixDQUFvQjtBQUN0QztBQUNBQyxnQkFBYyxFQUFFLFFBRnNCO0FBR3RDQyxpQkFBZSxFQUFFLEtBSHFCO0FBR2Q7QUFDeEJDLGFBQVcsRUFBRSxVQUFVQyxPQUFWLEVBQW1CO0FBQzVCO0FBQ0EsUUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUNDLEdBQXZCLEVBQTRCO0FBQ3hCLFVBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosR0FBa0IsaUJBQTdCLENBRHdCLENBQ3dCO0FBQ2hEOztBQUNBLGFBQU9ILElBQVA7QUFDSCxLQUpELE1BSU87QUFDSCxhQUFPLDJCQUFQO0FBQ0g7QUFDSixHQWJxQztBQWN0Q0ksZ0JBQWMsRUFBRSxVQUFVQyxJQUFWLEVBQWdCO0FBQzVCO0FBQ0EsUUFBSUEsSUFBSSxDQUFDQyxJQUFMLElBQWEsT0FBTyxJQUFQLEdBQWMsRUFBM0IsSUFBaUMsd0JBQXdCQyxJQUF4QixDQUE2QkYsSUFBSSxDQUFDRyxTQUFsQyxDQUFyQyxFQUFtRjtBQUMvRSxhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPLHVEQUFQO0FBQ0g7QUFwQnFDLENBQXBCLENBQWY7QUEwQkEsTUFBTTVGLFFBQVEsR0FBRyxJQUFJMkUsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixVQUFyQixDQUFqQjtBQUVBLE1BQU0xQixhQUFhLEdBQUcsSUFBSVMsS0FBSixDQUFVO0FBQ25Da0IsWUFBVSxFQUFFOUYsUUFEdUI7QUFFbkMrRixRQUFNLEVBQUUsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixZQUFqQixFQUErQixZQUEvQixDQUYyQjtBQUduQ0MsUUFBTSxFQUFFLElBQUluQixlQUFKLENBQW9CO0FBQ3hCckMsUUFBSSxFQUFFLE1BQU07QUFBRUMsWUFBTSxFQUFFO0FBQUUsS0FEQTtBQUV4QndELFlBQVEsRUFBRSxVQUFVQyxZQUFWLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsRUFBOEM7QUFDcEQsVUFBSUgsUUFBUSxHQUFHLEtBQUtJLG9CQUFMLEdBQTRCSixRQUE1QixDQUFxQ0MsWUFBckMsRUFBbURDLE9BQW5ELEVBQTREQyxXQUE1RCxDQUFmO0FBQ0FILGNBQVEsQ0FBQ0ssU0FBVCxHQUFxQixLQUFyQjtBQUNBLGFBQVFMLFFBQVI7QUFDSDtBQU51QixHQUFwQixDQUgyQjtBQVduQ00sc0JBQW9CLEVBQUU7QUFBQ0MsU0FBSyxFQUFFO0FBQVI7QUFYYSxDQUFWLENBQXRCO0FBZUEsTUFBTXZHLGFBQWEsR0FBRyxJQUFJMEUsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixlQUFyQixDQUF0QjtBQU1BLE1BQU16RixjQUFjLEdBQUcsSUFBSXVFLEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsZ0JBQXJCLENBQXZCO0FBRUEsTUFBTXhGLFlBQVksR0FBRyxJQUFJc0UsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixjQUFyQixDQUFyQjtBQUVBLE1BQU0zRixNQUFNLEdBQUcsSUFBSXlFLEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsUUFBckIsQ0FBZjtBQUdBLE1BQU12RixPQUFPLEdBQUcsSUFBSXFFLEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsU0FBckIsQ0FBaEI7QUFHQSxNQUFNckYsUUFBUSxHQUFHLElBQUltRSxLQUFLLENBQUNrQixVQUFWLENBQXFCLFVBQXJCLENBQWpCO0FBR0EsTUFBTXBGLE1BQU0sR0FBRyxJQUFJa0UsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixRQUFyQixDQUFmO0FBR0EsTUFBTW5GLEtBQUssR0FBRyxJQUFJaUUsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixPQUFyQixDQUFkO0FBR0EsTUFBTWxGLEtBQUssR0FBRyxJQUFJZ0UsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixPQUFyQixDQUFkO0FBR0EsTUFBTXpELFNBQVMsR0FBRyxJQUFJdUMsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixXQUFyQixDQUFsQjtBQUlBLE1BQU1qRixZQUFZLEdBQUcsSUFBSStELEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsY0FBckIsQ0FBckI7QUFFQSxNQUFNekIsaUJBQWlCLEdBQUcsSUFBSVEsS0FBSixDQUFVO0FBQ3ZDa0IsWUFBVSxFQUFFbEYsWUFEMkI7QUFFdkNtRixRQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsa0JBQVQsRUFBNkIsaUJBQTdCLENBRitCO0FBR3ZDQyxRQUFNLEVBQUUsSUFBSW5CLGVBQUosQ0FBb0I7QUFDeEJyQyxRQUFJLEVBQUUsTUFBTTtBQUFFWSxzQkFBZ0IsRUFBRTtBQUFFLEtBRFY7QUFFeEI2QyxZQUFRLEVBQUUsVUFBVUMsWUFBVixFQUF3QkMsT0FBeEIsRUFBaUNDLFdBQWpDLEVBQThDO0FBQ3BELFVBQUlILFFBQVEsR0FBRyxLQUFLSSxvQkFBTCxHQUE0QkosUUFBNUIsQ0FBcUNDLFlBQXJDLEVBQW1EQyxPQUFuRCxFQUE0REMsV0FBNUQsQ0FBZjtBQUNBSCxjQUFRLENBQUNRLE1BQVQsR0FBa0IsSUFBbEI7QUFDQSxhQUFRUixRQUFSO0FBQ0g7QUFOdUIsR0FBcEIsQ0FIK0I7QUFXdkNNLHNCQUFvQixFQUFFO0FBQUNDLFNBQUssRUFBRTtBQUFSO0FBWGlCLENBQVYsQ0FBMUI7QUFhQSxNQUFNbkMsMkJBQTJCLEdBQUcsSUFBSU8sS0FBSixDQUFVO0FBQ2pEa0IsWUFBVSxFQUFFbEYsWUFEcUM7QUFFakRtRixRQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsa0JBQVQsRUFBNkIsaUJBQTdCLEVBQWdELE9BQWhELENBRnlDO0FBR2pEQyxRQUFNLEVBQUUsSUFBSW5CLGVBQUosQ0FBb0I7QUFDeEJyQyxRQUFJLEVBQUUsTUFBTTtBQUFFWSxzQkFBZ0IsRUFBRTtBQUFFLEtBRFY7QUFFeEI2QyxZQUFRLEVBQUUsVUFBVUMsWUFBVixFQUF3QkMsT0FBeEIsRUFBaUNDLFdBQWpDLEVBQThDO0FBQ3BELFVBQUlILFFBQVEsR0FBRyxLQUFLSSxvQkFBTCxHQUE0QkosUUFBNUIsQ0FBcUNDLFlBQXJDLEVBQW1EQyxPQUFuRCxFQUE0REMsV0FBNUQsQ0FBZjtBQUNBSCxjQUFRLENBQUNRLE1BQVQsR0FBa0IsSUFBbEI7QUFDQSxhQUFRUixRQUFSO0FBQ0g7QUFOdUIsR0FBcEIsQ0FIeUMsQ0FXakQ7O0FBWGlELENBQVYsQ0FBcEM7QUFlQSxNQUFNcEYsT0FBTyxHQUFHLElBQUk4RCxLQUFLLENBQUNrQixVQUFWLENBQXFCLFNBQXJCLENBQWhCO0FBR0EsTUFBTS9FLE1BQU0sR0FBRyxJQUFJNkQsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixRQUFyQixDQUFmO0FBR0EsTUFBTTdFLGVBQWUsR0FBRyxJQUFJMkQsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixpQkFBckIsQ0FBeEI7QUFHQSxNQUFNOUUsUUFBUSxHQUFHLElBQUk0RCxLQUFLLENBQUNrQixVQUFWLENBQXFCLFVBQXJCLENBQWpCO0FBRUEsTUFBTXZCLGFBQWEsR0FBRyxJQUFJTSxLQUFKLENBQVU7QUFDbkNrQixZQUFVLEVBQUUvRSxRQUR1QjtBQUVuQ2dGLFFBQU0sRUFBRSxDQUFDLElBQUQsRUFBTyxRQUFQLENBRjJCO0FBR25DQyxRQUFNLEVBQUUsSUFBSW5CLGVBQUosQ0FBb0I7QUFDeEJyQyxRQUFJLEVBQUUsTUFBTTtBQUFFa0UsVUFBSSxFQUFFO0FBQUU7QUFDdEI7Ozs7OztBQUZ3QixHQUFwQixDQUgyQjtBQVduQ0gsc0JBQW9CLEVBQUU7QUFBQ0MsU0FBSyxFQUFFO0FBQVI7QUFYYSxDQUFWLENBQXRCO0FBY0EsTUFBTXZFLE1BQU0sR0FBRyxJQUFJMEMsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixRQUFyQixDQUFmO0FBSUEsTUFBTXRGLFNBQVMsR0FBRyxJQUFJb0UsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixXQUFyQixDQUFsQjtBQUVBLE1BQU10QixrQkFBa0IsR0FBRyxJQUFJSyxLQUFKLENBQVU7QUFDeENrQixZQUFVLEVBQUV2RixTQUQ0QjtBQUV4Q3dGLFFBQU0sRUFBRSxDQUFDLGtCQUFELEVBQXFCLElBQXJCLEVBQTJCLFFBQTNCLEVBQXFDLFlBQXJDLENBRmdDO0FBR3hDQyxRQUFNLEVBQUUsSUFBSW5CLGVBQUosQ0FBb0I7QUFDeEJyQyxRQUFJLEVBQUUsTUFBTTtBQUFFaUIsc0JBQWdCLEVBQUUsQ0FBQyxDQUFEO0FBQUcsS0FEWDtBQUV4QndDLFlBQVEsRUFBRSxVQUFVQyxZQUFWLEVBQXdCQyxPQUF4QixFQUFpQ0MsV0FBakMsRUFBOEM7QUFDcEQsVUFBSUgsUUFBUSxHQUFHLEtBQUtJLG9CQUFMLEdBQTRCSixRQUE1QixDQUFxQ0MsWUFBckMsRUFBbURDLE9BQW5ELEVBQTREQyxXQUE1RCxDQUFmO0FBQ0FILGNBQVEsQ0FBQ1UsU0FBVCxHQUFxQixJQUFyQixDQUZvRCxDQUdwRDs7QUFDQSxhQUFRVixRQUFSO0FBQ0g7QUFQdUIsR0FBcEIsQ0FIZ0M7QUFZeENNLHNCQUFvQixFQUFFO0FBQUNDLFNBQUssRUFBRTtBQUFSO0FBWmtCLENBQVYsQ0FBM0I7QUFjQSxNQUFNaEMsY0FBYyxHQUFHLElBQUlJLEtBQUosQ0FBVTtBQUNwQ2tCLFlBQVUsRUFBRXZGLFNBRHdCO0FBRXBDd0YsUUFBTSxFQUFFLENBQUMsa0JBQUQsRUFBcUIsSUFBckIsRUFBMkIsUUFBM0IsRUFBcUMsWUFBckMsQ0FGNEI7QUFHcENDLFFBQU0sRUFBRSxJQUFJbkIsZUFBSixDQUFvQjtBQUN4QnJDLFFBQUksRUFBRSxNQUFNO0FBQUVDLFlBQU0sRUFBRTtBQUFFO0FBQ3hCOzs7Ozs7O0FBRndCLEdBQXBCLENBSDRCO0FBWXBDOEQsc0JBQW9CLEVBQUU7QUFBQ0MsU0FBSyxFQUFFO0FBQVI7QUFaYyxDQUFWLENBQXZCO0FBZ0JBLE1BQU12RixNQUFNLEdBQUcsSUFBSTBELEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsUUFBckIsQ0FBZjtBQUdBLE1BQU0zRSxnQkFBZ0IsR0FBRyxJQUFJeUQsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixrQkFBckIsQ0FBekI7QUFHQSxNQUFNMUUsYUFBYSxHQUFHLElBQUl3RCxLQUFLLENBQUNrQixVQUFWLENBQXFCLGVBQXJCLENBQXRCO0FBR0EsTUFBTTNELGdCQUFnQixHQUFHLElBQUl5QyxLQUFLLENBQUNrQixVQUFWLENBQXFCLGtCQUFyQixDQUF6QjtBQUdBLE1BQU0xRCxZQUFZLEdBQUcsSUFBSXdDLEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsY0FBckIsQ0FBckI7QUFJQSxNQUFNbkUsV0FBVyxHQUFHLElBQUlpRCxLQUFLLENBQUNrQixVQUFWLENBQXFCLGFBQXJCLENBQXBCO0FBR0EsTUFBTXpFLFdBQVcsR0FBRyxJQUFJdUQsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixhQUFyQixDQUFwQjtBQUVBLE1BQU1wQixnQkFBZ0IsR0FBRyxJQUFJRyxLQUFKLENBQVU7QUFDdENrQixZQUFVLEVBQUUxRSxXQUQwQjtBQUV0QzJFLFFBQU0sRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLFFBQW5CLEVBQTZCLFlBQTdCLENBRjhCO0FBR3RDQyxRQUFNLEVBQUUsSUFBSW5CLGVBQUosQ0FBb0I7QUFDeEJyQyxRQUFJLEVBQUUsTUFBTTtBQUFFb0UsY0FBUSxFQUFFO0FBQUU7QUFDMUI7Ozs7Ozs7QUFGd0IsR0FBcEIsQ0FIOEI7QUFZdENMLHNCQUFvQixFQUFFO0FBQUNDLFNBQUssRUFBRTtBQUFSO0FBWmdCLENBQVYsQ0FBekI7QUFnQkEsTUFBTW5GLFNBQVMsR0FBRyxJQUFJc0QsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixXQUFyQixDQUFsQjtBQUlBLE1BQU1sRSxZQUFZLEdBQUcsSUFBSWdELEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsY0FBckIsQ0FBckI7QUFFQSxNQUFNbkIsaUJBQWlCLEdBQUcsSUFBSUUsS0FBSixDQUFVO0FBQ3ZDa0IsWUFBVSxFQUFFbkUsWUFEMkI7QUFFdkNvRSxRQUFNLEVBQUUsQ0FBQyxXQUFELEVBQWMsZUFBZCxDQUYrQjtBQUd2Q0MsUUFBTSxFQUFFLElBQUluQixlQUFKLENBQW9CO0FBQ3hCckMsUUFBSSxFQUFFLE1BQU07QUFBRXFCLGVBQVMsRUFBRTtBQUFFO0FBREgsR0FBcEIsQ0FIK0I7QUFNdkMwQyxzQkFBb0IsRUFBRTtBQUFDQyxTQUFLLEVBQUU7QUFBUjtBQU5pQixDQUFWLENBQTFCO0FBVUEsTUFBTWxGLGFBQWEsR0FBRyxJQUFJcUQsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixlQUFyQixDQUF0QjtBQUdBLE1BQU10RSxTQUFTLEdBQUcsSUFBSW9ELEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsV0FBckIsQ0FBbEI7QUFHQSxNQUFNckUsYUFBYSxHQUFHLElBQUltRCxLQUFLLENBQUNrQixVQUFWLENBQXFCLGVBQXJCLENBQXRCO0FBR0EsTUFBTXBFLFVBQVUsR0FBRyxJQUFJa0QsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixZQUFyQixDQUFuQjtBQUlBLE1BQU1qRSxXQUFXLEdBQUcsSUFBSStDLEtBQUssQ0FBQ2tCLFVBQVYsQ0FBcUIsYUFBckIsQ0FBcEI7QUFHQSxNQUFNaEUsWUFBWSxHQUFHLElBQUk4QyxLQUFLLENBQUNrQixVQUFWLENBQXFCLGNBQXJCLENBQXJCO0FBR0EsTUFBTS9ELE9BQU8sR0FBRyxJQUFJNkMsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixTQUFyQixDQUFoQjtBQUdBLE1BQU05RCxrQkFBa0IsR0FBRyxJQUFJNEMsS0FBSyxDQUFDa0IsVUFBVixDQUFxQixvQkFBckIsQ0FBM0I7QUFHQSxNQUFNN0QsV0FBVyxHQUFHLElBQUkyQyxLQUFLLENBQUNrQixVQUFWLENBQXFCLGFBQXJCLENBQXBCLEM7Ozs7Ozs7Ozs7O0FDbFFYaEcsTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQUMyQyxhQUFXLEVBQUMsTUFBSUEsV0FBakI7QUFBNkJDLGFBQVcsRUFBQyxNQUFJQSxXQUE3QztBQUF5REMsa0JBQWdCLEVBQUMsTUFBSUEsZ0JBQTlFO0FBQStGQyxhQUFXLEVBQUMsTUFBSUE7QUFBL0csQ0FBZDtBQUEySSxJQUFJcEgsTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJRyxNQUFKO0FBQVdMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaLEVBQStCO0FBQUNJLFFBQU0sQ0FBQ0gsQ0FBRCxFQUFHO0FBQUNHLFVBQU0sR0FBQ0gsQ0FBUDtBQUFTOztBQUFwQixDQUEvQixFQUFxRCxDQUFyRDtBQUtyWixNQUFNOEcsV0FBVyxHQUFHLElBQUlNLGVBQUosQ0FBb0I7QUFDM0NDLE1BQUksRUFBRSxjQURxQztBQUUzQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJyRSxnQkFBWSxFQUFFO0FBQUN5RSxVQUFJLEVBQUVDO0FBQVAsS0FEUztBQUV2QkMscUJBQWlCLEVBQUU7QUFBQ0YsVUFBSSxFQUFFQztBQUFQLEtBRkk7QUFHdkJFLGdCQUFZLEVBQUU7QUFBQ0gsVUFBSSxFQUFFSTtBQUFQLEtBSFM7QUFJdkJDLFNBQUssRUFBRTtBQUFDTCxVQUFJLEVBQUVDO0FBQVA7QUFKZ0IsR0FBakIsRUFLUEssU0FMTyxFQUZpQzs7QUFRM0NDLEtBQUcsQ0FBRTtBQUFDaEYsZ0JBQUQ7QUFBZTJFLHFCQUFmO0FBQWtDQyxnQkFBbEM7QUFBZ0RFO0FBQWhELEdBQUYsRUFBMkQ7QUFDMUQsV0FBT3pILE1BQU0sQ0FBQzRILE1BQVAsQ0FBYztBQUNqQmpGLGtCQUFZLEVBQUVBLFlBREc7QUFFakIyRSx1QkFBaUIsRUFBRUEsaUJBRkY7QUFHakJDLGtCQUFZLEVBQUVBLFlBSEc7QUFJakJFLFdBQUssRUFBRUE7QUFKVSxLQUFkLENBQVA7QUFNSDs7QUFmMEMsQ0FBcEIsQ0FBcEI7QUFrQkEsTUFBTWIsV0FBVyxHQUFHLElBQUlLLGVBQUosQ0FBb0I7QUFDM0NDLE1BQUksRUFBRSxjQURxQztBQUUzQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkIxRSxnQkFBWSxFQUFFO0FBQUN5RSxVQUFJLEVBQUVDO0FBQVAsS0FGUztBQUd2QkMscUJBQWlCLEVBQUU7QUFBQ0YsVUFBSSxFQUFFQztBQUFQLEtBSEk7QUFJdkJFLGdCQUFZLEVBQUU7QUFBQ0gsVUFBSSxFQUFFSTtBQUFQLEtBSlM7QUFLdkJDLFNBQUssRUFBRTtBQUFDTCxVQUFJLEVBQUVDO0FBQVA7QUFMZ0IsR0FBakIsRUFNUEssU0FOTyxFQUZpQzs7QUFTM0NDLEtBQUcsQ0FBRTtBQUFDRSxNQUFEO0FBQUtsRixnQkFBTDtBQUFtQjJFLHFCQUFuQjtBQUFzQ0MsZ0JBQXRDO0FBQW9ERTtBQUFwRCxHQUFGLEVBQStEO0FBQzlELFdBQU96SCxNQUFNLENBQUM4SCxNQUFQLENBQWM7QUFDakI3QyxTQUFHLEVBQUM0QztBQURhLEtBQWQsRUFFTDtBQUNFRSxVQUFJLEVBQUM7QUFDRHBGLG9CQUFZLEVBQUVBLFlBRGI7QUFFRDJFLHlCQUFpQixFQUFFQSxpQkFGbEI7QUFHREMsb0JBQVksRUFBRUEsWUFIYjtBQUlERSxhQUFLLEVBQUVBO0FBSk47QUFEUCxLQUZLLENBQVA7QUFVSDs7QUFwQjBDLENBQXBCLENBQXBCO0FBdUJBLE1BQU1aLGdCQUFnQixHQUFHLElBQUlJLGVBQUosQ0FBb0I7QUFDaERDLE1BQUksRUFBRSxtQkFEMEM7QUFFaERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCckUsZ0JBQVksRUFBRTtBQUFDeUUsVUFBSSxFQUFFQztBQUFQLEtBRFM7QUFFdkJFLGdCQUFZLEVBQUU7QUFBQ0gsVUFBSSxFQUFFSTtBQUFQO0FBRlMsR0FBakIsRUFHUEUsU0FITyxFQUZzQzs7QUFNaERDLEtBQUcsQ0FBRTtBQUFDaEYsZ0JBQUQ7QUFBZTRFO0FBQWYsR0FBRixFQUFnQztBQUMvQixXQUFPdkgsTUFBTSxDQUFDOEgsTUFBUCxDQUFjO0FBQ2pCbkYsa0JBQVksRUFBRUE7QUFERyxLQUFkLEVBRUw7QUFDRW9GLFVBQUksRUFBQztBQUNEUixvQkFBWSxFQUFFQTtBQURiO0FBRFAsS0FGSyxDQUFQO0FBT0g7O0FBZCtDLENBQXBCLENBQXpCO0FBaUJBLE1BQU1ULFdBQVcsR0FBRyxJQUFJRyxlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUUsY0FEcUM7QUFFM0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGaUM7O0FBSzNDQyxLQUFHLENBQUU7QUFBQ0U7QUFBRCxHQUFGLEVBQVE7QUFDUCxXQUFPN0gsTUFBTSxDQUFDZ0ksTUFBUCxDQUFjO0FBQ2pCL0MsU0FBRyxFQUFDNEM7QUFEYSxLQUFkLENBQVA7QUFHSDs7QUFUMEMsQ0FBcEIsQ0FBcEIsQzs7Ozs7Ozs7Ozs7QUMvRFBsSSxNQUFNLENBQUNxRSxNQUFQLENBQWM7QUFBQ2lFLG1CQUFpQixFQUFDLE1BQUlBLGlCQUF2QjtBQUF5Q0MsbUJBQWlCLEVBQUMsTUFBSUEsaUJBQS9EO0FBQWlGQyxtQkFBaUIsRUFBQyxNQUFJQTtBQUF2RyxDQUFkO0FBQXlJLElBQUl6SSxNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlrSCxjQUFKO0FBQW1CcEgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ21ILGdCQUFjLENBQUNsSCxDQUFELEVBQUc7QUFBQ2tILGtCQUFjLEdBQUNsSCxDQUFmO0FBQWlCOztBQUFwQyxDQUExQyxFQUFnRixDQUFoRjtBQUFtRixJQUFJbUgsWUFBSjtBQUFpQnJILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNvSCxjQUFZLENBQUNuSCxDQUFELEVBQUc7QUFBQ21ILGdCQUFZLEdBQUNuSCxDQUFiO0FBQWU7O0FBQWhDLENBQTFDLEVBQTRFLENBQTVFO0FBQStFLElBQUk4QixZQUFKLEVBQWlCRyxXQUFqQjtBQUE2Qm5DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaLEVBQStCO0FBQUMrQixjQUFZLENBQUM5QixDQUFELEVBQUc7QUFBQzhCLGdCQUFZLEdBQUM5QixDQUFiO0FBQWUsR0FBaEM7O0FBQWlDaUMsYUFBVyxDQUFDakMsQ0FBRCxFQUFHO0FBQUNpQyxlQUFXLEdBQUNqQyxDQUFaO0FBQWM7O0FBQTlELENBQS9CLEVBQStGLENBQS9GO0FBS3JhLE1BQU1vSSxpQkFBaUIsR0FBRyxJQUFJaEIsZUFBSixDQUFvQjtBQUNqREMsTUFBSSxFQUFFLG9CQUQyQztBQUVqREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ4RCxPQUFHLEVBQUU7QUFBQzRELFVBQUksRUFBRUk7QUFBUCxLQURrQjtBQUV2QlksbUJBQWUsRUFBRTtBQUFDaEIsVUFBSSxFQUFFQztBQUFQLEtBRk07QUFHdkJnQixvQkFBZ0IsRUFBRTtBQUFDakIsVUFBSSxFQUFFQztBQUFQLEtBSEs7QUFJdkJpQixPQUFHLEVBQUU7QUFBQ2xCLFVBQUksRUFBRUM7QUFBUCxLQUprQjtBQUt2QmtCLE9BQUcsRUFBRTtBQUFDbkIsVUFBSSxFQUFFQztBQUFQLEtBTGtCO0FBTXZCbUIsT0FBRyxFQUFFO0FBQUNwQixVQUFJLEVBQUVDO0FBQVAsS0FOa0I7QUFPdkJvQixjQUFVLEVBQUU7QUFBQ3JCLFVBQUksRUFBRUM7QUFBUCxLQVBXO0FBUXZCcUIsU0FBSyxFQUFFO0FBQUN0QixVQUFJLEVBQUVDO0FBQVAsS0FSZ0I7QUFTdkJzQixXQUFPLEVBQUU7QUFBQ3ZCLFVBQUksRUFBRSxDQUFDd0IsTUFBRDtBQUFQLEtBVGM7QUFVdkIsMEJBQXNCO0FBQUN4QixVQUFJLEVBQUNDO0FBQU4sS0FWQztBQVd2QjtBQUNBLHNCQUFrQjtBQUFDRCxVQUFJLEVBQUVDO0FBQVAsS0FaSztBQWF2Qix1QkFBbUI7QUFBQ0QsVUFBSSxFQUFFQztBQUFQLEtBYkk7QUFjdkJ3QixjQUFVLEVBQUU7QUFBQ3pCLFVBQUksRUFBRUM7QUFBUCxLQWRXO0FBZXZCeUIsZUFBVyxFQUFFO0FBQUMxQixVQUFJLEVBQUVDO0FBQVAsS0FmVTtBQWdCdkI1RCxhQUFTLEVBQUU7QUFBQzJELFVBQUksRUFBRTJCO0FBQVA7QUFoQlksR0FBakIsRUFpQlByQixTQWpCTyxFQUZ1Qzs7QUFvQmpEQyxLQUFHLENBQUM7QUFDQW5FLE9BREE7QUFFQTRFLG1CQUZBO0FBR0FDLG9CQUhBO0FBSUFDLE9BSkE7QUFLQUMsT0FMQTtBQU1BQyxPQU5BO0FBT0FDLGNBUEE7QUFRQUMsU0FSQTtBQVNBQyxXQVRBO0FBVUFFLGNBVkE7QUFXQUMsZUFYQTtBQVlBckY7QUFaQSxHQUFELEVBYUQ7QUFDRSxXQUFPOUIsWUFBWSxDQUFDaUcsTUFBYixDQUFvQjtBQUN2QnBFLFNBQUcsRUFBRUEsR0FEa0I7QUFFdkI0RSxxQkFBZSxFQUFFQSxlQUZNO0FBR3ZCQyxzQkFBZ0IsRUFBRUEsZ0JBSEs7QUFJdkJDLFNBQUcsRUFBRUEsR0FKa0I7QUFLdkJDLFNBQUcsRUFBRUEsR0FMa0I7QUFNdkJDLFNBQUcsRUFBRUEsR0FOa0I7QUFPdkJDLGdCQUFVLEVBQUVBLFVBUFc7QUFRdkJDLFdBQUssRUFBRUEsS0FSZ0I7QUFTdkJDLGFBQU8sRUFBRUEsT0FUYztBQVV2QkUsZ0JBQVUsRUFBRUEsVUFWVztBQVd2QkMsaUJBQVcsRUFBRUEsV0FYVTtBQVl2QnJGLGVBQVMsRUFBRUE7QUFaWSxLQUFwQixDQUFQO0FBY0g7O0FBaERnRCxDQUFwQixDQUExQjtBQW1EQSxNQUFNeUUsaUJBQWlCLEdBQUcsSUFBSWpCLGVBQUosQ0FBb0I7QUFDakRDLE1BQUksRUFBRSxvQkFEMkM7QUFFakRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCZ0MsV0FBTyxFQUFFO0FBQUM1QixVQUFJLEVBQUU2QjtBQUFQLEtBRGM7QUFFdkJDLFdBQU8sRUFBRTtBQUFDOUIsVUFBSSxFQUFFNkI7QUFBUCxLQUZjO0FBR3ZCVCxPQUFHLEVBQUU7QUFBQ3BCLFVBQUksRUFBRUM7QUFBUDtBQUhrQixHQUFqQixFQUlQSyxTQUpPLEVBRnVDOztBQU9qREMsS0FBRyxDQUFDO0FBQ0FxQixXQURBO0FBRUFFLFdBRkE7QUFHQVY7QUFIQSxHQUFELEVBSUQ7QUFDRSxXQUFPMUcsV0FBVyxDQUFDOEYsTUFBWixDQUFtQjtBQUN0Qm9CLGFBQU8sRUFBRUEsT0FEYTtBQUV0QkUsYUFBTyxFQUFFQSxPQUZhO0FBR3RCVixTQUFHLEVBQUVBO0FBSGlCLEtBQW5CLENBQVA7QUFLSDs7QUFqQmdELENBQXBCLENBQTFCO0FBb0JBLE1BQU1MLGlCQUFpQixHQUFHLElBQUlsQixlQUFKLENBQW9CO0FBQ2pEQyxNQUFJLEVBQUUsb0JBRDJDO0FBRWpEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndCLE9BQUcsRUFBRTtBQUFDcEIsVUFBSSxFQUFFQztBQUFQLEtBRGtCO0FBRXZCMkIsV0FBTyxFQUFFO0FBQUM1QixVQUFJLEVBQUU2QjtBQUFQLEtBRmM7QUFHdkJDLFdBQU8sRUFBRTtBQUFDOUIsVUFBSSxFQUFFNkI7QUFBUDtBQUhjLEdBQWpCLEVBSVB2QixTQUpPLEVBRnVDOztBQU9qREMsS0FBRyxDQUFFO0FBQ0RhLE9BREM7QUFFRFEsV0FGQztBQUdERTtBQUhDLEdBQUYsRUFJQTtBQUNDLFdBQU9wSCxXQUFXLENBQUNnRyxNQUFaLENBQW1CO0FBQ3RCVSxTQUFHLEVBQUVBO0FBRGlCLEtBQW5CLEVBRUw7QUFDRVQsVUFBSSxFQUFDO0FBQ0RpQixlQUFPLEVBQUVBLE9BRFI7QUFFREUsZUFBTyxFQUFFQTtBQUZSO0FBRFAsS0FGSyxDQUFQO0FBUUg7O0FBcEJnRCxDQUFwQixDQUExQixDOzs7Ozs7Ozs7OztBQzVFUHZKLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUFDbUYsbUJBQWlCLEVBQUMsTUFBSUEsaUJBQXZCO0FBQXlDQyxtQkFBaUIsRUFBQyxNQUFJQSxpQkFBL0Q7QUFBaUZDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUF2RztBQUF5SEMsd0JBQXNCLEVBQUMsTUFBSUE7QUFBcEosQ0FBZDtBQUEyTCxJQUFJNUosTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJTSxZQUFKO0FBQWlCUixNQUFNLENBQUNDLElBQVAsQ0FBWSxrQkFBWixFQUErQjtBQUFDTyxjQUFZLENBQUNOLENBQUQsRUFBRztBQUFDTSxnQkFBWSxHQUFDTixDQUFiO0FBQWU7O0FBQWhDLENBQS9CLEVBQWlFLENBQWpFO0FBSzNjLE1BQU1zSixpQkFBaUIsR0FBRyxJQUFJbEMsZUFBSixDQUFvQjtBQUNqREMsTUFBSSxFQUFFLG9CQUQyQztBQUVqREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ1QyxlQUFXLEVBQUU7QUFBQ25DLFVBQUksRUFBRUM7QUFBUCxLQURVO0FBRXZCM0UsZUFBVyxFQUFFO0FBQUMwRSxVQUFJLEVBQUVDO0FBQVAsS0FGVTtBQUd2Qm1DLGVBQVcsRUFBRTtBQUFDcEMsVUFBSSxFQUFFQztBQUFQLEtBSFU7QUFJdkJvQyxvQkFBZ0IsRUFBRTtBQUFDckMsVUFBSSxFQUFFQztBQUFQLEtBSks7QUFLdkJxQyxlQUFXLEVBQUU7QUFBQ3RDLFVBQUksRUFBRUM7QUFBUCxLQUxVO0FBTXZCc0MsZUFBVyxFQUFFO0FBQUN2QyxVQUFJLEVBQUVDO0FBQVAsS0FOVTtBQVF2QnVDLHNCQUFrQixFQUFFO0FBQUN4QyxVQUFJLEVBQUVDO0FBQVAsS0FSRztBQVN2QndDLHNCQUFrQixFQUFFO0FBQUN6QyxVQUFJLEVBQUVDO0FBQVAsS0FURztBQVV2QnlDLG9CQUFnQixFQUFFO0FBQUMxQyxVQUFJLEVBQUVDO0FBQVAsS0FWSztBQVd2QjBDLG9CQUFnQixFQUFFO0FBQUMzQyxVQUFJLEVBQUVDO0FBQVAsS0FYSztBQWF2QjJDLG1CQUFlLEVBQUU7QUFBQzVDLFVBQUksRUFBRUM7QUFBUCxLQWJNO0FBY3ZCNEMsVUFBTSxFQUFFO0FBQUM3QyxVQUFJLEVBQUU2QjtBQUFQLEtBZGU7QUFldkJpQixlQUFXLEVBQUU7QUFBQzlDLFVBQUksRUFBRSxDQUFDd0IsTUFBRDtBQUFQLEtBZlU7QUFnQnZCLDRCQUF3QjtBQUFDeEIsVUFBSSxFQUFFQztBQUFQLEtBaEJEO0FBa0J2QjhDLGVBQVcsRUFBRTtBQUFDL0MsVUFBSSxFQUFFNkI7QUFBUCxLQWxCVTtBQW9CdkJtQixlQUFXLEVBQUU7QUFBQ2hELFVBQUksRUFBRUM7QUFBUCxLQXBCVTtBQXFCdkJnRCxlQUFXLEVBQUU7QUFBQ2pELFVBQUksRUFBRUM7QUFBUCxLQXJCVTtBQXNCdkJpRCxlQUFXLEVBQUU7QUFBQ2xELFVBQUksRUFBRUM7QUFBUCxLQXRCVTtBQXVCdkJrRCxlQUFXLEVBQUU7QUFBQ25ELFVBQUksRUFBRUM7QUFBUCxLQXZCVTtBQXdCdkJtRCxlQUFXLEVBQUU7QUFBQ3BELFVBQUksRUFBRUM7QUFBUCxLQXhCVTtBQXlCdkJvRCxlQUFXLEVBQUU7QUFBQ3JELFVBQUksRUFBRUM7QUFBUCxLQXpCVTtBQTJCdkJxRCxZQUFRLEVBQUU7QUFBQ3RELFVBQUksRUFBRTZCO0FBQVAsS0EzQmE7QUE0QnZCMEIsYUFBUyxFQUFFO0FBQUN2RCxVQUFJLEVBQUU2QjtBQUFQLEtBNUJZO0FBNkJ2QjJCLGdCQUFZLEVBQUU7QUFBQ3hELFVBQUksRUFBRTZCO0FBQVAsS0E3QlM7QUE4QnZCNEIsYUFBUyxFQUFFO0FBQUN6RCxVQUFJLEVBQUU2QjtBQUFQLEtBOUJZO0FBK0J2QjZCLGNBQVUsRUFBRTtBQUFDMUQsVUFBSSxFQUFFNkI7QUFBUCxLQS9CVztBQWdDdkI4QixhQUFTLEVBQUU7QUFBQzNELFVBQUksRUFBRTZCO0FBQVAsS0FoQ1k7QUFrQ3ZCK0IsWUFBUSxFQUFFO0FBQUM1RCxVQUFJLEVBQUU2QjtBQUFQLEtBbENhO0FBbUN2QmdDLGFBQVMsRUFBRTtBQUFDN0QsVUFBSSxFQUFFNkI7QUFBUCxLQW5DWTtBQW9DdkJpQyxnQkFBWSxFQUFFO0FBQUM5RCxVQUFJLEVBQUU2QjtBQUFQLEtBcENTO0FBcUN2QmtDLGFBQVMsRUFBRTtBQUFDL0QsVUFBSSxFQUFFNkI7QUFBUCxLQXJDWTtBQXNDdkJtQyxjQUFVLEVBQUU7QUFBQ2hFLFVBQUksRUFBRTZCO0FBQVAsS0F0Q1c7QUF1Q3ZCb0MsYUFBUyxFQUFFO0FBQUNqRSxVQUFJLEVBQUU2QjtBQUFQLEtBdkNZO0FBeUN2QnFDLFlBQVEsRUFBRTtBQUFDbEUsVUFBSSxFQUFFNkI7QUFBUCxLQXpDYTtBQTBDdkJzQyxhQUFTLEVBQUU7QUFBQ25FLFVBQUksRUFBRTZCO0FBQVAsS0ExQ1k7QUEyQ3ZCdUMsZ0JBQVksRUFBRTtBQUFDcEUsVUFBSSxFQUFFNkI7QUFBUCxLQTNDUztBQTRDdkJ3QyxhQUFTLEVBQUU7QUFBQ3JFLFVBQUksRUFBRTZCO0FBQVAsS0E1Q1k7QUE2Q3ZCeUMsY0FBVSxFQUFFO0FBQUN0RSxVQUFJLEVBQUU2QjtBQUFQLEtBN0NXO0FBOEN2QjBDLGFBQVMsRUFBRTtBQUFDdkUsVUFBSSxFQUFFNkI7QUFBUDtBQTlDWSxHQUFqQixFQStDUHZCLFNBL0NPLEVBRnVDOztBQWtEakRDLEtBQUcsQ0FBQztBQUNBNEIsZUFEQTtBQUVBN0csZUFGQTtBQUdBOEcsZUFIQTtBQUlBQyxvQkFKQTtBQUtBQyxlQUxBO0FBTUFDLGVBTkE7QUFRQUMsc0JBUkE7QUFTQUMsc0JBVEE7QUFVQUMsb0JBVkE7QUFXQUMsb0JBWEE7QUFhQUMsbUJBYkE7QUFjQUMsVUFkQTtBQWVBQyxlQWZBO0FBaUJBQyxlQWpCQTtBQW1CQUMsZUFuQkE7QUFvQkFDLGVBcEJBO0FBcUJBQyxlQXJCQTtBQXNCQUMsZUF0QkE7QUF1QkFDLGVBdkJBO0FBd0JBQyxlQXhCQTtBQTBCQUMsWUExQkE7QUEyQkFDLGFBM0JBO0FBNEJBQyxnQkE1QkE7QUE2QkFDLGFBN0JBO0FBOEJBQyxjQTlCQTtBQStCQUMsYUEvQkE7QUFpQ0FDLFlBakNBO0FBa0NBQyxhQWxDQTtBQW1DQUMsZ0JBbkNBO0FBb0NBQyxhQXBDQTtBQXFDQUMsY0FyQ0E7QUFzQ0FDLGFBdENBO0FBd0NBQyxZQXhDQTtBQXlDQUMsYUF6Q0E7QUEwQ0FDLGdCQTFDQTtBQTJDQUMsYUEzQ0E7QUE0Q0FDLGNBNUNBO0FBNkNBQztBQTdDQSxHQUFELEVBOENEO0FBQ0UsV0FBT3hMLFlBQVksQ0FBQ3lILE1BQWIsQ0FBb0I7QUFDdkIyQixpQkFBVyxFQUFFQSxXQURVO0FBRXZCN0csaUJBQVcsRUFBRUEsV0FGVTtBQUd2QjhHLGlCQUFXLEVBQUVBLFdBSFU7QUFJdkJDLHNCQUFnQixFQUFFQSxnQkFKSztBQUt2QkMsaUJBQVcsRUFBRUEsV0FMVTtBQU12QkMsaUJBQVcsRUFBRUEsV0FOVTtBQVF2QkMsd0JBQWtCLEVBQUVBLGtCQVJHO0FBU3ZCQyx3QkFBa0IsRUFBRUEsa0JBVEc7QUFVdkJDLHNCQUFnQixFQUFFQSxnQkFWSztBQVd2QkMsc0JBQWdCLEVBQUVBLGdCQVhLO0FBYXZCQyxxQkFBZSxFQUFFQSxlQWJNO0FBY3ZCQyxZQUFNLEVBQUVBLE1BZGU7QUFldkIxRCxZQUFNLEVBQUUsSUFmZTtBQWdCdkIyRCxpQkFBVyxFQUFFQSxXQWhCVTtBQWtCdkJDLGlCQUFXLEVBQUVBLFdBbEJVO0FBb0J2QkMsaUJBQVcsRUFBRUEsV0FwQlU7QUFxQnZCQyxpQkFBVyxFQUFFQSxXQXJCVTtBQXNCdkJDLGlCQUFXLEVBQUVBLFdBdEJVO0FBdUJ2QkMsaUJBQVcsRUFBRUEsV0F2QlU7QUF3QnZCQyxpQkFBVyxFQUFFQSxXQXhCVTtBQXlCdkJDLGlCQUFXLEVBQUNBLFdBekJXO0FBMkJ2QkMsY0FBUSxFQUFFQSxRQTNCYTtBQTRCdkJDLGVBQVMsRUFBRUEsU0E1Qlk7QUE2QnZCQyxrQkFBWSxFQUFFQSxZQTdCUztBQThCdkJDLGVBQVMsRUFBRUEsU0E5Qlk7QUErQnZCQyxnQkFBVSxFQUFFQSxVQS9CVztBQWdDdkJDLGVBQVMsRUFBRUEsU0FoQ1k7QUFrQ3ZCQyxjQUFRLEVBQUVBLFFBbENhO0FBbUN2QkMsZUFBUyxFQUFFQSxTQW5DWTtBQW9DdkJDLGtCQUFZLEVBQUVBLFlBcENTO0FBcUN2QkMsZUFBUyxFQUFFQSxTQXJDWTtBQXNDdkJDLGdCQUFVLEVBQUVBLFVBdENXO0FBdUN2QkMsZUFBUyxFQUFFQSxTQXZDWTtBQXlDdkJDLGNBQVEsRUFBRUEsUUF6Q2E7QUEwQ3ZCQyxlQUFTLEVBQUVBLFNBMUNZO0FBMkN2QkMsa0JBQVksRUFBRUEsWUEzQ1M7QUE0Q3ZCQyxlQUFTLEVBQUVBLFNBNUNZO0FBNkN2QkMsZ0JBQVUsRUFBRUEsVUE3Q1c7QUE4Q3ZCQyxlQUFTLEVBQUVBO0FBOUNZLEtBQXBCLENBQVA7QUFnREg7O0FBakpnRCxDQUFwQixDQUExQjtBQW9KQSxNQUFNdkMsaUJBQWlCLEdBQUcsSUFBSW5DLGVBQUosQ0FBb0I7QUFDakRDLE1BQUksRUFBRSxvQkFEMkM7QUFFakRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGdUM7O0FBS2pEQyxLQUFHLENBQUM7QUFBQ0U7QUFBRCxHQUFELEVBQU07QUFDTCxXQUFPMUgsWUFBWSxDQUFDNkgsTUFBYixDQUFvQjtBQUFDL0MsU0FBRyxFQUFFNEM7QUFBTixLQUFwQixDQUFQO0FBQ0g7O0FBUGdELENBQXBCLENBQTFCO0FBVUEsTUFBTXdCLGlCQUFpQixHQUFHLElBQUlwQyxlQUFKLENBQW9CO0FBQ2pEQyxNQUFJLEVBQUUsb0JBRDJDO0FBRWpEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmtDLGVBQVcsRUFBRTtBQUFDbkMsVUFBSSxFQUFFQztBQUFQLEtBRlU7QUFHdkIzRSxlQUFXLEVBQUU7QUFBQzBFLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBSXZCbUMsZUFBVyxFQUFFO0FBQUNwQyxVQUFJLEVBQUVDO0FBQVAsS0FKVTtBQUt2Qm9DLG9CQUFnQixFQUFFO0FBQUNyQyxVQUFJLEVBQUVDO0FBQVAsS0FMSztBQU12QnFDLGVBQVcsRUFBRTtBQUFDdEMsVUFBSSxFQUFFQztBQUFQLEtBTlU7QUFPdkJzQyxlQUFXLEVBQUU7QUFBQ3ZDLFVBQUksRUFBRUM7QUFBUCxLQVBVO0FBU3ZCdUMsc0JBQWtCLEVBQUU7QUFBQ3hDLFVBQUksRUFBRUM7QUFBUCxLQVRHO0FBVXZCd0Msc0JBQWtCLEVBQUU7QUFBQ3pDLFVBQUksRUFBRUM7QUFBUCxLQVZHO0FBV3ZCeUMsb0JBQWdCLEVBQUU7QUFBQzFDLFVBQUksRUFBRUM7QUFBUCxLQVhLO0FBWXZCMEMsb0JBQWdCLEVBQUU7QUFBQzNDLFVBQUksRUFBRUM7QUFBUCxLQVpLO0FBY3ZCMkMsbUJBQWUsRUFBRTtBQUFDNUMsVUFBSSxFQUFFQztBQUFQLEtBZE07QUFldkI0QyxVQUFNLEVBQUU7QUFBQzdDLFVBQUksRUFBRTZCO0FBQVAsS0FmZTtBQWdCdkJpQixlQUFXLEVBQUU7QUFBQzlDLFVBQUksRUFBRSxDQUFDd0IsTUFBRDtBQUFQLEtBaEJVO0FBaUJ2Qiw0QkFBd0I7QUFBQ3hCLFVBQUksRUFBRUM7QUFBUCxLQWpCRDtBQW1CdkI4QyxlQUFXLEVBQUU7QUFBQy9DLFVBQUksRUFBRTZCO0FBQVAsS0FuQlU7QUFxQnZCbUIsZUFBVyxFQUFFO0FBQUNoRCxVQUFJLEVBQUVDO0FBQVAsS0FyQlU7QUFzQnZCZ0QsZUFBVyxFQUFFO0FBQUNqRCxVQUFJLEVBQUVDO0FBQVAsS0F0QlU7QUF1QnZCaUQsZUFBVyxFQUFFO0FBQUNsRCxVQUFJLEVBQUVDO0FBQVAsS0F2QlU7QUF3QnZCa0QsZUFBVyxFQUFFO0FBQUNuRCxVQUFJLEVBQUVDO0FBQVAsS0F4QlU7QUF5QnZCbUQsZUFBVyxFQUFFO0FBQUNwRCxVQUFJLEVBQUVDO0FBQVAsS0F6QlU7QUEwQnZCb0QsZUFBVyxFQUFFO0FBQUNyRCxVQUFJLEVBQUVDO0FBQVAsS0ExQlU7QUE0QnZCcUQsWUFBUSxFQUFFO0FBQUN0RCxVQUFJLEVBQUU2QjtBQUFQLEtBNUJhO0FBNkJ2QjBCLGFBQVMsRUFBRTtBQUFDdkQsVUFBSSxFQUFFNkI7QUFBUCxLQTdCWTtBQThCdkIyQixnQkFBWSxFQUFFO0FBQUN4RCxVQUFJLEVBQUU2QjtBQUFQLEtBOUJTO0FBK0J2QjRCLGFBQVMsRUFBRTtBQUFDekQsVUFBSSxFQUFFNkI7QUFBUCxLQS9CWTtBQWdDdkI2QixjQUFVLEVBQUU7QUFBQzFELFVBQUksRUFBRTZCO0FBQVAsS0FoQ1c7QUFpQ3ZCOEIsYUFBUyxFQUFFO0FBQUMzRCxVQUFJLEVBQUU2QjtBQUFQLEtBakNZO0FBbUN2QitCLFlBQVEsRUFBRTtBQUFDNUQsVUFBSSxFQUFFNkI7QUFBUCxLQW5DYTtBQW9DdkJnQyxhQUFTLEVBQUU7QUFBQzdELFVBQUksRUFBRTZCO0FBQVAsS0FwQ1k7QUFxQ3ZCaUMsZ0JBQVksRUFBRTtBQUFDOUQsVUFBSSxFQUFFNkI7QUFBUCxLQXJDUztBQXNDdkJrQyxhQUFTLEVBQUU7QUFBQy9ELFVBQUksRUFBRTZCO0FBQVAsS0F0Q1k7QUF1Q3ZCbUMsY0FBVSxFQUFFO0FBQUNoRSxVQUFJLEVBQUU2QjtBQUFQLEtBdkNXO0FBd0N2Qm9DLGFBQVMsRUFBRTtBQUFDakUsVUFBSSxFQUFFNkI7QUFBUCxLQXhDWTtBQTBDdkJxQyxZQUFRLEVBQUU7QUFBQ2xFLFVBQUksRUFBRTZCO0FBQVAsS0ExQ2E7QUEyQ3ZCc0MsYUFBUyxFQUFFO0FBQUNuRSxVQUFJLEVBQUU2QjtBQUFQLEtBM0NZO0FBNEN2QnVDLGdCQUFZLEVBQUU7QUFBQ3BFLFVBQUksRUFBRTZCO0FBQVAsS0E1Q1M7QUE2Q3ZCd0MsYUFBUyxFQUFFO0FBQUNyRSxVQUFJLEVBQUU2QjtBQUFQLEtBN0NZO0FBOEN2QnlDLGNBQVUsRUFBRTtBQUFDdEUsVUFBSSxFQUFFNkI7QUFBUCxLQTlDVztBQStDdkIwQyxhQUFTLEVBQUU7QUFBQ3ZFLFVBQUksRUFBRTZCO0FBQVA7QUEvQ1ksR0FBakIsRUFnRFB2QixTQWhETyxFQUZ1Qzs7QUFtRGpEQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBMEIsZUFGQTtBQUdBN0csZUFIQTtBQUlBOEcsZUFKQTtBQUtBQyxvQkFMQTtBQU1BQyxlQU5BO0FBT0FDLGVBUEE7QUFTQUMsc0JBVEE7QUFVQUMsc0JBVkE7QUFXQUMsb0JBWEE7QUFZQUMsb0JBWkE7QUFjQUMsbUJBZEE7QUFlQUMsVUFmQTtBQWdCQUMsZUFoQkE7QUFrQkFDLGVBbEJBO0FBb0JBQyxlQXBCQTtBQXFCQUMsZUFyQkE7QUFzQkFDLGVBdEJBO0FBdUJBQyxlQXZCQTtBQXdCQUMsZUF4QkE7QUF5QkFDLGVBekJBO0FBMkJBQyxZQTNCQTtBQTRCQUMsYUE1QkE7QUE2QkFDLGdCQTdCQTtBQThCQUMsYUE5QkE7QUErQkFDLGNBL0JBO0FBZ0NBQyxhQWhDQTtBQWtDQUMsWUFsQ0E7QUFtQ0FDLGFBbkNBO0FBb0NBQyxnQkFwQ0E7QUFxQ0FDLGFBckNBO0FBc0NBQyxjQXRDQTtBQXVDQUMsYUF2Q0E7QUF5Q0FDLFlBekNBO0FBMENBQyxhQTFDQTtBQTJDQUMsZ0JBM0NBO0FBNENBQyxhQTVDQTtBQTZDQUMsY0E3Q0E7QUE4Q0FDO0FBOUNBLEdBQUQsRUErQ0Q7QUFDRSxXQUFPeEwsWUFBWSxDQUFDMkgsTUFBYixDQUFvQjtBQUN2QjdDLFNBQUcsRUFBRTRDO0FBRGtCLEtBQXBCLEVBRUw7QUFDRUUsVUFBSSxFQUFDO0FBQ0R3QixtQkFBVyxFQUFFQSxXQURaO0FBRUQ3RyxtQkFBVyxFQUFFQSxXQUZaO0FBR0Q4RyxtQkFBVyxFQUFFQSxXQUhaO0FBSURDLHdCQUFnQixFQUFFQSxnQkFKakI7QUFLREMsbUJBQVcsRUFBRUEsV0FMWjtBQU1EQyxtQkFBVyxFQUFFQSxXQU5aO0FBUURDLDBCQUFrQixFQUFFQSxrQkFSbkI7QUFTREMsMEJBQWtCLEVBQUVBLGtCQVRuQjtBQVVEQyx3QkFBZ0IsRUFBRUEsZ0JBVmpCO0FBV0RDLHdCQUFnQixFQUFFQSxnQkFYakI7QUFhREMsdUJBQWUsRUFBRUEsZUFiaEI7QUFjREMsY0FBTSxFQUFFQSxNQWRQO0FBZURDLG1CQUFXLEVBQUVBLFdBZlo7QUFpQkRDLG1CQUFXLEVBQUVBLFdBakJaO0FBbUJEQyxtQkFBVyxFQUFFQSxXQW5CWjtBQW9CREMsbUJBQVcsRUFBRUEsV0FwQlo7QUFxQkRDLG1CQUFXLEVBQUVBLFdBckJaO0FBc0JEQyxtQkFBVyxFQUFFQSxXQXRCWjtBQXVCREMsbUJBQVcsRUFBRUEsV0F2Qlo7QUF3QkRDLG1CQUFXLEVBQUNBLFdBeEJYO0FBMEJEQyxnQkFBUSxFQUFFQSxRQTFCVDtBQTJCREMsaUJBQVMsRUFBRUEsU0EzQlY7QUE0QkRDLG9CQUFZLEVBQUVBLFlBNUJiO0FBNkJEQyxpQkFBUyxFQUFFQSxTQTdCVjtBQThCREMsa0JBQVUsRUFBRUEsVUE5Qlg7QUErQkRDLGlCQUFTLEVBQUVBLFNBL0JWO0FBaUNEQyxnQkFBUSxFQUFFQSxRQWpDVDtBQWtDREMsaUJBQVMsRUFBRUEsU0FsQ1Y7QUFtQ0RDLG9CQUFZLEVBQUVBLFlBbkNiO0FBb0NEQyxpQkFBUyxFQUFFQSxTQXBDVjtBQXFDREMsa0JBQVUsRUFBRUEsVUFyQ1g7QUFzQ0RDLGlCQUFTLEVBQUVBLFNBdENWO0FBd0NEQyxnQkFBUSxFQUFFQSxRQXhDVDtBQXlDREMsaUJBQVMsRUFBRUEsU0F6Q1Y7QUEwQ0RDLG9CQUFZLEVBQUVBLFlBMUNiO0FBMkNEQyxpQkFBUyxFQUFFQSxTQTNDVjtBQTRDREMsa0JBQVUsRUFBRUEsVUE1Q1g7QUE2Q0RDLGlCQUFTLEVBQUVBO0FBN0NWO0FBRFAsS0FGSyxDQUFQO0FBbURIOztBQXRKZ0QsQ0FBcEIsQ0FBMUI7QUF5SkEsTUFBTXJDLHNCQUFzQixHQUFHLElBQUlyQyxlQUFKLENBQW9CO0FBQ3REQyxNQUFJLEVBQUUseUJBRGdEO0FBRXREQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmQsVUFBTSxFQUFFO0FBQUNhLFVBQUksRUFBRTZCO0FBQVA7QUFGZSxHQUFqQixFQUdQdkIsU0FITyxFQUY0Qzs7QUFNdERDLEtBQUcsQ0FBQztBQUNBRSxNQURBO0FBRUF0QjtBQUZBLEdBQUQsRUFHRDtBQUNFLFdBQU9wRyxZQUFZLENBQUMySCxNQUFiLENBQW9CO0FBQ3ZCN0MsU0FBRyxFQUFFNEM7QUFEa0IsS0FBcEIsRUFFTDtBQUNFRSxVQUFJLEVBQUM7QUFDRHhCLGNBQU0sRUFBRUE7QUFEUDtBQURQLEtBRkssQ0FBUDtBQU9IOztBQWpCcUQsQ0FBcEIsQ0FBL0IsQzs7Ozs7Ozs7Ozs7QUM1VFA1RyxNQUFNLENBQUNxRSxNQUFQLENBQWM7QUFBQzRILGVBQWEsRUFBQyxNQUFJQSxhQUFuQjtBQUFpQ0MsZUFBYSxFQUFDLE1BQUlBLGFBQW5EO0FBQWlFQyxlQUFhLEVBQUMsTUFBSUE7QUFBbkYsQ0FBZDtBQUFpSCxJQUFJcE0sTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJUyxRQUFKO0FBQWFYLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaLEVBQStCO0FBQUNVLFVBQVEsQ0FBQ1QsQ0FBRCxFQUFHO0FBQUNTLFlBQVEsR0FBQ1QsQ0FBVDtBQUFXOztBQUF4QixDQUEvQixFQUF5RCxDQUF6RDtBQUs3WCxNQUFNK0wsYUFBYSxHQUFHLElBQUkzRSxlQUFKLENBQW9CO0FBQzdDQyxNQUFJLEVBQUUsZ0JBRHVDO0FBRTdDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QitFLE9BQUcsRUFBRTtBQUFDM0UsVUFBSSxFQUFFQztBQUFQLEtBRGtCO0FBRXZCekUsa0JBQWMsRUFBRTtBQUFDd0UsVUFBSSxFQUFFQztBQUFQLEtBRk87QUFHdkIyRSxRQUFJLEVBQUU7QUFBQzVFLFVBQUksRUFBRUM7QUFBUCxLQUhpQjtBQUl2QjRFLGtCQUFjLEVBQUU7QUFBQzdFLFVBQUksRUFBRUM7QUFBUCxLQUpPO0FBS3ZCNUQsYUFBUyxFQUFFO0FBQUMyRCxVQUFJLEVBQUUyQjtBQUFQO0FBTFksR0FBakIsRUFNUHJCLFNBTk8sRUFGbUM7O0FBUzdDQyxLQUFHLENBQUU7QUFBQ29FLE9BQUQ7QUFBTW5KLGtCQUFOO0FBQXNCb0osUUFBdEI7QUFBNEJDLGtCQUE1QjtBQUE0Q3hJO0FBQTVDLEdBQUYsRUFBMkQ7QUFDMUQsV0FBT25ELFFBQVEsQ0FBQ3NILE1BQVQsQ0FBZ0I7QUFDbkJtRSxTQUFHLEVBQUVBLEdBRGM7QUFFbkJuSixvQkFBYyxFQUFFQSxjQUZHO0FBR25Cb0osVUFBSSxFQUFFQSxJQUhhO0FBSW5CQyxvQkFBYyxFQUFFQSxjQUpHO0FBS25CeEksZUFBUyxFQUFFQTtBQUxRLEtBQWhCLENBQVA7QUFPSDs7QUFqQjRDLENBQXBCLENBQXRCO0FBb0JBLE1BQU1vSSxhQUFhLEdBQUcsSUFBSTVFLGVBQUosQ0FBb0I7QUFDN0NDLE1BQUksRUFBRSxnQkFEdUM7QUFFN0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCMEUsT0FBRyxFQUFFO0FBQUMzRSxVQUFJLEVBQUVDO0FBQVAsS0FGa0I7QUFHdkJ6RSxrQkFBYyxFQUFFO0FBQUN3RSxVQUFJLEVBQUVDO0FBQVAsS0FITztBQUl2QjJFLFFBQUksRUFBRTtBQUFDNUUsVUFBSSxFQUFFQztBQUFQO0FBSmlCLEdBQWpCLEVBS1BLLFNBTE8sRUFGbUM7O0FBUTdDQyxLQUFHLENBQUU7QUFBQ0UsTUFBRDtBQUFLa0UsT0FBTDtBQUFVbkosa0JBQVY7QUFBMEJvSjtBQUExQixHQUFGLEVBQW9DO0FBQ25DLFdBQU8xTCxRQUFRLENBQUN3SCxNQUFULENBQWdCO0FBQ25CN0MsU0FBRyxFQUFDNEM7QUFEZSxLQUFoQixFQUVMO0FBQ0VFLFVBQUksRUFBQztBQUNEZ0UsV0FBRyxFQUFFQSxHQURKO0FBRURuSixzQkFBYyxFQUFFQSxjQUZmO0FBR0RvSixZQUFJLEVBQUVBO0FBSEw7QUFEUCxLQUZLLENBQVA7QUFTSDs7QUFsQjRDLENBQXBCLENBQXRCO0FBcUJBLE1BQU1GLGFBQWEsR0FBRyxJQUFJN0UsZUFBSixDQUFvQjtBQUM3Q0MsTUFBSSxFQUFFLGdCQUR1QztBQUU3Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVA7QUFEbUIsR0FBakIsRUFFUEssU0FGTyxFQUZtQzs7QUFLN0NDLEtBQUcsQ0FBRTtBQUFDRTtBQUFELEdBQUYsRUFBUTtBQUNQLFdBQU92SCxRQUFRLENBQUMwSCxNQUFULENBQWdCO0FBQ25CL0MsU0FBRyxFQUFDNEM7QUFEZSxLQUFoQixDQUFQO0FBR0g7O0FBVDRDLENBQXBCLENBQXRCLEM7Ozs7Ozs7Ozs7O0FDOUNQbEksTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQUNrSSx3QkFBc0IsRUFBQyxNQUFJQSxzQkFBNUI7QUFBbURDLHdCQUFzQixFQUFDLE1BQUlBLHNCQUE5RTtBQUFxR0Msd0JBQXNCLEVBQUMsTUFBSUE7QUFBaEksQ0FBZDtBQUF1SyxJQUFJMU0sTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJZ0Msa0JBQUo7QUFBdUJsQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxrQkFBWixFQUErQjtBQUFDaUMsb0JBQWtCLENBQUNoQyxDQUFELEVBQUc7QUFBQ2dDLHNCQUFrQixHQUFDaEMsQ0FBbkI7QUFBcUI7O0FBQTVDLENBQS9CLEVBQTZFLENBQTdFO0FBSzdiLE1BQU1xTSxzQkFBc0IsR0FBRyxJQUFJakYsZUFBSixDQUFvQjtBQUN0REMsTUFBSSxFQUFFLHlCQURnRDtBQUV0REMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJuRCxpQkFBYSxFQUFFO0FBQUN1RCxVQUFJLEVBQUVDO0FBQVAsS0FEUTtBQUV2QmdGLFFBQUksRUFBRTtBQUFDakYsVUFBSSxFQUFFQztBQUFQLEtBRmlCO0FBR3ZCaUYsU0FBSyxFQUFFO0FBQUNsRixVQUFJLEVBQUVDO0FBQVAsS0FIZ0I7QUFJdkJrRixXQUFPLEVBQUU7QUFBQ25GLFVBQUksRUFBRUM7QUFBUCxLQUpjO0FBS3ZCbUYsU0FBSyxFQUFFO0FBQUNwRixVQUFJLEVBQUVDO0FBQVA7QUFMZ0IsR0FBakIsRUFNUEssU0FOTyxFQUY0Qzs7QUFTdERDLEtBQUcsQ0FBRTtBQUNEOUQsaUJBREM7QUFFRHdJLFFBRkM7QUFHREMsU0FIQztBQUlEQyxXQUpDO0FBS0RDO0FBTEMsR0FBRixFQU1BO0FBQ0MsV0FBTzNLLGtCQUFrQixDQUFDK0YsTUFBbkIsQ0FBMEI7QUFDN0IvRCxtQkFBYSxFQUFFQSxhQURjO0FBRTdCd0ksVUFBSSxFQUFFQSxJQUZ1QjtBQUc3QkMsV0FBSyxFQUFFQSxLQUhzQjtBQUk3QkMsYUFBTyxFQUFFQSxPQUpvQjtBQUs3QkMsV0FBSyxFQUFFQTtBQUxzQixLQUExQixDQUFQO0FBT0g7O0FBdkJxRCxDQUFwQixDQUEvQjtBQTBCQSxNQUFNTCxzQkFBc0IsR0FBRyxJQUFJbEYsZUFBSixDQUFvQjtBQUN0REMsTUFBSSxFQUFFLHlCQURnRDtBQUV0REMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJuRCxpQkFBYSxFQUFFO0FBQUN1RCxVQUFJLEVBQUVDO0FBQVAsS0FEUTtBQUV2QmtGLFdBQU8sRUFBRTtBQUFDbkYsVUFBSSxFQUFFQztBQUFQLEtBRmM7QUFHdkJtRixTQUFLLEVBQUU7QUFBQ3BGLFVBQUksRUFBRUM7QUFBUDtBQUhnQixHQUFqQixFQUlQSyxTQUpPLEVBRjRDOztBQU90REMsS0FBRyxDQUFFO0FBQ0Q5RCxpQkFEQztBQUVEMEksV0FGQztBQUdEQztBQUhDLEdBQUYsRUFJQTtBQUNDLFdBQU8zSyxrQkFBa0IsQ0FBQ2lHLE1BQW5CLENBQTBCO0FBQzdCakUsbUJBQWEsRUFBRUEsYUFEYztBQUU3QjBJLGFBQU8sRUFBRUE7QUFGb0IsS0FBMUIsRUFHTDtBQUNFeEUsVUFBSSxFQUFDO0FBQ0R5RSxhQUFLLEVBQUVBO0FBRE47QUFEUCxLQUhLLENBQVA7QUFRSDs7QUFwQnFELENBQXBCLENBQS9CO0FBdUJBLE1BQU1KLHNCQUFzQixHQUFHLElBQUluRixlQUFKLENBQW9CO0FBQ3REQyxNQUFJLEVBQUUseUJBRGdEO0FBRXREQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2Qm5ELGlCQUFhLEVBQUU7QUFBQ3VELFVBQUksRUFBRUM7QUFBUDtBQURRLEdBQWpCLEVBRVBLLFNBRk8sRUFGNEM7O0FBS3REQyxLQUFHLENBQUU7QUFBQzlEO0FBQUQsR0FBRixFQUFtQjtBQUNsQixXQUFPaEMsa0JBQWtCLENBQUNtRyxNQUFuQixDQUEwQjtBQUM3Qm5FLG1CQUFhLEVBQUVBO0FBRGMsS0FBMUIsQ0FBUDtBQUdIOztBQVRxRCxDQUFwQixDQUEvQixDOzs7Ozs7Ozs7OztBQ3REUGxFLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUFDeUksYUFBVyxFQUFDLE1BQUlBLFdBQWpCO0FBQTZCQyxZQUFVLEVBQUMsTUFBSUEsVUFBNUM7QUFBdURDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUE3RTtBQUErRkMsZ0JBQWMsRUFBQyxNQUFJQSxjQUFsSDtBQUFpSUMsc0JBQW9CLEVBQUMsTUFBSUEsb0JBQTFKO0FBQStLQyx5QkFBdUIsRUFBQyxNQUFJQSx1QkFBM007QUFBbU9DLGlCQUFlLEVBQUMsTUFBSUEsZUFBdlA7QUFBdVFDLG9CQUFrQixFQUFDLE1BQUlBLGtCQUE5UjtBQUFpVEMsb0JBQWtCLEVBQUMsTUFBSUEsa0JBQXhVO0FBQTJWQyxxQkFBbUIsRUFBQyxNQUFJQSxtQkFBblg7QUFBdVlDLHFCQUFtQixFQUFDLE1BQUlBLG1CQUEvWjtBQUFtYkMscUJBQW1CLEVBQUMsTUFBSUEsbUJBQTNjO0FBQStkQyxzQkFBb0IsRUFBQyxNQUFJQSxvQkFBeGY7QUFBNmdCQyx1QkFBcUIsRUFBQyxNQUFJQSxxQkFBdmlCO0FBQTZqQkMsc0JBQW9CLEVBQUMsTUFBSUEsb0JBQXRsQjtBQUEybUJDLG9CQUFrQixFQUFDLE1BQUlBLGtCQUFsb0I7QUFBcXBCQywwQkFBd0IsRUFBQyxNQUFJQSx3QkFBbHJCO0FBQTJzQkMsb0JBQWtCLEVBQUMsTUFBSUEsa0JBQWx1QjtBQUFxdkJDLHVCQUFxQixFQUFDLE1BQUlBLHFCQUEvd0I7QUFBcXlCQyx3QkFBc0IsRUFBQyxNQUFJQSxzQkFBaDBCO0FBQXUxQkMsOEJBQTRCLEVBQUMsTUFBSUEsNEJBQXgzQjtBQUFxNUJDLCtCQUE2QixFQUFDLE1BQUlBLDZCQUF2N0I7QUFBcTlCQyx3QkFBc0IsRUFBQyxNQUFJQTtBQUFoL0IsQ0FBZDtBQUF1aEMsSUFBSXJPLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSWtILGNBQUo7QUFBbUJwSCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDbUgsZ0JBQWMsQ0FBQ2xILENBQUQsRUFBRztBQUFDa0gsa0JBQWMsR0FBQ2xILENBQWY7QUFBaUI7O0FBQXBDLENBQTFDLEVBQWdGLENBQWhGO0FBQW1GLElBQUltSCxZQUFKO0FBQWlCckgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ29ILGNBQVksQ0FBQ25ILENBQUQsRUFBRztBQUFDbUgsZ0JBQVksR0FBQ25ILENBQWI7QUFBZTs7QUFBaEMsQ0FBMUMsRUFBNEUsQ0FBNUU7QUFBK0UsSUFBSWtCLE1BQUosRUFBV0MsZ0JBQVgsRUFBNEJDLGFBQTVCLEVBQTBDZSxnQkFBMUMsRUFBMkRDLFlBQTNEO0FBQXdFdEMsTUFBTSxDQUFDQyxJQUFQLENBQVksa0JBQVosRUFBK0I7QUFBQ21CLFFBQU0sQ0FBQ2xCLENBQUQsRUFBRztBQUFDa0IsVUFBTSxHQUFDbEIsQ0FBUDtBQUFTLEdBQXBCOztBQUFxQm1CLGtCQUFnQixDQUFDbkIsQ0FBRCxFQUFHO0FBQUNtQixvQkFBZ0IsR0FBQ25CLENBQWpCO0FBQW1CLEdBQTVEOztBQUE2RG9CLGVBQWEsQ0FBQ3BCLENBQUQsRUFBRztBQUFDb0IsaUJBQWEsR0FBQ3BCLENBQWQ7QUFBZ0IsR0FBOUY7O0FBQStGbUMsa0JBQWdCLENBQUNuQyxDQUFELEVBQUc7QUFBQ21DLG9CQUFnQixHQUFDbkMsQ0FBakI7QUFBbUIsR0FBdEk7O0FBQXVJb0MsY0FBWSxDQUFDcEMsQ0FBRCxFQUFHO0FBQUNvQyxnQkFBWSxHQUFDcEMsQ0FBYjtBQUFlOztBQUF0SyxDQUEvQixFQUF1TSxDQUF2TTtBQUs5MUMsTUFBTTRNLFdBQVcsR0FBRyxJQUFJeEYsZUFBSixDQUFvQjtBQUMzQ0MsTUFBSSxFQUFFLGNBRHFDO0FBRTNDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QnhELE9BQUcsRUFBRTtBQUFDNEQsVUFBSSxFQUFFQztBQUFQLEtBRGtCO0FBRXZCMkcsYUFBUyxFQUFFO0FBQUM1RyxVQUFJLEVBQUVDO0FBQVAsS0FGWTtBQUd2QjRHLGVBQVcsRUFBRTtBQUFDN0csVUFBSSxFQUFFQztBQUFQLEtBSFU7QUFJdkI2RyxVQUFNLEVBQUU7QUFBQzlHLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBSmU7QUFLdkJDLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFQztBQUFQLEtBTGU7QUFNdkJnRixRQUFJLEVBQUU7QUFBQ2pGLFVBQUksRUFBRUM7QUFBUCxLQU5pQjtBQU92QmdILGNBQVUsRUFBRTtBQUFDakgsVUFBSSxFQUFFQztBQUFQLEtBUFc7QUFRdkJpSCxTQUFLLEVBQUU7QUFBQ2xILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBUmdCO0FBU3ZCSSxVQUFNLEVBQUU7QUFBQ25ILFVBQUksRUFBRUM7QUFBUCxLQVRlO0FBVXZCbUgsWUFBUSxFQUFFO0FBQUNwSCxVQUFJLEVBQUVDO0FBQVAsS0FWYTtBQVd2QlosYUFBUyxFQUFFO0FBQUNXLFVBQUksRUFBRTZCLE9BQVA7QUFBZ0JrRixjQUFRLEVBQUU7QUFBMUIsS0FYWTtBQVl2Qk0sYUFBUyxFQUFFO0FBQUNySCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQVpZO0FBYXZCTyxpQkFBYSxFQUFFO0FBQUN0SCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQWJRO0FBY3ZCUSxPQUFHLEVBQUU7QUFBQ3ZILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBZGtCO0FBZXZCUyxXQUFPLEVBQUU7QUFBQ3hILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCO0FBZmMsR0FBakIsRUFnQlB6RyxTQWhCTyxFQUZpQzs7QUFtQjNDQyxLQUFHLENBQUM7QUFDQW5FLE9BREE7QUFFQXdLLGFBRkE7QUFHQUMsZUFIQTtBQUlBQyxVQUpBO0FBS0FFLFVBTEE7QUFNQS9CLFFBTkE7QUFPQWdDLGNBUEE7QUFRQUMsU0FSQTtBQVNBQyxVQVRBO0FBVUFDLFlBVkE7QUFXQS9ILGFBWEE7QUFZQWdJLGFBWkE7QUFhQUMsaUJBYkE7QUFjQUMsT0FkQTtBQWVBQztBQWZBLEdBQUQsRUFnQkQ7QUFDRTs7O0FBR0EsV0FBTzdOLE1BQU0sQ0FBQzZHLE1BQVAsQ0FBYztBQUNqQnBFLFNBQUcsRUFBRUEsR0FEWTtBQUVqQndLLGVBQVMsRUFBRUEsU0FGTTtBQUdqQkMsaUJBQVcsRUFBRUEsV0FISTtBQUlqQkMsWUFBTSxFQUFFQSxNQUpTO0FBS2pCRSxZQUFNLEVBQUVBLE1BTFM7QUFNakIvQixVQUFJLEVBQUVBLElBTlc7QUFPakJnQyxnQkFBVSxFQUFFQSxVQVBLO0FBUWpCL0YsU0FBRyxFQUFFK0YsVUFBVSxDQUFDUSxNQUFYLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBUlk7QUFTakJ0RyxTQUFHLEVBQUU4RixVQUFVLENBQUNRLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FUWTtBQVVqQnJHLFNBQUcsRUFBRTZGLFVBQVUsQ0FBQ1EsTUFBWCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQVZZO0FBV2pCUCxXQUFLLEVBQUVBLEtBWFU7QUFZakJDLFlBQU0sRUFBRUEsTUFaUztBQWFqQkMsY0FBUSxFQUFFQSxRQWJPO0FBY2pCL0gsZUFBUyxFQUFFQSxTQWRNO0FBZWpCZ0ksZUFBUyxFQUFFQSxTQWZNO0FBZ0JqQkMsbUJBQWEsRUFBRUEsYUFoQkU7QUFpQmpCQyxTQUFHLEVBQUVBLEdBakJZO0FBa0JqQkMsYUFBTyxFQUFFLElBQUk3RixJQUFKLEVBbEJRO0FBbUJqQitGLGVBQVMsRUFBRSxLQW5CTTtBQW9CakJDLG9CQUFjLEVBQUU7QUFwQkMsS0FBZCxDQUFQO0FBc0JIOztBQTdEMEMsQ0FBcEIsQ0FBcEI7QUFnRUEsTUFBTXJDLFVBQVUsR0FBRyxJQUFJekYsZUFBSixDQUFvQjtBQUMxQ0MsTUFBSSxFQUFFLGFBRG9DO0FBRTFDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QitHLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFQztBQUFQLEtBRmU7QUFHdkJrSCxVQUFNLEVBQUU7QUFBQ25ILFVBQUksRUFBRUM7QUFBUCxLQUhlO0FBSXZCbUgsWUFBUSxFQUFFO0FBQUNwSCxVQUFJLEVBQUVDO0FBQVAsS0FKYTtBQUt2QlosYUFBUyxFQUFFO0FBQUNXLFVBQUksRUFBRTZCLE9BQVA7QUFBZ0JrRixjQUFRLEVBQUU7QUFBMUIsS0FMWTtBQU12Qk0sYUFBUyxFQUFFO0FBQUNySCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQU5ZO0FBT3ZCTyxpQkFBYSxFQUFFO0FBQUN0SCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQVBRO0FBUXZCUSxPQUFHLEVBQUU7QUFBQ3ZILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBUmtCO0FBU3ZCUyxXQUFPLEVBQUU7QUFBQ3hILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCO0FBVGMsR0FBakIsRUFVUHpHLFNBVk8sRUFGZ0M7O0FBYTFDQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBdUcsVUFGQTtBQUdBRyxVQUhBO0FBSUFDLFlBSkE7QUFLQS9ILGFBTEE7QUFNQWdJLGFBTkE7QUFPQUMsaUJBUEE7QUFRQUMsT0FSQTtBQVNBQztBQVRBLEdBQUQsRUFVRDtBQUNFLFdBQU83TixNQUFNLENBQUMrRyxNQUFQLENBQWM7QUFDYjdDLFNBQUcsRUFBQzRDO0FBRFMsS0FBZCxFQUVEO0FBQ0VFLFVBQUksRUFBQztBQUNEcUcsY0FBTSxFQUFFQSxNQURQO0FBRURHLGNBQU0sRUFBRUEsTUFGUDtBQUdEQyxnQkFBUSxFQUFFQSxRQUhUO0FBSUQvSCxpQkFBUyxFQUFFQSxTQUpWO0FBS0RnSSxpQkFBUyxFQUFFQSxTQUxWO0FBTURDLHFCQUFhLEVBQUVBLGFBTmQ7QUFPREMsV0FBRyxFQUFFQSxHQVBKO0FBUURDLGVBQU8sRUFBRSxJQUFJN0YsSUFBSixFQVJSO0FBU0QrRixpQkFBUyxFQUFFLEtBVFY7QUFVREMsc0JBQWMsRUFBRTtBQVZmO0FBRFAsS0FGQyxDQUFQO0FBZ0JIOztBQXhDeUMsQ0FBcEIsQ0FBbkI7QUEyQ0EsTUFBTXBDLGlCQUFpQixHQUFHLElBQUkxRixlQUFKLENBQW9CO0FBQ2pEQyxNQUFJLEVBQUUsb0JBRDJDO0FBRWpEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QjZHLFVBQU0sRUFBRTtBQUFDOUcsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FGZTtBQUd2QkMsVUFBTSxFQUFFO0FBQUNoSCxVQUFJLEVBQUVDO0FBQVAsS0FIZTtBQUl2QmtILFVBQU0sRUFBRTtBQUFDbkgsVUFBSSxFQUFFQztBQUFQLEtBSmU7QUFLdkJxSCxpQkFBYSxFQUFFO0FBQUN0SCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQUxRO0FBTXZCUSxPQUFHLEVBQUU7QUFBQ3ZILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBTmtCO0FBT3ZCUyxXQUFPLEVBQUU7QUFBQ3hILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCO0FBUGMsR0FBakIsRUFRUHpHLFNBUk8sRUFGdUM7O0FBV2pEQyxLQUFHLENBQUM7QUFBQ0UsTUFBRDtBQUFLcUcsVUFBTDtBQUFhRSxVQUFiO0FBQXFCRyxVQUFyQjtBQUE2QkcsaUJBQTdCO0FBQTRDQyxPQUE1QztBQUFpREM7QUFBakQsR0FBRCxFQUEyRDtBQUMxRCxXQUFPN04sTUFBTSxDQUFDK0csTUFBUCxDQUFjO0FBQ2I3QyxTQUFHLEVBQUM0QztBQURTLEtBQWQsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRG1HLGNBQU0sRUFBRUEsTUFEUDtBQUVERSxjQUFNLEVBQUVBLE1BRlA7QUFHREcsY0FBTSxFQUFFQSxNQUhQO0FBSURHLHFCQUFhLEVBQUVBLGFBSmQ7QUFLREMsV0FBRyxFQUFFQSxHQUxKO0FBTURDLGVBQU8sRUFBRSxJQUFJN0YsSUFBSixFQU5SO0FBT0QrRixpQkFBUyxFQUFFO0FBUFY7QUFEUCxLQUZDLENBQVA7QUFhSDs7QUF6QmdELENBQXBCLENBQTFCO0FBNEJBLE1BQU1sQyxjQUFjLEdBQUcsSUFBSTNGLGVBQUosQ0FBb0I7QUFDOUNDLE1BQUksRUFBRSxpQkFEd0M7QUFFOUNDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCNkcsVUFBTSxFQUFFO0FBQUM5RyxVQUFJLEVBQUVDO0FBQVAsS0FGZTtBQUd2QmtILFVBQU0sRUFBRTtBQUFDbkgsVUFBSSxFQUFFQztBQUFQLEtBSGU7QUFJdkJxSCxpQkFBYSxFQUFFO0FBQUN0SCxVQUFJLEVBQUVDO0FBQVA7QUFKUSxHQUFqQixFQUtQSyxTQUxPLEVBRm9DOztBQVE5Q0MsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS3FHLFVBQUw7QUFBYUssVUFBYjtBQUFxQkc7QUFBckIsR0FBRCxFQUFxQztBQUNwQyxXQUFPM04sTUFBTSxDQUFDK0csTUFBUCxDQUFjO0FBQ2I3QyxTQUFHLEVBQUU0QztBQURRLEtBQWQsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRG1HLGNBQU0sRUFBRUEsTUFEUDtBQUVESyxjQUFNLEVBQUVBLE1BRlA7QUFHREcscUJBQWEsRUFBRUE7QUFIZDtBQURQLEtBRkMsQ0FBUDtBQVNIOztBQWxCNkMsQ0FBcEIsQ0FBdkI7QUFxQkEsTUFBTTdCLG9CQUFvQixHQUFHLElBQUk1RixlQUFKLENBQW9CO0FBQ3BEQyxNQUFJLEVBQUUsdUJBRDhDO0FBRXBEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QitHLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFQztBQUFQO0FBRmUsR0FBakIsRUFHUEssU0FITyxFQUYwQzs7QUFNcERDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUt1RztBQUFMLEdBQUQsRUFBYztBQUNiLFdBQU9yTixNQUFNLENBQUMrRyxNQUFQLENBQWM7QUFDYjdDLFNBQUcsRUFBRTRDO0FBRFEsS0FBZCxFQUVEO0FBQ0VFLFVBQUksRUFBRTtBQUNGcUcsY0FBTSxFQUFFQSxNQUROLENBRUY7O0FBRkU7QUFEUixLQUZDLENBQVA7QUFRSDs7QUFmbUQsQ0FBcEIsQ0FBN0I7QUFrQkEsTUFBTXRCLHVCQUF1QixHQUFHLElBQUk3RixlQUFKLENBQW9CO0FBQ3ZEQyxNQUFJLEVBQUUsMEJBRGlEO0FBRXZEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUDtBQURtQixHQUFqQixFQUVQSyxTQUZPLEVBRjZDOztBQUt2REMsS0FBRyxDQUFDO0FBQUNFO0FBQUQsR0FBRCxFQUFNO0FBQ0wsV0FBTzlHLE1BQU0sQ0FBQytHLE1BQVAsQ0FBYztBQUNiN0MsU0FBRyxFQUFFNEM7QUFEUSxLQUFkLEVBRUQ7QUFDRUUsVUFBSSxFQUFFO0FBQ0ZnSCxzQkFBYyxFQUFFO0FBRGQ7QUFEUixLQUZDLENBQVA7QUFPSDs7QUFic0QsQ0FBcEIsQ0FBaEM7QUFnQkEsTUFBTWhDLGVBQWUsR0FBRyxJQUFJOUYsZUFBSixDQUFvQjtBQUMvQ0MsTUFBSSxFQUFFLGtCQUR5QztBQUUvQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkIrRyxVQUFNLEVBQUU7QUFBQ2hILFVBQUksRUFBRUM7QUFBUDtBQUZlLEdBQWpCLEVBR1BLLFNBSE8sRUFGcUM7O0FBTS9DQyxLQUFHLENBQUM7QUFBQ0UsTUFBRDtBQUFLdUc7QUFBTCxHQUFELEVBQWM7QUFDYixXQUFPck4sTUFBTSxDQUFDK0csTUFBUCxDQUFjO0FBQ2I3QyxTQUFHLEVBQUM0QztBQURTLEtBQWQsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRDJHLHFCQUFhLEVBQUUsRUFEZDtBQUVETixjQUFNLEVBQUVBLE1BRlA7QUFHREcsY0FBTSxFQUFFLE1BSFA7QUFJREMsZ0JBQVEsRUFBRUosTUFKVDtBQUtEVSxpQkFBUyxFQUFFO0FBTFY7QUFEUCxLQUZDLENBQVA7QUFXSDs7QUFsQjhDLENBQXBCLENBQXhCO0FBc0JBLE1BQU05QixrQkFBa0IsR0FBRyxJQUFJL0YsZUFBSixDQUFvQjtBQUNsREMsTUFBSSxFQUFFLHFCQUQ0QztBQUVsREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkIzRCxrQkFBYyxFQUFFO0FBQUMrRCxVQUFJLEVBQUVDO0FBQVAsS0FETztBQUV2QjJILGlCQUFhLEVBQUU7QUFBQzVILFVBQUksRUFBRUM7QUFBUCxLQUZRO0FBR3ZCNEgsZ0JBQVksRUFBRTtBQUFDN0gsVUFBSSxFQUFFQztBQUFQLEtBSFM7QUFJdkI2SCxtQkFBZSxFQUFFO0FBQUM5SCxVQUFJLEVBQUU2QjtBQUFQLEtBSk07QUFLdkJrRyxVQUFNLEVBQUU7QUFBQy9ILFVBQUksRUFBRUM7QUFBUCxLQUxlO0FBTXZCK0gsU0FBSyxFQUFFO0FBQUNoSSxVQUFJLEVBQUVDO0FBQVAsS0FOZ0I7QUFPdkJnSSxvQkFBZ0IsRUFBRTtBQUFDakksVUFBSSxFQUFFNkI7QUFBUCxLQVBLO0FBU3ZCcUcsV0FBTyxFQUFFO0FBQUNsSSxVQUFJLEVBQUVDO0FBQVAsS0FUYztBQVV2QmtJLFdBQU8sRUFBRTtBQUFDbkksVUFBSSxFQUFFQztBQUFQLEtBVmM7QUFXdkJtSSxXQUFPLEVBQUU7QUFBQ3BJLFVBQUksRUFBRUM7QUFBUCxLQVhjO0FBWXZCO0FBQ0FvSSxpQkFBYSxFQUFFO0FBQUNySSxVQUFJLEVBQUVDO0FBQVAsS0FiUTtBQWN2QnFJLFVBQU0sRUFBRTtBQUFDdEksVUFBSSxFQUFFQyxNQUFQO0FBQWdCOEcsY0FBUSxFQUFFO0FBQTFCO0FBZGUsR0FBakIsRUFlUHpHLFNBZk8sRUFGd0M7O0FBa0JsREMsS0FBRyxDQUFDO0FBQ0F0RSxrQkFEQTtBQUVBMkwsaUJBRkE7QUFHQUMsZ0JBSEE7QUFJQUMsbUJBSkE7QUFLQUMsVUFMQTtBQU1BQyxTQU5BO0FBT0FDLG9CQVBBO0FBUUFDLFdBUkE7QUFTQUMsV0FUQTtBQVVBQyxXQVZBO0FBV0E7QUFDQUMsaUJBWkE7QUFhQUM7QUFiQSxHQUFELEVBY0Q7QUFDRSxXQUFPLENBQ0h6TyxhQUFhLENBQUMyRyxNQUFkLENBQXFCO0FBQ2pCdkUsb0JBQWMsRUFBRUEsY0FEQztBQUVqQjJMLG1CQUFhLEVBQUVBLGFBRkU7QUFJakJXLGFBQU8sRUFBRVgsYUFBYSxDQUFDSCxNQUFkLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBSlE7QUFLakJlLGFBQU8sRUFBRVosYUFBYSxDQUFDSCxNQUFkLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBTFE7QUFNakJnQixhQUFPLEVBQUViLGFBQWEsQ0FBQ0gsTUFBZCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQU5RO0FBUWpCSSxrQkFBWSxFQUFFQSxZQVJHO0FBU2pCQyxxQkFBZSxFQUFFQSxlQVRBO0FBVWpCQyxZQUFNLEVBQUVBLE1BVlM7QUFXakJDLFdBQUssRUFBRUEsS0FYVTtBQVlqQkMsc0JBQWdCLEVBQUVBLGdCQVpEO0FBYWpCUyxvQkFBYyxFQUFFLEVBYkM7QUFjakJSLGFBQU8sRUFBRUEsT0FkUTtBQWVqQkMsYUFBTyxFQUFFQSxPQWZRO0FBZ0JqQkMsYUFBTyxFQUFFQSxPQWhCUTtBQWlCakI7QUFDQUMsbUJBQWEsRUFBRUEsYUFsQkU7QUFtQmpCQyxZQUFNLEVBQUVBLE1BbkJTO0FBb0JqQmpNLGVBQVMsRUFBRSxJQUFJc0YsSUFBSjtBQXBCTSxLQUFyQixDQURHLEVBdUJIaEksTUFBTSxDQUFDK0csTUFBUCxDQUFjO0FBQ1Y2RyxTQUFHLEVBQUVRLE1BREs7QUFFVkwsZUFBUyxFQUFFLEtBRkQ7QUFHVmlCLFVBQUksRUFBQyxDQUNEO0FBQUMzQixjQUFNLEVBQUU7QUFBQzRCLGFBQUcsRUFBRTtBQUFOO0FBQVQsT0FEQyxFQUVEO0FBQUM1QixjQUFNLEVBQUU7QUFBQzRCLGFBQUcsRUFBRTtBQUFOO0FBQVQsT0FGQyxFQUdEO0FBQUM1QixjQUFNLEVBQUU7QUFBQzRCLGFBQUcsRUFBRTtBQUFOO0FBQVQsT0FIQztBQUhLLEtBQWQsRUFRTTtBQUNFakksVUFBSSxFQUFFO0FBQ0YrRyxpQkFBUyxFQUFFLElBRFQ7QUFFRnpMLHNCQUFjLEVBQUVBO0FBRmQ7QUFEUixLQVJOLEVBYUU7QUFDRTRNLFdBQUssRUFBQztBQURSLEtBYkYsQ0F2QkcsRUF1Q0hqUCxnQkFBZ0IsQ0FBQzhHLE1BQWpCLENBQXdCO0FBQ3BCNkcsU0FBRyxFQUFFUSxNQURlO0FBRXBCTCxlQUFTLEVBQUUsS0FGUztBQUdwQjtBQUNBb0IsWUFBTSxFQUFFLElBSlk7QUFLcEJILFVBQUksRUFBQyxDQUNEO0FBQUMzQixjQUFNLEVBQUU7QUFBQzRCLGFBQUcsRUFBRTtBQUFOO0FBQVQsT0FEQztBQUxlLEtBQXhCLEVBUU07QUFDRWpJLFVBQUksRUFBRTtBQUNGK0csaUJBQVMsRUFBRSxJQURUO0FBRUZ6TCxzQkFBYyxFQUFFQTtBQUZkO0FBRFIsS0FSTixFQWFFO0FBQ0U0TSxXQUFLLEVBQUM7QUFEUixLQWJGLENBdkNHLENBQVA7QUF3REg7O0FBekZpRCxDQUFwQixDQUEzQjtBQTRGQSxNQUFNaEQsa0JBQWtCLEdBQUcsSUFBSWhHLGVBQUosQ0FBb0I7QUFDbERDLE1BQUksRUFBRSxxQkFENEM7QUFFbERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCZ0ksb0JBQWdCLEVBQUU7QUFBQ2pJLFVBQUksRUFBRTZCO0FBQVAsS0FGSztBQUd2QnFHLFdBQU8sRUFBRTtBQUFDbEksVUFBSSxFQUFFQztBQUFQLEtBSGM7QUFJdkJrSSxXQUFPLEVBQUU7QUFBQ25JLFVBQUksRUFBRUM7QUFBUCxLQUpjO0FBS3ZCbUksV0FBTyxFQUFFO0FBQUNwSSxVQUFJLEVBQUVDO0FBQVAsS0FMYztBQU12QjtBQUNBb0ksaUJBQWEsRUFBRTtBQUFDckksVUFBSSxFQUFFQztBQUFQLEtBUFE7QUFRdkJxSSxVQUFNLEVBQUU7QUFBQ3RJLFVBQUksRUFBRUMsTUFBUDtBQUFnQjhHLGNBQVEsRUFBRTtBQUExQjtBQVJlLEdBQWpCLEVBU1B6RyxTQVRPLEVBRndDOztBQVlsREMsS0FBRyxDQUFDO0FBQ0FFLE1BREE7QUFFQXdILG9CQUZBO0FBR0FDLFdBSEE7QUFJQUMsV0FKQTtBQUtBQyxXQUxBO0FBTUE7QUFDQUMsaUJBUEE7QUFRQUM7QUFSQSxHQUFELEVBU0Q7QUFDRSxXQUFPek8sYUFBYSxDQUFDNkcsTUFBZCxDQUFxQjtBQUNwQjdDLFNBQUcsRUFBRTRDO0FBRGUsS0FBckIsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRHNILHdCQUFnQixFQUFFQSxnQkFEakI7QUFFREMsZUFBTyxFQUFFQSxPQUZSO0FBR0RDLGVBQU8sRUFBRUEsT0FIUjtBQUlEQyxlQUFPLEVBQUVBLE9BSlI7QUFLRE0sc0JBQWMsRUFBRVIsT0FBTyxHQUFHLEdBQVYsR0FBZ0JDLE9BQWhCLEdBQTBCLEdBQTFCLEdBQWdDQyxPQUwvQztBQU1EQyxxQkFBYSxFQUFFQSxhQU5kO0FBT0RDLGNBQU0sRUFBRUE7QUFQUDtBQURQLEtBRkMsQ0FBUDtBQWFIOztBQW5DaUQsQ0FBcEIsQ0FBM0I7QUF3Q0EsTUFBTXhDLG1CQUFtQixHQUFHLElBQUlqRyxlQUFKLENBQW9CO0FBQ25EQyxNQUFJLEVBQUUsc0JBRDZDO0FBRW5EQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QnhELE9BQUcsRUFBRTtBQUFDNEQsVUFBSSxFQUFFQztBQUFQLEtBRGtCO0FBRXZCMkcsYUFBUyxFQUFFO0FBQUM1RyxVQUFJLEVBQUVDO0FBQVAsS0FGWTtBQUd2QjRHLGVBQVcsRUFBRTtBQUFDN0csVUFBSSxFQUFFQztBQUFQLEtBSFU7QUFJdkI7QUFDQStHLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFQztBQUFQLEtBTGU7QUFNdkI7QUFDQWdILGNBQVUsRUFBRTtBQUFDakgsVUFBSSxFQUFFQztBQUFQLEtBUFc7QUFRdkI7QUFDQWtILFVBQU0sRUFBRTtBQUFDbkgsVUFBSSxFQUFFQztBQUFQLEtBVGU7QUFVdkJtSCxZQUFRLEVBQUU7QUFBQ3BILFVBQUksRUFBRUM7QUFBUCxLQVZhO0FBV3ZCWixhQUFTLEVBQUU7QUFBQ1csVUFBSSxFQUFFNkIsT0FBUDtBQUFnQmtGLGNBQVEsRUFBRTtBQUExQixLQVhZO0FBWXZCTSxhQUFTLEVBQUU7QUFBQ3JILFVBQUksRUFBRUM7QUFBUCxLQVpZO0FBYXZCOEksZUFBVyxFQUFFO0FBQUMvSSxVQUFJLEVBQUUsQ0FBQ0MsTUFBRDtBQUFQLEtBYlU7O0FBZXZCOzs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTs7OztBQU9BcUgsaUJBQWEsRUFBRTtBQUFDdEgsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0E3RFE7QUE4RHZCUSxPQUFHLEVBQUU7QUFBQ3ZILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBOURrQjtBQStEdkJTLFdBQU8sRUFBRTtBQUFDeEgsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekI7QUEvRGMsR0FBakIsRUFnRVB6RyxTQWhFTyxFQUZ5Qzs7QUFtRW5EQyxLQUFHLENBQUM7QUFDQW5FLE9BREE7QUFFQXdLLGFBRkE7QUFHQUMsZUFIQTtBQUlBO0FBQ0FHLFVBTEE7QUFNQTtBQUNBQyxjQVBBO0FBUUE7QUFDQUUsVUFUQTtBQVVBQyxZQVZBO0FBV0EvSCxhQVhBO0FBWUFnSSxhQVpBO0FBYUEwQixlQWJBO0FBY0F6QixpQkFkQTtBQWVBQyxPQWZBO0FBZ0JBQztBQWhCQSxHQUFELEVBaUJEO0FBQ0UsV0FBTzVOLGdCQUFnQixDQUFDNEcsTUFBakIsQ0FBd0I7QUFDM0JwRSxTQUFHLEVBQUVBLEdBRHNCO0FBRTNCd0ssZUFBUyxFQUFFQSxTQUZnQjtBQUczQkMsaUJBQVcsRUFBRUEsV0FIYztBQUkzQjtBQUNBRyxZQUFNLEVBQUVBLE1BTG1CO0FBTzNCZ0Msa0JBQVksRUFBRSxLQVBhO0FBUTNCO0FBQ0EvQixnQkFBVSxFQUFFQSxVQVRlO0FBVTNCL0YsU0FBRyxFQUFFK0YsVUFBVSxDQUFDUSxNQUFYLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBVnNCO0FBVzNCdEcsU0FBRyxFQUFFOEYsVUFBVSxDQUFDUSxNQUFYLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBWHNCO0FBWTNCckcsU0FBRyxFQUFFNkYsVUFBVSxDQUFDUSxNQUFYLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBWnNCO0FBYTNCO0FBQ0FOLFlBQU0sRUFBRUEsTUFkbUI7QUFlM0IyQixZQUFNLEVBQUUsS0FmbUI7QUFnQjNCMUIsY0FBUSxFQUFFQSxRQWhCaUI7QUFpQjNCL0gsZUFBUyxFQUFFQSxTQWpCZ0I7QUFrQjNCZ0ksZUFBUyxFQUFFQSxTQWxCZ0I7QUFtQjNCMEIsaUJBQVcsRUFBRUEsV0FuQmM7QUFvQjNCekIsbUJBQWEsRUFBRUEsYUFwQlk7QUFxQjNCQyxTQUFHLEVBQUVBLEdBckJzQjtBQXNCM0JDLGFBQU8sRUFBRSxJQUFJN0YsSUFBSixFQXRCa0I7QUF1QjNCK0YsZUFBUyxFQUFFO0FBdkJnQixLQUF4QixDQUFQO0FBeUJIOztBQTlHa0QsQ0FBcEIsQ0FBNUI7QUFpSEEsTUFBTTNCLG1CQUFtQixHQUFHLElBQUlsRyxlQUFKLENBQW9CO0FBQ25EQyxNQUFJLEVBQUUsc0JBRDZDO0FBRW5EQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QitHLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFQztBQUFQO0FBRmUsR0FBakIsRUFHUEssU0FITyxFQUZ5Qzs7QUFNbkRDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUt1RztBQUFMLEdBQUQsRUFBYztBQUNiLFdBQU9wTixnQkFBZ0IsQ0FBQzhHLE1BQWpCLENBQXdCO0FBQ3ZCN0MsU0FBRyxFQUFDNEM7QUFEbUIsS0FBeEIsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRDJHLHFCQUFhLEVBQUUsRUFEZDtBQUVETixjQUFNLEVBQUVBLE1BRlA7QUFHRCtCLG1CQUFXLEVBQUUsRUFIWjtBQUlENUIsY0FBTSxFQUFFLE1BSlA7QUFLREMsZ0JBQVEsRUFBRUosTUFMVDtBQU1EVSxpQkFBUyxFQUFFO0FBTlY7QUFEUCxLQUZDLENBQVA7QUFZSDs7QUFuQmtELENBQXBCLENBQTVCO0FBc0JBLE1BQU0xQixtQkFBbUIsR0FBRyxJQUFJbkcsZUFBSixDQUFvQjtBQUNuREMsTUFBSSxFQUFFLHNCQUQ2QztBQUVuREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFHdkI4SSxlQUFXLEVBQUU7QUFBQy9JLFVBQUksRUFBRSxDQUFDQyxNQUFEO0FBQVAsS0FIVTtBQUl2QnFILGlCQUFhLEVBQUU7QUFBQ3RILFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCO0FBSlEsR0FBakIsRUFLUHpHLFNBTE8sRUFGeUM7O0FBUW5EQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBc0ksZUFGQTtBQUdBekI7QUFIQSxHQUFELEVBSUQ7QUFDRSxXQUFPMU4sZ0JBQWdCLENBQUM4RyxNQUFqQixDQUF3QjtBQUN2QjdDLFNBQUcsRUFBQzRDO0FBRG1CLEtBQXhCLEVBRUQ7QUFDRUUsVUFBSSxFQUFDO0FBQ0RvSSxtQkFBVyxFQUFFQSxXQURaO0FBRUR6QixxQkFBYSxFQUFFQSxhQUZkO0FBR0RILGNBQU0sRUFBRSxNQUhQO0FBSUQyQixjQUFNLEVBQUU7QUFKUDtBQURQLEtBRkMsQ0FBUDtBQVVIOztBQXZCa0QsQ0FBcEIsQ0FBNUI7QUEwQkEsTUFBTTdDLG9CQUFvQixHQUFHLElBQUlwRyxlQUFKLENBQW9CO0FBQ3BEQyxNQUFJLEVBQUUsdUJBRDhDO0FBRXBEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QitHLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFQztBQUFQO0FBRmUsR0FBakIsRUFHUEssU0FITyxFQUYwQzs7QUFNcERDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUt1RztBQUFMLEdBQUQsRUFBYztBQUNiLFdBQU9wTixnQkFBZ0IsQ0FBQzhHLE1BQWpCLENBQXdCO0FBQ3ZCN0MsU0FBRyxFQUFFNEM7QUFEa0IsS0FBeEIsRUFFRDtBQUNFRSxVQUFJLEVBQUU7QUFDRnFHLGNBQU0sRUFBRUE7QUFETjtBQURSLEtBRkMsQ0FBUDtBQU9IOztBQWRtRCxDQUFwQixDQUE3QjtBQWlCQSxNQUFNZCxxQkFBcUIsR0FBRyxJQUFJckcsZUFBSixDQUFvQjtBQUNyREMsTUFBSSxFQUFFLHdCQUQrQztBQUVyREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkIrSSxnQkFBWSxFQUFFO0FBQUNoSixVQUFJLEVBQUU2QjtBQUFQO0FBRlMsR0FBakIsRUFHUHZCLFNBSE8sRUFGMkM7O0FBTXJEQyxLQUFHLENBQUM7QUFBQ0UsTUFBRDtBQUFLdUk7QUFBTCxHQUFELEVBQW9CO0FBQ25CLFdBQU9wUCxnQkFBZ0IsQ0FBQzhHLE1BQWpCLENBQXdCO0FBQ3ZCN0MsU0FBRyxFQUFFNEM7QUFEa0IsS0FBeEIsRUFFRDtBQUNFRSxVQUFJLEVBQUU7QUFDRnFJLG9CQUFZLEVBQUVBO0FBRFo7QUFEUixLQUZDLENBQVA7QUFPSDs7QUFkb0QsQ0FBcEIsQ0FBOUI7QUFpQkEsTUFBTTdDLG9CQUFvQixHQUFHLElBQUl0RyxlQUFKLENBQW9CO0FBQ3BEQyxNQUFJLEVBQUUsdUJBRDhDO0FBRXBEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmtILFVBQU0sRUFBRTtBQUFDbkgsVUFBSSxFQUFFQztBQUFQO0FBRmUsR0FBakIsRUFHUEssU0FITyxFQUYwQzs7QUFNcERDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUswRztBQUFMLEdBQUQsRUFBYztBQUNiLFdBQU92TixnQkFBZ0IsQ0FBQzhHLE1BQWpCLENBQXdCO0FBQ3ZCN0MsU0FBRyxFQUFFNEM7QUFEa0IsS0FBeEIsRUFFRDtBQUNFRSxVQUFJLEVBQUU7QUFDRndHLGNBQU0sRUFBRUEsTUFETjtBQUVGMkIsY0FBTSxFQUFFO0FBRk47QUFEUixLQUZDLENBQVA7QUFRSDs7QUFmbUQsQ0FBcEIsQ0FBN0I7QUFrQkEsTUFBTTFDLGtCQUFrQixHQUFHLElBQUl2RyxlQUFKLENBQW9CO0FBQ2xEQyxNQUFJLEVBQUUscUJBRDRDO0FBRWxEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QnFKLFlBQVEsRUFBRTtBQUFDakosVUFBSSxFQUFFQztBQUFQLEtBRGE7QUFFdkIzRCxlQUFXLEVBQUU7QUFBQzBELFVBQUksRUFBQ0M7QUFBTixLQUZVO0FBR3ZCaUosZUFBVyxFQUFFO0FBQUNsSixVQUFJLEVBQUVDO0FBQVAsS0FIVTtBQUl2QmtKLGVBQVcsRUFBRTtBQUFDbkosVUFBSSxFQUFFNkI7QUFBUCxLQUpVO0FBS3ZCb0YsY0FBVSxFQUFFO0FBQUNqSCxVQUFJLEVBQUVDO0FBQVA7QUFMVyxHQUFqQixFQU1QSyxTQU5PLEVBRndDOztBQVNsREMsS0FBRyxDQUFDO0FBQ0EwSSxZQURBO0FBRUEzTSxlQUZBO0FBR0E0TSxlQUhBO0FBSUFDLGVBSkE7QUFLQWxDO0FBTEEsR0FBRCxFQU1EO0FBQ0UsV0FBT3BNLFlBQVksQ0FBQzJGLE1BQWIsQ0FBb0I7QUFDdkJ5SSxjQUFRLEVBQUVBLFFBRGE7QUFFdkIzTSxpQkFBVyxFQUFFQSxXQUZVO0FBR3ZCNE0saUJBQVcsRUFBRUEsV0FIVTtBQUl2QkMsaUJBQVcsRUFBRUEsV0FKVTtBQU12QmxDLGdCQUFVLEVBQUVBLFVBTlc7QUFPdkIvRixTQUFHLEVBQUUrRixVQUFVLENBQUNRLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FQa0I7QUFRdkJ0RyxTQUFHLEVBQUU4RixVQUFVLENBQUNRLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FSa0I7QUFTdkJyRyxTQUFHLEVBQUU2RixVQUFVLENBQUNRLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FUa0I7QUFVdkJwTCxlQUFTLEVBQUUsSUFBSXNGLElBQUo7QUFWWSxLQUFwQixDQUFQO0FBWUg7O0FBNUJpRCxDQUFwQixDQUEzQjtBQStCQSxNQUFNMEUsd0JBQXdCLEdBQUcsSUFBSXhHLGVBQUosQ0FBb0I7QUFDeERDLE1BQUksRUFBRSwyQkFEa0Q7QUFFeERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCcUosWUFBUSxFQUFFO0FBQUNqSixVQUFJLEVBQUVDO0FBQVAsS0FEYTtBQUV2QjNELGVBQVcsRUFBRTtBQUFDMEQsVUFBSSxFQUFDQztBQUFOLEtBRlU7QUFHdkJpSixlQUFXLEVBQUU7QUFBQ2xKLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBSXZCa0osZUFBVyxFQUFFO0FBQUNuSixVQUFJLEVBQUU2QjtBQUFQO0FBSlUsR0FBakIsRUFLUHZCLFNBTE8sRUFGOEM7O0FBUXhEQyxLQUFHLENBQUM7QUFDQTBJLFlBREE7QUFFQTNNLGVBRkE7QUFHQTRNLGVBSEE7QUFJQUM7QUFKQSxHQUFELEVBS0Q7QUFDRSxXQUFPdE8sWUFBWSxDQUFDNkYsTUFBYixDQUFvQjtBQUN2QnVJLGNBQVEsRUFBRUEsUUFEYTtBQUV2QjNNLGlCQUFXLEVBQUVBO0FBRlUsS0FBcEIsRUFHRDtBQUNFcUUsVUFBSSxFQUFFO0FBQ0Z1SSxtQkFBVyxFQUFFQSxXQURYO0FBRUZDLG1CQUFXLEVBQUVBO0FBRlg7QUFEUixLQUhDLENBQVA7QUFTSDs7QUF2QnVELENBQXBCLENBQWpDO0FBMEJBLE1BQU03QyxrQkFBa0IsR0FBRyxJQUFJekcsZUFBSixDQUFvQjtBQUNsREMsTUFBSSxFQUFFLHFCQUQ0QztBQUVsREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJxSixZQUFRLEVBQUU7QUFBQ2pKLFVBQUksRUFBRUM7QUFBUCxLQURhO0FBRXZCM0QsZUFBVyxFQUFFO0FBQUMwRCxVQUFJLEVBQUVDO0FBQVA7QUFGVSxHQUFqQixFQUdQSyxTQUhPLEVBRndDOztBQU1sREMsS0FBRyxDQUFFO0FBQ0QwSSxZQURDO0FBRUQzTTtBQUZDLEdBQUYsRUFHQTtBQUNDLFdBQU96QixZQUFZLENBQUMrRixNQUFiLENBQW9CO0FBQ3ZCcUksY0FBUSxFQUFFQSxRQURhO0FBRXZCM00saUJBQVcsRUFBRUE7QUFGVSxLQUFwQixDQUFQO0FBSUg7O0FBZGlELENBQXBCLENBQTNCO0FBaUJBLE1BQU1pSyxxQkFBcUIsR0FBRyxJQUFJMUcsZUFBSixDQUFvQjtBQUNyREMsTUFBSSxFQUFFLHdCQUQrQztBQUVyREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJxSixZQUFRLEVBQUU7QUFBQ2pKLFVBQUksRUFBRUM7QUFBUDtBQURhLEdBQWpCLEVBRVBLLFNBRk8sRUFGMkM7O0FBS3JEQyxLQUFHLENBQUU7QUFDRDBJO0FBREMsR0FBRixFQUVBO0FBQ0MsV0FBT3BPLFlBQVksQ0FBQytGLE1BQWIsQ0FBb0I7QUFDdkJxSSxjQUFRLEVBQUVBO0FBRGEsS0FBcEIsQ0FBUDtBQUdIOztBQVhvRCxDQUFwQixDQUE5QjtBQWVBLE1BQU16QyxzQkFBc0IsR0FBRyxJQUFJM0csZUFBSixDQUFvQjtBQUN0REMsTUFBSSxFQUFFLHlCQURnRDtBQUV0REMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ3SixzQkFBa0IsRUFBRTtBQUFDcEosVUFBSSxFQUFFQztBQUFQLEtBREc7QUFHdkJvSixlQUFXLEVBQUU7QUFBQ3JKLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBSXZCcUosZUFBVyxFQUFFO0FBQUN0SixVQUFJLEVBQUVDO0FBQVAsS0FKVTtBQUt2QnBFLFlBQVEsRUFBRTtBQUFDbUUsVUFBSSxFQUFFQztBQUFQLEtBTGE7QUFNdkJzSixXQUFPLEVBQUU7QUFBQ3ZKLFVBQUksRUFBRUM7QUFBUCxLQU5jO0FBT3ZCaUIsT0FBRyxFQUFFO0FBQUNsQixVQUFJLEVBQUVDO0FBQVAsS0FQa0I7QUFRdkJrQixPQUFHLEVBQUU7QUFBQ25CLFVBQUksRUFBRUM7QUFBUCxLQVJrQjtBQVN2Qm1CLE9BQUcsRUFBRTtBQUFDcEIsVUFBSSxFQUFFQztBQUFQO0FBVGtCLEdBQWpCLEVBVVBLLFNBVk8sRUFGNEM7O0FBYXREQyxLQUFHLENBQUM7QUFDQTZJLHNCQURBO0FBR0FDLGVBSEE7QUFJQUMsZUFKQTtBQUtBek4sWUFMQTtBQU1BME4sV0FOQTtBQU9BckksT0FQQTtBQVFBQyxPQVJBO0FBU0FDO0FBVEEsR0FBRCxFQVVEO0FBQ0UsV0FBT3hHLGdCQUFnQixDQUFDNEYsTUFBakIsQ0FBd0I7QUFDM0I0SSx3QkFBa0IsRUFBRUEsa0JBRE87QUFFM0JDLGlCQUFXLEVBQUVBLFdBRmM7QUFHM0JDLGlCQUFXLEVBQUVBLFdBSGM7QUFJM0J6TixjQUFRLEVBQUVBLFFBSmlCO0FBSzNCME4sYUFBTyxFQUFFQSxPQUxrQjtBQU0zQnJJLFNBQUcsRUFBRUEsR0FOc0I7QUFPM0JDLFNBQUcsRUFBRUEsR0FQc0I7QUFRM0JDLFNBQUcsRUFBRUEsR0FSc0I7QUFTM0JvSSxXQUFLLEVBQUUsTUFUb0I7QUFVM0JWLFlBQU0sRUFBRSxLQVZtQjtBQVczQnpNLGVBQVMsRUFBRSxJQUFJc0YsSUFBSjtBQVhnQixLQUF4QixDQUFQO0FBYUg7O0FBckNxRCxDQUFwQixDQUEvQjtBQXdDQSxNQUFNOEUsNEJBQTRCLEdBQUcsSUFBSTVHLGVBQUosQ0FBb0I7QUFDNURDLE1BQUksRUFBRSwrQkFEc0Q7QUFFNURDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCdUosU0FBSyxFQUFFO0FBQUN4SixVQUFJLEVBQUVDO0FBQVAsS0FGZ0I7QUFHdkJ3SixXQUFPLEVBQUU7QUFBQ3pKLFVBQUksRUFBRUM7QUFBUDtBQUhjLEdBQWpCLEVBSVBLLFNBSk8sRUFGa0Q7O0FBTzVEQyxLQUFHLENBQUM7QUFBQ0UsTUFBRDtBQUFLK0ksU0FBTDtBQUFZQztBQUFaLEdBQUQsRUFBc0I7QUFDckIsV0FBTzdPLGdCQUFnQixDQUFDOEYsTUFBakIsQ0FBd0I7QUFDdkI3QyxTQUFHLEVBQUU0QztBQURrQixLQUF4QixFQUVEO0FBQ0VFLFVBQUksRUFBRTtBQUNGNkksYUFBSyxFQUFFQSxLQURMO0FBRUZDLGVBQU8sRUFBRUEsT0FGUDtBQUdGWCxjQUFNLEVBQUU7QUFITjtBQURSLEtBRkMsQ0FBUDtBQVNIOztBQWpCMkQsQ0FBcEIsQ0FBckM7QUFvQkEsTUFBTXBDLDZCQUE2QixHQUFHLElBQUk3RyxlQUFKLENBQW9CO0FBQzdEQyxNQUFJLEVBQUUsZ0NBRHVEO0FBRTdEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndKLHNCQUFrQixFQUFFO0FBQUNwSixVQUFJLEVBQUVDO0FBQVAsS0FERztBQUV2QnNILE9BQUcsRUFBRTtBQUFDdkgsVUFBSSxFQUFFQztBQUFQO0FBRmtCLEdBQWpCLEVBR1BLLFNBSE8sRUFGbUQ7O0FBTTdEQyxLQUFHLENBQUM7QUFBQzZJLHNCQUFEO0FBQXFCN0I7QUFBckIsR0FBRCxFQUEyQjtBQUMxQixXQUFPM00sZ0JBQWdCLENBQUM4RixNQUFqQixDQUF3QjtBQUN2QjBJLHdCQUFrQixFQUFFQTtBQURHLEtBQXhCLEVBRUQ7QUFDRXpJLFVBQUksRUFBRTtBQUNGNEcsV0FBRyxFQUFFQSxHQURIO0FBRUZHLGlCQUFTLEVBQUU7QUFGVDtBQURSLEtBRkMsRUFPTDtBQUNFbUIsV0FBSyxFQUFDO0FBRFIsS0FQSyxDQUFQO0FBVUg7O0FBakI0RCxDQUFwQixDQUF0QztBQW9CQSxNQUFNbEMsc0JBQXNCLEdBQUcsSUFBSTlHLGVBQUosQ0FBb0I7QUFDdERDLE1BQUksRUFBRSx5QkFEZ0Q7QUFFdERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGNEM7O0FBS3REQyxLQUFHLENBQUM7QUFBQ0U7QUFBRCxHQUFELEVBQU07QUFDTCxXQUFPN0YsZ0JBQWdCLENBQUNnRyxNQUFqQixDQUF3QjtBQUFDL0MsU0FBRyxFQUFFNEM7QUFBTixLQUF4QixDQUFQO0FBQ0g7O0FBUHFELENBQXBCLENBQS9CLEM7Ozs7Ozs7Ozs7O0FDM3RCUGxJLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUFDOE0saUJBQWUsRUFBQyxNQUFJQSxlQUFyQjtBQUFxQ0MsaUJBQWUsRUFBQyxNQUFJQSxlQUF6RDtBQUF5RUMsZ0JBQWMsRUFBQyxNQUFJQSxjQUE1RjtBQUEyR0MsY0FBWSxFQUFDLE1BQUlBLFlBQTVIO0FBQXlJQyxtQkFBaUIsRUFBQyxNQUFJQSxpQkFBL0o7QUFBaUxDLDBCQUF3QixFQUFDLE1BQUlBLHdCQUE5TTtBQUF1T0MsMkJBQXlCLEVBQUMsTUFBSUEseUJBQXJRO0FBQStSQyx5QkFBdUIsRUFBQyxNQUFJQSx1QkFBM1Q7QUFBbVZDLHdCQUFzQixFQUFDLE1BQUlBLHNCQUE5VztBQUFxWUMsNEJBQTBCLEVBQUMsTUFBSUEsMEJBQXBhO0FBQStiQyx1QkFBcUIsRUFBQyxNQUFJQSxxQkFBemQ7QUFBK2VDLHFCQUFtQixFQUFDLE1BQUlBLG1CQUF2Z0I7QUFBMmhCQyxtQkFBaUIsRUFBQyxNQUFJQSxpQkFBampCO0FBQW1rQkMsMkJBQXlCLEVBQUMsTUFBSUEseUJBQWptQjtBQUEybkJDLDZCQUEyQixFQUFDLE1BQUlBLDJCQUEzcEI7QUFBdXJCQyxpQ0FBK0IsRUFBQyxNQUFJQSwrQkFBM3RCO0FBQTJ2QkMsaUNBQStCLEVBQUMsTUFBSUEsK0JBQS94QjtBQUErekJDLDRCQUEwQixFQUFDLE1BQUlBLDBCQUE5MUI7QUFBeTNCQyxpQkFBZSxFQUFDLE1BQUlBLGVBQTc0QjtBQUE2NUJDLHFCQUFtQixFQUFDLE1BQUlBLG1CQUFyN0I7QUFBeThCQyxpQkFBZSxFQUFDLE1BQUlBLGVBQTc5QjtBQUE2K0JDLGlCQUFlLEVBQUMsTUFBSUEsZUFBamdDO0FBQWloQ0MscUJBQW1CLEVBQUMsTUFBSUEsbUJBQXppQztBQUE2akNDLGNBQVksRUFBQyxNQUFJQTtBQUE5a0MsQ0FBZDtBQUEybUMsSUFBSTNTLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSWtILGNBQUo7QUFBbUJwSCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDbUgsZ0JBQWMsQ0FBQ2xILENBQUQsRUFBRztBQUFDa0gsa0JBQWMsR0FBQ2xILENBQWY7QUFBaUI7O0FBQXBDLENBQTFDLEVBQWdGLENBQWhGO0FBQW1GLElBQUltSCxZQUFKO0FBQWlCckgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ29ILGNBQVksQ0FBQ25ILENBQUQsRUFBRztBQUFDbUgsZ0JBQVksR0FBQ25ILENBQWI7QUFBZTs7QUFBaEMsQ0FBMUMsRUFBNEUsQ0FBNUU7QUFBK0UsSUFBSXFCLFdBQUosRUFBZ0JDLFNBQWhCLEVBQTBCQyxhQUExQixFQUF3Q0MsU0FBeEMsRUFBa0RHLFdBQWxELEVBQThERixhQUE5RCxFQUE0RUMsVUFBNUU7QUFBdUY1QixNQUFNLENBQUNDLElBQVAsQ0FBWSxrQkFBWixFQUErQjtBQUFDc0IsYUFBVyxDQUFDckIsQ0FBRCxFQUFHO0FBQUNxQixlQUFXLEdBQUNyQixDQUFaO0FBQWMsR0FBOUI7O0FBQStCc0IsV0FBUyxDQUFDdEIsQ0FBRCxFQUFHO0FBQUNzQixhQUFTLEdBQUN0QixDQUFWO0FBQVksR0FBeEQ7O0FBQXlEdUIsZUFBYSxDQUFDdkIsQ0FBRCxFQUFHO0FBQUN1QixpQkFBYSxHQUFDdkIsQ0FBZDtBQUFnQixHQUExRjs7QUFBMkZ3QixXQUFTLENBQUN4QixDQUFELEVBQUc7QUFBQ3dCLGFBQVMsR0FBQ3hCLENBQVY7QUFBWSxHQUFwSDs7QUFBcUgyQixhQUFXLENBQUMzQixDQUFELEVBQUc7QUFBQzJCLGVBQVcsR0FBQzNCLENBQVo7QUFBYyxHQUFsSjs7QUFBbUp5QixlQUFhLENBQUN6QixDQUFELEVBQUc7QUFBQ3lCLGlCQUFhLEdBQUN6QixDQUFkO0FBQWdCLEdBQXBMOztBQUFxTDBCLFlBQVUsQ0FBQzFCLENBQUQsRUFBRztBQUFDMEIsY0FBVSxHQUFDMUIsQ0FBWDtBQUFhOztBQUFoTixDQUEvQixFQUFpUCxDQUFqUDtBQUtqOEMsTUFBTWlSLGVBQWUsR0FBRyxJQUFJN0osZUFBSixDQUFvQjtBQUMvQ0MsTUFBSSxFQUFFLGtCQUR5QztBQUUvQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJOLFlBQVEsRUFBRTtBQUFDVSxVQUFJLEVBQUVDO0FBQVAsS0FEYTtBQUV2Qm9KLGVBQVcsRUFBRTtBQUFDckosVUFBSSxFQUFFQztBQUFQLEtBRlU7QUFJdkJpTCxNQUFFLEVBQUU7QUFBQ2xMLFVBQUksRUFBRUM7QUFBUCxLQUptQjtBQUt2QjlFLFVBQU0sRUFBRTtBQUFDNkUsVUFBSSxFQUFFQztBQUFQLEtBTGU7QUFNdkI3RSxjQUFVLEVBQUU7QUFBQzRFLFVBQUksRUFBRUM7QUFBUCxLQU5XO0FBT3ZCNUUsY0FBVSxFQUFFO0FBQUMyRSxVQUFJLEVBQUVDO0FBQVAsS0FQVztBQVN2QjtBQUNBa0wsV0FBTyxFQUFFO0FBQUNuTCxVQUFJLEVBQUVDO0FBQVA7QUFWYyxHQUFqQixFQVdQSyxTQVhPLEVBRnFDOztBQWMvQ0MsS0FBRyxDQUFDO0FBQ0FqQixZQURBO0FBRUErSixlQUZBO0FBSUE2QixNQUpBO0FBS0EvUCxVQUxBO0FBTUFDLGNBTkE7QUFPQUMsY0FQQTtBQVNBO0FBQ0E4UDtBQVZBLEdBQUQsRUFXRDtBQUNFLFdBQU9yUixXQUFXLENBQUMwRyxNQUFaLENBQW1CO0FBQ3RCbEIsY0FBUSxFQUFFQSxRQURZO0FBRXRCK0osaUJBQVcsRUFBRUEsV0FGUztBQUl0QjZCLFFBQUUsRUFBRUEsRUFKa0I7QUFLdEIvUCxZQUFNLEVBQUVBLE1BTGM7QUFNdEJDLGdCQUFVLEVBQUVBLFVBTlU7QUFPdEJDLGdCQUFVLEVBQUVBLFVBUFU7QUFTdEIrUCxvQkFBYyxFQUFFLElBQUl6SixJQUFKLEVBVE07QUFTSztBQUMzQndKLGFBQU8sRUFBRUE7QUFWYSxLQUFuQixDQUFQO0FBWUg7O0FBdEM4QyxDQUFwQixDQUF4QjtBQXlDQSxNQUFNeEIsZUFBZSxHQUFHLElBQUk5SixlQUFKLENBQW9CO0FBQy9DQyxNQUFJLEVBQUUsa0JBRHlDO0FBRS9DQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2Qk4sWUFBUSxFQUFFO0FBQUNVLFVBQUksRUFBRUM7QUFBUCxLQURhO0FBRXZCb0osZUFBVyxFQUFFO0FBQUNySixVQUFJLEVBQUVDO0FBQVAsS0FGVTtBQUl2QmlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQLEtBSm1CO0FBS3ZCOUUsVUFBTSxFQUFFO0FBQUM2RSxVQUFJLEVBQUVDO0FBQVAsS0FMZTtBQU12QjdFLGNBQVUsRUFBRTtBQUFDNEUsVUFBSSxFQUFFQztBQUFQLEtBTlc7QUFPdkI1RSxjQUFVLEVBQUU7QUFBQzJFLFVBQUksRUFBRUM7QUFBUDtBQVBXLEdBQWpCLEVBUVBLLFNBUk8sRUFGcUM7O0FBVy9DQyxLQUFHLENBQUM7QUFDQWpCLFlBREE7QUFFQStKLGVBRkE7QUFJQTZCLE1BSkE7QUFLQS9QLFVBTEE7QUFNQUMsY0FOQTtBQU9BQztBQVBBLEdBQUQsRUFRRDtBQUNFLFdBQU92QixXQUFXLENBQUM0RyxNQUFaLENBQW1CO0FBQ2xCcEIsY0FBUSxFQUFFQSxRQURRO0FBRWxCK0osaUJBQVcsRUFBRUE7QUFGSyxLQUFuQixFQUdEO0FBQ0UxSSxVQUFJLEVBQUM7QUFDRHVLLFVBQUUsRUFBRUEsRUFESDtBQUVEL1AsY0FBTSxFQUFFQSxNQUZQO0FBR0RDLGtCQUFVLEVBQUVBLFVBSFg7QUFJREMsa0JBQVUsRUFBRUE7QUFKWDtBQURQLEtBSEMsQ0FBUDtBQVdIOztBQS9COEMsQ0FBcEIsQ0FBeEI7QUFvQ0EsTUFBTXVPLGNBQWMsR0FBRyxJQUFJL0osZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJOLFlBQVEsRUFBRTtBQUFDVSxVQUFJLEVBQUVDO0FBQVAsS0FEYTtBQUV2Qm9KLGVBQVcsRUFBRTtBQUFDckosVUFBSSxFQUFFQztBQUFQLEtBRlU7QUFJdkJpTCxNQUFFLEVBQUU7QUFBQ2xMLFVBQUksRUFBRUM7QUFBUCxLQUptQjtBQUt2QjlFLFVBQU0sRUFBRTtBQUFDNkUsVUFBSSxFQUFFQztBQUFQLEtBTGU7QUFNdkI3RSxjQUFVLEVBQUU7QUFBQzRFLFVBQUksRUFBRUM7QUFBUCxLQU5XO0FBT3ZCNUUsY0FBVSxFQUFFO0FBQUMyRSxVQUFJLEVBQUVDO0FBQVAsS0FQVztBQVN2Qm9MLFFBQUksRUFBRTtBQUFDckwsVUFBSSxFQUFFQztBQUFQLEtBVGlCO0FBVXZCWixhQUFTLEVBQUU7QUFBQ1csVUFBSSxFQUFFNkI7QUFBUCxLQVZZO0FBWXZCeUosUUFBSSxFQUFFO0FBQUN0TCxVQUFJLEVBQUVJO0FBQVAsS0FaaUI7QUFhdkJtTCxhQUFTLEVBQUU7QUFBQ3ZMLFVBQUksRUFBRUM7QUFBUCxLQWJZO0FBZXZCdUwsYUFBUyxFQUFFO0FBQUN4TCxVQUFJLEVBQUVDO0FBQVAsS0FmWTtBQWdCdkJ3TCxhQUFTLEVBQUU7QUFBQ3pMLFVBQUksRUFBRUM7QUFBUCxLQWhCWTtBQWtCdkJ5TCxZQUFRLEVBQUU7QUFBQzFMLFVBQUksRUFBRUM7QUFBUCxLQWxCYTtBQW1CdkIwTCxhQUFTLEVBQUU7QUFBQzNMLFVBQUksRUFBRUM7QUFBUCxLQW5CWTtBQW9CdkIyTCxrQkFBYyxFQUFFO0FBQUM1TCxVQUFJLEVBQUVDO0FBQVAsS0FwQk87QUFxQnZCNEwsaUJBQWEsRUFBRTtBQUFDN0wsVUFBSSxFQUFFQztBQUFQLEtBckJRO0FBc0J2QjRHLGVBQVcsRUFBRTtBQUFDN0csVUFBSSxFQUFFQztBQUFQLEtBdEJVO0FBdUJ2QjZHLFVBQU0sRUFBRTtBQUFDOUcsVUFBSSxFQUFFQztBQUFQLEtBdkJlO0FBd0J2QnFILGlCQUFhLEVBQUU7QUFBQ3RILFVBQUksRUFBRUM7QUFBUCxLQXhCUTtBQTBCdkI2TCxXQUFPLEVBQUU7QUFBQzlMLFVBQUksRUFBRUk7QUFBUCxLQTFCYztBQTJCdkIyTCxhQUFTLEVBQUU7QUFBQy9MLFVBQUksRUFBRUk7QUFBUCxLQTNCWTtBQTRCdkI0TCxhQUFTLEVBQUU7QUFBQ2hNLFVBQUksRUFBRUk7QUFBUCxLQTVCWTtBQTZCdkI2TCxlQUFXLEVBQUU7QUFBQ2pNLFVBQUksRUFBRUk7QUFBUCxLQTdCVTtBQThCdkI4TCxVQUFNLEVBQUU7QUFBQ2xNLFVBQUksRUFBRUk7QUFBUCxLQTlCZTtBQStCdkIrTCxRQUFJLEVBQUU7QUFBQ25NLFVBQUksRUFBRUk7QUFBUCxLQS9CaUI7QUFnQ3ZCZ00sV0FBTyxFQUFFO0FBQUNwTSxVQUFJLEVBQUVJO0FBQVAsS0FoQ2M7QUFpQ3ZCaU0sWUFBUSxFQUFFO0FBQUNyTSxVQUFJLEVBQUVJO0FBQVAsS0FqQ2E7QUFrQ3ZCa00sT0FBRyxFQUFFO0FBQUN0TSxVQUFJLEVBQUVDO0FBQVAsS0FsQ2tCO0FBbUN2QnNNLG1CQUFlLEVBQUU7QUFBQ3ZNLFVBQUksRUFBRUM7QUFBUCxLQW5DTTtBQW9DdkJ1TSxxQkFBaUIsRUFBRTtBQUFDeE0sVUFBSSxFQUFFQztBQUFQLEtBcENJO0FBcUN2QndNLG1CQUFlLEVBQUU7QUFBQ3pNLFVBQUksRUFBRUM7QUFBUCxLQXJDTTtBQXNDdkJ5TSxpQkFBYSxFQUFFO0FBQUMxTSxVQUFJLEVBQUVDO0FBQVAsS0F0Q1E7QUF1Q3ZCOEksZUFBVyxFQUFFO0FBQUMvSSxVQUFJLEVBQUVDO0FBQVAsS0F2Q1U7O0FBd0N2Qjs7QUFHQTBNLGVBQVcsRUFBRTtBQUFDM00sVUFBSSxFQUFFLENBQUN3QixNQUFEO0FBQVAsS0EzQ1U7QUE0Q3ZCLGlDQUE4QjtBQUFDeEIsVUFBSSxFQUFFQztBQUFQLEtBNUNQO0FBNkN2Qiw4QkFBMkI7QUFBQ0QsVUFBSSxFQUFFQztBQUFQLEtBN0NKO0FBOEN2Qix5QkFBc0I7QUFBQ0QsVUFBSSxFQUFFQztBQUFQLEtBOUNDO0FBZ0R2QjJNLG1CQUFlLEVBQUU7QUFBQzVNLFVBQUksRUFBRUM7QUFBUCxLQWhETTtBQWlEdkI0TSxtQkFBZSxFQUFFO0FBQUM3TSxVQUFJLEVBQUVDO0FBQVA7QUFqRE0sR0FBakIsRUFrRFBLLFNBbERPLEVBRm9DOztBQXFEOUNDLEtBQUcsQ0FBQztBQUNBakIsWUFEQTtBQUVBK0osZUFGQTtBQUlBNkIsTUFKQTtBQUtBL1AsVUFMQTtBQU1BQyxjQU5BO0FBT0FDLGNBUEE7QUFTQWdRLFFBVEE7QUFVQWhNLGFBVkE7QUFZQWlNLFFBWkE7QUFhQUMsYUFiQTtBQWVBQyxhQWZBO0FBZ0JBQyxhQWhCQTtBQWtCQUMsWUFsQkE7QUFtQkFDLGFBbkJBO0FBb0JBQyxrQkFwQkE7QUFxQkFDLGlCQXJCQTtBQXNCQWhGLGVBdEJBO0FBdUJBQyxVQXZCQTtBQXdCQVEsaUJBeEJBO0FBMEJBd0UsV0ExQkE7QUEyQkFDLGFBM0JBO0FBNEJBQyxhQTVCQTtBQTZCQUMsZUE3QkE7QUE4QkFDLFVBOUJBO0FBK0JBQyxRQS9CQTtBQWdDQUMsV0FoQ0E7QUFpQ0FDLFlBakNBO0FBa0NBQyxPQWxDQTtBQW1DQUMsbUJBbkNBO0FBb0NBQyxxQkFwQ0E7QUFxQ0FDLG1CQXJDQTtBQXNDQUMsaUJBdENBO0FBdUNBM0QsZUF2Q0E7QUF5Q0E0RCxlQXpDQTtBQTJDQUMsbUJBM0NBO0FBNENBQztBQTVDQSxHQUFELEVBNkNEO0FBQ0UsV0FBTzlTLFNBQVMsQ0FBQ3lHLE1BQVYsQ0FBaUI7QUFDcEJzTSxpQkFBVyxFQUFFLElBRE87QUFFcEJ4TixjQUFRLEVBQUVBLFFBRlU7QUFHcEIrSixpQkFBVyxFQUFFQSxXQUhPO0FBS3BCNkIsUUFBRSxFQUFFQSxFQUxnQjtBQU1wQi9QLFlBQU0sRUFBRUEsTUFOWTtBQU9wQkMsZ0JBQVUsRUFBRUEsVUFQUTtBQVFwQkMsZ0JBQVUsRUFBRUEsVUFSUTtBQVVwQmdRLFVBQUksRUFBRUEsSUFWYztBQVdwQmhNLGVBQVMsRUFBRUEsU0FYUztBQWFwQmlNLFVBQUksRUFBRUEsSUFiYztBQWNwQkMsZUFBUyxFQUFFQSxTQWRTO0FBZ0JwQkMsZUFBUyxFQUFFQSxTQWhCUztBQWlCcEJDLGVBQVMsRUFBRUEsU0FqQlM7QUFtQnBCQyxjQUFRLEVBQUVBLFFBbkJVO0FBb0JwQkMsZUFBUyxFQUFFQSxTQXBCUztBQXFCcEJDLG9CQUFjLEVBQUVBLGNBckJJO0FBc0JwQjFLLFNBQUcsRUFBRTBLLGNBQWMsQ0FBQ25FLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0F0QmU7QUF1QnBCdEcsU0FBRyxFQUFFeUssY0FBYyxDQUFDbkUsTUFBZixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQXZCZTtBQXdCcEJyRyxTQUFHLEVBQUV3SyxjQUFjLENBQUNuRSxNQUFmLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBeEJlO0FBMEJwQm9FLG1CQUFhLEVBQUVBLGFBMUJLO0FBMkJwQmhGLGlCQUFXLEVBQUVBLFdBM0JPO0FBNEJwQkMsWUFBTSxFQUFFQSxNQTVCWTtBQTZCcEJRLG1CQUFhLEVBQUVBLGFBN0JLO0FBK0JwQndFLGFBQU8sRUFBRUEsT0EvQlc7QUFnQ3BCQyxlQUFTLEVBQUVBLFNBaENTO0FBaUNwQkMsZUFBUyxFQUFFQSxTQWpDUztBQWtDcEJDLGlCQUFXLEVBQUVBLFdBbENPO0FBbUNwQkMsWUFBTSxFQUFFQSxNQW5DWTtBQW9DcEJDLFVBQUksRUFBRUEsSUFwQ2M7QUFxQ3BCQyxhQUFPLEVBQUVBLE9BckNXO0FBc0NwQkMsY0FBUSxFQUFFQSxRQXRDVTtBQXVDcEJDLFNBQUcsRUFBRUEsR0F2Q2U7QUF3Q3BCQyxxQkFBZSxFQUFFQSxlQXhDRztBQXlDcEJDLHVCQUFpQixFQUFFQSxpQkF6Q0M7QUEwQ3BCQyxxQkFBZSxFQUFFQSxlQTFDRztBQTJDcEJDLG1CQUFhLEVBQUVBLGFBM0NLO0FBNENwQjNELGlCQUFXLEVBQUVBLFdBNUNPO0FBOENwQjRELGlCQUFXLEVBQUVBLFdBOUNPO0FBZ0RwQkMscUJBQWUsRUFBRUEsZUFoREc7QUFpRHBCQyxxQkFBZSxFQUFFQSxlQWpERztBQW1EcEJ4USxlQUFTLEVBQUUsSUFBSXNGLElBQUo7QUFuRFMsS0FBakIsQ0FBUDtBQXFESDs7QUF4SjZDLENBQXBCLENBQXZCO0FBNEpBLE1BQU1rSSxZQUFZLEdBQUcsSUFBSWhLLGVBQUosQ0FBb0I7QUFDNUNDLE1BQUksRUFBRSxlQURzQztBQUU1Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkI4TCxZQUFRLEVBQUU7QUFBQzFMLFVBQUksRUFBRUM7QUFBUCxLQURhO0FBRXZCOE0sZUFBVyxFQUFFO0FBQUMvTSxVQUFJLEVBQUVDO0FBQVAsS0FGVTtBQUd2QitNLFlBQVEsRUFBRTtBQUFDaE4sVUFBSSxFQUFFQztBQUFQLEtBSGE7QUFJdkJnTixPQUFHLEVBQUU7QUFBQ2pOLFVBQUksRUFBRUM7QUFBUDtBQUprQixHQUFqQixFQUtQSyxTQUxPLEVBRmtDOztBQVE1Q0MsS0FBRyxDQUFDO0FBQ0FtTCxZQURBO0FBRUFxQixlQUZBO0FBR0FDLFlBSEE7QUFJQUM7QUFKQSxHQUFELEVBS0Q7QUFDRSxXQUFPbFQsU0FBUyxDQUFDMkcsTUFBVixDQUFpQjtBQUNwQmdMLGNBQVEsRUFBRUE7QUFEVSxLQUFqQixFQUVMO0FBQ0V3QixXQUFLLEVBQUU7QUFDSFAsbUJBQVcsRUFBRTtBQUNUSSxxQkFBVyxFQUFFQSxXQURKO0FBRVRDLGtCQUFRLEVBQUVBLFFBRkQ7QUFHVEMsYUFBRyxFQUFFQTtBQUhJO0FBRFY7QUFEVCxLQUZLLENBQVA7QUFXSDs7QUF6QjJDLENBQXBCLENBQXJCO0FBNkJBLE1BQU1uRCxpQkFBaUIsR0FBRyxJQUFJakssZUFBSixDQUFvQjtBQUNqREMsTUFBSSxFQUFFLG9CQUQyQztBQUVqREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ0RCxlQUFXLEVBQUU7QUFBQzBELFVBQUksRUFBRUM7QUFBUDtBQURVLEdBQWpCLEVBRVBLLFNBRk8sRUFGdUM7O0FBS2pEQyxLQUFHLENBQUM7QUFDQWpFO0FBREEsR0FBRCxFQUVEO0FBQ0UsV0FBT2xDLFdBQVcsQ0FBQ29HLE1BQVosQ0FBbUI7QUFDdEJsRSxpQkFBVyxFQUFFQTtBQURTLEtBQW5CLENBQVA7QUFHSDs7QUFYZ0QsQ0FBcEIsQ0FBMUI7QUFnQkEsTUFBTXlOLHdCQUF3QixHQUFHLElBQUlsSyxlQUFKLENBQW9CO0FBQ3hEQyxNQUFJLEVBQUUsMkJBRGtEO0FBRXhEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2Qk4sWUFBUSxFQUFFO0FBQUNVLFVBQUksRUFBRUM7QUFBUCxLQURhO0FBRXZCb0osZUFBVyxFQUFFO0FBQUNySixVQUFJLEVBQUVDO0FBQVAsS0FGVTtBQUl2QmlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQLEtBSm1CO0FBS3ZCOUUsVUFBTSxFQUFFO0FBQUM2RSxVQUFJLEVBQUVDO0FBQVAsS0FMZTtBQU12Qm9MLFFBQUksRUFBRTtBQUFDckwsVUFBSSxFQUFFQztBQUFQLEtBTmlCO0FBUXZCcUwsUUFBSSxFQUFFO0FBQUN0TCxVQUFJLEVBQUVDO0FBQVAsS0FSaUI7QUFVdkIwTCxhQUFTLEVBQUU7QUFBQzNMLFVBQUksRUFBRUM7QUFBUCxLQVZZO0FBV3ZCMkwsa0JBQWMsRUFBRTtBQUFDNUwsVUFBSSxFQUFFQztBQUFQLEtBWE87QUFZdkI0TCxpQkFBYSxFQUFFO0FBQUM3TCxVQUFJLEVBQUVDO0FBQVAsS0FaUTtBQWF2QjRHLGVBQVcsRUFBRTtBQUFDN0csVUFBSSxFQUFFQztBQUFQLEtBYlU7QUFldkJxSCxpQkFBYSxFQUFFO0FBQUN0SCxVQUFJLEVBQUVDO0FBQVAsS0FmUTtBQWdCdkI4SSxlQUFXLEVBQUU7QUFBQy9JLFVBQUksRUFBRSxDQUFDQyxNQUFEO0FBQVAsS0FoQlU7QUFpQnZCa04sUUFBSSxFQUFFO0FBQUNuTixVQUFJLEVBQUVDO0FBQVAsS0FqQmlCO0FBa0J2Qm1OLGtCQUFjLEVBQUU7QUFBQ3BOLFVBQUksRUFBRUM7QUFBUCxLQWxCTztBQW1CdkJvTixPQUFHLEVBQUU7QUFBQ3JOLFVBQUksRUFBRUM7QUFBUCxLQW5Ca0I7QUFvQnZCOE0sZUFBVyxFQUFFO0FBQUMvTSxVQUFJLEVBQUVDO0FBQVAsS0FwQlU7QUFxQnZCNkcsVUFBTSxFQUFFO0FBQUM5RyxVQUFJLEVBQUVDO0FBQVAsS0FyQmU7QUFzQnZCcU4sYUFBUyxFQUFFO0FBQUN0TixVQUFJLEVBQUVDO0FBQVA7QUF0QlksR0FBakIsRUF3QlBLLFNBeEJPLEVBRjhDOztBQTJCeERDLEtBQUcsQ0FBQztBQUNBakIsWUFEQTtBQUVBK0osZUFGQTtBQUlBNkIsTUFKQTtBQUtBL1AsVUFMQTtBQU1Ba1EsUUFOQTtBQVFBQyxRQVJBO0FBVUFLLGFBVkE7QUFXQUMsa0JBWEE7QUFZQUMsaUJBWkE7QUFhQWhGLGVBYkE7QUFlQVMsaUJBZkE7QUFnQkF5QixlQWhCQTtBQWlCQW9FLFFBakJBO0FBa0JBQyxrQkFsQkE7QUFtQkFDLE9BbkJBO0FBb0JBTixlQXBCQTtBQXFCQWpHLFVBckJBO0FBc0JBd0c7QUF0QkEsR0FBRCxFQXVCRDtBQUVFLFdBQU92VCxTQUFTLENBQUN5RyxNQUFWLENBQWlCO0FBQ3BCK00scUJBQWUsRUFBRSxJQURHO0FBR3BCak8sY0FBUSxFQUFFQSxRQUhVO0FBSXBCK0osaUJBQVcsRUFBRUEsV0FKTztBQU1wQjZCLFFBQUUsRUFBRUEsRUFOZ0I7QUFPcEIvUCxZQUFNLEVBQUVBLE1BUFk7QUFRcEJrUSxVQUFJLEVBQUVBLElBUmM7QUFVcEJDLFVBQUksRUFBRUEsSUFWYztBQVlwQkssZUFBUyxFQUFFQSxTQVpTO0FBYXBCQyxvQkFBYyxFQUFFQSxjQWJJO0FBY3BCQyxtQkFBYSxFQUFFQSxhQWRLO0FBZXBCaEYsaUJBQVcsRUFBRUEsV0FmTztBQWlCcEJTLG1CQUFhLEVBQUVBLGFBakJLO0FBa0JwQnlCLGlCQUFXLEVBQUVBLFdBbEJPO0FBbUJwQm9FLFVBQUksRUFBRUEsSUFuQmM7QUFvQnBCQyxvQkFBYyxFQUFFQSxjQXBCSTtBQXFCcEJDLFNBQUcsRUFBRUEsR0FyQmU7QUFzQnBCTixpQkFBVyxFQUFFQSxXQXRCTztBQXVCcEJqRyxZQUFNLEVBQUVBLE1BdkJZO0FBd0JwQndHLGVBQVMsRUFBRUEsU0F4QlM7QUF5QnBCcE0sU0FBRyxFQUFFMEssY0FBYyxDQUFDbkUsTUFBZixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQXpCZTtBQTBCcEJ0RyxTQUFHLEVBQUV5SyxjQUFjLENBQUNuRSxNQUFmLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBMUJlO0FBMkJwQnJHLFNBQUcsRUFBRXdLLGNBQWMsQ0FBQ25FLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0EzQmU7QUE0QnBCcEwsZUFBUyxFQUFFLElBQUlzRixJQUFKO0FBNUJTLEtBQWpCLENBQVA7QUE4Qkg7O0FBbEZ1RCxDQUFwQixDQUFqQztBQXFGQSxNQUFNcUkseUJBQXlCLEdBQUcsSUFBSW5LLGVBQUosQ0FBb0I7QUFDekRDLE1BQUksRUFBRSw0QkFEbUQ7QUFFekRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCd0osc0JBQWtCLEVBQUU7QUFBQ3BKLFVBQUksRUFBRUM7QUFBUCxLQURHO0FBRXZCWCxZQUFRLEVBQUU7QUFBQ1UsVUFBSSxFQUFFQztBQUFQLEtBRmE7QUFHdkJvSixlQUFXLEVBQUU7QUFBQ3JKLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBS3ZCaUwsTUFBRSxFQUFFO0FBQUNsTCxVQUFJLEVBQUVDO0FBQVAsS0FMbUI7QUFNdkI5RSxVQUFNLEVBQUU7QUFBQzZFLFVBQUksRUFBRUM7QUFBUCxLQU5lO0FBT3ZCN0UsY0FBVSxFQUFFO0FBQUM0RSxVQUFJLEVBQUVDO0FBQVAsS0FQVztBQVF2QjVFLGNBQVUsRUFBRTtBQUFDMkUsVUFBSSxFQUFFQztBQUFQLEtBUlc7QUFVdkJvTCxRQUFJLEVBQUU7QUFBQ3JMLFVBQUksRUFBRUM7QUFBUCxLQVZpQjtBQVl2QnFMLFFBQUksRUFBRTtBQUFDdEwsVUFBSSxFQUFFSTtBQUFQLEtBWmlCO0FBYXZCbUwsYUFBUyxFQUFFO0FBQUN2TCxVQUFJLEVBQUVDO0FBQVAsS0FiWTtBQWN2QlosYUFBUyxFQUFFO0FBQUNXLFVBQUksRUFBRTZCO0FBQVAsS0FkWTtBQWdCdkIyTCxhQUFTLEVBQUU7QUFBQ3hOLFVBQUksRUFBRUM7QUFBUCxLQWhCWTtBQWlCdkJ3TixRQUFJLEVBQUU7QUFBQ3pOLFVBQUksRUFBRUM7QUFBUCxLQWpCaUI7QUFrQnZCeU4sUUFBSSxFQUFFO0FBQUMxTixVQUFJLEVBQUVDO0FBQVAsS0FsQmlCO0FBcUJ2QjBOLGFBQVMsRUFBRTtBQUFDM04sVUFBSSxFQUFFQztBQUFQLEtBckJZO0FBc0J2QjJOLFlBQVEsRUFBRTtBQUFDNU4sVUFBSSxFQUFFQztBQUFQLEtBdEJhO0FBd0J2QnBFLFlBQVEsRUFBRTtBQUFDbUUsVUFBSSxFQUFFQztBQUFQLEtBeEJhO0FBeUJ2QjZHLFVBQU0sRUFBRTtBQUFDOUcsVUFBSSxFQUFFQztBQUFQLEtBekJlO0FBMkJ2QjZMLFdBQU8sRUFBRTtBQUFDOUwsVUFBSSxFQUFFSTtBQUFQLEtBM0JjO0FBNEJ2QjJMLGFBQVMsRUFBRTtBQUFDL0wsVUFBSSxFQUFFSTtBQUFQLEtBNUJZO0FBNkJ2QjRMLGFBQVMsRUFBRTtBQUFDaE0sVUFBSSxFQUFFSTtBQUFQLEtBN0JZO0FBOEJ2QjZMLGVBQVcsRUFBRTtBQUFDak0sVUFBSSxFQUFFSTtBQUFQLEtBOUJVO0FBK0J2QjhMLFVBQU0sRUFBRTtBQUFDbE0sVUFBSSxFQUFFSTtBQUFQLEtBL0JlO0FBZ0N2QitMLFFBQUksRUFBRTtBQUFDbk0sVUFBSSxFQUFFSTtBQUFQLEtBaENpQjtBQWlDdkJnTSxXQUFPLEVBQUU7QUFBQ3BNLFVBQUksRUFBRUk7QUFBUCxLQWpDYztBQWtDdkJpTSxZQUFRLEVBQUU7QUFBQ3JNLFVBQUksRUFBRUk7QUFBUCxLQWxDYTtBQW1DdkJrTSxPQUFHLEVBQUU7QUFBQ3RNLFVBQUksRUFBRUM7QUFBUCxLQW5Da0I7QUFxQ3ZCc00sbUJBQWUsRUFBRTtBQUFDdk0sVUFBSSxFQUFFQztBQUFQLEtBckNNO0FBc0N2QndNLG1CQUFlLEVBQUU7QUFBQ3pNLFVBQUksRUFBRUM7QUFBUCxLQXRDTTtBQXdDdkJ5TSxpQkFBYSxFQUFFO0FBQUMxTSxVQUFJLEVBQUVDO0FBQVAsS0F4Q1E7QUF5Q3ZCNE4sZ0JBQVksRUFBRTtBQUFDN04sVUFBSSxFQUFFQztBQUFQLEtBekNTO0FBMEN2QjZOLFdBQU8sRUFBRTtBQUFDOU4sVUFBSSxFQUFFQztBQUFQLEtBMUNjO0FBMkN2QjhOLFVBQU0sRUFBRTtBQUFDL04sVUFBSSxFQUFFQztBQUFQLEtBM0NlO0FBNEN2QitOLFVBQU0sRUFBRTtBQUFDaE8sVUFBSSxFQUFFQztBQUFQLEtBNUNlO0FBNkN2QmdPLFNBQUssRUFBRTtBQUFDak8sVUFBSSxFQUFFQztBQUFQLEtBN0NnQjtBQThDdkJpTyxXQUFPLEVBQUU7QUFBQ2xPLFVBQUksRUFBRUM7QUFBUCxLQTlDYztBQStDdkJrTyxnQkFBWSxFQUFFO0FBQUNuTyxVQUFJLEVBQUVDO0FBQVAsS0EvQ1M7QUFnRHZCOEksZUFBVyxFQUFFO0FBQUMvSSxVQUFJLEVBQUVDO0FBQVAsS0FoRFU7O0FBa0R2Qjs7O0FBR0E7Ozs7O0FBTUFtTyxZQUFRLEVBQUU7QUFBQ3BPLFVBQUksRUFBRUM7QUFBUCxLQTNEYSxDQTREdkI7O0FBNUR1QixHQUFqQixFQThEUEssU0E5RE8sRUFGK0M7O0FBaUV6REMsS0FBRyxDQUFDO0FBQ0E2SSxzQkFEQTtBQUVBOUosWUFGQTtBQUdBK0osZUFIQTtBQUtBNkIsTUFMQTtBQU1BL1AsVUFOQTtBQU9BQyxjQVBBO0FBUUFDLGNBUkE7QUFVQWdRLFFBVkE7QUFZQUMsUUFaQTtBQWFBQyxhQWJBO0FBY0FsTSxhQWRBO0FBZ0JBbU8sYUFoQkE7QUFpQkFDLFFBakJBO0FBa0JBQyxRQWxCQTtBQXFCQUMsYUFyQkE7QUFzQkFDLFlBdEJBO0FBd0JBL1IsWUF4QkE7QUF5QkFpTCxVQXpCQTtBQTJCQWdGLFdBM0JBO0FBNEJBQyxhQTVCQTtBQTZCQUMsYUE3QkE7QUE4QkFDLGVBOUJBO0FBK0JBQyxVQS9CQTtBQWdDQUMsUUFoQ0E7QUFpQ0FDLFdBakNBO0FBa0NBQyxZQWxDQTtBQW1DQUMsT0FuQ0E7QUFxQ0FDLG1CQXJDQTtBQXNDQUUsbUJBdENBO0FBd0NBQyxpQkF4Q0E7QUF5Q0FtQixnQkF6Q0E7QUEwQ0FDLFdBMUNBO0FBMkNBQyxVQTNDQTtBQTRDQUMsVUE1Q0E7QUE2Q0FDLFNBN0NBO0FBOENBQyxXQTlDQTtBQStDQUMsZ0JBL0NBO0FBaURBcEYsZUFqREE7O0FBbURBOztBQUdBcUYsWUF0REEsQ0F1REE7O0FBdkRBLEdBQUQsRUF3REQ7QUFDRSxXQUFPclUsU0FBUyxDQUFDeUcsTUFBVixDQUFpQjtBQUNwQjZOLGlCQUFXLEVBQUUsSUFETztBQUVwQmpGLHdCQUFrQixFQUFFQSxrQkFGQTtBQUdwQjlKLGNBQVEsRUFBRUEsUUFIVTtBQUlwQitKLGlCQUFXLEVBQUVBLFdBSk87QUFNcEI2QixRQUFFLEVBQUVBLEVBTmdCO0FBT3BCL1AsWUFBTSxFQUFFQSxNQVBZO0FBUXBCQyxnQkFBVSxFQUFFQSxVQVJRO0FBU3BCQyxnQkFBVSxFQUFFQSxVQVRRO0FBV3BCZ1EsVUFBSSxFQUFFQSxJQVhjO0FBYXBCQyxVQUFJLEVBQUVBLElBYmM7QUFjcEJDLGVBQVMsRUFBRUEsU0FkUztBQWVwQmxNLGVBQVMsRUFBRUEsU0FmUztBQWlCcEJtTyxlQUFTLEVBQUVBLFNBakJTO0FBa0JwQkMsVUFBSSxFQUFFQSxJQWxCYztBQW1CcEJDLFVBQUksRUFBRUEsSUFuQmM7QUFzQnBCQyxlQUFTLEVBQUVBLFNBdEJTO0FBdUJwQkMsY0FBUSxFQUFFQSxRQXZCVTtBQXlCcEIvUixjQUFRLEVBQUVBLFFBekJVO0FBMEJwQmlMLFlBQU0sRUFBRUEsTUExQlk7QUE0QnBCZ0YsYUFBTyxFQUFFQSxPQTVCVztBQTZCcEJDLGVBQVMsRUFBRUEsU0E3QlM7QUE4QnBCQyxlQUFTLEVBQUVBLFNBOUJTO0FBK0JwQkMsaUJBQVcsRUFBRUEsV0EvQk87QUFnQ3BCQyxZQUFNLEVBQUVBLE1BaENZO0FBaUNwQkMsVUFBSSxFQUFFQSxJQWpDYztBQWtDcEJDLGFBQU8sRUFBRUEsT0FsQ1c7QUFtQ3BCQyxjQUFRLEVBQUVBLFFBbkNVO0FBb0NwQkMsU0FBRyxFQUFFQSxHQXBDZTtBQXNDcEJDLHFCQUFlLEVBQUVBLGVBdENHO0FBdUNwQkUscUJBQWUsRUFBRUEsZUF2Q0c7QUF5Q3BCQyxtQkFBYSxFQUFFQSxhQXpDSztBQTBDcEJtQixrQkFBWSxFQUFFQSxZQTFDTTtBQTJDcEJDLGFBQU8sRUFBRUEsT0EzQ1c7QUE0Q3BCQyxZQUFNLEVBQUVBLE1BNUNZO0FBNkNwQkMsWUFBTSxFQUFFQSxNQTdDWTtBQThDcEJDLFdBQUssRUFBRUEsS0E5Q2E7QUErQ3BCQyxhQUFPLEVBQUVBLE9BL0NXO0FBZ0RwQkMsa0JBQVksRUFBRUEsWUFoRE07QUFrRHBCcEYsaUJBQVcsRUFBRUEsV0FsRE87O0FBb0RwQjs7QUFHQXFGLGNBQVEsRUFBRUEsUUF2RFU7QUF3RHBCO0FBRUEvUixlQUFTLEVBQUUsSUFBSXNGLElBQUo7QUExRFMsS0FBakIsQ0FBUDtBQTRESDs7QUF0THdELENBQXBCLENBQWxDO0FBeUxBLE1BQU1zSSx1QkFBdUIsR0FBRyxJQUFJcEssZUFBSixDQUFvQjtBQUN2REMsTUFBSSxFQUFFLDBCQURpRDtBQUV2REMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ3SixzQkFBa0IsRUFBRTtBQUFDcEosVUFBSSxFQUFFQztBQUFQLEtBREc7QUFFdkJYLFlBQVEsRUFBRTtBQUFDVSxVQUFJLEVBQUVDO0FBQVAsS0FGYTtBQUd2Qm9KLGVBQVcsRUFBRTtBQUFDckosVUFBSSxFQUFFQztBQUFQLEtBSFU7QUFLdkJ2RCxTQUFLLEVBQUU7QUFBQ3NELFVBQUksRUFBRUM7QUFBUCxLQUxnQjtBQU12QnFPLFFBQUksRUFBRTtBQUFDdE8sVUFBSSxFQUFFQztBQUFQLEtBTmlCO0FBUXZCc0osV0FBTyxFQUFFO0FBQUN2SixVQUFJLEVBQUVDO0FBQVAsS0FSYztBQVN2QnNPLGFBQVMsRUFBRTtBQUFDdk8sVUFBSSxFQUFFQztBQUFQLEtBVFk7QUFVdkJ1TyxZQUFRLEVBQUU7QUFBQ3hPLFVBQUksRUFBRUM7QUFBUCxLQVZhO0FBV3ZCd08sYUFBUyxFQUFFO0FBQUN6TyxVQUFJLEVBQUVDO0FBQVAsS0FYWTtBQVl2QnlPLFFBQUksRUFBRTtBQUFDMU8sVUFBSSxFQUFFQztBQUFQLEtBWmlCO0FBYXZCNkcsVUFBTSxFQUFFO0FBQUM5RyxVQUFJLEVBQUVDO0FBQVA7QUFiZSxHQUFqQixFQWVQSyxTQWZPLEVBRjZDOztBQWtCdkRDLEtBQUcsQ0FBQztBQUNBNkksc0JBREE7QUFFQTlKLFlBRkE7QUFHQStKLGVBSEE7QUFLQTNNLFNBTEE7QUFNQTRSLFFBTkE7QUFRQS9FLFdBUkE7QUFTQWdGLGFBVEE7QUFVQUMsWUFWQTtBQVdBQyxhQVhBO0FBWUFDLFFBWkE7QUFhQTVIO0FBYkEsR0FBRCxFQWVEO0FBQ0UsV0FBTy9NLFNBQVMsQ0FBQ3lHLE1BQVYsQ0FBaUI7QUFDcEJpTyxlQUFTLEVBQUUsSUFEUztBQUVwQnJGLHdCQUFrQixFQUFFQSxrQkFGQTtBQUdwQjlKLGNBQVEsRUFBRUEsUUFIVTtBQUlwQitKLGlCQUFXLEVBQUVBLFdBSk87QUFNcEIzTSxXQUFLLEVBQUVBLEtBTmE7QUFPcEI0UixVQUFJLEVBQUVBLElBUGM7QUFTcEIvRSxhQUFPLEVBQUVBLE9BVFc7QUFVcEJnRixlQUFTLEVBQUVBLFNBVlM7QUFXcEJDLGNBQVEsRUFBRUEsUUFYVTtBQVlwQkcsY0FBUSxFQUFFRixTQVpVO0FBYXBCQyxVQUFJLEVBQUVBLElBYmM7QUFjcEI1SCxZQUFNLEVBQUVBLE1BZFk7QUFnQnBCekssZUFBUyxFQUFFLElBQUlzRixJQUFKO0FBaEJTLEtBQWpCLENBQVA7QUFrQkg7O0FBcERzRCxDQUFwQixDQUFoQztBQXVEQSxNQUFNdUksc0JBQXNCLEdBQUcsSUFBSXJLLGVBQUosQ0FBb0I7QUFDdERDLE1BQUksRUFBRSx5QkFEZ0Q7QUFFdERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCd0osc0JBQWtCLEVBQUU7QUFBQ3BKLFVBQUksRUFBRUM7QUFBUCxLQURHO0FBRXZCWCxZQUFRLEVBQUU7QUFBQ1UsVUFBSSxFQUFFQztBQUFQLEtBRmE7QUFHdkJvSixlQUFXLEVBQUU7QUFBQ3JKLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBS3ZCdkQsU0FBSyxFQUFFO0FBQUNzRCxVQUFJLEVBQUVDO0FBQVAsS0FMZ0I7QUFNdkJxTyxRQUFJLEVBQUU7QUFBQ3RPLFVBQUksRUFBRUM7QUFBUCxLQU5pQjtBQVF2QjJPLGdCQUFZLEVBQUU7QUFBQzVPLFVBQUksRUFBRSxDQUFDd0IsTUFBRDtBQUFQLEtBUlM7QUFTdkIsaUNBQTZCO0FBQUN4QixVQUFJLEVBQUVDO0FBQVAsS0FUTjtBQVV2QiwwQkFBc0I7QUFBQ0QsVUFBSSxFQUFFQztBQUFQLEtBVkM7QUFXdkIsOEJBQTBCO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQVhIO0FBYXZCNkcsVUFBTSxFQUFFO0FBQUM5RyxVQUFJLEVBQUVDO0FBQVA7QUFiZSxHQUFqQixFQWVQSyxTQWZPLEVBRjRDOztBQWtCdERDLEtBQUcsQ0FBQztBQUNBNkksc0JBREE7QUFFQTlKLFlBRkE7QUFHQStKLGVBSEE7QUFLQTNNLFNBTEE7QUFNQTRSLFFBTkE7QUFRQU0sZ0JBUkE7QUFTQTlIO0FBVEEsR0FBRCxFQVdEO0FBQ0UsV0FBTy9NLFNBQVMsQ0FBQ3lHLE1BQVYsQ0FBaUI7QUFDcEJxTyxnQkFBVSxFQUFFLElBRFE7QUFFcEJ6Rix3QkFBa0IsRUFBRUEsa0JBRkE7QUFHcEI5SixjQUFRLEVBQUVBLFFBSFU7QUFJcEIrSixpQkFBVyxFQUFFQSxXQUpPO0FBTXBCM00sV0FBSyxFQUFFQSxLQU5hO0FBT3BCNFIsVUFBSSxFQUFFQSxJQVBjO0FBU3BCTSxrQkFBWSxFQUFFQSxZQVRNO0FBVXBCOUgsWUFBTSxFQUFFQSxNQVZZO0FBWXBCekssZUFBUyxFQUFFLElBQUlzRixJQUFKO0FBWlMsS0FBakIsQ0FBUDtBQWNIOztBQTVDcUQsQ0FBcEIsQ0FBL0I7QUErQ0EsTUFBTXdJLDBCQUEwQixHQUFHLElBQUl0SyxlQUFKLENBQW9CO0FBQzFEQyxNQUFJLEVBQUUsNkJBRG9EO0FBRTFEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndKLHNCQUFrQixFQUFFO0FBQUNwSixVQUFJLEVBQUVDO0FBQVAsS0FERztBQUV2QlgsWUFBUSxFQUFFO0FBQUNVLFVBQUksRUFBRUM7QUFBUCxLQUZhO0FBR3ZCb0osZUFBVyxFQUFFO0FBQUNySixVQUFJLEVBQUVDO0FBQVAsS0FIVTtBQUt2QnZELFNBQUssRUFBRTtBQUFDc0QsVUFBSSxFQUFFQztBQUFQLEtBTGdCO0FBTXZCcU8sUUFBSSxFQUFFO0FBQUN0TyxVQUFJLEVBQUVDO0FBQVAsS0FOaUI7QUFRdkIyTyxnQkFBWSxFQUFFO0FBQUM1TyxVQUFJLEVBQUUsQ0FBQ3dCLE1BQUQ7QUFBUCxLQVJTO0FBU3ZCLGtDQUE4QjtBQUFDeEIsVUFBSSxFQUFFQztBQUFQLEtBVFA7QUFVdkIsa0NBQThCO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQVZQO0FBWXZCcU4sYUFBUyxFQUFFO0FBQUN0TixVQUFJLEVBQUVDO0FBQVA7QUFaWSxHQUFqQixFQWNQSyxTQWRPLEVBRmdEOztBQWlCMURDLEtBQUcsQ0FBQztBQUNBNkksc0JBREE7QUFFQTlKLFlBRkE7QUFHQStKLGVBSEE7QUFLQTNNLFNBTEE7QUFNQTRSLFFBTkE7QUFRQU0sZ0JBUkE7QUFTQXRCO0FBVEEsR0FBRCxFQVdEO0FBQ0UsV0FBT3ZULFNBQVMsQ0FBQ3lHLE1BQVYsQ0FBaUI7QUFDcEJzTyxvQkFBYyxFQUFFLElBREk7QUFFcEIxRix3QkFBa0IsRUFBRUEsa0JBRkE7QUFHcEI5SixjQUFRLEVBQUVBLFFBSFU7QUFJcEIrSixpQkFBVyxFQUFFQSxXQUpPO0FBTXBCM00sV0FBSyxFQUFFQSxLQU5hO0FBT3BCNFIsVUFBSSxFQUFFQSxJQVBjO0FBU3BCTSxrQkFBWSxFQUFFQSxZQVRNO0FBVXBCdEIsZUFBUyxFQUFFQSxTQVZTO0FBWXBCalIsZUFBUyxFQUFFLElBQUlzRixJQUFKO0FBWlMsS0FBakIsQ0FBUDtBQWNIOztBQTNDeUQsQ0FBcEIsQ0FBbkM7QUFtREEsTUFBTXlJLHFCQUFxQixHQUFHLElBQUl2SyxlQUFKLENBQW9CO0FBQ3JEQyxNQUFJLEVBQUUsd0JBRCtDO0FBRXJEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndKLHNCQUFrQixFQUFFO0FBQUNwSixVQUFJLEVBQUVDO0FBQVAsS0FERztBQUV2QlgsWUFBUSxFQUFFO0FBQUNVLFVBQUksRUFBRUM7QUFBUCxLQUZhO0FBSXZCbUgsWUFBUSxFQUFFO0FBQUNwSCxVQUFJLEVBQUVDO0FBQVAsS0FKYTtBQUt2QjBOLGFBQVMsRUFBRTtBQUFDM04sVUFBSSxFQUFFQztBQUFQLEtBTFk7QUFNdkIyTixZQUFRLEVBQUU7QUFBQzVOLFVBQUksRUFBRUM7QUFBUCxLQU5hO0FBT3ZCcUwsUUFBSSxFQUFFO0FBQUN0TCxVQUFJLEVBQUVDO0FBQVAsS0FQaUI7QUFRdkI4TyxzQkFBa0IsRUFBRTtBQUFDL08sVUFBSSxFQUFFQztBQUFQLEtBUkc7QUFTdkIrTyxzQkFBa0IsRUFBRTtBQUFDaFAsVUFBSSxFQUFFQztBQUFQLEtBVEc7QUFVdkJnUCxlQUFXLEVBQUU7QUFBQ2pQLFVBQUksRUFBRUM7QUFBUCxLQVZVO0FBV3ZCaVAsb0JBQWdCLEVBQUU7QUFBQ2xQLFVBQUksRUFBRUM7QUFBUCxLQVhLO0FBWXZCa1AsbUJBQWUsRUFBRTtBQUFDblAsVUFBSSxFQUFFQztBQUFQLEtBWk07QUFhdkJtUCw2QkFBeUIsRUFBRTtBQUFDcFAsVUFBSSxFQUFFQztBQUFQLEtBYko7QUFjdkJ3TyxhQUFTLEVBQUU7QUFBQ3pPLFVBQUksRUFBRUM7QUFBUCxLQWRZO0FBZXZCb1Asa0JBQWMsRUFBRTtBQUFDclAsVUFBSSxFQUFFQztBQUFQLEtBZk87QUFnQnZCcVAscUJBQWlCLEVBQUU7QUFBQ3RQLFVBQUksRUFBRUM7QUFBUCxLQWhCSTtBQWlCdkJzUCxhQUFTLEVBQUU7QUFBQ3ZQLFVBQUksRUFBRUM7QUFBUCxLQWpCWTtBQWtCdkJ1UCx1QkFBbUIsRUFBRTtBQUFDeFAsVUFBSSxFQUFFQztBQUFQLEtBbEJFO0FBbUJ2QndQLG1CQUFlLEVBQUU7QUFBQ3pQLFVBQUksRUFBRUM7QUFBUCxLQW5CTTtBQW9CdkJ5UCxzQkFBa0IsRUFBRTtBQUFDMVAsVUFBSSxFQUFFQztBQUFQLEtBcEJHO0FBcUJ2QjBQLGNBQVUsRUFBRTtBQUFDM1AsVUFBSSxFQUFFQztBQUFQLEtBckJXO0FBc0J2QjJQLGFBQVMsRUFBRTtBQUFDNVAsVUFBSSxFQUFFQztBQUFQO0FBdEJZLEdBQWpCLEVBd0JQSyxTQXhCTyxFQUYyQzs7QUEyQnJEQyxLQUFHLENBQUM7QUFDQTZJLHNCQURBO0FBRUE5SixZQUZBO0FBSUE4SCxZQUpBO0FBS0F1RyxhQUxBO0FBTUFDLFlBTkE7QUFPQXRDLFFBUEE7QUFRQXlELHNCQVJBO0FBU0FDLHNCQVRBO0FBVUFDLGVBVkE7QUFXQUMsb0JBWEE7QUFZQUMsbUJBWkE7QUFhQUMsNkJBYkE7QUFjQVgsYUFkQTtBQWVBWSxrQkFmQTtBQWdCQUMscUJBaEJBO0FBaUJBQyxhQWpCQTtBQWtCQUMsdUJBbEJBO0FBbUJBQyxtQkFuQkE7QUFvQkFDLHNCQXBCQTtBQXFCQUMsY0FyQkE7QUFzQkFDO0FBdEJBLEdBQUQsRUF3QkQ7QUFDRSxXQUFPN1YsU0FBUyxDQUFDeUcsTUFBVixDQUFpQjtBQUNwQnFQLGVBQVMsRUFBRSxJQURTO0FBRXBCekcsd0JBQWtCLEVBQUVBLGtCQUZBO0FBR3BCOUosY0FBUSxFQUFFQSxRQUhVO0FBS3BCOEgsY0FBUSxFQUFFQSxRQUxVO0FBTXBCdUcsZUFBUyxFQUFFQSxTQU5TO0FBT3BCQyxjQUFRLEVBQUVBLFFBUFU7QUFRcEJ0QyxVQUFJLEVBQUVBLElBUmM7QUFTcEJ5RCx3QkFBa0IsRUFBRUEsa0JBVEE7QUFVcEJDLHdCQUFrQixFQUFFQSxrQkFWQTtBQVdwQkMsaUJBQVcsRUFBRUEsV0FYTztBQVlwQkMsc0JBQWdCLEVBQUVBLGdCQVpFO0FBYXBCQyxxQkFBZSxFQUFFQSxlQWJHO0FBY3BCQywrQkFBeUIsRUFBRUEseUJBZFA7QUFlcEJYLGVBQVMsRUFBRUEsU0FmUztBQWdCcEJZLG9CQUFjLEVBQUVBLGNBaEJJO0FBaUJwQkMsdUJBQWlCLEVBQUVBLGlCQWpCQztBQWtCcEJDLGVBQVMsRUFBRUEsU0FsQlM7QUFtQnBCQyx5QkFBbUIsRUFBRUEsbUJBbkJEO0FBb0JwQkMscUJBQWUsRUFBRUEsZUFwQkc7QUFxQnBCQyx3QkFBa0IsRUFBRUEsa0JBckJBO0FBc0JwQkMsZ0JBQVUsRUFBRUEsVUF0QlE7QUF1QnBCQyxlQUFTLEVBQUVBLFNBdkJTO0FBeUJwQnZULGVBQVMsRUFBRSxJQUFJc0YsSUFBSjtBQXpCUyxLQUFqQixDQUFQO0FBMkJIOztBQS9Fb0QsQ0FBcEIsQ0FBOUI7QUFrRkEsTUFBTTBJLG1CQUFtQixHQUFHLElBQUl4SyxlQUFKLENBQW9CO0FBQ25EQyxNQUFJLEVBQUUsc0JBRDZDO0FBRW5EQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndKLHNCQUFrQixFQUFFO0FBQUNwSixVQUFJLEVBQUVDO0FBQVAsS0FERztBQUV2QjZQLGtCQUFjLEVBQUU7QUFBQzlQLFVBQUksRUFBRUM7QUFBUCxLQUZPO0FBR3ZCWCxZQUFRLEVBQUU7QUFBQ1UsVUFBSSxFQUFFQztBQUFQLEtBSGE7QUFLdkJvSixlQUFXLEVBQUU7QUFBQ3JKLFVBQUksRUFBRUM7QUFBUCxLQUxVO0FBTXZCO0FBQ0E5RSxVQUFNLEVBQUU7QUFBQzZFLFVBQUksRUFBRUM7QUFBUCxLQVBlO0FBUXZCN0UsY0FBVSxFQUFFO0FBQUM0RSxVQUFJLEVBQUVDO0FBQVAsS0FSVztBQVN2QjVFLGNBQVUsRUFBRTtBQUFDMkUsVUFBSSxFQUFFQztBQUFQLEtBVFc7QUFXdkJvTCxRQUFJLEVBQUU7QUFBQ3JMLFVBQUksRUFBRUM7QUFBUCxLQVhpQjtBQVl2QnFMLFFBQUksRUFBRTtBQUFDdEwsVUFBSSxFQUFFSTtBQUFQLEtBWmlCO0FBYXZCbUwsYUFBUyxFQUFFO0FBQUN2TCxVQUFJLEVBQUVDO0FBQVAsS0FiWTtBQWN2QlosYUFBUyxFQUFFO0FBQUNXLFVBQUksRUFBRTZCO0FBQVAsS0FkWTtBQWV2QmtPLGFBQVMsRUFBRTtBQUFDL1AsVUFBSSxFQUFFQztBQUFQLEtBZlk7QUFpQnZCK1AsWUFBUSxFQUFFO0FBQUNoUSxVQUFJLEVBQUVDO0FBQVAsS0FqQmE7QUFrQnZCdkUsZ0JBQVksRUFBRTtBQUFDc0UsVUFBSSxFQUFFQztBQUFQLEtBbEJTO0FBbUJ2QjhJLGVBQVcsRUFBRTtBQUFDL0ksVUFBSSxFQUFFQztBQUFQLEtBbkJVO0FBb0J2QmdRLGlCQUFhLEVBQUU7QUFBQ2pRLFVBQUksRUFBRUM7QUFBUCxLQXBCUTtBQXFCdkJpUSxpQkFBYSxFQUFFO0FBQUNsUSxVQUFJLEVBQUVDO0FBQVAsS0FyQlE7QUFzQnZCa1EsZ0JBQVksRUFBRTtBQUFDblEsVUFBSSxFQUFFQztBQUFQLEtBdEJTO0FBdUJ2Qm1RLGtCQUFjLEVBQUU7QUFBQ3BRLFVBQUksRUFBRUM7QUFBUCxLQXZCTztBQXlCdkJvUSxlQUFXLEVBQUU7QUFBQ3JRLFVBQUksRUFBRUM7QUFBUCxLQXpCVTtBQTBCdkJrTCxXQUFPLEVBQUU7QUFBQ25MLFVBQUksRUFBRUM7QUFBUDtBQTFCYyxHQUFqQixFQTRCUEssU0E1Qk8sRUFGeUM7O0FBK0JuREMsS0FBRyxDQUFDO0FBQ0E2SSxzQkFEQTtBQUVBOUosWUFGQTtBQUlBK0osZUFKQTtBQUtBO0FBQ0FsTyxVQU5BO0FBT0FDLGNBUEE7QUFRQUMsY0FSQTtBQVVBZ1EsUUFWQTtBQVdBQyxRQVhBO0FBWUFDLGFBWkE7QUFhQWxNLGFBYkE7QUFjQTBRLGFBZEE7QUFnQkFDLFlBaEJBO0FBaUJBdFUsZ0JBakJBO0FBa0JBcU4sZUFsQkE7QUFtQkFrSCxpQkFuQkE7QUFvQkFDLGlCQXBCQTtBQXFCQUMsZ0JBckJBO0FBc0JBQyxrQkF0QkE7QUF3QkFDLGVBeEJBO0FBeUJBbEY7QUF6QkEsR0FBRCxFQTBCRDtBQUNFLFdBQU9wUixTQUFTLENBQUN5RyxNQUFWLENBQWlCO0FBQ3BCOFAsYUFBTyxFQUFFLElBRFc7QUFFcEJsSCx3QkFBa0IsRUFBRUEsa0JBRkE7QUFHcEI5SixjQUFRLEVBQUVBLFFBSFU7QUFLcEIrSixpQkFBVyxFQUFFQSxXQUxPO0FBTXBCO0FBQ0FsTyxZQUFNLEVBQUVBLE1BUFk7QUFRcEJDLGdCQUFVLEVBQUVBLFVBUlE7QUFTcEJDLGdCQUFVLEVBQUVBLFVBVFE7QUFXcEJnUSxVQUFJLEVBQUVBLElBWGM7QUFZcEJDLFVBQUksRUFBRUEsSUFaYztBQWFwQkMsZUFBUyxFQUFFQSxTQWJTO0FBY3BCbE0sZUFBUyxFQUFFQSxTQWRTO0FBZXBCMFEsZUFBUyxFQUFFQSxTQWZTO0FBaUJwQkMsY0FBUSxFQUFFQSxRQWpCVTtBQWtCcEJ0VSxrQkFBWSxFQUFFQSxZQWxCTTtBQW1CcEJxTixpQkFBVyxFQUFFQSxXQW5CTztBQW9CcEJrSCxtQkFBYSxFQUFFQSxhQXBCSztBQXFCcEJDLG1CQUFhLEVBQUVBLGFBckJLO0FBc0JwQkssaUJBQVcsRUFBRUwsYUFBYSxDQUFDekksTUFBZCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQXRCTztBQXVCcEIrSSxpQkFBVyxFQUFFTixhQUFhLENBQUN6SSxNQUFkLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBdkJPO0FBd0JwQmdKLGlCQUFXLEVBQUVQLGFBQWEsQ0FBQ3pJLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0F4Qk87QUEwQnBCMEksa0JBQVksRUFBRUEsWUExQk07QUEyQnBCQyxvQkFBYyxFQUFFQSxjQTNCSTtBQTZCcEJDLGlCQUFXLEVBQUVBLFdBN0JPO0FBOEJwQmxGLGFBQU8sRUFBRUEsT0E5Qlc7QUFnQ3BCOU8sZUFBUyxFQUFFLElBQUlzRixJQUFKO0FBaENTLEtBQWpCLENBQVA7QUFrQ0g7O0FBNUZrRCxDQUFwQixDQUE1QjtBQWdHQSxNQUFNMkksaUJBQWlCLEdBQUcsSUFBSXpLLGVBQUosQ0FBb0I7QUFDakRDLE1BQUksRUFBRSxvQkFEMkM7QUFFakRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCd0gsWUFBUSxFQUFFO0FBQUNwSCxVQUFJLEVBQUVDO0FBQVAsS0FEYTtBQUV2QnlRLG1CQUFlLEVBQUU7QUFBQzFRLFVBQUksRUFBRUM7QUFBUDtBQUZNLEdBQWpCLEVBR1BLLFNBSE8sRUFGdUM7O0FBTWpEQyxLQUFHLENBQUM7QUFDQTZHLFlBREE7QUFFQXNKO0FBRkEsR0FBRCxFQUdEO0FBQ0UsV0FBTzFXLGFBQWEsQ0FBQ3dHLE1BQWQsQ0FBcUI7QUFDeEI0RyxjQUFRLEVBQUVBLFFBRGM7QUFFeEJzSixxQkFBZSxFQUFFQSxlQUZPO0FBR3hCQyxjQUFRLEVBQUUsS0FIYztBQUl4QkMsaUJBQVcsRUFBRSxLQUpXO0FBS3hCQyxxQkFBZSxFQUFFLEtBTE87QUFNeEJ4VSxlQUFTLEVBQUUsSUFBSXNGLElBQUo7QUFOYSxLQUFyQixDQUFQO0FBUUg7O0FBbEJnRCxDQUFwQixDQUExQjtBQXFCQSxNQUFNNEkseUJBQXlCLEdBQUcsSUFBSTFLLGVBQUosQ0FBb0I7QUFDekRDLE1BQUksRUFBRSw0QkFEbUQ7QUFFekRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCNkcsVUFBTSxFQUFFO0FBQUM5RyxVQUFJLEVBQUVDO0FBQVAsS0FGZTtBQUd2QjBOLGFBQVMsRUFBRTtBQUFDM04sVUFBSSxFQUFFQztBQUFQLEtBSFk7QUFJdkIyTixZQUFRLEVBQUU7QUFBQzVOLFVBQUksRUFBRUM7QUFBUCxLQUphO0FBS3ZCd04sUUFBSSxFQUFFO0FBQUN6TixVQUFJLEVBQUVDO0FBQVAsS0FMaUI7QUFNdkJ5TixRQUFJLEVBQUU7QUFBQzFOLFVBQUksRUFBRUM7QUFBUCxLQU5pQjtBQU92QjBRLFlBQVEsRUFBRTtBQUFDM1EsVUFBSSxFQUFFNkI7QUFBUCxLQVBhO0FBUXZCaVAsZ0JBQVksRUFBRTtBQUFDOVEsVUFBSSxFQUFFNkI7QUFBUCxLQVJTO0FBU3ZCa0gsZUFBVyxFQUFFO0FBQUMvSSxVQUFJLEVBQUVDO0FBQVA7QUFUVSxHQUFqQixFQVVQSyxTQVZPLEVBRitDOztBQWF6REMsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS3FHLFVBQUw7QUFBYTZHLGFBQWI7QUFBd0JDLFlBQXhCO0FBQWtDSCxRQUFsQztBQUF3Q0MsUUFBeEM7QUFBOENpRCxZQUE5QztBQUF3REcsZ0JBQXhEO0FBQXNFL0g7QUFBdEUsR0FBRCxFQUFvRjtBQUNuRixXQUFPL08sYUFBYSxDQUFDMEcsTUFBZCxDQUFxQjtBQUNwQjdDLFNBQUcsRUFBQzRDO0FBRGdCLEtBQXJCLEVBRUQ7QUFDRUUsVUFBSSxFQUFDO0FBQ0RtRyxjQUFNLEVBQUVBLE1BRFA7QUFFRDZHLGlCQUFTLEVBQUVBLFNBRlY7QUFHRHpNLFdBQUcsRUFBRXlNLFNBQVMsQ0FBQ2xHLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FISjtBQUlEdEcsV0FBRyxFQUFFd00sU0FBUyxDQUFDbEcsTUFBVixDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUpKO0FBS0RyRyxXQUFHLEVBQUV1TSxTQUFTLENBQUNsRyxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBTEo7QUFNRG1HLGdCQUFRLEVBQUVBLFFBTlQ7QUFPREgsWUFBSSxFQUFFQSxJQVBMO0FBUURDLFlBQUksRUFBRUEsSUFSTDtBQVNEaUQsZ0JBQVEsRUFBRUEsUUFUVDtBQVVERyxvQkFBWSxFQUFFQSxZQVZiO0FBV0QvSCxtQkFBVyxFQUFFQTtBQVhaO0FBRFAsS0FGQyxDQUFQO0FBaUJIOztBQS9Cd0QsQ0FBcEIsQ0FBbEM7QUFrQ0EsTUFBTXlCLDJCQUEyQixHQUFHLElBQUkzSyxlQUFKLENBQW9CO0FBQzNEQyxNQUFJLEVBQUUsOEJBRHFEO0FBRTNEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QjJRLGVBQVcsRUFBRTtBQUFDNVEsVUFBSSxFQUFFNkI7QUFBUCxLQUZVO0FBR3ZCa1AsZUFBVyxFQUFDO0FBQUMvUSxVQUFJLEVBQUVDO0FBQVAsS0FIVztBQUl2QitRLHFCQUFpQixFQUFFO0FBQUNoUixVQUFJLEVBQUVDO0FBQVAsS0FKSTtBQUt2QmdSLG9CQUFnQixFQUFFO0FBQUNqUixVQUFJLEVBQUVDO0FBQVA7QUFMSyxHQUFqQixFQU1QSyxTQU5PLEVBRmlEOztBQVMzREMsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS21RLGVBQUw7QUFBa0JJLHFCQUFsQjtBQUFxQ0Msb0JBQXJDO0FBQXVERjtBQUF2RCxHQUFELEVBQXFFO0FBQ3BFLFdBQU8vVyxhQUFhLENBQUMwRyxNQUFkLENBQXFCO0FBQ3BCN0MsU0FBRyxFQUFDNEM7QUFEZ0IsS0FBckIsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRGlRLG1CQUFXLEVBQUVBLFdBRFo7QUFFREkseUJBQWlCLEVBQUVBLGlCQUZsQjtBQUdERSxnQkFBUSxFQUFFRixpQkFBaUIsQ0FBQ3ZKLE1BQWxCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBSFQ7QUFJRDBKLGdCQUFRLEVBQUVILGlCQUFpQixDQUFDdkosTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FKVDtBQUtEMkosZ0JBQVEsRUFBRUosaUJBQWlCLENBQUN2SixNQUFsQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUxUO0FBTUR3Six3QkFBZ0IsRUFBRUEsZ0JBTmpCO0FBT0RGLG1CQUFXLEVBQUVBLFdBUFo7QUFRRE0sc0JBQWMsRUFBRSxJQUFJMVAsSUFBSjtBQVJmO0FBRFAsS0FGQyxDQUFQO0FBY0g7O0FBeEIwRCxDQUFwQixDQUFwQztBQTJCQSxNQUFNOEksK0JBQStCLEdBQUcsSUFBSTVLLGVBQUosQ0FBb0I7QUFDL0RDLE1BQUksRUFBRSxrQ0FEeUQ7QUFFL0RDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCNFEsbUJBQWUsRUFBRTtBQUFDN1EsVUFBSSxFQUFFNkI7QUFBUDtBQUZNLEdBQWpCLEVBR1B2QixTQUhPLEVBRnFEOztBQU0vREMsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS29RO0FBQUwsR0FBRCxFQUF1QjtBQUN0QixXQUFPN1csYUFBYSxDQUFDMEcsTUFBZCxDQUFxQjtBQUNwQjdDLFNBQUcsRUFBQzRDO0FBRGdCLEtBQXJCLEVBRUQ7QUFDRUUsVUFBSSxFQUFDO0FBQ0RrUSx1QkFBZSxFQUFFQSxlQURoQjtBQUVEL0gsY0FBTSxFQUFFO0FBRlA7QUFEUCxLQUZDLENBQVA7QUFRSDs7QUFmOEQsQ0FBcEIsQ0FBeEM7QUFrQkEsTUFBTTRCLCtCQUErQixHQUFHLElBQUk3SyxlQUFKLENBQW9CO0FBQy9EQyxNQUFJLEVBQUUsa0NBRHlEO0FBRS9EQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QnFSLGVBQVcsRUFBRTtBQUFDdFIsVUFBSSxFQUFFQztBQUFQO0FBRlUsR0FBakIsRUFHUEssU0FITyxFQUZxRDs7QUFNL0RDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUs2UTtBQUFMLEdBQUQsRUFBbUI7QUFDbEIsV0FBT3RYLGFBQWEsQ0FBQzBHLE1BQWQsQ0FBcUI7QUFDcEI3QyxTQUFHLEVBQUM0QztBQURnQixLQUFyQixFQUVEO0FBQ0VFLFVBQUksRUFBQztBQUNEbUksY0FBTSxFQUFFLElBRFA7QUFFRHdJLG1CQUFXLEVBQUVBLFdBRlo7QUFHRDVKLGlCQUFTLEVBQUU7QUFIVjtBQURQLEtBRkMsQ0FBUDtBQVNIOztBQWhCOEQsQ0FBcEIsQ0FBeEM7QUFtQkEsTUFBTWlELDBCQUEwQixHQUFHLElBQUk5SyxlQUFKLENBQW9CO0FBQzFEQyxNQUFJLEVBQUUsNkJBRG9EO0FBRTFEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QjBSLGVBQVcsRUFBRTtBQUFDdFIsVUFBSSxFQUFFQztBQUFQLEtBRFU7QUFFdkJoRSxrQkFBYyxFQUFFO0FBQUMrRCxVQUFJLEVBQUVDO0FBQVA7QUFGTyxHQUFqQixFQUdQSyxTQUhPLEVBRmdEOztBQU0xREMsS0FBRyxDQUFDO0FBQUMrUSxlQUFEO0FBQWNyVjtBQUFkLEdBQUQsRUFBK0I7QUFDOUIsV0FBT2pDLGFBQWEsQ0FBQzBHLE1BQWQsQ0FBcUI7QUFDcEI0USxpQkFBVyxFQUFFQSxXQURPO0FBRXBCNUosZUFBUyxFQUFFO0FBRlMsS0FBckIsRUFHRDtBQUNFL0csVUFBSSxFQUFDO0FBQ0QrRyxpQkFBUyxFQUFFLElBRFY7QUFFRHpMLHNCQUFjLEVBQUVBO0FBRmY7QUFEUCxLQUhDLEVBUUw7QUFDRTRNLFdBQUssRUFBQztBQURSLEtBUkssQ0FBUDtBQVdIOztBQWxCeUQsQ0FBcEIsQ0FBbkM7QUF1QkEsTUFBTStCLGVBQWUsR0FBRyxJQUFJL0ssZUFBSixDQUFvQjtBQUMvQ0MsTUFBSSxFQUFFLGtCQUR5QztBQUUvQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ3SixzQkFBa0IsRUFBRTtBQUFDcEosVUFBSSxFQUFFQztBQUFQLEtBREc7QUFFdkJYLFlBQVEsRUFBRTtBQUFDVSxVQUFJLEVBQUVDO0FBQVAsS0FGYTtBQUd2Qm9KLGVBQVcsRUFBRTtBQUFDckosVUFBSSxFQUFFQztBQUFQLEtBSFU7QUFJdkI7QUFDQTlFLFVBQU0sRUFBRTtBQUFDNkUsVUFBSSxFQUFFQztBQUFQLEtBTGU7QUFNdkI3RSxjQUFVLEVBQUU7QUFBQzRFLFVBQUksRUFBRUM7QUFBUCxLQU5XO0FBT3ZCNUUsY0FBVSxFQUFFO0FBQUMyRSxVQUFJLEVBQUVDO0FBQVAsS0FQVztBQVN2Qm9MLFFBQUksRUFBRTtBQUFDckwsVUFBSSxFQUFFQztBQUFQLEtBVGlCO0FBVXZCcUwsUUFBSSxFQUFFO0FBQUN0TCxVQUFJLEVBQUVJO0FBQVAsS0FWaUI7QUFXdkJtTCxhQUFTLEVBQUU7QUFBQ3ZMLFVBQUksRUFBRUM7QUFBUCxLQVhZO0FBWXZCWixhQUFTLEVBQUU7QUFBQ1csVUFBSSxFQUFFNkI7QUFBUCxLQVpZO0FBYXZCa08sYUFBUyxFQUFFO0FBQUMvUCxVQUFJLEVBQUVDO0FBQVAsS0FiWTtBQWV2QitQLFlBQVEsRUFBRTtBQUFDaFEsVUFBSSxFQUFFQztBQUFQLEtBZmE7QUFnQnZCdkUsZ0JBQVksRUFBRTtBQUFDc0UsVUFBSSxFQUFFQztBQUFQLEtBaEJTO0FBaUJ2QjhJLGVBQVcsRUFBRTtBQUFDL0ksVUFBSSxFQUFFQztBQUFQLEtBakJVO0FBa0J2QmdRLGlCQUFhLEVBQUU7QUFBQ2pRLFVBQUksRUFBRUM7QUFBUCxLQWxCUTtBQW1CdkJpUSxpQkFBYSxFQUFFO0FBQUNsUSxVQUFJLEVBQUVDO0FBQVAsS0FuQlE7QUFvQnZCa1EsZ0JBQVksRUFBRTtBQUFDblEsVUFBSSxFQUFFQztBQUFQLEtBcEJTO0FBcUJ2Qm1RLGtCQUFjLEVBQUU7QUFBQ3BRLFVBQUksRUFBRUM7QUFBUCxLQXJCTztBQXNCdkJzUixTQUFLLEVBQUU7QUFBQ3ZSLFVBQUksRUFBRUM7QUFBUCxLQXRCZ0I7QUF1QnZCa0wsV0FBTyxFQUFFO0FBQUNuTCxVQUFJLEVBQUVDO0FBQVA7QUF2QmMsR0FBakIsRUF3QlBLLFNBeEJPLEVBRnFDOztBQTJCL0NDLEtBQUcsQ0FBQztBQUNBNkksc0JBREE7QUFFQTlKLFlBRkE7QUFHQStKLGVBSEE7QUFJQWxPLFVBSkE7QUFLQUMsY0FMQTtBQU1BQyxjQU5BO0FBT0FnUSxRQVBBO0FBUUFDLFFBUkE7QUFTQUMsYUFUQTtBQVVBbE0sYUFWQTtBQVdBMFEsYUFYQTtBQWFBQyxZQWJBO0FBY0F0VSxnQkFkQTtBQWVBcU4sZUFmQTtBQWdCQWtILGlCQWhCQTtBQWlCQUMsaUJBakJBO0FBa0JBQyxnQkFsQkE7QUFtQkFDLGtCQW5CQTtBQW9CQW1CLFNBcEJBO0FBcUJBcEc7QUFyQkEsR0FBRCxFQXNCRDtBQUNFLFdBQU9sUixTQUFTLENBQUN1RyxNQUFWLENBQWlCO0FBQ3BCNEksd0JBQWtCLEVBQUVBLGtCQURBO0FBRXBCOUosY0FBUSxFQUFFQSxRQUZVO0FBR3BCK0osaUJBQVcsRUFBRUEsV0FITztBQUlwQmxPLFlBQU0sRUFBRUEsTUFKWTtBQUtwQkMsZ0JBQVUsRUFBRUEsVUFMUTtBQU1wQkMsZ0JBQVUsRUFBRUEsVUFOUTtBQU9wQmdRLFVBQUksRUFBRUEsSUFQYztBQVFwQkMsVUFBSSxFQUFFQSxJQVJjO0FBU3BCQyxlQUFTLEVBQUVBLFNBVFM7QUFVcEJsTSxlQUFTLEVBQUVBLFNBVlM7QUFXcEIwUSxlQUFTLEVBQUVBLFNBWFM7QUFhcEJDLGNBQVEsRUFBRUEsUUFiVTtBQWNwQnRVLGtCQUFZLEVBQUVBLFlBZE07QUFlcEJxTixpQkFBVyxFQUFFQSxXQWZPO0FBZ0JwQmtILG1CQUFhLEVBQUVBLGFBaEJLO0FBaUJwQkMsbUJBQWEsRUFBRUEsYUFqQks7QUFrQnBCQyxrQkFBWSxFQUFFQSxZQWxCTTtBQW1CcEJDLG9CQUFjLEVBQUVBLGNBbkJJO0FBb0JwQm1CLFdBQUssRUFBRUEsS0FwQmE7QUFxQnBCQyxnQkFBVSxFQUFFLEtBckJRO0FBc0JwQnJHLGFBQU8sRUFBRUEsT0F0Qlc7QUF1QnBCOU8sZUFBUyxFQUFFLElBQUlzRixJQUFKO0FBdkJTLEtBQWpCLENBQVA7QUF5Qkg7O0FBM0U4QyxDQUFwQixDQUF4QjtBQThFQSxNQUFNa0osbUJBQW1CLEdBQUcsSUFBSWhMLGVBQUosQ0FBb0I7QUFDbkRDLE1BQUksRUFBRSxzQkFENkM7QUFFbkRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBR3ZCK1AsWUFBUSxFQUFFO0FBQUNoUSxVQUFJLEVBQUVDO0FBQVAsS0FIYTtBQUl2QnZFLGdCQUFZLEVBQUU7QUFBQ3NFLFVBQUksRUFBRUM7QUFBUCxLQUpTO0FBS3ZCOEksZUFBVyxFQUFFO0FBQUMvSSxVQUFJLEVBQUVDO0FBQVAsS0FMVTtBQU12QmdRLGlCQUFhLEVBQUU7QUFBQ2pRLFVBQUksRUFBRUM7QUFBUCxLQU5RO0FBT3ZCaVEsaUJBQWEsRUFBRTtBQUFDbFEsVUFBSSxFQUFFQztBQUFQLEtBUFE7QUFRdkJrUSxnQkFBWSxFQUFFO0FBQUNuUSxVQUFJLEVBQUVDO0FBQVAsS0FSUztBQVN2Qm1RLGtCQUFjLEVBQUU7QUFBQ3BRLFVBQUksRUFBRUM7QUFBUCxLQVRPO0FBVXZCc1IsU0FBSyxFQUFFO0FBQUN2UixVQUFJLEVBQUVDO0FBQVAsS0FWZ0I7QUFXdkJrTCxXQUFPLEVBQUU7QUFBQ25MLFVBQUksRUFBRUM7QUFBUDtBQVhjLEdBQWpCLEVBWVBLLFNBWk8sRUFGeUM7O0FBZW5EQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBdVAsWUFGQTtBQUdBdFUsZ0JBSEE7QUFJQXFOLGVBSkE7QUFLQWtILGlCQUxBO0FBTUFDLGlCQU5BO0FBT0FDLGdCQVBBO0FBUUFDLGtCQVJBO0FBU0FtQixTQVRBO0FBVUFwRztBQVZBLEdBQUQsRUFXRDtBQUNFLFdBQU9sUixTQUFTLENBQUN5RyxNQUFWLENBQWlCO0FBQ2hCN0MsU0FBRyxFQUFDNEM7QUFEWSxLQUFqQixFQUVEO0FBQ0VFLFVBQUksRUFBQztBQUNEcVAsZ0JBQVEsRUFBRUEsUUFEVDtBQUVEdFUsb0JBQVksRUFBRUEsWUFGYjtBQUdEcU4sbUJBQVcsRUFBRUEsV0FIWjtBQUlEa0gscUJBQWEsRUFBRUEsYUFKZDtBQUtEQyxxQkFBYSxFQUFFQSxhQUxkO0FBTURDLG9CQUFZLEVBQUVBLFlBTmI7QUFPREMsc0JBQWMsRUFBRUEsY0FQZjtBQVFEbUIsYUFBSyxFQUFFQSxLQVJOO0FBU0RDLGtCQUFVLEVBQUUsS0FUWDtBQVVEckcsZUFBTyxFQUFFQSxPQVZSO0FBV0Q5TyxpQkFBUyxFQUFFLElBQUlzRixJQUFKO0FBWFY7QUFEUCxLQUZDLENBQVA7QUFpQkg7O0FBNUNrRCxDQUFwQixDQUE1QjtBQStDQSxNQUFNbUosZUFBZSxHQUFHLElBQUlqTCxlQUFKLENBQW9CO0FBQy9DQyxNQUFJLEVBQUUsa0JBRHlDO0FBRS9DQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QndSLFdBQU8sRUFBRTtBQUFDelIsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FGYztBQUd2QnlLLGNBQVUsRUFBRTtBQUFDeFIsVUFBSSxFQUFFNkI7QUFBUDtBQUhXLEdBQWpCLEVBSVB2QixTQUpPLEVBRnFDOztBQU8vQ0MsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS2dSLFdBQUw7QUFBY0Q7QUFBZCxHQUFELEVBQTJCO0FBQzFCLFdBQU92WCxTQUFTLENBQUN5RyxNQUFWLENBQWlCO0FBQ2hCN0MsU0FBRyxFQUFDNEM7QUFEWSxLQUFqQixFQUVEO0FBQ0VFLFVBQUksRUFBQztBQUNEOFEsZUFBTyxFQUFFQSxPQURSO0FBRURELGtCQUFVLEVBQUVBO0FBRlg7QUFEUCxLQUZDLENBQVA7QUFRSDs7QUFoQjhDLENBQXBCLENBQXhCO0FBbUJBLE1BQU16RyxlQUFlLEdBQUcsSUFBSWxMLGVBQUosQ0FBb0I7QUFDL0NDLE1BQUksRUFBRSxrQkFEeUM7QUFFL0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGcUM7O0FBSy9DQyxLQUFHLENBQUM7QUFBQ0U7QUFBRCxHQUFELEVBQU07QUFDTCxXQUFPeEcsU0FBUyxDQUFDMkcsTUFBVixDQUFpQjtBQUFDL0MsU0FBRyxFQUFFNEM7QUFBTixLQUFqQixDQUFQO0FBQ0g7O0FBUDhDLENBQXBCLENBQXhCO0FBVUEsTUFBTXVLLG1CQUFtQixHQUFHLElBQUluTCxlQUFKLENBQW9CO0FBQ25EQyxNQUFJLEVBQUUsc0JBRDZDO0FBRW5EQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndKLHNCQUFrQixFQUFFO0FBQUNwSixVQUFJLEVBQUVDO0FBQVAsS0FERztBQUV2QlgsWUFBUSxFQUFFO0FBQUNVLFVBQUksRUFBRUM7QUFBUCxLQUZhO0FBR3ZCb0osZUFBVyxFQUFFO0FBQUNySixVQUFJLEVBQUVDO0FBQVAsS0FIVTtBQU12QnZELFNBQUssRUFBRTtBQUFDc0QsVUFBSSxFQUFFQztBQUFQLEtBTmdCO0FBT3ZCaUgsU0FBSyxFQUFFO0FBQUNsSCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQVBnQjtBQVN2QjJLLGVBQVcsRUFBRTtBQUFDMVIsVUFBSSxFQUFFNkI7QUFBUCxLQVRVO0FBV3ZCOFAsa0JBQWMsRUFBRTtBQUFDM1IsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FYTztBQVl2QjZLLGdCQUFZLEVBQUU7QUFBQzVSLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCO0FBRWQ7Ozs7Ozs7OztBQWR1QixHQUFqQixFQXVCUHpHLFNBdkJPLEVBRnlDOztBQTBCbkRDLEtBQUcsQ0FBQztBQUNBNkksc0JBREE7QUFFQTlKLFlBRkE7QUFHQStKLGVBSEE7QUFLQTNNLFNBTEE7QUFNQXdLLFNBTkE7QUFRQXdLLGVBUkE7QUFVQUMsa0JBVkE7QUFXQUM7QUFDQTs7Ozs7Ozs7OztBQVpBLEdBQUQsRUFxQkQ7QUFDRSxXQUFPMVgsYUFBYSxDQUFDc0csTUFBZCxDQUFxQjtBQUN4QjRJLHdCQUFrQixFQUFFQSxrQkFESTtBQUV4QjlKLGNBQVEsRUFBRUEsUUFGYztBQUd4QitKLGlCQUFXLEVBQUVBLFdBSFc7QUFJeEIzTSxXQUFLLEVBQUVBLEtBSmlCO0FBS3hCd0ssV0FBSyxFQUFFQSxLQUxpQjtBQU94QndLLGlCQUFXLEVBQUVBLFdBUFc7QUFTeEJDLG9CQUFjLEVBQUVBLGNBVFE7QUFVeEJDLGtCQUFZLEVBQUVBLFlBVlU7O0FBV3hCOzs7Ozs7Ozs7QUFTQXZWLGVBQVMsRUFBRSxJQUFJc0YsSUFBSjtBQXBCYSxLQUFyQixDQUFQO0FBc0JIOztBQXRFa0QsQ0FBcEIsQ0FBNUI7QUEyRUEsTUFBTXNKLFlBQVksR0FBRyxJQUFJcEwsZUFBSixDQUFvQjtBQUM1Q0MsTUFBSSxFQUFFLGVBRHNDO0FBRTVDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QndKLHNCQUFrQixFQUFFO0FBQUNwSixVQUFJLEVBQUVDO0FBQVAsS0FERztBQUV2QlgsWUFBUSxFQUFFO0FBQUNVLFVBQUksRUFBRUM7QUFBUCxLQUZhO0FBR3ZCb0osZUFBVyxFQUFFO0FBQUNySixVQUFJLEVBQUVDO0FBQVAsS0FIVTtBQU12QjBOLGFBQVMsRUFBRTtBQUFDM04sVUFBSSxFQUFFQztBQUFQLEtBTlk7QUFPdkIyTixZQUFRLEVBQUU7QUFBQzVOLFVBQUksRUFBRUM7QUFBUCxLQVBhO0FBUXZCNFIsZ0JBQVksRUFBRTtBQUFDN1IsVUFBSSxFQUFFQztBQUFQLEtBUlM7QUFTdkI2UixlQUFXLEVBQUU7QUFBQzlSLFVBQUksRUFBRUM7QUFBUCxLQVRVO0FBVXZCOFIsYUFBUyxFQUFFO0FBQUMvUixVQUFJLEVBQUVDO0FBQVAsS0FWWTtBQVd2QitSLFlBQVEsRUFBRTtBQUFDaFMsVUFBSSxFQUFFQztBQUFQLEtBWGE7QUFZdkJvTCxRQUFJLEVBQUU7QUFBQ3JMLFVBQUksRUFBRUM7QUFBUCxLQVppQjtBQWF2QmdTLFFBQUksRUFBRTtBQUFDalMsVUFBSSxFQUFFQztBQUFQLEtBYmlCO0FBY3ZCaVMsU0FBSyxFQUFFO0FBQUNsUyxVQUFJLEVBQUVDO0FBQVAsS0FkZ0I7QUFldkJrUyxlQUFXLEVBQUU7QUFBQ25TLFVBQUksRUFBRUM7QUFBUCxLQWZVO0FBZ0J2QjZHLFVBQU0sRUFBRTtBQUFDOUcsVUFBSSxFQUFFQztBQUFQLEtBaEJlO0FBaUJ2QnFOLGFBQVMsRUFBRTtBQUFDdE4sVUFBSSxFQUFFQztBQUFQO0FBakJZLEdBQWpCLEVBbUJQSyxTQW5CTyxFQUZrQzs7QUFzQjVDQyxLQUFHLENBQUM7QUFDQTZJLHNCQURBO0FBRUE5SixZQUZBO0FBR0ErSixlQUhBO0FBS0FzRSxhQUxBO0FBTUFDLFlBTkE7QUFPQWlFLGdCQVBBO0FBUUFDLGVBUkE7QUFTQUMsYUFUQTtBQVVBQyxZQVZBO0FBV0EzRyxRQVhBO0FBWUE0RyxRQVpBO0FBYUFDLFNBYkE7QUFjQUMsZUFkQTtBQWVBckwsVUFmQTtBQWdCQXdHO0FBaEJBLEdBQUQsRUFpQkQ7QUFDRSxXQUFPblQsVUFBVSxDQUFDcUcsTUFBWCxDQUFrQjtBQUNyQjRJLHdCQUFrQixFQUFFQSxrQkFEQztBQUVyQjlKLGNBQVEsRUFBRUEsUUFGVztBQUdyQitKLGlCQUFXLEVBQUVBLFdBSFE7QUFLckJzRSxlQUFTLEVBQUVBLFNBTFU7QUFTckJDLGNBQVEsRUFBRUEsUUFUVztBQVVyQmlFLGtCQUFZLEVBQUVBLFlBVk87QUFXckJDLGlCQUFXLEVBQUVBLFdBWFE7QUFZckJDLGVBQVMsRUFBRUEsU0FaVTtBQWNyQkssYUFBTyxFQUFFTCxTQUFTLENBQUN0SyxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBZFk7QUFlckI0SyxhQUFPLEVBQUVOLFNBQVMsQ0FBQ3RLLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FmWTtBQWdCckI2SyxhQUFPLEVBQUVQLFNBQVMsQ0FBQ3RLLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FoQlk7QUFrQnJCdUssY0FBUSxFQUFFQSxRQWxCVztBQW1CckIzRyxVQUFJLEVBQUVBLElBbkJlO0FBb0JyQjRHLFVBQUksRUFBRUEsSUFwQmU7QUFxQnJCQyxXQUFLLEVBQUVBLEtBckJjO0FBc0JyQkMsaUJBQVcsRUFBRUEsV0F0QlE7QUF1QnJCckwsWUFBTSxFQUFFQSxNQXZCYTtBQXdCckJ3RyxlQUFTLEVBQUVBLFNBeEJVO0FBMEJyQmpSLGVBQVMsRUFBRSxJQUFJc0YsSUFBSjtBQTFCVSxLQUFsQixDQUFQO0FBNEJIOztBQXBFMkMsQ0FBcEIsQ0FBckIsQzs7Ozs7Ozs7Ozs7QUN2dUNQcEosTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQUMyVixhQUFXLEVBQUMsTUFBSUEsV0FBakI7QUFBNkJDLGFBQVcsRUFBQyxNQUFJQSxXQUE3QztBQUF5REMsb0JBQWtCLEVBQUMsTUFBSUE7QUFBaEYsQ0FBZDtBQUFtSCxJQUFJbmEsTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJK0IsT0FBSjtBQUFZakMsTUFBTSxDQUFDQyxJQUFQLENBQVksa0JBQVosRUFBK0I7QUFBQ2dDLFNBQU8sQ0FBQy9CLENBQUQsRUFBRztBQUFDK0IsV0FBTyxHQUFDL0IsQ0FBUjtBQUFVOztBQUF0QixDQUEvQixFQUF1RCxDQUF2RDtBQUs5WCxNQUFNOFosV0FBVyxHQUFHLElBQUkxUyxlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUUsY0FEcUM7QUFFM0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCbkQsaUJBQWEsRUFBRTtBQUFDdUQsVUFBSSxFQUFFQztBQUFQLEtBRFE7QUFFdkI7QUFDQWdGLFFBQUksRUFBRTtBQUFDakYsVUFBSSxFQUFFQztBQUFQLEtBSGlCO0FBSXZCa0YsV0FBTyxFQUFFO0FBQUNuRixVQUFJLEVBQUVDO0FBQVA7QUFKYyxHQUFqQixFQUtQSyxTQUxPLEVBRmlDOztBQVEzQ0MsS0FBRyxDQUFDO0FBQ0E5RCxpQkFEQTtBQUVBO0FBQ0F3SSxRQUhBO0FBSUFFO0FBSkEsR0FBRCxFQUtEO0FBQ0UsV0FBTzNLLE9BQU8sQ0FBQ2dHLE1BQVIsQ0FBZTtBQUNsQi9ELG1CQUFhLEVBQUVBLGFBREc7QUFFbEI7QUFDQXdJLFVBQUksRUFBRUEsSUFIWTtBQUlsQkUsYUFBTyxFQUFFQSxPQUpTO0FBS2xCMUQsZ0JBQVUsRUFBRSxNQUxNO0FBTWxCQyxpQkFBVyxFQUFFO0FBTkssS0FBZixDQUFQO0FBUUg7O0FBdEIwQyxDQUFwQixDQUFwQjtBQXlCQSxNQUFNOFEsV0FBVyxHQUFHLElBQUkzUyxlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUUsY0FEcUM7QUFFM0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCbkQsaUJBQWEsRUFBRTtBQUFDdUQsVUFBSSxFQUFFQztBQUFQLEtBRFE7QUFFdkJrRixXQUFPLEVBQUU7QUFBQ25GLFVBQUksRUFBRUM7QUFBUCxLQUZjO0FBR3ZCdkQsU0FBSyxFQUFFO0FBQUNzRCxVQUFJLEVBQUVDO0FBQVAsS0FIZ0I7QUFJdkJlLG1CQUFlLEVBQUU7QUFBQ2hCLFVBQUksRUFBRUM7QUFBUCxLQUpNO0FBS3ZCc0osV0FBTyxFQUFFO0FBQUN2SixVQUFJLEVBQUVDO0FBQVAsS0FMYztBQU12Qm9CLGNBQVUsRUFBRTtBQUFDckIsVUFBSSxFQUFFQztBQUFQLEtBTlc7QUFPdkJ5UyxRQUFJLEVBQUU7QUFBQzFTLFVBQUksRUFBRUM7QUFBUCxLQVBpQjtBQVF2QjBTLFNBQUssRUFBRTtBQUFDM1MsVUFBSSxFQUFFQztBQUFQLEtBUmdCLENBU3ZCO0FBQ0E7O0FBVnVCLEdBQWpCLEVBV1BLLFNBWE8sRUFGaUM7O0FBYzNDQyxLQUFHLENBQUM7QUFDQTlELGlCQURBO0FBRUE7QUFDQTBJLFdBSEE7QUFJQXpJLFNBSkE7QUFLQXNFLG1CQUxBO0FBTUF1SSxXQU5BO0FBT0FsSSxjQVBBO0FBUUFxUixRQVJBO0FBU0FDLFNBVEEsQ0FVQTtBQUNBOztBQVhBLEdBQUQsRUFZRDtBQUNFLFdBQU9uWSxPQUFPLENBQUNrRyxNQUFSLENBQWU7QUFDbEJqRSxtQkFBYSxFQUFFQSxhQURHO0FBRWxCMEksYUFBTyxFQUFFQSxPQUZTLENBR2xCO0FBQ0E7O0FBSmtCLEtBQWYsRUFLTDtBQUNFK0gsV0FBSyxFQUFDO0FBQ0YwRixtQkFBVyxFQUFDO0FBQ1JsVyxlQUFLLEVBQUVBLEtBREM7QUFFUnNFLHlCQUFlLEVBQUVBLGVBRlQ7QUFHUnVJLGlCQUFPLEVBQUVBLE9BSEQ7QUFJUmxJLG9CQUFVLEVBQUVBLFVBSko7QUFLUnFSLGNBQUksRUFBRUEsSUFMRTtBQU1SQyxlQUFLLEVBQUVBO0FBTkM7QUFEVjtBQURSLEtBTEssQ0FBUDtBQWlCSDs7QUE1QzBDLENBQXBCLENBQXBCO0FBK0NBLE1BQU1GLGtCQUFrQixHQUFHLElBQUk1UyxlQUFKLENBQW9CO0FBQ2xEQyxNQUFJLEVBQUUscUJBRDRDO0FBRWxEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2Qm5ELGlCQUFhLEVBQUU7QUFBQ3VELFVBQUksRUFBRUM7QUFBUCxLQURRO0FBRXZCa0YsV0FBTyxFQUFFO0FBQUNuRixVQUFJLEVBQUVDO0FBQVAsS0FGYztBQUd2QnlTLFFBQUksRUFBRTtBQUFDMVMsVUFBSSxFQUFFQztBQUFQLEtBSGlCO0FBSXZCMFMsU0FBSyxFQUFFO0FBQUMzUyxVQUFJLEVBQUVDO0FBQVAsS0FKZ0IsQ0FLdkI7QUFDQTs7QUFOdUIsR0FBakIsRUFPUEssU0FQTyxFQUZ3Qzs7QUFVbERDLEtBQUcsQ0FBRTtBQUNEOUQsaUJBREM7QUFFRDBJLFdBRkM7QUFHRHVOLFFBSEM7QUFJREM7QUFKQyxHQUFGLEVBS0E7QUFDQyxXQUFPblksT0FBTyxDQUFDa0csTUFBUixDQUFlO0FBQ2xCakUsbUJBQWEsRUFBRUEsYUFERztBQUVsQjBJLGFBQU8sRUFBRUE7QUFGUyxLQUFmLEVBR0w7QUFDRXhFLFVBQUksRUFBQztBQUNEYyxrQkFBVSxFQUFFaVIsSUFEWDtBQUVEaFIsbUJBQVcsRUFBRWlSO0FBRlo7QUFEUCxLQUhLLENBQVA7QUFTSDs7QUF6QmlELENBQXBCLENBQTNCLEM7Ozs7Ozs7Ozs7O0FDN0VQcGEsTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQUNpVyxtQkFBaUIsRUFBQyxNQUFJQSxpQkFBdkI7QUFBeUNDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUEvRDtBQUFpRkMsb0JBQWtCLEVBQUMsTUFBSUEsa0JBQXhHO0FBQTJIQyxtQkFBaUIsRUFBQyxNQUFJQSxpQkFBako7QUFBbUtDLG1CQUFpQixFQUFDLE1BQUlBLGlCQUF6TDtBQUEyTUMseUJBQXVCLEVBQUMsTUFBSUEsdUJBQXZPO0FBQStQQyx3QkFBc0IsRUFBQyxNQUFJQSxzQkFBMVI7QUFBaVRDLDJCQUF5QixFQUFDLE1BQUlBLHlCQUEvVTtBQUF5V0MseUJBQXVCLEVBQUMsTUFBSUEsdUJBQXJZO0FBQTZaQyxvQkFBa0IsRUFBQyxNQUFJQSxrQkFBcGI7QUFBdWNDLHVCQUFxQixFQUFDLE1BQUlBLHFCQUFqZTtBQUF1ZkMsdUJBQXFCLEVBQUMsTUFBSUEscUJBQWpoQjtBQUF1aUJDLGVBQWEsRUFBQyxNQUFJQSxhQUF6akI7QUFBdWtCQyxlQUFhLEVBQUMsTUFBSUEsYUFBemxCO0FBQXVtQkMsYUFBVyxFQUFDLE1BQUlBLFdBQXZuQjtBQUFtb0JDLGFBQVcsRUFBQyxNQUFJQSxXQUFucEI7QUFBK3BCQyxhQUFXLEVBQUMsTUFBSUE7QUFBL3FCLENBQWQ7QUFBMnNCLElBQUl2YixNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlrSCxjQUFKO0FBQW1CcEgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ21ILGdCQUFjLENBQUNsSCxDQUFELEVBQUc7QUFBQ2tILGtCQUFjLEdBQUNsSCxDQUFmO0FBQWlCOztBQUFwQyxDQUExQyxFQUFnRixDQUFoRjtBQUFtRixJQUFJbUgsWUFBSjtBQUFpQnJILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNvSCxjQUFZLENBQUNuSCxDQUFELEVBQUc7QUFBQ21ILGdCQUFZLEdBQUNuSCxDQUFiO0FBQWU7O0FBQWhDLENBQTFDLEVBQTRFLENBQTVFO0FBQStFLElBQUlhLFlBQUosRUFBaUJDLE9BQWpCLEVBQXlCQyxNQUF6QixFQUFnQ0UsZUFBaEMsRUFBZ0RELFFBQWhELEVBQXlEa0IsTUFBekQ7QUFBZ0VwQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxrQkFBWixFQUErQjtBQUFDYyxjQUFZLENBQUNiLENBQUQsRUFBRztBQUFDYSxnQkFBWSxHQUFDYixDQUFiO0FBQWUsR0FBaEM7O0FBQWlDYyxTQUFPLENBQUNkLENBQUQsRUFBRztBQUFDYyxXQUFPLEdBQUNkLENBQVI7QUFBVSxHQUF0RDs7QUFBdURlLFFBQU0sQ0FBQ2YsQ0FBRCxFQUFHO0FBQUNlLFVBQU0sR0FBQ2YsQ0FBUDtBQUFTLEdBQTFFOztBQUEyRWlCLGlCQUFlLENBQUNqQixDQUFELEVBQUc7QUFBQ2lCLG1CQUFlLEdBQUNqQixDQUFoQjtBQUFrQixHQUFoSDs7QUFBaUhnQixVQUFRLENBQUNoQixDQUFELEVBQUc7QUFBQ2dCLFlBQVEsR0FBQ2hCLENBQVQ7QUFBVyxHQUF4STs7QUFBeUlrQyxRQUFNLENBQUNsQyxDQUFELEVBQUc7QUFBQ2tDLFVBQU0sR0FBQ2xDLENBQVA7QUFBUzs7QUFBNUosQ0FBL0IsRUFBNkwsQ0FBN0w7QUFLMWdDLE1BQU1vYSxpQkFBaUIsR0FBRyxJQUFJaFQsZUFBSixDQUFvQjtBQUNqREMsTUFBSSxFQUFFLG9CQUQyQztBQUVqREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJrVSxTQUFLLEVBQUU7QUFBQzlULFVBQUksRUFBRUM7QUFBUCxLQURnQjtBQUV2QmIsUUFBSSxFQUFFO0FBQUNZLFVBQUksRUFBRUM7QUFBUCxLQUZpQjtBQUd2Qm5FLG9CQUFnQixFQUFFO0FBQUNrRSxVQUFJLEVBQUVDO0FBQVAsS0FISztBQUl2QjhULG1CQUFlLEVBQUU7QUFBQy9ULFVBQUksRUFBRUM7QUFBUCxLQUpNO0FBS3ZCK1QsVUFBTSxFQUFFO0FBQUNoVSxVQUFJLEVBQUVDO0FBQVAsS0FMZTtBQU12QmdVLG1CQUFlLEVBQUU7QUFBQ2pVLFVBQUksRUFBRTJCO0FBQVAsS0FOTTtBQU92QnVTLE9BQUcsRUFBRTtBQUFDbFUsVUFBSSxFQUFFQztBQUFQLEtBUGtCO0FBUXZCa1UsT0FBRyxFQUFFO0FBQUNuVSxVQUFJLEVBQUVDO0FBQVAsS0FSa0I7QUFTdkIrTSxZQUFRLEVBQUU7QUFBQ2hOLFVBQUksRUFBRUk7QUFBUCxLQVRhO0FBVXZCZ1UsY0FBVSxFQUFFO0FBQUNwVSxVQUFJLEVBQUU2QjtBQUFQO0FBVlcsR0FBakIsRUFXUHZCLFNBWE8sRUFGdUM7O0FBY2pEQyxLQUFHLENBQUU7QUFDRHVULFNBREM7QUFFRDFVLFFBRkM7QUFHRHRELG9CQUhDO0FBSURpWSxtQkFKQztBQUtEQyxVQUxDO0FBTURDLG1CQU5DO0FBT0RDLE9BUEM7QUFRREMsT0FSQztBQVNEbkgsWUFUQztBQVVEb0g7QUFWQyxHQUFGLEVBV0E7QUFDQyxXQUFPOWEsWUFBWSxDQUFDa0gsTUFBYixDQUFvQjtBQUN2QnJCLFlBQU0sRUFBRSxJQURlO0FBRXZCMlUsV0FBSyxFQUFFQSxLQUZnQjtBQUd2QjFVLFVBQUksRUFBRUEsSUFIaUI7QUFJdkJ0RCxzQkFBZ0IsRUFBRUEsZ0JBSks7QUFLdkJpWSxxQkFBZSxFQUFFQSxlQUxNO0FBTXZCQyxZQUFNLEVBQUVBLE1BTmU7QUFPdkJDLHFCQUFlLEVBQUVBLGVBUE07QUFRdkJDLFNBQUcsRUFBRUEsR0FSa0I7QUFTdkJDLFNBQUcsRUFBRUEsR0FUa0I7QUFVdkJuSCxjQUFRLEVBQUVBLFFBVmE7QUFXdkJvSCxnQkFBVSxFQUFFQTtBQVhXLEtBQXBCLENBQVA7QUFhSDs7QUF2Q2dELENBQXBCLENBQTFCO0FBMENBLE1BQU10QixpQkFBaUIsR0FBRyxJQUFJalQsZUFBSixDQUFvQjtBQUNqREMsTUFBSSxFQUFFLG9CQUQyQztBQUVqREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkIrTSxZQUFRLEVBQUU7QUFBQ2hOLFVBQUksRUFBRUk7QUFBUCxLQUZhO0FBR3ZCNlQsbUJBQWUsRUFBRTtBQUFDalUsVUFBSSxFQUFFMkI7QUFBUCxLQUhNO0FBSXZCdVMsT0FBRyxFQUFFO0FBQUNsVSxVQUFJLEVBQUVDO0FBQVAsS0FKa0I7QUFLdkJrVSxPQUFHLEVBQUU7QUFBQ25VLFVBQUksRUFBRUM7QUFBUDtBQUxrQixHQUFqQixFQU1QSyxTQU5PLEVBRnVDOztBQVNqREMsS0FBRyxDQUFFO0FBQUVFLE1BQUY7QUFBTXVNLFlBQU47QUFBZ0JpSCxtQkFBaEI7QUFBaUNDLE9BQWpDO0FBQXNDQztBQUF0QyxHQUFGLEVBQStDO0FBQzlDLFdBQU83YSxZQUFZLENBQUNvSCxNQUFiLENBQW9CO0FBQ3ZCN0MsU0FBRyxFQUFFNEM7QUFEa0IsS0FBcEIsRUFFTDtBQUNFRSxVQUFJLEVBQUU7QUFDRnFNLGdCQUFRLEVBQUUxVCxZQUFZLENBQUMyQixJQUFiLENBQWtCO0FBQUM0QyxhQUFHLEVBQUU0QztBQUFOLFNBQWxCLEVBQTZCNFQsS0FBN0IsR0FBcUMsQ0FBckMsRUFBd0NySCxRQUF4QyxHQUFtREEsUUFEM0Q7QUFFRmlILHVCQUFlLEVBQUVBLGVBRmY7QUFHRkMsV0FBRyxFQUFFQSxHQUhIO0FBSUZDLFdBQUcsRUFBRUE7QUFKSDtBQURSLEtBRkssQ0FBUDtBQVVIOztBQXBCZ0QsQ0FBcEIsQ0FBMUI7QUF1QkEsTUFBTXBCLGtCQUFrQixHQUFHLElBQUlsVCxlQUFKLENBQW9CO0FBQ2xEQyxNQUFJLEVBQUUscUJBRDRDO0FBRWxEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QitNLFlBQVEsRUFBRTtBQUFDaE4sVUFBSSxFQUFFSTtBQUFQO0FBRmEsR0FBakIsRUFHUEUsU0FITyxFQUZ3Qzs7QUFNbERDLEtBQUcsQ0FBRTtBQUFFRSxNQUFGO0FBQU11TTtBQUFOLEdBQUYsRUFBb0I7QUFDbkIsV0FBTzFULFlBQVksQ0FBQ29ILE1BQWIsQ0FBb0I7QUFDdkI3QyxTQUFHLEVBQUU0QztBQURrQixLQUFwQixFQUVMO0FBQ0VFLFVBQUksRUFBRTtBQUNGcU0sZ0JBQVEsRUFBRTFULFlBQVksQ0FBQzJCLElBQWIsQ0FBa0I7QUFBQzRDLGFBQUcsRUFBRTRDO0FBQU4sU0FBbEIsRUFBNkI0VCxLQUE3QixHQUFxQyxDQUFyQyxFQUF3Q3JILFFBQXhDLEdBQW1EQTtBQUQzRDtBQURSLEtBRkssQ0FBUDtBQU9IOztBQWRpRCxDQUFwQixDQUEzQjtBQWlCQSxNQUFNZ0csaUJBQWlCLEdBQUcsSUFBSW5ULGVBQUosQ0FBb0I7QUFDakRDLE1BQUksRUFBRSxvQkFEMkM7QUFFakRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCNlQsU0FBSyxFQUFFO0FBQUM5VCxVQUFJLEVBQUVDO0FBQVAsS0FGZ0I7QUFHdkJiLFFBQUksRUFBRTtBQUFDWSxVQUFJLEVBQUVDO0FBQVAsS0FIaUI7QUFJdkJuRSxvQkFBZ0IsRUFBRTtBQUFDa0UsVUFBSSxFQUFFQztBQUFQLEtBSks7QUFLdkI4VCxtQkFBZSxFQUFFO0FBQUMvVCxVQUFJLEVBQUVDO0FBQVAsS0FMTTtBQU12QitULFVBQU0sRUFBRTtBQUFDaFUsVUFBSSxFQUFFQztBQUFQLEtBTmU7QUFPdkJnVSxtQkFBZSxFQUFFO0FBQUNqVSxVQUFJLEVBQUUyQjtBQUFQLEtBUE07QUFRdkJ1UyxPQUFHLEVBQUU7QUFBQ2xVLFVBQUksRUFBRUM7QUFBUCxLQVJrQjtBQVN2QmtVLE9BQUcsRUFBRTtBQUFDblUsVUFBSSxFQUFFQztBQUFQLEtBVGtCO0FBVXZCK00sWUFBUSxFQUFFO0FBQUNoTixVQUFJLEVBQUVJO0FBQVAsS0FWYTtBQVd2QmdVLGNBQVUsRUFBRTtBQUFDcFUsVUFBSSxFQUFFNkI7QUFBUDtBQVhXLEdBQWpCLEVBWVB2QixTQVpPLEVBRnVDOztBQWVqREMsS0FBRyxDQUFFO0FBQ0RFLE1BREM7QUFFRHFULFNBRkM7QUFHRDFVLFFBSEM7QUFJRHRELG9CQUpDO0FBS0RpWSxtQkFMQztBQU1EQyxVQU5DO0FBT0RDLG1CQVBDO0FBUURDLE9BUkM7QUFTREMsT0FUQztBQVVEbkgsWUFWQztBQVdEb0g7QUFYQyxHQUFGLEVBWUE7QUFDQyxXQUFPOWEsWUFBWSxDQUFDb0gsTUFBYixDQUFvQjtBQUN2QjdDLFNBQUcsRUFBRTRDO0FBRGtCLEtBQXBCLEVBRUw7QUFDRUUsVUFBSSxFQUFFO0FBQ0ZtVCxhQUFLLEVBQUVBLEtBREw7QUFFRjFVLFlBQUksRUFBRUEsSUFGSjtBQUdGdEQsd0JBQWdCLEVBQUVBLGdCQUhoQjtBQUlGaVksdUJBQWUsRUFBRUEsZUFKZjtBQUtGQyxjQUFNLEVBQUVBLE1BTE47QUFNRkMsdUJBQWUsRUFBRUEsZUFOZjtBQU9GQyxXQUFHLEVBQUVBLEdBUEg7QUFRRkMsV0FBRyxFQUFFQSxHQVJIO0FBU0ZuSCxnQkFBUSxFQUFFQSxRQVRSO0FBVUZvSCxrQkFBVSxFQUFFQTtBQVZWO0FBRFIsS0FGSyxDQUFQO0FBZ0JIOztBQTVDZ0QsQ0FBcEIsQ0FBMUI7QUErQ0EsTUFBTW5CLGlCQUFpQixHQUFHLElBQUlwVCxlQUFKLENBQW9CO0FBQ2pEQyxNQUFJLEVBQUUsb0JBRDJDO0FBRWpEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmQsVUFBTSxFQUFFO0FBQUNhLFVBQUksRUFBRTZCO0FBQVA7QUFGZSxHQUFqQixFQUdQdkIsU0FITyxFQUZ1Qzs7QUFNakRDLEtBQUcsQ0FBRTtBQUFDRSxNQUFEO0FBQUt0QjtBQUFMLEdBQUYsRUFBZ0I7QUFDZixXQUFPN0YsWUFBWSxDQUFDb0gsTUFBYixDQUFvQjtBQUN2QjdDLFNBQUcsRUFBQzRDO0FBRG1CLEtBQXBCLEVBRUo7QUFDQ0UsVUFBSSxFQUFFO0FBQ0Z4QixjQUFNLEVBQUVBLE1BRE47QUFFRjZOLGdCQUFRLEVBQUU7QUFGUjtBQURQLEtBRkksQ0FBUDtBQVFIOztBQWZnRCxDQUFwQixDQUExQjtBQXFCQSxNQUFNa0csdUJBQXVCLEdBQUcsSUFBSXJULGVBQUosQ0FBb0I7QUFDdkRDLE1BQUksRUFBRSwyQkFEaUQ7QUFFdkRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCN0QsaUJBQWEsRUFBRTtBQUFDaUUsVUFBSSxFQUFFQztBQUFQLEtBRFE7QUFFdkIrSCxTQUFLLEVBQUU7QUFBQ2hJLFVBQUksRUFBRUM7QUFBUCxLQUZnQjtBQUd2QmtMLFdBQU8sRUFBRTtBQUFDbkwsVUFBSSxFQUFFQztBQUFQLEtBSGM7QUFLdkJxVSxrQkFBYyxFQUFFO0FBQUN0VSxVQUFJLEVBQUUsQ0FBQ3dCLE1BQUQ7QUFBUCxLQUxPO0FBTXZCLHVDQUFtQztBQUFDeEIsVUFBSSxFQUFFQztBQUFQLEtBTlo7QUFPdkIseUNBQXFDO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQVBkO0FBUXZCLCtCQUEyQjtBQUFDRCxVQUFJLEVBQUVDO0FBQVAsS0FSSjtBQVN2Qiw4QkFBMEI7QUFBQ0QsVUFBSSxFQUFFQztBQUFQLEtBVEg7QUFVdkIsNkJBQXlCO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQVZGO0FBV3ZCLDRCQUF3QjtBQUFDRCxVQUFJLEVBQUVDO0FBQVAsS0FYRDtBQVl2Qiw0QkFBd0I7QUFBQ0QsVUFBSSxFQUFFQztBQUFQLEtBWkQ7QUFhdkIsaUNBQTZCO0FBQUNELFVBQUksRUFBRUk7QUFBUCxLQWJOO0FBY3ZCLHdDQUFvQztBQUFDSixVQUFJLEVBQUUyQjtBQUFQLEtBZGI7QUFldkIsb0NBQWdDO0FBQUMzQixVQUFJLEVBQUVDO0FBQVAsS0FmVDtBQWdCdkIsOEJBQTBCO0FBQUNELFVBQUksRUFBRUM7QUFBUDtBQWhCSCxHQUFqQixFQWtCUEssU0FsQk8sRUFGNkM7O0FBcUJ2REMsS0FBRyxDQUFFO0FBQ0R4RSxpQkFEQztBQUVEaU0sU0FGQztBQUdEbUQsV0FIQztBQUtEbUo7QUFMQyxHQUFGLEVBTUE7QUFDQyxXQUFPL2EsT0FBTyxDQUFDaUgsTUFBUixDQUFlO0FBQ2xCekUsbUJBQWEsRUFBRUEsYUFERztBQUVsQmlNLFdBQUssRUFBRUEsS0FGVztBQUdsQm1ELGFBQU8sRUFBRUEsT0FIUztBQUlsQm9KLG9CQUFjLEVBQUUsSUFBSTVTLElBQUosRUFKRTtBQUtsQlQsU0FBRyxFQUFHLElBQUlTLElBQUosRUFBRCxDQUFhNlMsT0FBYixLQUF1QixFQUxWO0FBTWxCclQsU0FBRyxFQUFJLElBQUlRLElBQUosRUFBRCxDQUFhOFMsUUFBYixLQUF3QixDQUF6QixHQUE0QixFQU5mO0FBT2xCclQsU0FBRyxFQUFHLElBQUlPLElBQUosRUFBRCxDQUFhK1MsV0FBYixLQUEyQixFQVBkO0FBUWxCSixvQkFBYyxFQUFFQTtBQVJFLEtBQWYsQ0FBUDtBQVVIOztBQXRDc0QsQ0FBcEIsQ0FBaEM7QUEyQ0EsTUFBTW5CLHNCQUFzQixHQUFHLElBQUl0VCxlQUFKLENBQW9CO0FBQ3REQyxNQUFJLEVBQUUsMEJBRGdEO0FBRXREQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QjVELGdCQUFZLEVBQUU7QUFBQ2dFLFVBQUksRUFBRUM7QUFBUCxLQURTO0FBRXZCK0gsU0FBSyxFQUFFO0FBQUNoSSxVQUFJLEVBQUVDO0FBQVAsS0FGZ0I7QUFHdkJrTCxXQUFPLEVBQUU7QUFBQ25MLFVBQUksRUFBRUM7QUFBUCxLQUhjO0FBSXZCMFUsU0FBSyxFQUFFO0FBQUMzVSxVQUFJLEVBQUVDO0FBQVAsS0FKZ0I7QUFLdkIyVSxXQUFPLEVBQUU7QUFBQzVVLFVBQUksRUFBRUM7QUFBUCxLQUxjO0FBTXZCNFUsV0FBTyxFQUFFO0FBQUM3VSxVQUFJLEVBQUVDO0FBQVAsS0FOYztBQU92QjZVLFdBQU8sRUFBRTtBQUFDOVUsVUFBSSxFQUFFQztBQUFQLEtBUGM7QUFRdkI4VSxZQUFRLEVBQUU7QUFBQy9VLFVBQUksRUFBRUM7QUFBUCxLQVJhO0FBU3ZCK1UsUUFBSSxFQUFFO0FBQUNoVixVQUFJLEVBQUU2QjtBQUFQLEtBVGlCO0FBV3ZCb1QsaUJBQWEsRUFBRTtBQUFDalYsVUFBSSxFQUFFLENBQUN3QixNQUFEO0FBQVAsS0FYUTtBQVl2QjtBQUNBLHNDQUFrQztBQUFDeEIsVUFBSSxFQUFFQztBQUFQLEtBYlg7QUFjdkIsNEJBQXdCO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQWREO0FBZXZCLHdDQUFvQztBQUFDRCxVQUFJLEVBQUVDO0FBQVAsS0FmYjtBQWdCdkIsOEJBQTBCO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQWhCSDtBQWlCdkIsMkJBQXVCO0FBQUNELFVBQUksRUFBRUM7QUFBUCxLQWpCQTtBQWtCdkIsZ0NBQTRCO0FBQUNELFVBQUksRUFBRUk7QUFBUCxLQWxCTDtBQW9CdkIsb0NBQWdDO0FBQUNKLFVBQUksRUFBRUM7QUFBUCxLQXBCVDtBQXFCdkIsOEJBQTBCO0FBQUNELFVBQUksRUFBRUM7QUFBUDtBQXJCSCxHQUFqQixFQXVCUEssU0F2Qk8sRUFGNEM7O0FBMEJ0REMsS0FBRyxDQUFFO0FBQ0R2RSxnQkFEQztBQUVEZ00sU0FGQztBQUdEbUQsV0FIQztBQUlEd0osU0FKQztBQUtEQyxXQUxDO0FBTURDLFdBTkM7QUFPREMsV0FQQztBQVFEQyxZQVJDO0FBU0RDLFFBVEM7QUFXREM7QUFYQyxHQUFGLEVBWUE7QUFDQyxXQUFPemIsTUFBTSxDQUFDZ0gsTUFBUCxDQUFjO0FBQ2pCeEUsa0JBQVksRUFBRUEsWUFERztBQUVqQmdNLFdBQUssRUFBRUEsS0FGVTtBQUdqQm1ELGFBQU8sRUFBRUEsT0FIUTtBQUlqQndKLFdBQUssRUFBRUEsS0FKVTtBQUtqQk8sY0FBUSxFQUFFLEtBTE87QUFNakJYLG9CQUFjLEVBQUUsSUFBSTVTLElBQUosRUFOQztBQU9qQlQsU0FBRyxFQUFFMFQsT0FQWTtBQVFqQnpULFNBQUcsRUFBRTBULE9BUlk7QUFTakJ6VCxTQUFHLEVBQUUwVCxPQVRZO0FBVWpCQyxjQUFRLEVBQUVBLFFBVk87QUFZakJyTixlQUFTLEVBQUUsS0FaTTtBQWFqQnNOLFVBQUksRUFBRUEsSUFiVztBQWVqQkMsbUJBQWEsRUFBRUE7QUFmRSxLQUFkLENBQVA7QUFpQkg7O0FBeERxRCxDQUFwQixDQUEvQjtBQTJEQSxNQUFNN0IseUJBQXlCLEdBQUcsSUFBSXZULGVBQUosQ0FBb0I7QUFDekRDLE1BQUksRUFBRSxrQ0FEbUQ7QUFFekRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCOE0sZUFBVyxFQUFFO0FBQUMvTSxVQUFJLEVBQUVDO0FBQVAsS0FGVTtBQUd2QitILFNBQUssRUFBRTtBQUFDaEksVUFBSSxFQUFFQztBQUFQLEtBSGdCO0FBSXZCK00sWUFBUSxFQUFFO0FBQUNoTixVQUFJLEVBQUVJO0FBQVA7QUFKYSxHQUFqQixFQUtQRSxTQUxPLEVBRitDOztBQVF6REMsS0FBRyxDQUFDO0FBQ0FFLE1BREE7QUFFQXNNLGVBRkE7QUFHQS9FLFNBSEE7QUFJQWdGO0FBSkEsR0FBRCxFQUtEO0FBQ0UsV0FBTyxDQUNIeFQsTUFBTSxDQUFDa0gsTUFBUCxDQUFjO0FBQ1Y3QyxTQUFHLEVBQUU0QztBQURLLEtBQWQsRUFFRTtBQUFDMFUsV0FBSyxFQUNKO0FBQ0lGLHFCQUFhLEVBQUU7QUFDWEcsd0JBQWMsRUFBRXJJO0FBREw7QUFEbkI7QUFERixLQUZGLENBREcsRUFVSHZULE1BQU0sQ0FBQ2tILE1BQVAsQ0FBYztBQUNWN0MsU0FBRyxFQUFFNEM7QUFESyxLQUFkLEVBRUU7QUFDRUUsVUFBSSxFQUFFO0FBQ0ZxSCxhQUFLLEVBQUVBO0FBREw7QUFEUixLQUZGLENBVkcsRUFpQkgxTyxZQUFZLENBQUNvSCxNQUFiLENBQW9CO0FBQ2hCN0MsU0FBRyxFQUFFa1A7QUFEVyxLQUFwQixFQUVFO0FBQ0VwTSxVQUFJLEVBQUU7QUFDRnFNLGdCQUFRLEVBQUUxVCxZQUFZLENBQUMyQixJQUFiLENBQWtCO0FBQUM0QyxhQUFHLEVBQUVrUDtBQUFOLFNBQWxCLEVBQXNDc0gsS0FBdEMsR0FBOEMsQ0FBOUMsRUFBaURySCxRQUFqRCxHQUE0REE7QUFEcEU7QUFEUixLQUZGLENBakJHLENBQVA7QUF5Qkg7O0FBdkN3RCxDQUFwQixDQUFsQztBQTBDQSxNQUFNcUcsdUJBQXVCLEdBQUcsSUFBSXhULGVBQUosQ0FBb0I7QUFDdkRDLE1BQUksRUFBRSxnQ0FEaUQ7QUFFdkRDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGNkM7O0FBS3ZEQyxLQUFHLENBQUM7QUFDQUU7QUFEQSxHQUFELEVBRUQ7QUFDRSxXQUFPakgsTUFBTSxDQUFDa0gsTUFBUCxDQUFjO0FBQ2pCN0MsU0FBRyxFQUFFNEM7QUFEWSxLQUFkLEVBRUw7QUFDRUUsVUFBSSxFQUFFO0FBQ0Z1VSxnQkFBUSxFQUFFO0FBRFI7QUFEUixLQUZLLENBQVA7QUFPSDs7QUFmc0QsQ0FBcEIsQ0FBaEM7QUFrQkEsTUFBTTVCLGtCQUFrQixHQUFHLElBQUl6VCxlQUFKLENBQW9CO0FBQ2xEQyxNQUFJLEVBQUUscUJBRDRDO0FBRWxEQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQLEtBRm1CO0FBR3ZCOUUsVUFBTSxFQUFFO0FBQUM2RSxVQUFJLEVBQUVDO0FBQVA7QUFIZSxHQUFqQixFQUlQSyxTQUpPLEVBRndDOztBQU9sREMsS0FBRyxDQUFFO0FBQ0RFLE1BREM7QUFFRHlLLE1BRkM7QUFHRC9QO0FBSEMsR0FBRixFQUlBO0FBQ0MsV0FBTzNCLE1BQU0sQ0FBQ2tILE1BQVAsQ0FBYztBQUNqQjdDLFNBQUcsRUFBRTRDO0FBRFksS0FBZCxFQUVMO0FBQ0VFLFVBQUksRUFBRTtBQUNGdUssVUFBRSxFQUFFQSxFQURGO0FBRUYvUCxjQUFNLEVBQUVBO0FBRk47QUFEUixLQUZLLENBQVA7QUFRSDs7QUFwQmlELENBQXBCLENBQTNCO0FBd0JBLE1BQU1vWSxxQkFBcUIsR0FBRyxJQUFJMVQsZUFBSixDQUFvQjtBQUNyREMsTUFBSSxFQUFFLHdCQUQrQztBQUVyREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkIzRCxrQkFBYyxFQUFFO0FBQUMrRCxVQUFJLEVBQUVDO0FBQVAsS0FETztBQUV2QjtBQUNBaUIsT0FBRyxFQUFFO0FBQUNsQixVQUFJLEVBQUVDO0FBQVAsS0FIa0I7QUFJdkJrQixPQUFHLEVBQUU7QUFBQ25CLFVBQUksRUFBRUM7QUFBUCxLQUprQjtBQUt2Qm1CLE9BQUcsRUFBRTtBQUFDcEIsVUFBSSxFQUFFQztBQUFQLEtBTGtCO0FBT3ZCNEgsZ0JBQVksRUFBRTtBQUFDN0gsVUFBSSxFQUFFQztBQUFQLEtBUFM7QUFRdkI2SCxtQkFBZSxFQUFFO0FBQUM5SCxVQUFJLEVBQUU2QjtBQUFQLEtBUk07QUFTdkJrRyxVQUFNLEVBQUU7QUFBQy9ILFVBQUksRUFBRUM7QUFBUCxLQVRlO0FBVXZCK0gsU0FBSyxFQUFFO0FBQUNoSSxVQUFJLEVBQUVDO0FBQVA7QUFFUDs7Ozs7Ozs7QUFadUIsR0FBakIsRUFtQlBLLFNBbkJPLEVBRjJDOztBQXNCckRDLEtBQUcsQ0FBQztBQUNBdEUsa0JBREE7QUFFQTtBQUNBaUYsT0FIQTtBQUlBQyxPQUpBO0FBS0FDLE9BTEE7QUFNQXlHLGdCQU5BO0FBT0FDLG1CQVBBO0FBUUFDLFVBUkE7QUFTQUM7QUFFQTs7Ozs7Ozs7QUFYQSxHQUFELEVBa0JEO0FBQ0UsV0FBTyxDQUNIdE8sZUFBZSxDQUFDOEcsTUFBaEIsQ0FBdUI7QUFDbkJ2RSxvQkFBYyxFQUFFQSxjQURHO0FBRW5CMkwsbUJBQWEsRUFBRTFHLEdBQUcsR0FBRyxHQUFOLEdBQVlDLEdBQVosR0FBa0IsR0FBbEIsR0FBd0JDLEdBRnBCO0FBR25CRixTQUFHLEVBQUVBLEdBSGM7QUFJbkJDLFNBQUcsRUFBRUEsR0FKYztBQUtuQkMsU0FBRyxFQUFFQSxHQUxjO0FBTW5CeUcsa0JBQVksRUFBRUEsWUFOSztBQU9uQkMscUJBQWUsRUFBRUEsZUFQRTtBQVFuQkMsWUFBTSxFQUFFQSxNQVJXO0FBU25CQyxXQUFLLEVBQUVBLEtBVFk7QUFVbkJDLHNCQUFnQixFQUFFLEtBVkM7QUFZbkJzTSxvQkFBYyxFQUFFLElBQUk1UyxJQUFKO0FBRWhCOzs7Ozs7O0FBZG1CLEtBQXZCLENBREcsRUFzQkhuSSxNQUFNLENBQUNrSCxNQUFQLENBQWM7QUFDVmlVLFdBQUssRUFBRTVNLE1BREc7QUFFVkwsZUFBUyxFQUFFLEtBRkQ7QUFHVndOLGNBQVEsRUFBRTtBQUhBLEtBQWQsRUFJRTtBQUNFdlUsVUFBSSxFQUFFO0FBQ0YrRyxpQkFBUyxFQUFFLElBRFQ7QUFFRnpMLHNCQUFjLEVBQUVBO0FBRmQ7QUFEUixLQUpGLEVBU0U7QUFDRTRNLFdBQUssRUFBRTtBQURULEtBVEYsQ0F0QkcsQ0FBUDtBQW1DSDs7QUE1RW9ELENBQXBCLENBQTlCO0FBK0VBLE1BQU0ySyxxQkFBcUIsR0FBRyxJQUFJM1QsZUFBSixDQUFvQjtBQUNyREMsTUFBSSxFQUFFLHdCQUQrQztBQUVyREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJnSSxvQkFBZ0IsRUFBRTtBQUFDakksVUFBSSxFQUFFNkI7QUFBUCxLQUZLO0FBR3ZCcUcsV0FBTyxFQUFFO0FBQUNsSSxVQUFJLEVBQUVDO0FBQVAsS0FIYztBQUl2QmtJLFdBQU8sRUFBRTtBQUFDbkksVUFBSSxFQUFFQztBQUFQLEtBSmM7QUFLdkJtSSxXQUFPLEVBQUU7QUFBQ3BJLFVBQUksRUFBRUM7QUFBUCxLQUxjO0FBTXZCO0FBQ0FvSSxpQkFBYSxFQUFFO0FBQUNySSxVQUFJLEVBQUVDO0FBQVAsS0FQUTtBQVF2QnFJLFVBQU0sRUFBRTtBQUFDdEksVUFBSSxFQUFFQyxNQUFQO0FBQWdCOEcsY0FBUSxFQUFFO0FBQTFCO0FBUmUsR0FBakIsRUFTUHpHLFNBVE8sRUFGMkM7O0FBWXJEQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBd0gsb0JBRkE7QUFHQUMsV0FIQTtBQUlBQyxXQUpBO0FBS0FDLFdBTEE7QUFNQTtBQUNBQyxpQkFQQTtBQVFBQztBQVJBLEdBQUQsRUFTRDtBQUNFLFdBQU81TyxlQUFlLENBQUNnSCxNQUFoQixDQUF1QjtBQUN0QjdDLFNBQUcsRUFBRTRDO0FBRGlCLEtBQXZCLEVBRUQ7QUFDRUUsVUFBSSxFQUFDO0FBQ0RzSCx3QkFBZ0IsRUFBRUEsZ0JBRGpCO0FBRURDLGVBQU8sRUFBRUEsT0FGUjtBQUdEQyxlQUFPLEVBQUVBLE9BSFI7QUFJREMsZUFBTyxFQUFFQSxPQUpSO0FBS0RNLHNCQUFjLEVBQUVSLE9BQU8sR0FBRyxHQUFWLEdBQWdCQyxPQUFoQixHQUF5QixHQUF6QixHQUErQkMsT0FMOUM7QUFNREMscUJBQWEsRUFBRUEsYUFOZDtBQU9EQyxjQUFNLEVBQUVBO0FBUFA7QUFEUCxLQUZDLENBQVA7QUFhSDs7QUFuQ29ELENBQXBCLENBQTlCO0FBdUNBLE1BQU1tTCxhQUFhLEdBQUcsSUFBSTVULGVBQUosQ0FBb0I7QUFDN0NDLE1BQUksRUFBRSxnQkFEdUM7QUFFN0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCc0wsTUFBRSxFQUFFO0FBQUNsTCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkI5RSxVQUFNLEVBQUU7QUFBQzZFLFVBQUksRUFBRUM7QUFBUDtBQUZlLEdBQWpCLEVBR1BLLFNBSE8sRUFGbUM7O0FBTTdDQyxLQUFHLENBQUU7QUFDRDJLLE1BREM7QUFFRC9QO0FBRkMsR0FBRixFQUdBO0FBQ0MsV0FBTzFCLFFBQVEsQ0FBQytHLE1BQVQsQ0FBZ0I7QUFDbkIwSyxRQUFFLEVBQUVBLEVBRGU7QUFFbkIvUCxZQUFNLEVBQUVBO0FBRlcsS0FBaEIsQ0FBUDtBQUlIOztBQWQ0QyxDQUFwQixDQUF0QjtBQWlCQSxNQUFNdVksYUFBYSxHQUFHLElBQUk3VCxlQUFKLENBQW9CO0FBQzdDQyxNQUFJLEVBQUUsZ0JBRHVDO0FBRTdDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQLEtBRm1CO0FBR3ZCOUUsVUFBTSxFQUFFO0FBQUM2RSxVQUFJLEVBQUVDO0FBQVA7QUFIZSxHQUFqQixFQUlQSyxTQUpPLEVBRm1DOztBQU83Q0MsS0FBRyxDQUFFO0FBQ0RFLE1BREM7QUFFRHlLLE1BRkM7QUFHRC9QO0FBSEMsR0FBRixFQUlBO0FBQ0MsV0FBTzFCLFFBQVEsQ0FBQ2lILE1BQVQsQ0FBZ0I7QUFDbkI3QyxTQUFHLEVBQUU0QztBQURjLEtBQWhCLEVBRUw7QUFDRUUsVUFBSSxFQUFFO0FBQ0Z1SyxVQUFFLEVBQUVBLEVBREY7QUFFRi9QLGNBQU0sRUFBRUE7QUFGTjtBQURSLEtBRkssQ0FBUDtBQVFIOztBQXBCNEMsQ0FBcEIsQ0FBdEI7QUEwQkEsTUFBTXdZLFdBQVcsR0FBRyxJQUFJOVQsZUFBSixDQUFvQjtBQUMzQ0MsTUFBSSxFQUFFLGNBRHFDO0FBRTNDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QjFELGdCQUFZLEVBQUU7QUFBQzhELFVBQUksRUFBRUM7QUFBUCxLQURTO0FBRXZCb1YsWUFBUSxFQUFFO0FBQUNyVixVQUFJLEVBQUVDO0FBQVA7QUFGYSxHQUFqQixFQUdQSyxTQUhPLEVBRmlDOztBQU0zQ0MsS0FBRyxDQUFFO0FBQUNyRSxnQkFBRDtBQUFlbVo7QUFBZixHQUFGLEVBQTZCO0FBQzVCLFdBQU8xYSxNQUFNLENBQUM2RixNQUFQLENBQWM7QUFDakJ0RSxrQkFBWSxFQUFFQSxZQURHO0FBRWpCbVosY0FBUSxFQUFFQTtBQUZPLEtBQWQsQ0FBUDtBQUlIOztBQVgwQyxDQUFwQixDQUFwQjtBQWNBLE1BQU16QixXQUFXLEdBQUcsSUFBSS9ULGVBQUosQ0FBb0I7QUFDM0NDLE1BQUksRUFBRSxjQURxQztBQUUzQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkIvRCxnQkFBWSxFQUFFO0FBQUM4RCxVQUFJLEVBQUVDO0FBQVAsS0FGUztBQUd2Qm9WLFlBQVEsRUFBRTtBQUFDclYsVUFBSSxFQUFFQztBQUFQO0FBSGEsR0FBakIsRUFJUEssU0FKTyxFQUZpQzs7QUFPM0NDLEtBQUcsQ0FBRTtBQUFDRSxNQUFEO0FBQUt2RSxnQkFBTDtBQUFtQm1aO0FBQW5CLEdBQUYsRUFBaUM7QUFDaEMsV0FBTzFhLE1BQU0sQ0FBQytGLE1BQVAsQ0FBYztBQUNqQjdDLFNBQUcsRUFBQzRDO0FBRGEsS0FBZCxFQUVMO0FBQ0VFLFVBQUksRUFBQztBQUNEekUsb0JBQVksRUFBRUEsWUFEYjtBQUVEbVosZ0JBQVEsRUFBRUE7QUFGVDtBQURQLEtBRkssQ0FBUDtBQVFIOztBQWhCMEMsQ0FBcEIsQ0FBcEI7QUFtQkEsTUFBTXhCLFdBQVcsR0FBRyxJQUFJaFUsZUFBSixDQUFvQjtBQUMzQ0MsTUFBSSxFQUFFLGNBRHFDO0FBRTNDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUDtBQURtQixHQUFqQixFQUVQSyxTQUZPLEVBRmlDOztBQUszQ0MsS0FBRyxDQUFFO0FBQUNFO0FBQUQsR0FBRixFQUFRO0FBQ1AsV0FBTzlGLE1BQU0sQ0FBQ2lHLE1BQVAsQ0FBYztBQUNqQi9DLFNBQUcsRUFBRTRDO0FBRFksS0FBZCxDQUFQO0FBR0g7O0FBVDBDLENBQXBCLENBQXBCLEM7Ozs7Ozs7Ozs7O0FDdmhCUGxJLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUFDMFksY0FBWSxFQUFDLE1BQUlBLFlBQWxCO0FBQStCQyxjQUFZLEVBQUMsTUFBSUEsWUFBaEQ7QUFBNkRDLGdCQUFjLEVBQUMsTUFBSUEsY0FBaEY7QUFBK0ZDLGNBQVksRUFBQyxNQUFJQSxZQUFoSDtBQUE2SEMsaUJBQWUsRUFBQyxNQUFJQTtBQUFqSixDQUFkO0FBQWlMLElBQUlwZCxNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlrSCxjQUFKO0FBQW1CcEgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ21ILGdCQUFjLENBQUNsSCxDQUFELEVBQUc7QUFBQ2tILGtCQUFjLEdBQUNsSCxDQUFmO0FBQWlCOztBQUFwQyxDQUExQyxFQUFnRixDQUFoRjtBQUFtRixJQUFJbUgsWUFBSjtBQUFpQnJILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNvSCxjQUFZLENBQUNuSCxDQUFELEVBQUc7QUFBQ21ILGdCQUFZLEdBQUNuSCxDQUFiO0FBQWU7O0FBQWhDLENBQTFDLEVBQTRFLENBQTVFO0FBQStFLElBQUlPLE9BQUo7QUFBWVQsTUFBTSxDQUFDQyxJQUFQLENBQVksa0JBQVosRUFBK0I7QUFBQ1EsU0FBTyxDQUFDUCxDQUFELEVBQUc7QUFBQ08sV0FBTyxHQUFDUCxDQUFSO0FBQVU7O0FBQXRCLENBQS9CLEVBQXVELENBQXZEO0FBSzViLE1BQU02YyxZQUFZLEdBQUcsSUFBSXpWLGVBQUosQ0FBb0I7QUFDNUNDLE1BQUksRUFBRSxlQURzQztBQUU1Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJrSCxVQUFNLEVBQUU7QUFBQzlHLFVBQUksRUFBRUM7QUFBUCxLQURlO0FBRXZCNEcsZUFBVyxFQUFFO0FBQUM3RyxVQUFJLEVBQUVDO0FBQVAsS0FGVTtBQUd2QjBWLFlBQVEsRUFBRTtBQUFDM1YsVUFBSSxFQUFFNkI7QUFBUDtBQUhhLEdBQWpCLEVBSVB2QixTQUpPLEVBRmtDOztBQU81Q0MsS0FBRyxDQUFFO0FBQ0R1RyxVQURDO0FBRURELGVBRkM7QUFHRDhPO0FBSEMsR0FBRixFQUlBO0FBQ0MsV0FBTzNjLE9BQU8sQ0FBQ3dILE1BQVIsQ0FBZTtBQUNsQnNHLFlBQU0sRUFBRUEsTUFEVTtBQUVsQkQsaUJBQVcsRUFBRUEsV0FGSztBQUdsQjhPLGNBQVEsRUFBRUE7QUFIUSxLQUFmLENBQVA7QUFLSDs7QUFqQjJDLENBQXBCLENBQXJCO0FBb0JBLE1BQU1KLFlBQVksR0FBRyxJQUFJMVYsZUFBSixDQUFvQjtBQUM1Q0MsTUFBSSxFQUFFLGVBRHNDO0FBRTVDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QjZHLFVBQU0sRUFBRTtBQUFDOUcsVUFBSSxFQUFFQztBQUFQLEtBRmU7QUFHdkI0RyxlQUFXLEVBQUU7QUFBQzdHLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBSXZCMFYsWUFBUSxFQUFFO0FBQUMzVixVQUFJLEVBQUU2QjtBQUFQO0FBSmEsR0FBakIsRUFLUHZCLFNBTE8sRUFGa0M7O0FBUTVDQyxLQUFHLENBQUU7QUFDREUsTUFEQztBQUVEcUcsVUFGQztBQUdERCxlQUhDO0FBSUQ4TztBQUpDLEdBQUYsRUFLQTtBQUNDLFdBQU8zYyxPQUFPLENBQUMwSCxNQUFSLENBQWU7QUFDZDdDLFNBQUcsRUFBRTRDO0FBRFMsS0FBZixFQUVEO0FBQ0VFLFVBQUksRUFBQztBQUNEbUcsY0FBTSxFQUFFQSxNQURQO0FBRURELG1CQUFXLEVBQUVBLFdBRlo7QUFHRDhPLGdCQUFRLEVBQUVBO0FBSFQ7QUFEUCxLQUZDLENBQVA7QUFTSDs7QUF2QjJDLENBQXBCLENBQXJCO0FBMEJBLE1BQU1ILGNBQWMsR0FBRyxJQUFJM1YsZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJnVyxRQUFJLEVBQUU7QUFBQzVWLFVBQUksRUFBRUM7QUFBUCxLQURpQjtBQUV2QmlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQLEtBRm1CO0FBR3ZCNFYsVUFBTSxFQUFFO0FBQUM3VixVQUFJLEVBQUVDO0FBQVAsS0FIZTtBQUl2QjlFLFVBQU0sRUFBRTtBQUFDNkUsVUFBSSxFQUFFQztBQUFQLEtBSmU7QUFLdkI2VixVQUFNLEVBQUU7QUFBQzlWLFVBQUksRUFBRUM7QUFBUDtBQUxlLEdBQWpCLEVBTVBLLFNBTk8sRUFGb0M7O0FBUzlDQyxLQUFHLENBQUU7QUFBQ3FWLFFBQUQ7QUFBTzFLLE1BQVA7QUFBVzJLLFVBQVg7QUFBbUIxYSxVQUFuQjtBQUEyQjJhO0FBQTNCLEdBQUYsRUFBc0M7QUFDckMsV0FBTzljLE9BQU8sQ0FBQzBILE1BQVIsQ0FBZTtBQUNka1YsVUFBSSxFQUFFQTtBQURRLEtBQWYsRUFFRDtBQUNFalYsVUFBSSxFQUFDO0FBQ0R1SyxVQUFFLEVBQUVBLEVBREg7QUFFRDJLLGNBQU0sRUFBRUEsTUFGUDtBQUdEMWEsY0FBTSxFQUFFQSxNQUhQO0FBSUQyYSxjQUFNLEVBQUVBO0FBSlA7QUFEUCxLQUZDLENBQVA7QUFVSDs7QUFwQjZDLENBQXBCLENBQXZCO0FBc0JBLE1BQU1MLFlBQVksR0FBRyxJQUFJNVYsZUFBSixDQUFvQjtBQUM1Q0MsTUFBSSxFQUFFLGVBRHNDO0FBRTVDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmdXLFFBQUksRUFBRTtBQUFDNVYsVUFBSSxFQUFFQztBQUFQO0FBRGlCLEdBQWpCLEVBRVBLLFNBRk8sRUFGa0M7O0FBSzVDQyxLQUFHLENBQUU7QUFBQ3FWO0FBQUQsR0FBRixFQUFVO0FBQ1QsV0FBTzVjLE9BQU8sQ0FBQzRILE1BQVIsQ0FBZTtBQUFDZ1YsVUFBSSxFQUFFQTtBQUFQLEtBQWYsQ0FBUDtBQUNDOztBQVB1QyxDQUFwQixDQUFyQjtBQVVBLE1BQU1GLGVBQWUsR0FBRyxJQUFJN1YsZUFBSixDQUFvQjtBQUMvQ0MsTUFBSSxFQUFFLGtCQUR5QztBQUUvQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJ2RSxnQkFBWSxFQUFFO0FBQUNzRSxVQUFJLEVBQUVDO0FBQVA7QUFGUyxHQUFqQixFQUdQSyxTQUhPLEVBRnFDOztBQU0vQ0MsS0FBRyxDQUFFO0FBQUNFLE1BQUQ7QUFBSy9FO0FBQUwsR0FBRixFQUFzQjtBQUNyQixXQUFPMUMsT0FBTyxDQUFDMEgsTUFBUixDQUFlO0FBQ2Q3QyxTQUFHLEVBQUU0QztBQURTLEtBQWYsRUFFRDtBQUNFRSxVQUFJLEVBQUM7QUFDRGpGLG9CQUFZLEVBQUVBO0FBRGI7QUFEUCxLQUZDLENBQVA7QUFPSDs7QUFkOEMsQ0FBcEIsQ0FBeEIsQzs7Ozs7Ozs7Ozs7QUNuRlBuRCxNQUFNLENBQUNxRSxNQUFQLENBQWM7QUFBQ21aLGdCQUFjLEVBQUMsTUFBSUEsY0FBcEI7QUFBbUNDLGdCQUFjLEVBQUMsTUFBSUEsY0FBdEQ7QUFBcUVDLGdCQUFjLEVBQUMsTUFBSUEsY0FBeEY7QUFBdUdDLGVBQWEsRUFBQyxNQUFJQSxhQUF6SDtBQUF1SUMsZUFBYSxFQUFDLE1BQUlBO0FBQXpKLENBQWQ7QUFBdUwsSUFBSTdkLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSWtILGNBQUo7QUFBbUJwSCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDbUgsZ0JBQWMsQ0FBQ2xILENBQUQsRUFBRztBQUFDa0gsa0JBQWMsR0FBQ2xILENBQWY7QUFBaUI7O0FBQXBDLENBQTFDLEVBQWdGLENBQWhGO0FBQW1GLElBQUltSCxZQUFKO0FBQWlCckgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ29ILGNBQVksQ0FBQ25ILENBQUQsRUFBRztBQUFDbUgsZ0JBQVksR0FBQ25ILENBQWI7QUFBZTs7QUFBaEMsQ0FBMUMsRUFBNEUsQ0FBNUU7QUFBK0UsSUFBSVEsU0FBSjtBQUFjVixNQUFNLENBQUNDLElBQVAsQ0FBWSxrQkFBWixFQUErQjtBQUFDUyxXQUFTLENBQUNSLENBQUQsRUFBRztBQUFDUSxhQUFTLEdBQUNSLENBQVY7QUFBWTs7QUFBMUIsQ0FBL0IsRUFBMkQsQ0FBM0Q7QUFLcGMsTUFBTXNkLGNBQWMsR0FBRyxJQUFJbFcsZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGtCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJ3VyxpQkFBYSxFQUFFO0FBQUNwVyxVQUFJLEVBQUVDO0FBQVAsS0FEUTtBQUV2QlosYUFBUyxFQUFFO0FBQUNXLFVBQUksRUFBRTZCO0FBQVAsS0FGWTtBQUd2QjFGLG9CQUFnQixFQUFFO0FBQUM2RCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQUhLO0FBSXZCbUUsTUFBRSxFQUFFO0FBQUNsTCxVQUFJLEVBQUVDO0FBQVAsS0FKbUI7QUFLdkI5RSxVQUFNLEVBQUU7QUFBQzZFLFVBQUksRUFBRUM7QUFBUCxLQUxlO0FBTXZCN0UsY0FBVSxFQUFFO0FBQUM0RSxVQUFJLEVBQUVDO0FBQVAsS0FOVztBQU92QjVFLGNBQVUsRUFBRTtBQUFDMkUsVUFBSSxFQUFFQztBQUFQLEtBUFc7QUFRdkJvVyxjQUFVLEVBQUU7QUFBQ3JXLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBUlc7QUFTdkJzRSxRQUFJLEVBQUU7QUFBQ3JMLFVBQUksRUFBRUM7QUFBUCxLQVRpQjtBQVV2QjhSLGFBQVMsRUFBRTtBQUFDL1IsVUFBSSxFQUFFQztBQUFQLEtBVlk7QUFXdkJxVyxtQkFBZSxFQUFFO0FBQUN0VyxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQVhNO0FBWXZCd1AsYUFBUyxFQUFFO0FBQUN2VyxVQUFJLEVBQUVDO0FBQVAsS0FaWTtBQWF2Qm9ILGFBQVMsRUFBRTtBQUFDckgsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FiWTtBQWN2QnlQLFFBQUksRUFBRTtBQUFDeFcsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FkaUI7QUFldkIxSyxhQUFTLEVBQUU7QUFBQzJELFVBQUksRUFBRTJCO0FBQVAsS0FmWTtBQWdCdkJrRCxrQkFBYyxFQUFFO0FBQUM3RSxVQUFJLEVBQUVDO0FBQVAsS0FoQk87QUFpQnZCd1csaUJBQWEsRUFBRTtBQUFDelcsVUFBSSxFQUFFLENBQUN3QixNQUFELENBQVA7QUFBaUJ1RixjQUFRLEVBQUU7QUFBM0IsS0FqQlE7QUFrQnZCLGlDQUE2QjtBQUFDL0csVUFBSSxFQUFFMkI7QUFBUCxLQWxCTjtBQW1CdkIsa0NBQThCO0FBQUMzQixVQUFJLEVBQUVDO0FBQVAsS0FuQlA7QUFvQnZCLG9DQUFnQztBQUFDRCxVQUFJLEVBQUVDO0FBQVAsS0FwQlQ7QUFxQnZCLHVDQUFtQztBQUFDRCxVQUFJLEVBQUVDO0FBQVA7QUFyQlosR0FBakIsRUFzQlBLLFNBdEJPLEVBRm9DOztBQXlCOUNDLEtBQUcsQ0FBRTtBQUNENlYsaUJBREM7QUFFRC9XLGFBRkM7QUFHRGxELG9CQUhDO0FBSUQrTyxNQUpDO0FBS0QvUCxVQUxDO0FBTURDLGNBTkM7QUFPREMsY0FQQztBQVFEZ2IsY0FSQztBQVNEaEwsUUFUQztBQVVEMEcsYUFWQztBQVdEdUUsbUJBWEM7QUFZREMsYUFaQztBQWFEbFAsYUFiQztBQWNEbVAsUUFkQztBQWVEbmEsYUFmQztBQWdCRHdJLGtCQWhCQztBQWlCRDRSO0FBakJDLEdBQUYsRUFrQkE7QUFDQyxXQUFPeGQsU0FBUyxDQUFDdUgsTUFBVixDQUFpQjtBQUNwQjRWLG1CQUFhLEVBQUVBLGFBREs7QUFFcEIvVyxlQUFTLEVBQUVBLFNBRlM7QUFHcEJsRCxzQkFBZ0IsRUFBRUEsZ0JBSEU7QUFJcEIrTyxRQUFFLEVBQUVBLEVBSmdCO0FBS3BCL1AsWUFBTSxFQUFFQSxNQUxZO0FBTXBCQyxnQkFBVSxFQUFFQSxVQU5RO0FBT3BCQyxnQkFBVSxFQUFFQSxVQVBRO0FBUXBCZ2IsZ0JBQVUsRUFBRUEsVUFSUTtBQVNwQmhMLFVBQUksRUFBRUEsSUFUYztBQVVwQjBHLGVBQVMsRUFBRUEsU0FWUztBQVdwQnVFLHFCQUFlLEVBQUVBLGVBWEc7QUFZcEJDLGVBQVMsRUFBRUEsU0FaUztBQWFwQmxQLGVBQVMsRUFBRUEsU0FiUztBQWNwQm1QLFVBQUksRUFBRUEsSUFkYztBQWVwQkMsbUJBQWEsRUFBRUE7QUFmSyxLQUFqQixDQUFQO0FBaUJIOztBQTdENkMsQ0FBcEIsQ0FBdkI7QUFnSkEsTUFBTVQsY0FBYyxHQUFHLElBQUluVyxlQUFKLENBQW9CO0FBQzlDQyxNQUFJLEVBQUUsa0JBRHdDO0FBRTlDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2Qm1XLGlCQUFhLEVBQUU7QUFBQ3BXLFVBQUksRUFBRUM7QUFBUCxLQUZRO0FBR3ZCWixhQUFTLEVBQUU7QUFBQ1csVUFBSSxFQUFFNkI7QUFBUCxLQUhZO0FBSXZCNlUsbUJBQWUsRUFBRTtBQUFDMVcsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FKTTtBQUt2QjVLLG9CQUFnQixFQUFFO0FBQUM2RCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQUxLO0FBTXZCbUUsTUFBRSxFQUFFO0FBQUNsTCxVQUFJLEVBQUVDO0FBQVAsS0FObUI7QUFPdkI5RSxVQUFNLEVBQUU7QUFBQzZFLFVBQUksRUFBRUM7QUFBUCxLQVBlO0FBUXZCN0UsY0FBVSxFQUFFO0FBQUM0RSxVQUFJLEVBQUVDO0FBQVAsS0FSVztBQVN2QjVFLGNBQVUsRUFBRTtBQUFDMkUsVUFBSSxFQUFFQztBQUFQLEtBVFc7QUFVdkJvTCxRQUFJLEVBQUU7QUFBQ3JMLFVBQUksRUFBRUM7QUFBUCxLQVZpQjtBQVd2QjhSLGFBQVMsRUFBRTtBQUFDL1IsVUFBSSxFQUFFQztBQUFQLEtBWFk7QUFZdkJxVyxtQkFBZSxFQUFFO0FBQUN0VyxVQUFJLEVBQUVDO0FBQVAsS0FaTTtBQWF2QnNXLGFBQVMsRUFBRTtBQUFDdlcsVUFBSSxFQUFFQztBQUFQLEtBYlk7QUFjdkJvSCxhQUFTLEVBQUU7QUFBQ3JILFVBQUksRUFBRUM7QUFBUCxLQWRZO0FBZXZCdVcsUUFBSSxFQUFFO0FBQUN4VyxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQWZpQjtBQWdCdkJzUCxjQUFVLEVBQUU7QUFBQ3JXLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCO0FBaEJXLEdBQWpCLEVBaUJQekcsU0FqQk8sRUFGb0M7O0FBb0I5Q0MsS0FBRyxDQUFFO0FBQ0RFLE1BREM7QUFFRDJWLGlCQUZDO0FBR0QvVyxhQUhDO0FBSURxWCxtQkFKQztBQUtEdmEsb0JBTEM7QUFNRCtPLE1BTkM7QUFPRC9QLFVBUEM7QUFRREMsY0FSQztBQVNEQyxjQVRDO0FBVURnUSxRQVZDO0FBV0QwRyxhQVhDO0FBWUR1RSxtQkFaQztBQWFEQyxhQWJDO0FBY0RsUCxhQWRDO0FBZURtUCxRQWZDO0FBZ0JESDtBQWhCQyxHQUFGLEVBaUJBO0FBQ0MsV0FBTyxDQUNIcGQsU0FBUyxDQUFDeUgsTUFBVixDQUFpQjtBQUNiN0MsU0FBRyxFQUFFNEM7QUFEUSxLQUFqQixFQUVFO0FBQ0VFLFVBQUksRUFBQztBQUNEeVYscUJBQWEsRUFBRUEsYUFEZDtBQUVEL1csaUJBQVMsRUFBRUEsU0FGVjtBQUdEbEQsd0JBQWdCLEVBQUVBLGdCQUhqQjtBQUlEK08sVUFBRSxFQUFFQSxFQUpIO0FBS0QvUCxjQUFNLEVBQUVBLE1BTFA7QUFNREMsa0JBQVUsRUFBRUEsVUFOWDtBQU9EQyxrQkFBVSxFQUFFQSxVQVBYO0FBUURnUSxZQUFJLEVBQUVBLElBUkw7QUFTRDBHLGlCQUFTLEVBQUVBLFNBVFY7QUFVRHVFLHVCQUFlLEVBQUVBLGVBVmhCO0FBV0RDLGlCQUFTLEVBQUVBLFNBWFY7QUFZRGxQLGlCQUFTLEVBQUVBLFNBWlY7QUFhRG1QLFlBQUksRUFBRUEsSUFiTDtBQWNESCxrQkFBVSxFQUFFQTtBQWRYO0FBRFAsS0FGRixDQURHLEVBcUJIcGQsU0FBUyxDQUFDeUgsTUFBVixDQUFpQjtBQUNidkUsc0JBQWdCLEVBQUV1YTtBQURMLEtBQWpCLEVBRUU7QUFDRS9WLFVBQUksRUFBQztBQUNEeEUsd0JBQWdCLEVBQUVBLGdCQURqQjtBQUVEb2EsaUJBQVMsRUFBRUEsU0FGVjtBQUdEbFAsaUJBQVMsRUFBRUE7QUFIVjtBQURQLEtBRkYsRUFTQTtBQUNJd0IsV0FBSyxFQUFDO0FBRFYsS0FUQSxDQXJCRyxDQUFQO0FBa0NIOztBQXhFNkMsQ0FBcEIsQ0FBdkI7QUEyRUEsTUFBTW9OLGNBQWMsR0FBRyxJQUFJcFcsZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJtVyxpQkFBYSxFQUFFO0FBQUNwVyxVQUFJLEVBQUVDO0FBQVAsS0FGUTtBQUd2QlosYUFBUyxFQUFFO0FBQUNXLFVBQUksRUFBRTZCO0FBQVAsS0FIWTtBQUl2QjtBQUNBMUYsb0JBQWdCLEVBQUU7QUFBQzZELFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBTEs7QUFNdkJtRSxNQUFFLEVBQUU7QUFBQ2xMLFVBQUksRUFBRUM7QUFBUCxLQU5tQjtBQU92QjlFLFVBQU0sRUFBRTtBQUFDNkUsVUFBSSxFQUFFQztBQUFQLEtBUGU7QUFRdkI3RSxjQUFVLEVBQUU7QUFBQzRFLFVBQUksRUFBRUM7QUFBUCxLQVJXO0FBU3ZCNUUsY0FBVSxFQUFFO0FBQUMyRSxVQUFJLEVBQUVDO0FBQVAsS0FUVztBQVV2Qm9MLFFBQUksRUFBRTtBQUFDckwsVUFBSSxFQUFFQztBQUFQLEtBVmlCO0FBV3ZCOFIsYUFBUyxFQUFFO0FBQUMvUixVQUFJLEVBQUVDO0FBQVAsS0FYWTtBQVl2QnFXLG1CQUFlLEVBQUU7QUFBQ3RXLFVBQUksRUFBRUM7QUFBUCxLQVpNO0FBYXZCc1csYUFBUyxFQUFFO0FBQUN2VyxVQUFJLEVBQUVDO0FBQVAsS0FiWTtBQWN2Qm9ILGFBQVMsRUFBRTtBQUFDckgsVUFBSSxFQUFFQztBQUFQLEtBZFk7QUFldkJ1VyxRQUFJLEVBQUU7QUFBQ3hXLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBZmlCO0FBZ0J2QnNQLGNBQVUsRUFBRTtBQUFDclcsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FoQlc7QUFpQnZCNFAsYUFBUyxFQUFFO0FBQUMzVyxVQUFJLEVBQUUyQjtBQUFQLEtBakJZO0FBa0J2QmlWLGNBQVUsRUFBRTtBQUFDNVcsVUFBSSxFQUFFQztBQUFQLEtBbEJXO0FBbUJ2QjRXLGdCQUFZLEVBQUU7QUFBQzdXLFVBQUksRUFBRUM7QUFBUCxLQW5CUztBQW9CdkI2VyxtQkFBZSxFQUFFO0FBQUM5VyxVQUFJLEVBQUVDO0FBQVA7QUFwQk0sR0FBakIsRUFxQlBLLFNBckJPLEVBRm9DOztBQXdCOUNDLEtBQUcsQ0FBRTtBQUNERSxNQURDO0FBRUQyVixpQkFGQztBQUdEL1csYUFIQztBQUlEcVgsbUJBSkM7QUFLRHZhLG9CQUxDO0FBTUQrTyxNQU5DO0FBT0QvUCxVQVBDO0FBUURDLGNBUkM7QUFTREMsY0FUQztBQVVEZ1EsUUFWQztBQVdEMEcsYUFYQztBQVlEdUUsbUJBWkM7QUFhREMsYUFiQztBQWNEbFAsYUFkQztBQWVEbVAsUUFmQztBQWdCREgsY0FoQkM7QUFpQkRNLGFBakJDO0FBa0JEQyxjQWxCQztBQW1CREMsZ0JBbkJDO0FBb0JEQztBQXBCQyxHQUFGLEVBcUJBO0FBQ0MsV0FBTyxDQUNIN2QsU0FBUyxDQUFDeUgsTUFBVixDQUFpQjtBQUNiN0MsU0FBRyxFQUFFNEM7QUFEUSxLQUFqQixFQUVFO0FBQ0VFLFVBQUksRUFBQztBQUNEeVYscUJBQWEsRUFBRUEsYUFEZDtBQUVEL1csaUJBQVMsRUFBRUEsU0FGVjtBQUdEbEQsd0JBQWdCLEVBQUVBLGdCQUhqQjtBQUlEK08sVUFBRSxFQUFFQSxFQUpIO0FBS0QvUCxjQUFNLEVBQUVBLE1BTFA7QUFNREMsa0JBQVUsRUFBRUEsVUFOWDtBQU9EQyxrQkFBVSxFQUFFQSxVQVBYO0FBUURnUSxZQUFJLEVBQUVBLElBUkw7QUFTRDBHLGlCQUFTLEVBQUVBLFNBVFY7QUFVRHVFLHVCQUFlLEVBQUVBLGVBVmhCO0FBV0RDLGlCQUFTLEVBQUVBLFNBWFY7QUFZRGxQLGlCQUFTLEVBQUVBLFNBWlY7QUFhRG1QLFlBQUksRUFBRUEsSUFiTDtBQWNESDtBQWRDO0FBRFAsS0FGRixDQURHLEVBcUJIcGQsU0FBUyxDQUFDeUgsTUFBVixDQUFpQjtBQUNiN0MsU0FBRyxFQUFFNEM7QUFEUSxLQUFqQixFQUVFO0FBQ0V5TSxXQUFLLEVBQUM7QUFDRnVKLHFCQUFhLEVBQUU7QUFDWEUsbUJBQVMsRUFBRUEsU0FEQTtBQUVYQyxvQkFBVSxFQUFFQSxVQUZEO0FBR1hDLHNCQUFZLEVBQUVBLFlBSEg7QUFJWEMseUJBQWUsRUFBRUE7QUFKTjtBQURiO0FBRFIsS0FGRixDQXJCRyxDQUFQO0FBa0NIOztBQWhGNkMsQ0FBcEIsQ0FBdkI7QUFtRkEsTUFBTVosYUFBYSxHQUFHLElBQUlyVyxlQUFKLENBQW9CO0FBQzdDQyxNQUFJLEVBQUUsZ0JBRHVDO0FBRTdDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QjBXLGFBQVMsRUFBRTtBQUFDM1csVUFBSSxFQUFFMkI7QUFBUCxLQUZZO0FBR3ZCaVYsY0FBVSxFQUFFO0FBQUM1VyxVQUFJLEVBQUVDO0FBQVAsS0FIVztBQUl2QjRXLGdCQUFZLEVBQUU7QUFBQzdXLFVBQUksRUFBRUM7QUFBUCxLQUpTO0FBS3ZCNlcsbUJBQWUsRUFBRTtBQUFDOVcsVUFBSSxFQUFFQztBQUFQO0FBTE0sR0FBakIsRUFNUEssU0FOTyxFQUZtQzs7QUFTN0NDLEtBQUcsQ0FBRTtBQUNERSxNQURDO0FBRURrVyxhQUZDO0FBR0RDLGNBSEM7QUFJREMsZ0JBSkM7QUFLREM7QUFMQyxHQUFGLEVBTUE7QUFDQyxXQUFPLENBQ0g3ZCxTQUFTLENBQUN5SCxNQUFWLENBQWlCO0FBQ2I3QyxTQUFHLEVBQUU0QztBQURRLEtBQWpCLEVBRUU7QUFDRUUsVUFBSSxFQUFDO0FBQ0R5VixxQkFBYSxFQUFFLFlBRGQ7QUFFRC9XLGlCQUFTLEVBQUUsS0FGVjtBQUdEbEQsd0JBQWdCLEVBQUUsRUFIakI7QUFJRGthLGtCQUFVLEVBQUUsRUFKWDtBQUtEaFAsaUJBQVMsRUFBRTtBQUxWO0FBRFAsS0FGRixDQURHLEVBWUhwTyxTQUFTLENBQUN5SCxNQUFWLENBQWlCO0FBQ2I3QyxTQUFHLEVBQUU0QztBQURRLEtBQWpCLEVBRUU7QUFDRXlNLFdBQUssRUFBQztBQUNGdUoscUJBQWEsRUFBRTtBQUNYRSxtQkFBUyxFQUFFQSxTQURBO0FBRVhDLG9CQUFVLEVBQUVBLFVBRkQ7QUFHWEMsc0JBQVksRUFBRUEsWUFISDtBQUlYQyx5QkFBZSxFQUFFQTtBQUpOO0FBRGI7QUFEUixLQUZGLENBWkcsQ0FBUDtBQXlCSDs7QUF6QzRDLENBQXBCLENBQXRCO0FBZ0RBLE1BQU1YLGFBQWEsR0FBRyxJQUFJdFcsZUFBSixDQUFvQjtBQUM3Q0MsTUFBSSxFQUFFLGdCQUR1QztBQUU3Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkI5RCxvQkFBZ0IsRUFBRTtBQUFDNkQsVUFBSSxFQUFFQztBQUFQLEtBRks7QUFHdkIwVyxhQUFTLEVBQUU7QUFBQzNXLFVBQUksRUFBRTJCO0FBQVAsS0FIWTtBQUl2QmlWLGNBQVUsRUFBRTtBQUFDNVcsVUFBSSxFQUFFQztBQUFQLEtBSlc7QUFLdkI0VyxnQkFBWSxFQUFFO0FBQUM3VyxVQUFJLEVBQUVDO0FBQVAsS0FMUztBQU12QjZXLG1CQUFlLEVBQUU7QUFBQzlXLFVBQUksRUFBRUM7QUFBUDtBQU5NLEdBQWpCLEVBT1BLLFNBUE8sRUFGbUM7O0FBVTdDQyxLQUFHLENBQUU7QUFDREUsTUFEQztBQUVEdEUsb0JBRkM7QUFHRHdhLGFBSEM7QUFJREMsY0FKQztBQUtEQyxnQkFMQztBQU1EQztBQU5DLEdBQUYsRUFPQTtBQUNDLFdBQU8sQ0FDSDdkLFNBQVMsQ0FBQ3lILE1BQVYsQ0FBaUI7QUFDYjdDLFNBQUcsRUFBRTRDO0FBRFEsS0FBakIsRUFFRTtBQUNFRSxVQUFJLEVBQUM7QUFDRHlWLHFCQUFhLEVBQUUsWUFEZDtBQUVEL1csaUJBQVMsRUFBRSxLQUZWO0FBR0RsRCx3QkFBZ0IsRUFBRSxFQUhqQjtBQUlEa0wsaUJBQVMsRUFBRTtBQUpWO0FBRFAsS0FGRixDQURHLEVBV0hwTyxTQUFTLENBQUN5SCxNQUFWLENBQWlCO0FBQ2I3QyxTQUFHLEVBQUU0QztBQURRLEtBQWpCLEVBRUU7QUFDRXlNLFdBQUssRUFBQztBQUNGdUoscUJBQWEsRUFBRTtBQUNYRSxtQkFBUyxFQUFFQSxTQURBO0FBRVhDLG9CQUFVLEVBQUVBLFVBRkQ7QUFHWEMsc0JBQVksRUFBRUEsWUFISDtBQUlYQyx5QkFBZSxFQUFFQTtBQUpOO0FBRGI7QUFEUixLQUZGLENBWEcsRUF1Qkg3ZCxTQUFTLENBQUN5SCxNQUFWLENBQWlCO0FBQ2J2RSxzQkFBZ0IsRUFBRUE7QUFETCxLQUFqQixFQUVFO0FBQ0UrUSxXQUFLLEVBQUM7QUFDRnVKLHFCQUFhLEVBQUU7QUFDWEUsbUJBQVMsRUFBRUEsU0FEQTtBQUVYQyxvQkFBVSxFQUFFQSxVQUZEO0FBR1hDLHNCQUFZLEVBQUUsNkRBSEg7QUFJWEMseUJBQWUsRUFBRUE7QUFKTjtBQURiO0FBRFIsS0FGRixFQVdFO0FBQ0VqTyxXQUFLLEVBQUM7QUFEUixLQVhGLENBdkJHLEVBcUNINVAsU0FBUyxDQUFDeUgsTUFBVixDQUFpQjtBQUNidkUsc0JBQWdCLEVBQUVBO0FBREwsS0FBakIsRUFFRTtBQUNFd0UsVUFBSSxFQUFDO0FBQ0R5VixxQkFBYSxFQUFFLFlBRGQ7QUFFRC9XLGlCQUFTLEVBQUUsS0FGVjtBQUdEbEQsd0JBQWdCLEVBQUUsRUFIakI7QUFJRGtMLGlCQUFTLEVBQUU7QUFKVjtBQURQLEtBRkYsRUFTRTtBQUNFd0IsV0FBSyxFQUFDO0FBRFIsS0FURixDQXJDRyxDQUFQO0FBa0RIOztBQXBFNEMsQ0FBcEIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7QUNuV1B0USxNQUFNLENBQUNxRSxNQUFQLENBQWM7QUFBQ21hLGtCQUFnQixFQUFDLE1BQUlBLGdCQUF0QjtBQUF1Q0Msa0JBQWdCLEVBQUMsTUFBSUEsZ0JBQTVEO0FBQTZFQyxrQkFBZ0IsRUFBQyxNQUFJQTtBQUFsRyxDQUFkO0FBQW1JLElBQUkzZSxNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlrSCxjQUFKO0FBQW1CcEgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ21ILGdCQUFjLENBQUNsSCxDQUFELEVBQUc7QUFBQ2tILGtCQUFjLEdBQUNsSCxDQUFmO0FBQWlCOztBQUFwQyxDQUExQyxFQUFnRixDQUFoRjtBQUFtRixJQUFJbUgsWUFBSjtBQUFpQnJILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNvSCxjQUFZLENBQUNuSCxDQUFELEVBQUc7QUFBQ21ILGdCQUFZLEdBQUNuSCxDQUFiO0FBQWU7O0FBQWhDLENBQTFDLEVBQTRFLENBQTVFO0FBQStFLElBQUk2QixXQUFKO0FBQWdCL0IsTUFBTSxDQUFDQyxJQUFQLENBQVksa0JBQVosRUFBK0I7QUFBQzhCLGFBQVcsQ0FBQzdCLENBQUQsRUFBRztBQUFDNkIsZUFBVyxHQUFDN0IsQ0FBWjtBQUFjOztBQUE5QixDQUEvQixFQUErRCxDQUEvRDtBQUtsWixNQUFNc2UsZ0JBQWdCLEdBQUcsSUFBSWxYLGVBQUosQ0FBb0I7QUFDaERDLE1BQUksRUFBRSxtQkFEMEM7QUFFaERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCbkQsaUJBQWEsRUFBRTtBQUFDdUQsVUFBSSxFQUFFQztBQUFQLEtBRFE7QUFFdkJpWCxtQkFBZSxFQUFFO0FBQUNsWCxVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQUZNO0FBR3ZCb1EsaUJBQWEsRUFBRTtBQUFDblgsVUFBSSxFQUFFQztBQUFQLEtBSFE7QUFJdkJnRixRQUFJLEVBQUU7QUFBQ2pGLFVBQUksRUFBRUM7QUFBUCxLQUppQjtBQUt2QmlGLFNBQUssRUFBRTtBQUFDbEYsVUFBSSxFQUFFQztBQUFQLEtBTGdCO0FBTXZCbVgsZ0JBQVksRUFBRTtBQUFDcFgsVUFBSSxFQUFFQztBQUFQLEtBTlM7QUFPdkJvWCxlQUFXLEVBQUU7QUFBQ3JYLFVBQUksRUFBRTZCO0FBQVA7QUFQVSxHQUFqQixFQVFQdkIsU0FSTyxFQUZzQzs7QUFXaERDLEtBQUcsQ0FBQztBQUNBOUQsaUJBREE7QUFFQXlhLG1CQUZBO0FBR0FDLGlCQUhBO0FBSUFsUyxRQUpBO0FBS0FDLFNBTEE7QUFNQWtTLGdCQU5BO0FBT0FDO0FBUEEsR0FBRCxFQVFEO0FBQ0UsV0FBTy9jLFdBQVcsQ0FBQ2tHLE1BQVosQ0FBbUI7QUFDdEIvRCxtQkFBYSxFQUFFQSxhQURPO0FBRXRCeWEscUJBQWUsRUFBRUEsZUFGSztBQUd0QkMsbUJBQWEsRUFBRUEsYUFITztBQUl0QmxTLFVBQUksRUFBRUEsSUFKZ0I7QUFLdEJDLFdBQUssRUFBRUEsS0FMZTtBQU10QmtTLGtCQUFZLEVBQUVBLFlBTlE7QUFPdEJDLGlCQUFXLEVBQUVBO0FBUFMsS0FBbkIsQ0FBUDtBQVNIOztBQTdCK0MsQ0FBcEIsQ0FBekI7QUFnQ0EsTUFBTUwsZ0JBQWdCLEdBQUcsSUFBSW5YLGVBQUosQ0FBb0I7QUFDaERDLE1BQUksRUFBRSxtQkFEMEM7QUFFaERDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCbkQsaUJBQWEsRUFBRTtBQUFDdUQsVUFBSSxFQUFFQztBQUFQO0FBRFEsR0FBakIsRUFFUEssU0FGTyxFQUZzQzs7QUFLaERDLEtBQUcsQ0FBQztBQUNBOUQ7QUFEQSxHQUFELEVBRUQ7QUFDRSxXQUFPbkMsV0FBVyxDQUFDc0csTUFBWixDQUFtQjtBQUN0Qm5FLG1CQUFhLEVBQUVBO0FBRE8sS0FBbkIsQ0FBUDtBQUdIOztBQVgrQyxDQUFwQixDQUF6QjtBQWNBLE1BQU13YSxnQkFBZ0IsR0FBRyxJQUFJcFgsZUFBSixDQUFvQjtBQUNoREMsTUFBSSxFQUFFLG1CQUQwQztBQUVoREMsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJuRCxpQkFBYSxFQUFFO0FBQUN1RCxVQUFJLEVBQUVDO0FBQVAsS0FEUTtBQUV2QmtYLGlCQUFhLEVBQUU7QUFBQ25YLFVBQUksRUFBRUM7QUFBUCxLQUZRO0FBR3ZCZ0YsUUFBSSxFQUFFO0FBQUNqRixVQUFJLEVBQUVDO0FBQVAsS0FIaUI7QUFJdkJpRixTQUFLLEVBQUU7QUFBQ2xGLFVBQUksRUFBRUM7QUFBUCxLQUpnQjtBQUt2Qm1YLGdCQUFZLEVBQUU7QUFBQ3BYLFVBQUksRUFBRUM7QUFBUCxLQUxTO0FBTXZCb1gsZUFBVyxFQUFFO0FBQUNyWCxVQUFJLEVBQUU2QjtBQUFQO0FBTlUsR0FBakIsRUFPUHZCLFNBUE8sRUFGc0M7O0FBVWhEQyxLQUFHLENBQUM7QUFDQTlELGlCQURBO0FBRUEwYSxpQkFGQTtBQUdBbFMsUUFIQTtBQUlBQyxTQUpBO0FBS0FrUyxnQkFMQTtBQU1BQztBQU5BLEdBQUQsRUFPRDtBQUNFLFdBQU8vYyxXQUFXLENBQUNvRyxNQUFaLENBQW1CO0FBQ3RCakUsbUJBQWEsRUFBRUE7QUFETyxLQUFuQixFQUVMO0FBQ0VrRSxVQUFJLEVBQUM7QUFDRHdXLHFCQUFhLEVBQUVBLGFBRGQ7QUFFRGxTLFlBQUksRUFBRUEsSUFGTDtBQUdEQyxhQUFLLEVBQUVBLEtBSE47QUFJRGtTLG9CQUFZLEVBQUVBLFlBSmI7QUFLREMsbUJBQVcsRUFBRUE7QUFMWjtBQURQLEtBRkssQ0FBUDtBQVdIOztBQTdCK0MsQ0FBcEIsQ0FBekIsQzs7Ozs7Ozs7Ozs7QUNuRFA5ZSxNQUFNLENBQUNxRSxNQUFQLENBQWM7QUFBQzBhLGFBQVcsRUFBQyxNQUFJQSxXQUFqQjtBQUE2QkMsV0FBUyxFQUFDLE1BQUlBO0FBQTNDLENBQWQ7QUFBcUUsSUFBSWpmLE1BQUo7QUFBV0MsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRixRQUFNLENBQUNHLENBQUQsRUFBRztBQUFDSCxVQUFNLEdBQUNHLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSWtILGNBQUo7QUFBbUJwSCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDbUgsZ0JBQWMsQ0FBQ2xILENBQUQsRUFBRztBQUFDa0gsa0JBQWMsR0FBQ2xILENBQWY7QUFBaUI7O0FBQXBDLENBQTFDLEVBQWdGLENBQWhGO0FBQW1GLElBQUltSCxZQUFKO0FBQWlCckgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ29ILGNBQVksQ0FBQ25ILENBQUQsRUFBRztBQUFDbUgsZ0JBQVksR0FBQ25ILENBQWI7QUFBZTs7QUFBaEMsQ0FBMUMsRUFBNEUsQ0FBNUU7QUFJclAsTUFBTTZlLFdBQVcsR0FBRyxJQUFJelgsZUFBSixDQUFvQjtBQUMzQ0MsTUFBSSxFQUFFLGNBRHFDO0FBRTNDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QjRYLFVBQU0sRUFBRTtBQUFDeFgsVUFBSSxFQUFFQztBQUFQLEtBRGU7QUFFdkJ3WCxTQUFLLEVBQUU7QUFBQ3pYLFVBQUksRUFBRSxDQUFDQyxNQUFEO0FBQVA7QUFGZ0IsR0FBakIsRUFHUEssU0FITyxFQUZpQzs7QUFNM0NDLEtBQUcsQ0FBQztBQUNBaVgsVUFEQTtBQUVBQztBQUZBLEdBQUQsRUFHRDtBQUNFOztBQUVBLFdBQU9DLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkgsTUFBdEIsRUFBOEJDLEtBQTlCLENBQVAsQ0FIRixDQUlFO0FBQ0g7O0FBZDBDLENBQXBCLENBQXBCO0FBaUJBLE1BQU1GLFNBQVMsR0FBRyxJQUFJMVgsZUFBSixDQUFvQjtBQUN6Q0MsTUFBSSxFQUFFLFlBRG1DO0FBRXpDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QjRYLFVBQU0sRUFBRTtBQUFDeFgsVUFBSSxFQUFFQztBQUFQLEtBRGU7QUFFdkJ3WCxTQUFLLEVBQUU7QUFBQ3pYLFVBQUksRUFBRSxDQUFDQyxNQUFEO0FBQVA7QUFGZ0IsR0FBakIsRUFHUEssU0FITyxFQUYrQjs7QUFNekNDLEtBQUcsQ0FBQztBQUNBaVgsVUFEQTtBQUVBQztBQUZBLEdBQUQsRUFHRDtBQUNFO0FBQ0E7QUFDQTtBQUNBLFdBQU9DLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkosTUFBbkIsRUFBMkJDLEtBQTNCLENBQVA7QUFDSDs7QUFkd0MsQ0FBcEIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7QUNyQlBsZixNQUFNLENBQUNxRSxNQUFQLENBQWM7QUFBQ2liLFlBQVUsRUFBQyxNQUFJQSxVQUFoQjtBQUEyQkMsWUFBVSxFQUFDLE1BQUlBLFVBQTFDO0FBQXFEQyxZQUFVLEVBQUMsTUFBSUEsVUFBcEU7QUFBK0VDLFlBQVUsRUFBQyxNQUFJQSxVQUE5RjtBQUF5R0MsWUFBVSxFQUFDLE1BQUlBLFVBQXhIO0FBQW1JQyxZQUFVLEVBQUMsTUFBSUEsVUFBbEo7QUFBNkpDLGdCQUFjLEVBQUMsTUFBSUEsY0FBaEw7QUFBK0xDLGdCQUFjLEVBQUMsTUFBSUEsY0FBbE47QUFBaU9DLGdCQUFjLEVBQUMsTUFBSUE7QUFBcFAsQ0FBZDtBQUFtUixJQUFJL2YsTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJVyxLQUFKLEVBQVVDLEtBQVYsRUFBZ0J5QixTQUFoQjtBQUEwQnZDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaLEVBQStCO0FBQUNZLE9BQUssQ0FBQ1gsQ0FBRCxFQUFHO0FBQUNXLFNBQUssR0FBQ1gsQ0FBTjtBQUFRLEdBQWxCOztBQUFtQlksT0FBSyxDQUFDWixDQUFELEVBQUc7QUFBQ1ksU0FBSyxHQUFDWixDQUFOO0FBQVEsR0FBcEM7O0FBQXFDcUMsV0FBUyxDQUFDckMsQ0FBRCxFQUFHO0FBQUNxQyxhQUFTLEdBQUNyQyxDQUFWO0FBQVk7O0FBQTlELENBQS9CLEVBQStGLENBQS9GO0FBSzVpQixNQUFNb2YsVUFBVSxHQUFHLElBQUloWSxlQUFKLENBQW9CO0FBQzFDQyxNQUFJLEVBQUUsYUFEb0M7QUFFMUNDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCMFksVUFBTSxFQUFFO0FBQUN0WSxVQUFJLEVBQUVDO0FBQVAsS0FEZTtBQUV2QnRFLGVBQVcsRUFBRTtBQUFDcUUsVUFBSSxFQUFFQztBQUFQLEtBRlU7QUFHdkJ1TixhQUFTLEVBQUU7QUFBQ3hOLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBSFk7QUFJdkJDLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFNkI7QUFBUDtBQUplLEdBQWpCLEVBS1B2QixTQUxPLEVBRmdDOztBQVExQ0MsS0FBRyxDQUFDO0FBQ0ErWCxVQURBO0FBRUEzYyxlQUZBO0FBR0E2UixhQUhBO0FBSUF4RztBQUpBLEdBQUQsRUFLRDtBQUNFLFdBQU81TixLQUFLLENBQUNvSCxNQUFOLENBQWE7QUFDaEI4WCxZQUFNLEVBQUVBLE1BRFE7QUFFaEIzYyxpQkFBVyxFQUFFQSxXQUZHO0FBR2hCNlIsZUFBUyxFQUFFQSxTQUhLO0FBSWhCeEcsWUFBTSxFQUFFQTtBQUpRLEtBQWIsQ0FBUDtBQU1IOztBQXBCeUMsQ0FBcEIsQ0FBbkI7QUF1QkEsTUFBTThRLFVBQVUsR0FBRyxJQUFJalksZUFBSixDQUFvQjtBQUMxQ0MsTUFBSSxFQUFFLGFBRG9DO0FBRTFDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QnFZLFVBQU0sRUFBRTtBQUFDdFksVUFBSSxFQUFFQztBQUFQLEtBRmU7QUFHdkJ0RSxlQUFXLEVBQUU7QUFBQ3FFLFVBQUksRUFBRUM7QUFBUCxLQUhVO0FBSXZCdU4sYUFBUyxFQUFFO0FBQUN4TixVQUFJLEVBQUVDLE1BQVA7QUFBZThHLGNBQVEsRUFBRTtBQUF6QixLQUpZO0FBS3ZCQyxVQUFNLEVBQUU7QUFBQ2hILFVBQUksRUFBRTZCO0FBQVA7QUFMZSxHQUFqQixFQU9QdkIsU0FQTyxFQUZnQzs7QUFVMUNDLEtBQUcsQ0FBQztBQUNBRSxNQURBO0FBRUE2WCxVQUZBO0FBR0EzYyxlQUhBO0FBSUE2UixhQUpBO0FBS0F4RztBQUxBLEdBQUQsRUFNRDtBQUNFLFdBQU81TixLQUFLLENBQUNzSCxNQUFOLENBQWE7QUFDaEI3QyxTQUFHLEVBQUU0QztBQURXLEtBQWIsRUFFTDtBQUNFRSxVQUFJLEVBQUU7QUFDRjJYLGNBQU0sRUFBRUEsTUFETjtBQUVGM2MsbUJBQVcsRUFBRUEsV0FGWDtBQUdGNlIsaUJBQVMsRUFBRUEsU0FIVDtBQUlGeEcsY0FBTSxFQUFFQTtBQUpOO0FBRFIsS0FGSyxDQUFQO0FBVUg7O0FBM0J5QyxDQUFwQixDQUFuQjtBQThCQSxNQUFNK1EsVUFBVSxHQUFHLElBQUlsWSxlQUFKLENBQW9CO0FBQzFDQyxNQUFJLEVBQUUsYUFEb0M7QUFFMUNDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGZ0M7O0FBSzFDQyxLQUFHLENBQUM7QUFDQUU7QUFEQSxHQUFELEVBRUQ7QUFDRSxXQUFPLENBQ0hySCxLQUFLLENBQUN3SCxNQUFOLENBQWE7QUFDVC9DLFNBQUcsRUFBRTRDO0FBREksS0FBYixDQURHLEVBSUhwSCxLQUFLLENBQUN1SCxNQUFOLENBQWE7QUFDVDJYLGFBQU8sRUFBRTlYO0FBREEsS0FBYixDQUpHLENBQVA7QUFRSDs7QUFoQnlDLENBQXBCLENBQW5CO0FBcUJBLE1BQU11WCxVQUFVLEdBQUcsSUFBSW5ZLGVBQUosQ0FBb0I7QUFDMUNDLE1BQUksRUFBRSxhQURvQztBQUUxQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkIyWSxXQUFPLEVBQUU7QUFBQ3ZZLFVBQUksRUFBRUM7QUFBUCxLQURjO0FBRXZCckUsWUFBUSxFQUFFO0FBQUNvRSxVQUFJLEVBQUVJO0FBQVAsS0FGYTtBQUd2QjtBQUNBb1ksV0FBTyxFQUFFO0FBQUN4WSxVQUFJLEVBQUU2QjtBQUFQO0FBSmMsR0FBakIsRUFLUHZCLFNBTE8sRUFGZ0M7O0FBUTFDQyxLQUFHLENBQUM7QUFDQWdZLFdBREE7QUFFQTNjLFlBRkE7QUFHQTtBQUNBNGM7QUFKQSxHQUFELEVBS0Q7QUFDRSxXQUFPbmYsS0FBSyxDQUFDbUgsTUFBTixDQUFhO0FBQ2hCK1gsYUFBTyxFQUFFQSxPQURPO0FBRWhCM2MsY0FBUSxFQUFFQSxRQUZNO0FBR2hCO0FBQ0E0YyxhQUFPLEVBQUVBO0FBSk8sS0FBYixDQUFQO0FBTUg7O0FBcEJ5QyxDQUFwQixDQUFuQjtBQXVCQSxNQUFNUCxVQUFVLEdBQUcsSUFBSXBZLGVBQUosQ0FBb0I7QUFDMUNDLE1BQUksRUFBRSxhQURvQztBQUUxQ0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJ1WSxXQUFPLEVBQUU7QUFBQ3hZLFVBQUksRUFBRTZCO0FBQVA7QUFGYyxHQUFqQixFQUdQdkIsU0FITyxFQUZnQzs7QUFNMUNDLEtBQUcsQ0FBQztBQUNBRSxNQURBO0FBRUErWDtBQUZBLEdBQUQsRUFHRDtBQUNFLFdBQU9uZixLQUFLLENBQUNxSCxNQUFOLENBQWE7QUFDaEI3QyxTQUFHLEVBQUU0QztBQURXLEtBQWIsRUFFTDtBQUNFRSxVQUFJLEVBQUU7QUFDRjZYLGVBQU8sRUFBRUE7QUFEUDtBQURSLEtBRkssQ0FBUDtBQU9IOztBQWpCeUMsQ0FBcEIsQ0FBbkI7QUFvQkEsTUFBTU4sVUFBVSxHQUFHLElBQUlyWSxlQUFKLENBQW9CO0FBQzFDQyxNQUFJLEVBQUUsYUFEb0M7QUFFMUNDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGZ0M7O0FBSzFDQyxLQUFHLENBQUM7QUFDQUU7QUFEQSxHQUFELEVBRUQ7QUFDRSxXQUFPcEgsS0FBSyxDQUFDdUgsTUFBTixDQUFhO0FBQ2hCL0MsU0FBRyxFQUFFNEM7QUFEVyxLQUFiLENBQVA7QUFHSDs7QUFYeUMsQ0FBcEIsQ0FBbkI7QUFnQkEsTUFBTTBYLGNBQWMsR0FBRyxJQUFJdFksZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkIvRCxZQUFRLEVBQUU7QUFBQ21FLFVBQUksRUFBRUM7QUFBUDtBQURhLEdBQWpCLEVBRVBLLFNBRk8sRUFGb0M7O0FBSzlDQyxLQUFHLENBQUM7QUFDQTFFO0FBREEsR0FBRCxFQUVEO0FBQ0UsV0FBT2YsU0FBUyxDQUFDMEYsTUFBVixDQUFpQjtBQUNwQjNFLGNBQVEsRUFBRUE7QUFEVSxLQUFqQixDQUFQO0FBR0g7O0FBWDZDLENBQXBCLENBQXZCO0FBY0EsTUFBTXVjLGNBQWMsR0FBRyxJQUFJdlksZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJwRSxZQUFRLEVBQUU7QUFBQ21FLFVBQUksRUFBRUM7QUFBUDtBQUZhLEdBQWpCLEVBR1BLLFNBSE8sRUFGb0M7O0FBTTlDQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBNUU7QUFGQSxHQUFELEVBR0Q7QUFDRSxXQUFPZixTQUFTLENBQUM0RixNQUFWLENBQWlCO0FBQ3BCN0MsU0FBRyxFQUFFNEM7QUFEZSxLQUFqQixFQUVMO0FBQ0VFLFVBQUksRUFBRTtBQUNGOUUsZ0JBQVEsRUFBRUE7QUFEUjtBQURSLEtBRkssQ0FBUDtBQU9IOztBQWpCNkMsQ0FBcEIsQ0FBdkI7QUFvQkEsTUFBTXdjLGNBQWMsR0FBRyxJQUFJeFksZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVA7QUFEbUIsR0FBakIsRUFFUEssU0FGTyxFQUZvQzs7QUFLOUNDLEtBQUcsQ0FBQztBQUNBRTtBQURBLEdBQUQsRUFFRDtBQUNFLFdBQU8zRixTQUFTLENBQUM4RixNQUFWLENBQWlCO0FBQ3BCL0MsU0FBRyxFQUFFNEM7QUFEZSxLQUFqQixDQUFQO0FBR0g7O0FBWDZDLENBQXBCLENBQXZCLEM7Ozs7Ozs7Ozs7O0FDNUtQbEksTUFBTSxDQUFDcUUsTUFBUCxDQUFjO0FBQUM2YixhQUFXLEVBQUMsTUFBSUEsV0FBakI7QUFBNkJDLGFBQVcsRUFBQyxNQUFJQSxXQUE3QztBQUF5REMsYUFBVyxFQUFDLE1BQUlBO0FBQXpFLENBQWQ7QUFBcUcsSUFBSXJnQixNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUlrSCxjQUFKO0FBQW1CcEgsTUFBTSxDQUFDQyxJQUFQLENBQVksNkJBQVosRUFBMEM7QUFBQ21ILGdCQUFjLENBQUNsSCxDQUFELEVBQUc7QUFBQ2tILGtCQUFjLEdBQUNsSCxDQUFmO0FBQWlCOztBQUFwQyxDQUExQyxFQUFnRixDQUFoRjtBQUFtRixJQUFJbUgsWUFBSjtBQUFpQnJILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNvSCxjQUFZLENBQUNuSCxDQUFELEVBQUc7QUFBQ21ILGdCQUFZLEdBQUNuSCxDQUFiO0FBQWU7O0FBQWhDLENBQTFDLEVBQTRFLENBQTVFO0FBQStFLElBQUlVLE1BQUo7QUFBV1osTUFBTSxDQUFDQyxJQUFQLENBQVksa0JBQVosRUFBK0I7QUFBQ1csUUFBTSxDQUFDVixDQUFELEVBQUc7QUFBQ1UsVUFBTSxHQUFDVixDQUFQO0FBQVM7O0FBQXBCLENBQS9CLEVBQXFELENBQXJEO0FBSy9XLE1BQU1nZ0IsV0FBVyxHQUFHLElBQUk1WSxlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUUsY0FEcUM7QUFFM0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCbkUsZ0JBQVksRUFBRTtBQUFDdUUsVUFBSSxFQUFFQztBQUFQLEtBRFM7QUFFdkI7QUFDQTtBQUNBMlksZ0JBQVksRUFBRTtBQUFDNVksVUFBSSxFQUFFQztBQUFQLEtBSlM7QUFLdkI0WSxnQkFBWSxFQUFFO0FBQUM3WSxVQUFJLEVBQUVDO0FBQVAsS0FMUztBQU12QnFDLGVBQVcsRUFBRTtBQUFDdEMsVUFBSSxFQUFFQztBQUFQLEtBTlU7QUFPdkJzQyxlQUFXLEVBQUU7QUFBQ3ZDLFVBQUksRUFBRUM7QUFBUCxLQVBVO0FBUXZCNlksV0FBTyxFQUFFO0FBQUM5WSxVQUFJLEVBQUUsQ0FBQ3dCLE1BQUQ7QUFBUCxLQVJjO0FBU3ZCLDJCQUF1QjtBQUFDeEIsVUFBSSxFQUFDQztBQUFOLEtBVEE7QUFVdkIsd0JBQW9CO0FBQUNELFVBQUksRUFBQ0M7QUFBTjtBQVZHLEdBQWpCLEVBV1BLLFNBWE8sRUFGaUM7O0FBYzNDQyxLQUFHLENBQUU7QUFBRTlFLGdCQUFGOztBQUFnQjtBQUFjbWQsZ0JBQTlCO0FBQTRDQyxnQkFBNUM7QUFBMER2VyxlQUExRDtBQUF1RUMsZUFBdkU7QUFBb0Z1VztBQUFwRixHQUFGLEVBQWlHO0FBQ2hHLFdBQU8zZixNQUFNLENBQUNxSCxNQUFQLENBQWM7QUFDakIvRSxrQkFBWSxFQUFFQSxZQURHO0FBRWpCO0FBQ0E7QUFDQW1kLGtCQUFZLEVBQUVBLFlBSkc7QUFLakIzVCxVQUFJLEVBQUUsT0FMVztBQU1qQjRULGtCQUFZLEVBQUVBLFlBTkc7QUFPakJ2VyxpQkFBVyxFQUFFQSxXQVBJO0FBUWpCQyxpQkFBVyxFQUFFQSxXQVJJO0FBU2pCdVcsYUFBTyxFQUFFQTtBQVRRLEtBQWQsQ0FBUDtBQVdIOztBQTFCMEMsQ0FBcEIsQ0FBcEI7QUE0QkEsTUFBTUosV0FBVyxHQUFHLElBQUk3WSxlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUUsY0FEcUM7QUFFM0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCeEUsZ0JBQVksRUFBRTtBQUFDdUUsVUFBSSxFQUFFQztBQUFQLEtBRlM7QUFHdkI7QUFDQTtBQUNBMlksZ0JBQVksRUFBRTtBQUFDNVksVUFBSSxFQUFFQztBQUFQLEtBTFM7QUFNdkI0WSxnQkFBWSxFQUFFO0FBQUM3WSxVQUFJLEVBQUVDO0FBQVAsS0FOUztBQU92QnFDLGVBQVcsRUFBRTtBQUFDdEMsVUFBSSxFQUFFQztBQUFQLEtBUFU7QUFRdkJzQyxlQUFXLEVBQUU7QUFBQ3ZDLFVBQUksRUFBRUM7QUFBUCxLQVJVO0FBU3ZCNlksV0FBTyxFQUFFO0FBQUM5WSxVQUFJLEVBQUUsQ0FBQ3dCLE1BQUQ7QUFBUCxLQVRjO0FBVXZCLDJCQUF1QjtBQUFDeEIsVUFBSSxFQUFDQztBQUFOLEtBVkE7QUFXdkIsd0JBQW9CO0FBQUNELFVBQUksRUFBQ0M7QUFBTjtBQVhHLEdBQWpCLEVBWVBLLFNBWk8sRUFGaUM7O0FBZTNDQyxLQUFHLENBQUU7QUFBRUUsTUFBRjtBQUFNaEYsZ0JBQU47O0FBQW9CO0FBQWFtZCxnQkFBakM7QUFBK0NDLGdCQUEvQztBQUE2RHZXLGVBQTdEO0FBQTBFQyxlQUExRTtBQUF1RnVXO0FBQXZGLEdBQUYsRUFBb0c7QUFDbkcsV0FBTzNmLE1BQU0sQ0FBQ3VILE1BQVAsQ0FBYztBQUNqQjdDLFNBQUcsRUFBRTRDO0FBRFksS0FBZCxFQUVMO0FBQ0VFLFVBQUksRUFBQztBQUNEbEYsb0JBQVksRUFBRUEsWUFEYjtBQUVEO0FBQ0E7QUFDQW1kLG9CQUFZLEVBQUVBLFlBSmI7QUFLRDNULFlBQUksRUFBRSxPQUxMO0FBTUQ0VCxvQkFBWSxFQUFFQSxZQU5iO0FBT0R2VyxtQkFBVyxFQUFFQSxXQVBaO0FBUURDLG1CQUFXLEVBQUVBLFdBUlo7QUFTRHVXLGVBQU8sRUFBRUE7QUFUUjtBQURQLEtBRkssQ0FBUDtBQWVIOztBQS9CMEMsQ0FBcEIsQ0FBcEI7QUFpQ0EsTUFBTUgsV0FBVyxHQUFHLElBQUk5WSxlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUUsY0FEcUM7QUFFM0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQWpCLEVBRVBLLFNBRk8sRUFGaUM7O0FBSzNDQyxLQUFHLENBQUU7QUFBQ0U7QUFBRCxHQUFGLEVBQVE7QUFDUCxXQUFPdEgsTUFBTSxDQUFDeUgsTUFBUCxDQUFjO0FBQUMvQyxTQUFHLEVBQUU0QztBQUFOLEtBQWQsQ0FBUDtBQUNIOztBQVAwQyxDQUFwQixDQUFwQixDOzs7Ozs7Ozs7OztBQ2xFUGxJLE1BQU0sQ0FBQ3FFLE1BQVAsQ0FBYztBQUFDbWMsZUFBYSxFQUFDLE1BQUlBLGFBQW5CO0FBQWlDQyxVQUFRLEVBQUMsTUFBSUEsUUFBOUM7QUFBdURDLGdCQUFjLEVBQUMsTUFBSUEsY0FBMUU7QUFBeUZDLGVBQWEsRUFBQyxNQUFJQSxhQUEzRztBQUF5SEMsZUFBYSxFQUFDLE1BQUlBLGFBQTNJO0FBQXlKQyxnQkFBYyxFQUFDLE1BQUlBLGNBQTVLO0FBQTJMQyxpQkFBZSxFQUFDLE1BQUlBLGVBQS9NO0FBQStOQyxlQUFhLEVBQUMsTUFBSUEsYUFBalA7QUFBK1BDLGdCQUFjLEVBQUMsTUFBSUEsY0FBbFI7QUFBaVNDLGNBQVksRUFBQyxNQUFJQTtBQUFsVCxDQUFkO0FBQStVLElBQUlsaEIsTUFBSjtBQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNGLFFBQU0sQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFVBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJa0gsY0FBSjtBQUFtQnBILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDZCQUFaLEVBQTBDO0FBQUNtSCxnQkFBYyxDQUFDbEgsQ0FBRCxFQUFHO0FBQUNrSCxrQkFBYyxHQUFDbEgsQ0FBZjtBQUFpQjs7QUFBcEMsQ0FBMUMsRUFBZ0YsQ0FBaEY7QUFBbUYsSUFBSW1ILFlBQUo7QUFBaUJySCxNQUFNLENBQUNDLElBQVAsQ0FBWSw2QkFBWixFQUEwQztBQUFDb0gsY0FBWSxDQUFDbkgsQ0FBRCxFQUFHO0FBQUNtSCxnQkFBWSxHQUFDbkgsQ0FBYjtBQUFlOztBQUFoQyxDQUExQyxFQUE0RSxDQUE1RTtBQUErRSxJQUFJQyxRQUFKLEVBQWFDLGFBQWI7QUFBMkJKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaLEVBQStCO0FBQUNFLFVBQVEsQ0FBQ0QsQ0FBRCxFQUFHO0FBQUNDLFlBQVEsR0FBQ0QsQ0FBVDtBQUFXLEdBQXhCOztBQUF5QkUsZUFBYSxDQUFDRixDQUFELEVBQUc7QUFBQ0UsaUJBQWEsR0FBQ0YsQ0FBZDtBQUFnQjs7QUFBMUQsQ0FBL0IsRUFBMkYsQ0FBM0Y7QUFLem1CLE1BQU1zZ0IsYUFBYSxHQUFHLElBQUlsWixlQUFKLENBQW9CO0FBQzdDQyxNQUFJLEVBQUUsZ0JBRHVDO0FBRTdDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QjZaLGNBQVUsRUFBRTtBQUFDelosVUFBSSxFQUFFQztBQUFQLEtBRFc7QUFFdkI7QUFDQWlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQLEtBSG1CO0FBSXZCOUUsVUFBTSxFQUFFO0FBQUM2RSxVQUFJLEVBQUVDO0FBQVAsS0FKZTtBQUt2QjdFLGNBQVUsRUFBRTtBQUFDNEUsVUFBSSxFQUFFQztBQUFQLEtBTFc7QUFNdkI1RSxjQUFVLEVBQUU7QUFBQzJFLFVBQUksRUFBRUM7QUFBUCxLQU5XO0FBT3ZCb0wsUUFBSSxFQUFFO0FBQUNyTCxVQUFJLEVBQUVDO0FBQVAsS0FQaUI7QUFRdkJ5WixvQkFBZ0IsRUFBRTtBQUFDMVosVUFBSSxFQUFFQztBQUFQLEtBUks7QUFTdkJzVyxhQUFTLEVBQUU7QUFBQ3ZXLFVBQUksRUFBRUM7QUFBUCxLQVRZO0FBVXZCMFosV0FBTyxFQUFFO0FBQUMzWixVQUFJLEVBQUVDO0FBQVAsS0FWYztBQVd2QjJaLG1CQUFlLEVBQUU7QUFBQzVaLFVBQUksRUFBRUM7QUFBUCxLQVhNO0FBWXZCNlYsVUFBTSxFQUFFO0FBQUM5VixVQUFJLEVBQUVDO0FBQVAsS0FaZTtBQWF2QnVYLFVBQU0sRUFBRTtBQUFDeFgsVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FiZTtBQWN2QjhTLFFBQUksRUFBRTtBQUFDN1osVUFBSSxFQUFFQyxNQUFQO0FBQWU4RyxjQUFRLEVBQUU7QUFBekIsS0FkaUI7QUFldkIrUyxZQUFRLEVBQUU7QUFBQzlaLFVBQUksRUFBRUMsTUFBUDtBQUFlOEcsY0FBUSxFQUFFO0FBQXpCLEtBZmE7QUFpQnZCZ1QsbUJBQWUsRUFBRTtBQUFDL1osVUFBSSxFQUFFQztBQUFQLEtBakJNO0FBa0J2QnNVLGtCQUFjLEVBQUU7QUFBQ3ZVLFVBQUksRUFBQzJCO0FBQU4sS0FsQk87QUFtQnZCM0MsYUFBUyxFQUFFO0FBQUNnQixVQUFJLEVBQUU2QjtBQUFQLEtBbkJZO0FBb0J2Qm1ZLG9CQUFnQixFQUFFO0FBQUNoYSxVQUFJLEVBQUVDO0FBQVAsS0FwQks7QUFxQnZCZ2EsY0FBVSxFQUFFO0FBQUVqYSxVQUFJLEVBQUUyQixJQUFSO0FBQWNvRixjQUFRLEVBQUU7QUFBeEIsS0FyQlc7QUFzQnZCMFEsU0FBSyxFQUFFO0FBQUN6WCxVQUFJLEVBQUUsQ0FBQ0MsTUFBRDtBQUFQO0FBdEJnQixHQUFqQixFQXdCUEssU0F4Qk8sRUFGbUM7O0FBMkI3Q0MsS0FBRyxDQUFDO0FBQUNrWixjQUFEO0FBQWF2TyxNQUFiO0FBQWlCL1AsVUFBakI7QUFBeUJDLGNBQXpCO0FBQXFDQyxjQUFyQztBQUFpRGdRLFFBQWpEO0FBQXVEcU8sb0JBQXZEO0FBQXlFbkQsYUFBekU7QUFBb0ZvRCxXQUFwRjtBQUE2RkMsbUJBQTdGO0FBQThHOUQsVUFBOUc7QUFBc0gwQixVQUF0SDtBQUE4SHFDLFFBQTlIO0FBQW9JQyxZQUFwSTtBQUE4SUMsbUJBQTlJO0FBQStKeEYsa0JBQS9KO0FBQStLdlYsYUFBL0s7QUFBMExnYixvQkFBMUw7QUFBNE1DLGNBQTVNO0FBQXdOeEM7QUFBeE4sR0FBRCxFQUFnTztBQUMvTixXQUFPL2UsUUFBUSxDQUFDOEgsTUFBVCxDQUFnQjtBQUNuQmlaLGdCQUFVLEVBQUVBLFVBRE87QUFFbkI7QUFDQXZPLFFBQUUsRUFBRUEsRUFIZTtBQUluQi9QLFlBQU0sRUFBRUEsTUFKVztBQUtuQkMsZ0JBQVUsRUFBRUEsVUFMTztBQU1uQkMsZ0JBQVUsRUFBRUEsVUFOTztBQU9uQmdRLFVBQUksRUFBRUEsSUFQYTtBQVFuQnFPLHNCQUFnQixFQUFFQSxnQkFSQztBQVNuQm5ELGVBQVMsRUFBRUEsU0FUUTtBQVVuQm9ELGFBQU8sRUFBRUEsT0FWVTtBQVduQkMscUJBQWUsRUFBRUEsZUFYRTtBQVluQjlELFlBQU0sRUFBRUEsTUFaVztBQWFuQjlPLFlBQU0sRUFBRSxJQWJXO0FBY25Cd1EsWUFBTSxFQUFFQSxNQWRXO0FBZW5CcUMsVUFBSSxFQUFFQSxJQWZhO0FBZ0JuQkMsY0FBUSxFQUFFQSxRQWhCUztBQWlCbkJDLHFCQUFlLEVBQUVBLGVBakJFO0FBa0JuQnhGLG9CQUFjLEVBQUVBLGNBbEJHO0FBbUJuQnZWLGVBQVMsRUFBRUEsU0FuQlE7QUFvQm5CZ2Isc0JBQWdCLEVBQUVBLGdCQXBCQztBQXFCbkJDLGdCQUFVLEVBQUVBLFVBckJPO0FBc0JuQnhDLFdBQUssRUFBRUE7QUF0QlksS0FBaEIsQ0FBUDtBQXdCSDs7QUFwRDRDLENBQXBCLENBQXRCO0FBdURBLE1BQU11QixRQUFRLEdBQUcsSUFBSW5aLGVBQUosQ0FBb0I7QUFDeENDLE1BQUksRUFBRSxXQURrQztBQUV4Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJzTCxNQUFFLEVBQUU7QUFBQ2xMLFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmlhLGFBQVMsRUFBQztBQUFDbGEsVUFBSSxFQUFFQztBQUFQO0FBRmEsR0FBakIsRUFHUEssU0FITyxFQUY4Qjs7QUFNeENDLEtBQUcsQ0FBQztBQUFDMkssTUFBRDtBQUFLZ1A7QUFBTCxHQUFELEVBQWlCO0FBQ2hCLFdBQU92aEIsYUFBYSxDQUFDNkgsTUFBZCxDQUFxQjtBQUFDMEssUUFBRSxFQUFFQSxFQUFMO0FBQVNnUCxlQUFTLEVBQUVBO0FBQXBCLEtBQXJCLENBQVA7QUFDSDs7QUFSdUMsQ0FBcEIsQ0FBakI7QUFXQSxNQUFNakIsY0FBYyxHQUFHLElBQUlwWixlQUFKLENBQW9CO0FBQzlDQyxNQUFJLEVBQUUsaUJBRHdDO0FBRTlDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QitHLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFNkI7QUFBUDtBQUZlLEdBQWpCLEVBR1B2QixTQUhPLEVBRm9DOztBQU05Q0MsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS3VHO0FBQUwsR0FBRCxFQUFjO0FBQ2IsV0FBT3RPLFFBQVEsQ0FBQ2dJLE1BQVQsQ0FBZ0I7QUFDbkI3QyxTQUFHLEVBQUM0QztBQURlLEtBQWhCLEVBRUw7QUFDRUUsVUFBSSxFQUFDO0FBQ0RxRyxjQUFNLEVBQUVBO0FBRFA7QUFEUCxLQUZLLENBQVA7QUFPSDs7QUFkNkMsQ0FBcEIsQ0FBdkI7QUFpQkEsTUFBTWtTLGFBQWEsR0FBRyxJQUFJclosZUFBSixDQUFvQjtBQUM3Q0MsTUFBSSxFQUFFLGdCQUR1QztBQUU3Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJ3WCxTQUFLLEVBQUU7QUFBQ3pYLFVBQUksRUFBRSxDQUFDQyxNQUFEO0FBQVA7QUFGZ0IsR0FBakIsRUFHUEssU0FITyxFQUZtQzs7QUFNN0NDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUtnWDtBQUFMLEdBQUQsRUFBYTtBQUNaLFdBQU8vZSxRQUFRLENBQUNnSSxNQUFULENBQWdCO0FBQ25CN0MsU0FBRyxFQUFDNEM7QUFEZSxLQUFoQixFQUVMO0FBQ0VFLFVBQUksRUFBQztBQUNEOFcsYUFBSyxFQUFFQTtBQUROO0FBRFAsS0FGSyxDQUFQO0FBT0g7O0FBZDRDLENBQXBCLENBQXRCO0FBaUJBLE1BQU0wQixhQUFhLEdBQUcsSUFBSXRaLGVBQUosQ0FBb0I7QUFDN0NDLE1BQUksRUFBRSxpQkFEdUM7QUFFN0NDLFVBQVEsRUFBRSxJQUFJSCxZQUFKLENBQWlCO0FBQ3ZCYSxNQUFFLEVBQUU7QUFBQ1QsVUFBSSxFQUFFQztBQUFQLEtBRG1CO0FBRXZCd1osY0FBVSxFQUFFO0FBQUN6WixVQUFJLEVBQUVDO0FBQVAsS0FGVztBQUd2QjtBQUNBaUwsTUFBRSxFQUFFO0FBQUNsTCxVQUFJLEVBQUVDO0FBQVAsS0FKbUI7QUFLdkI5RSxVQUFNLEVBQUU7QUFBQzZFLFVBQUksRUFBRUM7QUFBUCxLQUxlO0FBTXZCN0UsY0FBVSxFQUFFO0FBQUM0RSxVQUFJLEVBQUVDO0FBQVAsS0FOVztBQU92QjVFLGNBQVUsRUFBRTtBQUFDMkUsVUFBSSxFQUFFQztBQUFQLEtBUFc7QUFRdkJvTCxRQUFJLEVBQUU7QUFBQ3JMLFVBQUksRUFBRUM7QUFBUCxLQVJpQjtBQVN2QnlaLG9CQUFnQixFQUFFO0FBQUMxWixVQUFJLEVBQUVDO0FBQVAsS0FUSztBQVV2QnNXLGFBQVMsRUFBRTtBQUFDdlcsVUFBSSxFQUFFQztBQUFQLEtBVlk7QUFXdkIwWixXQUFPLEVBQUU7QUFBQzNaLFVBQUksRUFBRUM7QUFBUCxLQVhjO0FBWXZCMlosbUJBQWUsRUFBRTtBQUFDNVosVUFBSSxFQUFFQztBQUFQLEtBWk0sQ0FhdkI7QUFDQTs7QUFkdUIsR0FBakIsRUFlUEssU0FmTyxFQUZtQzs7QUFrQjdDQyxLQUFHLENBQUM7QUFDQUUsTUFEQTtBQUVBZ1osY0FGQTtBQUdBO0FBQ0F2TyxNQUpBO0FBS0EvUCxVQUxBO0FBTUFDLGNBTkE7QUFPQUMsY0FQQTtBQVFBZ1EsUUFSQTtBQVNBcU8sb0JBVEE7QUFVQW5ELGFBVkE7QUFXQW9ELFdBWEE7QUFZQUMsbUJBWkEsQ0FhQTtBQUNBOztBQWRBLEdBQUQsRUFlRDtBQUNFLFdBQU9saEIsUUFBUSxDQUFDZ0ksTUFBVCxDQUFnQjtBQUNuQjdDLFNBQUcsRUFBRTRDO0FBRGMsS0FBaEIsRUFFTDtBQUNFRSxVQUFJLEVBQUU7QUFDRjhZLGtCQUFVLEVBQUVBLFVBRFY7QUFFRjtBQUNBdk8sVUFBRSxFQUFFQSxFQUhGO0FBSUYvUCxjQUFNLEVBQUVBLE1BSk47QUFLRkMsa0JBQVUsRUFBRUEsVUFMVjtBQU1GQyxrQkFBVSxFQUFFQSxVQU5WO0FBT0ZnUSxZQUFJLEVBQUVBLElBUEo7QUFRRnFPLHdCQUFnQixFQUFFQSxnQkFSaEI7QUFTRm5ELGlCQUFTLEVBQUVBLFNBVFQ7QUFVRm9ELGVBQU8sRUFBRUEsT0FWUDtBQVdGQyx1QkFBZSxFQUFFQSxlQVhmLENBWUY7QUFDQTs7QUFiRTtBQURSLEtBRkssQ0FBUDtBQW1CSDs7QUFyRDRDLENBQXBCLENBQXRCO0FBd0RBLE1BQU1SLGNBQWMsR0FBRyxJQUFJdlosZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkJhLE1BQUUsRUFBRTtBQUFDVCxVQUFJLEVBQUVDO0FBQVAsS0FEbUI7QUFFdkJqQixhQUFTLEVBQUU7QUFBQ2dCLFVBQUksRUFBRTZCO0FBQVAsS0FGWTtBQUd2Qm1ZLG9CQUFnQixFQUFFO0FBQUNoYSxVQUFJLEVBQUVDO0FBQVAsS0FISztBQUl2QmdhLGNBQVUsRUFBRTtBQUFDamEsVUFBSSxFQUFFMkIsSUFBUDtBQUFhb0YsY0FBUSxFQUFFO0FBQXZCLEtBSlc7QUFLdkJDLFVBQU0sRUFBRTtBQUFDaEgsVUFBSSxFQUFFNkI7QUFBUDtBQUxlLEdBQWpCLEVBTVB2QixTQU5PLEVBRm9DOztBQVM5Q0MsS0FBRyxDQUFDO0FBQUNFLE1BQUQ7QUFBS3pCLGFBQUw7QUFBZ0JnYixvQkFBaEI7QUFBa0NDLGNBQWxDO0FBQThDalQ7QUFBOUMsR0FBRCxFQUF1RDtBQUN0RCxXQUFPdE8sUUFBUSxDQUFDZ0ksTUFBVCxDQUFnQjtBQUNuQjdDLFNBQUcsRUFBQzRDO0FBRGUsS0FBaEIsRUFFTDtBQUNFRSxVQUFJLEVBQUM7QUFDRDNCLGlCQUFTLEVBQUVBLFNBRFY7QUFFRGdiLHdCQUFnQixFQUFFQSxnQkFGakI7QUFHREMsa0JBQVUsRUFBRUEsVUFIWDtBQUlEalQsY0FBTSxFQUFFQTtBQUpQO0FBRFAsS0FGSyxDQUFQO0FBVUg7O0FBcEI2QyxDQUFwQixDQUF2QjtBQXVCQSxNQUFNcVMsZUFBZSxHQUFHLElBQUl4WixlQUFKLENBQW9CO0FBQy9DQyxNQUFJLEVBQUUsbUJBRHlDO0FBRS9DQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQjtBQUV2QmlMLE1BQUUsRUFBRTtBQUFDbEwsVUFBSSxFQUFFQztBQUFQO0FBRm1CLEdBQWpCLEVBR1BLLFNBSE8sRUFGcUM7O0FBTS9DQyxLQUFHLENBQUM7QUFBQ0UsTUFBRDtBQUFLeUs7QUFBTCxHQUFELEVBQVU7QUFDVCxXQUFPLENBQ0h4UyxRQUFRLENBQUNrSSxNQUFULENBQWdCO0FBQUMvQyxTQUFHLEVBQUU0QztBQUFOLEtBQWhCLENBREcsRUFFSDlILGFBQWEsQ0FBQ2lJLE1BQWQsQ0FBcUI7QUFBQ3NLLFFBQUUsRUFBQ0E7QUFBSixLQUFyQixDQUZHLENBQVA7QUFJSDs7QUFYOEMsQ0FBcEIsQ0FBeEI7QUFjQSxNQUFNb08sYUFBYSxHQUFHLElBQUl6WixlQUFKLENBQW9CO0FBQzdDQyxNQUFJLEVBQUUsZ0JBRHVDO0FBRTdDQyxVQUFRLEVBQUUsSUFBSUgsWUFBSixDQUFpQjtBQUN2QmEsTUFBRSxFQUFFO0FBQUNULFVBQUksRUFBRUM7QUFBUCxLQURtQixDQUV2Qjs7QUFGdUIsR0FBakIsRUFHUEssU0FITyxFQUZtQzs7QUFNN0NDLEtBQUcsQ0FBQztBQUFDRSxNQUFEO0FBQUswWjtBQUFMLEdBQUQsRUFBYTtBQUNaLFdBQU96aEIsUUFBUSxDQUFDZ0ksTUFBVCxDQUFnQjtBQUNmN0MsU0FBRyxFQUFFNEM7QUFEVSxLQUFoQixFQUVEO0FBQ0VFLFVBQUksRUFBQztBQUNEd1osYUFBSyxFQUFFQTtBQUROO0FBRFAsS0FGQyxDQUFQO0FBT0g7O0FBZDRDLENBQXBCLENBQXRCO0FBaUJBLE1BQU1aLGNBQWMsR0FBRyxJQUFJMVosZUFBSixDQUFvQjtBQUM5Q0MsTUFBSSxFQUFFLGlCQUR3QztBQUU5Q0MsVUFBUSxFQUFFLElBQUlILFlBQUosQ0FBaUI7QUFDdkI0WCxVQUFNLEVBQUU7QUFBQ3hYLFVBQUksRUFBRUM7QUFBUCxLQURlO0FBRXZCNlYsVUFBTSxFQUFFO0FBQUM5VixVQUFJLEVBQUVDO0FBQVA7QUFGZSxHQUFqQixFQUdQSyxTQUhPLEVBRm9DOztBQU05Q0MsS0FBRyxDQUFDO0FBQUNpWCxVQUFEO0FBQVMxQjtBQUFULEdBQUQsRUFBa0I7QUFDakIsV0FBT3BkLFFBQVEsQ0FBQ2dJLE1BQVQsQ0FBZ0I7QUFDZjhXLFlBQU0sRUFBRUE7QUFETyxLQUFoQixFQUVEO0FBQ0U3VyxVQUFJLEVBQUM7QUFDRG1WLGNBQU0sRUFBRUE7QUFEUDtBQURQLEtBRkMsQ0FBUDtBQU9IOztBQWQ2QyxDQUFwQixDQUF2QjtBQWlCQSxNQUFNMEQsWUFBWSxHQUFFLElBQUkzWixlQUFKLENBQW9CO0FBQzNDQyxNQUFJLEVBQUMsZUFEc0M7QUFFM0NDLFVBQVEsRUFBQyxJQUFJSCxZQUFKLENBQWlCO0FBQ3RCc0wsTUFBRSxFQUFDO0FBQUNsTCxVQUFJLEVBQUNDO0FBQU4sS0FEbUI7QUFFdEJ1WCxVQUFNLEVBQUM7QUFBQ3hYLFVBQUksRUFBQ0M7QUFBTixLQUZlO0FBR3RCNFosUUFBSSxFQUFFO0FBQUM3WixVQUFJLEVBQUVDO0FBQVAsS0FIZ0I7QUFJdEI2WixZQUFRLEVBQUU7QUFBQzlaLFVBQUksRUFBRUM7QUFBUDtBQUpZLEdBQWpCLEVBS05LLFNBTE0sRUFGa0M7O0FBUTNDQyxLQUFHLENBQUM7QUFBQzJLLE1BQUQ7QUFBSXNNLFVBQUo7QUFBWXFDLFFBQVo7QUFBa0JDO0FBQWxCLEdBQUQsRUFBNkI7QUFDNUIsV0FBTyxDQUNIcGhCLFFBQVEsQ0FBQ2dJLE1BQVQsQ0FBZ0I7QUFDWndLLFFBQUUsRUFBQ0E7QUFEUyxLQUFoQixFQUVFO0FBQ0V2SyxVQUFJLEVBQUM7QUFDRDZXLGNBQU0sRUFBQ0EsTUFETjtBQUVEcUMsWUFBSSxFQUFFQSxJQUZMO0FBR0RDLGdCQUFRLEVBQUVBO0FBSFQ7QUFEUCxLQUZGLENBREcsQ0FBUDtBQVlIOztBQXJCMEMsQ0FBcEIsQ0FBcEIsQzs7Ozs7Ozs7Ozs7QUN4T1AsSUFBSXhoQixNQUFKO0FBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0YsUUFBTSxDQUFDRyxDQUFELEVBQUc7QUFBQ0gsVUFBTSxHQUFDRyxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFELElBQUkyaEIsSUFBSjtBQUFTN2hCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG1EQUFaLEVBQWdFO0FBQUM2aEIsU0FBTyxDQUFDNWhCLENBQUQsRUFBRztBQUFDMmhCLFFBQUksR0FBQzNoQixDQUFMO0FBQU87O0FBQW5CLENBQWhFLEVBQXFGLENBQXJGO0FBQXdGLElBQUlJLE1BQUo7QUFBV04sTUFBTSxDQUFDQyxJQUFQLENBQVksMkNBQVosRUFBd0Q7QUFBQ0ssUUFBTSxDQUFDSixDQUFELEVBQUc7QUFBQ0ksVUFBTSxHQUFDSixDQUFQO0FBQVM7O0FBQXBCLENBQXhELEVBQThFLENBQTlFO0FBQWlGLElBQUlzZ0IsYUFBSixFQUFrQkMsUUFBbEIsRUFBMkJDLGNBQTNCLEVBQTBDRSxhQUExQyxFQUF3REMsY0FBeEQsRUFBdUVDLGVBQXZFLEVBQXVGQyxhQUF2RixFQUFxR0MsY0FBckcsRUFBb0hDLFlBQXBILEVBQWlJTixhQUFqSTtBQUErSTNnQixNQUFNLENBQUNDLElBQVAsQ0FBWSw2Q0FBWixFQUEwRDtBQUFDdWdCLGVBQWEsQ0FBQ3RnQixDQUFELEVBQUc7QUFBQ3NnQixpQkFBYSxHQUFDdGdCLENBQWQ7QUFBZ0IsR0FBbEM7O0FBQW1DdWdCLFVBQVEsQ0FBQ3ZnQixDQUFELEVBQUc7QUFBQ3VnQixZQUFRLEdBQUN2Z0IsQ0FBVDtBQUFXLEdBQTFEOztBQUEyRHdnQixnQkFBYyxDQUFDeGdCLENBQUQsRUFBRztBQUFDd2dCLGtCQUFjLEdBQUN4Z0IsQ0FBZjtBQUFpQixHQUE5Rjs7QUFBK0YwZ0IsZUFBYSxDQUFDMWdCLENBQUQsRUFBRztBQUFDMGdCLGlCQUFhLEdBQUMxZ0IsQ0FBZDtBQUFnQixHQUFoSTs7QUFBaUkyZ0IsZ0JBQWMsQ0FBQzNnQixDQUFELEVBQUc7QUFBQzJnQixrQkFBYyxHQUFDM2dCLENBQWY7QUFBaUIsR0FBcEs7O0FBQXFLNGdCLGlCQUFlLENBQUM1Z0IsQ0FBRCxFQUFHO0FBQUM0Z0IsbUJBQWUsR0FBQzVnQixDQUFoQjtBQUFrQixHQUExTTs7QUFBMk02Z0IsZUFBYSxDQUFDN2dCLENBQUQsRUFBRztBQUFDNmdCLGlCQUFhLEdBQUM3Z0IsQ0FBZDtBQUFnQixHQUE1Tzs7QUFBNk84Z0IsZ0JBQWMsQ0FBQzlnQixDQUFELEVBQUc7QUFBQzhnQixrQkFBYyxHQUFDOWdCLENBQWY7QUFBaUIsR0FBaFI7O0FBQWlSK2dCLGNBQVksQ0FBQy9nQixDQUFELEVBQUc7QUFBQytnQixnQkFBWSxHQUFDL2dCLENBQWI7QUFBZSxHQUFoVDs7QUFBaVR5Z0IsZUFBYSxDQUFDemdCLENBQUQsRUFBRztBQUFDeWdCLGlCQUFhLEdBQUN6Z0IsQ0FBZDtBQUFnQjs7QUFBbFYsQ0FBMUQsRUFBOFksQ0FBOVk7QUFBaVosSUFBSThHLFdBQUosRUFBZ0JDLFdBQWhCLEVBQTRCQyxnQkFBNUIsRUFBNkNDLFdBQTdDO0FBQXlEbkgsTUFBTSxDQUFDQyxJQUFQLENBQVksOENBQVosRUFBMkQ7QUFBQytHLGFBQVcsQ0FBQzlHLENBQUQsRUFBRztBQUFDOEcsZUFBVyxHQUFDOUcsQ0FBWjtBQUFjLEdBQTlCOztBQUErQitHLGFBQVcsQ0FBQy9HLENBQUQsRUFBRztBQUFDK0csZUFBVyxHQUFDL0csQ0FBWjtBQUFjLEdBQTVEOztBQUE2RGdILGtCQUFnQixDQUFDaEgsQ0FBRCxFQUFHO0FBQUNnSCxvQkFBZ0IsR0FBQ2hILENBQWpCO0FBQW1CLEdBQXBHOztBQUFxR2lILGFBQVcsQ0FBQ2pILENBQUQsRUFBRztBQUFDaUgsZUFBVyxHQUFDakgsQ0FBWjtBQUFjOztBQUFsSSxDQUEzRCxFQUErTCxDQUEvTDtBQUFrTSxJQUFJNmMsWUFBSixFQUFpQkMsWUFBakIsRUFBOEJDLGNBQTlCLEVBQTZDQyxZQUE3QyxFQUEwREMsZUFBMUQ7QUFBMEVuZCxNQUFNLENBQUNDLElBQVAsQ0FBWSwrQ0FBWixFQUE0RDtBQUFDOGMsY0FBWSxDQUFDN2MsQ0FBRCxFQUFHO0FBQUM2YyxnQkFBWSxHQUFDN2MsQ0FBYjtBQUFlLEdBQWhDOztBQUFpQzhjLGNBQVksQ0FBQzljLENBQUQsRUFBRztBQUFDOGMsZ0JBQVksR0FBQzljLENBQWI7QUFBZSxHQUFoRTs7QUFBaUUrYyxnQkFBYyxDQUFDL2MsQ0FBRCxFQUFHO0FBQUMrYyxrQkFBYyxHQUFDL2MsQ0FBZjtBQUFpQixHQUFwRzs7QUFBcUdnZCxjQUFZLENBQUNoZCxDQUFELEVBQUc7QUFBQ2dkLGdCQUFZLEdBQUNoZCxDQUFiO0FBQWUsR0FBcEk7O0FBQXFJaWQsaUJBQWUsQ0FBQ2pkLENBQUQsRUFBRztBQUFDaWQsbUJBQWUsR0FBQ2pkLENBQWhCO0FBQWtCOztBQUExSyxDQUE1RCxFQUF3TyxDQUF4TztBQUEyTyxJQUFJc0osaUJBQUosRUFBc0JDLGlCQUF0QixFQUF3Q0MsaUJBQXhDLEVBQTBEQyxzQkFBMUQ7QUFBaUYzSixNQUFNLENBQUNDLElBQVAsQ0FBWSxtREFBWixFQUFnRTtBQUFDdUosbUJBQWlCLENBQUN0SixDQUFELEVBQUc7QUFBQ3NKLHFCQUFpQixHQUFDdEosQ0FBbEI7QUFBb0IsR0FBMUM7O0FBQTJDdUosbUJBQWlCLENBQUN2SixDQUFELEVBQUc7QUFBQ3VKLHFCQUFpQixHQUFDdkosQ0FBbEI7QUFBb0IsR0FBcEY7O0FBQXFGd0osbUJBQWlCLENBQUN4SixDQUFELEVBQUc7QUFBQ3dKLHFCQUFpQixHQUFDeEosQ0FBbEI7QUFBb0IsR0FBOUg7O0FBQStIeUosd0JBQXNCLENBQUN6SixDQUFELEVBQUc7QUFBQ3lKLDBCQUFzQixHQUFDekosQ0FBdkI7QUFBeUI7O0FBQWxMLENBQWhFLEVBQW9QLENBQXBQO0FBQXVQLElBQUkrTCxhQUFKLEVBQWtCQyxhQUFsQixFQUFnQ0MsYUFBaEM7QUFBOENuTSxNQUFNLENBQUNDLElBQVAsQ0FBWSxnREFBWixFQUE2RDtBQUFDZ00sZUFBYSxDQUFDL0wsQ0FBRCxFQUFHO0FBQUMrTCxpQkFBYSxHQUFDL0wsQ0FBZDtBQUFnQixHQUFsQzs7QUFBbUNnTSxlQUFhLENBQUNoTSxDQUFELEVBQUc7QUFBQ2dNLGlCQUFhLEdBQUNoTSxDQUFkO0FBQWdCLEdBQXBFOztBQUFxRWlNLGVBQWEsQ0FBQ2pNLENBQUQsRUFBRztBQUFDaU0saUJBQWEsR0FBQ2pNLENBQWQ7QUFBZ0I7O0FBQXRHLENBQTdELEVBQXFLLENBQXJLO0FBQXdLLElBQUlnZ0IsV0FBSixFQUFnQkMsV0FBaEIsRUFBNEJDLFdBQTVCO0FBQXdDcGdCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDJDQUFaLEVBQXdEO0FBQUNpZ0IsYUFBVyxDQUFDaGdCLENBQUQsRUFBRztBQUFDZ2dCLGVBQVcsR0FBQ2hnQixDQUFaO0FBQWMsR0FBOUI7O0FBQStCaWdCLGFBQVcsQ0FBQ2pnQixDQUFELEVBQUc7QUFBQ2lnQixlQUFXLEdBQUNqZ0IsQ0FBWjtBQUFjLEdBQTVEOztBQUE2RGtnQixhQUFXLENBQUNsZ0IsQ0FBRCxFQUFHO0FBQUNrZ0IsZUFBVyxHQUFDbGdCLENBQVo7QUFBYzs7QUFBMUYsQ0FBeEQsRUFBb0osQ0FBcEo7QUFBdUosSUFBSW9mLFVBQUosRUFBZUMsVUFBZixFQUEwQkMsVUFBMUIsRUFBcUNDLFVBQXJDLEVBQWdEQyxVQUFoRCxFQUEyREMsVUFBM0QsRUFBc0VDLGNBQXRFLEVBQXFGQyxjQUFyRixFQUFvR0MsY0FBcEc7QUFBbUg5ZixNQUFNLENBQUNDLElBQVAsQ0FBWSwwQ0FBWixFQUF1RDtBQUFDcWYsWUFBVSxDQUFDcGYsQ0FBRCxFQUFHO0FBQUNvZixjQUFVLEdBQUNwZixDQUFYO0FBQWEsR0FBNUI7O0FBQTZCcWYsWUFBVSxDQUFDcmYsQ0FBRCxFQUFHO0FBQUNxZixjQUFVLEdBQUNyZixDQUFYO0FBQWEsR0FBeEQ7O0FBQXlEc2YsWUFBVSxDQUFDdGYsQ0FBRCxFQUFHO0FBQUNzZixjQUFVLEdBQUN0ZixDQUFYO0FBQWEsR0FBcEY7O0FBQXFGdWYsWUFBVSxDQUFDdmYsQ0FBRCxFQUFHO0FBQUN1ZixjQUFVLEdBQUN2ZixDQUFYO0FBQWEsR0FBaEg7O0FBQWlId2YsWUFBVSxDQUFDeGYsQ0FBRCxFQUFHO0FBQUN3ZixjQUFVLEdBQUN4ZixDQUFYO0FBQWEsR0FBNUk7O0FBQTZJeWYsWUFBVSxDQUFDemYsQ0FBRCxFQUFHO0FBQUN5ZixjQUFVLEdBQUN6ZixDQUFYO0FBQWEsR0FBeEs7O0FBQXlLMGYsZ0JBQWMsQ0FBQzFmLENBQUQsRUFBRztBQUFDMGYsa0JBQWMsR0FBQzFmLENBQWY7QUFBaUIsR0FBNU07O0FBQTZNMmYsZ0JBQWMsQ0FBQzNmLENBQUQsRUFBRztBQUFDMmYsa0JBQWMsR0FBQzNmLENBQWY7QUFBaUIsR0FBaFA7O0FBQWlQNGYsZ0JBQWMsQ0FBQzVmLENBQUQsRUFBRztBQUFDNGYsa0JBQWMsR0FBQzVmLENBQWY7QUFBaUI7O0FBQXBSLENBQXZELEVBQTZVLENBQTdVO0FBQWdWLElBQUlzZCxjQUFKLEVBQW1CQyxjQUFuQixFQUFrQ0MsY0FBbEMsRUFBaURDLGFBQWpELEVBQStEQyxhQUEvRDtBQUE2RTVkLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGlEQUFaLEVBQThEO0FBQUN1ZCxnQkFBYyxDQUFDdGQsQ0FBRCxFQUFHO0FBQUNzZCxrQkFBYyxHQUFDdGQsQ0FBZjtBQUFpQixHQUFwQzs7QUFBcUN1ZCxnQkFBYyxDQUFDdmQsQ0FBRCxFQUFHO0FBQUN1ZCxrQkFBYyxHQUFDdmQsQ0FBZjtBQUFpQixHQUF4RTs7QUFBeUV3ZCxnQkFBYyxDQUFDeGQsQ0FBRCxFQUFHO0FBQUN3ZCxrQkFBYyxHQUFDeGQsQ0FBZjtBQUFpQixHQUE1Rzs7QUFBNkd5ZCxlQUFhLENBQUN6ZCxDQUFELEVBQUc7QUFBQ3lkLGlCQUFhLEdBQUN6ZCxDQUFkO0FBQWdCLEdBQTlJOztBQUErSTBkLGVBQWEsQ0FBQzFkLENBQUQsRUFBRztBQUFDMGQsaUJBQWEsR0FBQzFkLENBQWQ7QUFBZ0I7O0FBQWhMLENBQTlELEVBQWdQLEVBQWhQO0FBQW9QLElBQUk0TSxXQUFKLEVBQWdCQyxVQUFoQixFQUEyQkMsaUJBQTNCLEVBQTZDRSxvQkFBN0MsRUFBa0VFLGVBQWxFLEVBQWtGQyxrQkFBbEYsRUFBcUdDLGtCQUFyRyxFQUF3SEwsY0FBeEgsRUFBdUlNLG1CQUF2SSxFQUEySkMsbUJBQTNKLEVBQStLQyxtQkFBL0ssRUFBbU1DLG9CQUFuTSxFQUF3TkMscUJBQXhOLEVBQThPUix1QkFBOU8sRUFBc1FTLG9CQUF0USxFQUEyUkssc0JBQTNSLEVBQWtURyxzQkFBbFQsRUFBeVVGLDRCQUF6VSxFQUFzV0MsNkJBQXRXLEVBQW9ZTixrQkFBcFksRUFBdVpDLHdCQUF2WixFQUFnYkMsa0JBQWhiLEVBQW1jQyxxQkFBbmM7QUFBeWRoTyxNQUFNLENBQUNDLElBQVAsQ0FBWSw4Q0FBWixFQUEyRDtBQUFDNk0sYUFBVyxDQUFDNU0sQ0FBRCxFQUFHO0FBQUM0TSxlQUFXLEdBQUM1TSxDQUFaO0FBQWMsR0FBOUI7O0FBQStCNk0sWUFBVSxDQUFDN00sQ0FBRCxFQUFHO0FBQUM2TSxjQUFVLEdBQUM3TSxDQUFYO0FBQWEsR0FBMUQ7O0FBQTJEOE0sbUJBQWlCLENBQUM5TSxDQUFELEVBQUc7QUFBQzhNLHFCQUFpQixHQUFDOU0sQ0FBbEI7QUFBb0IsR0FBcEc7O0FBQXFHZ04sc0JBQW9CLENBQUNoTixDQUFELEVBQUc7QUFBQ2dOLHdCQUFvQixHQUFDaE4sQ0FBckI7QUFBdUIsR0FBcEo7O0FBQXFKa04saUJBQWUsQ0FBQ2xOLENBQUQsRUFBRztBQUFDa04sbUJBQWUsR0FBQ2xOLENBQWhCO0FBQWtCLEdBQTFMOztBQUEyTG1OLG9CQUFrQixDQUFDbk4sQ0FBRCxFQUFHO0FBQUNtTixzQkFBa0IsR0FBQ25OLENBQW5CO0FBQXFCLEdBQXRPOztBQUF1T29OLG9CQUFrQixDQUFDcE4sQ0FBRCxFQUFHO0FBQUNvTixzQkFBa0IsR0FBQ3BOLENBQW5CO0FBQXFCLEdBQWxSOztBQUFtUitNLGdCQUFjLENBQUMvTSxDQUFELEVBQUc7QUFBQytNLGtCQUFjLEdBQUMvTSxDQUFmO0FBQWlCLEdBQXRUOztBQUF1VHFOLHFCQUFtQixDQUFDck4sQ0FBRCxFQUFHO0FBQUNxTix1QkFBbUIsR0FBQ3JOLENBQXBCO0FBQXNCLEdBQXBXOztBQUFxV3NOLHFCQUFtQixDQUFDdE4sQ0FBRCxFQUFHO0FBQUNzTix1QkFBbUIsR0FBQ3ROLENBQXBCO0FBQXNCLEdBQWxaOztBQUFtWnVOLHFCQUFtQixDQUFDdk4sQ0FBRCxFQUFHO0FBQUN1Tix1QkFBbUIsR0FBQ3ZOLENBQXBCO0FBQXNCLEdBQWhjOztBQUFpY3dOLHNCQUFvQixDQUFDeE4sQ0FBRCxFQUFHO0FBQUN3Tix3QkFBb0IsR0FBQ3hOLENBQXJCO0FBQXVCLEdBQWhmOztBQUFpZnlOLHVCQUFxQixDQUFDek4sQ0FBRCxFQUFHO0FBQUN5Tix5QkFBcUIsR0FBQ3pOLENBQXRCO0FBQXdCLEdBQWxpQjs7QUFBbWlCaU4seUJBQXVCLENBQUNqTixDQUFELEVBQUc7QUFBQ2lOLDJCQUF1QixHQUFDak4sQ0FBeEI7QUFBMEIsR0FBeGxCOztBQUF5bEIwTixzQkFBb0IsQ0FBQzFOLENBQUQsRUFBRztBQUFDME4sd0JBQW9CLEdBQUMxTixDQUFyQjtBQUF1QixHQUF4b0I7O0FBQXlvQitOLHdCQUFzQixDQUFDL04sQ0FBRCxFQUFHO0FBQUMrTiwwQkFBc0IsR0FBQy9OLENBQXZCO0FBQXlCLEdBQTVyQjs7QUFBNnJCa08sd0JBQXNCLENBQUNsTyxDQUFELEVBQUc7QUFBQ2tPLDBCQUFzQixHQUFDbE8sQ0FBdkI7QUFBeUIsR0FBaHZCOztBQUFpdkJnTyw4QkFBNEIsQ0FBQ2hPLENBQUQsRUFBRztBQUFDZ08sZ0NBQTRCLEdBQUNoTyxDQUE3QjtBQUErQixHQUFoekI7O0FBQWl6QmlPLCtCQUE2QixDQUFDak8sQ0FBRCxFQUFHO0FBQUNpTyxpQ0FBNkIsR0FBQ2pPLENBQTlCO0FBQWdDLEdBQWwzQjs7QUFBbTNCMk4sb0JBQWtCLENBQUMzTixDQUFELEVBQUc7QUFBQzJOLHNCQUFrQixHQUFDM04sQ0FBbkI7QUFBcUIsR0FBOTVCOztBQUErNUI0TiwwQkFBd0IsQ0FBQzVOLENBQUQsRUFBRztBQUFDNE4sNEJBQXdCLEdBQUM1TixDQUF6QjtBQUEyQixHQUF0OUI7O0FBQXU5QjZOLG9CQUFrQixDQUFDN04sQ0FBRCxFQUFHO0FBQUM2TixzQkFBa0IsR0FBQzdOLENBQW5CO0FBQXFCLEdBQWxnQzs7QUFBbWdDOE4sdUJBQXFCLENBQUM5TixDQUFELEVBQUc7QUFBQzhOLHlCQUFxQixHQUFDOU4sQ0FBdEI7QUFBd0I7O0FBQXBqQyxDQUEzRCxFQUFpbkMsRUFBam5DO0FBQXFuQyxJQUFJc2UsZ0JBQUosRUFBcUJDLGdCQUFyQixFQUFzQ0MsZ0JBQXRDO0FBQXVEMWUsTUFBTSxDQUFDQyxJQUFQLENBQVksb0RBQVosRUFBaUU7QUFBQ3VlLGtCQUFnQixDQUFDdGUsQ0FBRCxFQUFHO0FBQUNzZSxvQkFBZ0IsR0FBQ3RlLENBQWpCO0FBQW1CLEdBQXhDOztBQUF5Q3VlLGtCQUFnQixDQUFDdmUsQ0FBRCxFQUFHO0FBQUN1ZSxvQkFBZ0IsR0FBQ3ZlLENBQWpCO0FBQW1CLEdBQWhGOztBQUFpRndlLGtCQUFnQixDQUFDeGUsQ0FBRCxFQUFHO0FBQUN3ZSxvQkFBZ0IsR0FBQ3hlLENBQWpCO0FBQW1COztBQUF4SCxDQUFqRSxFQUEyTCxFQUEzTDtBQUErTCxJQUFJb0ksaUJBQUosRUFBc0JDLGlCQUF0QixFQUF3Q0MsaUJBQXhDO0FBQTBEeEksTUFBTSxDQUFDQyxJQUFQLENBQVksb0RBQVosRUFBaUU7QUFBQ3FJLG1CQUFpQixDQUFDcEksQ0FBRCxFQUFHO0FBQUNvSSxxQkFBaUIsR0FBQ3BJLENBQWxCO0FBQW9CLEdBQTFDOztBQUEyQ3FJLG1CQUFpQixDQUFDckksQ0FBRCxFQUFHO0FBQUNxSSxxQkFBaUIsR0FBQ3JJLENBQWxCO0FBQW9CLEdBQXBGOztBQUFxRnNJLG1CQUFpQixDQUFDdEksQ0FBRCxFQUFHO0FBQUNzSSxxQkFBaUIsR0FBQ3RJLENBQWxCO0FBQW9COztBQUE5SCxDQUFqRSxFQUFpTSxFQUFqTTtBQUFxTSxJQUFJOFosV0FBSixFQUFnQkMsV0FBaEIsRUFBNEJDLGtCQUE1QjtBQUErQ2xhLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLCtDQUFaLEVBQTREO0FBQUMrWixhQUFXLENBQUM5WixDQUFELEVBQUc7QUFBQzhaLGVBQVcsR0FBQzlaLENBQVo7QUFBYyxHQUE5Qjs7QUFBK0IrWixhQUFXLENBQUMvWixDQUFELEVBQUc7QUFBQytaLGVBQVcsR0FBQy9aLENBQVo7QUFBYyxHQUE1RDs7QUFBNkRnYSxvQkFBa0IsQ0FBQ2hhLENBQUQsRUFBRztBQUFDZ2Esc0JBQWtCLEdBQUNoYSxDQUFuQjtBQUFxQjs7QUFBeEcsQ0FBNUQsRUFBc0ssRUFBdEs7QUFBMEssSUFBSWdDLGtCQUFKLEVBQXVCc0ssc0JBQXZCLEVBQThDQyxzQkFBOUM7QUFBcUV6TSxNQUFNLENBQUNDLElBQVAsQ0FBWSwyREFBWixFQUF3RTtBQUFDaUMsb0JBQWtCLENBQUNoQyxDQUFELEVBQUc7QUFBQ2dDLHNCQUFrQixHQUFDaEMsQ0FBbkI7QUFBcUIsR0FBNUM7O0FBQTZDc00sd0JBQXNCLENBQUN0TSxDQUFELEVBQUc7QUFBQ3NNLDBCQUFzQixHQUFDdE0sQ0FBdkI7QUFBeUIsR0FBaEc7O0FBQWlHdU0sd0JBQXNCLENBQUN2TSxDQUFELEVBQUc7QUFBQ3VNLDBCQUFzQixHQUFDdk0sQ0FBdkI7QUFBeUI7O0FBQXBKLENBQXhFLEVBQThOLEVBQTlOO0FBQWtPLElBQUlpUixlQUFKLEVBQW9CQyxlQUFwQixFQUFvQ0MsY0FBcEMsRUFBbURJLHlCQUFuRCxFQUE2RUgsWUFBN0UsRUFBMEZDLGlCQUExRixFQUE0R1EsaUJBQTVHLEVBQThITCx1QkFBOUgsRUFBc0pDLHNCQUF0SixFQUE2S0UscUJBQTdLLEVBQW1NQyxtQkFBbk0sRUFBdU5PLGVBQXZOLEVBQXVPQyxtQkFBdk8sRUFBMlBDLGVBQTNQLEVBQTJRQyxlQUEzUSxFQUEyUlAsMkJBQTNSLEVBQXVURCx5QkFBdlQsRUFBaVZSLHdCQUFqVixFQUEwV1UsK0JBQTFXLEVBQTBZTiwwQkFBMVksRUFBcWFPLCtCQUFyYSxFQUFxY00sbUJBQXJjLEVBQXlkQyxZQUF6ZCxFQUFzZU4sMEJBQXRlO0FBQWlnQnBTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG1EQUFaLEVBQWdFO0FBQUNrUixpQkFBZSxDQUFDalIsQ0FBRCxFQUFHO0FBQUNpUixtQkFBZSxHQUFDalIsQ0FBaEI7QUFBa0IsR0FBdEM7O0FBQXVDa1IsaUJBQWUsQ0FBQ2xSLENBQUQsRUFBRztBQUFDa1IsbUJBQWUsR0FBQ2xSLENBQWhCO0FBQWtCLEdBQTVFOztBQUE2RW1SLGdCQUFjLENBQUNuUixDQUFELEVBQUc7QUFBQ21SLGtCQUFjLEdBQUNuUixDQUFmO0FBQWlCLEdBQWhIOztBQUFpSHVSLDJCQUF5QixDQUFDdlIsQ0FBRCxFQUFHO0FBQUN1Uiw2QkFBeUIsR0FBQ3ZSLENBQTFCO0FBQTRCLEdBQTFLOztBQUEyS29SLGNBQVksQ0FBQ3BSLENBQUQsRUFBRztBQUFDb1IsZ0JBQVksR0FBQ3BSLENBQWI7QUFBZSxHQUExTTs7QUFBMk1xUixtQkFBaUIsQ0FBQ3JSLENBQUQsRUFBRztBQUFDcVIscUJBQWlCLEdBQUNyUixDQUFsQjtBQUFvQixHQUFwUDs7QUFBcVA2UixtQkFBaUIsQ0FBQzdSLENBQUQsRUFBRztBQUFDNlIscUJBQWlCLEdBQUM3UixDQUFsQjtBQUFvQixHQUE5Ujs7QUFBK1J3Uix5QkFBdUIsQ0FBQ3hSLENBQUQsRUFBRztBQUFDd1IsMkJBQXVCLEdBQUN4UixDQUF4QjtBQUEwQixHQUFwVjs7QUFBcVZ5Uix3QkFBc0IsQ0FBQ3pSLENBQUQsRUFBRztBQUFDeVIsMEJBQXNCLEdBQUN6UixDQUF2QjtBQUF5QixHQUF4WTs7QUFBeVkyUix1QkFBcUIsQ0FBQzNSLENBQUQsRUFBRztBQUFDMlIseUJBQXFCLEdBQUMzUixDQUF0QjtBQUF3QixHQUExYjs7QUFBMmI0UixxQkFBbUIsQ0FBQzVSLENBQUQsRUFBRztBQUFDNFIsdUJBQW1CLEdBQUM1UixDQUFwQjtBQUFzQixHQUF4ZTs7QUFBeWVtUyxpQkFBZSxDQUFDblMsQ0FBRCxFQUFHO0FBQUNtUyxtQkFBZSxHQUFDblMsQ0FBaEI7QUFBa0IsR0FBOWdCOztBQUErZ0JvUyxxQkFBbUIsQ0FBQ3BTLENBQUQsRUFBRztBQUFDb1MsdUJBQW1CLEdBQUNwUyxDQUFwQjtBQUFzQixHQUE1akI7O0FBQTZqQnFTLGlCQUFlLENBQUNyUyxDQUFELEVBQUc7QUFBQ3FTLG1CQUFlLEdBQUNyUyxDQUFoQjtBQUFrQixHQUFsbUI7O0FBQW1tQnNTLGlCQUFlLENBQUN0UyxDQUFELEVBQUc7QUFBQ3NTLG1CQUFlLEdBQUN0UyxDQUFoQjtBQUFrQixHQUF4b0I7O0FBQXlvQitSLDZCQUEyQixDQUFDL1IsQ0FBRCxFQUFHO0FBQUMrUiwrQkFBMkIsR0FBQy9SLENBQTVCO0FBQThCLEdBQXRzQjs7QUFBdXNCOFIsMkJBQXlCLENBQUM5UixDQUFELEVBQUc7QUFBQzhSLDZCQUF5QixHQUFDOVIsQ0FBMUI7QUFBNEIsR0FBaHdCOztBQUFpd0JzUiwwQkFBd0IsQ0FBQ3RSLENBQUQsRUFBRztBQUFDc1IsNEJBQXdCLEdBQUN0UixDQUF6QjtBQUEyQixHQUF4ekI7O0FBQXl6QmdTLGlDQUErQixDQUFDaFMsQ0FBRCxFQUFHO0FBQUNnUyxtQ0FBK0IsR0FBQ2hTLENBQWhDO0FBQWtDLEdBQTkzQjs7QUFBKzNCMFIsNEJBQTBCLENBQUMxUixDQUFELEVBQUc7QUFBQzBSLDhCQUEwQixHQUFDMVIsQ0FBM0I7QUFBNkIsR0FBMTdCOztBQUEyN0JpUyxpQ0FBK0IsQ0FBQ2pTLENBQUQsRUFBRztBQUFDaVMsbUNBQStCLEdBQUNqUyxDQUFoQztBQUFrQyxHQUFoZ0M7O0FBQWlnQ3VTLHFCQUFtQixDQUFDdlMsQ0FBRCxFQUFHO0FBQUN1Uyx1QkFBbUIsR0FBQ3ZTLENBQXBCO0FBQXNCLEdBQTlpQzs7QUFBK2lDd1MsY0FBWSxDQUFDeFMsQ0FBRCxFQUFHO0FBQUN3UyxnQkFBWSxHQUFDeFMsQ0FBYjtBQUFlLEdBQTlrQzs7QUFBK2tDa1MsNEJBQTBCLENBQUNsUyxDQUFELEVBQUc7QUFBQ2tTLDhCQUEwQixHQUFDbFMsQ0FBM0I7QUFBNkI7O0FBQTFvQyxDQUFoRSxFQUE0c0MsRUFBNXNDO0FBQWd0QyxJQUFJb2EsaUJBQUosRUFBc0JDLGlCQUF0QixFQUF3Q0UsaUJBQXhDLEVBQTBEQyxpQkFBMUQsRUFBNEVDLHVCQUE1RSxFQUFvR0Msc0JBQXBHLEVBQTJISixrQkFBM0gsRUFBOElRLHFCQUE5SSxFQUFvS0MscUJBQXBLLEVBQTBMSix5QkFBMUwsRUFBb05DLHVCQUFwTixFQUE0T0ksYUFBNU8sRUFBMFBDLGFBQTFQLEVBQXdRSixrQkFBeFEsRUFBMlJLLFdBQTNSLEVBQXVTQyxXQUF2UyxFQUFtVEMsV0FBblQ7QUFBK1R0YixNQUFNLENBQUNDLElBQVAsQ0FBWSxvREFBWixFQUFpRTtBQUFDcWEsbUJBQWlCLENBQUNwYSxDQUFELEVBQUc7QUFBQ29hLHFCQUFpQixHQUFDcGEsQ0FBbEI7QUFBb0IsR0FBMUM7O0FBQTJDcWEsbUJBQWlCLENBQUNyYSxDQUFELEVBQUc7QUFBQ3FhLHFCQUFpQixHQUFDcmEsQ0FBbEI7QUFBb0IsR0FBcEY7O0FBQXFGdWEsbUJBQWlCLENBQUN2YSxDQUFELEVBQUc7QUFBQ3VhLHFCQUFpQixHQUFDdmEsQ0FBbEI7QUFBb0IsR0FBOUg7O0FBQStId2EsbUJBQWlCLENBQUN4YSxDQUFELEVBQUc7QUFBQ3dhLHFCQUFpQixHQUFDeGEsQ0FBbEI7QUFBb0IsR0FBeEs7O0FBQXlLeWEseUJBQXVCLENBQUN6YSxDQUFELEVBQUc7QUFBQ3lhLDJCQUF1QixHQUFDemEsQ0FBeEI7QUFBMEIsR0FBOU47O0FBQStOMGEsd0JBQXNCLENBQUMxYSxDQUFELEVBQUc7QUFBQzBhLDBCQUFzQixHQUFDMWEsQ0FBdkI7QUFBeUIsR0FBbFI7O0FBQW1Sc2Esb0JBQWtCLENBQUN0YSxDQUFELEVBQUc7QUFBQ3NhLHNCQUFrQixHQUFDdGEsQ0FBbkI7QUFBcUIsR0FBOVQ7O0FBQStUOGEsdUJBQXFCLENBQUM5YSxDQUFELEVBQUc7QUFBQzhhLHlCQUFxQixHQUFDOWEsQ0FBdEI7QUFBd0IsR0FBaFg7O0FBQWlYK2EsdUJBQXFCLENBQUMvYSxDQUFELEVBQUc7QUFBQythLHlCQUFxQixHQUFDL2EsQ0FBdEI7QUFBd0IsR0FBbGE7O0FBQW1hMmEsMkJBQXlCLENBQUMzYSxDQUFELEVBQUc7QUFBQzJhLDZCQUF5QixHQUFDM2EsQ0FBMUI7QUFBNEIsR0FBNWQ7O0FBQTZkNGEseUJBQXVCLENBQUM1YSxDQUFELEVBQUc7QUFBQzRhLDJCQUF1QixHQUFDNWEsQ0FBeEI7QUFBMEIsR0FBbGhCOztBQUFtaEJnYixlQUFhLENBQUNoYixDQUFELEVBQUc7QUFBQ2diLGlCQUFhLEdBQUNoYixDQUFkO0FBQWdCLEdBQXBqQjs7QUFBcWpCaWIsZUFBYSxDQUFDamIsQ0FBRCxFQUFHO0FBQUNpYixpQkFBYSxHQUFDamIsQ0FBZDtBQUFnQixHQUF0bEI7O0FBQXVsQjZhLG9CQUFrQixDQUFDN2EsQ0FBRCxFQUFHO0FBQUM2YSxzQkFBa0IsR0FBQzdhLENBQW5CO0FBQXFCLEdBQWxvQjs7QUFBbW9Ca2IsYUFBVyxDQUFDbGIsQ0FBRCxFQUFHO0FBQUNrYixlQUFXLEdBQUNsYixDQUFaO0FBQWMsR0FBaHFCOztBQUFpcUJtYixhQUFXLENBQUNuYixDQUFELEVBQUc7QUFBQ21iLGVBQVcsR0FBQ25iLENBQVo7QUFBYyxHQUE5ckI7O0FBQStyQm9iLGFBQVcsQ0FBQ3BiLENBQUQsRUFBRztBQUFDb2IsZUFBVyxHQUFDcGIsQ0FBWjtBQUFjOztBQUE1dEIsQ0FBakUsRUFBK3hCLEVBQS94QjtBQUFteUIsSUFBSTZlLFdBQUosRUFBZ0JDLFNBQWhCO0FBQTBCaGYsTUFBTSxDQUFDQyxJQUFQLENBQVksNkNBQVosRUFBMEQ7QUFBQzhlLGFBQVcsQ0FBQzdlLENBQUQsRUFBRztBQUFDNmUsZUFBVyxHQUFDN2UsQ0FBWjtBQUFjLEdBQTlCOztBQUErQjhlLFdBQVMsQ0FBQzllLENBQUQsRUFBRztBQUFDOGUsYUFBUyxHQUFDOWUsQ0FBVjtBQUFZOztBQUF4RCxDQUExRCxFQUFvSCxFQUFwSDtBQStDOXJRMmhCLElBQUk7QUFHSiIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFVzdWFyaW9zLCBDbGF2ZVJlZ2lzdHJvLCBDYXJnb3MsIEltYWdlcywgRXNwZWNpYWxpZGFkZXMsIENvbnN1bHRvcmlvcywgTWVkaWNvcywgUGFjaWVudGVzLCBFbXByZXNhcywgVHVybm9zLCBTYWxhcywgQ2FtYXMsIE1lZGljYW1lbnRvcywgQ29tcHJhcywgVmVudGFzLCBDbGllbnRlcywgUmVwb3J0ZUZhcm1hY2lhLCBGaWNoYXMsIEZpY2hhc0VuZmVybWVyaWEsIFJlcG9ydGVGaWNoYXMsIEhpc3RvcmlhbGVzLCBDb25zdWx0YXMsIEludGVybmFjaW9uZXMsIFF1aXJvZmFubywgU2lnbm9zVml0YWxlcywgU2FsYVBhcnRvcywgRGlhZ25vc3RpY28sIExhYm9yYXRvcmlvcywgUGxhbkN1ZW50YXMsIENvbXByb2JhbnRlcywgTWF5b3JlcywgRXN0YWRvc0ZpbmFuY2llcm9zLCBFc3RhZG9Db250YSwgTGluZWFzLCBGaWNoYUludGVybmFjaW9uLCBEZXRhbGxlRmljaGEsIFNlcnZpY2lvcyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICAvKlVwbG9hZFNlcnZlci5pbml0KHtcclxuICAgICAgdG1wRGlyOiAgJ0Q6L21ldGVvcl9wcm9qZWN0cy9jbGluaWNhbF9zeXN0ZW1fMC45Ly50bXAnLFxyXG4gICAgICB1cGxvYWREaXI6ICdEOi9tZXRlb3JfcHJvamVjdHMvY2xpbmljYWxfc3lzdGVtXzAuOS8udXBsb2Fkcy8nLFxyXG4gICAgICBjaGVja0NyZWF0ZURpcmVjdG9yaWVzOiB0cnVlIC8vY3JlYXRlIHRoZSBkaXJlY3RvcmllcyBmb3IgeW91XHJcbiAgfSk7Ki9cclxuXHJcbiAvL0FETUlOSVNUUkFET1JcclxuICAgIE1ldGVvci5wdWJsaXNoKCd1c3VhcmlvcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFVzdWFyaW9zLmZpbmQoe30se3NvcnQ6e25vbWJyZTogMSwgYXBfcGF0ZXJubzogMSwgYXBfbWF0ZXJubzogMX19KTsvL3tlc3RhZG86eyRuZTonRWxpbWluYWRvJ319XHJcbiAgICB9KTtcclxuICAgIE1ldGVvci5wdWJsaXNoKCdjbGF2ZVJlZ2lzdHJvJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gQ2xhdmVSZWdpc3Ryby5maW5kKHt9KTtcclxuICAgIH0pO1xyXG4gICAgLypNZXRlb3IucHVibGlzaCgnaW1hZ2VzJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gSW1hZ2VzLmZpbmQoe30sIHtzb3J0OiB7bm9tYnJlX2ltZzogMX19KTtcclxuICAgIH0pOyovXHJcbiAgICAvKk1ldGVvci5wdWJsaXNoKCdlc3BlY2lhbGlkYWRlcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gRXNwZWNpYWxpZGFkZXMuZmluZCh7fSwge3NvcnQ6IHtub21icmVfZXNwOiAxfX0pO1xyXG4gICAgfSk7Ki9cclxuICAgIC8vQ09OU1VMVE9SSU9TXHJcbiAgICBNZXRlb3IucHVibGlzaCgnY29uc3VsdG9yaW9zJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gQ29uc3VsdG9yaW9zLmZpbmQoe30sIHtzb3J0OiB7bm9tYnJlX2NvbnM6IDF9fSk7XHJcbiAgICB9KTtcclxuICAgIC8vQ0FSR09TXHJcbiAgICBNZXRlb3IucHVibGlzaCgnY2FyZ29zJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gQ2FyZ29zLmZpbmQoe30sIHtzb3J0OiB7bm9tYnJlX2NhcmdvOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL0VNUFJFU0FTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnZW1wcmVzYXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBFbXByZXNhcy5maW5kKHt9LCB7c29ydDoge25vbWJyZV9lbXByZXNhOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL1RVUk5PU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ3R1cm5vcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFR1cm5vcy5maW5kKHt9LCB7c29ydDoge25vbWJyZV90dXJubzogMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9NRURJQ09TXHJcbiAgICBNZXRlb3IucHVibGlzaCgnbWVkaWNvcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIE1lZGljb3MuZmluZCh7fSx7c29ydDoge2VzcGVjaWFsaWRhZDogMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9TQUxBU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ3NhbGFzJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gU2FsYXMuZmluZCh7fSx7c29ydDoge25vbWJyZV9zYWxhOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL0NBTUFTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnY2FtYXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBDYW1hcy5maW5kKHt9LHtzb3J0OiB7bnJvX2NhbWE6IDF9fSk7XHJcbiAgICB9KTtcclxuICAgIC8vU0VSVklDSU9TXHJcbiAgICBNZXRlb3IucHVibGlzaCgnc2VydmljaW9zJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gU2VydmljaW9zLmZpbmQoe30se3NvcnQ6IHtzZXJ2aWNpbzogMX19KTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4vL0ZBUk1BQ0lBXHJcbiAgICAvLyBNRURJQ0FNRU5UT1NcclxuICAgIE1ldGVvci5wdWJsaXNoKCdtZWRpY2FtZW50b3MnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBNZWRpY2FtZW50b3MuZmluZCh7fSx7c29ydDoge25vbWJyZV9jb21lcmNpYWw6IDF9fSk7XHJcbiAgICB9KTtcclxuICAgIC8vQ09NUFJBIERFIE1FRElDQU1FTlRPU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2NvbXByYXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBDb21wcmFzLmZpbmQoe30se3NvcnQ6IHtjb2RpZ29fY29tcHJhOiAtMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9WRU5UQSBERSBNRURJQ0FNRU5UT1NcclxuICAgIE1ldGVvci5wdWJsaXNoKCd2ZW50YXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBWZW50YXMuZmluZCh7fSx7c29ydDoge2NvZGlnb192ZW50YTogMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9SRVBPUlRFIEZBUk1BQ0lBXHJcbiAgICBNZXRlb3IucHVibGlzaCgncmVwb3J0ZWZhcm1hY2lhJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gUmVwb3J0ZUZhcm1hY2lhLmZpbmQoe30sIHtzb3J0OiB7Y29kaWdvX3JlcG9ydGU6IC0xfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL0NMSUVOVEVTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnY2xpZW50ZXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBDbGllbnRlcy5maW5kKHt9LCB7c29ydDoge25vbWJyZTogMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9MSU5FQSBGQVJNQUNFVVRJQ0FcclxuICAgIE1ldGVvci5wdWJsaXNoKCdsaW5lYXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBMaW5lYXMuZmluZCh7fSwge3NvcnQ6IHtub21icmVfbGluZWE6IDF9fSk7XHJcbiAgICB9KVxyXG4vL0FGSUxJQUNJT04gWSBGSUNIQUpFXHJcbiAgICAvL1BBQ0lFTlRFU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ3BhY2llbnRlcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFBhY2llbnRlcy5maW5kKHt9LHtzb3J0OiB7Y29kaWdvX2FzZWd1cmFkbzogMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9GSUNIQVNcclxuICAgIE1ldGVvci5wdWJsaXNoKCdmaWNoYXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBGaWNoYXMuZmluZCh7fSk7XHJcbiAgICB9KTtcclxuICAgIC8vRklDSEFTIEVORkVSTUVSSUFcclxuICAgIE1ldGVvci5wdWJsaXNoKCdmaWNoYXNlbmZlcm1lcmlhJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gRmljaGFzRW5mZXJtZXJpYS5maW5kKHt9LHtzb3J0OiB7bnJvOiAtMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9SRVBPUlRFIERFIEZJQ0hBU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ3JlcG9ydGVmaWNoYXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBSZXBvcnRlRmljaGFzLmZpbmQoe30pO1xyXG4gICAgfSlcclxuICAgIC8vRklDSEEgSU5URVJOQUNJT05cclxuICAgIE1ldGVvci5wdWJsaXNoKCdmaWNoYWludGVybmFjaW9uJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gRmljaGFJbnRlcm5hY2lvbi5maW5kKHt9LCB7c29ydDoge2ZlY2hhX3JlZzogMX19KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERFVEFMTEUgRklDSEEgRU5GRVJNRVJJQVxyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2RldGFsbGVmaWNoYScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIERldGFsbGVGaWNoYS5maW5kKHt9KTtcclxuICAgIH0pXHJcblxyXG4vL0NPTlNVTFRBUyBNRURJQ0FTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnaGlzdG9yaWFsZXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBIaXN0b3JpYWxlcy5maW5kKHt9KTtcclxuICAgIH0pO1xyXG4gICAgLy9ESUFHTk9TVElDT1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2RpYWdub3N0aWNvJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gRGlhZ25vc3RpY28uZmluZCh7fSx7c29ydDoge25vbWJyZV9kaWFnOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL0xBQk9SQVRPUklPU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2xhYm9yYXRvcmlvcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIExhYm9yYXRvcmlvcy5maW5kKHt9LHtzb3J0OiB7bm9tYl9ncmFsOiAxLCBub21iX2FuYWxpc2lzOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL0NPTlNVTFRBU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2NvbnN1bHRhcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRhcy5maW5kKHt9LHtzb3J0OiB7ZmVjaGFfcmVnOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvL0lOVEVSTkFDSU9ORVNcclxuICAgIE1ldGVvci5wdWJsaXNoKCdpbnRlcm5hY2lvbmVzJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gSW50ZXJuYWNpb25lcy5maW5kKHt9LHtzb3J0OiB7ZmVjaGFfcmVnOiAxfX0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9RVUlST0ZBTk9cclxuICAgIE1ldGVvci5wdWJsaXNoKCdxdWlyb2Zhbm8nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBRdWlyb2Zhbm8uZmluZCh7fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1NJR05PUyBWSVRBTEVTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnc2lnbm9zdml0YWxlcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFNpZ25vc1ZpdGFsZXMuZmluZCh7fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1NJR05PUyBWSVRBTEVTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnc2FsYXBhcnRvcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFNhbGFQYXJ0b3MuZmluZCh7fSk7XHJcbiAgICB9KTtcclxuXHJcbi8vQ09OVEFCSUxJREFEXHJcbiAgICAvL1BMQU4gREUgQ1VFTlRBU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ3BsYW5jdWVudGFzJywgZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gUGxhbkN1ZW50YXMuZmluZCh7fSwge3NvcnQ6IHtjb2RpZ29fY3VlbnRhOiAxfX0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDT01QUk9CQU5URVNcclxuICAgIE1ldGVvci5wdWJsaXNoKCdjb21wcm9iYW50ZXMnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBDb21wcm9iYW50ZXMuZmluZCh7fSwge3NvcnQ6IHtmZWNoYTogMX19KTtcclxuICAgIH0pO1xyXG4gICAgLy9NQVlPUkVTXHJcbiAgICBNZXRlb3IucHVibGlzaCgnbWF5b3JlcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIE1heW9yZXMuZmluZCh7fSk7XHJcbiAgICB9KTtcclxuICAgIC8vRVNUQURPUyBGSU5BTkNJRVJPU1xyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2VzdGFkb3NmaW5hbmNpZXJvcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIEVzdGFkb3NGaW5hbmNpZXJvcy5maW5kKHt9KTtcclxuICAgIH0pO1xyXG4gICAgLy9FU1RBRE8gQ09OVEFCSUxJREFEXHJcbiAgICBNZXRlb3IucHVibGlzaCgnZXN0YWRvY29udGEnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBFc3RhZG9Db250YS5maW5kKHt9KTtcclxuICAgIH0pXHJcblxyXG4gICAgTWV0ZW9yLnB1Ymxpc2goJ2ltYWdlcycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIEltYWdlcy5maW5kKCkuY3Vyc29yO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcclxuaW1wb3J0IHsgSW5kZXgsIE1pbmltb25nb0VuZ2luZSB9IGZyb20gJ21ldGVvci9lYXN5OnNlYXJjaCc7XHJcbmltcG9ydCB7IEZpbGVzQ29sbGVjdGlvbiB9IGZyb20gJ21ldGVvci9vc3RyaW86ZmlsZXMnO1xyXG4vL2ltcG9ydCBmcyBmcm9tICdmcyc7XHJcbi8qXHJcbk1ldGVvci5vbkNvbm5lY3Rpb24oZnVuY3Rpb24oY29ubikge1xyXG4gICAgY29uc29sZS5sb2coY29ubi5jbGllbnRBZGRyZXNzKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbm4uaHR0cEhlYWRlcnMuaG9zdCk7XHJcbn0pOyovXHJcbi8vY29uc3QgZnMgPSAgTnBtLnJlcXVpcmUoJ2ZzLWV4dHJhJyk7XHJcblxyXG4vL0dFTkVSQUxcclxuICAgIC8vQ0FSR0FSIElNQUdFTkVTXHJcbiAgICBleHBvcnQgY29uc3QgSW1hZ2VzID0gbmV3IEZpbGVzQ29sbGVjdGlvbih7XHJcbiAgICAgICAgLy9kZWJ1ZzogdHJ1ZSxcclxuICAgICAgICBjb2xsZWN0aW9uTmFtZTogJ0ltYWdlcycsXHJcbiAgICAgICAgYWxsb3dDbGllbnRDb2RlOiBmYWxzZSwgLy8gRGlzYWxsb3cgcmVtb3ZlIGZpbGVzIGZyb20gQ2xpZW50XHJcbiAgICAgICAgc3RvcmFnZVBhdGg6IGZ1bmN0aW9uIChmaWxlT2JqKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCB1c2UgXCJmYXQgYXJyb3dcIiBhcyBjb250ZXh0IGlzIG1hdHRlcnNcclxuICAgICAgICAgICAgaWYgKGZpbGVPYmogJiYgZmlsZU9iai5faWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gcHJvY2Vzcy5lbnYuUFdEICsgJy9VcGxvYWRzL0ltYWdlcyc7IC8vJ2Fzc2V0cy9hcHAvdXBsb2Fkcy9JbWFnZXMnOyAvLycvbWV0ZW9yX3Byb2plY3RzL2NsaW5pY2FsX3N5c3RlbV8xLjAvSW1nJztcclxuICAgICAgICAgICAgICAgIC8vZnMuZW5zdXJlRGlyU3luYyhwYXRoKTsgL2hvbWUvaXNtYS9Eb2N1bWVudG9zL21ldGVvcl9wcm9qZWN0cy9jbGluaWNhbF9zeXN0ZW1fMS4wJ1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9hcHAvdXBsb2Fkcy9JbWFnZXMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJlZm9yZVVwbG9hZDogZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAgICAgLy8gQWxsb3cgdXBsb2FkIGZpbGVzIHVuZGVyIDEwTUIsIGFuZCBvbmx5IGluIHBuZy9qcGcvanBlZyBmb3JtYXRzXHJcbiAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPD0gMTAyNCAqIDEwMjQgKiAxMCAmJiAvcG5nfGdpZnxqcGd8anBlZ3xwZGYvaS50ZXN0KGZpbGUuZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdTdWJhIGxhIGltYWdlbiwgY29uIHVuIHRhbWHDsW8gaWd1YWwgbyBpbmZlcmlvciBhIDEwTUInO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbi8vIEFETUlOSVNUUkFET1JcclxuICAgIC8vIFRBQkxBIFVTVUFSSU9TXHJcbiAgICBleHBvcnQgY29uc3QgVXN1YXJpb3MgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignVXN1YXJpb3MnKTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgVXN1YXJpb3NJbmRleCA9IG5ldyBJbmRleCh7XHJcbiAgICAgICAgY29sbGVjdGlvbjogVXN1YXJpb3MsXHJcbiAgICAgICAgZmllbGRzOiBbJ2NpJywgJ25vbWJyZScsICdhcF9wYXRlcm5vJywgJ3N1YnNpc3RlbWEnXSxcclxuICAgICAgICBlbmdpbmU6IG5ldyBNaW5pbW9uZ29FbmdpbmUoe1xyXG4gICAgICAgICAgICBzb3J0OiAoKSA9PiB7IG5vbWJyZTogMX0sXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBmdW5jdGlvbiAoc2VhcmNoT2JqZWN0LCBvcHRpb25zLCBhZ2dyZWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gdGhpcy5kZWZhdWx0Q29uZmlndXJhdGlvbigpLnNlbGVjdG9yKHNlYXJjaE9iamVjdCwgb3B0aW9ucywgYWdncmVnYXRpb24pXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvci5lbGltaW5hZG8gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBzZWxlY3RvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGVmYXVsdFNlYXJjaE9wdGlvbnM6IHtsaW1pdDogMTB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUQUJMQSBDTEFWRSBSRUdJU1RST1xyXG4gICAgZXhwb3J0IGNvbnN0IENsYXZlUmVnaXN0cm8gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignQ2xhdmVSZWdpc3RybycpO1xyXG5cclxuICAgIC8vIFRBQkxBIElNQUdFU1xyXG4gICAgLy9leHBvcnQgY29uc3QgSW1hZ2VzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0ltYWdlcycpO1xyXG5cclxuICAgIC8vVEFCTEEgRVNQRUNJQUxJREFERVNcclxuICAgIGV4cG9ydCBjb25zdCBFc3BlY2lhbGlkYWRlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdFc3BlY2lhbGlkYWRlcycpO1xyXG4gICAgLy9UQUJMQSBDT05TVUxUT1JJT1NcclxuICAgIGV4cG9ydCBjb25zdCBDb25zdWx0b3Jpb3MgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignQ29uc3VsdG9yaW9zJyk7XHJcbiAgICAvL1RBQkxBIENBUkdPU1xyXG4gICAgZXhwb3J0IGNvbnN0IENhcmdvcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDYXJnb3MnKTtcclxuXHJcbiAgICAvL1RBQkxBIE1FRElDT1NcclxuICAgIGV4cG9ydCBjb25zdCBNZWRpY29zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ01lZGljb3MnKTtcclxuXHJcbiAgICAvL1RBQkxBIEVNUFJFU0FTXHJcbiAgICBleHBvcnQgY29uc3QgRW1wcmVzYXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignRW1wcmVzYXMnKTtcclxuXHJcbiAgICAvL1RBQkxBIFRVUk5PU1xyXG4gICAgZXhwb3J0IGNvbnN0IFR1cm5vcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdUdXJub3MnKTtcclxuXHJcbiAgICAvL1RBQkxBIFNBTEFTXHJcbiAgICBleHBvcnQgY29uc3QgU2FsYXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignU2FsYXMnKTtcclxuXHJcbiAgICAvL1RBQkxBIENBTUFTXHJcbiAgICBleHBvcnQgY29uc3QgQ2FtYXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignQ2FtYXMnKTtcclxuXHJcbiAgICAvL1RBQkxBIFNFUlZJQ0lPU1xyXG4gICAgZXhwb3J0IGNvbnN0IFNlcnZpY2lvcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdTZXJ2aWNpb3MnKTtcclxuXHJcbi8vRkFSTUFDSUFcclxuICAgIC8vVEFCTEEgTUVESUNBTUVOVE9TXHJcbiAgICBleHBvcnQgY29uc3QgTWVkaWNhbWVudG9zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ01lZGljYW1lbnRvcycpO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBNZWRpY2FtZW50b3NJbmRleCA9IG5ldyBJbmRleCh7XHJcbiAgICAgICAgY29sbGVjdGlvbjogTWVkaWNhbWVudG9zLFxyXG4gICAgICAgIGZpZWxkczogWydpdGVtJywgJ25vbWJyZV9jb21lcmNpYWwnLCAnbm9tYnJlX2dlbmVyaWNvJ10sXHJcbiAgICAgICAgZW5naW5lOiBuZXcgTWluaW1vbmdvRW5naW5lKHtcclxuICAgICAgICAgICAgc29ydDogKCkgPT4geyBub21icmVfY29tZXJjaWFsOiAxfSxcclxuICAgICAgICAgICAgc2VsZWN0b3I6IGZ1bmN0aW9uIChzZWFyY2hPYmplY3QsIG9wdGlvbnMsIGFnZ3JlZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmRlZmF1bHRDb25maWd1cmF0aW9uKCkuc2VsZWN0b3Ioc2VhcmNoT2JqZWN0LCBvcHRpb25zLCBhZ2dyZWdhdGlvbilcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yLmFjdGl2byA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVybiAgc2VsZWN0b3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRlZmF1bHRTZWFyY2hPcHRpb25zOiB7bGltaXQ6IDN9XHJcbiAgICB9KTtcclxuICAgIGV4cG9ydCBjb25zdCBNZWRpY2FtZW50b3NJbnZlbnRhcmlvSW5kZXggPSBuZXcgSW5kZXgoe1xyXG4gICAgICAgIGNvbGxlY3Rpb246IE1lZGljYW1lbnRvcyxcclxuICAgICAgICBmaWVsZHM6IFsnaXRlbScsICdub21icmVfY29tZXJjaWFsJywgJ25vbWJyZV9nZW5lcmljbycsICdsaW5lYSddLFxyXG4gICAgICAgIGVuZ2luZTogbmV3IE1pbmltb25nb0VuZ2luZSh7XHJcbiAgICAgICAgICAgIHNvcnQ6ICgpID0+IHsgbm9tYnJlX2NvbWVyY2lhbDogMX0sXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiBmdW5jdGlvbiAoc2VhcmNoT2JqZWN0LCBvcHRpb25zLCBhZ2dyZWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gdGhpcy5kZWZhdWx0Q29uZmlndXJhdGlvbigpLnNlbGVjdG9yKHNlYXJjaE9iamVjdCwgb3B0aW9ucywgYWdncmVnYXRpb24pXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvci5hY3Rpdm8gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIHNlbGVjdG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAvL2RlZmF1bHRTZWFyY2hPcHRpb25zOiB7bGltaXQ6IDUwfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ09NUFJBIE1FRElDQU1FTlRPXHJcbiAgICBleHBvcnQgY29uc3QgQ29tcHJhcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDb21wcmFzJyk7XHJcblxyXG4gICAgLy8gQ09NUFJBIE1FRElDQU1FTlRPXHJcbiAgICBleHBvcnQgY29uc3QgVmVudGFzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1ZlbnRhcycpO1xyXG5cclxuICAgIC8vIFJFUE9SVEVTIEZBUk1BQ0lBXHJcbiAgICBleHBvcnQgY29uc3QgUmVwb3J0ZUZhcm1hY2lhID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1JlcG9ydGVGYXJtYWNpYScpO1xyXG5cclxuICAgIC8vVEFCTEEgQ0xJRU5URVNcclxuICAgIGV4cG9ydCBjb25zdCBDbGllbnRlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDbGllbnRlcycpO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBDbGllbnRlc0luZGV4ID0gbmV3IEluZGV4KHtcclxuICAgICAgICBjb2xsZWN0aW9uOiBDbGllbnRlcyxcclxuICAgICAgICBmaWVsZHM6IFsnY2knLCAnbm9tYnJlJ10sXHJcbiAgICAgICAgZW5naW5lOiBuZXcgTWluaW1vbmdvRW5naW5lKHtcclxuICAgICAgICAgICAgc29ydDogKCkgPT4geyBpdGVtOiAxfSxcclxuICAgICAgICAgICAgLypzZWxlY3RvcjogZnVuY3Rpb24gKHNlYXJjaE9iamVjdCwgb3B0aW9ucywgYWdncmVnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZGVmYXVsdENvbmZpZ3VyYXRpb24oKS5zZWxlY3RvcihzZWFyY2hPYmplY3QsIG9wdGlvbnMsIGFnZ3JlZ2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IuYWN0aXZvID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBzZWxlY3RvclxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9KSxcclxuICAgICAgICBkZWZhdWx0U2VhcmNoT3B0aW9uczoge2xpbWl0OiAzfVxyXG4gICAgfSk7XHJcbiAgICAvL0xJTkVBUyBGQVJNQUNFVVRJQ0FTXHJcbiAgICBleHBvcnQgY29uc3QgTGluZWFzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0xpbmVhcycpO1xyXG5cclxuLy8gQUZJTElBQ0lPTiBZIEZJQ0hBSkVcclxuICAgIC8vVEFCTEEgUEFDSUVOVEVTXHJcbiAgICBleHBvcnQgY29uc3QgUGFjaWVudGVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1BhY2llbnRlcycpO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBQYWNpZW50ZXNBc2VnSW5kZXggPSBuZXcgSW5kZXgoe1xyXG4gICAgICAgIGNvbGxlY3Rpb246IFBhY2llbnRlcyxcclxuICAgICAgICBmaWVsZHM6IFsnY29kaWdvX2FzZWd1cmFkbycsICdjaScsICdub21icmUnLCAnYXBfcGF0ZXJubyddLFxyXG4gICAgICAgIGVuZ2luZTogbmV3IE1pbmltb25nb0VuZ2luZSh7XHJcbiAgICAgICAgICAgIHNvcnQ6ICgpID0+IHsgY29kaWdvX2FzZWd1cmFkbzogLTF9LFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogZnVuY3Rpb24gKHNlYXJjaE9iamVjdCwgb3B0aW9ucywgYWdncmVnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RvciA9IHRoaXMuZGVmYXVsdENvbmZpZ3VyYXRpb24oKS5zZWxlY3RvcihzZWFyY2hPYmplY3QsIG9wdGlvbnMsIGFnZ3JlZ2F0aW9uKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IuYXNlZ3VyYWRvID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy9zZWxlY3Rvci50aXBvX3BhY2llbnRlID0gJ1RpdHVsYXInXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIHNlbGVjdG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBkZWZhdWx0U2VhcmNoT3B0aW9uczoge2xpbWl0OiAyMH1cclxuICAgIH0pO1xyXG4gICAgZXhwb3J0IGNvbnN0IFBhY2llbnRlc0luZGV4ID0gbmV3IEluZGV4KHtcclxuICAgICAgICBjb2xsZWN0aW9uOiBQYWNpZW50ZXMsXHJcbiAgICAgICAgZmllbGRzOiBbJ2NvZGlnb19hc2VndXJhZG8nLCAnY2knLCAnbm9tYnJlJywgJ2FwX3BhdGVybm8nXSxcclxuICAgICAgICBlbmdpbmU6IG5ldyBNaW5pbW9uZ29FbmdpbmUoe1xyXG4gICAgICAgICAgICBzb3J0OiAoKSA9PiB7IG5vbWJyZTogMX0sXHJcbiAgICAgICAgICAgIC8qc2VsZWN0b3I6IGZ1bmN0aW9uIChzZWFyY2hPYmplY3QsIG9wdGlvbnMsIGFnZ3JlZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLmRlZmF1bHRDb25maWd1cmF0aW9uKCkuc2VsZWN0b3Ioc2VhcmNoT2JqZWN0LCBvcHRpb25zLCBhZ2dyZWdhdGlvbilcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yLmFzZWd1cmFkbyA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vc2VsZWN0b3IudGlwb19wYWNpZW50ZSA9ICdUaXR1bGFyJ1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICBzZWxlY3RvclxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9KSxcclxuICAgICAgICBkZWZhdWx0U2VhcmNoT3B0aW9uczoge2xpbWl0OiAxMH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vVEFCTEEgREUgRklDSEFTXHJcbiAgICBleHBvcnQgY29uc3QgRmljaGFzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0ZpY2hhcycpO1xyXG5cclxuICAgIC8vVEFCTEEgRklDSEFTIEVORkVSTUVSSUFcclxuICAgIGV4cG9ydCBjb25zdCBGaWNoYXNFbmZlcm1lcmlhID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0ZpY2hhc0VuZmVybWVyaWEnKTtcclxuXHJcbiAgICAvL1RBQkxBIFJFUE9SVEUgREUgRklDSEFTXHJcbiAgICBleHBvcnQgY29uc3QgUmVwb3J0ZUZpY2hhcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdSZXBvcnRlRmljaGFzJyk7XHJcblxyXG4gICAgLy9UQUJMQSBGSUNIQSBJTlRFUk5BQ0lPTlxyXG4gICAgZXhwb3J0IGNvbnN0IEZpY2hhSW50ZXJuYWNpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignRmljaGFJbnRlcm5hY2lvbicpO1xyXG5cclxuICAgIC8vVEFCTEEgRklDSEEgRElBR05PU1RJQ08gRU5GRVJNRVJJQVxyXG4gICAgZXhwb3J0IGNvbnN0IERldGFsbGVGaWNoYSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdEZXRhbGxlRmljaGEnKTtcclxuXHJcbi8vIEFURU5DSU9OIE1FRElDQVxyXG4gICAgLy8gRElBR07Dk1NUSUNPXHJcbiAgICBleHBvcnQgY29uc3QgRGlhZ25vc3RpY28gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignRGlhZ25vc3RpY28nKTtcclxuXHJcbiAgICAvL1RBQkxBIEhJU1RPUklBTFxyXG4gICAgZXhwb3J0IGNvbnN0IEhpc3RvcmlhbGVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0hpc3RvcmlhbGVzJyk7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IEhpc3RvcmlhbGVzSW5kZXggPSBuZXcgSW5kZXgoe1xyXG4gICAgICAgIGNvbGxlY3Rpb246IEhpc3RvcmlhbGVzLFxyXG4gICAgICAgIGZpZWxkczogWydjb2RpZ29faCcsICdjaScsICdub21icmUnLCAnYXBfcGF0ZXJubyddLFxyXG4gICAgICAgIGVuZ2luZTogbmV3IE1pbmltb25nb0VuZ2luZSh7XHJcbiAgICAgICAgICAgIHNvcnQ6ICgpID0+IHsgY29kaWdvX2g6IDF9LFxyXG4gICAgICAgICAgICAvKnNlbGVjdG9yOiBmdW5jdGlvbiAoc2VhcmNoT2JqZWN0LCBvcHRpb25zLCBhZ2dyZWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gdGhpcy5kZWZhdWx0Q29uZmlndXJhdGlvbigpLnNlbGVjdG9yKHNlYXJjaE9iamVjdCwgb3B0aW9ucywgYWdncmVnYXRpb24pXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvci5hc2VndXJhZG8gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvL3NlbGVjdG9yLnRpcG9fcGFjaWVudGUgPSAnVGl0dWxhcidcclxuICAgICAgICAgICAgICAgIHJldHVybiAgc2VsZWN0b3JcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZGVmYXVsdFNlYXJjaE9wdGlvbnM6IHtsaW1pdDogMTB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1RBQkxBIENPTlNVTFRBU1xyXG4gICAgZXhwb3J0IGNvbnN0IENvbnN1bHRhcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDb25zdWx0YXMnKTtcclxuXHJcblxyXG4gICAgLy8gVEFCTEEgTEFCT1JBVE9SSU9TXHJcbiAgICBleHBvcnQgY29uc3QgTGFib3JhdG9yaW9zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ0xhYm9yYXRvcmlvcycpO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBMYWJvcmF0b3Jpb3NJbmRleCA9IG5ldyBJbmRleCh7XHJcbiAgICAgICAgY29sbGVjdGlvbjogTGFib3JhdG9yaW9zLFxyXG4gICAgICAgIGZpZWxkczogWydub21iX2dyYWwnLCAnbm9tYl9hbmFsaXNpcyddLFxyXG4gICAgICAgIGVuZ2luZTogbmV3IE1pbmltb25nb0VuZ2luZSh7XHJcbiAgICAgICAgICAgIHNvcnQ6ICgpID0+IHsgbm9tYl9ncmFsOiAxfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGRlZmF1bHRTZWFyY2hPcHRpb25zOiB7bGltaXQ6IDM1fVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVEFCTEEgSU5URVJOQUNJT05FU1xyXG4gICAgZXhwb3J0IGNvbnN0IEludGVybmFjaW9uZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignSW50ZXJuYWNpb25lcycpO1xyXG5cclxuICAgIC8vIFRBQkxBIFFVSVJPRkFOT1xyXG4gICAgZXhwb3J0IGNvbnN0IFF1aXJvZmFubyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdRdWlyb2Zhbm8nKTtcclxuXHJcbiAgICAvL1RBQkFMIFNJR05PUyBWSVRBTEVTXHJcbiAgICBleHBvcnQgY29uc3QgU2lnbm9zVml0YWxlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdTaWdub3NWaXRhbGVzJyk7XHJcblxyXG4gICAgLy9UQUJBTCBTQUxBIFBBUlRPU1xyXG4gICAgZXhwb3J0IGNvbnN0IFNhbGFQYXJ0b3MgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignU2FsYVBhcnRvcycpO1xyXG5cclxuLy9DT05UQUJJTElEQURcclxuICAgIC8vUExBTiBERSBDVUVOVEFTXHJcbiAgICBleHBvcnQgY29uc3QgUGxhbkN1ZW50YXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUGxhbkN1ZW50YXMnKTtcclxuXHJcbiAgICAvL0NPTVBST0JBTlRFU1xyXG4gICAgZXhwb3J0IGNvbnN0IENvbXByb2JhbnRlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdDb21wcm9iYW50ZXMnKTtcclxuXHJcbiAgICAvL01BWU9SRVNcclxuICAgIGV4cG9ydCBjb25zdCBNYXlvcmVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ01heW9yZXMnKTtcclxuXHJcbiAgICAvL0VTVEFET1MgRklOQU5DSUVST1NcclxuICAgIGV4cG9ydCBjb25zdCBFc3RhZG9zRmluYW5jaWVyb3MgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignRXN0YWRvc0ZpbmFuY2llcm9zJyk7XHJcblxyXG4gICAgLy9FU1RBRE8gQ09OVEFCSUxJREFEXHJcbiAgICBleHBvcnQgY29uc3QgRXN0YWRvQ29udGEgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignRXN0YWRvQ29udGEnKTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWV0aG9kIH0gZnJvbSAnbWV0ZW9yL21kZzp2YWxpZGF0ZWQtbWV0aG9kJztcclxuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcclxuaW1wb3J0IHsgQ2FyZ29zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0Q2FyZ28gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdjYXJnby5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIG5vbWJyZV9jYXJnbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGVzY3JpcGNpb25fY2FyZ286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5yb191c3Vhcmlvczoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgY29sb3I6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IgKCksXHJcbiAgICBydW4gKHtub21icmVfY2FyZ28sIGRlc2NyaXBjaW9uX2NhcmdvLCBucm9fdXN1YXJpb3MsIGNvbG9yIH0pIHtcclxuICAgICAgICByZXR1cm4gQ2FyZ29zLmluc2VydCh7XHJcbiAgICAgICAgICAgIG5vbWJyZV9jYXJnbzogbm9tYnJlX2NhcmdvLFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbl9jYXJnbzogZGVzY3JpcGNpb25fY2FyZ28sXHJcbiAgICAgICAgICAgIG5yb191c3VhcmlvczogbnJvX3VzdWFyaW9zLFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FyZ28gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdjYXJnby51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmVfY2FyZ286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGRlc2NyaXBjaW9uX2NhcmdvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBucm9fdXN1YXJpb3M6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIGNvbG9yOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yICgpLFxyXG4gICAgcnVuICh7aWQsIG5vbWJyZV9jYXJnbywgZGVzY3JpcGNpb25fY2FyZ28sIG5yb191c3VhcmlvcywgY29sb3IgfSkge1xyXG4gICAgICAgIHJldHVybiBDYXJnb3MudXBkYXRlKHtcclxuICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlX2NhcmdvOiBub21icmVfY2FyZ28sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbl9jYXJnbzogZGVzY3JpcGNpb25fY2FyZ28sXHJcbiAgICAgICAgICAgICAgICBucm9fdXN1YXJpb3M6IG5yb191c3VhcmlvcyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcmdvTnJvVXMgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdjYXJnby51cGRhdGVucm91cycsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgbm9tYnJlX2NhcmdvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBucm9fdXN1YXJpb3M6IHt0eXBlOiBOdW1iZXJ9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1biAoe25vbWJyZV9jYXJnbywgbnJvX3VzdWFyaW9zfSkge1xyXG4gICAgICAgIHJldHVybiBDYXJnb3MudXBkYXRlKHtcclxuICAgICAgICAgICAgbm9tYnJlX2NhcmdvOiBub21icmVfY2FyZ29cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICBucm9fdXN1YXJpb3M6IG5yb191c3Vhcmlvc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNhcmdvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnY2FyZ28ucmVtb3ZlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe2lkfSkge1xyXG4gICAgICAgIHJldHVybiBDYXJnb3MucmVtb3ZlKHtcclxuICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xyXG5pbXBvcnQgeyBTaW1wbGVTY2hlbWEgfSBmcm9tICdtZXRlb3IvYWxkZWVkOnNpbXBsZS1zY2hlbWEnO1xyXG5pbXBvcnQgeyBDb21wcm9iYW50ZXMsIEVzdGFkb0NvbnRhIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0Q29tcHJvYmFudGUgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdjb21wcm9iYW50ZS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIG5ybzoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgbnJvX2NvbXByb2JhbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvX2NvbXByb2JhbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYcOxbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbnJvX2NoZXF1ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZ2xvc2E6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGN1ZW50YXM6IHt0eXBlOiBbT2JqZWN0XX0sXHJcbiAgICAgICAgJ2N1ZW50YXMuJC5jb2RpZ29fYyc6IHt0eXBlOlN0cmluZ30sXHJcbiAgICAgICAgLy8nY3VlbnRhcy4kLm5vbWJyZV9jJzoge3R5cGU6U3RyaW5nfSxcclxuICAgICAgICAnY3VlbnRhcy4kLmRlYmUnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnY3VlbnRhcy4kLmhhYmVyJzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdG90YWxfZGViZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdG90YWxfaGFiZXI6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX3JlZzoge3R5cGU6IERhdGV9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgbnJvLFxyXG4gICAgICAgIG5yb19jb21wcm9iYW50ZSxcclxuICAgICAgICB0aXBvX2NvbXByb2JhbnRlLFxyXG4gICAgICAgIGRpYSxcclxuICAgICAgICBtZXMsXHJcbiAgICAgICAgYcOxbyxcclxuICAgICAgICBucm9fY2hlcXVlLFxyXG4gICAgICAgIGdsb3NhLFxyXG4gICAgICAgIGN1ZW50YXMsXHJcbiAgICAgICAgdG90YWxfZGViZSxcclxuICAgICAgICB0b3RhbF9oYWJlcixcclxuICAgICAgICBmZWNoYV9yZWdcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBDb21wcm9iYW50ZXMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgbnJvOiBucm8sXHJcbiAgICAgICAgICAgIG5yb19jb21wcm9iYW50ZTogbnJvX2NvbXByb2JhbnRlLFxyXG4gICAgICAgICAgICB0aXBvX2NvbXByb2JhbnRlOiB0aXBvX2NvbXByb2JhbnRlLFxyXG4gICAgICAgICAgICBkaWE6IGRpYSxcclxuICAgICAgICAgICAgbWVzOiBtZXMsXHJcbiAgICAgICAgICAgIGHDsW86IGHDsW8sXHJcbiAgICAgICAgICAgIG5yb19jaGVxdWU6IG5yb19jaGVxdWUsXHJcbiAgICAgICAgICAgIGdsb3NhOiBnbG9zYSxcclxuICAgICAgICAgICAgY3VlbnRhczogY3VlbnRhcyxcclxuICAgICAgICAgICAgdG90YWxfZGViZTogdG90YWxfZGViZSxcclxuICAgICAgICAgICAgdG90YWxfaGFiZXI6IHRvdGFsX2hhYmVyLFxyXG4gICAgICAgICAgICBmZWNoYV9yZWc6IGZlY2hhX3JlZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRFc3RhZG9Db250YSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2VzdGFkb2NvbnRhLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgYWJpZXJ0bzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIGNlcnJhZG86IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBhw7FvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBhYmllcnRvLFxyXG4gICAgICAgIGNlcnJhZG8sXHJcbiAgICAgICAgYcOxb1xyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIEVzdGFkb0NvbnRhLmluc2VydCh7XHJcbiAgICAgICAgICAgIGFiaWVydG86IGFiaWVydG8sXHJcbiAgICAgICAgICAgIGNlcnJhZG86IGNlcnJhZG8sXHJcbiAgICAgICAgICAgIGHDsW86IGHDsW9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRXN0YWRvQ29udGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdlc3RhZG9jb250YS51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGHDsW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFiaWVydG86IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBjZXJyYWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICB9KS52YWxpZGF0b3IgKCksXHJcbiAgICBydW4gKHtcclxuICAgICAgICBhw7FvLFxyXG4gICAgICAgIGFiaWVydG8sXHJcbiAgICAgICAgY2VycmFkbyxcclxuICAgIH0pIHtcclxuICAgICAgICByZXR1cm4gRXN0YWRvQ29udGEudXBkYXRlKHtcclxuICAgICAgICAgICAgYcOxbzogYcOxb1xyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgIGFiaWVydG86IGFiaWVydG8sXHJcbiAgICAgICAgICAgICAgICBjZXJyYWRvOiBjZXJyYWRvLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xyXG5pbXBvcnQgeyBTaW1wbGVTY2hlbWEgfSBmcm9tICdtZXRlb3IvYWxkZWVkOnNpbXBsZS1zY2hlbWEnO1xyXG5pbXBvcnQgeyBDb25zdWx0b3Jpb3MgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRDb25zdWx0b3JpbyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2NvbnN1bHRvcmlvLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaW1hZ2VuX2NvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5vbWJyZV9jb25zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29fY29uczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGVzY3JpcGNpb25fY29uczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX2FzZWc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByZWNpb19wYXJ0OiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgcHJlY2lvX2FzZWdfcmVjb25zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwcmVjaW9fcGFydF9yZWNvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByZWNpb19hc2VnX2VtZXI6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByZWNpb19wYXJ0X2VtZXI6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICB0aWVtcG9fY29uc3VsdGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHR1cm5vczoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIG1lZGljb19jb25zOiB7dHlwZTogW09iamVjdF19LFxyXG4gICAgICAgICdtZWRpY29fY29ucy4kLm1lZGljbyc6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBzaW5faG9yYXJpbzoge3R5cGU6IEJvb2xlYW59LFxyXG5cclxuICAgICAgICBob3JhX2luZ19hbToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9zYWxfYW06IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmFfaW5nX3BtOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX3NhbF9wbToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9pbmdfbmM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmFfc2FsX25jOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgbHVuZXNfYW06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBtYXJ0ZXNfYW06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBtaWVyY29sZXNfYW06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBqdWV2ZXNfYW06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICB2aWVybmVzX2FtOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgc2FiYWRvX2FtOiB7dHlwZTogQm9vbGVhbn0sXHJcblxyXG4gICAgICAgIGx1bmVzX3BtOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgbWFydGVzX3BtOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgbWllcmNvbGVzX3BtOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAganVldmVzX3BtOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgdmllcm5lc19wbToge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIHNhYmFkb19wbToge3R5cGU6IEJvb2xlYW59LFxyXG5cclxuICAgICAgICBsdW5lc19uYzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIG1hcnRlc19uYzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIG1pZXJjb2xlc19uYzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIGp1ZXZlc19uYzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIHZpZXJuZXNfbmM6IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBzYWJhZG9fbmM6IHt0eXBlOiBCb29sZWFufSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBpbWFnZW5fY29ucyxcclxuICAgICAgICBub21icmVfY29ucyxcclxuICAgICAgICBjb2RpZ29fY29ucyxcclxuICAgICAgICBkZXNjcmlwY2lvbl9jb25zLFxyXG4gICAgICAgIHByZWNpb19hc2VnLFxyXG4gICAgICAgIHByZWNpb19wYXJ0LFxyXG5cclxuICAgICAgICBwcmVjaW9fYXNlZ19yZWNvbnMsXHJcbiAgICAgICAgcHJlY2lvX3BhcnRfcmVjb25zLFxyXG4gICAgICAgIHByZWNpb19hc2VnX2VtZXIsXHJcbiAgICAgICAgcHJlY2lvX3BhcnRfZW1lcixcclxuXHJcbiAgICAgICAgdGllbXBvX2NvbnN1bHRhLFxyXG4gICAgICAgIHR1cm5vcyxcclxuICAgICAgICBtZWRpY29fY29ucyxcclxuXHJcbiAgICAgICAgc2luX2hvcmFyaW8sXHJcblxyXG4gICAgICAgIGhvcmFfaW5nX2FtLFxyXG4gICAgICAgIGhvcmFfc2FsX2FtLFxyXG4gICAgICAgIGhvcmFfaW5nX3BtLFxyXG4gICAgICAgIGhvcmFfc2FsX3BtLFxyXG4gICAgICAgIGhvcmFfaW5nX25jLFxyXG4gICAgICAgIGhvcmFfc2FsX25jLFxyXG5cclxuICAgICAgICBsdW5lc19hbSxcclxuICAgICAgICBtYXJ0ZXNfYW0sXHJcbiAgICAgICAgbWllcmNvbGVzX2FtLFxyXG4gICAgICAgIGp1ZXZlc19hbSxcclxuICAgICAgICB2aWVybmVzX2FtLFxyXG4gICAgICAgIHNhYmFkb19hbSxcclxuXHJcbiAgICAgICAgbHVuZXNfcG0sXHJcbiAgICAgICAgbWFydGVzX3BtLFxyXG4gICAgICAgIG1pZXJjb2xlc19wbSxcclxuICAgICAgICBqdWV2ZXNfcG0sXHJcbiAgICAgICAgdmllcm5lc19wbSxcclxuICAgICAgICBzYWJhZG9fcG0sXHJcblxyXG4gICAgICAgIGx1bmVzX25jLFxyXG4gICAgICAgIG1hcnRlc19uYyxcclxuICAgICAgICBtaWVyY29sZXNfbmMsXHJcbiAgICAgICAganVldmVzX25jLFxyXG4gICAgICAgIHZpZXJuZXNfbmMsXHJcbiAgICAgICAgc2FiYWRvX25jLFxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRvcmlvcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBpbWFnZW5fY29uczogaW1hZ2VuX2NvbnMsXHJcbiAgICAgICAgICAgIG5vbWJyZV9jb25zOiBub21icmVfY29ucyxcclxuICAgICAgICAgICAgY29kaWdvX2NvbnM6IGNvZGlnb19jb25zLFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbl9jb25zOiBkZXNjcmlwY2lvbl9jb25zLFxyXG4gICAgICAgICAgICBwcmVjaW9fYXNlZzogcHJlY2lvX2FzZWcsXHJcbiAgICAgICAgICAgIHByZWNpb19wYXJ0OiBwcmVjaW9fcGFydCxcclxuXHJcbiAgICAgICAgICAgIHByZWNpb19hc2VnX3JlY29uczogcHJlY2lvX2FzZWdfcmVjb25zLFxyXG4gICAgICAgICAgICBwcmVjaW9fcGFydF9yZWNvbnM6IHByZWNpb19wYXJ0X3JlY29ucyxcclxuICAgICAgICAgICAgcHJlY2lvX2FzZWdfZW1lcjogcHJlY2lvX2FzZWdfZW1lcixcclxuICAgICAgICAgICAgcHJlY2lvX3BhcnRfZW1lcjogcHJlY2lvX3BhcnRfZW1lcixcclxuXHJcbiAgICAgICAgICAgIHRpZW1wb19jb25zdWx0YTogdGllbXBvX2NvbnN1bHRhLFxyXG4gICAgICAgICAgICB0dXJub3M6IHR1cm5vcyxcclxuICAgICAgICAgICAgYWN0aXZvOiB0cnVlLFxyXG4gICAgICAgICAgICBtZWRpY29fY29uczogbWVkaWNvX2NvbnMsXHJcblxyXG4gICAgICAgICAgICBzaW5faG9yYXJpbzogc2luX2hvcmFyaW8sXHJcblxyXG4gICAgICAgICAgICBob3JhX2luZ19hbTogaG9yYV9pbmdfYW0sXHJcbiAgICAgICAgICAgIGhvcmFfc2FsX2FtOiBob3JhX3NhbF9hbSxcclxuICAgICAgICAgICAgaG9yYV9pbmdfcG06IGhvcmFfaW5nX3BtLFxyXG4gICAgICAgICAgICBob3JhX3NhbF9wbTogaG9yYV9zYWxfcG0sXHJcbiAgICAgICAgICAgIGhvcmFfaW5nX25jOiBob3JhX2luZ19uYyxcclxuICAgICAgICAgICAgaG9yYV9zYWxfbmM6aG9yYV9zYWxfbmMsXHJcblxyXG4gICAgICAgICAgICBsdW5lc19hbTogbHVuZXNfYW0sXHJcbiAgICAgICAgICAgIG1hcnRlc19hbTogbWFydGVzX2FtLFxyXG4gICAgICAgICAgICBtaWVyY29sZXNfYW06IG1pZXJjb2xlc19hbSxcclxuICAgICAgICAgICAganVldmVzX2FtOiBqdWV2ZXNfYW0sXHJcbiAgICAgICAgICAgIHZpZXJuZXNfYW06IHZpZXJuZXNfYW0sXHJcbiAgICAgICAgICAgIHNhYmFkb19hbTogc2FiYWRvX2FtLFxyXG5cclxuICAgICAgICAgICAgbHVuZXNfcG06IGx1bmVzX3BtLFxyXG4gICAgICAgICAgICBtYXJ0ZXNfcG06IG1hcnRlc19wbSxcclxuICAgICAgICAgICAgbWllcmNvbGVzX3BtOiBtaWVyY29sZXNfcG0sXHJcbiAgICAgICAgICAgIGp1ZXZlc19wbToganVldmVzX3BtLFxyXG4gICAgICAgICAgICB2aWVybmVzX3BtOiB2aWVybmVzX3BtLFxyXG4gICAgICAgICAgICBzYWJhZG9fcG06IHNhYmFkb19wbSxcclxuXHJcbiAgICAgICAgICAgIGx1bmVzX25jOiBsdW5lc19uYyxcclxuICAgICAgICAgICAgbWFydGVzX25jOiBtYXJ0ZXNfbmMsXHJcbiAgICAgICAgICAgIG1pZXJjb2xlc19uYzogbWllcmNvbGVzX25jLFxyXG4gICAgICAgICAgICBqdWV2ZXNfbmM6IGp1ZXZlc19uYyxcclxuICAgICAgICAgICAgdmllcm5lc19uYzogdmllcm5lc19uYyxcclxuICAgICAgICAgICAgc2FiYWRvX25jOiBzYWJhZG9fbmMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvbnN1bHRvcmlvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncmVtb3ZlLmNvbnN1bHRvcmlvJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZH0pe1xyXG4gICAgICAgIHJldHVybiBDb25zdWx0b3Jpb3MucmVtb3ZlKHtfaWQ6IGlkfSlcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uc3VsdG9yaW8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdjb25zdWx0b3Jpby51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBpbWFnZW5fY29uczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlX2NvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb19jb25zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkZXNjcmlwY2lvbl9jb25zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwcmVjaW9fYXNlZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX3BhcnQ6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBwcmVjaW9fYXNlZ19yZWNvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByZWNpb19wYXJ0X3JlY29uczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX2FzZWdfZW1lcjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX3BhcnRfZW1lcjoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIHRpZW1wb19jb25zdWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdHVybm9zOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgbWVkaWNvX2NvbnM6IHt0eXBlOiBbT2JqZWN0XX0sXHJcbiAgICAgICAgJ21lZGljb19jb25zLiQubWVkaWNvJzoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIHNpbl9ob3JhcmlvOiB7dHlwZTogQm9vbGVhbn0sXHJcblxyXG4gICAgICAgIGhvcmFfaW5nX2FtOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX3NhbF9hbToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9pbmdfcG06IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmFfc2FsX3BtOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX2luZ19uYzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9zYWxfbmM6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBsdW5lc19hbToge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIG1hcnRlc19hbToge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIG1pZXJjb2xlc19hbToge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIGp1ZXZlc19hbToge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIHZpZXJuZXNfYW06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBzYWJhZG9fYW06IHt0eXBlOiBCb29sZWFufSxcclxuXHJcbiAgICAgICAgbHVuZXNfcG06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBtYXJ0ZXNfcG06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBtaWVyY29sZXNfcG06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBqdWV2ZXNfcG06IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICB2aWVybmVzX3BtOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgc2FiYWRvX3BtOiB7dHlwZTogQm9vbGVhbn0sXHJcblxyXG4gICAgICAgIGx1bmVzX25jOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgbWFydGVzX25jOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgbWllcmNvbGVzX25jOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAganVldmVzX25jOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgdmllcm5lc19uYzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIHNhYmFkb19uYzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGltYWdlbl9jb25zLFxyXG4gICAgICAgIG5vbWJyZV9jb25zLFxyXG4gICAgICAgIGNvZGlnb19jb25zLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uX2NvbnMsXHJcbiAgICAgICAgcHJlY2lvX2FzZWcsXHJcbiAgICAgICAgcHJlY2lvX3BhcnQsXHJcblxyXG4gICAgICAgIHByZWNpb19hc2VnX3JlY29ucyxcclxuICAgICAgICBwcmVjaW9fcGFydF9yZWNvbnMsXHJcbiAgICAgICAgcHJlY2lvX2FzZWdfZW1lcixcclxuICAgICAgICBwcmVjaW9fcGFydF9lbWVyLFxyXG5cclxuICAgICAgICB0aWVtcG9fY29uc3VsdGEsXHJcbiAgICAgICAgdHVybm9zLFxyXG4gICAgICAgIG1lZGljb19jb25zLFxyXG5cclxuICAgICAgICBzaW5faG9yYXJpbyxcclxuXHJcbiAgICAgICAgaG9yYV9pbmdfYW0sXHJcbiAgICAgICAgaG9yYV9zYWxfYW0sXHJcbiAgICAgICAgaG9yYV9pbmdfcG0sXHJcbiAgICAgICAgaG9yYV9zYWxfcG0sXHJcbiAgICAgICAgaG9yYV9pbmdfbmMsXHJcbiAgICAgICAgaG9yYV9zYWxfbmMsXHJcblxyXG4gICAgICAgIGx1bmVzX2FtLFxyXG4gICAgICAgIG1hcnRlc19hbSxcclxuICAgICAgICBtaWVyY29sZXNfYW0sXHJcbiAgICAgICAganVldmVzX2FtLFxyXG4gICAgICAgIHZpZXJuZXNfYW0sXHJcbiAgICAgICAgc2FiYWRvX2FtLFxyXG5cclxuICAgICAgICBsdW5lc19wbSxcclxuICAgICAgICBtYXJ0ZXNfcG0sXHJcbiAgICAgICAgbWllcmNvbGVzX3BtLFxyXG4gICAgICAgIGp1ZXZlc19wbSxcclxuICAgICAgICB2aWVybmVzX3BtLFxyXG4gICAgICAgIHNhYmFkb19wbSxcclxuXHJcbiAgICAgICAgbHVuZXNfbmMsXHJcbiAgICAgICAgbWFydGVzX25jLFxyXG4gICAgICAgIG1pZXJjb2xlc19uYyxcclxuICAgICAgICBqdWV2ZXNfbmMsXHJcbiAgICAgICAgdmllcm5lc19uYyxcclxuICAgICAgICBzYWJhZG9fbmMsXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gQ29uc3VsdG9yaW9zLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICBpbWFnZW5fY29uczogaW1hZ2VuX2NvbnMsXHJcbiAgICAgICAgICAgICAgICBub21icmVfY29uczogbm9tYnJlX2NvbnMsXHJcbiAgICAgICAgICAgICAgICBjb2RpZ29fY29uczogY29kaWdvX2NvbnMsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwY2lvbl9jb25zOiBkZXNjcmlwY2lvbl9jb25zLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lvX2FzZWc6IHByZWNpb19hc2VnLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lvX3BhcnQ6IHByZWNpb19wYXJ0LFxyXG5cclxuICAgICAgICAgICAgICAgIHByZWNpb19hc2VnX3JlY29uczogcHJlY2lvX2FzZWdfcmVjb25zLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lvX3BhcnRfcmVjb25zOiBwcmVjaW9fcGFydF9yZWNvbnMsXHJcbiAgICAgICAgICAgICAgICBwcmVjaW9fYXNlZ19lbWVyOiBwcmVjaW9fYXNlZ19lbWVyLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lvX3BhcnRfZW1lcjogcHJlY2lvX3BhcnRfZW1lcixcclxuXHJcbiAgICAgICAgICAgICAgICB0aWVtcG9fY29uc3VsdGE6IHRpZW1wb19jb25zdWx0YSxcclxuICAgICAgICAgICAgICAgIHR1cm5vczogdHVybm9zLFxyXG4gICAgICAgICAgICAgICAgbWVkaWNvX2NvbnM6IG1lZGljb19jb25zLFxyXG5cclxuICAgICAgICAgICAgICAgIHNpbl9ob3JhcmlvOiBzaW5faG9yYXJpbyxcclxuXHJcbiAgICAgICAgICAgICAgICBob3JhX2luZ19hbTogaG9yYV9pbmdfYW0sXHJcbiAgICAgICAgICAgICAgICBob3JhX3NhbF9hbTogaG9yYV9zYWxfYW0sXHJcbiAgICAgICAgICAgICAgICBob3JhX2luZ19wbTogaG9yYV9pbmdfcG0sXHJcbiAgICAgICAgICAgICAgICBob3JhX3NhbF9wbTogaG9yYV9zYWxfcG0sXHJcbiAgICAgICAgICAgICAgICBob3JhX2luZ19uYzogaG9yYV9pbmdfbmMsXHJcbiAgICAgICAgICAgICAgICBob3JhX3NhbF9uYzpob3JhX3NhbF9uYyxcclxuXHJcbiAgICAgICAgICAgICAgICBsdW5lc19hbTogbHVuZXNfYW0sXHJcbiAgICAgICAgICAgICAgICBtYXJ0ZXNfYW06IG1hcnRlc19hbSxcclxuICAgICAgICAgICAgICAgIG1pZXJjb2xlc19hbTogbWllcmNvbGVzX2FtLFxyXG4gICAgICAgICAgICAgICAganVldmVzX2FtOiBqdWV2ZXNfYW0sXHJcbiAgICAgICAgICAgICAgICB2aWVybmVzX2FtOiB2aWVybmVzX2FtLFxyXG4gICAgICAgICAgICAgICAgc2FiYWRvX2FtOiBzYWJhZG9fYW0sXHJcblxyXG4gICAgICAgICAgICAgICAgbHVuZXNfcG06IGx1bmVzX3BtLFxyXG4gICAgICAgICAgICAgICAgbWFydGVzX3BtOiBtYXJ0ZXNfcG0sXHJcbiAgICAgICAgICAgICAgICBtaWVyY29sZXNfcG06IG1pZXJjb2xlc19wbSxcclxuICAgICAgICAgICAgICAgIGp1ZXZlc19wbToganVldmVzX3BtLFxyXG4gICAgICAgICAgICAgICAgdmllcm5lc19wbTogdmllcm5lc19wbSxcclxuICAgICAgICAgICAgICAgIHNhYmFkb19wbTogc2FiYWRvX3BtLFxyXG5cclxuICAgICAgICAgICAgICAgIGx1bmVzX25jOiBsdW5lc19uYyxcclxuICAgICAgICAgICAgICAgIG1hcnRlc19uYzogbWFydGVzX25jLFxyXG4gICAgICAgICAgICAgICAgbWllcmNvbGVzX25jOiBtaWVyY29sZXNfbmMsXHJcbiAgICAgICAgICAgICAgICBqdWV2ZXNfbmM6IGp1ZXZlc19uYyxcclxuICAgICAgICAgICAgICAgIHZpZXJuZXNfbmM6IHZpZXJuZXNfbmMsXHJcbiAgICAgICAgICAgICAgICBzYWJhZG9fbmM6IHNhYmFkb19uYyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVBY3RpdkNvbnN1bHRvcmlvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnYWN0aXZjb25zdWx0b3Jpby51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhY3Rpdm86IHt0eXBlOiBCb29sZWFufVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFjdGl2b1xyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRvcmlvcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBfaWQ6IGlkXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgYWN0aXZvOiBhY3Rpdm9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWV0aG9kIH0gZnJvbSAnbWV0ZW9yL21kZzp2YWxpZGF0ZWQtbWV0aG9kJztcclxuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcclxuaW1wb3J0IHsgRW1wcmVzYXMgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRFbXByZXNhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZW1wcmVzYS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIG5pdDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlX2VtcHJlc2E6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGxvZ286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHJlZ2lzdHJhZG9fcG9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBmZWNoYV9yZWc6IHt0eXBlOiBEYXRlfVxyXG4gICAgfSkudmFsaWRhdG9yICgpLFxyXG4gICAgcnVuICh7bml0LCBub21icmVfZW1wcmVzYSwgbG9nbywgcmVnaXN0cmFkb19wb3IsIGZlY2hhX3JlZyB9KSB7XHJcbiAgICAgICAgcmV0dXJuIEVtcHJlc2FzLmluc2VydCh7XHJcbiAgICAgICAgICAgIG5pdDogbml0LFxyXG4gICAgICAgICAgICBub21icmVfZW1wcmVzYTogbm9tYnJlX2VtcHJlc2EsXHJcbiAgICAgICAgICAgIGxvZ286IGxvZ28sXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhZG9fcG9yOiByZWdpc3RyYWRvX3BvcixcclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBmZWNoYV9yZWdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRW1wcmVzYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2VtcHJlc2EudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbml0OiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmVfZW1wcmVzYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbG9nbzoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe2lkLCBuaXQsIG5vbWJyZV9lbXByZXNhLCBsb2dvIH0pIHtcclxuICAgICAgICByZXR1cm4gRW1wcmVzYXMudXBkYXRlKHtcclxuICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgbml0OiBuaXQsXHJcbiAgICAgICAgICAgICAgICBub21icmVfZW1wcmVzYTogbm9tYnJlX2VtcHJlc2EsXHJcbiAgICAgICAgICAgICAgICBsb2dvOiBsb2dvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRW1wcmVzYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2VtcHJlc2EucmVtb3ZlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe2lkfSkge1xyXG4gICAgICAgIHJldHVybiBFbXByZXNhcy5yZW1vdmUoe1xyXG4gICAgICAgICAgICBfaWQ6aWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZU1ldGhvZCB9IGZyb20gJ21ldGVvci9tZGc6dmFsaWRhdGVkLW1ldGhvZCc7XHJcbmltcG9ydCB7IFNpbXBsZVNjaGVtYSB9IGZyb20gJ21ldGVvci9hbGRlZWQ6c2ltcGxlLXNjaGVtYSc7XHJcbmltcG9ydCB7IEVzdGFkb3NGaW5hbmNpZXJvcyB9IGZyb20gJy4vY29sbGVjdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydEVzdGFkb0ZpbmFuY2llcm8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdlc3RhZG9maW5hbmNpZXJvLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2N1ZW50YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdGlwbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbml2ZWw6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGdlc3Rpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHNhbGRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgdGlwbyxcclxuICAgICAgICBuaXZlbCxcclxuICAgICAgICBnZXN0aW9uLFxyXG4gICAgICAgIHNhbGRvXHJcbiAgICB9KSB7XHJcbiAgICAgICAgcmV0dXJuIEVzdGFkb3NGaW5hbmNpZXJvcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBjb2RpZ29fY3VlbnRhOiBjb2RpZ29fY3VlbnRhLFxyXG4gICAgICAgICAgICB0aXBvOiB0aXBvLFxyXG4gICAgICAgICAgICBuaXZlbDogbml2ZWwsXHJcbiAgICAgICAgICAgIGdlc3Rpb246IGdlc3Rpb24sXHJcbiAgICAgICAgICAgIHNhbGRvOiBzYWxkbyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRXN0YWRvRmluYW5jaWVybyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2VzdGFkb2ZpbmFuY2llcm8udXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29fY3VlbnRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBnZXN0aW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBzYWxkbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICB9KS52YWxpZGF0b3IgKCksXHJcbiAgICBydW4gKHtcclxuICAgICAgICBjb2RpZ29fY3VlbnRhLFxyXG4gICAgICAgIGdlc3Rpb24sXHJcbiAgICAgICAgc2FsZG9cclxuICAgIH0pIHtcclxuICAgICAgICByZXR1cm4gRXN0YWRvc0ZpbmFuY2llcm9zLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGNvZGlnb19jdWVudGE6IGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgICAgIGdlc3Rpb246IGdlc3Rpb25cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICBzYWxkbzogc2FsZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVFc3RhZG9GaW5hbmNpZXJvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZXN0YWRvZmluYW5jaWVyby5yZW1vdmUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGE6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IgKCksXHJcbiAgICBydW4gKHtjb2RpZ29fY3VlbnRhfSkge1xyXG4gICAgICAgIHJldHVybiBFc3RhZG9zRmluYW5jaWVyb3MucmVtb3ZlKHtcclxuICAgICAgICAgICAgY29kaWdvX2N1ZW50YTogY29kaWdvX2N1ZW50YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWV0aG9kIH0gZnJvbSAnbWV0ZW9yL21kZzp2YWxpZGF0ZWQtbWV0aG9kJztcclxuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcclxuaW1wb3J0IHsgRmljaGFzLCBGaWNoYXNFbmZlcm1lcmlhLCBSZXBvcnRlRmljaGFzLCBGaWNoYUludGVybmFjaW9uLCBEZXRhbGxlRmljaGEgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRGaWNoYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ZpY2hhLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgbnJvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX2NvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvbnN1bHRvcmlvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtZWRpY286IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBlc3RhZG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRpcG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2NvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHR1cm5vOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgcHJlY2lvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXNlZ3VyYWRvOiB7dHlwZTogQm9vbGVhbiwgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGVtcGxlYWRvcjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHRpcG9fY29uc3VsdGE6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwb3I6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBlbl9mZWNoOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgbnJvLFxyXG4gICAgICAgIGhvcmFfY29ucyxcclxuICAgICAgICBjb25zdWx0b3JpbyxcclxuICAgICAgICBtZWRpY28sXHJcbiAgICAgICAgZXN0YWRvLFxyXG4gICAgICAgIHRpcG8sXHJcbiAgICAgICAgZmVjaGFfY29ucyxcclxuICAgICAgICB0dXJubyxcclxuICAgICAgICBwcmVjaW8sXHJcbiAgICAgICAgcGFjaWVudGUsXHJcbiAgICAgICAgYXNlZ3VyYWRvLFxyXG4gICAgICAgIGVtcGxlYWRvcixcclxuICAgICAgICB0aXBvX2NvbnN1bHRhLFxyXG4gICAgICAgIHBvcixcclxuICAgICAgICBlbl9mZWNoXHJcbiAgICB9KXtcclxuICAgICAgICAvKmNvbnNvbGUubG9nKGZlY2hhX2NvbnMuc3Vic3RyKDAsMikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZlY2hhX2NvbnMuc3Vic3RyKDMsMikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZlY2hhX2NvbnMuc3Vic3RyKDYsNCkpOyovXHJcbiAgICAgICAgcmV0dXJuIEZpY2hhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBucm86IG5ybyxcclxuICAgICAgICAgICAgaG9yYV9jb25zOiBob3JhX2NvbnMsXHJcbiAgICAgICAgICAgIGNvbnN1bHRvcmlvOiBjb25zdWx0b3JpbyxcclxuICAgICAgICAgICAgbWVkaWNvOiBtZWRpY28sXHJcbiAgICAgICAgICAgIGVzdGFkbzogZXN0YWRvLFxyXG4gICAgICAgICAgICB0aXBvOiB0aXBvLFxyXG4gICAgICAgICAgICBmZWNoYV9jb25zOiBmZWNoYV9jb25zLFxyXG4gICAgICAgICAgICBkaWE6IGZlY2hhX2NvbnMuc3Vic3RyKDAsIDIpLFxyXG4gICAgICAgICAgICBtZXM6IGZlY2hhX2NvbnMuc3Vic3RyKDMsIDIpLFxyXG4gICAgICAgICAgICBhw7FvOiBmZWNoYV9jb25zLnN1YnN0cig2LCA0KSxcclxuICAgICAgICAgICAgdHVybm86IHR1cm5vLFxyXG4gICAgICAgICAgICBwcmVjaW86IHByZWNpbyxcclxuICAgICAgICAgICAgcGFjaWVudGU6IHBhY2llbnRlLFxyXG4gICAgICAgICAgICBhc2VndXJhZG86IGFzZWd1cmFkbyxcclxuICAgICAgICAgICAgZW1wbGVhZG9yOiBlbXBsZWFkb3IsXHJcbiAgICAgICAgICAgIHRpcG9fY29uc3VsdGE6IHRpcG9fY29uc3VsdGEsXHJcbiAgICAgICAgICAgIHBvcjogcG9yLFxyXG4gICAgICAgICAgICBlbl9mZWNoOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICByZXBvcnRhZG86IGZhbHNlLFxyXG4gICAgICAgICAgICBoaXN0b3JpYV9sbGVuYTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdmVudGFGaWNoYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ZpY2hhLnZlbnRhJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXN0YWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwcmVjaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHBhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFuLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgZW1wbGVhZG9yOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgdGlwb19jb25zdWx0YToge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBvcjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGVuX2ZlY2g6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBlc3RhZG8sXHJcbiAgICAgICAgcHJlY2lvLFxyXG4gICAgICAgIHBhY2llbnRlLFxyXG4gICAgICAgIGFzZWd1cmFkbyxcclxuICAgICAgICBlbXBsZWFkb3IsXHJcbiAgICAgICAgdGlwb19jb25zdWx0YSxcclxuICAgICAgICBwb3IsXHJcbiAgICAgICAgZW5fZmVjaFxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBlc3RhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lvOiBwcmVjaW8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFjaWVudGU6IHBhY2llbnRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzZWd1cmFkbzogYXNlZ3VyYWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxlYWRvcjogZW1wbGVhZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fY29uc3VsdGE6IHRpcG9fY29uc3VsdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9yOiBwb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5fZmVjaDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRhZG86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcmlhX2xsZW5hOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVFc3RhZG9GaWNoYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2VzdGFkb2ZpY2hhLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljbzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGVzdGFkbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvX2NvbnN1bHRhOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgcG9yOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgZW5fZmVjaDoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBtZWRpY28sIGVzdGFkbywgcHJlY2lvLCB0aXBvX2NvbnN1bHRhLCBwb3IsIGVuX2ZlY2h9KXtcclxuICAgICAgICByZXR1cm4gRmljaGFzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6aWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBtZWRpY286IG1lZGljbyxcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG86IGVzdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaW86IHByZWNpbyxcclxuICAgICAgICAgICAgICAgICAgICB0aXBvX2NvbnN1bHRhOiB0aXBvX2NvbnN1bHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcjogcG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuX2ZlY2g6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0YWRvOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNZWRGaWNoYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ21lZGZpY2hhLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvX2NvbnN1bHRhOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBtZWRpY28sIHByZWNpbywgdGlwb19jb25zdWx0YX0pe1xyXG4gICAgICAgIHJldHVybiBGaWNoYXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBtZWRpY286IG1lZGljbyxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaW86IHByZWNpbyxcclxuICAgICAgICAgICAgICAgICAgICB0aXBvX2NvbnN1bHRhOiB0aXBvX2NvbnN1bHRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVzdGFkb0ZpY2hhTWVkID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZXN0YWRvZmljaGFtZWQudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXN0YWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZCwgZXN0YWRvfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG86IGVzdGFkbyxcclxuICAgICAgICAgICAgICAgICAgICAvL3BvcjogcG9yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVIaXN0TGxlbmFGaWNoYU1lZCA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2hpc3RsbGVuYWZpY2hhbWVkLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3JpYV9sbGVuYTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRWxpbUZpY2hhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZWxpbWZpY2hhLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVzdGFkbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7aWQsIGVzdGFkb30pe1xyXG4gICAgICAgIHJldHVybiBGaWNoYXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDppZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fY29uc3VsdGE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVzdGFkbzogZXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpbzogJzAuMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhY2llbnRlOiBlc3RhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0YWRvOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIFJFUE9SVEUgRklDSEFTXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRSZXBvcnRlRmljaGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdyZXBvcnRlZmljaGEuaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29fcmVwb3J0ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfcmVwb3J0ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9yZXBvcnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICByZXBvcnRlX2VudmlhZG86IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICB1c19lbnY6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRvdGFsOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICByZXBvcnRlX3JlY2liaWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcblxyXG4gICAgICAgIGRpYV9yZWM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lc19yZWM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGHDsW9fcmVjOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL2ZlY2hhX3JlY2liaWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX3JlY2liaWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB1c19yZWM6IHt0eXBlOiBTdHJpbmcgLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX3JlcG9ydGUsXHJcbiAgICAgICAgZmVjaGFfcmVwb3J0ZSxcclxuICAgICAgICBob3JhX3JlcG9ydGUsXHJcbiAgICAgICAgcmVwb3J0ZV9lbnZpYWRvLFxyXG4gICAgICAgIHVzX2VudixcclxuICAgICAgICB0b3RhbCxcclxuICAgICAgICByZXBvcnRlX3JlY2liaWRvLFxyXG4gICAgICAgIGRpYV9yZWMsXHJcbiAgICAgICAgbWVzX3JlYyxcclxuICAgICAgICBhw7FvX3JlYyxcclxuICAgICAgICAvL2ZlY2hhX3JlY2liaWRvLFxyXG4gICAgICAgIGhvcmFfcmVjaWJpZG8sXHJcbiAgICAgICAgdXNfcmVjLFxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgUmVwb3J0ZUZpY2hhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICAgICAgY29kaWdvX3JlcG9ydGU6IGNvZGlnb19yZXBvcnRlLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFfcmVwb3J0ZTogZmVjaGFfcmVwb3J0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBkaWFfZW52OiBmZWNoYV9yZXBvcnRlLnN1YnN0cigwLCAyKSxcclxuICAgICAgICAgICAgICAgIG1lc19lbnY6IGZlY2hhX3JlcG9ydGUuc3Vic3RyKDMsIDIpLFxyXG4gICAgICAgICAgICAgICAgYcOxb19lbnY6IGZlY2hhX3JlcG9ydGUuc3Vic3RyKDYsIDQpLFxyXG5cclxuICAgICAgICAgICAgICAgIGhvcmFfcmVwb3J0ZTogaG9yYV9yZXBvcnRlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0ZV9lbnZpYWRvOiByZXBvcnRlX2VudmlhZG8sXHJcbiAgICAgICAgICAgICAgICB1c19lbnY6IHVzX2VudixcclxuICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICAgICAgICAgIHJlcG9ydGVfcmVjaWJpZG86IHJlcG9ydGVfcmVjaWJpZG8sXHJcbiAgICAgICAgICAgICAgICBmZWNoYV9yZWNpYmlkbzogJycsXHJcbiAgICAgICAgICAgICAgICBkaWFfcmVjOiBkaWFfcmVjLFxyXG4gICAgICAgICAgICAgICAgbWVzX3JlYzogbWVzX3JlYyxcclxuICAgICAgICAgICAgICAgIGHDsW9fcmVjOiBhw7FvX3JlYyxcclxuICAgICAgICAgICAgICAgIC8vZmVjaGFfcmVjaWJpZG86IGZlY2hhX3JlY2liaWRvLFxyXG4gICAgICAgICAgICAgICAgaG9yYV9yZWNpYmlkbzogaG9yYV9yZWNpYmlkbyxcclxuICAgICAgICAgICAgICAgIHVzX3JlYzogdXNfcmVjLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBGaWNoYXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHBvcjogdXNfZW52LFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0YWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRhbmQ6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtlc3RhZG86IHskbmU6ICdMaWJyZSd9fSxcclxuICAgICAgICAgICAgICAgICAgICB7ZXN0YWRvOiB7JG5lOiAnUmVzZXJ2YWRvJ319LFxyXG4gICAgICAgICAgICAgICAgICAgIHtlc3RhZG86IHskbmU6ICdFbGltaW5hZG8nfX1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0YWRvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RpZ29fcmVwb3J0ZTogY29kaWdvX3JlcG9ydGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgbXVsdGk6dHJ1ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgRmljaGFzRW5mZXJtZXJpYS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgcG9yOiB1c19lbnYsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRhZG86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy9maW5fY29uc3VsdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYWdhZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAkYW5kOltcclxuICAgICAgICAgICAgICAgICAgICB7ZXN0YWRvOiB7JG5lOiAnRWxpbWluYWRvJ319XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydGFkbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kaWdvX3JlcG9ydGU6IGNvZGlnb19yZXBvcnRlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIG11bHRpOnRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZXBvcnRlRmljaGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdyZXBvcnRlZmljaGEudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcmVwb3J0ZV9yZWNpYmlkbzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIGRpYV9yZWM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lc19yZWM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGHDsW9fcmVjOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL2ZlY2hhX3JlY2liaWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX3JlY2liaWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB1c19yZWM6IHt0eXBlOiBTdHJpbmcgLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgcmVwb3J0ZV9yZWNpYmlkbyxcclxuICAgICAgICBkaWFfcmVjLFxyXG4gICAgICAgIG1lc19yZWMsXHJcbiAgICAgICAgYcOxb19yZWMsXHJcbiAgICAgICAgLy9mZWNoYV9yZWNpYmlkbyxcclxuICAgICAgICBob3JhX3JlY2liaWRvLFxyXG4gICAgICAgIHVzX3JlYyxcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBSZXBvcnRlRmljaGFzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZV9yZWNpYmlkbzogcmVwb3J0ZV9yZWNpYmlkbyxcclxuICAgICAgICAgICAgICAgICAgICBkaWFfcmVjOiBkaWFfcmVjLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc19yZWM6IG1lc19yZWMsXHJcbiAgICAgICAgICAgICAgICAgICAgYcOxb19yZWM6IGHDsW9fcmVjLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhX3JlY2liaWRvOiBkaWFfcmVjICsgJy8nICsgbWVzX3JlYyArICcvJyArIGHDsW9fcmVjLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcmFfcmVjaWJpZG86IGhvcmFfcmVjaWJpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNfcmVjOiB1c19yZWMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIEZJQ0hBSkUgREUgRU5GRVJNRVJJQVxyXG5leHBvcnQgY29uc3QgaW5zZXJ0RmljaGFGYXJtYWNpYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ZpY2hhZmFybWFjaWEuaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBucm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmFfY29uczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29uc3VsdG9yaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vbWVkaWNvOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgZXN0YWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL3RpcG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2NvbnM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vdHVybm86IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwcmVjaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHBhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFuLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgZW1wbGVhZG9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWFnbm9zdGljbzoge3R5cGU6IFtTdHJpbmddfSxcclxuXHJcbiAgICAgICAgLypkZXRhbGxlX2RpYWc6IHt0eXBlOiBbT2JqZWN0XX0sXHJcbiAgICAgICAgJ2RldGFsbGVfZGlhZy4kLm5vbWJyZV9kaWFnJzoge3R5cGU6U3RyaW5nfSxcclxuICAgICAgICAnZGV0YWxsZV9kaWFnLiQucHJlY2lvX2RpYWcnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnZGV0YWxsZV9kaWFnLiQucGFnYWRvX2RpYWcnOiB7dHlwZTogQm9vbGVhbn0sKi9cclxuXHJcblxyXG4gICAgICAgIC8qaW55ZWN0YWJsZV9pdjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhZ29faW55X2l2OiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIGlueWVjdGFibGVfaW06IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwYWdvX2lueV9pbToge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG5cclxuICAgICAgICBjdXJhY2lvbmVzOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgcGFnb19jdXJhY2lvbmVzOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIHN1ZXJvczoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhZ29fc3Vlcm9zOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIHN1dHVyYXM6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwYWdvX3N1dHVyYXM6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuXHJcbiAgICAgICAgb3hpZ2Vubzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhZ29fb3hpZ2Vubzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG5cclxuICAgICAgICB1w7Flcm86IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwYWdvX3XDsWVybzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG5cclxuICAgICAgICBlbmVtYToge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhZ29fZW5lbWE6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuXHJcbiAgICAgICAgcF9hcnQ6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwYWdvX3BfYXJ0OiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIHNvbmRhOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgcGFnb19zb25kYToge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG5cclxuICAgICAgICBvdHJvczoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhZ29fb3Ryb3M6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSwqL1xyXG5cclxuICAgICAgICAvKmN1ZW50YXM6IHt0eXBlOiBbT2JqZWN0XX0sXHJcbiAgICAgICAgJ2N1ZW50YXMuJC5jb2RpZ29fYyc6IHt0eXBlOlN0cmluZ30sXHJcbiAgICAgICAgJ2N1ZW50YXMuJC5kZWJlJzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgJ2N1ZW50YXMuJC5oYWJlcic6IHt0eXBlOiBTdHJpbmd9LCovXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGlwb19jb25zdWx0YToge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBvcjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGVuX2ZlY2g6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBucm8sXHJcbiAgICAgICAgaG9yYV9jb25zLFxyXG4gICAgICAgIGNvbnN1bHRvcmlvLFxyXG4gICAgICAgIC8vbWVkaWNvLFxyXG4gICAgICAgIGVzdGFkbyxcclxuICAgICAgICAvL3RpcG8sXHJcbiAgICAgICAgZmVjaGFfY29ucyxcclxuICAgICAgICAvL3R1cm5vLFxyXG4gICAgICAgIHByZWNpbyxcclxuICAgICAgICBwYWNpZW50ZSxcclxuICAgICAgICBhc2VndXJhZG8sXHJcbiAgICAgICAgZW1wbGVhZG9yLFxyXG4gICAgICAgIGRpYWdub3N0aWNvLFxyXG4gICAgICAgIHRpcG9fY29uc3VsdGEsXHJcbiAgICAgICAgcG9yLFxyXG4gICAgICAgIGVuX2ZlY2hcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBGaWNoYXNFbmZlcm1lcmlhLmluc2VydCh7XHJcbiAgICAgICAgICAgIG5ybzogbnJvLFxyXG4gICAgICAgICAgICBob3JhX2NvbnM6IGhvcmFfY29ucyxcclxuICAgICAgICAgICAgY29uc3VsdG9yaW86IGNvbnN1bHRvcmlvLFxyXG4gICAgICAgICAgICAvL21lZGljbzogbWVkaWNvLFxyXG4gICAgICAgICAgICBlc3RhZG86IGVzdGFkbyxcclxuXHJcbiAgICAgICAgICAgIGZpbl9jb25zdWx0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vdGlwbzogdGlwbyxcclxuICAgICAgICAgICAgZmVjaGFfY29uczogZmVjaGFfY29ucyxcclxuICAgICAgICAgICAgZGlhOiBmZWNoYV9jb25zLnN1YnN0cigwLCAyKSxcclxuICAgICAgICAgICAgbWVzOiBmZWNoYV9jb25zLnN1YnN0cigzLCAyKSxcclxuICAgICAgICAgICAgYcOxbzogZmVjaGFfY29ucy5zdWJzdHIoNiwgNCksXHJcbiAgICAgICAgICAgIC8vdHVybm86IHR1cm5vLFxyXG4gICAgICAgICAgICBwcmVjaW86IHByZWNpbyxcclxuICAgICAgICAgICAgcGFnYWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFjaWVudGU6IHBhY2llbnRlLFxyXG4gICAgICAgICAgICBhc2VndXJhZG86IGFzZWd1cmFkbyxcclxuICAgICAgICAgICAgZW1wbGVhZG9yOiBlbXBsZWFkb3IsXHJcbiAgICAgICAgICAgIGRpYWdub3N0aWNvOiBkaWFnbm9zdGljbyxcclxuICAgICAgICAgICAgdGlwb19jb25zdWx0YTogdGlwb19jb25zdWx0YSxcclxuICAgICAgICAgICAgcG9yOiBwb3IsXHJcbiAgICAgICAgICAgIGVuX2ZlY2g6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHJlcG9ydGFkbzogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRWxpbUZpY2hhRmFybSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2VsaW1maWNoYWZhcm0udXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXN0YWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZCwgZXN0YWRvfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhc0VuZmVybWVyaWEudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDppZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fY29uc3VsdGE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVzdGFkbzogZXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaW86ICcwLjAwJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWNpZW50ZTogZXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGFkbzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRmljaGFGYXJtYWNpYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ZpY2hhZmFybWFjaWEudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGRpYWdub3N0aWNvOiB7dHlwZTogW1N0cmluZ119LFxyXG4gICAgICAgIHRpcG9fY29uc3VsdGE6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBkaWFnbm9zdGljbyxcclxuICAgICAgICB0aXBvX2NvbnN1bHRhLFxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhc0VuZmVybWVyaWEudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDppZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvOiBkaWFnbm9zdGljbyxcclxuICAgICAgICAgICAgICAgICAgICB0aXBvX2NvbnN1bHRhOiB0aXBvX2NvbnN1bHRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpbzogJzAuMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2FkbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVzdGFkb0ZpY2hhRW5mID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZXN0YWRvZmljaGFlbmYudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXN0YWRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZCwgZXN0YWRvfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhc0VuZmVybWVyaWEudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBlc3RhZG8sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbkNvbnNGaWNoYUVuZiA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ZpbmNvbnNmaWNoYWVuZi51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBmaW5fY29uc3VsdGE6IHt0eXBlOiBCb29sZWFufSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZCwgZmluX2NvbnN1bHRhfSl7XHJcbiAgICAgICAgcmV0dXJuIEZpY2hhc0VuZmVybWVyaWEudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluX2NvbnN1bHRhOiBmaW5fY29uc3VsdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJlY2lvRmljaGFFbmYgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdwcmVjaW9maWNoYWVuZi51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwcmVjaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBwcmVjaW99KXtcclxuICAgICAgICByZXR1cm4gRmljaGFzRW5mZXJtZXJpYS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaW86IHByZWNpbyxcclxuICAgICAgICAgICAgICAgICAgICBwYWdhZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydERldGFsbGVGaWNoYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2RldGFsbGVmaWNoYS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkX2ZpY2hhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmVfZGlhZzoge3R5cGU6U3RyaW5nfSxcclxuICAgICAgICBwcmVjaW9fZGlhZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcGFnYWRvX2RpYWc6IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBmZWNoYV9jb25zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBpZF9maWNoYSxcclxuICAgICAgICBub21icmVfZGlhZyxcclxuICAgICAgICBwcmVjaW9fZGlhZyxcclxuICAgICAgICBwYWdhZG9fZGlhZyxcclxuICAgICAgICBmZWNoYV9jb25zLFxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIERldGFsbGVGaWNoYS5pbnNlcnQoe1xyXG4gICAgICAgICAgICBpZF9maWNoYTogaWRfZmljaGEsXHJcbiAgICAgICAgICAgIG5vbWJyZV9kaWFnOiBub21icmVfZGlhZyxcclxuICAgICAgICAgICAgcHJlY2lvX2RpYWc6IHByZWNpb19kaWFnLFxyXG4gICAgICAgICAgICBwYWdhZG9fZGlhZzogcGFnYWRvX2RpYWcsXHJcblxyXG4gICAgICAgICAgICBmZWNoYV9jb25zOiBmZWNoYV9jb25zLFxyXG4gICAgICAgICAgICBkaWE6IGZlY2hhX2NvbnMuc3Vic3RyKDAsIDIpLFxyXG4gICAgICAgICAgICBtZXM6IGZlY2hhX2NvbnMuc3Vic3RyKDMsIDIpLFxyXG4gICAgICAgICAgICBhw7FvOiBmZWNoYV9jb25zLnN1YnN0cig2LCA0KSxcclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcmVjaW9EZXRhbGxlRmljaGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdwcmVjaW9kZXRhbGxlZmljaGEudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZF9maWNoYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlX2RpYWc6IHt0eXBlOlN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX2RpYWc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHBhZ2Fkb19kaWFnOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgaWRfZmljaGEsXHJcbiAgICAgICAgbm9tYnJlX2RpYWcsXHJcbiAgICAgICAgcHJlY2lvX2RpYWcsXHJcbiAgICAgICAgcGFnYWRvX2RpYWcsXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gRGV0YWxsZUZpY2hhLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGlkX2ZpY2hhOiBpZF9maWNoYSxcclxuICAgICAgICAgICAgbm9tYnJlX2RpYWc6IG5vbWJyZV9kaWFnLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaW9fZGlhZzogcHJlY2lvX2RpYWcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnYWRvX2RpYWc6IHBhZ2Fkb19kaWFnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVEZXRhbGxlRmljaGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdkZXRhbGxlZmljaGEucmVtb3ZlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZF9maWNoYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlX2RpYWc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yICgpLFxyXG4gICAgcnVuICh7XHJcbiAgICAgICAgaWRfZmljaGEsXHJcbiAgICAgICAgbm9tYnJlX2RpYWcsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgcmV0dXJuIERldGFsbGVGaWNoYS5yZW1vdmUoe1xyXG4gICAgICAgICAgICBpZF9maWNoYTogaWRfZmljaGEsXHJcbiAgICAgICAgICAgIG5vbWJyZV9kaWFnOiBub21icmVfZGlhZyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsRGV0YWxsZUZpY2hhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZGV0YWxsZWZpY2hhYWxsLnJlbW92ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWRfZmljaGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yICgpLFxyXG4gICAgcnVuICh7XHJcbiAgICAgICAgaWRfZmljaGEsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgcmV0dXJuIERldGFsbGVGaWNoYS5yZW1vdmUoe1xyXG4gICAgICAgICAgICBpZF9maWNoYTogaWRfZmljaGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9GSUNIQSBJTlRFUk5BQ0lPTlxyXG5leHBvcnQgY29uc3QgaW5zZXJ0RmljaGFJbnRlcm5hY2lvbiA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ZpY2hhaW50ZXJuYWNpb24uaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBpZF9wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfc2VydmljaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHNlcnZpY2lvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkZXRhbGxlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYcOxbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uLFxyXG5cclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuICAgICAgICBpZF9zZXJ2aWNpbyxcclxuICAgICAgICBzZXJ2aWNpbyxcclxuICAgICAgICBkZXRhbGxlLFxyXG4gICAgICAgIGRpYSxcclxuICAgICAgICBtZXMsXHJcbiAgICAgICAgYcOxbyxcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBGaWNoYUludGVybmFjaW9uLmluc2VydCh7XHJcbiAgICAgICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjogY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgICAgICBpZF9wYWNpZW50ZTogaWRfcGFjaWVudGUsXHJcbiAgICAgICAgICAgIGlkX3NlcnZpY2lvOiBpZF9zZXJ2aWNpbyxcclxuICAgICAgICAgICAgc2VydmljaW86IHNlcnZpY2lvLFxyXG4gICAgICAgICAgICBkZXRhbGxlOiBkZXRhbGxlLFxyXG4gICAgICAgICAgICBkaWE6IGRpYSxcclxuICAgICAgICAgICAgbWVzOiBtZXMsXHJcbiAgICAgICAgICAgIGHDsW86IGHDsW8sXHJcbiAgICAgICAgICAgIG1vbnRvOiAnMC4wMCcsXHJcbiAgICAgICAgICAgIHBhZ2FkbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGZlY2hhX3JlZzogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcmVjaW9GaWNoYUludGVybmFjaW9uID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncHJlY2lvZmljaGFpbnRlcm5hY2lvbi51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtb250bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmFjdHVyYToge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZCwgbW9udG8sIGZhY3R1cmF9KXtcclxuICAgICAgICByZXR1cm4gRmljaGFJbnRlcm5hY2lvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb250bzogbW9udG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjdHVyYTogZmFjdHVyYSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdhZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlcG9ydGVGaWNoYUludGVybmFjaW9uID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncmVwb3J0ZWZpY2hhaW50ZXJuYWNpb24udXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHBvcjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7Y29kaWdvX2ludGVybmFjaW9uLCBwb3J9KXtcclxuICAgICAgICByZXR1cm4gRmljaGFJbnRlcm5hY2lvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiBjb2RpZ29faW50ZXJuYWNpb25cclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9yOiBwb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0YWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgbXVsdGk6dHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGaWNoYUludGVybmFjaW9uID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnZmljaGFpbnRlcm5hY2lvbi5yZW1vdmUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZH0pe1xyXG4gICAgICAgIHJldHVybiBGaWNoYUludGVybmFjaW9uLnJlbW92ZSh7X2lkOiBpZH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRSZWNldGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdyZWNldGEuaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBmaWNoYV9pZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbWVkaWNhbWVudG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNhbnRpZGFkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB1c286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGZpY2hhX2lkLFxyXG4gICAgICAgIG1lZGljYW1lbnRvLFxyXG4gICAgICAgIGNhbnRpZGFkLFxyXG4gICAgICAgIHVzbyxcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBDb25zdWx0YXMudXBkYXRlKHtcclxuICAgICAgICAgICAgZmljaGFfaWQ6IGZpY2hhX2lkXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICAgICAgICB0cmF0YW1pZW50bzoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGljYW1lbnRvOiBtZWRpY2FtZW50byxcclxuICAgICAgICAgICAgICAgICAgICBjYW50aWRhZDogY2FudGlkYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNvOiB1c29cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuKi9cclxuXHJcbi8qXHJcbiAgICB2YXIgZmVjaGE9bmV3IERhdGUoKTtcclxuXHJcblx0Ly8gQ29nZW1vcyBsYSBmZWNoYSBhY3R1YWwgZW4gZm9ybWF0byBtaWxpc2VndW5kb3MgZGVzZGUgMS8xLzE5NzAgeSBsZVxyXG5cdC8vIHJlc3RhbW9zIHRhbnRvcyBtaWxpc2VndW5kb3MgY29tbyB0aWVuZSB1biBkaWEuXHJcblx0dmFyIGF5ZXI9bmV3IERhdGUoZmVjaGEuZ2V0VGltZSgpIC0gMjQqNjAqNjAqMTAwMCk7XHJcblxyXG5cdC8vIFN1bWFtb3MgbG9zIG1pbGlzZWd1bmRvcyBxdWUgdGllbmUgdW4gZGlhXHJcblx0dmFyIG1hbmFuYT1uZXcgRGF0ZShmZWNoYS5nZXRUaW1lKCkgKyAyNCo2MCo2MCoxMDAwKTtcclxuXHJcblx0ZG9jdW1lbnQud3JpdGUoXCI8YnI+TGEgRmVjaGEgZGUgaG95IGVzOiBcIitmZWNoYS5nZXREYXRlKCkrXCIvXCIrZmVjaGEuZ2V0TW9udGgoKStcIi9cIitmZWNoYS5nZXRGdWxsWWVhcigpKTtcclxuXHJcblx0ZG9jdW1lbnQud3JpdGUoXCI8YnI+TGEgRmVjaGEgZGUgYXllciBlczogXCIrYXllci5nZXREYXRlKCkrXCIvXCIrYXllci5nZXRNb250aCgpK1wiL1wiK2F5ZXIuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG5cdGRvY3VtZW50LndyaXRlKFwiPGJyPkxhIEZlY2hhIGRlIG1hw7FhbmEgZXM6IFwiK21hbmFuYS5nZXREYXRlKCkrXCIvXCIrbWFuYW5hLmdldE1vbnRoKCkrXCIvXCIrbWFuYW5hLmdldEZ1bGxZZWFyKCkpO1xyXG4qL1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xyXG5pbXBvcnQgeyBTaW1wbGVTY2hlbWEgfSBmcm9tICdtZXRlb3IvYWxkZWVkOnNpbXBsZS1zY2hlbWEnO1xyXG5pbXBvcnQgeyBIaXN0b3JpYWxlcywgQ29uc3VsdGFzLCBJbnRlcm5hY2lvbmVzLCBRdWlyb2Zhbm8sIERpYWdub3N0aWNvLCBTaWdub3NWaXRhbGVzLCBTYWxhUGFydG9zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlSGlzdG9yaWFsID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnaGlzdG9yaWFsLmNyZWF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2g6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGlkX3BhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgY2k6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfcGF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfbWF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIC8vZmVjaGFfY3JlYWNpb246IHt0eXBlOiBEYXRlfSxcclxuICAgICAgICByZWdfcG9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBjb2RpZ29faCxcclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgY2ksXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGFwX3BhdGVybm8sXHJcbiAgICAgICAgYXBfbWF0ZXJubyxcclxuXHJcbiAgICAgICAgLy9mZWNoYV9jcmVhY2lvbixcclxuICAgICAgICByZWdfcG9yXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gSGlzdG9yaWFsZXMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgY29kaWdvX2g6IGNvZGlnb19oLFxyXG4gICAgICAgICAgICBpZF9wYWNpZW50ZTogaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgICAgICBjaTogY2ksXHJcbiAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxyXG4gICAgICAgICAgICBhcF9wYXRlcm5vOiBhcF9wYXRlcm5vLFxyXG4gICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG5cclxuICAgICAgICAgICAgZmVjaGFfY3JlYWNpb246IG5ldyBEYXRlKCksLy9mZWNoYV9jcmVhY2lvbixcclxuICAgICAgICAgICAgcmVnX3BvcjogcmVnX3BvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVIaXN0b3JpYWwgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdoaXN0b3JpYWwudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29faDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBjaToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhcF9wYXRlcm5vOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhcF9tYXRlcm5vOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBjb2RpZ29faCxcclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgY2ksXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGFwX3BhdGVybm8sXHJcbiAgICAgICAgYXBfbWF0ZXJubyxcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBIaXN0b3JpYWxlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29kaWdvX2g6IGNvZGlnb19oLFxyXG4gICAgICAgICAgICAgICAgaWRfcGFjaWVudGU6IGlkX3BhY2llbnRlLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNpOiBjaSxcclxuICAgICAgICAgICAgICAgICAgICBub21icmU6IG5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBhcF9wYXRlcm5vOiBhcF9wYXRlcm5vLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwX21hdGVybm86IGFwX21hdGVybm8sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLyBDT05TVUxUQVMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0Q29uc3VsdGEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdjb25zdWx0YS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19oOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBpZF9wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX3BhdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX21hdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBzZXhvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFufSxcclxuXHJcbiAgICAgICAgZWRhZDoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgdGlwb19lZGFkOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgZG9taWNpbGlvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBvY3VwYWNpb246IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBmaWNoYV9pZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbnJvX2ZpY2hhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBmZWNoYV9jb25zdWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9jb25zdWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29uc3VsdG9yaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdGlwb19jb25zdWx0YToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIHByZV9hcnQ6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIGZyZWNfY2FyZDoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgZnJlY19yZXNwOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICB0ZW1wZXJhdHVyYToge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgZ2VzdGFzOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICBwYXJhOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICBhYm9ydG9zOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICBjZXNhcmVhczoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgZnVtOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtb3Rpdm9fY29uc3VsdGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVuZmVybWVkYWRfYWN0dWFsOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhbnRfcGF0b2xvZ2ljb3M6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGV4YW1lbl9maXNpY286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGRpYWdub3N0aWNvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvKmRpYWdub3N0aWNvOiB7dHlwZTogW09iamVjdF19LFxyXG4gICAgICAgICdkaWFnbm9zdGljby4kLm5vbV9kaWFnbm9zdGljbyc6IHt0eXBlOiBTdHJpbmd9LCovXHJcblxyXG4gICAgICAgIHRyYXRhbWllbnRvOiB7dHlwZTogW09iamVjdF19LFxyXG4gICAgICAgICd0cmF0YW1pZW50by4kLm1lZGljYW1lbnRvJyA6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgICd0cmF0YW1pZW50by4kLmNhbnRpZGFkJyA6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgICd0cmF0YW1pZW50by4kLnVzbycgOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgZXN0X3NvbGljaXRhZG9zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICByZWNvbWVuZGFjaW9uZXM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19oLFxyXG4gICAgICAgIGlkX3BhY2llbnRlLFxyXG5cclxuICAgICAgICBjaSxcclxuICAgICAgICBub21icmUsXHJcbiAgICAgICAgYXBfcGF0ZXJubyxcclxuICAgICAgICBhcF9tYXRlcm5vLFxyXG5cclxuICAgICAgICBzZXhvLFxyXG4gICAgICAgIGFzZWd1cmFkbyxcclxuXHJcbiAgICAgICAgZWRhZCxcclxuICAgICAgICB0aXBvX2VkYWQsXHJcblxyXG4gICAgICAgIGRvbWljaWxpbyxcclxuICAgICAgICBvY3VwYWNpb24sXHJcblxyXG4gICAgICAgIGZpY2hhX2lkLFxyXG4gICAgICAgIG5yb19maWNoYSxcclxuICAgICAgICBmZWNoYV9jb25zdWx0YSxcclxuICAgICAgICBob3JhX2NvbnN1bHRhLFxyXG4gICAgICAgIGNvbnN1bHRvcmlvLFxyXG4gICAgICAgIG1lZGljbyxcclxuICAgICAgICB0aXBvX2NvbnN1bHRhLFxyXG5cclxuICAgICAgICBwcmVfYXJ0LFxyXG4gICAgICAgIGZyZWNfY2FyZCxcclxuICAgICAgICBmcmVjX3Jlc3AsXHJcbiAgICAgICAgdGVtcGVyYXR1cmEsXHJcbiAgICAgICAgZ2VzdGFzLFxyXG4gICAgICAgIHBhcmEsXHJcbiAgICAgICAgYWJvcnRvcyxcclxuICAgICAgICBjZXNhcmVhcyxcclxuICAgICAgICBmdW0sXHJcbiAgICAgICAgbW90aXZvX2NvbnN1bHRhLFxyXG4gICAgICAgIGVuZmVybWVkYWRfYWN0dWFsLFxyXG4gICAgICAgIGFudF9wYXRvbG9naWNvcyxcclxuICAgICAgICBleGFtZW5fZmlzaWNvLFxyXG4gICAgICAgIGRpYWdub3N0aWNvLFxyXG5cclxuICAgICAgICB0cmF0YW1pZW50byxcclxuXHJcbiAgICAgICAgZXN0X3NvbGljaXRhZG9zLFxyXG4gICAgICAgIHJlY29tZW5kYWNpb25lc1xyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBhbWJ1bGF0b3JpbzogdHJ1ZSxcclxuICAgICAgICAgICAgY29kaWdvX2g6IGNvZGlnb19oLFxyXG4gICAgICAgICAgICBpZF9wYWNpZW50ZTogaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgICAgICBjaTogY2ksXHJcbiAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxyXG4gICAgICAgICAgICBhcF9wYXRlcm5vOiBhcF9wYXRlcm5vLFxyXG4gICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG5cclxuICAgICAgICAgICAgc2V4bzogc2V4byxcclxuICAgICAgICAgICAgYXNlZ3VyYWRvOiBhc2VndXJhZG8sXHJcblxyXG4gICAgICAgICAgICBlZGFkOiBlZGFkLFxyXG4gICAgICAgICAgICB0aXBvX2VkYWQ6IHRpcG9fZWRhZCxcclxuXHJcbiAgICAgICAgICAgIGRvbWljaWxpbzogZG9taWNpbGlvLFxyXG4gICAgICAgICAgICBvY3VwYWNpb246IG9jdXBhY2lvbixcclxuXHJcbiAgICAgICAgICAgIGZpY2hhX2lkOiBmaWNoYV9pZCxcclxuICAgICAgICAgICAgbnJvX2ZpY2hhOiBucm9fZmljaGEsXHJcbiAgICAgICAgICAgIGZlY2hhX2NvbnN1bHRhOiBmZWNoYV9jb25zdWx0YSxcclxuICAgICAgICAgICAgZGlhOiBmZWNoYV9jb25zdWx0YS5zdWJzdHIoMCwgMiksXHJcbiAgICAgICAgICAgIG1lczogZmVjaGFfY29uc3VsdGEuc3Vic3RyKDMsIDIpLFxyXG4gICAgICAgICAgICBhw7FvOiBmZWNoYV9jb25zdWx0YS5zdWJzdHIoNiwgNCksXHJcblxyXG4gICAgICAgICAgICBob3JhX2NvbnN1bHRhOiBob3JhX2NvbnN1bHRhLFxyXG4gICAgICAgICAgICBjb25zdWx0b3JpbzogY29uc3VsdG9yaW8sXHJcbiAgICAgICAgICAgIG1lZGljbzogbWVkaWNvLFxyXG4gICAgICAgICAgICB0aXBvX2NvbnN1bHRhOiB0aXBvX2NvbnN1bHRhLFxyXG5cclxuICAgICAgICAgICAgcHJlX2FydDogcHJlX2FydCxcclxuICAgICAgICAgICAgZnJlY19jYXJkOiBmcmVjX2NhcmQsXHJcbiAgICAgICAgICAgIGZyZWNfcmVzcDogZnJlY19yZXNwLFxyXG4gICAgICAgICAgICB0ZW1wZXJhdHVyYTogdGVtcGVyYXR1cmEsXHJcbiAgICAgICAgICAgIGdlc3RhczogZ2VzdGFzLFxyXG4gICAgICAgICAgICBwYXJhOiBwYXJhLFxyXG4gICAgICAgICAgICBhYm9ydG9zOiBhYm9ydG9zLFxyXG4gICAgICAgICAgICBjZXNhcmVhczogY2VzYXJlYXMsXHJcbiAgICAgICAgICAgIGZ1bTogZnVtLFxyXG4gICAgICAgICAgICBtb3Rpdm9fY29uc3VsdGE6IG1vdGl2b19jb25zdWx0YSxcclxuICAgICAgICAgICAgZW5mZXJtZWRhZF9hY3R1YWw6IGVuZmVybWVkYWRfYWN0dWFsLFxyXG4gICAgICAgICAgICBhbnRfcGF0b2xvZ2ljb3M6IGFudF9wYXRvbG9naWNvcyxcclxuICAgICAgICAgICAgZXhhbWVuX2Zpc2ljbzogZXhhbWVuX2Zpc2ljbyxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY286IGRpYWdub3N0aWNvLFxyXG5cclxuICAgICAgICAgICAgdHJhdGFtaWVudG86IHRyYXRhbWllbnRvLFxyXG5cclxuICAgICAgICAgICAgZXN0X3NvbGljaXRhZG9zOiBlc3Rfc29saWNpdGFkb3MsXHJcbiAgICAgICAgICAgIHJlY29tZW5kYWNpb25lczogcmVjb21lbmRhY2lvbmVzLFxyXG5cclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vIEHDkUFESVIgUkVDRVRBIC8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgaW5zZXJ0UmVjZXRhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncmVjZXRhLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgZmljaGFfaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljYW1lbnRvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjYW50aWRhZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdXNvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBmaWNoYV9pZCxcclxuICAgICAgICBtZWRpY2FtZW50byxcclxuICAgICAgICBjYW50aWRhZCxcclxuICAgICAgICB1c28sXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gQ29uc3VsdGFzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGZpY2hhX2lkOiBmaWNoYV9pZFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgICAgICAgdHJhdGFtaWVudG86IHtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpY2FtZW50bzogbWVkaWNhbWVudG8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IGNhbnRpZGFkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzbzogdXNvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vL0RJQUdOw5NTVElDT1xyXG5leHBvcnQgY29uc3QgaW5zZXJ0RGlhZ25vc3RpY28gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdkaWFnbm9zdGljby5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIG5vbWJyZV9kaWFnOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIG5vbWJyZV9kaWFnXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gRGlhZ25vc3RpY28uaW5zZXJ0KHtcclxuICAgICAgICAgICAgbm9tYnJlX2RpYWc6IG5vbWJyZV9kaWFnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8gRU5GRVJNRVJJQSAvLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydENvbnN1bHRhRW5mZXJtZXJpYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2NvbnN1bHRhZW5mZXJtZXJpYS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19oOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBpZF9wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHNleG86IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBlZGFkOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgbnJvX2ZpY2hhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBmZWNoYV9jb25zdWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9jb25zdWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29uc3VsdG9yaW86IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICB0aXBvX2NvbnN1bHRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWFnbm9zdGljbzoge3R5cGU6IFtTdHJpbmddfSxcclxuICAgICAgICBvdHJvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhZG1pbmlzdHJhY2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdmlhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtZWRpY2FtZW50bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbWVkaWNvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBlbmZlcm1lcmE6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBjb2RpZ29faCxcclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgY2ksXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIHNleG8sXHJcblxyXG4gICAgICAgIGVkYWQsXHJcblxyXG4gICAgICAgIG5yb19maWNoYSxcclxuICAgICAgICBmZWNoYV9jb25zdWx0YSxcclxuICAgICAgICBob3JhX2NvbnN1bHRhLFxyXG4gICAgICAgIGNvbnN1bHRvcmlvLFxyXG5cclxuICAgICAgICB0aXBvX2NvbnN1bHRhLFxyXG4gICAgICAgIGRpYWdub3N0aWNvLFxyXG4gICAgICAgIG90cm8sXHJcbiAgICAgICAgYWRtaW5pc3RyYWNpb24sXHJcbiAgICAgICAgdmlhLFxyXG4gICAgICAgIG1lZGljYW1lbnRvLFxyXG4gICAgICAgIG1lZGljbyxcclxuICAgICAgICBlbmZlcm1lcmEsXHJcbiAgICB9KXtcclxuXHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBhbWJ1bGF0b3Jpb19lbmY6IHRydWUsXHJcblxyXG4gICAgICAgICAgICBjb2RpZ29faDogY29kaWdvX2gsXHJcbiAgICAgICAgICAgIGlkX3BhY2llbnRlOiBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgICAgIGNpOiBjaSxcclxuICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgIHNleG86IHNleG8sXHJcblxyXG4gICAgICAgICAgICBlZGFkOiBlZGFkLFxyXG5cclxuICAgICAgICAgICAgbnJvX2ZpY2hhOiBucm9fZmljaGEsXHJcbiAgICAgICAgICAgIGZlY2hhX2NvbnN1bHRhOiBmZWNoYV9jb25zdWx0YSxcclxuICAgICAgICAgICAgaG9yYV9jb25zdWx0YTogaG9yYV9jb25zdWx0YSxcclxuICAgICAgICAgICAgY29uc3VsdG9yaW86IGNvbnN1bHRvcmlvLFxyXG5cclxuICAgICAgICAgICAgdGlwb19jb25zdWx0YTogdGlwb19jb25zdWx0YSxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY286IGRpYWdub3N0aWNvLFxyXG4gICAgICAgICAgICBvdHJvOiBvdHJvLFxyXG4gICAgICAgICAgICBhZG1pbmlzdHJhY2lvbjogYWRtaW5pc3RyYWNpb24sXHJcbiAgICAgICAgICAgIHZpYTogdmlhLFxyXG4gICAgICAgICAgICBtZWRpY2FtZW50bzogbWVkaWNhbWVudG8sXHJcbiAgICAgICAgICAgIG1lZGljbzogbWVkaWNvLFxyXG4gICAgICAgICAgICBlbmZlcm1lcmE6IGVuZmVybWVyYSxcclxuICAgICAgICAgICAgZGlhOiBmZWNoYV9jb25zdWx0YS5zdWJzdHIoMCwgMiksXHJcbiAgICAgICAgICAgIG1lczogZmVjaGFfY29uc3VsdGEuc3Vic3RyKDMsIDIpLFxyXG4gICAgICAgICAgICBhw7FvOiBmZWNoYV9jb25zdWx0YS5zdWJzdHIoNiwgNCksXHJcbiAgICAgICAgICAgIGZlY2hhX3JlZzogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0SW50ZXJuYWNpb25QYWNpZW50ZSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2ludGVybmFjaW9uUGFjaWVudGUuaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb19oOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBpZF9wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX3BhdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX21hdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBzZXhvOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgZWRhZDoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgdGlwb19lZGFkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFufSxcclxuXHJcbiAgICAgICAgdGlwb19zYWxhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBzYWxhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjYW1hOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcblxyXG4gICAgICAgIGZlY2hhX2luZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9pbmc6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBzZXJ2aWNpbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbWVkaWNvOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgcHJlX2FydDoge3R5cGU6IE51bWJlcn0sXHJcbiAgICAgICAgZnJlY19jYXJkOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICBmcmVjX3Jlc3A6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIHRlbXBlcmF0dXJhOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICBnZXN0YXM6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIHBhcmE6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIGFib3J0b3M6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIGNlc2FyZWFzOiB7dHlwZTogTnVtYmVyfSxcclxuICAgICAgICBmdW06IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBtb3Rpdm9fY29uc3VsdGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFudF9wYXRvbG9naWNvczoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGV4YW1lbl9maXNpY286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHBpZWxfbXVjb3Nhczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZ2xhc2dvdzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY2FiZXphOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjdWVsbG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRvcmF4OiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhYmRvbWVuOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBleHRyZW1pZGFkZXM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGRpYWdub3N0aWNvOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgLypkaWFnbm9zdGljbzoge3R5cGU6IFtPYmplY3RdfSxcclxuICAgICAgICAnZGlhZ25vc3RpY28uJC5ub21fZGlhZ25vc3RpY28nOiB7dHlwZTogU3RyaW5nfSwqL1xyXG5cclxuICAgICAgICAvKnRyYXRhbWllbnRvOiB7dHlwZTogW09iamVjdF19LFxyXG4gICAgICAgICd0cmF0YW1pZW50by4kLm1lZGljYW1lbnRvJzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgJ3RyYXRhbWllbnRvLiQuY2FudGlkYWQnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAndHJhdGFtaWVudG8uJC51c28nOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwbGFuOiB7dHlwZTogU3RyaW5nfSwqL1xyXG5cclxuICAgICAgICBjb25kdWN0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgLy9lc3Rfc29saWNpdGFkb3M6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb24sXHJcbiAgICAgICAgY29kaWdvX2gsXHJcbiAgICAgICAgaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgIGNpLFxyXG4gICAgICAgIG5vbWJyZSxcclxuICAgICAgICBhcF9wYXRlcm5vLFxyXG4gICAgICAgIGFwX21hdGVybm8sXHJcblxyXG4gICAgICAgIHNleG8sXHJcblxyXG4gICAgICAgIGVkYWQsXHJcbiAgICAgICAgdGlwb19lZGFkLFxyXG4gICAgICAgIGFzZWd1cmFkbyxcclxuXHJcbiAgICAgICAgdGlwb19zYWxhLFxyXG4gICAgICAgIHNhbGEsXHJcbiAgICAgICAgY2FtYSxcclxuXHJcblxyXG4gICAgICAgIGZlY2hhX2luZyxcclxuICAgICAgICBob3JhX2luZyxcclxuXHJcbiAgICAgICAgc2VydmljaW8sXHJcbiAgICAgICAgbWVkaWNvLFxyXG5cclxuICAgICAgICBwcmVfYXJ0LFxyXG4gICAgICAgIGZyZWNfY2FyZCxcclxuICAgICAgICBmcmVjX3Jlc3AsXHJcbiAgICAgICAgdGVtcGVyYXR1cmEsXHJcbiAgICAgICAgZ2VzdGFzLFxyXG4gICAgICAgIHBhcmEsXHJcbiAgICAgICAgYWJvcnRvcyxcclxuICAgICAgICBjZXNhcmVhcyxcclxuICAgICAgICBmdW0sXHJcblxyXG4gICAgICAgIG1vdGl2b19jb25zdWx0YSxcclxuICAgICAgICBhbnRfcGF0b2xvZ2ljb3MsXHJcblxyXG4gICAgICAgIGV4YW1lbl9maXNpY28sXHJcbiAgICAgICAgcGllbF9tdWNvc2FzLFxyXG4gICAgICAgIGdsYXNnb3csXHJcbiAgICAgICAgY2FiZXphLFxyXG4gICAgICAgIGN1ZWxsbyxcclxuICAgICAgICB0b3JheCxcclxuICAgICAgICBhYmRvbWVuLFxyXG4gICAgICAgIGV4dHJlbWlkYWRlcyxcclxuXHJcbiAgICAgICAgZGlhZ25vc3RpY28sXHJcblxyXG4gICAgICAgIC8qdHJhdGFtaWVudG8sXHJcbiAgICAgICAgcGxhbiwqL1xyXG5cclxuICAgICAgICBjb25kdWN0YSxcclxuICAgICAgICAvL2VzdF9zb2xpY2l0YWRvcyxcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBDb25zdWx0YXMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgaW50ZXJuYWNpb246IHRydWUsXHJcbiAgICAgICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjogY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgICAgICBjb2RpZ29faDogY29kaWdvX2gsXHJcbiAgICAgICAgICAgIGlkX3BhY2llbnRlOiBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgICAgIGNpOiBjaSxcclxuICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgIGFwX3BhdGVybm86IGFwX3BhdGVybm8sXHJcbiAgICAgICAgICAgIGFwX21hdGVybm86IGFwX21hdGVybm8sXHJcblxyXG4gICAgICAgICAgICBzZXhvOiBzZXhvLFxyXG5cclxuICAgICAgICAgICAgZWRhZDogZWRhZCxcclxuICAgICAgICAgICAgdGlwb19lZGFkOiB0aXBvX2VkYWQsXHJcbiAgICAgICAgICAgIGFzZWd1cmFkbzogYXNlZ3VyYWRvLFxyXG5cclxuICAgICAgICAgICAgdGlwb19zYWxhOiB0aXBvX3NhbGEsXHJcbiAgICAgICAgICAgIHNhbGE6IHNhbGEsXHJcbiAgICAgICAgICAgIGNhbWE6IGNhbWEsXHJcblxyXG5cclxuICAgICAgICAgICAgZmVjaGFfaW5nOiBmZWNoYV9pbmcsXHJcbiAgICAgICAgICAgIGhvcmFfaW5nOiBob3JhX2luZyxcclxuXHJcbiAgICAgICAgICAgIHNlcnZpY2lvOiBzZXJ2aWNpbyxcclxuICAgICAgICAgICAgbWVkaWNvOiBtZWRpY28sXHJcblxyXG4gICAgICAgICAgICBwcmVfYXJ0OiBwcmVfYXJ0LFxyXG4gICAgICAgICAgICBmcmVjX2NhcmQ6IGZyZWNfY2FyZCxcclxuICAgICAgICAgICAgZnJlY19yZXNwOiBmcmVjX3Jlc3AsXHJcbiAgICAgICAgICAgIHRlbXBlcmF0dXJhOiB0ZW1wZXJhdHVyYSxcclxuICAgICAgICAgICAgZ2VzdGFzOiBnZXN0YXMsXHJcbiAgICAgICAgICAgIHBhcmE6IHBhcmEsXHJcbiAgICAgICAgICAgIGFib3J0b3M6IGFib3J0b3MsXHJcbiAgICAgICAgICAgIGNlc2FyZWFzOiBjZXNhcmVhcyxcclxuICAgICAgICAgICAgZnVtOiBmdW0sXHJcblxyXG4gICAgICAgICAgICBtb3Rpdm9fY29uc3VsdGE6IG1vdGl2b19jb25zdWx0YSxcclxuICAgICAgICAgICAgYW50X3BhdG9sb2dpY29zOiBhbnRfcGF0b2xvZ2ljb3MsXHJcblxyXG4gICAgICAgICAgICBleGFtZW5fZmlzaWNvOiBleGFtZW5fZmlzaWNvLFxyXG4gICAgICAgICAgICBwaWVsX211Y29zYXM6IHBpZWxfbXVjb3NhcyxcclxuICAgICAgICAgICAgZ2xhc2dvdzogZ2xhc2dvdyxcclxuICAgICAgICAgICAgY2FiZXphOiBjYWJlemEsXHJcbiAgICAgICAgICAgIGN1ZWxsbzogY3VlbGxvLFxyXG4gICAgICAgICAgICB0b3JheDogdG9yYXgsXHJcbiAgICAgICAgICAgIGFiZG9tZW46IGFiZG9tZW4sXHJcbiAgICAgICAgICAgIGV4dHJlbWlkYWRlczogZXh0cmVtaWRhZGVzLFxyXG5cclxuICAgICAgICAgICAgZGlhZ25vc3RpY286IGRpYWdub3N0aWNvLFxyXG5cclxuICAgICAgICAgICAgLyp0cmF0YW1pZW50bzogdHJhdGFtaWVudG8sXHJcbiAgICAgICAgICAgIHBsYW46IHBsYW4sKi9cclxuXHJcbiAgICAgICAgICAgIGNvbmR1Y3RhOiBjb25kdWN0YSxcclxuICAgICAgICAgICAgLy9lc3Rfc29saWNpdGFkb3M6IGVzdF9zb2xpY2l0YWRvcyxcclxuXHJcbiAgICAgICAgICAgIGZlY2hhX3JlZzogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRFdm9sdWNpb25QYWNpZW50ZSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2V2b2x1Y2lvblBhY2llbnRlLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29faDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBmZWNoYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGRldGFsbGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHN1YmpldGl2bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgb2JqZXRpdm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGV2b2x1Y2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcGxhbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbWVkaWNvOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgIGNvZGlnb19oLFxyXG4gICAgICAgIGlkX3BhY2llbnRlLFxyXG5cclxuICAgICAgICBmZWNoYSxcclxuICAgICAgICBob3JhLFxyXG5cclxuICAgICAgICBkZXRhbGxlLFxyXG4gICAgICAgIHN1YmpldGl2byxcclxuICAgICAgICBvYmpldGl2byxcclxuICAgICAgICBldm9sdWNpb24sXHJcbiAgICAgICAgcGxhbixcclxuICAgICAgICBtZWRpY28sXHJcblxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBldm9sdWNpb246IHRydWUsXHJcbiAgICAgICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjogY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgICAgICBjb2RpZ29faDogY29kaWdvX2gsXHJcbiAgICAgICAgICAgIGlkX3BhY2llbnRlOiBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgICAgIGZlY2hhOiBmZWNoYSxcclxuICAgICAgICAgICAgaG9yYTogaG9yYSxcclxuXHJcbiAgICAgICAgICAgIGRldGFsbGU6IGRldGFsbGUsXHJcbiAgICAgICAgICAgIHN1YmpldGl2bzogc3ViamV0aXZvLFxyXG4gICAgICAgICAgICBvYmpldGl2bzogb2JqZXRpdm8sXHJcbiAgICAgICAgICAgIGFuYWxpc2lzOiBldm9sdWNpb24sXHJcbiAgICAgICAgICAgIHBsYW46IHBsYW4sXHJcbiAgICAgICAgICAgIG1lZGljbzogbWVkaWNvLFxyXG5cclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydEluZGljYWNpb25NZWRpY2EgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdpbmRpY2FjaW9uTWVkaWNhLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29faDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBmZWNoYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGluZGljYWNpb25lczoge3R5cGU6IFtPYmplY3RdfSxcclxuICAgICAgICAnaW5kaWNhY2lvbmVzLiQuaW5kaWNhY2lvbic6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgICdpbmRpY2FjaW9uZXMuJC52aWEnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnaW5kaWNhY2lvbmVzLiQuaG9yYXJpbyc6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBtZWRpY286IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb24sXHJcbiAgICAgICAgY29kaWdvX2gsXHJcbiAgICAgICAgaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgIGZlY2hhLFxyXG4gICAgICAgIGhvcmEsXHJcblxyXG4gICAgICAgIGluZGljYWNpb25lcyxcclxuICAgICAgICBtZWRpY28sXHJcblxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBpbmRpY2FjaW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICAgICAgY29kaWdvX2g6IGNvZGlnb19oLFxyXG4gICAgICAgICAgICBpZF9wYWNpZW50ZTogaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgICAgICBmZWNoYTogZmVjaGEsXHJcbiAgICAgICAgICAgIGhvcmE6IGhvcmEsXHJcblxyXG4gICAgICAgICAgICBpbmRpY2FjaW9uZXM6IGluZGljYWNpb25lcyxcclxuICAgICAgICAgICAgbWVkaWNvOiBtZWRpY28sXHJcblxyXG4gICAgICAgICAgICBmZWNoYV9yZWc6IG5ldyBEYXRlKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0SW5kaWNhY2lvbkVuZmVybWVyaWEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdpbmRpY2FjaW9uRW5mZXJtZXJpYS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29kaWdvX2g6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGlkX3BhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgZmVjaGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmE6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBpbmRpY2FjaW9uZXM6IHt0eXBlOiBbT2JqZWN0XX0sXHJcbiAgICAgICAgJ2luZGljYWNpb25lcy4kLm1lZGljYW1lbnRvJzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgJ2luZGljYWNpb25lcy4kLmRlc2NyaXBjaW9uJzoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIGVuZmVybWVyYToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICBjb2RpZ29faCxcclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgZmVjaGEsXHJcbiAgICAgICAgaG9yYSxcclxuXHJcbiAgICAgICAgaW5kaWNhY2lvbmVzLFxyXG4gICAgICAgIGVuZmVybWVyYSxcclxuXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gQ29uc3VsdGFzLmluc2VydCh7XHJcbiAgICAgICAgICAgIGluZGljYWNpb25fZW5mOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICAgICAgY29kaWdvX2g6IGNvZGlnb19oLFxyXG4gICAgICAgICAgICBpZF9wYWNpZW50ZTogaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgICAgICBmZWNoYTogZmVjaGEsXHJcbiAgICAgICAgICAgIGhvcmE6IGhvcmEsXHJcblxyXG4gICAgICAgICAgICBpbmRpY2FjaW9uZXM6IGluZGljYWNpb25lcyxcclxuICAgICAgICAgICAgZW5mZXJtZXJhOiBlbmZlcm1lcmEsXHJcblxyXG4gICAgICAgICAgICBmZWNoYV9yZWc6IG5ldyBEYXRlKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRFcGljcmlzaXNNZWRpY2EgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdlcGljcmlzaXNNZWRpY2EuaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb19oOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2luZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9pbmc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVkYWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHJlc3VtZW5fZW5mX2FjdHVhbDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXhwbG9yYWNpb25fZmlzaWNhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwcnVlYmFzX2xhYjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfcXVpcnVyZ2ljYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9xdWlydXJnaWNhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWFnbm9zdGljb19wcmVxdWlydXJnaWNvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBldm9sdWNpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFudGliaW90ZXJhcGlhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBpbmRpY2FjaW9uZXNfYWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdGlwb19hbHRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBlc3RhZG9fY2xpbmljb19hbHRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWFnX2RlZmluaXRpdm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljb19yZXNwb25zYWJsZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfYWx0YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9hbHRhOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgIGNvZGlnb19oLFxyXG5cclxuICAgICAgICBwYWNpZW50ZSxcclxuICAgICAgICBmZWNoYV9pbmcsXHJcbiAgICAgICAgaG9yYV9pbmcsXHJcbiAgICAgICAgZWRhZCxcclxuICAgICAgICByZXN1bWVuX2VuZl9hY3R1YWwsXHJcbiAgICAgICAgZXhwbG9yYWNpb25fZmlzaWNhLFxyXG4gICAgICAgIHBydWViYXNfbGFiLFxyXG4gICAgICAgIGZlY2hhX3F1aXJ1cmdpY2EsXHJcbiAgICAgICAgaG9yYV9xdWlydXJnaWNhLFxyXG4gICAgICAgIGRpYWdub3N0aWNvX3ByZXF1aXJ1cmdpY28sXHJcbiAgICAgICAgZXZvbHVjaW9uLFxyXG4gICAgICAgIGFudGliaW90ZXJhcGlhLFxyXG4gICAgICAgIGluZGljYWNpb25lc19hbHRhLFxyXG4gICAgICAgIHRpcG9fYWx0YSxcclxuICAgICAgICBlc3RhZG9fY2xpbmljb19hbHRhLFxyXG4gICAgICAgIGRpYWdfZGVmaW5pdGl2byxcclxuICAgICAgICBtZWRpY29fcmVzcG9uc2FibGUsXHJcbiAgICAgICAgZmVjaGFfYWx0YSxcclxuICAgICAgICBob3JhX2FsdGEsXHJcblxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIENvbnN1bHRhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBlcGljcmlzaXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjogY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgICAgICBjb2RpZ29faDogY29kaWdvX2gsXHJcblxyXG4gICAgICAgICAgICBwYWNpZW50ZTogcGFjaWVudGUsXHJcbiAgICAgICAgICAgIGZlY2hhX2luZzogZmVjaGFfaW5nLFxyXG4gICAgICAgICAgICBob3JhX2luZzogaG9yYV9pbmcsXHJcbiAgICAgICAgICAgIGVkYWQ6IGVkYWQsXHJcbiAgICAgICAgICAgIHJlc3VtZW5fZW5mX2FjdHVhbDogcmVzdW1lbl9lbmZfYWN0dWFsLFxyXG4gICAgICAgICAgICBleHBsb3JhY2lvbl9maXNpY2E6IGV4cGxvcmFjaW9uX2Zpc2ljYSxcclxuICAgICAgICAgICAgcHJ1ZWJhc19sYWI6IHBydWViYXNfbGFiLFxyXG4gICAgICAgICAgICBmZWNoYV9xdWlydXJnaWNhOiBmZWNoYV9xdWlydXJnaWNhLFxyXG4gICAgICAgICAgICBob3JhX3F1aXJ1cmdpY2E6IGhvcmFfcXVpcnVyZ2ljYSxcclxuICAgICAgICAgICAgZGlhZ25vc3RpY29fcHJlcXVpcnVyZ2ljbzogZGlhZ25vc3RpY29fcHJlcXVpcnVyZ2ljbyxcclxuICAgICAgICAgICAgZXZvbHVjaW9uOiBldm9sdWNpb24sXHJcbiAgICAgICAgICAgIGFudGliaW90ZXJhcGlhOiBhbnRpYmlvdGVyYXBpYSxcclxuICAgICAgICAgICAgaW5kaWNhY2lvbmVzX2FsdGE6IGluZGljYWNpb25lc19hbHRhLFxyXG4gICAgICAgICAgICB0aXBvX2FsdGE6IHRpcG9fYWx0YSxcclxuICAgICAgICAgICAgZXN0YWRvX2NsaW5pY29fYWx0YTogZXN0YWRvX2NsaW5pY29fYWx0YSxcclxuICAgICAgICAgICAgZGlhZ19kZWZpbml0aXZvOiBkaWFnX2RlZmluaXRpdm8sXHJcbiAgICAgICAgICAgIG1lZGljb19yZXNwb25zYWJsZTogbWVkaWNvX3Jlc3BvbnNhYmxlLFxyXG4gICAgICAgICAgICBmZWNoYV9hbHRhOiBmZWNoYV9hbHRhLFxyXG4gICAgICAgICAgICBob3JhX2FsdGE6IGhvcmFfYWx0YSxcclxuXHJcbiAgICAgICAgICAgIGZlY2hhX3JlZzogbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRDaXJ1Z2lhTWVkaWNhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnY2lydWdpYU1lZGljYS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29kaWdvX2NpcnVnaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb19oOiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfcGF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfbWF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIHNleG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVkYWQ6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIHRpcG9fZWRhZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXNlZ3VyYWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgZmVjaGFfaW50OiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgY2lydWphbm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVzcGVjaWFsaWRhZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGlhZ25vc3RpY286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByb2NlZGltaWVudG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2NpcnVnaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmFfY2lydWdpYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdGllbXBvX2NpcnVnaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBpbmZfY2lydWdpYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcmVnX3Bvcjoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICBjb2RpZ29faCxcclxuXHJcbiAgICAgICAgaWRfcGFjaWVudGUsXHJcbiAgICAgICAgLy9wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGFwX3BhdGVybm8sXHJcbiAgICAgICAgYXBfbWF0ZXJubyxcclxuXHJcbiAgICAgICAgc2V4byxcclxuICAgICAgICBlZGFkLFxyXG4gICAgICAgIHRpcG9fZWRhZCxcclxuICAgICAgICBhc2VndXJhZG8sXHJcbiAgICAgICAgZmVjaGFfaW50LFxyXG5cclxuICAgICAgICBjaXJ1amFubyxcclxuICAgICAgICBlc3BlY2lhbGlkYWQsXHJcbiAgICAgICAgZGlhZ25vc3RpY28sXHJcbiAgICAgICAgcHJvY2VkaW1pZW50byxcclxuICAgICAgICBmZWNoYV9jaXJ1Z2lhLFxyXG4gICAgICAgIGhvcmFfY2lydWdpYSxcclxuICAgICAgICB0aWVtcG9fY2lydWdpYSxcclxuXHJcbiAgICAgICAgaW5mX2NpcnVnaWEsXHJcbiAgICAgICAgcmVnX3BvcixcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBDb25zdWx0YXMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgY2lydWdpYTogdHJ1ZSxcclxuICAgICAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiBjb2RpZ29faW50ZXJuYWNpb24sXHJcbiAgICAgICAgICAgIGNvZGlnb19oOiBjb2RpZ29faCxcclxuXHJcbiAgICAgICAgICAgIGlkX3BhY2llbnRlOiBpZF9wYWNpZW50ZSxcclxuICAgICAgICAgICAgLy9wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxyXG4gICAgICAgICAgICBhcF9wYXRlcm5vOiBhcF9wYXRlcm5vLFxyXG4gICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG5cclxuICAgICAgICAgICAgc2V4bzogc2V4byxcclxuICAgICAgICAgICAgZWRhZDogZWRhZCxcclxuICAgICAgICAgICAgdGlwb19lZGFkOiB0aXBvX2VkYWQsXHJcbiAgICAgICAgICAgIGFzZWd1cmFkbzogYXNlZ3VyYWRvLFxyXG4gICAgICAgICAgICBmZWNoYV9pbnQ6IGZlY2hhX2ludCxcclxuXHJcbiAgICAgICAgICAgIGNpcnVqYW5vOiBjaXJ1amFubyxcclxuICAgICAgICAgICAgZXNwZWNpYWxpZGFkOiBlc3BlY2lhbGlkYWQsXHJcbiAgICAgICAgICAgIGRpYWdub3N0aWNvOiBkaWFnbm9zdGljbyxcclxuICAgICAgICAgICAgcHJvY2VkaW1pZW50bzogcHJvY2VkaW1pZW50byxcclxuICAgICAgICAgICAgZmVjaGFfY2lydWdpYTogZmVjaGFfY2lydWdpYSxcclxuICAgICAgICAgICAgZGlhX2NpcnVnaWE6IGZlY2hhX2NpcnVnaWEuc3Vic3RyKDgsIDIpLFxyXG4gICAgICAgICAgICBtZXNfY2lydWdpYTogZmVjaGFfY2lydWdpYS5zdWJzdHIoNSwgMiksXHJcbiAgICAgICAgICAgIGHDsW9fY2lydWdpYTogZmVjaGFfY2lydWdpYS5zdWJzdHIoMCwgNCksXHJcblxyXG4gICAgICAgICAgICBob3JhX2NpcnVnaWE6IGhvcmFfY2lydWdpYSxcclxuICAgICAgICAgICAgdGllbXBvX2NpcnVnaWE6IHRpZW1wb19jaXJ1Z2lhLFxyXG5cclxuICAgICAgICAgICAgaW5mX2NpcnVnaWE6IGluZl9jaXJ1Z2lhLFxyXG4gICAgICAgICAgICByZWdfcG9yOiByZWdfcG9yLFxyXG5cclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vIElOVEVSTkFDSU9OIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0SW50ZXJuYWNpb24gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdpbnRlcm5hY2lvbi5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIHBhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0cmFuc2Zlcmlkb19wb3I6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgcGFjaWVudGUsXHJcbiAgICAgICAgdHJhbnNmZXJpZG9fcG9yXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gSW50ZXJuYWNpb25lcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBwYWNpZW50ZTogcGFjaWVudGUsXHJcbiAgICAgICAgICAgIHRyYW5zZmVyaWRvX3BvcjogdHJhbnNmZXJpZG9fcG9yLFxyXG4gICAgICAgICAgICBhZG1pc2lvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsdGFfbWVkaWNhOiBmYWxzZSxcclxuICAgICAgICAgICAgYWx0YV9lbmZlcm1lcmlhOiBmYWxzZSxcclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFkbWlzaW9uSW50ZXJuYWNpb24gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdhZG1pc2lvbmludGVybmFjaW9uLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfaW5nOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX2luZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgc2FsYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY2FtYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYWRtaXNpb246IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBhZG1pc2lvbl9lbmY6IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBkaWFnbm9zdGljbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7aWQsIG1lZGljbywgZmVjaGFfaW5nLCBob3JhX2luZywgc2FsYSwgY2FtYSwgYWRtaXNpb24sIGFkbWlzaW9uX2VuZiwgZGlhZ25vc3RpY299KXtcclxuICAgICAgICByZXR1cm4gSW50ZXJuYWNpb25lcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWNvOiBtZWRpY28sXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfaW5nOiBmZWNoYV9pbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhOiBmZWNoYV9pbmcuc3Vic3RyKDgsIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lczogZmVjaGFfaW5nLnN1YnN0cig1LCAyKSxcclxuICAgICAgICAgICAgICAgICAgICBhw7FvOiBmZWNoYV9pbmcuc3Vic3RyKDAsIDQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcmFfaW5nOiBob3JhX2luZyxcclxuICAgICAgICAgICAgICAgICAgICBzYWxhOiBzYWxhLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWE6IGNhbWEsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRtaXNpb246IGFkbWlzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkbWlzaW9uX2VuZjogYWRtaXNpb25fZW5mLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpYWdub3N0aWNvOiBkaWFnbm9zdGljbyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQWx0YU1lZGljYUludGVybmFjaW9uID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnYWx0YW1lZGljYWludGVybmFjaW9uLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFsdGFfbWVkaWNhOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgbWVkaWNvX2FsdGE6e3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYWx0YV9tZWRpY2FfZmVjaGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFsdGFfbWVkaWNhX2hvcmE6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7aWQsIGFsdGFfbWVkaWNhLCBhbHRhX21lZGljYV9mZWNoYSwgYWx0YV9tZWRpY2FfaG9yYSwgbWVkaWNvX2FsdGF9KXtcclxuICAgICAgICByZXR1cm4gSW50ZXJuYWNpb25lcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0YV9tZWRpY2E6IGFsdGFfbWVkaWNhLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdGFfbWVkaWNhX2ZlY2hhOiBhbHRhX21lZGljYV9mZWNoYSxcclxuICAgICAgICAgICAgICAgICAgICBkaWFfYWx0YTogYWx0YV9tZWRpY2FfZmVjaGEuc3Vic3RyKDAsIDIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc19hbHRhOiBhbHRhX21lZGljYV9mZWNoYS5zdWJzdHIoMywgMiksXHJcbiAgICAgICAgICAgICAgICAgICAgYcOxb19hbHRhOiBhbHRhX21lZGljYV9mZWNoYS5zdWJzdHIoNiwgNCksXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0YV9tZWRpY2FfaG9yYTogYWx0YV9tZWRpY2FfaG9yYSxcclxuICAgICAgICAgICAgICAgICAgICBtZWRpY29fYWx0YTogbWVkaWNvX2FsdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfYWx0YV9yZWc6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFsdGFFbmZlcm1lcmlhSW50ZXJuYWNpb24gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdhbHRhZW5mZXJtZXJpYWludGVybmFjaW9uLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFsdGFfZW5mZXJtZXJpYToge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBhbHRhX2VuZmVybWVyaWF9KXtcclxuICAgICAgICByZXR1cm4gSW50ZXJuYWNpb25lcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0YV9lbmZlcm1lcmlhOiBhbHRhX2VuZmVybWVyaWEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnYWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGFnb0VuZmVybWVyaWFJbnRlcm5hY2lvbiA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ3BhZ29lbmZlcm1lcmlhaW50ZXJuYWNpb24udXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29icmFkb19wb3I6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBjb2JyYWRvX3Bvcn0pe1xyXG4gICAgICAgIHJldHVybiBJbnRlcm5hY2lvbmVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6aWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBwYWdhZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29icmFkb19wb3I6IGNvYnJhZG9fcG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGFkbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlcG9ydGFkb0ludGVybmFjaW9uID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncmVwb3J0YWRvaW50ZXJuYWNpb24udXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2JyYWRvX3Bvcjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29kaWdvX3JlcG9ydGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2NvYnJhZG9fcG9yLCBjb2RpZ29fcmVwb3J0ZX0pe1xyXG4gICAgICAgIHJldHVybiBJbnRlcm5hY2lvbmVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2JyYWRvX3BvcjogY29icmFkb19wb3IsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRhZG86IGZhbHNlLFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGFkbzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2RpZ29fcmVwb3J0ZTogY29kaWdvX3JlcG9ydGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgbXVsdGk6dHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8gUVVJUk9GQU5PIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0UXVpcm9mYW5vID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncXVpcm9mYW5vLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29faDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfcGF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfbWF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgICAgIHNleG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVkYWQ6IHt0eXBlOiBOdW1iZXJ9LFxyXG4gICAgICAgIHRpcG9fZWRhZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXNlZ3VyYWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgZmVjaGFfaW50OiB7dHlwZTogU3RyaW5nfSxcclxuXHJcbiAgICAgICAgY2lydWphbm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVzcGVjaWFsaWRhZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGlhZ25vc3RpY286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByb2NlZGltaWVudG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2NpcnVnaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhvcmFfY2lydWdpYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdGllbXBvX2NpcnVnaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG90cm9zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICByZWdfcG9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtcclxuICAgICAgICBjb2RpZ29faW50ZXJuYWNpb24sXHJcbiAgICAgICAgY29kaWdvX2gsXHJcbiAgICAgICAgaWRfcGFjaWVudGUsXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGFwX3BhdGVybm8sXHJcbiAgICAgICAgYXBfbWF0ZXJubyxcclxuICAgICAgICBzZXhvLFxyXG4gICAgICAgIGVkYWQsXHJcbiAgICAgICAgdGlwb19lZGFkLFxyXG4gICAgICAgIGFzZWd1cmFkbyxcclxuICAgICAgICBmZWNoYV9pbnQsXHJcblxyXG4gICAgICAgIGNpcnVqYW5vLFxyXG4gICAgICAgIGVzcGVjaWFsaWRhZCxcclxuICAgICAgICBkaWFnbm9zdGljbyxcclxuICAgICAgICBwcm9jZWRpbWllbnRvLFxyXG4gICAgICAgIGZlY2hhX2NpcnVnaWEsXHJcbiAgICAgICAgaG9yYV9jaXJ1Z2lhLFxyXG4gICAgICAgIHRpZW1wb19jaXJ1Z2lhLFxyXG4gICAgICAgIG90cm9zLFxyXG4gICAgICAgIHJlZ19wb3JcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBRdWlyb2Zhbm8uaW5zZXJ0KHtcclxuICAgICAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiBjb2RpZ29faW50ZXJuYWNpb24sXHJcbiAgICAgICAgICAgIGNvZGlnb19oOiBjb2RpZ29faCxcclxuICAgICAgICAgICAgaWRfcGFjaWVudGU6IGlkX3BhY2llbnRlLFxyXG4gICAgICAgICAgICBub21icmU6IG5vbWJyZSxcclxuICAgICAgICAgICAgYXBfcGF0ZXJubzogYXBfcGF0ZXJubyxcclxuICAgICAgICAgICAgYXBfbWF0ZXJubzogYXBfbWF0ZXJubyxcclxuICAgICAgICAgICAgc2V4bzogc2V4byxcclxuICAgICAgICAgICAgZWRhZDogZWRhZCxcclxuICAgICAgICAgICAgdGlwb19lZGFkOiB0aXBvX2VkYWQsXHJcbiAgICAgICAgICAgIGFzZWd1cmFkbzogYXNlZ3VyYWRvLFxyXG4gICAgICAgICAgICBmZWNoYV9pbnQ6IGZlY2hhX2ludCxcclxuXHJcbiAgICAgICAgICAgIGNpcnVqYW5vOiBjaXJ1amFubyxcclxuICAgICAgICAgICAgZXNwZWNpYWxpZGFkOiBlc3BlY2lhbGlkYWQsXHJcbiAgICAgICAgICAgIGRpYWdub3N0aWNvOiBkaWFnbm9zdGljbyxcclxuICAgICAgICAgICAgcHJvY2VkaW1pZW50bzogcHJvY2VkaW1pZW50byxcclxuICAgICAgICAgICAgZmVjaGFfY2lydWdpYTogZmVjaGFfY2lydWdpYSxcclxuICAgICAgICAgICAgaG9yYV9jaXJ1Z2lhOiBob3JhX2NpcnVnaWEsXHJcbiAgICAgICAgICAgIHRpZW1wb19jaXJ1Z2lhOiB0aWVtcG9fY2lydWdpYSxcclxuICAgICAgICAgICAgb3Ryb3M6IG90cm9zLFxyXG4gICAgICAgICAgICBmaW5hbGl6YWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVnX3BvcjogcmVnX3BvcixcclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVkaXRRdWlyb2Zhbm8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdlZGl0cXVpcm9mYW5vLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuICAgICAgICBjaXJ1amFubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXNwZWNpYWxpZGFkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaWFnbm9zdGljbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJvY2VkaW1pZW50bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfY2lydWdpYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaG9yYV9jaXJ1Z2lhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aWVtcG9fY2lydWdpYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgb3Ryb3M6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHJlZ19wb3I6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGNpcnVqYW5vLFxyXG4gICAgICAgIGVzcGVjaWFsaWRhZCxcclxuICAgICAgICBkaWFnbm9zdGljbyxcclxuICAgICAgICBwcm9jZWRpbWllbnRvLFxyXG4gICAgICAgIGZlY2hhX2NpcnVnaWEsXHJcbiAgICAgICAgaG9yYV9jaXJ1Z2lhLFxyXG4gICAgICAgIHRpZW1wb19jaXJ1Z2lhLFxyXG4gICAgICAgIG90cm9zLFxyXG4gICAgICAgIHJlZ19wb3JcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBRdWlyb2Zhbm8udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDppZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcnVqYW5vOiBjaXJ1amFubyxcclxuICAgICAgICAgICAgICAgICAgICBlc3BlY2lhbGlkYWQ6IGVzcGVjaWFsaWRhZCxcclxuICAgICAgICAgICAgICAgICAgICBkaWFnbm9zdGljbzogZGlhZ25vc3RpY28sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2VkaW1pZW50bzogcHJvY2VkaW1pZW50byxcclxuICAgICAgICAgICAgICAgICAgICBmZWNoYV9jaXJ1Z2lhOiBmZWNoYV9jaXJ1Z2lhLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcmFfY2lydWdpYTogaG9yYV9jaXJ1Z2lhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpZW1wb19jaXJ1Z2lhOiB0aWVtcG9fY2lydWdpYSxcclxuICAgICAgICAgICAgICAgICAgICBvdHJvczogb3Ryb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxpemFkbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnX3BvcjogcmVnX3BvcixcclxuICAgICAgICAgICAgICAgICAgICBmZWNoYV9yZWc6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUXVpcm9mYW5vID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncXVpcm9mYW5vLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGluZm9ybWU6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBmaW5hbGl6YWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7aWQsIGluZm9ybWUsIGZpbmFsaXphZG99KXtcclxuICAgICAgICByZXR1cm4gUXVpcm9mYW5vLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6aWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBpbmZvcm1lOiBpbmZvcm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsaXphZG86IGZpbmFsaXphZG8sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVF1aXJvZmFubyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ3F1aXJvZmFuby5yZW1vdmUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZH0pe1xyXG4gICAgICAgIHJldHVybiBRdWlyb2Zhbm8ucmVtb3ZlKHtfaWQ6IGlkfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydFNpZ25vc1ZpdGFsZXMgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdzaWdub3N2aXRhbGVzLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29faDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuXHJcbiAgICAgICAgZmVjaGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHR1cm5vOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIHNpbl9jb250cm9sOiB7dHlwZTogQm9vbGVhbn0sXHJcblxyXG4gICAgICAgIG5vbWJyZV9jb250cm9sOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgZGF0b19jb250cm9sOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIC8qcHJlc2lvbl9hcnQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZfcmVzcGlyYXRvcmlhczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbF9wYXJlbnRlcmFsZXM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGxfaW5nZXJpZG9zOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBvcmluYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdm9taXRvczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGVwb3NpY2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgb3Ryb3M6IHt0eXBlOiBTdHJpbmd9LCovXHJcblxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICBjb2RpZ29faCxcclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgZmVjaGEsXHJcbiAgICAgICAgdHVybm8sXHJcblxyXG4gICAgICAgIHNpbl9jb250cm9sLFxyXG5cclxuICAgICAgICBub21icmVfY29udHJvbCxcclxuICAgICAgICBkYXRvX2NvbnRyb2xcclxuICAgICAgICAvKlxyXG4gICAgICAgIHByZXNpb25fYXJ0LFxyXG4gICAgICAgIGZfcmVzcGlyYXRvcmlhcyxcclxuICAgICAgICBsX3BhcmVudGVyYWxlcyxcclxuICAgICAgICBsX2luZ2VyaWRvcyxcclxuICAgICAgICBvcmluYSxcclxuICAgICAgICB2b21pdG9zLFxyXG4gICAgICAgIGRlcG9zaWNpb24sXHJcbiAgICAgICAgb3Ryb3MsKi9cclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBTaWdub3NWaXRhbGVzLmluc2VydCh7XHJcbiAgICAgICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbjogY29kaWdvX2ludGVybmFjaW9uLFxyXG4gICAgICAgICAgICBjb2RpZ29faDogY29kaWdvX2gsXHJcbiAgICAgICAgICAgIGlkX3BhY2llbnRlOiBpZF9wYWNpZW50ZSxcclxuICAgICAgICAgICAgZmVjaGE6IGZlY2hhLFxyXG4gICAgICAgICAgICB0dXJubzogdHVybm8sXHJcblxyXG4gICAgICAgICAgICBzaW5fY29udHJvbDogc2luX2NvbnRyb2wsXHJcblxyXG4gICAgICAgICAgICBub21icmVfY29udHJvbDogbm9tYnJlX2NvbnRyb2wsXHJcbiAgICAgICAgICAgIGRhdG9fY29udHJvbDogZGF0b19jb250cm9sLFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBwcmVzaW9uX2FydDogcHJlc2lvbl9hcnQsXHJcbiAgICAgICAgICAgIGZfcmVzcGlyYXRvcmlhczogZl9yZXNwaXJhdG9yaWFzLFxyXG4gICAgICAgICAgICBsX3BhcmVudGVyYWxlczogbF9wYXJlbnRlcmFsZXMsXHJcbiAgICAgICAgICAgIGxfaW5nZXJpZG9zOiBsX2luZ2VyaWRvcyxcclxuICAgICAgICAgICAgb3JpbmE6IG9yaW5hLFxyXG4gICAgICAgICAgICB2b21pdG9zOiB2b21pdG9zLFxyXG4gICAgICAgICAgICBkZXBvc2ljaW9uOiBkZXBvc2ljaW9uLFxyXG4gICAgICAgICAgICBvdHJvczogb3Ryb3MsKi9cclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIFNBTEEgREUgUEFSVE9TXHJcblxyXG5leHBvcnQgY29uc3QgaW5zZXJ0UGFydG9zID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncGFydG9zLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2ludGVybmFjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29faDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaWRfcGFjaWVudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG5cclxuXHJcbiAgICAgICAgZmVjaGFfaW5nOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX2luZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfc2FsaWRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX3NhbGlkYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfbmFjOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBob3JhX25hYzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgc2V4bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcGVzbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdGFsbGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtZWRpY286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVuZmVybWVyYToge3R5cGU6IFN0cmluZ30sXHJcblxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICBjb2RpZ29faCxcclxuICAgICAgICBpZF9wYWNpZW50ZSxcclxuXHJcbiAgICAgICAgZmVjaGFfaW5nLFxyXG4gICAgICAgIGhvcmFfaW5nLFxyXG4gICAgICAgIGZlY2hhX3NhbGlkYSxcclxuICAgICAgICBob3JhX3NhbGlkYSxcclxuICAgICAgICBmZWNoYV9uYWMsXHJcbiAgICAgICAgaG9yYV9uYWMsXHJcbiAgICAgICAgc2V4byxcclxuICAgICAgICBwZXNvLFxyXG4gICAgICAgIHRhbGxhLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICAgIG1lZGljbyxcclxuICAgICAgICBlbmZlcm1lcmEsXHJcbiAgICB9KXtcclxuICAgICAgICByZXR1cm4gU2FsYVBhcnRvcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBjb2RpZ29faW50ZXJuYWNpb246IGNvZGlnb19pbnRlcm5hY2lvbixcclxuICAgICAgICAgICAgY29kaWdvX2g6IGNvZGlnb19oLFxyXG4gICAgICAgICAgICBpZF9wYWNpZW50ZTogaWRfcGFjaWVudGUsXHJcblxyXG4gICAgICAgICAgICBmZWNoYV9pbmc6IGZlY2hhX2luZyxcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaG9yYV9pbmc6IGhvcmFfaW5nLFxyXG4gICAgICAgICAgICBmZWNoYV9zYWxpZGE6IGZlY2hhX3NhbGlkYSxcclxuICAgICAgICAgICAgaG9yYV9zYWxpZGE6IGhvcmFfc2FsaWRhLFxyXG4gICAgICAgICAgICBmZWNoYV9uYWM6IGZlY2hhX25hYyxcclxuXHJcbiAgICAgICAgICAgIGRpYV9uYWM6IGZlY2hhX25hYy5zdWJzdHIoOCwgMiksXHJcbiAgICAgICAgICAgIG1lc19uYWM6IGZlY2hhX25hYy5zdWJzdHIoNSwgMiksXHJcbiAgICAgICAgICAgIGHDsW9fbmFjOiBmZWNoYV9uYWMuc3Vic3RyKDAsIDQpLFxyXG5cclxuICAgICAgICAgICAgaG9yYV9uYWM6IGhvcmFfbmFjLFxyXG4gICAgICAgICAgICBzZXhvOiBzZXhvLFxyXG4gICAgICAgICAgICBwZXNvOiBwZXNvLFxyXG4gICAgICAgICAgICB0YWxsYTogdGFsbGEsXHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uOiBkZXNjcmlwY2lvbixcclxuICAgICAgICAgICAgbWVkaWNvOiBtZWRpY28sXHJcbiAgICAgICAgICAgIGVuZmVybWVyYTogZW5mZXJtZXJhLFxyXG5cclxuICAgICAgICAgICAgZmVjaGFfcmVnOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWV0aG9kIH0gZnJvbSAnbWV0ZW9yL21kZzp2YWxpZGF0ZWQtbWV0aG9kJztcclxuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcclxuaW1wb3J0IHsgTWF5b3JlcyB9IGZyb20gJy4vY29sbGVjdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydE1heW9yID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnbWF5b3IuaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29fY3VlbnRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL25vbWJyZV9jdWVudGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRpcG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGdlc3Rpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgLy9ub21icmVfY3VlbnRhLFxyXG4gICAgICAgIHRpcG8sXHJcbiAgICAgICAgZ2VzdGlvblxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIE1heW9yZXMuaW5zZXJ0KHtcclxuICAgICAgICAgICAgY29kaWdvX2N1ZW50YTogY29kaWdvX2N1ZW50YSxcclxuICAgICAgICAgICAgLy9ub21icmVfY3VlbnRhOiBub21icmVfY3VlbnRhLFxyXG4gICAgICAgICAgICB0aXBvOiB0aXBvLFxyXG4gICAgICAgICAgICBnZXN0aW9uOiBnZXN0aW9uLFxyXG4gICAgICAgICAgICB0b3RhbF9kZWJlOiAnMC4wMCcsXHJcbiAgICAgICAgICAgIHRvdGFsX2hhYmVyOiAnMC4wMCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTWF5b3IgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdtYXlvci51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGdlc3Rpb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBucm9fY29tcHJvYmFudGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGRldGFsbGU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5yb19jaGVxdWU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGRlYmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGhhYmVyOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL3RvdGFsX2RlYmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vdG90YWxfaGFiZXI6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX2N1ZW50YSxcclxuICAgICAgICAvL25vbWJyZV9jdWVudGEsXHJcbiAgICAgICAgZ2VzdGlvbixcclxuICAgICAgICBmZWNoYSxcclxuICAgICAgICBucm9fY29tcHJvYmFudGUsXHJcbiAgICAgICAgZGV0YWxsZSxcclxuICAgICAgICBucm9fY2hlcXVlLFxyXG4gICAgICAgIGRlYmUsXHJcbiAgICAgICAgaGFiZXIsXHJcbiAgICAgICAgLy90b3RhbF9kZWJlLFxyXG4gICAgICAgIC8vdG90YWxfaGFiZXJcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBNYXlvcmVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGNvZGlnb19jdWVudGE6IGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgICAgIGdlc3Rpb246IGdlc3Rpb24sXHJcbiAgICAgICAgICAgIC8vdG90YWxfZGViZTogdG90YWxfZGViZSxcclxuICAgICAgICAgICAgLy90b3RhbF9oYWJlcjogdG90YWxfaGFiZXJcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHB1c2g6e1xyXG4gICAgICAgICAgICAgICAgbW92aW1pZW50b3M6e1xyXG4gICAgICAgICAgICAgICAgICAgIGZlY2hhOiBmZWNoYSxcclxuICAgICAgICAgICAgICAgICAgICBucm9fY29tcHJvYmFudGU6IG5yb19jb21wcm9iYW50ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhbGxlOiBkZXRhbGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5yb19jaGVxdWU6IG5yb19jaGVxdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGViZTogZGViZSxcclxuICAgICAgICAgICAgICAgICAgICBoYWJlcjogaGFiZXIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVG90YWxlc01heW9yID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndG90YWxlc21heW9yLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2N1ZW50YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZ2VzdGlvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGViZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgaGFiZXI6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vdG90YWxfZGViZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgLy90b3RhbF9oYWJlcjoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgZ2VzdGlvbixcclxuICAgICAgICBkZWJlLFxyXG4gICAgICAgIGhhYmVyLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHJldHVybiBNYXlvcmVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGNvZGlnb19jdWVudGE6IGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgICAgIGdlc3Rpb246IGdlc3Rpb24sXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgdG90YWxfZGViZTogZGViZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsX2hhYmVyOiBoYWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4vKmV4cG9ydCBjb25zdCB1cGRhdGVNYXlvciA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ21heW9yLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY29kaWdvX2N1ZW50YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlX2N1ZW50YToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZ2VzdGlvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbW92aW1pZW50b3M6IHt0eXBlOiBbT2JqZWN0XX0sXHJcbiAgICAgICAgJ21vdmltaWVudG9zLiQuZmVjaGEnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnbW92aW1pZW50b3MuJC5ucm9fY29tcHJvYmFudGUnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnbW92aW1pZW50b3MuJC5kZXRhbGxlJzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgJ21vdmltaWVudG9zLiQubnJvX2NoZXF1ZSc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgICdtb3ZpbWllbnRvcy4kLmRlYmUnOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnbW92aW1pZW50b3MuJC5oYWJlcic6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRvdGFsX2RlYmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRvdGFsX2hhYmVyOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgbm9tYnJlX2N1ZW50YSxcclxuICAgICAgICBnZXN0aW9uLFxyXG4gICAgICAgIG1vdmltaWVudG9zLFxyXG4gICAgICAgIHRvdGFsX2RlYmUsXHJcbiAgICAgICAgdG90YWxfaGFiZXJcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBNYXlvcmVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGNvZGlnb19jdWVudGE6IGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgICAgIGdlc3Rpb246IGdlc3Rpb24sXHJcbiAgICAgICAgICAgIG1vdmltaWVudG9zOiBtb3ZpbWllbnRvcyxcclxuICAgICAgICAgICAgdG90YWxfZGViZTogdG90YWxfZGViZSxcclxuICAgICAgICAgICAgdG90YWxfaGFiZXI6IHRvdGFsX2hhYmVyXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRwdXNoOntcclxuICAgICAgICAgICAgICAgIG1vdmltaWVudG9zOntcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpbWllbnRvOiBtb3ZpbWllbnRvc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pOyovXHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcbmltcG9ydCB7IE1lZGljYW1lbnRvcywgQ29tcHJhcywgVmVudGFzLCBSZXBvcnRlRmFybWFjaWEsIENsaWVudGVzLCBMaW5lYXMgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IGluc2VydE1lZGljYW1lbnRvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ21lZGljYW1lbnRvLmluc2VydCcsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBsaW5lYToge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGl0ZW06IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBub21icmVfY29tZXJjaWFsOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbm9tYnJlX2dlbmVyaWNvOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdW5pZGFkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgZmVjaGFfY2FkdWNpZGFkOiB7dHlwZTogRGF0ZX0sXG4gICAgICAgIHB1Yzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIHB1djoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGNhbnRpZGFkOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgICAgZGV2b2x1Y2lvbjoge3R5cGU6IEJvb2xlYW59XG4gICAgfSkudmFsaWRhdG9yICgpLFxuICAgIHJ1biAoe1xuICAgICAgICBsaW5lYSxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgbm9tYnJlX2NvbWVyY2lhbCxcbiAgICAgICAgbm9tYnJlX2dlbmVyaWNvLFxuICAgICAgICB1bmlkYWQsXG4gICAgICAgIGZlY2hhX2NhZHVjaWRhZCxcbiAgICAgICAgcHVjLFxuICAgICAgICBwdXYsXG4gICAgICAgIGNhbnRpZGFkLFxuICAgICAgICBkZXZvbHVjaW9uXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gTWVkaWNhbWVudG9zLmluc2VydCh7XG4gICAgICAgICAgICBhY3Rpdm86IHRydWUsXG4gICAgICAgICAgICBsaW5lYTogbGluZWEsXG4gICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgbm9tYnJlX2NvbWVyY2lhbDogbm9tYnJlX2NvbWVyY2lhbCxcbiAgICAgICAgICAgIG5vbWJyZV9nZW5lcmljbzogbm9tYnJlX2dlbmVyaWNvLFxuICAgICAgICAgICAgdW5pZGFkOiB1bmlkYWQsXG4gICAgICAgICAgICBmZWNoYV9jYWR1Y2lkYWQ6IGZlY2hhX2NhZHVjaWRhZCxcbiAgICAgICAgICAgIHB1YzogcHVjLFxuICAgICAgICAgICAgcHV2OiBwdXYsXG4gICAgICAgICAgICBjYW50aWRhZDogY2FudGlkYWQsXG4gICAgICAgICAgICBkZXZvbHVjaW9uOiBkZXZvbHVjaW9uXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTWVkaWNhbUNhbnQgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnbWVkaWNhbWNhbnQudXBkYXRlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgY2FudGlkYWQ6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgICBmZWNoYV9jYWR1Y2lkYWQ6IHt0eXBlOiBEYXRlfSxcbiAgICAgICAgcHVjOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgcHV2OiB7dHlwZTogU3RyaW5nfSxcbiAgICB9KS52YWxpZGF0b3IgKCksXG4gICAgcnVuICh7IGlkLCBjYW50aWRhZCwgZmVjaGFfY2FkdWNpZGFkLCBwdWMsIHB1diB9KSB7XG4gICAgICAgIHJldHVybiBNZWRpY2FtZW50b3MudXBkYXRlKHtcbiAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgfSx7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgY2FudGlkYWQ6IE1lZGljYW1lbnRvcy5maW5kKHtfaWQ6IGlkfSkuZmV0Y2goKVswXS5jYW50aWRhZCArIGNhbnRpZGFkLFxuICAgICAgICAgICAgICAgIGZlY2hhX2NhZHVjaWRhZDogZmVjaGFfY2FkdWNpZGFkLFxuICAgICAgICAgICAgICAgIHB1YzogcHVjLFxuICAgICAgICAgICAgICAgIHB1djogcHV2LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0b2NrTWVkaWNhbSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xuICAgIG5hbWU6ICdzdG9ja21lZGljYW0udXBkYXRlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgY2FudGlkYWQ6IHt0eXBlOiBOdW1iZXJ9LFxuICAgIH0pLnZhbGlkYXRvciAoKSxcbiAgICBydW4gKHsgaWQsIGNhbnRpZGFkIH0pIHtcbiAgICAgICAgcmV0dXJuIE1lZGljYW1lbnRvcy51cGRhdGUoe1xuICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICB9LHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgICBjYW50aWRhZDogTWVkaWNhbWVudG9zLmZpbmQoe19pZDogaWR9KS5mZXRjaCgpWzBdLmNhbnRpZGFkIC0gY2FudGlkYWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTWVkaWNhbWVudG8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnbWVkaWNhbWVudG8udXBkYXRlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbGluZWE6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBpdGVtOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbm9tYnJlX2NvbWVyY2lhbDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG5vbWJyZV9nZW5lcmljbzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIHVuaWRhZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGZlY2hhX2NhZHVjaWRhZDoge3R5cGU6IERhdGV9LFxuICAgICAgICBwdWM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBwdXY6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBjYW50aWRhZDoge3R5cGU6IE51bWJlcn0sXG4gICAgICAgIGRldm9sdWNpb246IHt0eXBlOiBCb29sZWFufVxuICAgIH0pLnZhbGlkYXRvciAoKSxcbiAgICBydW4gKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGxpbmVhLFxuICAgICAgICBpdGVtLFxuICAgICAgICBub21icmVfY29tZXJjaWFsLFxuICAgICAgICBub21icmVfZ2VuZXJpY28sXG4gICAgICAgIHVuaWRhZCxcbiAgICAgICAgZmVjaGFfY2FkdWNpZGFkLFxuICAgICAgICBwdWMsXG4gICAgICAgIHB1dixcbiAgICAgICAgY2FudGlkYWQsXG4gICAgICAgIGRldm9sdWNpb25cbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBNZWRpY2FtZW50b3MudXBkYXRlKHtcbiAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgfSx7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgbGluZWE6IGxpbmVhLFxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgbm9tYnJlX2NvbWVyY2lhbDogbm9tYnJlX2NvbWVyY2lhbCxcbiAgICAgICAgICAgICAgICBub21icmVfZ2VuZXJpY286IG5vbWJyZV9nZW5lcmljbyxcbiAgICAgICAgICAgICAgICB1bmlkYWQ6IHVuaWRhZCxcbiAgICAgICAgICAgICAgICBmZWNoYV9jYWR1Y2lkYWQ6IGZlY2hhX2NhZHVjaWRhZCxcbiAgICAgICAgICAgICAgICBwdWM6IHB1YyxcbiAgICAgICAgICAgICAgICBwdXY6IHB1dixcbiAgICAgICAgICAgICAgICBjYW50aWRhZDogY2FudGlkYWQsXG4gICAgICAgICAgICAgICAgZGV2b2x1Y2lvbjogZGV2b2x1Y2lvblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lZGljYW1lbnRvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ21lZGljYW1lbnRvLnJlbW92ZScsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGFjdGl2bzoge3R5cGU6IEJvb2xlYW59XG4gICAgfSkudmFsaWRhdG9yICgpLFxuICAgIHJ1biAoe2lkLCBhY3Rpdm99KSB7XG4gICAgICAgIHJldHVybiBNZWRpY2FtZW50b3MudXBkYXRlKHtcbiAgICAgICAgICAgIF9pZDppZFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgYWN0aXZvOiBhY3Rpdm8sXG4gICAgICAgICAgICAgICAgY2FudGlkYWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxuLy8gQ09NUFJBIERFIE1FRElDQU1FTlRPU1xuXG5leHBvcnQgY29uc3QgaW5zZXJ0Q29tcHJhTWVkaWNhbWVudG8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnY29tcHJhX21lZGljYW1lbnRvLmluc2VydCcsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBjb2RpZ29fY29tcHJhOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdG90YWw6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICByZWdfcG9yOiB7dHlwZTogU3RyaW5nfSxcblxuICAgICAgICBkZXRhbGxlX2NvbXByYToge3R5cGU6IFtPYmplY3RdfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQuaWRfbWVkaWNhbWVudG8nOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQubm9tYnJlX2NvbWVyY2lhbCc6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICAnZGV0YWxsZV9jb21wcmEuJC51bmlkYWQnOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQubGluZWEnOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQuaXRlbSc6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICAnZGV0YWxsZV9jb21wcmEuJC5wdWMnOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQucHV2Jzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgICdkZXRhbGxlX2NvbXByYS4kLmNhbnRpZGFkJzoge3R5cGU6IE51bWJlcn0sXG4gICAgICAgICdkZXRhbGxlX2NvbXByYS4kLmZlY2hhX2NhZHVjaWRhZCc6IHt0eXBlOiBEYXRlfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQubnJvX2ZhY3R1cmEnOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfY29tcHJhLiQudG90YWwnOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIH0pLnZhbGlkYXRvciAoKSxcbiAgICBydW4gKHtcbiAgICAgICAgY29kaWdvX2NvbXByYSxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIHJlZ19wb3IsXG5cbiAgICAgICAgZGV0YWxsZV9jb21wcmEsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gQ29tcHJhcy5pbnNlcnQoe1xuICAgICAgICAgICAgY29kaWdvX2NvbXByYTogY29kaWdvX2NvbXByYSxcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgICAgICAgIHJlZ19wb3I6IHJlZ19wb3IsXG4gICAgICAgICAgICBmZWNoYV9yZWdpc3RybzogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGRpYTogKG5ldyBEYXRlKCkpLmdldERhdGUoKSsnJyxcbiAgICAgICAgICAgIG1lczogKChuZXcgRGF0ZSgpKS5nZXRNb250aCgpKzEpKycnLFxuICAgICAgICAgICAgYcOxbzogKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkrJycsXG4gICAgICAgICAgICBkZXRhbGxlX2NvbXByYTogZGV0YWxsZV9jb21wcmFcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vVkVOVEEgREUgTUVESUNBTUVOVE9TXG5cbmV4cG9ydCBjb25zdCBpbnNlcnRWZW50YU1lZGljYW1lbnRvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3ZlbnRhX21lZGljYW1lbnRvLmluc2VydCcsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBjb2RpZ29fdmVudGE6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICB0b3RhbDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIHJlZ19wb3I6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBpZF91czoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGRpYV9yZWc6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBtZXNfcmVnOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgYcOxb19yZWc6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBob3JhX3JlZzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGJhamE6IHt0eXBlOiBCb29sZWFufSxcblxuICAgICAgICBkZXRhbGxlX3ZlbnRhOiB7dHlwZTogW09iamVjdF19LFxuICAgICAgICAvLydkZXRhbGxlX3ZlbnRhLiQuY29kX3ZlbnRhJzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgICdkZXRhbGxlX3ZlbnRhLiQuaWRfbWVkaWNhbWVudG8nOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfdmVudGEuJC5pdGVtJzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgICdkZXRhbGxlX3ZlbnRhLiQubm9tYnJlX2NvbWVyY2lhbCc6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICAnZGV0YWxsZV92ZW50YS4kLnVuaWRhZCc6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICAnZGV0YWxsZV92ZW50YS4kLnB1dic6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICAnZGV0YWxsZV92ZW50YS4kLmNhbnRpZGFkJzoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAgICAgJ2RldGFsbGVfdmVudGEuJC5wcmVjaW9fdG90YWwnOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgJ2RldGFsbGVfdmVudGEuJC5tb3Rpdm8nOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIH0pLnZhbGlkYXRvciAoKSxcbiAgICBydW4gKHtcbiAgICAgICAgY29kaWdvX3ZlbnRhLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgcmVnX3BvcixcbiAgICAgICAgaWRfdXMsXG4gICAgICAgIGRpYV9yZWcsXG4gICAgICAgIG1lc19yZWcsXG4gICAgICAgIGHDsW9fcmVnLFxuICAgICAgICBob3JhX3JlZyxcbiAgICAgICAgYmFqYSxcblxuICAgICAgICBkZXRhbGxlX3ZlbnRhLFxuICAgIH0pIHtcbiAgICAgICAgcmV0dXJuIFZlbnRhcy5pbnNlcnQoe1xuICAgICAgICAgICAgY29kaWdvX3ZlbnRhOiBjb2RpZ29fdmVudGEsXG4gICAgICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgICAgICByZWdfcG9yOiByZWdfcG9yLFxuICAgICAgICAgICAgaWRfdXM6IGlkX3VzLFxuICAgICAgICAgICAgZGV2dWVsdG86IGZhbHNlLFxuICAgICAgICAgICAgZmVjaGFfcmVnaXN0cm86IG5ldyBEYXRlLFxuICAgICAgICAgICAgZGlhOiBkaWFfcmVnLFxuICAgICAgICAgICAgbWVzOiBtZXNfcmVnLFxuICAgICAgICAgICAgYcOxbzogYcOxb19yZWcsXG4gICAgICAgICAgICBob3JhX3JlZzogaG9yYV9yZWcsXG5cbiAgICAgICAgICAgIHJlcG9ydGFkbzogZmFsc2UsXG4gICAgICAgICAgICBiYWphOiBiYWphLFxuXG4gICAgICAgICAgICBkZXRhbGxlX3ZlbnRhOiBkZXRhbGxlX3ZlbnRhXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgZGV2b2x1Y2lvbk1lZGljYW1GYXJtYWNpYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xuICAgIG5hbWU6ICdkZXZvbHVjaW9ubWVkaWNhbWZhcm1hY2lhLnVwZGF0ZScsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG1lZGljYW1lbnRvOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdG90YWw6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBjYW50aWRhZDoge3R5cGU6IE51bWJlcn1cbiAgICB9KS52YWxpZGF0b3IoKSxcbiAgICBydW4oe1xuICAgICAgICBpZCxcbiAgICAgICAgbWVkaWNhbWVudG8sXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBjYW50aWRhZFxuICAgIH0pe1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgVmVudGFzLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgfSx7JHB1bGw6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkZXRhbGxlX3ZlbnRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZF9tZWRpY2FtZW50bzogbWVkaWNhbWVudG9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgVmVudGFzLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgJHNldDoge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBNZWRpY2FtZW50b3MudXBkYXRlKHtcbiAgICAgICAgICAgICAgICBfaWQ6IG1lZGljYW1lbnRvXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBNZWRpY2FtZW50b3MuZmluZCh7X2lkOiBtZWRpY2FtZW50b30pLmZldGNoKClbMF0uY2FudGlkYWQgKyBjYW50aWRhZCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBkZXZvbHVjaW9uVmVudGFGYXJtYWNpYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xuICAgIG5hbWU6ICdkZXZvbHVjaW9udmVudGFmYXJtYWNpYS51cGRhdGUnLFxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgIH0pLnZhbGlkYXRvcigpLFxuICAgIHJ1bih7XG4gICAgICAgIGlkLFxuICAgIH0pe1xuICAgICAgICByZXR1cm4gVmVudGFzLnVwZGF0ZSh7XG4gICAgICAgICAgICBfaWQ6IGlkXG4gICAgICAgIH0se1xuICAgICAgICAgICAgJHNldDoge1xuICAgICAgICAgICAgICAgIGRldnVlbHRvOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ZVZlbnRhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ2NsaWVudGV2ZW50YS51cGRhdGUnLFxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBjaToge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXG4gICAgfSkudmFsaWRhdG9yICgpLFxuICAgIHJ1biAoe1xuICAgICAgICBpZCxcbiAgICAgICAgY2ksXG4gICAgICAgIG5vbWJyZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBWZW50YXMudXBkYXRlKHtcbiAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgfSx7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgY2k6IGNpLFxuICAgICAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuLy8gUkVQT1JURSBGQVJNQUNJQVxuZXhwb3J0IGNvbnN0IGluc2VydFJlcG9ydGVGYXJtYWNpYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xuICAgIG5hbWU6ICdyZXBvcnRlZmFybWFjaWEuaW5zZXJ0JyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGNvZGlnb19yZXBvcnRlOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgLy9mZWNoYV9yZXBvcnRlOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgZGlhOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbWVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgYcOxbzoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAgICAgaG9yYV9yZXBvcnRlOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgcmVwb3J0ZV9lbnZpYWRvOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICAgIHVzX2Vudjoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIHRvdGFsOiB7dHlwZTogU3RyaW5nfSxcblxuICAgICAgICAvKnJlcG9ydGVfcmVjaWJpZG86IHt0eXBlOiBCb29sZWFufSxcbiAgICAgICAgZGlhX3JlYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG1lc19yZWM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBhw7FvX3JlYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIC8vZmVjaGFfcmVjaWJpZG86IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBob3JhX3JlY2liaWRvOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdXNfcmVjOiB7dHlwZTogU3RyaW5nICwgb3B0aW9uYWw6IHRydWV9LCovXG4gICAgfSkudmFsaWRhdG9yKCksXG4gICAgcnVuKHtcbiAgICAgICAgY29kaWdvX3JlcG9ydGUsXG4gICAgICAgIC8vZmVjaGFfcmVwb3J0ZSxcbiAgICAgICAgZGlhLFxuICAgICAgICBtZXMsXG4gICAgICAgIGHDsW8sXG4gICAgICAgIGhvcmFfcmVwb3J0ZSxcbiAgICAgICAgcmVwb3J0ZV9lbnZpYWRvLFxuICAgICAgICB1c19lbnYsXG4gICAgICAgIHRvdGFsLFxuXG4gICAgICAgIC8qcmVwb3J0ZV9yZWNpYmlkbyxcbiAgICAgICAgZGlhX3JlYyxcbiAgICAgICAgbWVzX3JlYyxcbiAgICAgICAgYcOxb19yZWMsXG4gICAgICAgIC8vZmVjaGFfcmVjaWJpZG8sXG4gICAgICAgIGhvcmFfcmVjaWJpZG8sXG4gICAgICAgIHVzX3JlYywqL1xuICAgIH0pe1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgUmVwb3J0ZUZhcm1hY2lhLmluc2VydCh7XG4gICAgICAgICAgICAgICAgY29kaWdvX3JlcG9ydGU6IGNvZGlnb19yZXBvcnRlLFxuICAgICAgICAgICAgICAgIGZlY2hhX3JlcG9ydGU6IGRpYSArICcvJyArIG1lcyArICcvJyArIGHDsW8sXG4gICAgICAgICAgICAgICAgZGlhOiBkaWEsXG4gICAgICAgICAgICAgICAgbWVzOiBtZXMsXG4gICAgICAgICAgICAgICAgYcOxbzogYcOxbyxcbiAgICAgICAgICAgICAgICBob3JhX3JlcG9ydGU6IGhvcmFfcmVwb3J0ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRlX2VudmlhZG86IHJlcG9ydGVfZW52aWFkbyxcbiAgICAgICAgICAgICAgICB1c19lbnY6IHVzX2VudixcbiAgICAgICAgICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgICAgICAgICAgcmVwb3J0ZV9yZWNpYmlkbzogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBmZWNoYV9yZWdpc3RybzogbmV3IERhdGUoKSxcblxuICAgICAgICAgICAgICAgIC8qZGlhX3JlYzogZGlhX3JlYyxcbiAgICAgICAgICAgICAgICBtZXNfcmVjOiBtZXNfcmVjLFxuICAgICAgICAgICAgICAgIGHDsW9fcmVjOiBhw7FvX3JlYyxcbiAgICAgICAgICAgICAgICAvL2ZlY2hhX3JlY2liaWRvOiBmZWNoYV9yZWNpYmlkbyxcbiAgICAgICAgICAgICAgICBob3JhX3JlY2liaWRvOiBob3JhX3JlY2liaWRvLFxuICAgICAgICAgICAgICAgIHVzX3JlYzogdXNfcmVjLCovXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFZlbnRhcy51cGRhdGUoe1xuICAgICAgICAgICAgICAgIGlkX3VzOiB1c19lbnYsXG4gICAgICAgICAgICAgICAgcmVwb3J0YWRvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZXZ1ZWx0bzogZmFsc2UsXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGFkbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvX3JlcG9ydGU6IGNvZGlnb19yZXBvcnRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF07XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXBvcnRlRmFybWFjaWEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAncmVwb3J0ZWZhcm1hY2lhLnVwZGF0ZScsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIHJlcG9ydGVfcmVjaWJpZG86IHt0eXBlOiBCb29sZWFufSxcbiAgICAgICAgZGlhX3JlYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG1lc19yZWM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBhw7FvX3JlYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIC8vZmVjaGFfcmVjaWJpZG86IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBob3JhX3JlY2liaWRvOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdXNfcmVjOiB7dHlwZTogU3RyaW5nICwgb3B0aW9uYWw6IHRydWV9LFxuICAgIH0pLnZhbGlkYXRvcigpLFxuICAgIHJ1bih7XG4gICAgICAgIGlkLFxuICAgICAgICByZXBvcnRlX3JlY2liaWRvLFxuICAgICAgICBkaWFfcmVjLFxuICAgICAgICBtZXNfcmVjLFxuICAgICAgICBhw7FvX3JlYyxcbiAgICAgICAgLy9mZWNoYV9yZWNpYmlkbyxcbiAgICAgICAgaG9yYV9yZWNpYmlkbyxcbiAgICAgICAgdXNfcmVjLFxuICAgIH0pe1xuICAgICAgICByZXR1cm4gUmVwb3J0ZUZhcm1hY2lhLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgJHNldDp7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGVfcmVjaWJpZG86IHJlcG9ydGVfcmVjaWJpZG8sXG4gICAgICAgICAgICAgICAgICAgIGRpYV9yZWM6IGRpYV9yZWMsXG4gICAgICAgICAgICAgICAgICAgIG1lc19yZWM6IG1lc19yZWMsXG4gICAgICAgICAgICAgICAgICAgIGHDsW9fcmVjOiBhw7FvX3JlYyxcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfcmVjaWJpZG86IGRpYV9yZWMgKyAnLycgKyBtZXNfcmVjKyAnLycgKyBhw7FvX3JlYyxcbiAgICAgICAgICAgICAgICAgICAgaG9yYV9yZWNpYmlkbzogaG9yYV9yZWNpYmlkbyxcbiAgICAgICAgICAgICAgICAgICAgdXNfcmVjOiB1c19yZWMsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuLy8gQ0xJRU5URVMgRkFSTUFDSUFcbmV4cG9ydCBjb25zdCBpbnNlcnRDbGllbnRlID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ2NsaWVudGUuaW5zZXJ0JyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbm9tYnJlOiB7dHlwZTogU3RyaW5nfSxcbiAgICB9KS52YWxpZGF0b3IgKCksXG4gICAgcnVuICh7XG4gICAgICAgIGNpLFxuICAgICAgICBub21icmUsXG4gICAgfSkge1xuICAgICAgICByZXR1cm4gQ2xpZW50ZXMuaW5zZXJ0KHtcbiAgICAgICAgICAgIGNpOiBjaSxcbiAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsaWVudGUgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnY2xpZW50ZS51cGRhdGUnLFxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICBjaToge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXG4gICAgfSkudmFsaWRhdG9yICgpLFxuICAgIHJ1biAoe1xuICAgICAgICBpZCxcbiAgICAgICAgY2ksXG4gICAgICAgIG5vbWJyZSxcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBDbGllbnRlcy51cGRhdGUoe1xuICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICB9LHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgICBjaTogY2ksXG4gICAgICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSk7XG5cblxuLy8gTElORUFTIEZBUk1BQ0VVVElDQVNcblxuZXhwb3J0IGNvbnN0IGluc2VydExpbmVhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ2xpbmVhLmluc2VydCcsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBub21icmVfbGluZWE6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICB0ZWxlZm9ubzoge3R5cGU6IFN0cmluZ31cbiAgICB9KS52YWxpZGF0b3IgKCksXG4gICAgcnVuICh7bm9tYnJlX2xpbmVhLCB0ZWxlZm9ubyB9KSB7XG4gICAgICAgIHJldHVybiBMaW5lYXMuaW5zZXJ0KHtcbiAgICAgICAgICAgIG5vbWJyZV9saW5lYTogbm9tYnJlX2xpbmVhLFxuICAgICAgICAgICAgdGVsZWZvbm86IHRlbGVmb25vXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGluZWEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnbGluZWEudXBkYXRlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbm9tYnJlX2xpbmVhOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdGVsZWZvbm86IHt0eXBlOiBTdHJpbmd9XG4gICAgfSkudmFsaWRhdG9yICgpLFxuICAgIHJ1biAoe2lkLCBub21icmVfbGluZWEsIHRlbGVmb25vIH0pIHtcbiAgICAgICAgcmV0dXJuIExpbmVhcy51cGRhdGUoe1xuICAgICAgICAgICAgX2lkOmlkXG4gICAgICAgIH0se1xuICAgICAgICAgICAgJHNldDp7XG4gICAgICAgICAgICAgICAgbm9tYnJlX2xpbmVhOiBub21icmVfbGluZWEsXG4gICAgICAgICAgICAgICAgdGVsZWZvbm86IHRlbGVmb25vXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGluZWEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnbGluZWEucmVtb3ZlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfVxuICAgIH0pLnZhbGlkYXRvciAoKSxcbiAgICBydW4gKHtpZH0pIHtcbiAgICAgICAgcmV0dXJuIExpbmVhcy5yZW1vdmUoe1xuICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZU1ldGhvZCB9IGZyb20gJ21ldGVvci9tZGc6dmFsaWRhdGVkLW1ldGhvZCc7XHJcbmltcG9ydCB7IFNpbXBsZVNjaGVtYSB9IGZyb20gJ21ldGVvci9hbGRlZWQ6c2ltcGxlLXNjaGVtYSc7XHJcbmltcG9ydCB7IE1lZGljb3MgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRNZWRpY28gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdtZWRpY28uaW5zZXJ0JyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBtZWRpY286IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvbnN1bHRvcmlvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2lnbmFkbzoge3R5cGU6IEJvb2xlYW59XHJcbiAgICB9KS52YWxpZGF0b3IgKCksXHJcbiAgICBydW4gKHtcclxuICAgICAgICBtZWRpY28sXHJcbiAgICAgICAgY29uc3VsdG9yaW8sXHJcbiAgICAgICAgYXNpZ25hZG9cclxuICAgIH0pIHtcclxuICAgICAgICByZXR1cm4gTWVkaWNvcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBtZWRpY286IG1lZGljbyxcclxuICAgICAgICAgICAgY29uc3VsdG9yaW86IGNvbnN1bHRvcmlvLFxyXG4gICAgICAgICAgICBhc2lnbmFkbzogYXNpZ25hZG9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTWVkaWNvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnbWVkaWNvLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG1lZGljbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY29uc3VsdG9yaW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFzaWduYWRvOiB7dHlwZTogQm9vbGVhbn1cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIG1lZGljbyxcclxuICAgICAgICBjb25zdWx0b3JpbyxcclxuICAgICAgICBhc2lnbmFkb1xyXG4gICAgfSkge1xyXG4gICAgICAgIHJldHVybiBNZWRpY29zLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWNvOiBtZWRpY28sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3VsdG9yaW86IGNvbnN1bHRvcmlvLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzaWduYWRvOiBhc2lnbmFkbyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNZWRpY29VcyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ21lZGljb3VzLnVwZGF0ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWRVczoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY2k6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRpdHVsbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhdmF0YXI6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IgKCksXHJcbiAgICBydW4gKHtpZFVzLCBjaSwgdGl0dWxvLCBub21icmUsIGF2YXRhcn0pIHtcclxuICAgICAgICByZXR1cm4gTWVkaWNvcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgaWRVczogaWRVc1xyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNpOiBjaSxcclxuICAgICAgICAgICAgICAgICAgICB0aXR1bG86IHRpdHVsbyxcclxuICAgICAgICAgICAgICAgICAgICBub21icmU6IG5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlTWVkaWNvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnbWVkaWNvLnJlbW92ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWRVczoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe2lkVXN9KSB7XHJcbiAgICAgICAgcmV0dXJuIE1lZGljb3MucmVtb3ZlKHtpZFVzOiBpZFVzfSk7XHJcbiAgICAgICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNZWRpY29Fc3AgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdtZWRpY29lc3AudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZXNwZWNpYWxpZGFkOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yICgpLFxyXG4gICAgcnVuICh7aWQsIGVzcGVjaWFsaWRhZH0pIHtcclxuICAgICAgICByZXR1cm4gTWVkaWNvcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIGVzcGVjaWFsaWRhZDogZXNwZWNpYWxpZGFkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZU1ldGhvZCB9IGZyb20gJ21ldGVvci9tZGc6dmFsaWRhdGVkLW1ldGhvZCc7XHJcbmltcG9ydCB7IFNpbXBsZVNjaGVtYSB9IGZyb20gJ21ldGVvci9hbGRlZWQ6c2ltcGxlLXNjaGVtYSc7XHJcbmltcG9ydCB7IFBhY2llbnRlcyB9IGZyb20gJy4vY29sbGVjdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydFBhY2llbnRlID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnYXNlZ3VyYWRvLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgdGlwb19wYWNpZW50ZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXNlZ3VyYWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgY29kaWdvX2FzZWd1cmFkbzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX3BhdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX21hdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHBhcmVudGVzY286IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBzZXhvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBmZWNoYV9uYWM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2V4dGluY2lvbjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGRpcmVjY2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZW1wbGVhZG9yOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgZm90bzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIGZlY2hhX3JlZzoge3R5cGU6IERhdGV9LFxyXG4gICAgICAgIHJlZ2lzdHJhZG9fcG9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBvYnNlcnZhY2lvbmVzOiB7dHlwZTogW09iamVjdF0sIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICAnb2JzZXJ2YWNpb25lcy4kLm9ic19mZWNoYSc6IHt0eXBlOiBEYXRlfSxcclxuICAgICAgICAnb2JzZXJ2YWNpb25lcy4kLm9ic190aXR1bG8nOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAnb2JzZXJ2YWNpb25lcy4kLm9ic19jb25jZXB0byc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgICdvYnNlcnZhY2lvbmVzLiQub2JzX3Byb3BpZXRhcmlvJzoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe1xyXG4gICAgICAgIHRpcG9fcGFjaWVudGUsXHJcbiAgICAgICAgYXNlZ3VyYWRvLFxyXG4gICAgICAgIGNvZGlnb19hc2VndXJhZG8sXHJcbiAgICAgICAgY2ksXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGFwX3BhdGVybm8sXHJcbiAgICAgICAgYXBfbWF0ZXJubyxcclxuICAgICAgICBwYXJlbnRlc2NvLFxyXG4gICAgICAgIHNleG8sXHJcbiAgICAgICAgZmVjaGFfbmFjLFxyXG4gICAgICAgIGZlY2hhX2V4dGluY2lvbixcclxuICAgICAgICBkaXJlY2Npb24sXHJcbiAgICAgICAgZW1wbGVhZG9yLFxyXG4gICAgICAgIGZvdG8sXHJcbiAgICAgICAgZmVjaGFfcmVnLFxyXG4gICAgICAgIHJlZ2lzdHJhZG9fcG9yLFxyXG4gICAgICAgIG9ic2VydmFjaW9uZXNcclxuICAgIH0pIHtcclxuICAgICAgICByZXR1cm4gUGFjaWVudGVzLmluc2VydCh7XHJcbiAgICAgICAgICAgIHRpcG9fcGFjaWVudGU6IHRpcG9fcGFjaWVudGUsXHJcbiAgICAgICAgICAgIGFzZWd1cmFkbzogYXNlZ3VyYWRvLFxyXG4gICAgICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiBjb2RpZ29fYXNlZ3VyYWRvLFxyXG4gICAgICAgICAgICBjaTogY2ksXHJcbiAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxyXG4gICAgICAgICAgICBhcF9wYXRlcm5vOiBhcF9wYXRlcm5vLFxyXG4gICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG4gICAgICAgICAgICBwYXJlbnRlc2NvOiBwYXJlbnRlc2NvLFxyXG4gICAgICAgICAgICBzZXhvOiBzZXhvLFxyXG4gICAgICAgICAgICBmZWNoYV9uYWM6IGZlY2hhX25hYyxcclxuICAgICAgICAgICAgZmVjaGFfZXh0aW5jaW9uOiBmZWNoYV9leHRpbmNpb24sXHJcbiAgICAgICAgICAgIGRpcmVjY2lvbjogZGlyZWNjaW9uLFxyXG4gICAgICAgICAgICBlbXBsZWFkb3I6IGVtcGxlYWRvcixcclxuICAgICAgICAgICAgZm90bzogZm90byxcclxuICAgICAgICAgICAgb2JzZXJ2YWNpb25lczogb2JzZXJ2YWNpb25lc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qZXhwb3J0IGNvbnN0IHVwZGF0ZUFzZWdQYWNpZW50ZSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ3BhY2FzZWd1cmFkby51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvX3BhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICAvL2NvZGlnb19hc2VnX2FudDoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWUgfSxcclxuICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZSB9LFxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX3BhdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX21hdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHNleG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX25hYzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfZXh0aW5jaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaXJlY2Npb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVtcGxlYWRvcjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZm90bzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIG9ic19mZWNoYToge3R5cGU6IERhdGV9LFxyXG4gICAgICAgIG9ic190aXR1bG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG9ic19jb25jZXB0bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgb2JzX3Byb3BpZXRhcmlvOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4gKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0aXBvX3BhY2llbnRlLFxyXG4gICAgICAgIGFzZWd1cmFkbyxcclxuICAgICAgICBjb2RpZ29fYXNlZ19hbnQsXHJcbiAgICAgICAgY29kaWdvX2FzZWd1cmFkbyxcclxuICAgICAgICBjaSxcclxuICAgICAgICBub21icmUsXHJcbiAgICAgICAgYXBfcGF0ZXJubyxcclxuICAgICAgICBhcF9tYXRlcm5vLFxyXG4gICAgICAgIHNleG8sXHJcbiAgICAgICAgZmVjaGFfbmFjLFxyXG4gICAgICAgIGZlY2hhX2V4dGluY2lvbixcclxuICAgICAgICBkaXJlY2Npb24sXHJcbiAgICAgICAgZW1wbGVhZG9yLFxyXG4gICAgICAgIGZvdG8sXHJcbiAgICAgICAgb2JzX2ZlY2hhLFxyXG4gICAgICAgIG9ic190aXR1bG8sXHJcbiAgICAgICAgb2JzX2NvbmNlcHRvLFxyXG4gICAgICAgIG9ic19wcm9waWV0YXJpb1xyXG4gICAgfSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFBhY2llbnRlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fcGFjaWVudGU6IHRpcG9fcGFjaWVudGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNlZ3VyYWRvOiBhc2VndXJhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvX2FzZWd1cmFkbzogY29kaWdvX2FzZWd1cmFkbyxcclxuICAgICAgICAgICAgICAgICAgICBjaTogY2ksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBfcGF0ZXJubzogYXBfcGF0ZXJubyxcclxuICAgICAgICAgICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG4gICAgICAgICAgICAgICAgICAgIHNleG86IHNleG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjOiBmZWNoYV9uYWMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfZXh0aW5jaW9uOiBmZWNoYV9leHRpbmNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWNjaW9uOiBkaXJlY2Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbGVhZG9yOiBlbXBsZWFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZm90bzogZm90byxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIFBhY2llbnRlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRwdXNoOntcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhY2lvbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic19mZWNoYTogb2JzX2ZlY2hhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfdGl0dWxvOiBvYnNfdGl0dWxvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfY29uY2VwdG86IG9ic19jb25jZXB0byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzX3Byb3BpZXRhcmlvOiBvYnNfcHJvcGlldGFyaW9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSk7Ki9cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQYWNpZW50ZSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2FzZWd1cmFkby51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvX3BhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICBjb2RpZ29fYXNlZ19hbnQ6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlIH0sXHJcbiAgICAgICAgY29kaWdvX2FzZWd1cmFkbzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWUgfSxcclxuICAgICAgICBjaToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhcF9wYXRlcm5vOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhcF9tYXRlcm5vOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBzZXhvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBmZWNoYV9uYWM6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2V4dGluY2lvbjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGlyZWNjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBlbXBsZWFkb3I6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZvdG86IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBwYXJlbnRlc2NvOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1biAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHRpcG9fcGFjaWVudGUsXHJcbiAgICAgICAgYXNlZ3VyYWRvLFxyXG4gICAgICAgIGNvZGlnb19hc2VnX2FudCxcclxuICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvLFxyXG4gICAgICAgIGNpLFxyXG4gICAgICAgIG5vbWJyZSxcclxuICAgICAgICBhcF9wYXRlcm5vLFxyXG4gICAgICAgIGFwX21hdGVybm8sXHJcbiAgICAgICAgc2V4byxcclxuICAgICAgICBmZWNoYV9uYWMsXHJcbiAgICAgICAgZmVjaGFfZXh0aW5jaW9uLFxyXG4gICAgICAgIGRpcmVjY2lvbixcclxuICAgICAgICBlbXBsZWFkb3IsXHJcbiAgICAgICAgZm90byxcclxuICAgICAgICBwYXJlbnRlc2NvLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFBhY2llbnRlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fcGFjaWVudGU6IHRpcG9fcGFjaWVudGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNlZ3VyYWRvOiBhc2VndXJhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvX2FzZWd1cmFkbzogY29kaWdvX2FzZWd1cmFkbyxcclxuICAgICAgICAgICAgICAgICAgICBjaTogY2ksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBfcGF0ZXJubzogYXBfcGF0ZXJubyxcclxuICAgICAgICAgICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG4gICAgICAgICAgICAgICAgICAgIHNleG86IHNleG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjOiBmZWNoYV9uYWMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfZXh0aW5jaW9uOiBmZWNoYV9leHRpbmNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWNjaW9uOiBkaXJlY2Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbGVhZG9yOiBlbXBsZWFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZm90bzogZm90byxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRlc2NvOiBwYXJlbnRlc2NvLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUGFjaWVudGVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiBjb2RpZ29fYXNlZ19hbnRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiBjb2RpZ29fYXNlZ3VyYWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjY2lvbjogZGlyZWNjaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxlYWRvcjogZW1wbGVhZG9yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtdWx0aTp0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGFydEFzZWcgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdwYXJ0YXNlZy51cGRhdGUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvX3BhY2llbnRlOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBhc2VndXJhZG86IHt0eXBlOiBCb29sZWFufSxcclxuICAgICAgICAvL2NvZGlnb19hc2VnX2FudDoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWUgfSxcclxuICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZSB9LFxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmU6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX3BhdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGFwX21hdGVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHNleG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX25hYzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfZXh0aW5jaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBkaXJlY2Npb246IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGVtcGxlYWRvcjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZm90bzoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhcmVudGVzY286IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBvYnNfZmVjaGE6IHt0eXBlOiBEYXRlfSxcclxuICAgICAgICBvYnNfdGl0dWxvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBvYnNfY29uY2VwdG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG9ic19wcm9waWV0YXJpbzoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuICh7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgdGlwb19wYWNpZW50ZSxcclxuICAgICAgICBhc2VndXJhZG8sXHJcbiAgICAgICAgY29kaWdvX2FzZWdfYW50LFxyXG4gICAgICAgIGNvZGlnb19hc2VndXJhZG8sXHJcbiAgICAgICAgY2ksXHJcbiAgICAgICAgbm9tYnJlLFxyXG4gICAgICAgIGFwX3BhdGVybm8sXHJcbiAgICAgICAgYXBfbWF0ZXJubyxcclxuICAgICAgICBzZXhvLFxyXG4gICAgICAgIGZlY2hhX25hYyxcclxuICAgICAgICBmZWNoYV9leHRpbmNpb24sXHJcbiAgICAgICAgZGlyZWNjaW9uLFxyXG4gICAgICAgIGVtcGxlYWRvcixcclxuICAgICAgICBmb3RvLFxyXG4gICAgICAgIHBhcmVudGVzY28sXHJcbiAgICAgICAgb2JzX2ZlY2hhLFxyXG4gICAgICAgIG9ic190aXR1bG8sXHJcbiAgICAgICAgb2JzX2NvbmNlcHRvLFxyXG4gICAgICAgIG9ic19wcm9waWV0YXJpb1xyXG4gICAgfSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFBhY2llbnRlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fcGFjaWVudGU6IHRpcG9fcGFjaWVudGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNlZ3VyYWRvOiBhc2VndXJhZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvX2FzZWd1cmFkbzogY29kaWdvX2FzZWd1cmFkbyxcclxuICAgICAgICAgICAgICAgICAgICBjaTogY2ksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBfcGF0ZXJubzogYXBfcGF0ZXJubyxcclxuICAgICAgICAgICAgICAgICAgICBhcF9tYXRlcm5vOiBhcF9tYXRlcm5vLFxyXG4gICAgICAgICAgICAgICAgICAgIHNleG86IHNleG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfbmFjOiBmZWNoYV9uYWMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVjaGFfZXh0aW5jaW9uOiBmZWNoYV9leHRpbmNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWNjaW9uOiBkaXJlY2Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbGVhZG9yOiBlbXBsZWFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZm90bzogZm90byxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRlc2NvLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUGFjaWVudGVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHB1c2g6e1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFjaW9uZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzX2ZlY2hhOiBvYnNfZmVjaGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic190aXR1bG86IG9ic190aXR1bG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic19jb25jZXB0bzogb2JzX2NvbmNlcHRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfcHJvcGlldGFyaW86IG9ic19wcm9waWV0YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVBc2VnRGVwID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAnYXNlZ2RlcC5yZW1vdmUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBvYnNfZmVjaGE6IHt0eXBlOiBEYXRlfSxcclxuICAgICAgICBvYnNfdGl0dWxvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBvYnNfY29uY2VwdG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG9ic19wcm9waWV0YXJpbzoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuICh7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgb2JzX2ZlY2hhLFxyXG4gICAgICAgIG9ic190aXR1bG8sXHJcbiAgICAgICAgb2JzX2NvbmNlcHRvLFxyXG4gICAgICAgIG9ic19wcm9waWV0YXJpb1xyXG4gICAgfSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFBhY2llbnRlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgX2lkOiBpZFxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcG9fcGFjaWVudGU6ICdQYXJ0aWN1bGFyJyxcclxuICAgICAgICAgICAgICAgICAgICBhc2VndXJhZG86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGlnb19hc2VndXJhZG86ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudGVzY286ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxlYWRvcjogJycsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBQYWNpZW50ZXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkcHVzaDp7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWNpb25lczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfZmVjaGE6IG9ic19mZWNoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzX3RpdHVsbzogb2JzX3RpdHVsbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzX2NvbmNlcHRvOiBvYnNfY29uY2VwdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic19wcm9waWV0YXJpbzogb2JzX3Byb3BpZXRhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSk7XHJcbi8qLHtcclxuICAgICR1bnNldDp7XHJcbiAgICAgICAgY29kaWdvX2FzZWd1cmFkbzogXCJcIlxyXG4gICAgfVxyXG59Ki9cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFzZWdUaXQgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdhc2VndGl0LnJlbW92ZScsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb19hc2VndXJhZG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG9ic19mZWNoYToge3R5cGU6IERhdGV9LFxyXG4gICAgICAgIG9ic190aXR1bG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG9ic19jb25jZXB0bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgb2JzX3Byb3BpZXRhcmlvOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4gKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvLFxyXG4gICAgICAgIG9ic19mZWNoYSxcclxuICAgICAgICBvYnNfdGl0dWxvLFxyXG4gICAgICAgIG9ic19jb25jZXB0byxcclxuICAgICAgICBvYnNfcHJvcGlldGFyaW9cclxuICAgIH0pIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBQYWNpZW50ZXMudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICB0aXBvX3BhY2llbnRlOiAnUGFydGljdWxhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNlZ3VyYWRvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBlbXBsZWFkb3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUGFjaWVudGVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHB1c2g6e1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFjaW9uZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzX2ZlY2hhOiBvYnNfZmVjaGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic190aXR1bG86IG9ic190aXR1bG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic19jb25jZXB0bzogb2JzX2NvbmNlcHRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfcHJvcGlldGFyaW86IG9ic19wcm9waWV0YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIFBhY2llbnRlcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgY29kaWdvX2FzZWd1cmFkbzogY29kaWdvX2FzZWd1cmFkb1xyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgICRwdXNoOntcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhY2lvbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic19mZWNoYTogb2JzX2ZlY2hhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfdGl0dWxvOiBvYnNfdGl0dWxvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNfY29uY2VwdG86IFwiJ0Rlc2FmaWxpYWRvJyBwb3JxdWUgZWwgYXNlZ3VyYWRvIHRpdHVsYXIgZnVlICdEZXNhZmlsaWFkbydcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzX3Byb3BpZXRhcmlvOiBvYnNfcHJvcGlldGFyaW9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgbXVsdGk6dHJ1ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgUGFjaWVudGVzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjb2RpZ29fYXNlZ3VyYWRvOiBjb2RpZ29fYXNlZ3VyYWRvXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwb19wYWNpZW50ZTogJ1BhcnRpY3VsYXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzZWd1cmFkbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29kaWdvX2FzZWd1cmFkbzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbGVhZG9yOiAnJyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBtdWx0aTp0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWV0aG9kIH0gZnJvbSAnbWV0ZW9yL21kZzp2YWxpZGF0ZWQtbWV0aG9kJztcclxuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcclxuaW1wb3J0IHsgUGxhbkN1ZW50YXMgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRQbGFuQ3VlbnRhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncGxhbmN1ZW50YS5pbnNlcnQnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb19zdXBlcmlvcjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIG5vbWJyZV9jdWVudGE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHRpcG86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5pdmVsOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjdWVudGFfbWF5b3I6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGxpYnJvX21heW9yOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX2N1ZW50YSxcclxuICAgICAgICBjb2RpZ29fc3VwZXJpb3IsXHJcbiAgICAgICAgbm9tYnJlX2N1ZW50YSxcclxuICAgICAgICB0aXBvLFxyXG4gICAgICAgIG5pdmVsLFxyXG4gICAgICAgIGN1ZW50YV9tYXlvcixcclxuICAgICAgICBsaWJyb19tYXlvcixcclxuICAgIH0pe1xyXG4gICAgICAgIHJldHVybiBQbGFuQ3VlbnRhcy5pbnNlcnQoe1xyXG4gICAgICAgICAgICBjb2RpZ29fY3VlbnRhOiBjb2RpZ29fY3VlbnRhLFxyXG4gICAgICAgICAgICBjb2RpZ29fc3VwZXJpb3I6IGNvZGlnb19zdXBlcmlvcixcclxuICAgICAgICAgICAgbm9tYnJlX2N1ZW50YTogbm9tYnJlX2N1ZW50YSxcclxuICAgICAgICAgICAgdGlwbzogdGlwbyxcclxuICAgICAgICAgICAgbml2ZWw6IG5pdmVsLFxyXG4gICAgICAgICAgICBjdWVudGFfbWF5b3I6IGN1ZW50YV9tYXlvcixcclxuICAgICAgICAgICAgbGlicm9fbWF5b3I6IGxpYnJvX21heW9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQbGFuQ3VlbnRhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAncGxhbmN1ZW50YS5yZW1vdmUnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGE6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgY29kaWdvX2N1ZW50YVxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIFBsYW5DdWVudGFzLnJlbW92ZSh7XHJcbiAgICAgICAgICAgIGNvZGlnb19jdWVudGE6IGNvZGlnb19jdWVudGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGxhbkN1ZW50YSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ3BsYW5jdWVudGEudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBjb2RpZ29fY3VlbnRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBub21icmVfY3VlbnRhOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0aXBvOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBuaXZlbDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY3VlbnRhX21heW9yOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBsaWJyb19tYXlvcjoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe1xyXG4gICAgICAgIGNvZGlnb19jdWVudGEsXHJcbiAgICAgICAgbm9tYnJlX2N1ZW50YSxcclxuICAgICAgICB0aXBvLFxyXG4gICAgICAgIG5pdmVsLFxyXG4gICAgICAgIGN1ZW50YV9tYXlvcixcclxuICAgICAgICBsaWJyb19tYXlvclxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIFBsYW5DdWVudGFzLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIGNvZGlnb19jdWVudGE6IGNvZGlnb19jdWVudGFcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICBub21icmVfY3VlbnRhOiBub21icmVfY3VlbnRhLFxyXG4gICAgICAgICAgICAgICAgdGlwbzogdGlwbyxcclxuICAgICAgICAgICAgICAgIG5pdmVsOiBuaXZlbCxcclxuICAgICAgICAgICAgICAgIGN1ZW50YV9tYXlvcjogY3VlbnRhX21heW9yLFxyXG4gICAgICAgICAgICAgICAgbGlicm9fbWF5b3I6IGxpYnJvX21heW9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IGluc2VydFJvbGVzID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3JvbGVzLmluc2VydCcsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICB1c2VySWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICByb2xlczoge3R5cGU6IFtTdHJpbmddfVxuICAgIH0pLnZhbGlkYXRvcigpLFxuICAgIHJ1bih7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcm9sZXNcbiAgICB9KXtcbiAgICAgICAgLypjb25zb2xlLmxvZygnSG9sYScpO1xuICAgICAgICBjb25zb2xlLmxvZyhyb2xlcyk7Ki9cbiAgICAgICAgcmV0dXJuIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsIHJvbGVzKTtcbiAgICAgICAgLy9yZXR1cm4gUm9sZXMuc2V0VXNlclJvbGVzKHVzZXJJZCwgcm9sZXMpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgZWRpdFJvbGVzID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3JvbGVzLmVkaXQnLFxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgICAgICAgdXNlcklkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgcm9sZXM6IHt0eXBlOiBbU3RyaW5nXX1cbiAgICB9KS52YWxpZGF0b3IoKSxcbiAgICBydW4oe1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHJvbGVzXG4gICAgfSl7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ0hvbGEnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyb2xlcyk7XG4gICAgICAgIC8vcmV0dXJuIFJvbGVzLmFkZFVzZXJzVG9Sb2xlcyh1c2VySWQsIHJvbGVzKTtcbiAgICAgICAgcmV0dXJuIFJvbGVzLnNldFVzZXJSb2xlcyh1c2VySWQsIHJvbGVzKTtcbiAgICB9XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xuaW1wb3J0IHsgU2ltcGxlU2NoZW1hIH0gZnJvbSAnbWV0ZW9yL2FsZGVlZDpzaW1wbGUtc2NoZW1hJztcbmltcG9ydCB7IFNhbGFzLCBDYW1hcywgU2VydmljaW9zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy5qcyc7XG5cbmV4cG9ydCBjb25zdCBpbnNlcnRTYWxhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3NhbGEuaW5zZXJ0JyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGltYWdlbjoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG5vbWJyZV9zYWxhOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgdGlwb19zYWxhOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXG4gICAgICAgIGVzdGFkbzoge3R5cGU6IEJvb2xlYW59LFxuICAgIH0pLnZhbGlkYXRvcigpLFxuICAgIHJ1bih7XG4gICAgICAgIGltYWdlbixcbiAgICAgICAgbm9tYnJlX3NhbGEsXG4gICAgICAgIHRpcG9fc2FsYSxcbiAgICAgICAgZXN0YWRvLFxuICAgIH0pe1xuICAgICAgICByZXR1cm4gU2FsYXMuaW5zZXJ0KHtcbiAgICAgICAgICAgIGltYWdlbjogaW1hZ2VuLFxuICAgICAgICAgICAgbm9tYnJlX3NhbGE6IG5vbWJyZV9zYWxhLFxuICAgICAgICAgICAgdGlwb19zYWxhOiB0aXBvX3NhbGEsXG4gICAgICAgICAgICBlc3RhZG86IGVzdGFkbyxcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTYWxhID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3NhbGEudXBkYXRlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgaW1hZ2VuOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgICAgbm9tYnJlX3NhbGE6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgICB0aXBvX3NhbGE6IHt0eXBlOiBTdHJpbmcsIG9wdGlvbmFsOiB0cnVlfSxcbiAgICAgICAgZXN0YWRvOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICB9KS52YWxpZGF0b3IoKSxcbiAgICBydW4oe1xuICAgICAgICBpZCxcbiAgICAgICAgaW1hZ2VuLFxuICAgICAgICBub21icmVfc2FsYSxcbiAgICAgICAgdGlwb19zYWxhLFxuICAgICAgICBlc3RhZG8sXG4gICAgfSl7XG4gICAgICAgIHJldHVybiBTYWxhcy51cGRhdGUoe1xuICAgICAgICAgICAgX2lkOiBpZFxuICAgICAgICB9LHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgICBpbWFnZW46IGltYWdlbixcbiAgICAgICAgICAgICAgICBub21icmVfc2FsYTogbm9tYnJlX3NhbGEsXG4gICAgICAgICAgICAgICAgdGlwb19zYWxhOiB0aXBvX3NhbGEsXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBlc3RhZG8sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlU2FsYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xuICAgIG5hbWU6ICdzYWxhLnJlbW92ZScsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXG4gICAgfSkudmFsaWRhdG9yKCksXG4gICAgcnVuKHtcbiAgICAgICAgaWQsXG4gICAgfSl7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBTYWxhcy5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIF9pZDogaWRcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgQ2FtYXMucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICBpZF9zYWxhOiBpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgXTtcbiAgICB9XG59KTtcblxuLy8gQ0FNQVNcblxuZXhwb3J0IGNvbnN0IGluc2VydENhbWEgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnY2FtYS5pbnNlcnQnLFxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcbiAgICAgICAgaWRfc2FsYToge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG5yb19jYW1hOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgICAgLy9lc3RhZG86IHt0eXBlOiBCb29sZWFufSxcbiAgICAgICAgb2N1cGFkbzoge3R5cGU6IEJvb2xlYW59XG4gICAgfSkudmFsaWRhdG9yKCksXG4gICAgcnVuKHtcbiAgICAgICAgaWRfc2FsYSxcbiAgICAgICAgbnJvX2NhbWEsXG4gICAgICAgIC8vZXN0YWRvLFxuICAgICAgICBvY3VwYWRvXG4gICAgfSl7XG4gICAgICAgIHJldHVybiBDYW1hcy5pbnNlcnQoe1xuICAgICAgICAgICAgaWRfc2FsYTogaWRfc2FsYSxcbiAgICAgICAgICAgIG5yb19jYW1hOiBucm9fY2FtYSxcbiAgICAgICAgICAgIC8vZXN0YWRvOiBlc3RhZG8sXG4gICAgICAgICAgICBvY3VwYWRvOiBvY3VwYWRvXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FtYSA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xuICAgIG5hbWU6ICdjYW1hLnVwZGF0ZScsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIG9jdXBhZG86IHt0eXBlOiBCb29sZWFufVxuICAgIH0pLnZhbGlkYXRvcigpLFxuICAgIHJ1bih7XG4gICAgICAgIGlkLFxuICAgICAgICBvY3VwYWRvXG4gICAgfSl7XG4gICAgICAgIHJldHVybiBDYW1hcy51cGRhdGUoe1xuICAgICAgICAgICAgX2lkOiBpZCxcbiAgICAgICAgfSx7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICAgb2N1cGFkbzogb2N1cGFkbyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYW1hID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ2NhbWEucmVtb3ZlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICB9KS52YWxpZGF0b3IoKSxcbiAgICBydW4oe1xuICAgICAgICBpZCxcbiAgICB9KXtcbiAgICAgICAgcmV0dXJuIENhbWFzLnJlbW92ZSh7XG4gICAgICAgICAgICBfaWQ6IGlkLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuXG4vL1NFUlZJQ0lPU1xuZXhwb3J0IGNvbnN0IGluc2VydFNlcnZpY2lvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3NlcnZpY2lvLmluc2VydCcsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBzZXJ2aWNpbzoge3R5cGU6IFN0cmluZ30sXG4gICAgfSkudmFsaWRhdG9yKCksXG4gICAgcnVuKHtcbiAgICAgICAgc2VydmljaW9cbiAgICB9KXtcbiAgICAgICAgcmV0dXJuIFNlcnZpY2lvcy5pbnNlcnQoe1xuICAgICAgICAgICAgc2VydmljaW86IHNlcnZpY2lvLFxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlcnZpY2lvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XG4gICAgbmFtZTogJ3NlcnZpY2lvLnVwZGF0ZScsXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIHNlcnZpY2lvOiB7dHlwZTogU3RyaW5nfVxuICAgIH0pLnZhbGlkYXRvcigpLFxuICAgIHJ1bih7XG4gICAgICAgIGlkLFxuICAgICAgICBzZXJ2aWNpb1xuICAgIH0pe1xuICAgICAgICByZXR1cm4gU2VydmljaW9zLnVwZGF0ZSh7XG4gICAgICAgICAgICBfaWQ6IGlkLFxuICAgICAgICB9LHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNpbzogc2VydmljaW8sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlU2VydmljaW8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcbiAgICBuYW1lOiAnU2VydmljaW8ucmVtb3ZlJyxcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcbiAgICB9KS52YWxpZGF0b3IoKSxcbiAgICBydW4oe1xuICAgICAgICBpZCxcbiAgICB9KXtcbiAgICAgICAgcmV0dXJuIFNlcnZpY2lvcy5yZW1vdmUoe1xuICAgICAgICAgICAgX2lkOiBpZCxcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xyXG5pbXBvcnQgeyBTaW1wbGVTY2hlbWEgfSBmcm9tICdtZXRlb3IvYWxkZWVkOnNpbXBsZS1zY2hlbWEnO1xyXG5pbXBvcnQgeyBUdXJub3MgfSBmcm9tICcuL2NvbGxlY3Rpb25zLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnNlcnRUdXJubyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ3R1cm5vLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgbm9tYnJlX3R1cm5vOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL2HDsW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vbWVzOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29fdHVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGltYWdlbl90dXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX2FzZWc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByZWNpb19wYXJ0OiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtZWRpY29zOiB7dHlwZTogW09iamVjdF19LFxyXG4gICAgICAgICdtZWRpY29zLiQubnJvX29yZGVuJzoge3R5cGU6U3RyaW5nfSxcclxuICAgICAgICAnbWVkaWNvcy4kLm1lZGljbyc6IHt0eXBlOlN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoeyBub21icmVfdHVybm8sIC8qYcOxbywgbWVzLCovIGNvZGlnb190dXJubywgaW1hZ2VuX3R1cm5vLCBwcmVjaW9fYXNlZywgcHJlY2lvX3BhcnQsIG1lZGljb3MgfSkge1xyXG4gICAgICAgIHJldHVybiBUdXJub3MuaW5zZXJ0KHtcclxuICAgICAgICAgICAgbm9tYnJlX3R1cm5vOiBub21icmVfdHVybm8sXHJcbiAgICAgICAgICAgIC8vYcOxbzogYcOxbyxcclxuICAgICAgICAgICAgLy9tZXM6IG1lcyxcclxuICAgICAgICAgICAgY29kaWdvX3R1cm5vOiBjb2RpZ29fdHVybm8sXHJcbiAgICAgICAgICAgIHRpcG86ICdUdXJubycsXHJcbiAgICAgICAgICAgIGltYWdlbl90dXJubzogaW1hZ2VuX3R1cm5vLFxyXG4gICAgICAgICAgICBwcmVjaW9fYXNlZzogcHJlY2lvX2FzZWcsXHJcbiAgICAgICAgICAgIHByZWNpb19wYXJ0OiBwcmVjaW9fcGFydCxcclxuICAgICAgICAgICAgbWVkaWNvczogbWVkaWNvc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVR1cm5vID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndHVybm8udXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgbm9tYnJlX3R1cm5vOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICAvL2HDsW86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vbWVzOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjb2RpZ29fdHVybm86IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGltYWdlbl90dXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgcHJlY2lvX2FzZWc6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIHByZWNpb19wYXJ0OiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBtZWRpY29zOiB7dHlwZTogW09iamVjdF19LFxyXG4gICAgICAgICdtZWRpY29zLiQubnJvX29yZGVuJzoge3R5cGU6U3RyaW5nfSxcclxuICAgICAgICAnbWVkaWNvcy4kLm1lZGljbyc6IHt0eXBlOlN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoeyBpZCwgbm9tYnJlX3R1cm5vLCAvKmHDsW8sIG1lcywqL2NvZGlnb190dXJubywgaW1hZ2VuX3R1cm5vLCBwcmVjaW9fYXNlZywgcHJlY2lvX3BhcnQsIG1lZGljb3MgfSkge1xyXG4gICAgICAgIHJldHVybiBUdXJub3MudXBkYXRlKHtcclxuICAgICAgICAgICAgX2lkOiBpZCxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICBub21icmVfdHVybm86IG5vbWJyZV90dXJubyxcclxuICAgICAgICAgICAgICAgIC8vYcOxbzogYcOxbyxcclxuICAgICAgICAgICAgICAgIC8vbWVzOiBtZXMsXHJcbiAgICAgICAgICAgICAgICBjb2RpZ29fdHVybm86IGNvZGlnb190dXJubyxcclxuICAgICAgICAgICAgICAgIHRpcG86ICdUdXJubycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZW5fdHVybm86IGltYWdlbl90dXJubyxcclxuICAgICAgICAgICAgICAgIHByZWNpb19hc2VnOiBwcmVjaW9fYXNlZyxcclxuICAgICAgICAgICAgICAgIHByZWNpb19wYXJ0OiBwcmVjaW9fcGFydCxcclxuICAgICAgICAgICAgICAgIG1lZGljb3M6IG1lZGljb3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZVR1cm5vID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndHVybm8ucmVtb3ZlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvciAoKSxcclxuICAgIHJ1biAoe2lkfSkge1xyXG4gICAgICAgIHJldHVybiBUdXJub3MucmVtb3ZlKHtfaWQ6IGlkfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXRob2QgfSBmcm9tICdtZXRlb3IvbWRnOnZhbGlkYXRlZC1tZXRob2QnO1xyXG5pbXBvcnQgeyBTaW1wbGVTY2hlbWEgfSBmcm9tICdtZXRlb3IvYWxkZWVkOnNpbXBsZS1zY2hlbWEnO1xyXG5pbXBvcnQgeyBVc3VhcmlvcywgQ2xhdmVSZWdpc3RybyB9IGZyb20gJy4vY29sbGVjdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2VydFVzdWFyaW8gPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICd1c3VhcmlvLmluc2VydCcsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgc3Vic2lzdGVtYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgLy9jYXJnbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY2k6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfcGF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfbWF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgc2V4bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfbmFjaW1pZW50bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGlyZWNjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjZWx1bGFyOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0ZWxmX3JlZmVyZW5jaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGF2YXRhcjoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgdXNlcklkOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcbiAgICAgICAgdXNlcjoge3R5cGU6IFN0cmluZywgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nLCBvcHRpb25hbDogdHJ1ZX0sXHJcblxyXG4gICAgICAgIHByb3BpZXRhcmlvX3JlZzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfcmVnaXN0cm86IHt0eXBlOkRhdGV9LFxyXG4gICAgICAgIGVsaW1pbmFkbzoge3R5cGU6IEJvb2xlYW59LFxyXG4gICAgICAgIHByb3BpZXRhcmlvX2VsaW06IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGZlY2hhX2VsaW06IHsgdHlwZTogRGF0ZSwgb3B0aW9uYWw6IHRydWV9LFxyXG4gICAgICAgIHJvbGVzOiB7dHlwZTogW1N0cmluZ119XHJcblxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe3N1YnNpc3RlbWEsIGNpLCBub21icmUsIGFwX3BhdGVybm8sIGFwX21hdGVybm8sIHNleG8sIGZlY2hhX25hY2ltaWVudG8sIGRpcmVjY2lvbiwgY2VsdWxhciwgdGVsZl9yZWZlcmVuY2lhLCBhdmF0YXIsIHVzZXJJZCwgdXNlciwgcGFzc3dvcmQsIHByb3BpZXRhcmlvX3JlZywgZmVjaGFfcmVnaXN0cm8sIGVsaW1pbmFkbywgcHJvcGlldGFyaW9fZWxpbSwgZmVjaGFfZWxpbSwgcm9sZXN9KXtcclxuICAgICAgICByZXR1cm4gVXN1YXJpb3MuaW5zZXJ0KHtcclxuICAgICAgICAgICAgc3Vic2lzdGVtYTogc3Vic2lzdGVtYSxcclxuICAgICAgICAgICAgLy9jYXJnbzogY2FyZ28sXHJcbiAgICAgICAgICAgIGNpOiBjaSxcclxuICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgIGFwX3BhdGVybm86IGFwX3BhdGVybm8sXHJcbiAgICAgICAgICAgIGFwX21hdGVybm86IGFwX21hdGVybm8sXHJcbiAgICAgICAgICAgIHNleG86IHNleG8sXHJcbiAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG86IGZlY2hhX25hY2ltaWVudG8sXHJcbiAgICAgICAgICAgIGRpcmVjY2lvbjogZGlyZWNjaW9uLFxyXG4gICAgICAgICAgICBjZWx1bGFyOiBjZWx1bGFyLFxyXG4gICAgICAgICAgICB0ZWxmX3JlZmVyZW5jaWE6IHRlbGZfcmVmZXJlbmNpYSxcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXHJcbiAgICAgICAgICAgIGVzdGFkbzogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgcHJvcGlldGFyaW9fcmVnOiBwcm9waWV0YXJpb19yZWcsXHJcbiAgICAgICAgICAgIGZlY2hhX3JlZ2lzdHJvOiBmZWNoYV9yZWdpc3RybyxcclxuICAgICAgICAgICAgZWxpbWluYWRvOiBlbGltaW5hZG8sXHJcbiAgICAgICAgICAgIHByb3BpZXRhcmlvX2VsaW06IHByb3BpZXRhcmlvX2VsaW0sXHJcbiAgICAgICAgICAgIGZlY2hhX2VsaW06IGZlY2hhX2VsaW0sXHJcbiAgICAgICAgICAgIHJvbGVzOiByb2xlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGF2ZVJlZyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ2NsYXZlLnJlZycsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY2k6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNvZGlnb1JlZzp7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2NpLCBjb2RpZ29SZWd9KXtcclxuICAgICAgICByZXR1cm4gQ2xhdmVSZWdpc3Ryby5pbnNlcnQoe2NpOiBjaSwgY29kaWdvUmVnOiBjb2RpZ29SZWd9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlRXN0YWRvVXMgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICd1cGRhdGUuZXN0YWRvVXMnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBlc3RhZG86IHt0eXBlOiBCb29sZWFufVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBlc3RhZG99KXtcclxuICAgICAgICByZXR1cm4gVXN1YXJpb3MudXBkYXRlKHtcclxuICAgICAgICAgICAgX2lkOmlkXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICRzZXQ6e1xyXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBlc3RhZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSb2xlc1VzID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndXBkYXRlLnJvbGVzVXMnLFxyXG4gICAgdmFsaWRhdGU6IG5ldyBTaW1wbGVTY2hlbWEoe1xyXG4gICAgICAgIGlkOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICByb2xlczoge3R5cGU6IFtTdHJpbmddfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCByb2xlc30pe1xyXG4gICAgICAgIHJldHVybiBVc3Vhcmlvcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBfaWQ6aWRcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICByb2xlczogcm9sZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc3VhcmlvID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndXN1YXJpb3MudXBkYXRlJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgc3Vic2lzdGVtYToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgLy9jYXJnbzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgY2k6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIG5vbWJyZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfcGF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgYXBfbWF0ZXJubzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgc2V4bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfbmFjaW1pZW50bzoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZGlyZWNjaW9uOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBjZWx1bGFyOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICB0ZWxmX3JlZmVyZW5jaWE6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIC8vZXN0YWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgLy9hdmF0YXI6IHt0eXBlOiBTdHJpbmd9XHJcbiAgICB9KS52YWxpZGF0b3IoKSxcclxuICAgIHJ1bih7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgc3Vic2lzdGVtYSxcclxuICAgICAgICAvL2NhcmdvLFxyXG4gICAgICAgIGNpLFxyXG4gICAgICAgIG5vbWJyZSxcclxuICAgICAgICBhcF9wYXRlcm5vLFxyXG4gICAgICAgIGFwX21hdGVybm8sXHJcbiAgICAgICAgc2V4byxcclxuICAgICAgICBmZWNoYV9uYWNpbWllbnRvLFxyXG4gICAgICAgIGRpcmVjY2lvbixcclxuICAgICAgICBjZWx1bGFyLFxyXG4gICAgICAgIHRlbGZfcmVmZXJlbmNpYSxcclxuICAgICAgICAvL2VzdGFkbyxcclxuICAgICAgICAvL2F2YXRhclxyXG4gICAgfSl7XHJcbiAgICAgICAgcmV0dXJuIFVzdWFyaW9zLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgICAgICAgc3Vic2lzdGVtYTogc3Vic2lzdGVtYSxcclxuICAgICAgICAgICAgICAgIC8vY2FyZ286IGNhcmdvLFxyXG4gICAgICAgICAgICAgICAgY2k6IGNpLFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlOiBub21icmUsXHJcbiAgICAgICAgICAgICAgICBhcF9wYXRlcm5vOiBhcF9wYXRlcm5vLFxyXG4gICAgICAgICAgICAgICAgYXBfbWF0ZXJubzogYXBfbWF0ZXJubyxcclxuICAgICAgICAgICAgICAgIHNleG86IHNleG8sXHJcbiAgICAgICAgICAgICAgICBmZWNoYV9uYWNpbWllbnRvOiBmZWNoYV9uYWNpbWllbnRvLFxyXG4gICAgICAgICAgICAgICAgZGlyZWNjaW9uOiBkaXJlY2Npb24sXHJcbiAgICAgICAgICAgICAgICBjZWx1bGFyOiBjZWx1bGFyLFxyXG4gICAgICAgICAgICAgICAgdGVsZl9yZWZlcmVuY2lhOiB0ZWxmX3JlZmVyZW5jaWEsXHJcbiAgICAgICAgICAgICAgICAvL2VzdGFkbzogZXN0YWRvLFxyXG4gICAgICAgICAgICAgICAgLy9hdmF0YXI6IGF2YXRhclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlbW92ZVVzID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndXBkYXRlLnJlbW92ZVVzJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZWxpbWluYWRvOiB7dHlwZTogQm9vbGVhbn0sXHJcbiAgICAgICAgcHJvcGlldGFyaW9fZWxpbToge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgZmVjaGFfZWxpbToge3R5cGU6IERhdGUsIG9wdGlvbmFsOiB0cnVlfSxcclxuICAgICAgICBlc3RhZG86IHt0eXBlOiBCb29sZWFufVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBlbGltaW5hZG8sIHByb3BpZXRhcmlvX2VsaW0sIGZlY2hhX2VsaW0sIGVzdGFkb30pe1xyXG4gICAgICAgIHJldHVybiBVc3Vhcmlvcy51cGRhdGUoe1xyXG4gICAgICAgICAgICBfaWQ6aWRcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICBlbGltaW5hZG86IGVsaW1pbmFkbyxcclxuICAgICAgICAgICAgICAgIHByb3BpZXRhcmlvX2VsaW06IHByb3BpZXRhcmlvX2VsaW0sXHJcbiAgICAgICAgICAgICAgICBmZWNoYV9lbGltOiBmZWNoYV9lbGltLFxyXG4gICAgICAgICAgICAgICAgZXN0YWRvOiBlc3RhZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGb3JldmVyVXMgPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6ICdyZW1vdmUuZm9yZXZlci51cycsXHJcbiAgICB2YWxpZGF0ZTogbmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgaWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGNpOiB7dHlwZTogU3RyaW5nfVxyXG4gICAgfSkudmFsaWRhdG9yKCksXHJcbiAgICBydW4oe2lkLCBjaX0pe1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFVzdWFyaW9zLnJlbW92ZSh7X2lkOiBpZH0pLFxyXG4gICAgICAgICAgICBDbGF2ZVJlZ2lzdHJvLnJlbW92ZSh7Y2k6Y2l9KVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FyZ29VcyA9IG5ldyBWYWxpZGF0ZWRNZXRob2Qoe1xyXG4gICAgbmFtZTogJ3VwZGF0ZS5jYXJnb1VzJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICBpZDoge3R5cGU6IFN0cmluZ30sXHJcbiAgICAgICAgLy9jYXJnbzoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtpZCwgY2FyZ299KXtcclxuICAgICAgICByZXR1cm4gVXN1YXJpb3MudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIF9pZDogaWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBjYXJnbzogY2FyZ29cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUF2YXRhclVzID0gbmV3IFZhbGlkYXRlZE1ldGhvZCh7XHJcbiAgICBuYW1lOiAndXBkYXRlLmF2YXRhclVzJyxcclxuICAgIHZhbGlkYXRlOiBuZXcgU2ltcGxlU2NoZW1hKHtcclxuICAgICAgICB1c2VySWQ6IHt0eXBlOiBTdHJpbmd9LFxyXG4gICAgICAgIGF2YXRhcjoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHt1c2VySWQsIGF2YXRhcn0pe1xyXG4gICAgICAgIHJldHVybiBVc3Vhcmlvcy51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWRcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAkc2V0OntcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlcklkPSBuZXcgVmFsaWRhdGVkTWV0aG9kKHtcclxuICAgIG5hbWU6J3VwZGF0ZS51c2VySWQnLFxyXG4gICAgdmFsaWRhdGU6bmV3IFNpbXBsZVNjaGVtYSh7XHJcbiAgICAgICAgY2k6e3R5cGU6U3RyaW5nfSxcclxuICAgICAgICB1c2VySWQ6e3R5cGU6U3RyaW5nfSxcclxuICAgICAgICB1c2VyOiB7dHlwZTogU3RyaW5nfSxcclxuICAgICAgICBwYXNzd29yZDoge3R5cGU6IFN0cmluZ31cclxuICAgIH0pLnZhbGlkYXRvcigpLFxyXG4gICAgcnVuKHtjaSx1c2VySWQsIHVzZXIsIHBhc3N3b3JkfSl7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgVXN1YXJpb3MudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIGNpOmNpXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgJHNldDp7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgLy9DbGF2ZVJlZ2lzdHJvLnJlbW92ZSh7Y2k6Y2l9KVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCBwdWJzIGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuanMnO1xuLy9BRE1JTklTVFJBRE9SXG4gICAgLy9VU1VBUklPU1xuICAgIGltcG9ydCB7IGluc2VydFVzdWFyaW8sIGNsYXZlUmVnLCB1cGRhdGVFc3RhZG9VcywgdXBkYXRlVXN1YXJpbywgdXBkYXRlUmVtb3ZlVXMsIHJlbW92ZUZvcmV2ZXJVcywgdXBkYXRlQ2FyZ29VcywgdXBkYXRlQXZhdGFyVXMsIHVwZGF0ZVVzZXJJZCwgdXBkYXRlUm9sZXNVcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfdXNlcnMuanMnO1xuICAgIC8vQ0FSR09TXG4gICAgaW1wb3J0IHsgaW5zZXJ0Q2FyZ28sIHVwZGF0ZUNhcmdvLCB1cGRhdGVDYXJnb05yb1VzLCByZW1vdmVDYXJnbyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfY2FyZ29zLmpzJztcbiAgICAvL01FRElDT1NcbiAgICBpbXBvcnQgeyBpbnNlcnRNZWRpY28sIHVwZGF0ZU1lZGljbywgdXBkYXRlTWVkaWNvVXMsIHJlbW92ZU1lZGljbywgdXBkYXRlTWVkaWNvRXNwIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19tZWRpY29zLmpzJztcbiAgICAvL0NPTlNVTFRPUklPU1xuICAgIGltcG9ydCB7IGluc2VydENvbnN1bHRvcmlvLCByZW1vdmVDb25zdWx0b3JpbywgdXBkYXRlQ29uc3VsdG9yaW8sIHVwZGF0ZUFjdGl2Q29uc3VsdG9yaW8gfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX2NvbnN1bHRvcmlvLmpzJztcbiAgICAvL0VNUFJFU0FTXG4gICAgaW1wb3J0IHsgaW5zZXJ0RW1wcmVzYSwgdXBkYXRlRW1wcmVzYSwgcmVtb3ZlRW1wcmVzYSB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfZW1wcmVzYXMuanMnO1xuICAgIC8vVFVSTk9TXG4gICAgaW1wb3J0IHsgaW5zZXJ0VHVybm8sIHVwZGF0ZVR1cm5vLCByZW1vdmVUdXJubyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfdHVybm9zJztcbiAgICAvL1NBTEFTXG4gICAgaW1wb3J0IHsgaW5zZXJ0U2FsYSwgdXBkYXRlU2FsYSwgcmVtb3ZlU2FsYSwgaW5zZXJ0Q2FtYSwgdXBkYXRlQ2FtYSwgcmVtb3ZlQ2FtYSwgaW5zZXJ0U2VydmljaW8sIHVwZGF0ZVNlcnZpY2lvLCByZW1vdmVTZXJ2aWNpbyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfc2FsYXMnO1xuXG5cbi8vRklDSEFKRVxuICAgIC8vUEFDSUVOVEVTXG4gICAgaW1wb3J0IHsgaW5zZXJ0UGFjaWVudGUsIHVwZGF0ZVBhY2llbnRlLCB1cGRhdGVQYXJ0QXNlZywgcmVtb3ZlQXNlZ0RlcCwgcmVtb3ZlQXNlZ1RpdCB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfcGFjaWVudGVzLmpzJztcbiAgICAvL0ZJQ0hBU1xuICAgIGltcG9ydCB7IGluc2VydEZpY2hhLCB2ZW50YUZpY2hhLCB1cGRhdGVFc3RhZG9GaWNoYSwgdXBkYXRlRXN0YWRvRmljaGFNZWQsIHVwZGF0ZUVsaW1GaWNoYSwgaW5zZXJ0UmVwb3J0ZUZpY2hhLCB1cGRhdGVSZXBvcnRlRmljaGEsIHVwZGF0ZU1lZEZpY2hhLCBpbnNlcnRGaWNoYUZhcm1hY2lhLCB1cGRhdGVFbGltRmljaGFGYXJtLCB1cGRhdGVGaWNoYUZhcm1hY2lhLCB1cGRhdGVFc3RhZG9GaWNoYUVuZiwgdXBkYXRlRmluQ29uc0ZpY2hhRW5mLCB1cGRhdGVIaXN0TGxlbmFGaWNoYU1lZCwgdXBkYXRlUHJlY2lvRmljaGFFbmYsIGluc2VydEZpY2hhSW50ZXJuYWNpb24sIHJlbW92ZUZpY2hhSW50ZXJuYWNpb24sIHVwZGF0ZVByZWNpb0ZpY2hhSW50ZXJuYWNpb24sIHVwZGF0ZVJlcG9ydGVGaWNoYUludGVybmFjaW9uLCBpbnNlcnREZXRhbGxlRmljaGEsIHVwZGF0ZVByZWNpb0RldGFsbGVGaWNoYSwgcmVtb3ZlRGV0YWxsZUZpY2hhLCByZW1vdmVBbGxEZXRhbGxlRmljaGEgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX2ZpY2hhcy5qcyc7XG5cblxuLy9DT05UQUJJTElEQURcbiAgICAvL1BMQU4gREUgQ1VFTlRBU1xuICAgIGltcG9ydCB7IGluc2VydFBsYW5DdWVudGEsIHJlbW92ZVBsYW5DdWVudGEsIHVwZGF0ZVBsYW5DdWVudGEgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX3BsYW5fY3VlbnRhcy5qcyc7XG4gICAgLy9DT01QUk9CQU5URVNcbiAgICBpbXBvcnQgeyBpbnNlcnRDb21wcm9iYW50ZSwgaW5zZXJ0RXN0YWRvQ29udGEsIHVwZGF0ZUVzdGFkb0NvbnRhIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19jb21wcm9iYW50ZXMuanMnO1xuICAgIC8vTUFZT1JFU1xuICAgIGltcG9ydCB7IGluc2VydE1heW9yLCB1cGRhdGVNYXlvciwgdXBkYXRlVG90YWxlc01heW9yIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19tYXlvcmVzLmpzJztcbiAgICAvL0VTVEFET1MgRklOQU5DSUVST1NcbiAgICBpbXBvcnQgeyBFc3RhZG9zRmluYW5jaWVyb3MsIHVwZGF0ZUVzdGFkb0ZpbmFuY2llcm8sIHJlbW92ZUVzdGFkb0ZpbmFuY2llcm8gfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX2VzdGFkb3NfZmluYW5jaWVyb3MuanMnO1xuXG4vL01FRElDT1xuICAgIGltcG9ydCB7IGNyZWF0ZUhpc3RvcmlhbCwgdXBkYXRlSGlzdG9yaWFsLCBpbnNlcnRDb25zdWx0YSwgaW5zZXJ0SW50ZXJuYWNpb25QYWNpZW50ZSwgaW5zZXJ0UmVjZXRhLCBpbnNlcnREaWFnbm9zdGljbywgaW5zZXJ0SW50ZXJuYWNpb24sIGluc2VydEV2b2x1Y2lvblBhY2llbnRlLCBpbnNlcnRJbmRpY2FjaW9uTWVkaWNhLCBpbnNlcnRFcGljcmlzaXNNZWRpY2EsIGluc2VydENpcnVnaWFNZWRpY2EsIGluc2VydFF1aXJvZmFubywgdXBkYXRlRWRpdFF1aXJvZmFubywgdXBkYXRlUXVpcm9mYW5vLCByZW1vdmVRdWlyb2Zhbm8sIHVwZGF0ZUFsdGFNZWRpY2FJbnRlcm5hY2lvbiwgdXBkYXRlQWRtaXNpb25JbnRlcm5hY2lvbiwgaW5zZXJ0Q29uc3VsdGFFbmZlcm1lcmlhLCB1cGRhdGVBbHRhRW5mZXJtZXJpYUludGVybmFjaW9uLCBpbnNlcnRJbmRpY2FjaW9uRW5mZXJtZXJpYSwgdXBkYXRlUGFnb0VuZmVybWVyaWFJbnRlcm5hY2lvbiwgaW5zZXJ0U2lnbm9zVml0YWxlcywgaW5zZXJ0UGFydG9zLCB1cGRhdGVSZXBvcnRhZG9JbnRlcm5hY2lvbiB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2NvbGxlY3Rpb25zL21ldGhvZHNfaGlzdG9yaWFsZXMuanMnO1xuXG5cbi8vRkFSTUFDSUFcbiAgICBpbXBvcnQgeyBpbnNlcnRNZWRpY2FtZW50bywgdXBkYXRlTWVkaWNhbUNhbnQsIHVwZGF0ZU1lZGljYW1lbnRvLCByZW1vdmVNZWRpY2FtZW50bywgaW5zZXJ0Q29tcHJhTWVkaWNhbWVudG8sIGluc2VydFZlbnRhTWVkaWNhbWVudG8sIHVwZGF0ZVN0b2NrTWVkaWNhbSwgaW5zZXJ0UmVwb3J0ZUZhcm1hY2lhLCB1cGRhdGVSZXBvcnRlRmFybWFjaWEsIGRldm9sdWNpb25NZWRpY2FtRmFybWFjaWEsIGRldm9sdWNpb25WZW50YUZhcm1hY2lhLCBpbnNlcnRDbGllbnRlLCB1cGRhdGVDbGllbnRlLCB1cGRhdGVDbGllbnRlVmVudGEsIGluc2VydExpbmVhLCB1cGRhdGVMaW5lYSwgcmVtb3ZlTGluZWEgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9jb2xsZWN0aW9ucy9tZXRob2RzX21lZGljYW1lbnRvcy5qcyc7XG5cbi8vUk9MRVNcbiAgICBpbXBvcnQgeyBpbnNlcnRSb2xlcywgZWRpdFJvbGVzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvY29sbGVjdGlvbnMvbWV0aG9kc19yb2xlcy5qcyc7XG5cbnB1YnMoKTtcblxuXG4vKlxudmFyIGlwID0gXCIwLjAuMC4wXCI7XG5NZXRlb3Iub25Db25uZWN0aW9uKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICBjb25zb2xlLmxvZyhVc3Vhcmlvcy5maW5kKHt9KSk7XG4gICAgY29uc29sZS5sb2coY29ubi5jbGllbnRBZGRyZXNzKTtcbiAgICBjb25zb2xlLmxvZyhjb25uLmh0dHBIZWFkZXJzLmhvc3QpO1xufSk7Ki9cbiJdfQ==
