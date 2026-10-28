const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-404.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 scrum:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1 (18-09-2026), apartados 4.2–4.3: Scrum, artefactos y compromisos; aborda el Product Backlog en su mapa actual de Scrum.'},
 redes:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 «Redes», actualización 2026: conceptos, conmutación de circuitos y paquetes, protocolos, encaminamiento y redes LAN. Sirve como correspondencia curricular general; no presenta OpenFlow como sinónimo de SDN ni desarrolla necesariamente message switching.'},
 video:{url:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',label:'ITIC Academy, bloque 50 «Videoconferencia, SSO y herramientas de trabajo colaborativo», nuevo temario 2026: tema A1-130 y A2-IV-16, sistemas de videoconferencia, protocolos, dimensionamiento y calidad. Encuadre curricular, no fuente normativa sobre «Zoombombing».'},
 economia:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, bloque 6 «Economía, sociedad, empleo y transformación digital», actualización a 01-10-2026: temas A1 14 y 15; PIB/renta nacional y sectores productivos. Los datos estadísticos se cotejan directamente con el INE.'}
};
const mapping={
 2336:{topics:['A1-37','A1-88','A2-III-2'],doc:'scrum',detail:'A1-88 incluye expresamente Scrum, historias de usuario y metodologías ágiles; A1-37 metodologías ágiles para gestión de proyectos; A2-III-2 metodologías de desarrollo.'},
 2337:{topics:['A1-108','A2-IV-8'],doc:'redes',detail:'OpenFlow es una tecnología de redes; la relación directa de temario se hace con conceptos de redes de telecomunicaciones (A1-108) y redes locales/protocolos/técnicas (A2-IV-8), sin atribuirle un epígrafe explícito.'},
 2338:{topics:['A1-125','A1-130','A2-IV-12','A2-IV-16'],doc:'video',detail:'A1-125 cubre tipos de ataques en redes y A1-130 videoconferencia; A2-IV-12 seguridad de redes y A2-IV-16 videoconferencia. El temario sitúa el ámbito, no formaliza la etiqueta coloquial bombing.'},
 2339:{topics:['A1-108','A2-IV-8'],doc:'redes',detail:'A1-108 incluye conmutación y conceptos de telecomunicaciones; A2-IV-8 comprende redes locales, protocolos y técnicas de transmisión. No se fuerza una equivalencia más específica del término message switching.'},
 2340:{topics:['A1-14','A1-15'],doc:'economia',detail:'A1-14 comprende PIB, renta y magnitudes económicas; A1-15 trata sectores productivos. No se asigna epígrafe A2 porque el programa de Gestión de Sistemas e Informática no formula esta distribución sectorial del PIB como tema propio.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2336,2337,2338,2339,2340]);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapping[c.id],d=docs[m.doc];assert.ok(q?.revision&&m&&d,`Falta pregunta ${c.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${c.id}`);
 q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));
 const curriculum=`${d.label}. ${m.detail}`;
 const note=`Cotejo curricular: ${curriculum} Correspondencia contrastada con revision/temario-oficial.json y programas oficiales de la convocatoria A1 (anexo I) y A2 GSI (anexo IX), BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia contextualiza el programa; la respuesta se sustenta en las fuentes primarias anotadas en la revisión.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 404 completado.');
