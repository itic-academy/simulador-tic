const fs=require('node:fs'),path=require('node:path');
const file=path.join(__dirname,'README.md'); let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1275 (IDs 6696–6700). Acumulado: 6695 preguntas examinadas individualmente; 6577 verificadas (1287 vigentes, 4807 corregidas y 483 históricas); 118 pendientes documentadas (46 de fuente y 72 de ambigüedad); 5428 sin revisar individualmente.';
const next='Último lote secuencial: 1276 (IDs 6701–6705). Acumulado: 6700 preguntas examinadas individualmente; 6582 verificadas (1287 vigentes, 4811 corregidas y 484 históricas); 118 pendientes documentadas (46 de fuente y 72 de ambigüedad); 5423 sin revisar individualmente.';
if(!s.includes(old)) throw Error('El resumen de 1275 no coincide.'); s=s.replace(old,next);
const heading='## Lote 1276 — 14 de noviembre de 2026'; if(s.includes(heading)) throw Error('Sección de lote repetida.');
const section=`${heading}

Revisadas individualmente las preguntas 6701–6705. Se precisó el nombre de AWS sin atribuirle una garantía de seguridad; se acotaron a su edición histórica las propiedades de JSF 2.0; se identificó lighttpd como servidor HTTP de código abierto; se actualizó la competencia sancionadora al ministerio sucesor previsto en la reorganización administrativa; y se especificó GNU/Linux en la pregunta que contrasta OpenBSD.

- **6701 — AWS:** corregida B. AWS significa Amazon Web Services y es la plataforma de servicios en la nube de Amazon. Se eliminó «segura», que podía sugerir una certificación o garantía absoluta.
- **6702 — JavaServer Faces 2.0:** histórica D. JSR 314 es JSF 2.0, Mojarra fue implementación de referencia y Facelets fue el lenguaje de vistas predeterminado de esa edición. El alcance queda fechado para no implicar que JSF 2.0 sea actual.
- **6703 — servidores web:** corregida D. lighttpd es servidor HTTP con licencia BSD de tres cláusulas; se distingue de los servidores de aplicaciones citados como distractores.
- **6704 — Ley 6/2020:** corregida B. Las sanciones muy graves corresponden a la persona titular del ministerio; las graves y leves a la persona titular de la Secretaría de Estado de Digitalización e Inteligencia Artificial. La ley consolidada conserva el nombre ministerial de 2020, así que el enunciado incorpora el órgano sucesor y la comprobación del organigrama vigente.
- **6705 — sistemas operativos:** corregida C. OpenBSD es un sistema tipo Unix basado en BSD, no GNU/Linux. Se acotó «distribución» a GNU/Linux porque el uso amplio del término puede aplicarse también a sistemas BSD; TurboLinux se etiqueta como histórico.

Fuentes primarias y técnicas: [AWS Glossary](https://docs.aws.amazon.com/glossary/latest/reference/glos-chap.html) y [AWS Overview](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/); [JCP, ficha JSR 314](https://jcp.org/en/jsr/detail?id=314), [Oracle, JSF 2.0 y Facelets](https://www.oracle.com/technical-resources/articles/java/facelets.html), y [Oracle JSF 2.0 API](https://docs.oracle.com/cd/E17802_01/j2ee/javaee/javaserverfaces/2.0/docs/api/javax/faces/view/ViewDeclarationLanguage.html); [proyecto oficial lighttpd](https://github.com/lighttpd/lighttpd1.4); [Ley 6/2020, artículo 20 consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046), [RD 1230/2023 y sucesión de órganos](https://www.boe.es/eli/es/rd/2023/12/29/1230/dof/spa/pdf), [RD 210/2024 consolidado a junio de 2026](https://boe.es/buscar/act.php?id=BOE-A-2024-3796&p=20260612) y [organigrama vigente del Ministerio](https://digital.gob.es/ministerio/organigrama); [OpenBSD FAQ](https://www.openbsd.org/faq/faq1.html), [Debian](https://www.debian.org/intro/about) y [Gentoo](https://www.gentoo.org/get-started/about/).

Clasificación oficial y cotejo de ITIC Academy: AWS/cloud (A1-55/A2-II.1; bloque 25); JSF y frameworks web/Java (A1-65/A1-67/A2-III.12; bloque 30); servidor web y software abierto (A1-65/A1-69/A2-III.12; bloque 30); certificados y servicios electrónicos de confianza (A1-80/A1-81/A2-I.6; bloque 36); sistemas Linux y BSD (A1-60/A1-69/A2-II.2; bloque 27). La academia acredita cobertura curricular; cada respuesta se valida con las fuentes oficiales citadas.

Inventario tras el lote: 6700 examinadas; 6582 verificadas (1287 vigentes, 4811 corregidas y 484 históricas); 118 pendientes (46 de fuente y 72 de ambigüedad); 5423 aún sin revisar individualmente; errores estructurales: 0. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Publicación pendiente de verificación.

`;
const anchor='## Lote 1275 —'; const i=s.indexOf(anchor); if(i<0) throw Error('No se encuentra ancla 1275.'); s=s.slice(0,i)+section+s.slice(i); fs.writeFileSync(file,s); console.log('README actualizado.');
