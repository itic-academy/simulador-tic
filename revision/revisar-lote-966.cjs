const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const d30 = 'https://docs.google.com/document/d/11CEe-2aKTukr0w6e752_y5y-wWuy1bPH/edit?usp=drivesdk';
const d36 = 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk';

const records = [
  [5151, ['66'], ['III-11'], ['.NET', 'garbage collector', 'GC.Collect', 'VirtualAlloc', 'recolección automática'], [
    ref('https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals', 'Microsoft Learn, Fundamentals of garbage collection: el GC decide cuándo recolectar según presión de memoria; salvo casos excepcionales y pruebas, no es necesario llamar a GC.Collect. VirtualAlloc reserva espacio de segmentos para el heap administrado, no inicia la recolección.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 66: entorno y plataforma Microsoft .NET.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.11: plataforma .NET, modelo de programación y herramientas.'),
    ref(d30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: .NET, CLR y gestión de memoria; cotejo curricular general.')
  ], null, 'En .NET, la recolección se inicia automáticamente cuando el GC determina que procede, por ejemplo por presión de memoria. GC.Collect solicita una recolección explícita y normalmente debe evitarse; VirtualAlloc se usa para reservar memoria y Finalize no inicia la recolección. Se elimina la palabra «continuamente», que sugería una ejecución permanente.', 'corregida'],
  [5152, ['80'], ['IV-12'], ['PKCS', 'PKCS #8', 'claves privadas', 'RFC 5208', 'RFC 5958', 'ASN.1'], [
    ref('https://datatracker.ietf.org/doc/rfc5208/', 'IETF RFC 5208, PKCS #8: Private-Key Information Syntax Specification: describe PrivateKeyInfo y EncryptedPrivateKeyInfo para representar información de claves privadas.'),
    ref('https://datatracker.ietf.org/doc/rfc5958/', 'IETF RFC 5958: define paquetes de claves asimétricas y sintaxis de información de clave privada; obsoleta PKCS #8 v1.2/RFC 5208 y renombra PrivateKeyInfo como OneAsymmetricKey.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 80: certificados, claves públicas/privadas y formatos de firma electrónica.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y firma digital.'),
    ref(d36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: claves públicas/privadas, firma y formatos criptográficos.')
  ], null, 'La respuesta del test clásico es PKCS #8, cuya versión 1.2 fue descrita por RFC 5208. Para precisión actual, RFC 5958 la sucede y define el formato OneAsymmetricKey, manteniendo compatibilidad con la estructura de versión 1. En el enunciado se explicita que pregunta por el estándar PKCS histórico.', 'corregida'],
  [5153, ['80'], ['IV-12'], ['firma digital', 'hash', 'clave privada', 'integridad', 'autenticación de origen', 'no repudio', 'confidencialidad'], [
    ref('https://csrc.nist.gov/glossary/term/digital_signature', 'NIST CSRC, Digital signature: una firma digital correctamente implementada permite verificar autenticidad del origen, integridad y apoyo a no repudio; no ofrece confidencialidad.'),
    ref('https://csrc.nist.gov/pubs/fips/186-5/final', 'NIST FIPS 186-5, Digital Signature Standard: las firmas detectan modificaciones y autentican a quien firma; pueden aportar evidencia de autoría a terceros.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 80: identificación, certificados, claves y formatos de firma.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.12: técnicas criptográficas y mecanismos de firma digital.'),
    ref(d36, 'ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: generación y verificación de firma digital, integridad, autenticación y límites de confidencialidad.')
  ], null, 'Se denomina firma digital, no cifrado de confidencialidad: se firma una representación hash con la clave privada y se verifica con la pública. Si la firma y su validación de identidad/certificado son correctas, aporta autenticidad de origen, integridad y apoyo a no repudio; el mensaje adjunto permanece legible y no queda confidencial.', 'corregida'],
  [5154, ['77'], ['II-9'], ['HTML', 'HTML Living Standard', 'applet', 'canvas', 'audio', 'dialog', 'elemento obsoleto'], [
    ref('https://html.spec.whatwg.org/multipage/obsolete.html', 'WHATWG HTML Living Standard, Non-conforming features: applet figura entre los elementos completamente obsoletos; recomienda embed u object.'),
    ref('https://www.w3.org/TR/html52/obsolete.html', 'W3C HTML 5.2, elementos obsoletos: applet no conforme. El elemento keygen, presente entre los distractores originales, también cambió de estatus en ediciones posteriores, por lo que se retira para evitar dos respuestas defendibles.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 77: HTML, CSS, XML y estándares web.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.9: lenguajes de marca, HTML y funcionalidades.'),
    ref(d30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1: estándares web y elementos HTML; contempla la obsolescencia de applet.')
  ], null, 'En la versión vigente del HTML Living Standard, applet es un elemento obsoleto y no conforme. El test original incluía keygen como distractor, pero también está obsoleto en el estándar actual; se sustituye por dialog, elemento vigente, para dejar una única respuesta correcta.', 'corregida'],
  [5155, ['67'], ['III-10'], ['Java EE', 'Jakarta EE', 'Eclipse Foundation', 'javax', 'jakarta', 'compatibilidad'], [
    ref('https://jakarta.ee/about/faq/', 'Eclipse Foundation, Jakarta EE FAQ: Java EE 8 y sus especificaciones, implementaciones de referencia y TCK se transfirieron a Eclipse; Jakarta EE es el desarrollo comunitario sucesor.'),
    ref('https://jakarta.ee/blogs/javax-jakartaee-namespace-ecosystem-progress/', 'Eclipse Foundation, Javax to Jakarta EE Namespace Ecosystem Progress: Jakarta EE 8 mantiene compatibilidad con Java EE 8; Jakarta EE 9 introduce el cambio de namespace javax.* a jakarta.*.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE.'),
    ref(d30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, §5.1: transferencia a Eclipse, renombrado y cambio de namespace desde Jakarta EE 9.')
  ], null, 'Jakarta EE es la evolución comunitaria de Java EE bajo la gobernanza de Eclipse Foundation. Jakarta EE 8 conservó la compatibilidad de Java EE 8; Jakarta EE 9 cambió el espacio de nombres de javax.* a jakarta.*. Se evita afirmar compatibilidad binaria general entre todas las versiones posteriores.', 'corregida']
];

const edits = {
  5151: { texto: 'En .NET, ¿qué afirmación describe correctamente cuándo se ejecuta la recolección de basura?', opciones: ['Siempre es obligatorio llamar a GC.Collect para liberar objetos no utilizados.','VirtualAlloc inicia la recolección de basura del CLR.','Object.Finalize inicia el recolector antes de finalizar cada objeto.','El runtime inicia la recolección automáticamente cuando sus criterios de memoria indican que procede; normalmente no se llama manualmente a GC.Collect.'], respuesta_correcta: 3, comentarios: 'El GC programa colecciones según las asignaciones y la presión de memoria. GC.Collect es una solicitud explícita reservada para casos excepcionales y pruebas, no un requisito habitual.' },
 5152: { texto: 'En los estándares PKCS clásicos, ¿qué especificación define la sintaxis de información de clave privada (PrivateKeyInfo)?', opciones: ['PKCS #1','PKCS #5','PKCS #8','PKCS #6'], respuesta_correcta: 2, comentarios: 'PKCS #8 se asocia a PrivateKeyInfo/EncryptedPrivateKeyInfo (RFC 5208). RFC 5958 es su sucesora actual y denomina OneAsymmetricKey a la estructura ampliada.' },
 5153: { texto: 'Una firma digital válida se genera con la clave privada del firmante sobre el resumen criptográfico del mensaje y se envía junto al mensaje sin cifrar. ¿Qué propiedades puede proporcionar?', opciones: ['Autenticidad del origen, integridad y apoyo al no repudio; no confidencialidad.','Confidencialidad, integridad y no repudio.','Solo confidencialidad y autenticación del destinatario.','Autenticación, confidencialidad e integridad, pero no autenticidad del origen.'], respuesta_correcta: 0, comentarios: 'La firma se verifica con la clave pública correspondiente y permite comprobar origen e integridad; puede apoyar el no repudio bajo una PKI y controles adecuados. Como el mensaje no se cifra para el destinatario, no queda confidencial.' },
 5154: { texto: 'Según el HTML Living Standard vigente, ¿cuál de estos elementos está completamente obsoleto y no debe utilizarse?', opciones: ['<canvas>','<dialog>','<applet>','<audio>'], respuesta_correcta: 2, comentarios: 'El estándar WHATWG lista applet como no conforme y recomienda embed u object. Se quitó keygen del conjunto original porque también es obsoleto en el estándar vigente.' },
 5155: { texto: '¿Qué afirmación describe correctamente la relación histórica entre Java EE y Jakarta EE?', opciones: ['Jakarta EE es una oferta propietaria de Oracle con funcionalidad reducida.','Jakarta EE es una edición independiente sin continuidad técnica con Java EE.','Jakarta EE es la evolución comunitaria de Java EE transferida a Eclipse Foundation; Jakarta EE 8 conserva compatibilidad con Java EE 8 y Jakarta EE 9 cambia el namespace a jakarta.*.','Todas las versiones Jakarta EE mantienen necesariamente el namespace javax.* y compatibilidad binaria con cualquier Java EE.'], respuesta_correcta: 2, comentarios: 'La plataforma pasó de Java EE a Jakarta EE bajo Eclipse Foundation. La versión 8 conserva compatibilidad con Java EE 8; el cambio de namespace se produjo en Jakarta EE 9, así que no se generaliza compatibilidad a todas las versiones posteriores.' }
};

const logPath = path.join(__dirname, 'cambios-lote-966.json');
if (!fs.existsSync(logPath)) aplicar({ numero: '966', fecha: '2026-11-12', records, edits });
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5151: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, aborda .NET/CLR y gestión de memoria; se usa como cotejo curricular, con la mecánica del GC contrastada en Microsoft Learn.', 'Cotejo A1-66/A2-III.11; Microsoft Learn respalda las condiciones de recolección y las llamadas explícitas.'],
  5152: ['ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1: claves privadas/públicas, firma y formatos criptográficos.', 'Cotejo directo A1-80/A2-IV.12; se diferencia el nombre PKCS histórico del estándar IETF sucesor RFC 5958.'],
  5153: ['ITIC Academy, bloque 36 «Seguridad, criptografía, identificación y firma», versión 2026.1, apartados de firma digital y propiedades de seguridad.', 'Cotejo curricular directo A1-80/A2-IV.12; NIST establece las propiedades y límites de una firma correctamente implementada.'],
  5154: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, cubre HTML y estándares web; su contraste con la versión vigente se complementa con WHATWG.', 'Cotejo curricular directo A1-77/A2-II.9.'],
  5155: ['ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, §5.1: historia Java EE/Jakarta EE, transferencia a Eclipse y cambio de namespace.', 'Cotejo curricular directo A1-67/A2-III.10; Eclipse Foundation confirma la compatibilidad de la versión 8 y los cambios de Jakarta 9.']
};
const entries = new Map(log.cambios.map(item => [item.id, item]));
const motive = 'Cotejo del temario Academy accesible en Drive y separación entre cobertura curricular y autoridad técnica.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(item => item.id === id), entry = entries.get(id);
  if (!q || !entry) throw new Error(`Falta ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const corrections = entry.correcciones_posteriores || [];
  if (!corrections.some(item => item.motivo === motive)) corrections.push({ fecha: '2026-11-12', motivo: motive, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  entry.correcciones_posteriores = corrections;
  entry.actualizada = structuredClone(q);
}
let replaced = 0;
const raw = fs.readFileSync(bankPath, 'utf8');
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), entry = entries.get(old.id);
  if (!entry) return block;
  replaced++;
  return JSON.stringify(entry.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 preguntas, resultó ${replaced}`);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
