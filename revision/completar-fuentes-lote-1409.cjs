const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1409.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const additions = {
  7347: {
    url: 'https://www.sec.gov/newsroom/press-releases/2023-78',
    referencia: 'U.S. Securities and Exchange Commission, release 2023-78 (17-04-2023): identifica a Bittrex como crypto asset trading platform/exchange que facilitaba la compra y venta de criptoactivos.'
  },
  7350: {
    url: 'https://books.google.com/books?id=VDzzQgAACAAJ',
    referencia: 'Roger S. Pressman, Software Engineering: A Practitioner’s Approach, 5.ª ed., McGraw-Hill, 2001, §4.3 “Analysis Principles” (ficha bibliográfica): comprende los dominios de información y funcional, particiona jerárquicamente y desarrolla representaciones lógicas y físicas.'
  }
};
for (const [key, source] of Object.entries(additions)) {
  const id = Number(key);
  const q = bank.preguntas.find(x => x.id === id);
  const change = log.cambios.find(x => x.id === id);
  if (!q?.revision || !change) throw new Error('Falta pregunta/cambio ' + id);
  if (!q.revision.fuentes.some(x => x.url === source.url)) q.revision.fuentes.push(source);
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Fuentes oficiales y bibliográficas incorporadas a los registros 7347 y 7350.');
