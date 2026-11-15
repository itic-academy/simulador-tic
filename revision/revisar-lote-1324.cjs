const aplicar=require('./aplicar-lote.cjs');
const boeCopy='https://www.boe.es/eli/es/res/2011/07/19/(6)';
const boeDoc='https://www.boe.es/buscar/act.php?id=BOE-A-2011-13169&p=20110730';
const ens='https://www.boe.es/eli/es/rd/2022/05/03/311/con';
const satInet='https://www.ccn-cert.cni.es/es/gestion-de-incidentes/sistema-de-alerta-temprana-sat/sat-inet.html';
const satSara='https://www.ccn-cert.cni.es/es/guias-futuro.html?catid=11&id=2003%3Asat-sara-2&view=article';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyInter='https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk';
const academyENS='https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const edits={
  6943:{texto:'De acuerdo con el artículo 31 del Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad, indique cuál de las siguientes respuestas es INCORRECTA sobre las auditorías de seguridad:',opciones:['Los sistemas de información comprendidos en el ámbito del ENS serán objeto de una auditoría ordinaria al menos cada dos años.','Deberá realizarse una auditoría extraordinaria si hay modificaciones sustanciales que puedan repercutir en las medidas de seguridad requeridas.','Los informes de auditoría serán presentados al responsable del sistema y al responsable de seguridad competentes.','Los informes de auditoría serán analizados por el responsable del sistema.'],respuesta_correcta:3},
  6945:{opciones:['Para declarar la conformidad de un sistema BÁSICO se requiere una autoevaluación; los sistemas MEDIOS o ALTOS requieren auditoría de certificación.','Todos los sistemas, cualquiera que sea su categoría, deben superar una auditoría externa de certificación.','Preparar y aprobar la política de seguridad, categorizar los sistemas e implantar las medidas de seguridad basta, sin un proceso de determinación de conformidad.','Preparar y aprobar la política de seguridad, categorizar los sistemas, implantar las medidas de seguridad y realizar un análisis de riesgos constituye por sí solo el procedimiento formal de certificación.']}
};
const records=[
 [6941,[46],['I-9'],['interoperabilidad','NTI','copias auténticas','conversión de formato','documento electrónico'],[
  {url:boeCopy,referencia:'Resolución de 19 de julio de 2011, NTI de Procedimientos de copiado auténtico y conversión entre documentos electrónicos, apartado I: su objeto es establecer las reglas para generar copias electrónicas auténticas, copias papel auténticas de documentos públicos administrativos electrónicos y convertir el formato de documentos electrónicos.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 46: NTI e interoperabilidad de documentos y expedientes electrónicos.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema I.9: ENI y normas técnicas de interoperabilidad.'}
 ],undefined,'Vigente C. La descripción coincide con el objeto literal de la NTI. No es una norma de catálogo general de todos los tipos de copias por su valor jurídico, ni regula meramente el trámite de compulsa o la solicitud de copias.','vigente'],
 [6942,[46],['I-9'],['interoperabilidad','NTI de documento electrónico','metadatos mínimos','identificador','órgano','fecha de captura'],[
  {url:boeDoc,referencia:'NTI de Documento Electrónico, anexo I: Identificador, Órgano y Fecha de captura son metadatos mínimos obligatorios; la fecha de captura es la fecha de alta del documento en el sistema de gestión documental.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 46: NTI e interoperabilidad de documentos electrónicos.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema I.9: normas técnicas de interoperabilidad.'}
 ],undefined,'Vigente D. El anexo I enumera como obligatorios «Identificador», «Órgano» y «Fecha de captura». La opción del idioma no corresponde a esos tres metadatos mínimos; la versión N11 sí es metadato mínimo, pero resolución y tamaño no completan una terna de metadatos mínimos generales.','vigente'],
 [6943,[48],['I-9','II-11'],['ENS','RD 311/2022','auditoría de seguridad','responsable de seguridad','informe de auditoría'],[
  {url:ens,referencia:'Real Decreto 311/2022, art. 31.1 y 31.5: auditoría ordinaria al menos cada dos años y extraordinaria ante cambios sustanciales; el responsable de seguridad analiza el informe y presenta conclusiones al responsable del sistema.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 48: ENS, adecuación y CCN-STIC.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema I.9 (ENS/CCN-STIC) y tema II.11 (auditoría del ENS).'}
 ],undefined,'Corregida D. La referencia original al RD 3/2010 estaba derogada; el marco vigente es el RD 311/2022. Se actualizó el enunciado y se evitó limitar al sistema de categoría alta una regla general del art. 31. La opción D es incorrecta: el informe lo analiza el responsable de seguridad, que presenta sus conclusiones al responsable del sistema.','corregida'],
 [6944,[48,127],['I-9','II-13'],['CCN-CERT','SAT-SARA','SAT-INET','alerta temprana','ciberseguridad'],[
  {url:satSara,referencia:'CCN-CERT, SAT-SARA: servicio desarrollado por CCN-CERT en colaboración con el organismo responsable de Red SARA para detectar en tiempo real ataques y amenazas en el tráfico entre organismos conectados.'},
  {url:satInet,referencia:'CCN-CERT, SAT-INET: servicio desarrollado e implantado por CCN-CERT para detección en tiempo real de amenazas e incidentes en el tráfico entre el organismo adscrito e Internet; requiere sonda y adhesión del organismo.'},
  {url:ens,referencia:'Real Decreto 311/2022, arts. 33.1 y 33.5: el CCN articula la respuesta a incidentes mediante CCN-CERT y coordina la respuesta técnica del sector público.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, temas 48 y 127: CCN-STIC y ciberseguridad.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, temas I.9 y II.13: CCN-STIC, herramientas de seguridad y gestión de incidentes.'}
 ],undefined,'Vigente A. CCN-CERT presta SAT-SARA y SAT-INET a organismos adscritos: son servicios de alerta temprana, no una garantía universal para cualquier entidad conectada. La descripción de la opción A es sustancialmente correcta. Los servicios no se limitan a entidades financieras y OCC no depende de CCN-CERT.','vigente'],
 [6945,[48],['I-9','II-11'],['ENS','RD 311/2022','conformidad ENS','autoevaluación','auditoría de certificación'],[
  {url:ens,referencia:'Real Decreto 311/2022, art. 38.1: categoría BÁSICA requiere autoevaluación para declarar conformidad; categorías MEDIA o ALTA precisan auditoría para certificación, sin perjuicio de la auditoría de seguridad del art. 31.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 48: ENS y adecuación.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema I.9 (ENS) y tema II.11 (auditoría del ENS).'}
 ],undefined,'Corregida A. Se precisa la regla del artículo 38: autoevaluación documentada para la declaración de conformidad de sistemas BÁSICOS; auditoría para certificar sistemas MEDIOS o ALTOS. La auditoría del artículo 31 es el mecanismo ordinario de seguridad y puede servir también para certificar, pero no se impone certificación auditada en categoría básica.','corregida']
];
aplicar({numero:'1324',fecha:'2026-11-15',records,edits});
