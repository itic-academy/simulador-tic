const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  social:'https://drive.google.com/file/d/1u1jANDbBZnjYlRpUT3-76IzULfF-h_Ln/view?usp=drivesdk',
  eu:'https://drive.google.com/file/d/1FAP2AizgAOnbPYOugoWDgThYwZJKCe-C/view?usp=drivesdk',
  presupuesto:'https://drive.google.com/file/d/1-JS2zo4isD-ee9n3qV7aL09eVo3SFvbO/view?usp=drivesdk',
  datos:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',
  procedimiento:'https://drive.google.com/file/d/1udgdZkXvySDbtPmQHlKDscTFEfUbCbdz/view?usp=drivesdk',
  procedimientoA2:'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk'
};
const records=[
 [5456,[16],['I-5'],['dependencia','autonomía personal','Ley 39/2006','discapacidad'],[
  {url:'https://www.boe.es/eli/es/l/2006/12/14/39/con',referencia:'Ley 39/2006, texto consolidado vigente a 12-11-2026, art. 2.2: situación de dependencia es el estado de carácter permanente en que las personas, por dificultades que afectan a su autonomía, precisan cuidados y apoyos o ayudas importantes para actividades de la vida diaria. El artículo fue modificado en octubre de 2026.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 16: estructura social, discapacidad y dependencia.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.5: discapacidad y dependencia, régimen jurídico.'},
  {url:drive.social,referencia:'ITIC Academy, Tema 016 — Estructura social, versión 1.4: mapa curricular de discapacidad y dependencia.'}
 ],null,'La definición vigente fue modificada en octubre de 2026. Se actualiza la pregunta y sus opciones a la redacción actual del artículo 2.2: el elemento definitorio es el estado de carácter permanente; se suprimen de la respuesta correcta los requisitos detallados de la redacción antigua y se incorporan los actuales «cuidados y apoyos» y las actividades de la vida diaria. La opción A pasa a ser la correcta.','corregida'],
 [5457,[5],[],['Unión Europea','Defensor del Pueblo Europeo','mandato','Tratado de Funcionamiento de la UE'],[
  {url:'https://eur-lex.europa.eu/eli/treaty/tfeu_2016/art_228/oj',referencia:'TFUE, art. 228.2: el Defensor del Pueblo Europeo es elegido tras cada elección del Parlamento Europeo por la duración de su mandato.'},
  {url:'https://eur-lex.europa.eu/eli/treaty/teu_2016/art_14/oj',referencia:'TUE, art. 14.3: el Parlamento Europeo es elegido por un período de cinco años; combinado con el art. 228.2 TFUE determina la duración del mandato del Defensor.'},
  {url:'https://www.europarl.europa.eu/factsheets/en/sheet/18/the-court-of-justice-of-the-european-union',referencia:'Parlamento Europeo, ficha institucional: el Defensor es elegido tras cada elección europea y desempeña el cargo durante la legislatura parlamentaria.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 5: tratados, derecho e instituciones de la Unión Europea.'},
  {url:drive.eu,referencia:'ITIC Academy, bloque Unión Europea, Tema 005 (A1) 2026: mapa curricular de instituciones y tratados de la Unión.'}
 ],null,'La respuesta C es correcta. El artículo 228.2 TFUE vincula el mandato del Defensor del Pueblo Europeo a la duración del mandato del Parlamento Europeo; el artículo 14.3 TUE establece que el Parlamento es elegido por cinco años.','vigente'],
 [5458,[12],[],['presupuestos','pagos a justificar','Ley General Presupuestaria','cajas pagadoras'],[
  {url:'https://www.boe.es/eli/es/l/2003/11/26/47/con',referencia:'Ley 47/2003, art. 79.1: contempla propuestas de pagos presupuestarios con fondos librados a justificar; por ello no tienen carácter extrapresupuestario.'},
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1996-2627',referencia:'Orden de 1 de febrero de 1996, Instrucción de operatoria contable, normas de pagos a justificar: documento ADOK/OK a favor de la Caja Pagadora para que efectúe los pagos a acreedores finales.'},
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-1987-12158',referencia:'Real Decreto 640/1987, sobre pagos librados a justificar: reglas de expedición, gestión y justificación de estos fondos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 12: presupuestos generales del Estado, clasificación del gasto, ejecución y control.'},
  {url:drive.presupuesto,referencia:'ITIC Academy, Tema 012 — Presupuestos, versión 3.2: mapa curricular de ejecución presupuestaria y operatoria del gasto.'}
 ],null,'La opción A es la incorrecta: el artículo 79.1 de la Ley 47/2003 los denomina expresamente «pagos presupuestarios»; no son provisiones extrapresupuestarias. Esa naturaleza extrapresupuestaria y permanente corresponde a los anticipos de caja fija. Los pagos a justificar pueden librarse a cajas pagadoras y atender obligaciones con cargo a los créditos aplicables, incluidos los capítulos 2 y 6, con la justificación posterior prevista en la normativa.','corregida'],
 [5459,[27],['I-7'],['protección de datos','delegado de protección de datos','DPD','LOPDGDD art. 34'],[
  {url:'https://www.boe.es/eli/es/lo/2018/12/05/3/con',referencia:'LO 3/2018, art. 34.1, letras b, c, l y excepción de la letra l: designación obligatoria para colegios profesionales, universidades públicas, centros sanitarios obligados a mantener historias clínicas; se exceptúan profesionales sanitarios que ejerzan individualmente.'},
  {url:'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679',referencia:'Reglamento (UE) 2016/679, art. 37.1: designación obligatoria para autoridades u organismos públicos y otros supuestos establecidos en el Reglamento.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 27: RGPD, obligaciones, delegado de protección de datos y AEPD.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.7: régimen de protección de datos, DPD y autoridades.'},
  {url:drive.datos,referencia:'ITIC Academy, Protección de Datos, A1-27/A1-82/A2-I.7, 2026: mapa curricular para RGPD, DPD y LOPDGDD.'}
 ],null,'La respuesta C es correcta por la excepción expresa del artículo 34.1.l de la LO 3/2018: aunque el profesional sanitario individual esté legalmente obligado a mantener historias clínicas, queda exceptuado de la obligación específica de designar DPD prevista para centros sanitarios. AEPD y universidades públicas son organismos/autoridades públicas; los colegios profesionales aparecen expresamente entre los obligados en la ley orgánica.','vigente'],
 [5460,[8,22],['I-8','I-9'],['Ley 39/2015','relación electrónica','personas jurídicas','artículo 14'],[
  {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015, art. 14.2.a: las personas jurídicas están obligadas a relacionarse electrónicamente con las Administraciones Públicas para cualquier trámite de un procedimiento administrativo; el art. 14.1 permite elegir el canal solo a personas físicas no obligadas.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 8 y 22: procedimiento y relación con la ciudadanía; sociedad de la información y administración electrónica.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.8 e I.9: procedimiento administrativo común y gestión electrónica de procedimientos.'},
  {url:drive.procedimiento,referencia:'ITIC Academy, Tema 008 — Régimen jurídico y procedimiento administrativo: mapa curricular de la Ley 39/2015.'},
  {url:drive.procedimientoA2,referencia:'ITIC Academy, material A2 sobre actuación administrativa electrónica, 2026: cobertura curricular de procedimiento y obligación de relación electrónica.'}
 ],null,'La opción B es correcta y reproduce el artículo 14.2.a de la Ley 39/2015: las personas jurídicas están obligadas a utilizar medios electrónicos para cualquier trámite de un procedimiento. La opción D añade una condición de disponibilidad que el artículo 14.2 no impone a las personas jurídicas; el artículo 14.3 permite extender reglamentariamente la obligación a determinados colectivos de personas físicas.','vigente']
];
const edits={
 5456:{texto:'De acuerdo con la redacción vigente del artículo 2.2 de la Ley 39/2006, de promoción de la autonomía personal y atención a las personas en situación de dependencia, se entiende por situación de dependencia:',opciones:['El estado de carácter permanente en el que las personas, debido a dificultades que afectan a su autonomía, precisan de cuidados y apoyos de otra u otras personas o ayudas importantes para realizar actividades de la vida diaria.','El estado de carácter temporal en el que las personas precisan exclusivamente atención de otra persona para realizar actividades básicas de la vida diaria.','La pérdida temporal de autonomía causada únicamente por enfermedad o accidente laboral.','La necesidad de ayudas económicas, con independencia de que existan dificultades de autonomía personal.'],respuesta_correcta:0},
 5458:{texto:'Conforme a la Ley 47/2003, General Presupuestaria, señale la afirmación INCORRECTA sobre los pagos a justificar:',opciones:['Son provisiones de fondos de carácter extrapresupuestario y permanente.','Las propuestas de pago a justificar pueden librarse a favor de cajas pagadoras para que efectúen los pagos a acreedores finales.','Pueden atender pagos presupuestarios imputables a créditos del capítulo 2, conforme a las normas aplicables.','Pueden atender pagos presupuestarios imputables a créditos del capítulo 6, conforme a las normas aplicables.']},
 5459:{texto:'Según el artículo 34 de la Ley Orgánica 3/2018, ¿cuál de las siguientes entidades o personas está exceptuada de la obligación de designar un delegado de protección de datos?',opciones:['La Agencia Española de Protección de Datos.','Un colegio profesional, como el Ilustre Colegio de Abogados de Madrid.','Un profesional de la salud que ejerce a título individual, aunque esté legalmente obligado a mantener historias clínicas.','Una universidad pública.']},
 5460:{texto:'Según el artículo 14 de la Ley 39/2015, ¿cuál de las siguientes afirmaciones es correcta en relación con las personas jurídicas?'}
};
const logFile=path.join(__dirname,'cambios-lote-1027.json');
if(!fs.existsSync(logFile))aplicar({numero:'1027',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5456:'ITIC Academy, Tema 016 — Estructura social, versión 1.4: mapa curricular de discapacidad y dependencia.',
 5457:'ITIC Academy, bloque Unión Europea, Tema 005 (A1) 2026: mapa curricular de instituciones y tratados europeos.',
 5458:'ITIC Academy, Tema 012 — Presupuestos, versión 3.2: mapa curricular de ejecución del gasto y operatoria presupuestaria.',
 5459:'ITIC Academy, Protección de Datos, A1-27/A1-82/A2-I.7, 2026: mapa curricular de RGPD, DPD y LOPDGDD.',
 5460:'ITIC Academy, Tema 008 — Régimen jurídico y procedimiento administrativo y material A2 2026 de actuación electrónica: mapa curricular de la Ley 39/2015.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con los programas oficiales A1/A2 vigentes. La academia se utiliza como mapa curricular, no como fuente normativa primaria.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
