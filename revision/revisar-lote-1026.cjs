const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  interoperabilidad:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',
  interoperabilidadBase:'https://drive.google.com/file/d/1yCTWUEye96mUcx_SwiEJshldD-sV2hXS/view?usp=drivesdk',
  mercado:'https://drive.google.com/file/d/1MbkgLI-OZL3UYzcA-xJ5rahtwIIS7jU-/view?usp=drivesdk',
  responsabilidad:'https://drive.google.com/file/d/1nMocFgcbFRRXZ11VT9oFxj28c1IanEq7/view?usp=drivesdk',
  procedimiento:'https://drive.google.com/file/d/1udgdZkXvySDbtPmQHlKDscTFEfUbCbdz/view?usp=drivesdk',
  procTic:'https://drive.google.com/file/d/18TH2YS6iMsBWPdHnP_xv1E66R3AWNs2M/view?usp=drivesdk',
  fuentes:'https://drive.google.com/file/d/1hSLOrXs58mflxmMbOfWZoqvI05iZzTKT/view?usp=drivesdk',
  ce:'https://www.boe.es/eli/es/c/1978/12/27/(1)/con'
};
const records=[
 [5451,[46],['I-9','I-10'],['interoperabilidad','nodo de interoperabilidad','ENI','RD 203/2021'],[
  {url:'https://www.boe.es/eli/es/rd/2021/03/30/203/con',referencia:'RD 203/2021, anexo, definiciones: nodo de interoperabilidad es la entidad que presta servicios de interconexión técnica, organizativa y jurídica entre sistemas de información para un conjunto de Administraciones Públicas, bajo las condiciones que estas fijen.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 46: interoperabilidad de sistemas, ENI, NTI, documentos/expedientes e intercambio de datos.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.9 y I.10: ENI/NTI y cooperación interadministrativa, infraestructuras y servicios comunes.'},
  {url:drive.interoperabilidad,referencia:'ITIC Academy, 20_ITIC_Bloques_45_46_Interoperabilidad_2026_v2_ampliado: mapa curricular para ENI, nodos e intercambio entre Administraciones.'},
  {url:drive.interoperabilidadBase,referencia:'ITIC Academy, ITIC_Bloque Interoperabilidad 2026: material curricular de base para interoperabilidad de sistemas.'}
 ],null,'La respuesta correcta es C y coincide literalmente en lo sustancial con la definición del anexo del RD 203/2021. No debe confundirse un nodo con la capacidad de interoperabilidad (opción A) ni con el Sistema de Interconexión de Registros, infraestructura distinta. Se cotejó el ámbito en programas oficiales A1 y A2; la clasificación A2 se limita a interoperabilidad y cooperación electrónica expresamente incluidas.','vigente'],
 [5452,[17],[],['política de empleo','Sistema Nacional de Empleo','Sistema Público Integrado de Información','Ley 3/2023'],[
  {url:'https://www.boe.es/eli/es/l/2023/02/28/3',referencia:'Ley 3/2023, de Empleo, arts. 11.4.c y 14: el Sistema Público Integrado de Información de los Servicios de Empleo es instrumento de planificación y coordinación; el art. 14 lo define además como instrumento técnico de coordinación del Sistema Nacional de Empleo.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 17: mercado de trabajo y políticas públicas de empleo.'},
  {url:drive.mercado,referencia:'ITIC Academy, Tema 017 — Mercado de trabajo, versión 1.3: referencia curricular para Sistema Nacional de Empleo y políticas públicas.'}
 ],null,'Se mantiene como correcta la primera alternativa, pero se actualiza a la denominación legal vigente: «Sistema Público Integrado de Información de los Servicios de Empleo». La Ley 3/2023 lo enumera en el artículo 11.4.c entre los instrumentos de planificación y coordinación y lo califica en el artículo 14 como instrumento técnico de coordinación. La referencia antigua «Sistema de Información de los Servicios Públicos de Empleo» es imprecisa/obsoleta. Los planes PREPARA y de choque 2019–2021 no son el instrumento vigente que define la ley.','corregida'],
 [5453,[10],['I-8'],['responsabilidad patrimonial','dictamen consultivo','Consejo de Estado','Ley 39/2015 art. 81'],[
  {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015 consolidada, art. 81.2: dictamen preceptivo cuando la indemnización reclamada sea de cuantía igual o superior a 50.000 euros, o al umbral autonómico correspondiente, y en los casos previstos por la LO 3/1980.'},
  {url:'https://www.boe.es/eli/es/lo/1980/04/22/3/con',referencia:'Ley Orgánica 3/1980, del Consejo de Estado: supuestos adicionales de consulta preceptiva previstos en la propia ley orgánica.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 10: responsabilidad patrimonial y procedimiento.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.8: Leyes de Procedimiento Administrativo Común y de Régimen Jurídico del Sector Público.'},
  {url:drive.responsabilidad,referencia:'ITIC Academy, Tema 010 — Responsabilidad patrimonial v2: mapa curricular de la responsabilidad y su procedimiento.'}
 ],null,'La opción B es correcta, con la precisión de que el artículo 81.2 utiliza «igual o superior a 50.000 euros»; también se aplica el umbral que establezca la legislación autonómica y los supuestos previstos en la Ley Orgánica 3/1980. La pregunta se acota al dictamen del Consejo de Estado u órgano consultivo autonómico dentro del procedimiento de responsabilidad patrimonial.','corregida'],
 [5454,[8],['I-8'],['procedimiento administrativo','fases','Ley 39/2015','ordenación','instrucción'],[
  {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, título IV, capítulos II–V (arts. 54–95): iniciación, ordenación, instrucción y finalización; el art. 84 denomina «terminación» a los modos de terminación del procedimiento.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 8: procedimiento administrativo y relación de los ciudadanos con las Administraciones.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.8: procedimiento administrativo común.'},
  {url:drive.procedimiento,referencia:'ITIC Academy, Tema 008 — Régimen jurídico y procedimiento administrativo: mapa curricular de las fases del procedimiento.'},
  {url:drive.procTic,referencia:'ITIC Academy, material Ley 39 — aspectos TIC: cobertura curricular complementaria de procedimiento y gestión electrónica.'}
 ],null,'La opción A refleja las cuatro fases didácticas que corresponden a los capítulos II a V del título IV de la Ley 39/2015. Se cambia «finalización» por «terminación», término empleado en el artículo 84; el capítulo V se titula «Finalización del procedimiento». Las demás alternativas omiten fases o añaden la ejecución como fase general, que la Ley no presenta así.','corregida'],
 [5455,[7],[],['Constitución Española','tratados internacionales','publicación oficial','artículo 96.1'],[
  {url:drive.ce,referencia:'Constitución Española, art. 96.1: los tratados internacionales válidamente celebrados, una vez publicados oficialmente en España, forman parte del ordenamiento interno.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 7: fuentes del derecho administrativo y relación entre fuentes.'},
  {url:drive.fuentes,referencia:'ITIC Academy, Tema 007 — Fuentes del Derecho, versión 2025: mapa curricular para fuentes y tratados.'}
 ],null,'La respuesta D se conserva como opción pretendida, pero se corrige el enunciado para distinguir la incorporación al ordenamiento interno de la aplicabilidad directa de cada disposición. El artículo 96.1 CE dice que los tratados válidamente celebrados forman parte del ordenamiento una vez publicados oficialmente en España; la publicación no permite afirmar, sin matices, que todo precepto de cualquier tratado sea directamente aplicable.','corregida']
];
const edits={
 5451:{texto:'Según la definición del anexo del Real Decreto 203/2021, ¿qué se entiende por nodo de interoperabilidad?'},
 5452:{texto:'Según la Ley 3/2023, de Empleo, ¿cuál de los siguientes es un instrumento de planificación y coordinación de la política de empleo del Sistema Nacional de Empleo?',opciones:['El Sistema Público Integrado de Información de los Servicios de Empleo.','La Red estatal de agencias de colocación.','El Plan PREPARA.','El Plan de Choque por el Empleo Joven 2019–2021.']},
 5453:{texto:'En los procedimientos de responsabilidad patrimonial, ¿a partir de qué cuantía reclamada es preceptivo solicitar dictamen del Consejo de Estado o, en su caso, del órgano consultivo autonómico, conforme al artículo 81.2 de la Ley 39/2015?',opciones:['Cuando la cuantía sea igual o superior a 55.000 euros, sin perjuicio del umbral autonómico y de los supuestos de la Ley Orgánica 3/1980.','Cuando la cuantía sea igual o superior a 50.000 euros, sin perjuicio del umbral autonómico y de los supuestos de la Ley Orgánica 3/1980.','Cuando la cuantía sea igual o superior a 100.000 euros, sin perjuicio del umbral autonómico y de los supuestos de la Ley Orgánica 3/1980.','Cuando la cuantía sea igual o superior a 150.000 euros, sin perjuicio del umbral autonómico y de los supuestos de la Ley Orgánica 3/1980.']},
 5454:{opciones:['Iniciación, ordenación, instrucción y terminación.','Iniciación, desarrollo y resolución.','Iniciación, ordenación, instrucción, resolución y ejecución.','Iniciación, desarrollo y terminación.']},
 5455:{texto:'Según el artículo 96.1 de la Constitución Española, ¿qué requisito establece para que los tratados internacionales válidamente celebrados formen parte del ordenamiento interno?',opciones:['La ratificación del Congreso de los Diputados, con independencia de su publicación.','La firma de los ministros plenipotenciarios, con independencia de su publicación.','La publicación únicamente en el Diario Oficial de la Unión Europea.','Su publicación oficial en España.']}
};
const logFile=path.join(__dirname,'cambios-lote-1026.json');
if(!fs.existsSync(logFile))aplicar({numero:'1026',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5451:'ITIC Academy, 20_ITIC_Bloques_45_46_Interoperabilidad_2026_v2_ampliado y ITIC_Bloque Interoperabilidad 2026: mapa curricular de interoperabilidad, ENI y cooperación electrónica.',
 5452:'ITIC Academy, Tema 017 — Mercado de trabajo, versión 1.3: encaje curricular del Sistema Nacional de Empleo y políticas públicas de empleo.',
 5453:'ITIC Academy, Tema 010 — Responsabilidad patrimonial v2: encaje curricular de responsabilidad patrimonial y procedimiento.',
 5454:'ITIC Academy, Tema 008 — Régimen jurídico y procedimiento administrativo y material Ley 39 — aspectos TIC: encaje curricular del procedimiento común.',
 5455:'ITIC Academy, Tema 007 — Fuentes del Derecho, versión 2025: encaje curricular de las fuentes y tratados internacionales.'
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=records.find(x=>x[0]===c.id);
 q.clasificacion.bloque_academia=academy[c.id];
 q.clasificacion.nota='Cotejado con los programas oficiales A1/A2 vigentes. La academia se usa solo como mapa curricular, no como autoridad normativa.';
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
