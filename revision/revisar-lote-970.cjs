const aplicar=require('./aplicar-lote.cjs');
const path=require('node:path'),fs=require('node:fs');
const ref=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const d03='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const d06='https://drive.google.com/file/d/1nZeCK8ak3jlwIK-ASVBK6H8HXnGRxub_/view?usp=drivesdk';
const records=[
 [5171,['15','17'],[],['ERTE','COVID-19','hostelería','turismo','impacto laboral'],[
  ref('https://revista.seg-social.es/-/proteccion-erte','Seguridad Social, balance de ERTE de 2023: desde marzo de 2020, hostelería (servicios de comidas y bebidas) acumuló el mayor número de relaciones laborales protegidas por ERTE (19 %), seguida del comercio minorista.'),
  ref('https://www.seg-social.es/wps/portal/wss/internet/EstadisticasPresupuestosEstudios/Estadisticas/EST8/22bfb5ae-8eba-4c44-a258-93a26194e11b','Seguridad Social, series de afiliados en ERTE COVID-19, marzo 2020–octubre 2021 y series posteriores; datos oficiales disponibles para acotar el período histórico.'),
  ref(a1,'Convocatoria A1 GSI 2025, temas 15 (servicios y turismo) y 17 (mercado de trabajo y políticas de empleo).'),
  ref(d06,'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.1: turismo, servicios y mercado de trabajo; cifra histórica contrastada con Seguridad Social.')
 ],null,'El enunciado original era temporalmente indeterminado. Se acota al conjunto acumulado de ERTE vinculados a la pandemia de COVID-19 desde marzo de 2020: la Seguridad Social informó que hostelería (servicios de comidas y bebidas) concentró el mayor número, con 19 %. Se formula «hostelería» en vez del sector amplio «turístico» para seguir la categoría estadística de la fuente. Es un dato histórico, no una afirmación sobre ERTE actuales.', 'historica'],
 [5172,['16'],['I-5'],['Plan de Igualdad AGE','Ley Orgánica 3/2007','artículo 64','evaluación anual','Consejo de Ministros'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115','BOE, Ley Orgánica 3/2007, art. 64: el Gobierno aprueba el Plan AGE al inicio de cada legislatura y su cumplimiento «será evaluado anualmente por el Consejo de Ministros».'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 16: políticas de igualdad de género y contra la violencia de género.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.5: políticas de igualdad y contra la violencia de género.'),
  ref(d06,'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.1: políticas de igualdad; el órgano y periodicidad se verifican en el texto vigente del artículo 64.')
 ],null,'El artículo 64 distingue dos momentos: el Gobierno aprueba el Plan al inicio de cada legislatura, pero evalúa su cumplimiento anualmente mediante el Consejo de Ministros. La respuesta es A.', 'vigente'],
 [5173,['16'],['I-5'],['acoso por razón de sexo','acoso sexual','LO 3/2007','artículo 7'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115','BOE, Ley Orgánica 3/2007, art. 7.2: acoso por razón de sexo es el comportamiento realizado en función del sexo con propósito o efecto de atentar contra la dignidad y crear entorno intimidatorio, degradante u ofensivo.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 16: políticas de igualdad de género.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.5: igualdad de trato y políticas contra la violencia de género.'),
  ref(d06,'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.1: igualdad, acoso por razón de sexo y acoso sexual; definiciones comprobadas en BOE.')
 ],null,'La definición corresponde al acoso por razón de sexo del artículo 7.2. Se diferencia del acoso sexual del apartado 1, que exige comportamiento de naturaleza sexual; el acoso por razón de sexo no requiere ese carácter sexual.', 'vigente'],
 [5174,['22'],['I-6'],['LSSICE','Ley 34/2002','artículo 6','autorización previa','servicios de la sociedad de la información'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758','BOE, Ley 34/2002, art. 6: la prestación de servicios de la sociedad de la información no está sujeta a autorización previa; ello no altera regímenes generales de autorización que no tengan por objeto específico y exclusivo la prestación electrónica.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 22: legislación sobre sociedad de la información y administración electrónica.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.6: sociedad de la información y régimen jurídico de los servicios digitales.'),
  ref(d03,'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2: legislación de sociedad de la información en España y Europa; literal cotejado en BOE.')
 ],null,'La regla general del artículo 6 LSSICE es que la prestación de servicios de la sociedad de la información no requiere autorización previa específica. Se preservan las autorizaciones generales del ordenamiento que no tengan por objeto exclusivo la prestación electrónica; por ello los distractores de excepciones especiales por salud o infancia son incorrectos.', 'vigente'],
 [5175,['22'],['I-6'],['LSSICE','Ley 34/2002','artículo 41','medidas provisionales','procedimiento sancionador'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758','BOE, Ley 34/2002, art. 41.1: enumera suspensión/cierre temporal, precinto/depósito/incautación de registros y equipos, y advertencia pública; el artículo también salvaguarda competencias judiciales en su apartado 2.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 22: legislación sobre sociedad de la información.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.6: sociedad de la información y régimen jurídico de los servicios digitales.'),
  ref(d03,'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2: legislación de servicios de la sociedad de la información y comercio electrónico; medidas legales verificadas en BOE.')
 ],null,'El artículo 41.1 lista suspensión temporal/cierre provisional, precinto/depósito/incautación de registros y equipos informáticos, y advertencia pública. No incluye como medida enumerada una intervención provisional de activos y bienes del prestador. El apartado 2 reserva a la autoridad judicial las medidas cuando el ordenamiento le atribuya competencia exclusiva.', 'vigente']
];
const edits={
  5171:{texto:'En España, durante el período acumulado de ERTE vinculados a la pandemia de COVID-19 desde marzo de 2020, ¿qué actividad concentró el mayor número de relaciones laborales protegidas por ERTE entre estas opciones?',opciones:['Hostelería (servicios de comidas y bebidas), dentro del sector turístico.','Comercio electrónico.','Servicios de ciberseguridad.','Todas las anteriores por igual.'],respuesta_correcta:0,comentarios:'En el balance publicado por Seguridad Social en 2023, hostelería acumulaba el mayor número de relaciones laborales cubiertas por ERTE desde marzo de 2020 (19 %). Es un dato histórico del período COVID, no una comparación de ERTE actuales ni una clasificación completa de todo el sector turístico.'},
  5174:{texto:'Según el artículo 6 de la Ley 34/2002 (LSSICE), la prestación de servicios de la sociedad de la información:',opciones:['Está sujeta siempre a autorización previa específica.','No está sujeta a autorización previa específica, sin perjuicio de los regímenes de autorización generales que correspondan a la actividad.','Solo está exenta de autorización previa si no presta servicios de salud.','Solo está exenta de autorización previa si no presta servicios dirigidos a menores.'],respuesta_correcta:1,comentarios:'El artículo 6 excluye una autorización previa específica para la prestación electrónica del servicio, pero deja intactas las autorizaciones generales no creadas exclusiva y específicamente para prestarlo por vía electrónica.'}
};
const logPath=path.join(__dirname,'cambios-lote-970.json');
if(!fs.existsSync(logPath))aplicar({numero:'970',fecha:'2026-11-12',records,edits});
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
  5171:['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.1: sector servicios/turismo y mercado de trabajo; dato de COVID contrastado con Seguridad Social.','Cotejo A1-15/A1-17 como marco de servicios, turismo y mercado laboral. Sin etiqueta A2 por falta de un epígrafe económico/laboral equivalente; pregunta histórica limitada a ERTE-COVID.'],
  5172:['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.1: políticas de igualdad en empleo y sector público.','Cotejo A1-16/A2-I.5; periodicidad y órgano evaluator verificados en el art. 64 LO 3/2007.'],
  5173:['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026.1: igualdad y acoso por razón de sexo.','Cotejo A1-16/A2-I.5; definición conforme al art. 7.2 LO 3/2007.'],
  5174:['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2: legislación de sociedad de la información en España y Europa.','Cotejo A1-22/A2-I.6; se distingue la regla de autorización específica de otros regímenes generales.'],
  5175:['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2: servicios de sociedad de la información y régimen jurídico.','Cotejo A1-22/A2-I.6; medidas provisionales contrastadas con el texto consolidado del art. 41 LSSICE.']
};
const entries=new Map(log.cambios.map(c=>[c.id,c])),motive='Cotejo de bloques ITIC Academy accesibles en Drive y delimitación temporal/temática conforme a fuentes oficiales.';
for(const [key,[block,note]]of Object.entries(academy)){const id=Number(key),q=bank.preguntas.find(x=>x.id===id),entry=entries.get(id);if(!q||!entry)throw Error(`Falta ${id}`);const before={bloque_academia:q.clasificacion.bloque_academia,nota:q.clasificacion.nota};q.clasificacion.bloque_academia=block;q.clasificacion.nota=note;const corrections=entry.correcciones_posteriores||[];if(!corrections.some(x=>x.motivo===motive))corrections.push({fecha:'2026-11-12',motivo:motive,clasificacion_anterior:before,clasificacion_actualizada:{bloque_academia:block,nota:note}});entry.correcciones_posteriores=corrections;entry.actualizada=structuredClone(q);}
const byId=new Map(log.cambios.map(c=>[c.id,c]));let replaced=0;const raw=fs.readFileSync(bankPath,'utf8'),output=raw.replace(/^    \{[\s\S]*?^    \}/gm,b=>{const old=JSON.parse(b),c=byId.get(old.id);if(!c)return b;replaced++;return JSON.stringify(c.actualizada,null,2).split('\n').map(x=>`    ${x}`).join('\n');});if(replaced!==5)throw Error(`Se esperaban 5 preguntas, hubo ${replaced}`);fs.writeFileSync(bankPath,output);fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
