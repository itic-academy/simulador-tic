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
  `Último lote secuencial: 1232 (IDs 6481–6485). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar individualmente.`
);

const section = `## Lote 1232 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6481–6485. Se confirmó con PeopleCert la práctica ITIL 4 Service Request Management y se diferenció de Service Desk, Service Level Management y Problem Management; se contrastó UML 2.0 con la especificación OMG para precisar que los perfiles usan estereotipos, valores etiquetados asociados a sus propiedades y restricciones, mientras que Artifact es un metatipo, no un mecanismo de perfil; se reformuló la definición de pruebas de regresión conforme al sílabo ISTQB vigente para distinguirlas de confirmation testing; se corrigió el error de clave y traducción en los modos COCOMO clásico (orgánico, semidesacoplado y empotrado); y se precisó la EED/DRE como proporción de defectos eliminados en el proceso considerado, sin tratarla como medida suficiente de toda la calidad del producto. Se preservaron originales y se añadieron explicaciones, fuentes técnicas primarias, clasificación A1/A2 y cotejo de ITIC Academy/Drive (bloques 41, 9, 38, 39 y 17); cuando la academia sólo da contexto o su epígrafe no coincide con la numeración BOE, se deja indicado y prevalece el temario oficial. Inventario local: ${fmt(examined)} examinadas, ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas), ${fmt(pending)} pendientes y ${fmt(inv.estados.sin_revisar)} sin revisar individualmente; errores estructurales: ${inv.errores}. Pendiente verificar la publicación de este lote.`;

const at = text.indexOf('## Lote 1231 —');
assert.ok(at > 0, 'Falta el lote 1231');
assert.ok(!text.includes('## Lote 1232 —'), 'El lote 1232 ya está documentado');
text = text.slice(0, at) + section + '\n\n' + text.slice(at);
fs.writeFileSync(file, text);
console.log(`README actualizado: ${examined} examinadas; ${verified} verificadas; ${pending} pendientes; ${inv.estados.sin_revisar} sin revisar.`);
