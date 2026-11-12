const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5446,[13],[],['medio propio personificado','LCSP','control análogo','actividad mínima','capital público'],[
  {url:'https://www.boe.es/eli/es/l/2017/11/08/9/con',referencia:'Ley 9/2017 consolidada, art. 32.2: control análogo; más del 80 % de actividad confiada; si la persona jurídica es privada, capital o patrimonio íntegramente público; reconocimiento estatutario y medios adecuados.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 13: convenios, encargos a medios propios personificados y límites en su utilización.'},
  {url:'https://drive.google.com/file/d/15iDnkvIJUZS9SV3-acSMi10Ta0lwsLbV/view?usp=drivesdk',referencia:'ITIC Academy, Temas 011 y 039 — Contratación Pública, versión 3.1: cobertura curricular de la LCSP y encargos a medios propios.'},
  {url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC 2026: mapa curricular de contratación pública.'}
 ],null,'La opción A es un requisito del art. 32.2.a LCSP. No son correctas las alternativas: la letra b exige que más del 80 % de la actividad se realice en cometidos confiados, no basta un umbral del 70 % (límite de mercado del 30 %); y si el medio tiene personificación jurídico-privada, la letra c exige titularidad o aportación pública de la totalidad del capital o patrimonio, no admite una participación privada del 20 %. El artículo fija además otros requisitos acumulativos.','corregida'],
 [5447,[14],[],['balanza de pagos','cuenta de capital','transferencias de capital','subvenciones UE'],[
  {url:'https://www.bde.es/webbe/es/estadisticas/recursos/glosario/conceptos/cuenta-capital.html',referencia:'Banco de España, glosario Cuenta de capital (Balanza de Pagos): incluye transferencias de capital, con ejemplo explícito de las recibidas por las Administraciones Públicas desde la UE.'},
  {url:'https://ec.europa.eu/eurostat/cache/metadata/en/bop_6_esms.htm',referencia:'Eurostat, metodología BOP BPM6: la cuenta corriente incluye transferencias corrientes/ingreso secundario; la cuenta de capital incluye transferencias de capital, entre ellas subvenciones a la inversión.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 14: economía española, comercio exterior y balanza de pagos.'},
  {url:'https://drive.google.com/file/d/1hhb-Ec62dHxA7I6s2Gd7W8v1ID5asaOQ/view?usp=drivesdk',referencia:'ITIC Academy, Tema 014 — Modelo económico, versión 1.3: encaje curricular de balanza de pagos y cuentas exteriores.'}
 ],null,'Se cambia la clave a B y se precisa el supuesto: una transferencia de capital de la UE a una Administración Pública, como una subvención destinada a inversión, se registra en la cuenta de capital. “Sin contrapartida” por sí solo no determina la cuenta: si la transferencia es corriente, se registra en el ingreso secundario de la cuenta corriente. La clasificación depende de la naturaleza económica de la transferencia.','corregida'],
 [5448,[8,22],['I-3'],['Ley 39/2015','notificaciones administrativas','notificación electrónica','artículo 41'],[
  {url:'https://www.boe.es/eli/es/l/2015/10/01/39/con',referencia:'Ley 39/2015 consolidada, art. 41.1, 41.2 y 41.7: preferencia por notificación electrónica, excepciones, obligación reglamentaria para ciertos colectivos y prevalencia de la primera fecha cuando se notifica por varios cauces.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 8 (procedimiento administrativo y relación con la ciudadanía) y 22 (sociedad de la información y administración electrónica).'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.3: Leyes de procedimiento administrativo y gestión electrónica de los procedimientos.'},
  {url:'https://drive.google.com/file/d/1udgdZkXvySDbtPmQHlKDscTFEfUbCbdz/view?usp=drivesdk',referencia:'ITIC Academy, Tema 008 — Régimen jurídico y procedimiento administrativo: mapa curricular de notificaciones y Ley 39/2015.'},
  {url:'https://drive.google.com/file/d/18TH2YS6iMsBWPdHnP_xv1E66R3AWNs2M/view?usp=drivesdk',referencia:'ITIC Academy, Ley 39 — aspectos TIC: material complementario sobre procedimiento y medios electrónicos.'}
 ],null,'La respuesta B es la falsa: el art. 41.1 de la Ley 39/2015 establece que las notificaciones se practicarán preferentemente por medios electrónicos y, en todo caso, cuando exista obligación de relacionarse por esa vía. Las otras afirmaciones reproducen, con el alcance del artículo, sus apartados 2.a, 1 y 7. Se corrige el error ortográfico del enunciado.','corregida'],
 [5449,[7],[],['Constitución Española','artículo 85','legislación delegada','decreto legislativo'],[
  {url:'https://www.boe.es/eli/es/c/1978/12/27/(1)/con',referencia:'Constitución Española, art. 85: las disposiciones del Gobierno que contengan legislación delegada reciben el título de Decretos Legislativos; el art. 86 regula, separadamente, los Decretos-leyes.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 7: fuentes del derecho administrativo y disposiciones del Gobierno con fuerza de ley, incluidos los decretos legislativos.'},
  {url:'https://drive.google.com/file/d/1hSLOrXs58mflxmMbOfWZoqvI05iZzTKT/view?usp=drivesdk',referencia:'ITIC Academy, Tema 007 — Fuentes del Derecho, versión 2025: materia de normas gubernamentales con fuerza de ley.'}
 ],null,'La respuesta A, Decretos Legislativos, es la denominación expresa del art. 85 de la Constitución para disposiciones que contienen legislación delegada. No debe confundirse con el Decreto-ley del art. 86, que el Gobierno dicta por extraordinaria y urgente necesidad.','corregida'],
 [5450,[11],[],['LCSP','contratos menores','artículo 118','expediente de contratación'],[
  {url:'https://www.boe.es/eli/es/l/2017/11/08/9/con',referencia:'Ley 9/2017 consolidada, art. 118.2–4: informe motivado de necesidad y no fraccionamiento, aprobación del gasto y factura, y presupuesto/proyecto en contrato menor de obras. La exigencia de acreditar el límite acumulado por contratista ya no figura en la redacción vigente.'},
  {url:'https://www.boe.es/eli/es/rdl/2020/02/04/3',referencia:'Real Decreto-ley 3/2020, disposición final primera: modificación del art. 118 LCSP con efectos desde el 6 de febrero de 2020; el texto anterior sobre contratos menores acumulados por contratista fue suprimido.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 11: Ley de Contratos del Sector Público, requisitos, expedientes, procedimientos y tipos.'},
  {url:'https://drive.google.com/file/d/15iDnkvIJUZS9SV3-acSMi10Ta0lwsLbV/view?usp=drivesdk',referencia:'ITIC Academy, Temas 011 y 039 — Contratación Pública, versión 3.1: cobertura de LCSP y expedientes.'},
  {url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',referencia:'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC 2026: mapa curricular de contratación pública.'}
 ],null,'La respuesta C es la incorrecta. La redacción vigente del art. 118, modificada por el Real Decreto-ley 3/2020, exige informe motivado sobre la necesidad y que no se altera el objeto para eludir umbrales, aprobación del gasto y factura; para obras añade presupuesto y, cuando proceda, proyecto. Ya no exige en ese artículo la antigua justificación de que el contratista no hubiera acumulado contratos menores por encima de una cifra. Se elimina la alusión a 50.000 euros como límite de suministros, que no corresponde al texto vigente del art. 118.','corregida']
];
const edits={
 5446:{texto:'Según el artículo 32 de la Ley 9/2017, ¿cuál de los siguientes es un requisito para que una entidad sea medio propio personificado?',opciones:['Que el poder adjudicador ejerza sobre la entidad un control análogo al que ejerce sobre sus propios servicios o unidades.','Que más del 70 % de la actividad de la entidad se realice por encargos del poder adjudicador.','Que la participación privada directa en el capital de una entidad de derecho privado pueda alcanzar el 20 %.','Todas las anteriores.']},
 5447:{texto:'En la balanza de pagos, ¿en qué cuenta se registran las transferencias de capital que reciben las Administraciones Públicas de la Unión Europea, como las destinadas a financiar inversiones?',respuesta_correcta:1},
 5448:{texto:'Según el artículo 41 de la Ley 39/2015, señale la afirmación FALSA sobre las notificaciones administrativas.'},
 5449:{texto:'Según el artículo 85 de la Constitución Española, las disposiciones del Gobierno que contengan legislación delegada reciben el título de:'},
 5450:{texto:'Según la redacción vigente del artículo 118 de la Ley 9/2017, de Contratos del Sector Público, sobre contratos menores, indique la respuesta INCORRECTA:',opciones:['Se requiere la aprobación del gasto y la incorporación de la factura correspondiente.','En el contrato menor de obras se añade el presupuesto, sin perjuicio de que exista proyecto cuando lo exijan las disposiciones vigentes.','Debe justificarse que el contratista no ha suscrito otros contratos menores cuyo importe acumulado supere los 15.000 euros si se trata de suministros.','El expediente exige un informe del órgano de contratación que justifique de forma motivada la necesidad y que no se altera el objeto para evitar los umbrales legales.']}
};
const logFile=path.join(__dirname,'cambios-lote-1025.json');
if(!fs.existsSync(logFile))aplicar({numero:'1025',fecha:'2026-11-12',records,edits});
const file=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(file,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5446:'ITIC Academy, Temas 011 y 039 Contratación Pública (versión 3.1) y bloque 05 Contratación, Presupuestos y Compra TIC 2026: encaje curricular de LCSP/medios propios.',
 5447:'ITIC Academy, Tema 014 Modelo económico (versión 1.3): encaje curricular de balanza de pagos y cuentas exteriores.',
 5448:'ITIC Academy, Tema 008 Régimen jurídico y procedimiento administrativo y material Ley 39 — aspectos TIC: encaje de notificaciones administrativas y electrónicas.',
 5449:'ITIC Academy, Tema 007 Fuentes del Derecho (versión 2025): encaje de normas gubernamentales con fuerza de ley.',
 5450:'ITIC Academy, Temas 011 y 039 Contratación Pública (versión 3.1) y bloque 05 Contratación, Presupuestos y Compra TIC 2026: encaje curricular de LCSP y expedientes.'
};
for(const c of log.cambios){const q=data.preguntas.find(x=>x.id===c.id),r=records.find(x=>x[0]===c.id);q.revision.estado=r[7];q.revision.observaciones=r[6];q.comentarios=r[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial A1/A2 vigente. Si no se indica tema A2, no se encontró un epígrafe explícito del programa GSI A2; la academia se usa como mapa curricular, no como fuente primaria.';c.actualizada=structuredClone(q)}
fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
