const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const dnie='https://www.dnielectronico.es/PDFs/Politicas_de_certificacion_v3.2.pdf';
const records=[
 [5381,[80,81],['I-6','IV-12'],['DNI electrónico','certificado cualificado','firma electrónica','eIDAS'],[
  {url:dnie,referencia:'DPC de la Dirección General de la Policía, versión 3.2: define el certificado cualificado conforme al anexo I de eIDAS y describe los certificados cualificados del DNI.'},
  {url:'https://eur-lex.europa.eu/eli/reg/2014/910/2024-05-20',referencia:'Reglamento (UE) 910/2014, texto consolidado a 20-05-2024: definición y requisitos de certificados cualificados de firma electrónica (arts. 3 y 28, anexo I). La terminología vigente es «cualificado»; «reconocido» pertenece a la terminología española anterior.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, temas 80–81: certificados, firma electrónica, DNIe y marco europeo/nacional.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema I.6 y IV.12: identidad y firma electrónica, eIDAS, DNIe y mecanismos de firma.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, actualización 2026: certificados, régimen eIDAS y DNIe; cobertura curricular directa.'}
 ],null,'La clave Cualificado (B) es la denominación vigente en el Reglamento eIDAS y en la Declaración de Prácticas de Certificación de la Policía. «Reconocido» se conserva como término de la normativa española anterior, por lo que se acota la respuesta a la terminología vigente; la fuente oficial del DNIe aún contiene páginas informativas heredadas que emplean ese término.','corregida'],
 [5382,[56],['IV-5'],['RAID 5','almacenamiento','paridad','capacidad útil'],[
  {url:'https://www.dell.com/support/manuals/en-us/precision-7865-workstation/precision_7865_tower_raid_guide/raid-5?guid=guid-4a72d4b6-3d9a-439f-98e4-b51b1618fa14&lang=en-us',referencia:'Guía RAID 5 de Dell: capacidad útil = N−1 discos equivalentes; la capacidad de paridad ocupa el equivalente a un disco.'},
  {url:'https://www.dell.com/support/contents/en-us/videos/videoplayer/understanding-raid-levels/6079788681001',referencia:'Dell, Understanding RAID Levels: capacidad RAID 5 utilizable = (n−1)×s; cuatro discos iguales de 1 TB dan 3 TB.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 56: sistemas de almacenamiento y virtualización.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.5: arquitectura, tipos, componentes, gestión y administración del almacenamiento.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, edición 2026: RAID y sistemas de almacenamiento; cotejo curricular directo.'}
 ],null,'Con seis unidades de 1 TB iguales, RAID 5 reserva el equivalente a una unidad para paridad: (6−1)×1 TB = 5 TB nominales para datos, antes de formato, metadatos o reservas del fabricante/controlador. Se aclara el supuesto de unidades iguales; SAS describe la interfaz, no altera la fórmula. Respuesta B.','corregida'],
 [5383,[53],[],['CPD','PUE','eficiencia energética','infraestructura'],[
  {url:'https://www.iso.org/standard/30134-2',referencia:'ISO/IEC 30134-2:2026, KPI para centros de datos: define el indicador Power Usage Effectiveness (PUE) y su metodología de cálculo.'},
  {url:'https://intelligence.uptimeinstitute.com/resource/glossary-digital-infrastructure-sustainability',referencia:'Uptime Institute, glosario de sostenibilidad: PUE es energía total del centro dividida por energía de equipos TI; valores inferiores indican menor sobrecarga energética (ejemplo 2.000/1.000 = 2). Por definición el cociente no puede ser inferior a 1.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 53: centros de proceso de datos, diseño, implantación y gestión.'},
  {url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',referencia:'ITIC Academy, bloque 26 Hardware, servidores y CPD, edición 2026: cobertura contextual de diseño/gestión de CPD. En el material localizado no se halló epígrafe específico de PUE.'}
 ],null,'PUE se calcula como energía total del centro de datos / energía de los equipos TI; cuanto más próximo a 1, menor consumo de infraestructura auxiliar para una misma carga TI. Un valor de 0,5 es físicamente incompatible con esa definición. Entre las opciones posibles, 1,3 es el PUE de mayor eficiencia. Se añade esa condición al enunciado y se cita ISO/IEC 30134-2.','corregida'],
 [5384,[79],['IV-12'],['función hash','criptografía','resistencia a preimagen','autenticación'],[
  {url:'https://csrc.nist.gov/glossary/term/hash_function',referencia:'NIST CSRC Glossary, hash function: transforma entradas de longitud arbitraria en una salida de longitud fija; la propiedad unidireccional hace computacionalmente inviable hallar una entrada para una salida prefijada, y la resistencia a colisiones es una propiedad distinta.'},
  {url:'https://csrc.nist.gov/pubs/fips/180-4/upd1/final',referencia:'NIST FIPS 180-4, Secure Hash Standard: algoritmos de resumen para detectar cambios en mensajes; una función hash por sí sola no autentica la identidad de una entidad.'},
  {url:boeA1,referencia:'Convocatoria A1 GSI 2025, tema 79: cifrado, algoritmos y función hash.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas, protocolos seguros y mecanismos de firma digital.'},
  {url:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',referencia:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, actualización 2026: funciones hash y usos criptográficos; cotejo curricular directo.'}
 ],null,'«Criptosistema irreversible» no es una categoría suficientemente precisa para afirmar sin matices que se usa sobre todo para autenticar entidades. Se sustituye por la noción verificable de función hash criptográfica unidireccional: es computacionalmente inviable recuperar una preimagen para un digest dado; resistencia a colisiones es una propiedad relacionada pero distinta. Un hash solo no autentica por sí mismo a una entidad. Respuesta C.','corregida'],
 [5385,[],['II-3'],['COBOL','lenguajes de programación','acrónimo','historia del software'],[
  {url:'https://www.ibm.com/think/topics/cobol',referencia:'IBM, What is COBOL?, actualizado en febrero de 2026: Common business-oriented language; lenguaje compilado de alto nivel orientado al procesamiento de datos de negocio.'},
  {url:boeA2,referencia:'Convocatoria A2 GSI 2025, tema II.3: características técnicas de lenguajes y paradigmas actuales; clasificación únicamente contextual, pues el epígrafe no exige el acrónimo histórico COBOL.'},
  {url:'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk',referencia:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.2: incluye lenguajes y paradigmas en su cobertura curricular, pero no se localizó tratamiento específico del acrónimo COBOL; referencia contextual, no evidencia técnica.'}
 ],null,'COBOL expande Common Business-Oriented Language. Es el nombre histórico de un lenguaje de programación, no un acrónimo de lenguaje orientado a objetos. IBM confirma el desarrollo del nombre y su orientación al procesamiento empresarial. La academia cubre lenguajes y paradigmas en general, pero no se encontró epígrafe dedicado al acrónimo. Respuesta B.','vigente']
];
const edits={
 5381:{texto:'Según la terminología vigente del Reglamento eIDAS, el certificado de firma del DNI electrónico es un certificado:',opciones:['Avanzado.','Cualificado.','Seguro.','Reconocido.']},
 5382:{texto:'Se configuran seis discos iguales de 1 TB cada uno en RAID 5. ¿Qué capacidad nominal aproximada queda para datos, antes del formato y las reservas del sistema?',opciones:['6 TB.','5 TB.','7 TB.','3 TB.']},
 5383:{texto:'El PUE relaciona la energía total de un CPD con la energía de sus equipos TI; los valores físicamente posibles son iguales o superiores a 1 y los más próximos a 1 indican mayor eficiencia. ¿Cuál de estos valores corresponde al CPD más eficiente?',opciones:['PUE de 1,3.','PUE de 0,5.','PUE de 5.','PUE de 10.']},
 5384:{texto:'¿Qué propiedad caracteriza a una función hash criptográfica unidireccional?',opciones:['Ha dejado de ser útil porque la computación distribuida permite invertir cualquier función hash.','Por sí sola demuestra la identidad de la entidad que presenta el resumen.','Dado un resumen prefijado, es computacionalmente inviable encontrar una entrada que lo produzca.','B y C son correctas.']}
};
const academy={
 5381:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: certificados cualificados, eIDAS y DNIe; cotejo curricular directo.',
 5382:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización 2026: RAID y almacenamiento; cotejo curricular directo.',
 5383:'ITIC Academy, bloque 26 Hardware, servidores y CPD 2026: cobertura contextual de diseño/gestión de centros de datos; no se halló epígrafe específico de PUE en el material localizado.',
 5384:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026: funciones hash y usos criptográficos; cotejo curricular directo.',
 5385:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información 2026.2: cobertura general de lenguajes y paradigmas; no se halló contenido específico sobre el acrónimo COBOL.'
};
const logFile=path.join(__dirname,'cambios-lote-1012.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1012',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
for(const c of log.cambios){const q=data.preguntas.find(q=>q.id===c.id),record=records.find(r=>r[0]===c.id);q.revision.estado=record[7];q.revision.observaciones=record[6];q.comentarios=record[6];q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Clasificación cotejada con el programa oficial; material ITIC Academy usado como mapa curricular cuando se indica, no como autoridad técnica o normativa.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
