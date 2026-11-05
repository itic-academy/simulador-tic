const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-729.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
  3966:{a1:['101'],a2:['III-8'],url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',detail:'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: contenidos de mantenimiento y costes de software; correspondencia A1-101/A2-III-8. El bloque permite ubicar el tema, pero no identifica la fuente, muestra o categorías de la ordenación de costes; por eso la clave exacta permanece pendiente de aclaración.'},
  3967:{a1:['86','101'],a2:['III-8'],url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',detail:'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: mantenimiento/evolución de sistemas; correspondencia A1-86/A1-101 y A2-III-8. La noción de sistema legacy se verifica aparte en el glosario de GAO.'},
  3968:{a1:['86','101'],a2:['III-2','III-8'],url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',detail:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», y bloque 39 «Calidad y mantenimiento», ediciones 2026: ciclo de vida, reingeniería, legado y mantenimiento; correspondencia A1-86/A1-101 y A2-III-2/III-8. Las razones técnicas se contrastan con el SEI.'},
  3969:{a1:['101'],a2:['III-8'],url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',detail:'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: proceso de mantenimiento del software y ciclo de vida; correspondencia A1-101/A2-III-8. La secuencia exacta se comprueba en MÉTRICA v3.'},
  3970:{a1:['101'],a2:['III-8'],url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',detail:'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026: pruebas de regresión dentro del mantenimiento; correspondencia A1-101/A2-III-8. La tarea MSI 3.3 se comprueba en MÉTRICA v3.'}
};
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];
  if(!q?.revision||!q.clasificacion||!m)throw new Error(`Falta revisión o cotejo: ${c.id}`);
  q.clasificacion.A1=m.a1.map(x=>`A1-${x}`);q.clasificacion.A2=m.a2.map(x=>`A2-${x}`);
  q.clasificacion.bloque_academia=`Cotejo temático con ${m.detail}`;
  q.clasificacion.nota=c.actualizada.revision.estado.startsWith('pendiente_')?'Cotejo curricular realizado; la validez de la distribución/ranking exacto no queda acreditada por el material académico ni por los estudios consultados.':'El temario académico sitúa el contenido; las definiciones específicas se contrastan con las fuentes primarias citadas.';
  q.revision.observaciones=`${q.revision.observaciones} ${m.detail}`;q.comentarios=q.revision.observaciones.trim();
  for(const f of [
    {url:m.url,referencia:m.detail},
    {url:boeA1,referencia:`Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.`},
    {url:boeA2,referencia:`Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.`}
  ])if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de academia y programas oficiales A1/A2 aplicado a IDs 3966–3970.');
