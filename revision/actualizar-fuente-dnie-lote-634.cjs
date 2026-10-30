const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-634.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const q = bank.preguntas.find(x => x.id === 3488);
const change = log.cambios.find(x => x.id === 3488);
if (!q || !change) throw new Error('No se encontró la pregunta 3488 en el banco y su registro.');
const dpc = {url: 'https://www.dnielectronico.es/PDFs/Politicas_de_certificacion_v3.4.pdf', referencia: 'DGP, Declaración de Prácticas y Políticas de Certificación DNIe v3.4, junio de 2026, apartado 6.1.5, p. 110: raíces 4096 bits; subordinadas emitidas por AC Raíz 2048 bits y subordinadas emitidas por AC Raíz 2, 4096 bits.'};
const catalog = {url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_501', referencia: 'Portal DNIe de la DGP, catálogo oficial de Políticas de Certificación: v3.4 (junio de 2026) es la versión más reciente publicada en el catálogo consultado.'};
for (const target of [q, change.actualizada]) {
  target.revision.fuentes = target.revision.fuentes.filter(f => !/Politicas_de_Certificacion_v3\.2|Politicas_de_certificacion_v3\.2/.test(f.url));
  if (!target.revision.fuentes.some(f => f.url === dpc.url)) target.revision.fuentes.unshift(dpc);
  if (!target.revision.fuentes.some(f => f.url === catalog.url)) target.revision.fuentes.push(catalog);
  target.texto = target.texto.replace('versión 3.2', 'versión 3.4');
  target.comentarios = target.comentarios.replaceAll('v3.2', 'v3.4').replace('5 de mayo de 2025', 'junio de 2026');
  target.revision.observaciones = target.revision.observaciones.replaceAll('v3.2', 'v3.4').replace('5 de mayo de 2025', 'junio de 2026');
}
change.actualizada = structuredClone(q);
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Pregunta 3488 y trazabilidad actualizadas a la DPC DNIe v3.4 (junio de 2026).');
