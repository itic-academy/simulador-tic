const aplicar=require('./aplicar-lote.cjs');
const path=require('node:path'),fs=require('node:fs');
const ref=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const d02='https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk';
const d03='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const d05='https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const records=[
 [5166,['5'],[],['Comisión Europea','mandato','cinco años','Unión Europea'],[
  ref('https://commission.europa.eu/about/organisation/college-commissioners_en','Comisión Europea, College of Commissioners: el Colegio se designa por un mandato político de cinco años.'),
  ref('https://eur-lex.europa.eu/eli/treaty/teu_2012/art_17/oj','Tratado de la Unión Europea, art. 17: la Comisión ejerce sus responsabilidades por un mandato de cinco años.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 5: instituciones de la Unión Europea, incluida la Comisión.'),
  ref(d02,'ITIC Academy, bloque 02 «La Unión Europea», versión 2026.2: instituciones y composición de la Comisión; el plazo se contrasta con el Tratado y la Comisión Europea.')
 ],null,'El mandato ordinario del Colegio de Comisarios coincide con el ciclo institucional de cinco años. El programa oficial A2 GSI no incluye un tema específico de instituciones de la Unión Europea, por lo que no se asigna etiqueta A2.', 'vigente'],
 [5167,['5'],[],['Tribunal de Justicia de la Unión Europea','Presidencia','mandato de tres años','reelección'],[
  ref('https://curia.europa.eu/site/jcms/d2_5391/en/about-the-court-of-justice','Tribunal de Justicia de la Unión Europea, About the Court of Justice: los jueces eligen al presidente y vicepresidente por un período de tres años.'),
  ref('https://curia.europa.eu/panorama/2025/en/judicial-activity.html','TJUE, informe de actividad 2025: la Presidencia de la Corte se elige por tres años; se distingue del mandato de seis años de los jueces.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 5: instituciones de la Unión Europea y Tribunal de Justicia.'),
  ref(d02,'ITIC Academy, bloque 02 «La Unión Europea», versión 2026.2: instituciones y Tribunal de Justicia; duración contrastada con la fuente institucional Curia.')
 ],null,'Se concreta que el reactivo pregunta por el presidente del Tribunal de Justicia (la Corte), no por el presidente de una de sus salas: los jueces eligen a su presidente por tres años. No debe confundirse con el mandato de seis años de los jueces.', 'corregida'],
 [5168,['8'],['I-8'],['Ley 39/2015','interesados','procedimiento administrativo','artículo 4'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565','BOE, Ley 39/2015, art. 4.1: letras a), b) y c) definen las tres categorías de personas interesadas; la letra b) dice expresamente «sin haber iniciado el procedimiento» y la c), «en tanto no haya recaído resolución definitiva».'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 8: régimen jurídico y procedimiento administrativo.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.8: Leyes 39/2015 y 40/2015.'),
  ref(d03,'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026: Ley 39/2015, procedimiento y concepto de persona interesada.')
 ],null,'Se corrigen dos truncamientos de la versión de test. El art. 4.1.b) se refiere a quienes, sin iniciar el procedimiento, tienen derechos que pueden resultar afectados; la letra c) permite personarse a titulares de intereses legítimos hasta que recaiga resolución definitiva. Con esas precisiones, las tres categorías a), b) y c) son correctas y la opción es «Todas son correctas».', 'corregida'],
 [5169,['9'],['I-8'],['Ley 39/2015','recurso de alzada','actos que no ponen fin a la vía administrativa','actos de trámite cualificados'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565','BOE, Ley 39/2015, arts. 112.1 y 121: alzada contra resoluciones y actos de trámite cualificados que no pongan fin a la vía administrativa, ante el órgano superior jerárquico.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 9: revisión de actos y recursos administrativos.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.8: procedimiento administrativo común y régimen jurídico.'),
  ref(d03,'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026: recursos administrativos y Ley 39/2015.')
 ],null,'El art. 121 no permite alzada contra cualquier acto: procede contra resoluciones y actos de trámite cualificados del art. 112.1 que no pongan fin a la vía administrativa. Se precisa también la concordancia «vía administrativa».', 'corregida'],
 [5170,['12'],[],['Ley 47/2003','Ley General Presupuestaria','créditos extraordinarios','suplementos de crédito','informe trimestral','Cortes Generales'],[
  ref('https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614','BOE, Ley 47/2003, art. 56.6: el Ministro de Hacienda y Administraciones Públicas remite a las Cortes Generales, a través de su Oficina Presupuestaria, el informe trimestral sobre los créditos tramitados al amparo del artículo.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 12: presupuestos, modificaciones presupuestarias y control por las Cortes Generales.'),
  ref(d05,'ITIC Academy, bloque 05 «Contratación, presupuestos y compra TIC», versión 2026.2: modificaciones presupuestarias y control parlamentario; el órgano destinatario se verifica literalmente en BOE.')
 ],null,'El destinatario del informe previsto en el art. 56.6 de la Ley General Presupuestaria son las Cortes Generales; su Oficina Presupuestaria pone la documentación a disposición de diputados, senadores y comisiones. El precepto se refiere a créditos de organismos autónomos. El programa oficial A2 no contiene un tema específico de presupuestos públicos y no se fuerza etiqueta A2.', 'vigente']
];
const edits={
  5167:{texto:'¿Por cuánto tiempo eligen los jueces al presidente del Tribunal de Justicia de la Unión Europea?',opciones:['Tres años.','Cuatro años.','Cinco años.','Seis años.'],respuesta_correcta:0,comentarios:'El presidente y vicepresidente del Tribunal de Justicia son elegidos por los jueces por tres años. No se confunde con el período de seis años de los jueces.'},
  5168:{texto:'De acuerdo con el artículo 4.1 de la Ley 39/2015, ¿quiénes se consideran personas interesadas en el procedimiento administrativo?',opciones:['Quienes lo promuevan como titulares de derechos o intereses legítimos individuales o colectivos.','Quienes, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisión que se adopte.','Quienes tengan intereses legítimos individuales o colectivos que puedan resultar afectados y se personen antes de que recaiga resolución definitiva.','Todas las anteriores.'],respuesta_correcta:3,comentarios:'Las tres primeras opciones reproducen, con redacción abreviada fiel, las letras a), b) y c) del artículo 4.1 de la Ley 39/2015.'},
  5169:{texto:'Conforme a la Ley 39/2015, cabe recurso de alzada contra:',opciones:['Las disposiciones administrativas de carácter general.','Los actos que agoten la vía administrativa.','Cualquier acto de trámite, aunque no afecte al fondo ni impida continuar el procedimiento.','Las resoluciones y los actos de trámite cualificados que no pongan fin a la vía administrativa.'],respuesta_correcta:3,comentarios:'Arts. 112.1 y 121 de la Ley 39/2015: son recurribles en alzada las resoluciones y los actos de trámite cualificados, si no ponen fin a la vía administrativa.'}
};
const logPath=path.join(__dirname,'cambios-lote-969.json');
if(!fs.existsSync(logPath))aplicar({numero:'969',fecha:'2026-11-12',records,edits});
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
  5166:['ITIC Academy, bloque 02 «La Unión Europea», versión 2026.2: instituciones, Colegio y ciclo de cinco años.','Cotejo curricular directo con A1-5. La convocatoria oficial A2 no incluye un tema específico de la Unión Europea.'],
  5167:['ITIC Academy, bloque 02 «La Unión Europea», versión 2026.2: estructura institucional y Tribunal de Justicia; duración comprobada en Curia.','Cotejo curricular directo con A1-5. Sin tema específico de instituciones de la UE en el programa A2.'],
  5168:['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026: Ley 39/2015 y personas interesadas.','Cotejo A1-8/A2-I.8; se restituyen los incisos de los apartados b) y c) omitidos en el reactivo original.'],
  5169:['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026: recursos administrativos y Ley 39/2015.','Cotejo A1-9/A2-I.8; alzada requiere que el acto no ponga fin a la vía y, para trámites, que sea cualificado.'],
  5170:['ITIC Academy, bloque 05 «Contratación, presupuestos y compra TIC», versión 2026.2: modificaciones presupuestarias e información parlamentaria.','Cotejo directo A1-12. El programa A2 no tiene epígrafe de presupuestos públicos; se evita asignarle uno por analogía.']
};
const entries=new Map(log.cambios.map(c=>[c.id,c])),motive='Cotejo del temario ITIC Academy accesible en Drive y delimitación de los epígrafes oficiales A1/A2.';
for(const [key,[block,note]] of Object.entries(academy)){const id=Number(key),q=bank.preguntas.find(x=>x.id===id),entry=entries.get(id);if(!q||!entry)throw Error(`Falta ${id}`);const before={bloque_academia:q.clasificacion.bloque_academia,nota:q.clasificacion.nota};q.clasificacion.bloque_academia=block;q.clasificacion.nota=note;const corrections=entry.correcciones_posteriores||[];if(!corrections.some(x=>x.motivo===motive))corrections.push({fecha:'2026-11-12',motivo:motive,clasificacion_anterior:before,clasificacion_actualizada:{bloque_academia:block,nota:note}});entry.correcciones_posteriores=corrections;entry.actualizada=structuredClone(q);}
const byId=new Map(log.cambios.map(c=>[c.id,c]));let replaced=0;const raw=fs.readFileSync(bankPath,'utf8');const output=raw.replace(/^    \{[\s\S]*?^    \}/gm,b=>{const old=JSON.parse(b),c=byId.get(old.id);if(!c)return b;replaced++;return JSON.stringify(c.actualizada,null,2).split('\n').map(x=>`    ${x}`).join('\n');});if(replaced!==5)throw Error(`Se esperaban 5 preguntas, hubo ${replaced}`);fs.writeFileSync(bankPath,output);fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
