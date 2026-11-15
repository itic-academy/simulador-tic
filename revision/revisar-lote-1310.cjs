const aplicar=require('./aplicar-lote.cjs');
const kanban='https://kanban.university/kanban-guide/';
const kanbanGlossary='https://kanban.university/glossary/';
const nistHash='https://csrc.nist.gov/glossary/term/Cryptographic_hash_function';
const fips='https://csrc.nist.gov/pubs/fips/180-4/upd1/final';
const nti='https://www.boe.es/buscar/act.php?id=BOE-A-2016-10146';
const lpac='https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const valide='https://administracionelectronica.gob.es/ctt/valide';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const edits={
  6871:{texto:'En el método Kanban, ¿cuál de estas opciones es una métrica de flujo y no una práctica básica del método?',opciones:['Visualizar el trabajo y su flujo.','Limitar el trabajo en curso (WIP).','Medir el tiempo transcurrido de un elemento de trabajo (lead time).','Gestionar el flujo de trabajo.'],respuesta_correcta:2},
  6872:{texto:'En criptografía, ¿qué mecanismo puede describirse como la huella digital de un archivo o mensaje?',opciones:['Un algoritmo de cifrado simétrico.','Un algoritmo de cifrado asimétrico.','Una función hash criptográfica que calcula un resumen dependiente del contenido.','Un identificador anónimo que no depende del contenido.'],respuesta_correcta:2},
  6873:{texto:'Según el apartado II.1.3 de la NTI vigente de Política de firma y sello electrónicos y de certificados, ¿qué elementos deben incluir las políticas basadas en certificados?',opciones:['El alcance, ámbito y usos de la política.','La identificación del documento y de quien lo gestiona.','Las reglas comunes y de confianza, incluidos certificados, sellos de tiempo y firmas longevas.','Todos los elementos anteriores.'],respuesta_correcta:3},
  6874:{texto:'Conforme al artículo 28.2 de la Ley 39/2015, ¿cuándo puede la Administración recabar electrónicamente documentos o datos de identidad que obren en poder de otra Administración?',opciones:['Solo si la persona interesada presta siempre consentimiento expreso.','Nunca, porque los datos de identidad son siempre excluidos de la consulta.','Como regla general, salvo oposición expresa de la persona interesada; una ley especial puede exigir consentimiento expreso.','Siempre, incluso si hay oposición expresa y sin excepción.'],respuesta_correcta:2},
  6875:{texto:'¿Cuál de estas funciones aparece expresamente entre las que el Portal de Administración Electrónica atribuye al servicio VALIDe?',opciones:['Validar cualquier URL de un portal administrativo.','Consultar cualquier código seguro de verificación de todas las Administraciones.','Emitir certificados de sede electrónica.','Validar el estado de un certificado de sede electrónica.'],respuesta_correcta:3}
};
const records=[
[6871,[37,88],['III-2'],['Kanban','métricas de flujo','lead time','trabajo en curso','WIP','gestionar flujo'],[
{url:kanban,referencia:'Kanban University, Official Guide, apartados de prácticas y métricas: visualizar trabajo y flujo, limitar WIP y gestionar flujo son prácticas; lead time es el tiempo de ciclo desde el punto de compromiso hasta terminar un elemento (métrica en la documentación de Kanban Method). En la guía de 2025 las métricas básicas se formulan como WIP, throughput, work item age y cycle time; lead time no se presenta como práctica.'},
{url:kanbanGlossary,referencia:'Kanban University Glossary: lead time charts registran los tiempos de los elementos completados y se utilizan para observar/mejorar el flujo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, anexo I, temas 37 y 88: metodologías ágiles/lean y mención expresa de Kanban.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.2: planificación y metodologías de desarrollo.'}
],edits[6871],'Se reemplaza «reglas» genéricas por una distinción verificable entre prácticas y métrica. Visualizar, limitar WIP y gestionar flujo son prácticas; el tiempo de entrega/lead time es una medida de flujo, no una práctica. La guía Kanban 2025 denomina sus cuatro métricas básicas WIP, throughput, work item age y cycle time; se conserva lead time como término usado en documentación Kanban anterior/glosario.', 'corregida'],
[6872,[79,80,82,125],['IV-12'],['función hash','huella digital','resumen criptográfico','integridad','criptografía'],[
{url:nistHash,referencia:'NIST CSRC Glossary, Cryptographic hash function: función que obtiene un valor numérico dependiente del contenido de un archivo o mensaje; puede considerarse su huella digital.'},
{url:fips,referencia:'NIST FIPS 180-4, Secure Hash Standard: especifica funciones hash que producen message digests de longitud fija para detectar cambios en mensajes.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 79, 80 y 82: hash, firma electrónica, claves y herramientas criptográficas.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas, protocolos seguros y firma digital.'}
],edits[6872],'El término «tipo de huella digital» no tiene aquí una taxonomía criptográfica de simétrica/asimétrica/anónima. Se fija el contexto de archivo/mensaje: NIST describe la función hash como cálculo de una huella dependiente del contenido; no es cifrado.', 'corregida'],
[6873,[80,81],['I-6','I-9'],['NTI política de firma','certificados','alcance','identificación documental','reglas de confianza','sellos de tiempo','firmas longevas'],[
{url:nti,referencia:'Resolución de 27 de octubre de 2016, NTI de Política de firma y sello electrónicos y de certificados, II.1.3: exige alcance/ámbito y usos, identificación del documento y responsable, reglas comunes de creación/validación y reglas de confianza relativas a certificados, sellos de tiempo y firmas longevas. Esta NTI sustituyó a la de 2011.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 80: marco de firma electrónica, certificados, formatos y otros servicios.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.6 (régimen de identidad/firma) e I.9 (ENI y normas técnicas de interoperabilidad).'}
],edits[6873],'La pregunta original cita la NTI de 2011, sustituida completamente por la Resolución de 27 de octubre de 2016. Se actualiza a la norma vigente; las tres clases de contenido incluidas en las opciones siguen siendo obligatorias según II.1.3, por lo que la respuesta «todas» se mantiene.', 'corregida'],
[6874,[8,49],['I-8','I-10'],['Ley 39/2015','artículo 28','consulta de datos','oposición expresa','Plataforma de Intermediación de Datos','identidad'],[
{url:lpac,referencia:'Ley 39/2015, art. 28.2, texto consolidado: las Administraciones recaban electrónicamente documentos ya aportados o elaborados por otras Administraciones salvo oposición expresa; no cabe oposición en potestades sancionadoras o de inspección; una ley especial puede exigir consentimiento expreso.'},
{url:'https://www.boe.es/buscar/act.php?id=BOE-A-2006-8148',referencia:'Real Decreto 522/2006 suprimió la obligación de aportar fotocopias de documentos de identidad en procedimientos administrativos e impulsó la consulta telemática de datos.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 8 (procedimiento/relación con la Administración) y 49 (Plataforma de Intermediación de Datos y servicios comunes).'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.8 (procedimiento administrativo) e I.10 (infraestructuras y servicios comunes/plataformas).'}
],edits[6874],'La pregunta original mezclaba el antiguo régimen de autorización previa (RD 522/2006 y Orden PRE/3949/2006) con la regla actual del artículo 28.2 de la Ley 39/2015, modificada por la LO 3/2018. Se pregunta por la regla vigente: consulta administrativa salvo oposición expresa, con las excepciones legales indicadas.', 'corregida'],
[6875,[49,80,81],['I-6','I-10'],['VALIDe','validación de certificados','certificado de sede','firma electrónica','servicios comunes'],[
{url:valide,referencia:'Portal de Administración Electrónica, ficha oficial CTT VALIDe: describe validación de certificados en general, certificados de sede electrónica y firmas electrónicas, además de generación de firmas y visualización. No atribuye a VALIDe la consulta universal de cualquier CSV; la comprobación de CSV se realiza en el servicio de verificación de documentos de la sede emisora.'},
{url:'https://sede.mineco.gob.es/stfls/sede/Ficheros/manuales/Manual_CSV.pdf',referencia:'Manual de la Sede del Ministerio de Economía para el servicio de verificación documental por CSV: consulta de integridad/autenticidad con el código en el servicio específico de sede.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 49 (servicios comunes/plataformas) y 80 (identificación y firma electrónica).'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.10: servicios comunes y plataformas de validación entre Administraciones; tema I.6, identidad y firma.'}
],edits[6875],'Se corrige la opción original que agrupaba VALIDe con validación universal de códigos CSV. El PAe atribuye a VALIDe validación de certificados y firmas y especifica la validación de certificados de sede; la comprobación del CSV de un documento depende del servicio de verificación de la sede emisora. La nueva pregunta pide una capacidad expresamente descrita por la ficha oficial.', 'corregida']
];
aplicar({numero:'1310',fecha:'2026-11-15',records});
