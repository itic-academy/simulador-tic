const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
 economia:'https://drive.google.com/file/d/1hhb-Ec62dHxA7I6s2Gd7W8v1ID5asaOQ/view?usp=drivesdk',
 ebep:'https://drive.google.com/file/d/1cd-5Vzuw0tpQEbMq48sp7uE93cTpGtQz/view?usp=drivesdk',
 db:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
 ciclo:'https://drive.google.com/file/d/1ACkDNTOjKmbfogrq58aHXtkc5yY5wZ90/view?usp=drivesdk'
};
const records=[
 [5461,[5,14],[],['Pacto fiscal europeo','Tratado de Estabilidad','déficit estructural','0,5 % PIB'],[
  {url:'https://www.boe.es/eli/es/ai/2012/03/02/%281%29',referencia:'Instrumento de Ratificación del Tratado de Estabilidad, Coordinación y Gobernanza, arts. 3.1.b y 3.1.d: límite inferior del déficit estructural anual del 0,5 % del PIB como regla general y umbral del 1 % bajo las condiciones previstas; art. 8 y art. 273 TFUE: jurisdicción del TJUE sobre la transposición de la regla.'},
  {url:'https://www.boe.es/buscar/doc.php?id=BOE-A-2012-9981',referencia:'Ley Orgánica 3/2012, autorización de ratificación del Tratado de Estabilidad, Coordinación y Gobernanza.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 5 (Unión Europea y tratados) y tema 14 (modelo económico y política económica).'},
  {url:drive.economia,referencia:'ITIC Academy, Tema 014 — Modelo económico, versión 1.3: encaje curricular de política económica y gobernanza económica europea.'}
 ],null,'La respuesta original de 0,6 % no es exacta: el artículo 3.1.b del Tratado fija como regla general un déficit estructural anual que no exceda el 0,5 % del PIB; el artículo 3.1.d permite elevar ese umbral al 1 % si se cumplen las condiciones allí indicadas sobre deuda y sostenibilidad. También se corrige la opción relativa al TJUE: el artículo 8 sí prevé jurisdicción para controlar la transposición de la regla del artículo 3.2. Se actualiza la pregunta para que solo la opción A sea verdadera.','corregida'],
 [5462,[24],['I-8'],['función pública','situaciones administrativas','servicios especiales','EBEP art. 87'],[
  {url:'https://www.boe.es/eli/es/rdlg/2015/10/30/5/con',referencia:'Texto refundido del EBEP, art. 87.1.b: misión autorizada de duración determinada superior a seis meses en organismos internacionales, gobiernos o entidades públicas extranjeras o programas de cooperación internacional da lugar a servicios especiales.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 24: empleo público y Estatuto Básico del Empleado Público.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.8: texto refundido del Estatuto Básico del Empleado Público.'},
  {url:drive.ebep,referencia:'ITIC Academy, Tema 024 — Empleo Público / EBEP, versión 1.3: encaje curricular de situaciones administrativas.'}
 ],null,'La respuesta A es correcta. El artículo 87.1.b del EBEP dispone que los funcionarios de carrera autorizados para una misión temporal superior a seis meses en las entidades o programas indicados serán declarados en situación de servicios especiales. Se conserva el enunciado y la clave originales.','vigente'],
 [5463,[63,64],['II-5','III-4'],['reglas de Codd','SGBD relacional','modelo relacional','bases de datos'],[
  {url:'https://research.ibm.com/publications/relational-database-a-practical-foundation-for-productivity',referencia:'E. F. Codd, «Relational Database: A Practical Foundation for Productivity» (1981), IBM Research: la colección mínima de reglas/propiedades pretende distinguir los SGBD relacionales de los no relacionales.'},
  {url:'https://www.softwaregems.com.au/Documents/Article/Database/Relational%20Model/Codd%20E%20F/Relational%20Database%20Practical%20Foundation%20Turing%20Award.pdf',referencia:'E. F. Codd, Turing Award paper con postscript sobre las 12 reglas (artículos de 1985): reglas como criterios mínimos para evaluar si un DBMS puede denominarse relacional.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 63 y 64: SGBD, modelo de referencia ANSI y modelo relacional.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.5 y III.4: arquitectura ANSI/SPARC, SGBD relacionales, modelo lógico relacional y normalización.'},
  {url:drive.db,referencia:'ITIC Academy, Bases de Datos 2026, A1-63/64 y A2-II.5/III.4: mapa curricular de SGBD y modelo relacional.'}
 ],null,'La opción A se reescribe: las reglas de Codd ofrecen criterios para evaluar si un sistema gestor puede considerarse relacional. No son reglas para normalizar tablas, integrar modelos conceptuales ni describir ANSI/SPARC. La clave se cambia a A y se sustituye la expresión imprecisa «más relacionadas y normalizadas».','corregida'],
 [5464,[123],['IV-14'],['telefonía fija-móvil','FCT','gateway GSM','tarificación'],[],null,'Pendiente de resolución: el enunciado describe el encaminamiento mediante un enlace corporativo directo a una red móvil, pero no identifica operador, contrato, producto ni plan tarifario. La ruta técnica por un gateway/FCT no determina por sí sola una categoría universal de facturación; los resultados encontrados describen ofertas o contratos concretos y las tarifas dependen del plan. No hay fuente primaria general que permita verificar que todas las llamadas fijo-móvil y móvil-fijo deban considerarse móvil-móvil. Se conserva la clave original provisional (B) sin validarla. Para cerrarla se necesita identificar el contrato/operador y fecha de la pregunta o una especificación tarifaria que defina el supuesto.','pendiente_ambiguedad'],
 [5465,[86],['III-1'],['ciclo de vida','modelo en cascada','desarrollo de software','fases secuenciales'],[
  {url:'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle',referencia:'NASA Software Engineering Handbook, SWE-019, Standard Waterfall Life Cycle: fases secuenciales; se pasa a la siguiente al terminar cada fase; el producto de trabajo no queda disponible para uso inicial hasta casi finalizar el proyecto.'},
  {url:'https://ntrs.nasa.gov/api/citations/19980227761/downloads/19980227761.pdf',referencia:'NASA Software Engineering Guidebook, sección 5.1.1, Waterfall Development Life-Cycle Model: describe fases diferenciadas, secuencia, productos y límites del modelo.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 86: ciclo de vida de los sistemas y modelos de ciclo de vida.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.1: concepto, fases y modelos de ciclo de vida.'},
  {url:drive.ciclo,referencia:'ITIC Academy, Temas 037/086/088 — Metodologías y MCV, edición 2025: mapa curricular de modelos de ciclo de vida.'}
 ],null,'La opción D es falsa para el modelo clásico estrictamente secuencial: una fase se completa antes de pasar a la siguiente. NASA describe esta puerta de transición, aunque admite revisiones y posibles cambios; en proyectos reales el modelo rara vez se sigue sin iteraciones. Se precisa el enunciado para distinguir la idealización del modelo de su aplicación práctica.','corregida']
];
const edits={
 5461:{texto:'Según el Tratado de Estabilidad, Coordinación y Gobernanza de 2012, señale la afirmación correcta sobre la regla de equilibrio presupuestario:',opciones:['El déficit estructural anual no debe exceder, como regla general, el 0,5 % del PIB; el Tratado permite un umbral del 1 % si se cumplen determinadas condiciones.','La regla no debe incorporarse al ordenamiento nacional mediante disposiciones vinculantes y permanentes.','El déficit público nominal debe mantenerse siempre por debajo del 2,8 % del PIB.'],respuesta_correcta:0},
 5463:{texto:'Las reglas de Codd sirven principalmente para:',opciones:['Evaluar si un sistema gestor de bases de datos cumple criterios para ser considerado relacional.','Normalizar automáticamente las tablas de cualquier base de datos.','Integrar el modelo conceptual con el nivel físico del estándar ANSI/SPARC.','Describir los tres niveles del modelo entidad-relación.'],respuesta_correcta:0},
 5465:{texto:'En el modelo clásico de ciclo de vida en cascada, entendido como un proceso secuencial, señale la afirmación FALSA:',opciones:['Los proyectos reales rara vez siguen sin desviaciones el camino secuencial propuesto.','Es difícil que el usuario establezca correcta y completamente todos los requisitos al inicio del proyecto.','Una versión integrada del producto normalmente no está disponible hasta fases avanzadas del desarrollo.','Para pasar a la siguiente fase no es necesario haber completado la fase anterior.']}
};
const logFile=path.join(__dirname,'cambios-lote-1028.json');
if(!fs.existsSync(logFile))aplicar({numero:'1028',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5461:'ITIC Academy, Tema 014 — Modelo económico, versión 1.3: mapa curricular de política económica y gobernanza económica europea.',
 5462:'ITIC Academy, Tema 024 — Empleo Público / EBEP, versión 1.3: mapa curricular de situaciones administrativas.',
 5463:'ITIC Academy, Bases de Datos 2026, A1-63/64 y A2-II.5/III.4: mapa curricular de SGBD y modelo relacional.',
 5464:null,
 5465:'ITIC Academy, Temas 037/086/088 — Metodologías y MCV, edición 2025: mapa curricular de modelos de ciclo de vida.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota=c.id===5464?'Se cotejó el programa oficial A1-123/A2-IV-14; no se halló material curricular que establezca una regla universal de tarificación para el supuesto descrito. Pendiente hasta identificar operador, tarifa y fecha.':'Cotejado con los programas oficiales A1/A2 vigentes. La academia se usa como mapa curricular, no como fuente normativa o técnica primaria.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
