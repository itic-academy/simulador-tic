const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ue='https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk';
const admin='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const seguridad='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const age='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const presupuesto='https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const edits={
 6991:{texto:'A fecha de 15 de noviembre de 2026, ¿quién ocupa la Presidencia del Consejo Europeo?',opciones:['Ursula von der Leyen.','José Manuel Durão Barroso.','Mario Draghi.','António Costa.'],respuesta_correcta:3},
 6992:{texto:'Según el artículo 24 de la Ley 40/2015, ¿cuándo pueden los interesados promover la recusación?',opciones:['Solo antes de que se inicie el procedimiento.','Únicamente después de la propuesta de resolución.','Solo al presentar el primer escrito de alegaciones.','En cualquier momento de la tramitación del procedimiento.'],respuesta_correcta:3},
 6993:{texto:'Según la Ley 25/2007 vigente, señale la afirmación CORRECTA sobre los datos de comunicaciones electrónicas:',opciones:['Los operadores deben conservar el contenido de las comunicaciones.','La obligación de conservación incluye datos de llamadas infructuosas si fueron generados, tratados y conservados o registrados por el sujeto obligado.','La obligación de conservación cesa siempre a los cuatro meses.','Si la orden judicial no fija plazo, la cesión debe hacerse en 72 horas desde las 8:00 del siguiente día laborable.'],respuesta_correcta:1},
 6994:{texto:'De acuerdo con el artículo 58.2 de la Ley 40/2015, ¿con qué órganos cuentan en todo caso los Ministerios para gestionar servicios comunes?',opciones:['Una Subsecretaría.','Una Secretaría General Técnica dependiente de la Subsecretaría.','Ambas: una Subsecretaría y, dependiendo de ella, una Secretaría General Técnica.','Una Secretaría de Estado y una Dirección General.'],respuesta_correcta:2},
 6995:{texto:'Según el artículo 44.3 de la Ley 47/2003, los créditos del presupuesto de la Seguridad Social destinados a la acción protectora en su modalidad no contributiva y universal se especifican:',opciones:['A nivel de sección de programa.','A nivel de grupo de programas.','A nivel de capítulo.','A nivel de programa.'],respuesta_correcta:3}
};
const records=[
 [6991,[5],[],['Consejo Europeo','Presidencia','António Costa','mandato 2024-2027','Unión Europea'],[
  {url:'https://www.consilium.europa.eu/en/european-council/president/role/',referencia:'Consejo Europeo, página oficial del presidente: identifica a António Costa como presidente actual, en funciones desde el 1/12/2024.'},
  {url:'https://data.consilium.europa.eu/doc/document/ST-27-2024-INIT/en/pdf',referencia:'Decisión del Consejo Europeo EUCO 20/24: elección de António Costa para el periodo del 1/12/2024 al 31/05/2027.'},
  {url:ue,referencia:'ITIC Academy, bloque 02 Unión Europea, versión 2026.2 (01/10/2026): instituciones y Consejo Europeo, A1 tema 5; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 5: instituciones de la Unión Europea, incluido el Consejo Europeo.'}
 ],undefined,'Vigente D a fecha de 15/11/2026. António Costa asumió el cargo el 1/12/2024 y su mandato se extiende hasta el 31/05/2027. Se incluye fecha explícita porque la respuesta cambia con el tiempo; el programa A2 no tiene epígrafe específico equivalente.','vigente'],
 [6992,[8],['I-8'],['recusación','Ley 40/2015','artículo 24','abstención','procedimiento administrativo'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',referencia:'Ley 40/2015 consolidada, art. 24.1: los interesados pueden promover recusación en cualquier momento de la tramitación del procedimiento.'},
  {url:admin,referencia:'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, actualización 2026: Leyes 39/2015 y 40/2015 y procedimiento; A1 tema 8/A2 I.8; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 8: régimen jurídico de las Administraciones y procedimiento administrativo.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema I.8: Leyes 39/2015 y 40/2015.'}
 ],undefined,'Vigente D. La recusación se contempla en el artículo 24 de la Ley 40/2015, no en el artículo 24 de la Ley 39/2015, cuyo artículo 24 regula el silencio administrativo. El precepto permite promoverla en cualquier momento de la tramitación.','vigente'],
 [6993,[27],['I-7'],['Ley 25/2007','llamadas infructuosas','metadatos de comunicaciones','12 meses','cesión de datos','contenido de comunicaciones'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2007-18243',referencia:'Ley 25/2007 consolidada: art. 4.2 incluye las llamadas infructuosas si los datos son generados/tratados y conservados/registrados; art. 4.3 excluye llamadas no conectadas; art. 5 fija 12 meses por defecto, con ajuste reglamentario entre 6 meses y 2 años; art. 7.3 fija 7 días naturales por defecto para la cesión.'},
  {url:'https://www.boe.es/buscar/pdf/2007/BOE-A-2007-18243-consolidado.pdf',referencia:'Texto consolidado BOE de la Ley 25/2007, arts. 4, 5 y 7: conservación de datos de tráfico/localización, no contenido de la comunicación; plazos actualmente aplicables.'},
  {url:seguridad,referencia:'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, versión 2026: cotejo contextual de seguridad de redes y control de acceso a datos; no se localizó material de academia dedicado expresamente a la Ley 25/2007.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 27: régimen jurídico de protección de datos personales; correspondencia material con la conservación de metadatos y límites de acceso.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema I.7: protección de datos y su régimen jurídico.'}
 ],undefined,'Vigente B. La Ley obliga a conservar datos de llamadas infructuosas si se generaron/trataron y quedaron conservados/registrados por el operador; distingue las llamadas no conectadas, que excluye. No se conserva el contenido de la comunicación. El plazo general es 12 meses (modificable reglamentariamente entre 6 meses y 2 años) y el plazo supletorio de cesión judicial vigente es 7 días naturales, no 72 horas. Se actualizó este distractor antiguo. El temario de academia consultado no contiene un bloque específico sobre esta Ley; se anotó el cotejo contextual, sin afirmar cobertura literal.','vigente'],
 [6994,[4],['I-8'],['Ley 40/2015','artículo 58','Ministerios','Subsecretaría','Secretaría General Técnica','servicios comunes'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',referencia:'Ley 40/2015 consolidada, art. 58.2: todo Ministerio cuenta con Subsecretaría y, dependiendo de ella, Secretaría General Técnica para gestionar servicios comunes.'},
  {url:age,referencia:'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, actualización 2026: órganos centrales y organización de la AGE; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 4: AGE y sus órganos centrales.'},
  {url:a2,referencia:'Convocatoria oficial A2 GSI 2025, tema I.8: régimen jurídico y organización administrativa bajo la Ley 40/2015.'}
 ],undefined,'Vigente C. El art. 58.2 de la Ley 40/2015 establece ambos órganos y su relación de dependencia: una Subsecretaría y, dependiendo de ella, una Secretaría General Técnica. Se precisó el enunciado para reproducir la regla completa.','vigente'],
 [6995,[12],[],['Ley 47/2003','presupuesto de la Seguridad Social','acción protectora no contributiva','modalidad universal','nivel de programa'],[
  {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614',referencia:'Ley 47/2003, General Presupuestaria, art. 44.3: los créditos de la acción protectora no contributiva y universal de la Seguridad Social se especifican a nivel de programa.'},
  {url:presupuesto,referencia:'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC, actualización 2026: presupuestos generales del Estado y estructura/clasificación del gasto, A1 tema 12; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria oficial A1 GSI 2025, tema 12: estructura presupuestaria, clasificación del gasto y ejecución.'}
 ],undefined,'Vigente D. El artículo 44.3 de la Ley General Presupuestaria establece como excepción al nivel de grupo de programas que los créditos de la acción protectora no contributiva y universal de la Seguridad Social se especifiquen a nivel de programa. No se identifica epígrafe A2 directamente equivalente.','vigente']
];
aplicar({numero:'1334',fecha:'2026-11-15',records,edits});
