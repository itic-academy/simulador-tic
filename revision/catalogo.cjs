// Reconstruye el catálogo desde las copias del BOE descargadas en fuentes/.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const clean = s => s.replace(/<[^>]*>/g, '').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const catalogo = {fecha_consulta: '2026-10-01', programas: []};
for (const [cuerpo, archivo, inicio, fin, boe] of [
  ['A1', 'a1.html', 'ANEXO I', 'ANEXO II', 'BOE-A-2025-25938'],
  ['A2', 'a2.html', 'ANEXO IX', 'ANEXO X', 'BOE-A-2025-26262']
]) {
  const raw = fs.readFileSync(path.join(__dirname, 'fuentes', archivo), 'utf8');
  const start = raw.indexOf('>' + inicio + '</h5>');
  const end = raw.indexOf('>' + fin + '</h5>', start + 1);
  if (start < 0 || end < 0) throw Error('No se encuentra el anexo: ' + cuerpo);
  let section = raw.slice(start, end);
  if (cuerpo === 'A2') section = section.slice(section.indexOf('4. Programa.'));
  let bloque = '', grupo = '';
  const temas = [];
  for (const m of section.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)) {
    const text = clean(m[1]);
    if (/^[AB]\. Temas/.test(text)) {grupo = text; continue;}
    const header = text.match(/^([IVX]+)\. (.+)$/);
    if (header) {bloque = header[1]; continue;}
    const tema = text.match(/^(\d+)\. (.+)$/);
    if (tema && bloque) temas.push({id: cuerpo === 'A1' ? `A1-${tema[1]}` : `A2-${bloque}-${tema[1]}`, bloque, grupo, numero: +tema[1], titulo: tema[2]});
  }
  if (temas.length !== (cuerpo === 'A1' ? 133 : 57)) throw Error(`Número inesperado de temas ${cuerpo}: ${temas.length}`);
  if (new Set(temas.map(t => t.id)).size !== temas.length) throw Error('Temas duplicados');
  catalogo.programas.push({cuerpo, turno: 'ingreso_libre', fuente: `https://www.boe.es/diario_boe/txt.php?id=${boe}`, anexo: inicio, sha256_html: crypto.createHash('sha256').update(raw).digest('hex'), temas});
}
fs.writeFileSync(path.join(__dirname, 'temario-oficial.json'), JSON.stringify(catalogo, null, 2) + '\n');
console.log(catalogo.programas.map(p => `${p.cuerpo}: ${p.temas.length} temas`).join('\n'));
