const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const inv = JSON.parse(fs.readFileSync(path.join(__dirname, 'inventario.json'), 'utf8'));
const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const examined = inv.total - inv.estados.sin_revisar;
const verified = inv.estados.vigente + inv.estados.corregida + inv.estados.historica;
const pending = inv.estados.pendiente_fuente + inv.estados.pendiente_ambiguedad;
const fmt = n => n.toLocaleString('es-ES');

text = text.replace(
  /Último lote secuencial:.*?sin revisar individualmente\./,
  `Último lote secuencial: 1233 (IDs 6486–6490). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar individualmente.`
);

const section = `## Lote 1233 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6486–6490. Se confirmó la transición entre estados como técnica de caja negra; se verificó la correspondencia entre almacenes DFD y una o varias entidades del modelo lógico en la matriz de consistencia de MÉTRICA v3, afinando el papel complementario del diccionario de datos; se sustituyó una pregunta ambigua que trataba el coste como excepción a la planificación por la actividad presupuestaria concreta que sí enumera MÉTRICA (evaluar recursos para proyectos del año próximo); se mantuvo CORBA con DII, ORB y DSI como elementos/interfaces válidos; y se precisó restricción sintáctica como tipo, longitud o patrón de representación, frente a regla semántica. Se conservaron los originales y se añadieron fuentes técnicas/primarias, clasificación A1/A2 y cotejo con ITIC Academy/Drive (bloques 39, 38, 12, 17 y 28). Cuando una etiqueta académica A2 no coincide con la convocatoria vigente se registra la numeración oficial. Inventario local: ${fmt(examined)} examinadas, ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas), ${fmt(pending)} pendientes y ${fmt(inv.estados.sin_revisar)} sin revisar individualmente; errores estructurales: ${inv.errores}. Pendiente verificar la publicación de este lote.`;

const at = text.indexOf('## Lote 1232 —');
assert.ok(at > 0, 'Falta el lote 1232');
assert.ok(!text.includes('## Lote 1233 —'), 'El lote 1233 ya está documentado');
text = text.slice(0, at) + section + '\n\n' + text.slice(at);
fs.writeFileSync(file, text);
console.log(`README actualizado: ${examined} examinadas; ${verified} verificadas; ${pending} pendientes; ${inv.estados.sin_revisar} sin revisar.`);
