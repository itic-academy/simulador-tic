const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname, 'README.md');
let s = fs.readFileSync(file, 'utf8');
const old = 'Último lote secuencial aplicado localmente: 508 (IDs 2856–2860). Acumulado: 2860 preguntas examinadas individualmente, 2789 verificadas (609 vigentes, 1949 corregidas y 231 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9263 sin revisar individualmente. Hay 2243 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.';
const next = 'Último lote secuencial aplicado localmente: 509 (IDs 2861–2865). Acumulado: 2865 preguntas examinadas individualmente, 2794 verificadas (609 vigentes, 1953 corregidas y 232 históricas) y 71 pendientes documentadas (34 de fuente y 37 de ambigüedad); quedan 9258 sin revisar individualmente. Hay 2249 preguntas con cambios en enunciado, opciones o clave respecto del original, calculado comparando esos campos en los registros completos.';
if (s.includes(old)) s = s.replace(old, next);
else if (!s.includes(next)) throw new Error('El estado del README no coincide con el lote esperado.');
const section = `## Lote 509 — 29 de octubre

IDs 2861–2865 revisados individualmente. El original de cada reactivo queda preservado en [cambios-lote-509.json](cambios-lote-509.json).

- **2861 — LDAP:** se corrige la confusión entre un protocolo de acceso y el directorio. LDAP permite acceder a servicios de directorio distribuidos basados en X.500; no significa “directorio electrónico”. A1-80/A2-II-8/IV-9; ITIC Academy, Bloque 36.
- **2862 — administración de sistemas:** se evita una frontera absoluta sobre las funciones de los administradores. El reactivo pregunta por desarrollo de aplicaciones de negocio como función principalmente de desarrollo; los perfiles de sistemas pueden mantener software y automatizar tareas. A1-34/A2-IV-1/IV-9; ITIC Academy, Bloque 9.
- **2863 — eIDAS y copias de datos de firma:** se actualiza el alcance al artículo 29 bis del Reglamento 910/2014, incorporado por el Reglamento 2024/1183: aplica a la gestión cualificada de dispositivos remotos de creación de firma electrónica cualificada. Solo permite duplicar datos con finalidad de copia de seguridad, con el mismo nivel de seguridad y sin superar el mínimo de conjuntos necesario para la continuidad. No se generaliza la regla a cualquier servicio de confianza ni se usa el antiguo anexo II como texto vigente. A1-80/A2-I-6; ITIC Academy, Bloque 36.
- **2864 — ciclo PDCA en ITIL v3:** se explicita “Comprobar” como traducción de Check y se conserva como contenido histórico, ya que el Bloque 41 2026 de la academia aborda ITIL 4/Version 5. Secuencia: Planificar, Hacer, Comprobar, Actuar. A1-106/A2-IV-4; ITIC Academy, Bloque 41.
- **2865 — siglas de redes:** WAN es *Wide Area Network*, mientras WLAN es *Wireless Local Area Network*; se verifica además el contexto de PAN, MAN y SAN. A1-108/56; A2-IV-8/10/5; ITIC Academy, Bloque 42 Redes y Bloque 26 Almacenamiento.

Fuentes primarias y de referencia: IETF, [RFC 4511 LDAP](https://www.rfc-editor.org/rfc/rfc4511.html); O*NET OnLine, [administración de redes y sistemas, ficha actualizada en 2026](https://www.onetonline.org/link/details/15-1244.00) (referencia ocupacional, no definición normativa española); EUR-Lex, [Reglamento 910/2014 consolidado en español](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02014R0910-20241018), arts. 29 y 29 bis, y BOE, [Reglamento (UE) 2024/1183](https://www.boe.es/buscar/doc.php?id=DOUE-L-2024-80608), apartados 27–28; AXELOS, *ITIL Continual Service Improvement*, edición 2011, §2.1, ISBN 9780113313082 (referencia histórica oficial), [PeopleCert FAQ ITIL](https://www.peoplecert.org/help-and-support/faq-itil) y [PDCA, ASQ](https://asq.org/quality-resources/pdca-cycle); NIST CSRC, [WAN](https://csrc.nist.gov/glossary/term/wan), [WLAN](https://csrc.nist.gov/glossary/term/WLAN), [PAN](https://csrc.nist.gov/glossary/term/personal_area_network) y [MAN](https://csrc.nist.gov/glossary/term/metropolitan_area_network); SNIA, [SAN Dictionary](https://www.snia.org/education/online-dictionary/term/san) e [IEEE 802](https://www.ieee802.org/).

Cotejo curricular: ITIC Academy, [Bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view) (LDAP/X.500/eIDAS); [Bloque 9 Organización y Gestión de los Sistemas de Información 2026](https://drive.google.com/file/d/1QwPcKo3PWRI0s0KyM6SXWCe6CoK4Md-s/view) (funciones de sistemas y desarrollo); [Bloque 41 ITIL y COBIT 2026](https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view) (ITIL 4/Version 5, no v3 vigente); [Bloque 42 Redes 2026.1](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view) y [Bloque 26 Hardware y almacenamiento 2026](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view). La academia se contrasta como mapa de estudio, no como autoridad legal/técnica. Los temas oficiales se validaron en temario-oficial.json: A1-34, 56, 80, 106, 108; A2-I-6, II-8, IV-1, IV-4, IV-5, IV-8, IV-9 y IV-10. También se cotejaron los anexos de las convocatorias A1 [BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y A2 GSI [BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262).

inventario.cjs, verificar.cjs y git diff --check ejecutados tras el lote: 12.123 preguntas, cero errores; 2.865 revisadas individualmente, 2.794 verificadas, 71 pendientes documentadas y 9.258 sin revisión de contenido. El inventario estructural no acredita revisión individual.

`;
const marker = '## Lote 508 — 29 de octubre';
if (!s.includes('## Lote 509 — 29 de octubre')) {
  if (!s.includes(marker)) throw new Error('No se encuentra la sección del lote 508.');
  s = s.replace(marker, section + marker);
}
fs.writeFileSync(file, s);
console.log('README actualizado al lote 509.');
