const fs=require('node:fs');
const bankPath='preguntas_preparatic.json', logPath='revision/cambios-lote-1059.json';
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const q=bank.preguntas.find(x=>x.id===5620),entry=log.cambios.find(x=>x.id===5620);if(!q||!entry)throw Error('5620 no encontrado');
const note='Histórica, respuesta A. La guía técnica oficial citada, relativa a esa generación de tarjeta DNIe, documenta firma en modo raw y con relleno PKCS#1. Se contextualiza como capacidad descrita en esa guía, no como afirmación universal sobre futuras generaciones. La opción original decía PKCS#11 (interfaz/API criptográfica) donde la guía especifica PKCS#1 (esquema de relleno). Cotejo curricular de ITIC Academy: ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: algoritmos criptográficos, RSA, formatos de firma y mecanismos de firma digital (A1 79–80/A2 IV.12). Los modos concretos se contrastan con la guía técnica oficial del DNIe. Temas oficiales asociados: A1-79/A1-80/A2-IV-12. La academia sitúa el contenido en el programa; las afirmaciones técnicas se verifican con las fuentes primarias indicadas en la revisión.';
q.texto='Según la guía técnica oficial publicada para la tarjeta DNIe con NFC, ¿qué modos de firma documenta?';q.revision.estado='historica';q.revision.observaciones=note;q.comentarios=note;
entry.actualizada=structuredClone(q);
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
