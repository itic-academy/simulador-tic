const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lcsp='https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const cyL='https://www.boe.es/buscar/act.php?id=BOE-A-2008-16664';
const lgs='https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977&p=20261003&tn=0';
const agenda='https://sdgs.un.org/2030agenda';
const igualdad='https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115';
const academia5='https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const academia6='https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5681,[11],[],['Ley 9/2017','LCSP','contratos típicos','contrato mixto','acuerdo marco','racionalización de la contratación'],[
  ref(lcsp,'BOE, Ley 9/2017, texto consolidado vigente (última actualización 09-04-2026), arts. 12–18: clases de contratos, incluidos los mixtos; arts. 218–226: los acuerdos marco son sistemas para racionalizar la contratación, no una clase contractual.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: LCSP, tipos de contratos y características generales.'),
  ref(academia5,'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2, §§ 3.1 (tipos de contratos) y 7.2 (racionalización técnica); el material separa clases contractuales y acuerdos marco.')
 ],null,'Corregida, respuesta B. Se precisa que se pregunta por una clase de contrato de los arts. 12–18. El contrato mixto está tipificado (art. 18); en cambio, el acuerdo marco es un sistema de racionalización de la contratación (arts. 218 y ss.), no un tipo contractual. Se sustituye la expresión imprecisa «contrato marco» por «acuerdo marco» y se fija el alcance para evitar que el reactivo niegue que la LCSP regula los acuerdos marco. A1-11.','corregida'],
 [5682,[11],[],['Ley 9/2017','LCSP','Mesa de Contratación','órgano de contratación','artículo 326'],[
  ref(lcsp,'BOE, Ley 9/2017, texto consolidado vigente (última actualización 09-04-2026), art. 326.4: los miembros de la Mesa de Contratación son nombrados por el órgano de contratación; art. 326.5 establece vocalías necesarias de asesoramiento jurídico y control económico-presupuestario.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: Ley de Contratos del Sector Público.'),
  ref(academia5,'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2, § 2.4: distingue el órgano de contratación, que adjudica, de la Mesa de asistencia; § 3.1 y 7.2 cubren LCSP y racionalización.')
 ],null,'Vigente, respuesta C. El artículo 326.4 atribuye el nombramiento de los miembros de la Mesa al órgano de contratación. La Intervención y el asesoramiento jurídico están necesariamente representados entre los vocales, pero no nombran por sí solos a todos sus miembros. A1-11.','vigente'],
 [5683,[13],[],['subvenciones','Castilla y León','Ley 5/2008','pagos a cuenta','pagos anticipados','justificación','artículo 36.3'],[
  ref(cyL,'BOE, Ley 5/2008, de subvenciones de Castilla y León, texto consolidado vigente, art. 36.3: en ningún caso se realizarán pagos a cuenta cuando existan pagos anticipados pendientes de justificación. El art. 36.1 define el pago a cuenta como pago parcial previa justificación del importe equivalente.'),
  ref(lgs,'BOE, Ley 38/2003, General de Subvenciones, texto consolidado actualizado a 03-10-2026, art. 34.4: separa pagos a cuenta equivalentes a la justificación presentada y pagos anticipados previos a la justificación; no formula por sí solo la prohibición autonómica específica del art. 36.3 de la Ley 5/2008.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 13: régimen jurídico y procedimiento de las subvenciones públicas.'),
  ref(academia5,'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2, § 13: cobertura del régimen general de subvenciones (tema A1-13). No se localizó en este documento la regla particular de la Ley 5/2008; la respuesta concreta se fundamenta en el texto BOE de esa ley.')
 ],null,'Corregida, respuesta B. El examen de origen corresponde a la Administración de Castilla y León y el art. 36.3 de su Ley 5/2008 prohíbe sin excepción realizar pagos a cuenta mientras existan pagos anticipados pendientes de justificación. El enunciado original omitía la jurisdicción y podía confundirse con la regla estatal del art. 34.4 de la Ley 38/2003, que distingue ambas modalidades sin establecer esa prohibición general. Se añade la norma y el ámbito autonómico para que la clave sea inequívoca. A1-13.','corregida'],
 [5684,[14],['I-4'],['Agenda 2030','Objetivos de Desarrollo Sostenible','ODS','Naciones Unidas','1 de enero de 2016'],[
  ref(agenda,'Naciones Unidas, Agenda 2030 para el Desarrollo Sostenible, párrafo 21: los Objetivos y metas entraron en vigor el 1 de enero de 2016; la resolución A/RES/70/1 fue adoptada el 25 de septiembre de 2015.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 14: crecimiento sostenible, Agenda 2030 y Objetivos de Desarrollo Sostenible.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.4: Agenda 2030 y ODS.'),
  ref(academia6,'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2: cubre la Agenda 2030 y ODS; mapea este contenido a A1-14 y A2-O4 (tema oficial A2-I.4).')
 ],null,'Vigente, respuesta C. La Agenda 2030 se adoptó el 25 de septiembre de 2015, pero el párrafo 21 dispone que los objetivos y metas entraran en vigor el 1 de enero de 2016. Por tanto, la fecha de adopción no es la fecha preguntada. A1-14/A2-I-4.','vigente'],
 [5685,[16],['I-5'],['igualdad efectiva','Ley Orgánica 3/2007','artículo 64','Plan para la Igualdad','Administración General del Estado'],[
  ref(igualdad,'BOE, Ley Orgánica 3/2007, texto consolidado vigente (última actualización 02-08-2024), art. 64: el Gobierno aprueba el Plan para la Igualdad al inicio de cada legislatura y evalúa anualmente su cumplimiento.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 16: políticas de igualdad de género.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.5: políticas de igualdad.'),
  ref(academia6,'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2, apartado de políticas de igualdad: cubre la LO 3/2007 y los planes de igualdad en la AGE; mapeo A1-16/A2-O5 (tema oficial A2-I.5).')
 ],null,'Vigente, respuesta D. El artículo 64 fija la aprobación del Plan al inicio de cada legislatura; además establece una evaluación anual de su cumplimiento, que no debe confundirse con la periodicidad de aprobación. A1-16/A2-I-5.','vigente']
];
const edits={
 5681:{texto:'¿Cuál de estas denominaciones no corresponde a una clase de contrato prevista en los artículos 12 a 18 de la Ley 9/2017, de Contratos del Sector Público?',opciones:['Contrato mixto de suministro y servicios','Acuerdo marco','Contrato de obras','Contrato de servicios'],respuesta_correcta:1},
 5683:{texto:'Conforme al artículo 36.3 de la Ley 5/2008, de subvenciones de Castilla y León, ¿pueden realizarse pagos a cuenta cuando existan pagos anticipados pendientes de justificación?',opciones:['Sí, si lo prevé la convocatoria.','No, en ningún caso.','Sí, si el beneficiario garantiza el pago a cuenta.','Sí, con autorización expresa de la consejería competente en materia de Hacienda.'],respuesta_correcta:1}
};
aplicar({numero:'1072',fecha:'2026-11-12',records,edits});
