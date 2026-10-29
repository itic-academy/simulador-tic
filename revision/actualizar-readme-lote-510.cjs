const fs=require('node:fs'),path=require('node:path');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const line='inventario.cjs, verificar.cjs y git diff --check ejecutados tras el lote: 12.123 preguntas, cero errores; 2.870 revisadas individualmente, 2.798 verificadas, 72 pendientes documentadas y 9.253 sin revisión de contenido. El inventario estructural no acredita revisión individual.';
if(!s.includes(line)){const marker='## Lote 509 — 29 de octubre';if(!s.includes(marker))throw Error('Falta sección previa para insertar resultado.');s=s.replace(marker,`${line}\n\n${marker}`);fs.writeFileSync(file,s);}console.log('README: resultado de validación actualizado.');
