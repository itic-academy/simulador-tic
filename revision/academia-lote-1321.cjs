const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1321.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  admin: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
  governance: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',
  privacy: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',
  constitution: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk'
};
const notes = {
  6926: ['admin', 'ITIC Academy, bloque 03 Actuación Administrativa (actualización 2026): cubre el sector público institucional y menciona la constitución en abril de 2026 de la Agencia Estatal de Evaluación de Políticas Públicas (AEEPP). El bloque 01 aporta el marco general de organismos y entidades estatales; no se confunde la AEEPP con la Agencia Estatal de Administración Digital (AEAD). La adscripción ministerial concreta se verifica en el Estatuto oficial de 2026.'],
  6927: ['governance', 'ITIC Academy, bloque 10 Gobernanza TIC y Administración Digital (2026): incluye el Sistema de Información Administrativa (SIA) como inventario de procedimientos y servicios y explica la gobernanza vigente de la AGE. El bloque 03 también identifica SIA entre los servicios comunes del procedimiento electrónico. La competencia del órgano concreto se coteja en el Real Decreto 210/2024 consolidado.'],
  6928: ['admin', 'ITIC Academy, bloque 03 Actuación Administrativa (2026): la sección de empleo público identifica la Ley 53/1984 como norma de incompatibilidades y distingue las incompatibilidades del personal y de los altos cargos. El régimen exacto de autorizaciones, límites y excepciones se contrasta en el texto de la ley.'],
  6929: ['privacy', 'ITIC Academy, bloque 08 Protección de Datos (2026): desarrolla el RGPD, las bases de licitud, el artículo 6 y el régimen aplicable al tratamiento por administraciones; incluye como temario A1-27 y A2-I.7. El análisis de la respuesta se basa directamente en el listado cerrado del artículo 6.1 RGPD.'],
  6930: ['governance', 'ITIC Academy, bloque 10 Gobernanza TIC y Administración Digital (2026): describe funciones de la CETIC, entre ellas la cooperación con comunidades autónomas y entidades locales, bajo el Real Decreto 1125/2024. La atribución legal vigente se confirma en el artículo 3.3.h de ese real decreto.']
};
const marker = 'Cotejo curricular ITIC Academy:';
const strip = value => {
  const s = (value || '').trim();
  const i = s.indexOf(marker);
  return i < 0 ? s : s.slice(0, i).trim();
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [key, description] = notes[change.id] || [];
  assert.ok(q && description, `Falta cotejo para ${change.id}`);
  const code = [...q.clasificacion.A1, ...q.clasificacion.A2].join('/') || 'sin epígrafe A2 específico';
  const note = `${marker} ${description} Correspondencia oficial: ${code}. El material académico sirve para cotejar cobertura, no sustituye la fuente primaria.`;
  q.clasificacion.bloque_academia = description;
  q.clasificacion.nota = `${strip(q.clasificacion.nota)} ${note}`.trim();
  q.comentarios = `${strip(q.comentarios)} ${note}`.trim();
  q.revision.observaciones = `${strip(q.revision.observaciones)} ${note}`.trim();
  const url = docs[key];
  if (!q.revision.fuentes.some(source => source.url === url)) {
    q.revision.fuentes.push({url, referencia: `Cotejo curricular ITIC Academy: ${description}`});
  }
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de los bloques de ITIC Academy aplicado a 6926–6930.');
