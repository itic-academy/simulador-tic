const apply = require('./aplicar-lote.cjs');

const records = [
  [2836, ['40'], ['II-15'], ['decisión multicriterio discreta', 'método de la entropía', 'ponderación objetiva', 'alternativas'], [
    { url: 'https://doi.org/10.1007/978-3-642-48318-9', referencia: 'Hwang y Yoon, Multiple Attribute Decision Making (Springer, 1981), obra de referencia sobre métodos de decisión multicriterio; el método de entropía deriva pesos de criterios a partir de la información de la matriz de decisión.' },
    { url: 'https://www.sciencedirect.com/science/article/pii/S0377221703001462', referencia: 'Wang y Lee, European Journal of Operational Research: fórmula de pesos de entropía y contraste entre pesos objetivos derivados de los datos y pesos subjetivos.' }
  ], '', 'Se precisa el concepto: el método de entropía no asigna pesos a alternativas, no es solo una normalización ni ordena por sí mismo las alternativas; calcula pesos objetivos para los criterios a partir de la distribución de los datos de la matriz, reduciendo la dependencia de una ponderación exclusivamente subjetiva. Correspondencia curricular: ITIC Academy, Bloque 17 Adquisición de sistemas y rentabilidad de inversiones 2026, §§3.1–3.4; A1-40/A2-II-15.', 'corregida'],
  [2837, ['79'], ['IV-12'], ['Teorema Chino del Resto', 'RSA', 'criptografía asimétrica', 'clave privada'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc8017.html', referencia: 'RFC 8017 (PKCS #1 v2.2), §§3.2 y 5.1: representación CRT de la clave privada RSA y uso en primitivas de descifrado y firma; permite reducir el coste computacional.' }
  ], '', 'Se mantiene la aplicación a criptografía de clave pública, pero se acota al uso verificable del Teorema Chino del Resto en RSA: la clave privada puede representarse mediante exponentes y coeficientes CRT, acelerando operaciones privadas de descifrado y firma. No se afirma que el teorema sea exclusivo o general de la criptografía asimétrica. Cotejo curricular: ITIC Academy, Bloque 36 Seguridad, criptografía, identificación y firma 2026; A1-79/A2-IV-12.', 'corregida'],
  [2838, ['48'], ['I-9', 'II-13'], ['Esquema Nacional de Seguridad', 'ENS', 'Real Decreto 311/2022', 'principios básicos'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', referencia: 'Real Decreto 311/2022, art. 5: enumera los principios básicos vigentes, incluida la prevención, detección, respuesta y conservación; arts. 8 a 11 desarrollan estos principios.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1330', referencia: 'Real Decreto 3/2010, ENS derogado por RD 311/2022: su formulación histórica era “prevención, reacción y recuperación”, que no debe atribuirse al listado vigente como cita literal.' }
  ], '', 'Se añade la referencia expresa al artículo 5 del RD 311/2022 y se actualiza el distractor histórico: el ENS vigente enumera prevención, detección, respuesta y conservación; “prevención, reacción y recuperación” era la formulación del ENS de 2010. Así se evita confundir dos redacciones normativas. Cotejo curricular: ITIC Academy, Bloque 22 Seguridad, ENS y Ciberseguridad 2026.2; A1-48/A2-I-9/A2-II-13.', 'corregida'],
  [2839, ['54'], ['II-1'], ['ejecución especulativa', 'predicción de saltos', 'procesador', 'tiempo de ejecución'], [
    { url: 'https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/technical-documentation/hardware-behavior-related-to-speculative-execution.html', referencia: 'Intel, Hardware Features and Behaviors Related to Speculative Execution, actualizado 14-10-2026: predicción de control y ejecución especulativa de instrucciones antes de resolver condiciones.' },
    { url: 'https://learn.microsoft.com/en-us/cpp/security/developer-guidance-speculative-execution?view=msvc-170', referencia: 'Microsoft Learn: los procesadores modernos usan ejecución especulativa y fuera de orden; pueden predecir ramas durante la ejecución y dejar efectos microarquitectónicos en cachés.' }
  ], '', 'Se sustituye la descripción imprecisa de “paralelización automática” por la conducta del procesador: ejecuta transitoriamente instrucciones durante la ejecución, normalmente usando predicciones de control o datos antes de resolver dependencias. Si la predicción falla, descarta el estado arquitectónico, aunque pueden persistir efectos microarquitectónicos como cambios en caché. La clave sigue siendo tiempo de ejecución. Cotejo curricular: ITIC Academy, Bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026; A1-54/A2-II-1.', 'corregida'],
  [2840, ['56'], ['II-1'], ['RAID 1', 'RAID 5', 'RAID 6', 'RAID 0+1', 'capacidad utilizable'], [
    { url: 'https://www.ibm.com/docs/en/power7/9119-FHB?topic=overview-estimating-disk-array-capacities', referencia: 'IBM: capacidad RAID 5 = número de discos menos uno multiplicado por capacidad de disco; RAID 6 descuenta dos discos; RAID 10 utiliza aproximadamente la mitad para espejo.' },
    { url: 'https://www.ibm.com/docs/en/power8/0000-REF?topic=POWER8_REF%2Fp8ebk%2Fraidlevelsummary.html', referencia: 'IBM, resumen de niveles RAID: comparación de capacidad utilizable, redundancia y niveles RAID 5, 6 y 10.' }
  ], '', 'Se acota el cálculo a discos de igual capacidad, sin discos de reserva ni sobrecarga del sistema. Para 100 discos iguales, RAID 5 reserva el equivalente a uno para paridad (99 unidades netas); RAID 6 reserva dos (98), mientras RAID 1 y RAID 0+1 destinan aproximadamente la mitad a espejo. La clave RAID 5 se confirma. Cotejo curricular: ITIC Academy, Bloque 26 Hardware, servidores, almacenamiento y virtualización 2026; A1-56/A2-II-1.', 'vigente']
];

const edits = {
  2836: { texto: 'En la decisión multicriterio discreta, ¿para qué se emplea el método de ponderación por entropía?', opciones: ['Para asignar directamente un peso a cada alternativa, sin considerar los criterios.', 'Para reemplazar la matriz de decisión por una matriz de distancias.', 'Para ordenar por sí solo las alternativas de mejor a peor.', 'Para calcular pesos objetivos de los criterios a partir de la información y dispersión de los datos de la matriz de decisión.'], respuesta_correcta: 3 },
  2837: { texto: 'En una implementación de RSA con clave privada, ¿para qué se aplica el Teorema Chino del Resto (CRT)?', opciones: ['Para acelerar operaciones privadas, como el descifrado o la generación de firmas, mediante cálculos modulares con los factores primos.', 'Para sustituir la clave pública y convertir RSA en un cifrado simétrico.', 'Para generar funciones hash sin clave.', 'Para calcular rutas de encaminamiento en redes IP.'], respuesta_correcta: 0 },
  2838: { texto: 'Conforme al artículo 5 del Real Decreto 311/2022, ¿cuál de las siguientes opciones NO figura entre los principios básicos vigentes del ENS?', opciones: ['Reevaluación periódica.', 'Vigilancia continua.', 'Seguridad como proceso integral.', 'La seguridad es responsabilidad exclusiva del administrador del sistema.'], respuesta_correcta: 3 },
  2839: { texto: '¿Qué caracteriza a la ejecución especulativa de un procesador moderno?', opciones: ['Evita el uso de la caché para toda instrucción ejecutada antes de resolver una dependencia.', 'Puede ejecutar instrucciones durante la ejecución del programa basándose en predicciones antes de conocer con certeza el resultado de una rama o dependencia.', 'No utiliza predicción de saltos ni de datos.', 'Se realiza exclusivamente durante la compilación del programa.'], respuesta_correcta: 1 },
  2840: { texto: 'Se comparan configuraciones RAID con discos de igual capacidad, sin reserva de discos ni sobrecarga del sistema. Con 100 discos, ¿qué nivel de los indicados ofrece mayor capacidad neta?', opciones: ['RAID 1.', 'RAID 5.', 'RAID 6.', 'RAID 0+1.'], respuesta_correcta: 1 }
};

apply({ numero: '504', fecha: '2026-10-29', records, edits });

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-504.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2836: { A1: ['A1-40'], A2: ['A2-II-15'], academy: 'ITIC Academy, Bloque 17 Adquisición de sistemas y rentabilidad de inversiones 2026.2, §§3.1–3.4 (decisión multicriterio, pesos, normalización y ordenación).' },
  2837: { A1: ['A1-79'], A2: ['A2-IV-12'], academy: 'ITIC Academy, Bloque 36 Seguridad, criptografía, identificación y firma 2026, apartado de algoritmos asimétricos/RSA.' },
  2838: { A1: ['A1-48'], A2: ['A2-I-9', 'A2-II-13'], academy: 'ITIC Academy, Bloque 22 Seguridad, ENS y Ciberseguridad 2026.2, principios, medidas y adecuación al ENS.' },
  2839: { A1: ['A1-54'], A2: ['A2-II-1'], academy: 'ITIC Academy, Bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026, arquitectura y funcionamiento del procesador.' },
  2840: { A1: ['A1-56'], A2: ['A2-II-1'], academy: 'ITIC Academy, Bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización 2026, almacenamiento RAID.' }
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mapping[c.id];
  assert.ok(q && m, `Pregunta ${c.id} o mapeo ausente`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion.A1 = m.A1;
  q.clasificacion.A2 = m.A2;
  q.clasificacion.bloque_academia = m.academy;
  q.clasificacion.estado = 'revisada';
  q.clasificacion.nota = `${q.revision.estado}. ${m.academy}`;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} Cotejo curricular: ${m.academy} Academy se usa como mapa de estudio, no como autoridad de la respuesta.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Clasificación por temas oficiales A1/A2 y academia aplicada al lote 504.');

