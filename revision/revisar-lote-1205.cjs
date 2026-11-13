const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
const law='https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const academy6='https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
apply({numero:'1205',fecha:'2026-11-13',records:[
 [6346,['11'],[],['contrato de servicios','SARA','regulación armonizada','umbrales 2026-2027'],[
  src('https://boe.es/diario_boe/txt.php?id=BOE-A-2025-26605','Orden HAC/1517/2025, vigente desde 1-1-2026: sustituye en los artículos 21.1.a y 22.1.a LCSP el umbral de 143.000 por 140.000 euros para órganos de la AGE y sus organismos autónomos.'),
  src(law,'Ley 9/2017, artículos 22.1.a y disposición adicional undécima: contratos de servicios SARA y actualización bianual de umbrales europeos.'),
  src('https://eur-lex.europa.eu/eli/reg_del/2025/2152/oj','Reglamento Delegado (UE) 2025/2152: revisa los umbrales europeos de contratación pública para 2026–2027.'),
  src('https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk','ITIC Academy, bloque 5 Contratación, Presupuestos, Convenios y Compra TIC, edición 2026: LCSP y umbrales sujetos a regulación armonizada (cobertura curricular directa).'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: contratos de las Administraciones públicas y LCSP.'),
  src(a2,'ITIC Academy declara que este bloque A1 no tiene equivalente específico en el temario A2; no se fuerza correspondencia A2.')
 ],{texto:'A partir del 1 de enero de 2026, los contratos de servicios de los organismos autónomos de la AGE quedan sujetos a regulación armonizada si su valor estimado, sin IVA, es igual o superior a:'},'La respuesta correcta es A: 140.000 euros. Los 143.000 euros correspondían al umbral anterior; la Orden HAC/1517/2025 actualizó desde el 1-1-2026 el artículo 22.1.a LCSP para el bienio 2026–2027. Se añade fecha, organismo y exclusión de IVA para evitar que la pregunta quede obsoleta o mezcle umbrales de otros tipos de entidad/contrato.', 'corregida'],
 [6347,['11'],[],['encargo a medio propio','autorización Consejo de Ministros','12 millones','artículo 32.6.c LCSP'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902#art32','Ley 9/2017, artículo 32.6.c: los órganos del sector público estatal con condición de poder adjudicador necesitan autorización del Consejo de Ministros cuando el gasto derivado del encargo sea igual o superior a 12.000.000 euros; autorización previa a la suscripción.'),
  src('https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk','ITIC Academy, bloque 5 Contratación, Presupuestos, Convenios y Compra TIC, edición 2026: medios propios y encargos dentro de la LCSP; cobertura curricular directa A1.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 11: contratos públicos y Ley 9/2017.'),
  src(a2,'ITIC Academy declara que el bloque de contratación pública A1 no tiene equivalente específico en el temario A2; no se fuerza correspondencia A2.')
 ],{texto:'Conforme al artículo 32.6.c de la Ley 9/2017, ¿a partir de qué importe de gasto derivado del encargo a un medio propio debe obtenerse autorización previa del Consejo de Ministros cuando el órgano pertenece al sector público estatal y es poder adjudicador?'},'La respuesta B es 12.000.000 euros, inclusive. La autorización debe obtenerse antes de suscribir el encargo. El nuevo enunciado explicita los requisitos subjetivos del artículo 32.6.c y evita generalizar la regla a cualquier poder adjudicador.', 'corregida'],
 [6348,['14'],['I-4'],['Agenda 2030','Objetivos de Desarrollo Sostenible','ODS','169 metas','17 objetivos'],[
  src('https://sdgs.un.org/2030agenda','Naciones Unidas, Transforming our world: the 2030 Agenda for Sustainable Development, resolución A/RES/70/1: establece 17 Objetivos de Desarrollo Sostenible y 169 metas.'),
  src('https://www.un.org/en/development/desa/population/publications/2030_Agenda_en.pdf','Asamblea General de Naciones Unidas, A/RES/70/1: apartado 18 anuncia 17 Objetivos de Desarrollo Sostenible con 169 metas asociadas.'),
  src(academy6,'ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Transformación Digital, actualización octubre de 2026: Agenda 2030/ODS dentro del tema A1-14 y coincidencia A2; cotejo directo.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 14: Agenda 2030 y Objetivos de Desarrollo Sostenible.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.4: Agenda 2030 y Objetivos de Desarrollo Sostenible.')
 ],null,'La respuesta C es correcta: la Agenda 2030 contiene 17 ODS y 169 metas. Es una cifra establecida en la resolución A/RES/70/1 de la Asamblea General de las Naciones Unidas.', 'vigente'],
 [6349,['14','15'],[],['PAC','PEPAC','Ayuda Básica a la Renta para la Sostenibilidad','capping','degresividad','costes salariales'],[
  src('https://www.mapa.gob.es/dam/mapa/contenido/reforma-de-la-pac/plan-estrategico-pac-post-2020/documentos/resumen-pac-es.pdf','MAPA, Plan Estratégico de la PAC de España 2023–2027, apartado “Limitación de pagos (capping) y degresividad”: el límite nominal de la ABRS es 100.000 euros, con posibilidad de descontar costes salariales; el propio plan aclara que ninguna explotación percibirá más de 200.000 euros de ABRS tras esos ajustes.'),
  src('https://eur-lex.europa.eu/eli/reg/2021/2115/oj','Reglamento (UE) 2021/2115, artículo 17: reducción/capping de la ayuda básica a la renta y consideración de costes laborales.'),
  src(academy6,'ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Transformación Digital, actualización 2026: sectores productivos y desarrollo económico; cotejo curricular general, sin afirmar cobertura específica del importe de capping.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 14 (política económica/sostenibilidad) y 15 (sector primario).'),
  src(a2,'El programa A2 cotejado no contiene epígrafe específico de PAC, capping o política agraria; no se fuerza equivalencia.')
 ],{texto:'Según el Plan Estratégico de la PAC de España 2023–2027, ¿cuál es el límite nominal de la Ayuda Básica a la Renta para la Sostenibilidad por persona beneficiaria y año, antes de aplicar las deducciones permitidas por costes salariales?'},'La respuesta B es 100.000 euros como límite nominal de la ABRS. El enunciado original decía “ayuda máxima” sin distinguir el capping de las deducciones por costes laborales: el Plan Estratégico español permite descontar ciertos costes y advierte que, tras esos ajustes, una explotación podría percibir hasta 200.000 euros de ABRS. Se acota la pregunta a la cifra nominal para que 100.000 euros no se presente como techo absoluto de todo pago posible.', 'corregida'],
 [6350,['15'],[],['FEADER','Fondo Europeo Agrícola de Desarrollo Rural','PAC','desarrollo rural','PEPAC 2023-2027'],[
  src('https://agriculture.ec.europa.eu/common-agricultural-policy/financing-cap/cap-funds_en','Comisión Europea, fondos de la PAC: el Fondo Europeo Agrícola de Desarrollo Rural (FEADER/EAFRD) financia el desarrollo rural, segundo pilar de la PAC.'),
  src('https://www.mapa.gob.es/es/pac/instrumentos-financieros/','MAPA, instrumentos financieros del PEPAC 2023–2027: identifica FEADER como Fondo Europeo Agrícola y de Desarrollo Rural y describe sus apoyos a inversiones y proyectos rurales.'),
  src('https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Transformación Digital, edición 2026: sectores productivos y desarrollo rural; cotejo curricular general, sin atribuir definición textual del acrónimo.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 15: sector primario y sectores económicos.'),
  src(a2,'El programa A2 cotejado no incluye un epígrafe específico de política agrícola común o FEADER; no se fuerza equivalencia.')
 ],null,'La opción A desarrolla correctamente FEADER: Fondo Europeo Agrícola de Desarrollo Rural. El FEADER financia la contribución de la PAC al desarrollo rural; no debe confundirse con FEDER (desarrollo regional), FSE (fondo social) ni FEGA, organismo pagador/coordinador español.', 'vigente']
]});
