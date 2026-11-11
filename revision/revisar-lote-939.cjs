const aplicar = require('./aplicar-lote.cjs');

const lo32018 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const lopd1999 = 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-23750';
const constitution = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const law53 = 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151';
const ebep = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719';
const lgp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyPrivacy = 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk';
const academyConstitution = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const academyDirection = 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk';
const academyBudget = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [5016, ['27'], ['I-7'], ['LO 3/2018', 'LOPDGDD', 'derecho a la portabilidad', 'RGPD art. 20'], [
    ref(lo32018, 'Ley Orgánica 3/2018, texto consolidado del BOE, arts. 17 y 18: reconoce, entre otros, los derechos de portabilidad y limitación del tratamiento; la portabilidad se ejerce conforme al art. 20 RGPD.'),
    ref(lopd1999, 'Ley Orgánica 15/1999, derogada, art. 5: el catálogo clásico recogía acceso, rectificación y cancelación; la portabilidad no figuraba en él. Se usa solo para precisar el sentido histórico de «novedad».'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 27: RGPD, principios, derechos y obligaciones de protección de datos.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.7: protección de datos personales y derechos digitales.'),
    ref(academyPrivacy, 'ITIC Academy, bloque 08 «Protección de datos», versión 2026.1 (19/08/2026), catálogo de derechos RGPD/LOPDGDD y cotejo frente a la legislación anterior.')
  ], null, 'Respuesta B (portabilidad). Se corrige la errata «Proteción» y se precisa el marco temporal: la portabilidad, reconocida por el RGPD y regulada en el art. 17.1 de la LO 3/2018 por remisión al art. 20 RGPD, no estaba en el catálogo de la derogada LO 15/1999. La ley española no es el origen autónomo de ese derecho. Clasificación A1-27/A2-I.7.', 'corregida'],
  [5017, ['1'], ['I-1'], ['Constitución Española', 'moción de censura', 'artículo 113', 'mayoría absoluta'], [
    ref(constitution, 'Constitución Española, texto consolidado del BOE, art. 113.1–4: moción constructiva propuesta por al menos una décima parte de los diputados, con candidato; mayoría absoluta; espera de cinco días con posibilidad de mociones alternativas en los dos primeros.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 1: Constitución, Cortes Generales, Congreso y Gobierno.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.1: Constitución, Corona y derechos fundamentales.'),
    ref(academyConstitution, 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2 (01/10/2026), apartados 5 y 6 sobre Congreso/Gobierno y responsabilidad política; cotejo curricular.')
  ], null, 'Respuesta B. El artículo 113.2 exige apoyo inicial de al menos una décima parte de los diputados e incluir un candidato a la Presidencia. La aprobación requiere mayoría absoluta (113.1); tras cinco días caben mociones alternativas durante los dos primeros (113.3), y quienes firman una rechazada no pueden presentar otra en el mismo período de sesiones (113.4).', 'vigente'],
  [5018, ['24'], [], ['Ley 53/1984', 'incompatibilidades', 'personal al servicio de las Administraciones Públicas'], [
    ref(law53, 'Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las Administraciones Públicas, texto consolidado del BOE.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 24: empleo público e incompatibilidades del personal al servicio de las Administraciones Públicas.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX: no contiene un epígrafe específico sobre la Ley 53/1984; no se atribuye una correspondencia A2 directa a esta norma.'),
    ref(academyDirection, 'ITIC Academy, bloque 07 «Dirección pública, empleo, transparencia y unidad de mercado», versión 2026.2 (01/10/2026), régimen de incompatibilidades del personal público.')
  ], null, 'Respuesta B. La Ley 53/1984, de 26 de diciembre, regula las incompatibilidades del personal al servicio de las Administraciones Públicas. Se normaliza la redacción de la pregunta y el título oficial de la ley. Clasificación A1-24; el programa A2 GSI 2025 no incluye un epígrafe específico de incompatibilidades del personal, así que no se asigna tema A2.', 'corregida'],
  [5019, ['24'], ['I-8'], ['TREBEP', 'servicios especiales', 'funcionarios de organizaciones internacionales', 'artículo 87.1.j'], [
    ref(ebep, 'Real Decreto Legislativo 5/2015, texto consolidado del BOE, art. 87.1.j: se declara en servicios especiales a los funcionarios de carrera cuando adquieran la condición de funcionarios al servicio de organizaciones internacionales.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 24: Estatuto Básico del Empleado Público y situaciones administrativas.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, I.8: texto refundido del Estatuto Básico del Empleado Público.'),
    ref(academyDirection, 'ITIC Academy, bloque 07 «Dirección pública, empleo, transparencia y unidad de mercado», versión 2026.2 (01/10/2026), situaciones administrativas del personal funcionario; cotejo curricular.')
  ], null, 'Respuesta C. El artículo 87.1.j del TREBEP dispone el pase a servicios especiales cuando un funcionario de carrera adquiere la condición de funcionario al servicio de una organización internacional. Las demás opciones confunden el nombramiento como personal eventual o la excedencia por prestación de servicios en otras Administraciones con supuestos distintos.', 'vigente'],
  [5020, ['12'], [], ['Ley 47/2003', 'Ley General Presupuestaria', 'artículo 48', 'inmuebles', 'pago aplazado'], [
    ref(lgp, 'Ley 47/2003, General Presupuestaria, texto consolidado del BOE, art. 48.1: permite diferir el vencimiento del pago de inmuebles adquiridos directamente si el precio excede de seis millones de euros; desembolso inicial mínimo del 25 % y resto distribuible en los cuatro ejercicios siguientes dentro de los límites del art. 47.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 12: Presupuestos Generales del Estado, ejecución del gasto y control.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX: no contiene un tema específico de Presupuestos Generales del Estado o de la Ley General Presupuestaria; no se fuerza una correspondencia.'),
    ref(academyBudget, 'ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», versión 2026.2 (01/10/2026), tema A1-12 sobre presupuestos y ejecución del gasto; el bloque declara que no tiene equivalente A2.')
  ], null, 'Respuesta B: seis millones de euros. El art. 48.1 LGP dice «exceda de seis millones», de modo que el umbral es estrictamente superior, no igual o superior. Si se difiere, el pago inicial al otorgar la escritura no puede ser inferior al 25 % y el resto puede distribuirse en los cuatro ejercicios siguientes sujeto a los límites del art. 47. Se corrige la concordancia del enunciado. Clasificación A1-12; sin tema A2 específico.', 'corregida']
];

const edits = {
  5016: { texto: 'En comparación con el catálogo de derechos de la derogada Ley Orgánica 15/1999, la normativa vigente reconoce el derecho de:' },
  5018: { texto: '¿Qué ley regula las incompatibilidades del personal al servicio de las Administraciones Públicas?' },
  5020: { texto: 'A tenor del artículo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, ¿a partir de qué importe puede diferirse el vencimiento de la obligación de pago del precio de compra de bienes inmuebles adquiridos directamente?' }
};

aplicar({ numero: '939', fecha: '2026-11-11', records, edits });
