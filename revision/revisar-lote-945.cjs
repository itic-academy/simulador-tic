const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy15 = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academy28 = 'https://drive.google.com/file/d/11qGK4GbJ0QV81HEyboRAy5AZorijJmhs/view?usp=drivesdk';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const uaag = 'https://www.w3.org/WAI/standards-guidelines/uaag/';
const uaag20 = 'https://www.w3.org/TR/UAAG20/';
const istqb = 'https://glossary.istqb.org/en_US/term/regression-testing';
const rfc1932 = 'https://www.rfc-editor.org/rfc/rfc1932';
const rfc2336 = 'https://www.rfc-editor.org/rfc/rfc2336.html';
const cts = 'https://learn.microsoft.com/dotnet/standard/base-types/common-type-system';

const records = [
  [5046, [], ['III-3'], ['especificación de requisitos', 'derivación de sistemas existentes', 'rotación de usuarios'], [
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.3: enumera la derivación de sistemas existentes como estrategia de determinación de requerimientos; no establece por sí sola la condición de rotación de usuarios.'),
    ref(academy38, 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1: material curricular relacionado con requisitos y análisis. Se aporta solo como apoyo de encuadre, no como autoridad técnica independiente.')
  ], null, 'La clave original B («Existe alta rotación de usuarios») se conserva, pero queda sin verificar: las fuentes curriculares consultadas confirman que la derivación de sistemas existentes es una estrategia de requisitos, pero no aportan evidencia primaria suficiente para validar que la alta rotación de usuarios sea la condición determinante. No se inferirá la respuesta por plausibilidad; pendiente localizar la referencia técnica que fundamentó esta asociación.', 'pendiente_fuente'],
  [5047, ['44'], ['III-14'], ['UAAG', 'W3C WAI', 'accesibilidad de agentes de usuario'], [
    ref(uaag, 'W3C WAI, UAAG Overview: identifica expresamente UAAG como User Agent Accessibility Guidelines y las distingue de WCAG (contenido web) y ATAG (herramientas de autoría).'),
    ref(uaag20, 'W3C, UAAG 2.0: alcance y pautas para la accesibilidad de navegadores y otros agentes de usuario.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 44: accesibilidad, usabilidad y W3C.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.14: accesibilidad, diseño universal y usabilidad.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1: tecnologías web; correspondencia curricular.')
  ], null, 'Respuesta B: UAAG significa User Agent Accessibility Guidelines, pautas de accesibilidad para agentes de usuario como navegadores y reproductores. WCAG se refiere al contenido web y ATAG a herramientas de autoría. La expansión del acrónimo es comprobable; que la edición 2.0 sea una W3C Recommendation vigente es otra cuestión: W3C la mantiene como Working Group Note.', 'vigente'],
  [5048, ['96'], ['III-7'], ['pruebas de regresión', 'pruebas de software', 'impacto de cambios'], [
    ref(istqb, 'ISTQB Glossary, entrada Regression testing: pruebas sobre software previamente probado tras una modificación para detectar defectos introducidos o efectos adversos en áreas no modificadas.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 96: procesos, niveles, técnicas y herramientas de pruebas de software.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.7: planificación, documentación y pruebas de software.'),
    ref(academy15, 'ITIC Academy, bloque 15 «Metodologías ágiles y modelos de ciclo de vida», versión 2026.1: desarrollo y pruebas; apoyo curricular.'),
    ref(academy38, 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1: verificación del software; apoyo curricular.')
  ], null, 'Respuesta D: pruebas de regresión. Tras modificar el módulo de pagos se vuelve a comprobar una función previamente probada (RRHH) para detectar efectos colaterales del cambio. No es una prueba unitaria del módulo aislado, ni prueba de aceptación por usuarios.', 'vigente'],
  [5049, ['113'], ['IV-10'], ['ATM', 'WAN', 'NBMA', 'red no broadcast multiacceso'], [
    ref(rfc1932, 'IETF RFC 1932, IP over ATM: A Framework Document, describe ATM como medio NBMA (non-broadcast multi-access) y examina el encaminamiento IP sobre ese tipo de red.'),
    ref(rfc2336, 'IETF RFC 2336, Classical IP and ARP over ATM: el documento identifica la red NBMA utilizada por el modelo como ATM.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 113: redes de transporte y agregación, incluida ATM.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema IV.10: redes de área extensa y tecnologías de transporte.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», actualización 2026: redes WAN y tecnologías de transmisión; encuadre curricular.')
  ], null, 'Se precisa el alcance del enunciado para evitar generalizar sobre cualquier servicio que pueda transportar ATM: respuesta C, no broadcast multiacceso (NBMA), que es la caracterización del modelo clásico de IP sobre ATM en los RFC citados. ATM no es una LAN broadcast compartida de tipo Ethernet.', 'corregida'],
  [5050, ['66'], ['III-11'], ['.NET', 'Common Type System', 'CTS', 'interoperabilidad entre lenguajes'], [
    ref(cts, 'Microsoft Learn, Common Type System: define cómo se declaran, usan y administran los tipos en el CLR; establece reglas que permiten que objetos escritos en lenguajes distintos interactúen.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, tema III.11: plataforma .NET, modelo de programación y servicios.'),
    ref(academy28, 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1: interoperabilidad y arquitectura; apoyo curricular.')
  ], null, 'Se conserva la opción A y se corrige su formulación: CTS define reglas comunes para declarar, usar y administrar tipos en el CLR y permite interoperabilidad entre lenguajes que lo implementan. No es simplemente un sistema de tipos entre plataformas diferentes, ni su definición se limita a la representación física de datos en memoria.', 'corregida']
];

const edits = {
  5047: { texto: 'Las pautas del W3C WAI para la accesibilidad de agentes de usuario (User Agent Accessibility Guidelines) se conocen por el acrónimo:' },
  5048: { texto: 'Tras modificar el módulo de pagos, se ejecutan pruebas para comprobar que el cambio no haya afectado a otro módulo, como RRHH, que no se modificó. ¿De qué tipo de pruebas se trata?' },
  5049: { texto: 'En el modelo clásico de IP sobre ATM descrito por los RFC del IETF, ATM se caracteriza como una red física de tipo:' },
  5050: { opciones: ['Define reglas comunes para declarar, usar y administrar tipos en el CLR, facilitando la interoperabilidad entre lenguajes que lo implementan.', 'Es un sistema tipificado de software.', 'Es un sistema común de tipos que permite interoperar entre plataformas distintas, aunque no compartan el CLR.', 'Ninguna de las anteriores.'] }
};

aplicar({ numero: '945', fecha: '2026-11-11', records, edits });
