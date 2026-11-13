const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1192',fecha:'2026-11-13',records:[
 [6281,['57','132'],['IV-6'],['hipervisor tipo 2','virtualización','hipervisor alojado'],[
  src('https://download.virtualbox.org/virtualbox/7.0.10/UserManual.pdf','Oracle VM VirtualBox 7.0 User Manual, §1.3: identifica VirtualBox como hipervisor alojado (tipo 2); requiere un sistema operativo existente y funciona junto a las aplicaciones del host.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 57 (virtualización de servidores) y 132 (virtualización de sistemas y centros de datos).'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.6: virtualización/consolidación de servidores y recursos en CPD.')
 ],null,'La opción de hipervisor tipo 2 es la que se ejecuta sobre un sistema operativo convencional. Se elimina la referencia temporal “en fase de diseño (julio 2023)”, irrelevante y caducada; se distingue del hipervisor tipo 1, que se ejecuta directamente sobre el hardware.','corregida'],
 [6282,['24'],['I-8'],['TREBEP','RDL 5/2015','clases de empleados públicos'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719&lang=es&p=20250730&tn=1','Texto refundido del Estatuto Básico del Empleado Público, art. 8.2, texto consolidado consultado: funcionarios de carrera, funcionarios interinos, personal laboral (fijo, por tiempo indefinido o temporal) y personal eventual.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 24: empleo público y Estatuto Básico del Empleado Público.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Estatuto Básico del Empleado Público.')
 ],null,'La opción B reproduce las cuatro clases del artículo 8.2 TREBEP. Se mantiene la respuesta; la expresión legal del personal laboral es «fijo, por tiempo indefinido o temporal», que no convierte al personal laboral indefinido en una quinta clase separada.','vigente'],
 [6283,['9'],['I-8'],['Ley 39/2015','recurso de alzada','recurso extraordinario de revisión','artículo 122'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&lang=es&p=20261001&tn=1','Ley 39/2015, art. 122.3, texto consolidado consultado: contra la resolución de alzada no cabe otro recurso administrativo salvo el extraordinario de revisión en los supuestos del art. 125.1.'),
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&lang=es&p=20261001&tn=1#art125','Ley 39/2015, art. 125.1: causas tasadas del recurso extraordinario de revisión contra actos firmes en vía administrativa.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 9: revisión de actos en vía administrativa y recursos administrativos.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: Ley 39/2015 y procedimiento administrativo.')
 ],null,'La opción C es correcta: la alzada agota la vía administrativa en cuanto a recursos ordinarios, sin perjuicio del recurso extraordinario de revisión en las causas tasadas del artículo 125.1 ni de la impugnación jurisdiccional que proceda. No procede reposición contra la resolución de alzada.','vigente'],
 [6284,['8'],['I-8'],['Ley 39/2015','acto administrativo','forma electrónica','artículo 36'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&lang=es&p=20261001&tn=1#art36','Ley 39/2015, art. 36.1, texto consolidado: los actos se producirán por escrito a través de medios electrónicos, salvo que su naturaleza exija otra forma más adecuada de expresión y constancia.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 8: régimen jurídico y procedimiento administrativo.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.8: procedimiento administrativo común.')
 ],null,'La opción C recoge la regla del artículo 36.1: forma escrita y medios electrónicos, salvo excepción justificada por la naturaleza del acto. El apartado 2 contempla la actuación verbal de órganos administrativos y cómo dejar constancia escrita cuando sea necesaria; no desplaza la regla general preguntada.','vigente'],
 [6285,['5'],[],['Unión Europea','Comisión Europea','artículo 17 TUE','interés general'],[
  src('https://eur-lex.europa.eu/eli/treaty/teu_2016/oj?locale=es','Tratado de la Unión Europea, versión consolidada en español, art. 17.1: la Comisión promoverá el interés general de la Unión y tomará las iniciativas adecuadas para ello.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 5: instituciones de la Unión Europea, incluida la Comisión.'),
  src(a2,'La convocatoria GSI A2 2025 no incluye un tema específico de instituciones de la Unión Europea en su programa general; se deja A2 sin asignación para respetar el temario oficial.')
 ],null,'La Comisión Europea es la institución a la que el artículo 17.1 TUE atribuye promover el interés general de la Unión y tomar las iniciativas adecuadas. No se asigna tema A2 porque el programa oficial de esa convocatoria no contempla este epígrafe de la UE.','vigente']
],edits:{
 6281:{texto:'¿Qué caracteriza a un hipervisor de tipo 2 (alojado)?',opciones:['Se ejecuta directamente sobre el hardware y sustituye al sistema operativo host.','Es una tecnología que seguía en fase de diseño en julio de 2023.','Se ejecuta sobre un sistema operativo convencional como una capa de software o aplicación.'],respuesta_correcta:2}
}});
