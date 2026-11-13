const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1201 (IDs 6326–6330). Acumulado: 6.325 preguntas examinadas individualmente; 6.214 verificadas (1.228 vigentes, 4.532 corregidas y 454 históricas); 111 pendientes documentadas (45 de fuente y 66 de ambigüedad); 5.798 sin revisar individualmente.';
const neu='Último lote secuencial: 1202 (IDs 6331–6335). Acumulado: 6.330 preguntas examinadas individualmente; 6.219 verificadas (1.230 vigentes, 4.535 corregidas y 454 históricas); 111 pendientes documentadas (45 de fuente y 66 de ambigüedad); 5.793 sin revisar individualmente.';
const section=`## Lote 1202 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6331–6335 sobre condiciones de interbloqueo, ponderación multicriterio, geolocalización web, capacidad de host IPv4 y coordinación Scrum multiequipo. Se corrigen tres formulaciones y se confirman dos respuestas.

- **6331 — condiciones de deadlock:** **vigente**, respuesta D. Busy waiting no es una de las cuatro condiciones de Coffman: exclusión mutua, retención y espera, no apropiación y espera circular. A1-59/A2-II.2.
- **6332 — pesos en decisión multicriterio:** **vigente**, respuesta C. Delphi es un método subjetivo basado en expertos y entropía de Shannon uno objetivo basado en los datos; ambos pueden obtener pesos de criterios. A1-42/A2-II.15.
- **6333 — API de geolocalización web:** **corregida**, respuesta D, Navigator.geolocation. Se quita la atribución directa a HTML5: es una especificación W3C separada; la interfaz Navigator expone el atributo y el acceso requiere contexto seguro. A1-65/A2-III.12.
- **6334 — hosts /26:** **corregida**, respuesta D: 62 direcciones host convencionales (64 totales menos red y broadcast). Se especifica el cálculo y se advierte que 198.51.100.0/24 está reservado como TEST-NET-2 para documentación, no para producción pública. A1-115/A2-IV.8.
- **6335 — coordinación Scrum multiequipo:** **corregida**, respuesta B, Scrum of Scrums. Se distingue del Daily Scrum oficial, que la Scrum Guide reserva a los Developers de cada Scrum Team; Scrum of Scrums es una práctica de escalado, con un representante por equipo y frecuencia que puede ser diaria o menor. A1-37/88/A2-III.2.

Fuentes primarias: [Coffman, Elphick y Shoshani, System Deadlocks (1971)](https://uobdv.github.io/Design-Verification/Supplementary/System_Deadlocks-Four_necessary_and_sufficient_conditions_for_deadlock.pdf); [análisis de métodos de ponderación MCDA](https://pmc.ncbi.nlm.nih.gov/articles/PMC7490576/); [W3C Geolocation](https://www.w3.org/TR/geolocation/); [RFC 4632 CIDR](https://www.rfc-editor.org/rfc/rfc4632.html) y [RFC 5737, TEST-NET-2](https://www.rfc-editor.org/rfc/rfc5737.html); [PMI Disciplined Agile, Scrum of Scrums](https://www.pmi.org/microsites/disciplined-agile/team-lead/practice-scrum-of-scrums), [Agile Alliance](https://agilealliance.org/glossary/scrum-of-scrums/) y [Scrum Guide 2020](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 37, 42, 59, 65, 88 y 115; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas II.2, II.15, III.2, III.12 y IV.8.

Cotejo curricular ITIC Academy/Drive —cobertura temática, no verificación de claves—: [bloque 27 Sistemas operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk) para deadlocks (6331); [bloque 17 Adquisición y decisión multicriterio](https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk) (6332); [bloque 30 Tecnologías de sistemas de información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), APIs y JavaScript (6333); [bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), IPv4 y direccionamiento (6334); [bloque 15 Metodologías ágiles](https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk), Scrum/Kanban y coordinación (6335).

Ejecutados revisar-lote-1202.cjs, academia-lote-1202.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.330 examinadas; 6.219 verificadas (1.230 vigentes, 4.535 corregidas y 454 históricas); 111 pendientes documentadas (45 de fuente, 66 de ambigüedad); 5.793 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'El resumen previo no coincide con lote 1201');assert.ok(s.includes('## Lote 1201 — 13 de noviembre de 2026'),'No se encontró la sección 1201');
s=s.replace(old,neu).replace('## Lote 1201 — 13 de noviembre de 2026',section+'## Lote 1201 — 13 de noviembre de 2026');fs.writeFileSync(file,s);console.log('README actualizado para lote 1202.');
