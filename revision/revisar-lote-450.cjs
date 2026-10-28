const apply = require('./aplicar-lote.cjs');

const s = {
  sei: {
    url: 'https://www.sei.cmu.edu/documents/1160/1996_005_001_16505.pdf',
    referencia: 'Carnegie Mellon University Software Engineering Institute, The Capability Maturity Model: Guidelines for Improving the Software Process, CMU/SEI-96-TR-025, versión 1.1, §2.2, p. 13: todos los niveles salvo el nivel 1 se descomponen en áreas de procesos clave; por definición no hay KPA para nivel 1. El documento describe el modelo clásico CMM for Software, no debe confundirse con CMMI.'
  },
  nist: {
    url: 'https://csrc.nist.gov/pubs/sp/800/77/r1/final',
    referencia: 'NIST SP 800-77 Rev. 1, Guide to IPsec VPNs, junio de 2020, §§3–4: IPsec protege comunicaciones sobre redes IP públicas; describe VPN de acceso remoto host-to-gateway y el modo túnel. Se limita expresamente el enunciado a IPsec en modo túnel porque el encapsulado y los servicios dependen del protocolo y configuración, y no toda VPN es idéntica.'
  },
  parnas: {
    url: 'https://doi.org/10.1145/361598.361623',
    referencia: 'D. L. Parnas, “On the Criteria to Be Used in Decomposing Systems into Modules”, Communications of the ACM 15(12), 1972, pp. 1053–1058, DOI 10.1145/361598.361623. El resumen original identifica como objetivos mejorar flexibilidad y comprensibilidad y permitir acortar el tiempo de desarrollo; la afirmación se formula sobre modularización, no como una definición universal del diseño estructurado.'
  },
  itu: {
    url: 'https://www.itu.int/hub/membership/become-a-member/participation/',
    referencia: 'Unión Internacional de Telecomunicaciones (ITU), Participation: enumera sus tres sectores y sus nombres oficiales: Radiocommunication (ITU-R), Telecommunication Standardization (ITU-T) y Telecommunication Development (ITU-D). ITU-T desarrolla normas, recomendaciones y buenas prácticas mediante sus grupos de estudio.'
  },
  delphi: {
    url: 'https://doi.org/10.1287/mnsc.9.3.458',
    referencia: 'N. Dalkey y O. Helmer, “An Experimental Application of the DELPHI Method to the Use of Experts”, Management Science 9(3), 1963, pp. 458–467, DOI 10.1287/mnsc.9.3.458. Describe rondas de cuestionarios y realimentación controlada para obtener consenso de opinión experta.'
  },
  ahp: {
    url: 'https://doi.org/10.1111/j.1539-6924.1987.tb00980.x',
    referencia: 'T. L. Saaty, “Risk—Its Priority and Probability: The Analytic Hierarchy Process”, Risk Analysis 7(2), 1987, pp. 159–172, DOI 10.1111/j.1539-6924.1987.tb00980.x. Presenta AHP como método de medición mediante escalas de razón y comparaciones de prioridades; la escala fundamental 1–9 y el vector propio caracterizan el procedimiento.'
  }
};

const records = [
  [2561, [96], ['III-13'], ['CMM for Software', 'SEI CMM 1.1', 'niveles de madurez', 'áreas de proceso clave', 'nivel 1'], [s.sei], '', 'Se explicita el CMM for Software clásico, versión 1.1, para evitar mezclarlo con CMMI. El SEI describe cinco niveles y precisa que, salvo el nivel 1 (inicial), los niveles se descomponen en áreas de procesos clave; por ello es falsa la afirmación de que también el nivel 1 tenga KPA. Las características comunes agrupan prácticas clave y no alteran esta excepción. A1-96/A2-III-13; correspondencia curricular contextual, no sustituye la fuente SEI.', 'corregida'],
  [2562, [125], ['IV-12'], ['VPN', 'IPsec', 'modo túnel', 'acceso remoto', 'red pública'], [s.nist], '', 'Se concreta la modalidad: una VPN de acceso remoto basada en IPsec y configurada en modo túnel encapsula el paquete IP protegido para transportarlo por la red pública. NIST documenta IPsec como control de seguridad de red y las arquitecturas host-to-gateway; no se generaliza que todas las VPN usen idéntico encapsulado, cifrado o autenticación. A1-125/A2-IV-12.', 'corregida'],
  [2563, [93], ['III-9'], ['Parnas', 'modularización', 'diseño de software', 'flexibilidad', 'comprensibilidad'], [s.parnas], '', 'El original mezclaba en una lista indivisible objetivos de diseño y dejaba competir modularización e integración, por lo que no había una respuesta inequívoca. Se sustituye por una proposición contrastable con el artículo clásico de Parnas: la modularización puede mejorar flexibilidad y comprensibilidad y permitir acortar el desarrollo; el autor advierte que la efectividad depende de los criterios de descomposición. A1-93/A2-III-9 como encuadre de diseño, no como atribución de una definición universal al diseño estructurado.', 'corregida'],
  [2564, [50], [], ['ITU', 'ITU-T', 'normalización de telecomunicaciones', 'organismos internacionales'], [s.itu], '', 'El enunciado se acota al sector de normalización de telecomunicaciones: ITU-T significa Telecommunication Standardization Sector. ITU-R es Radiocommunication y ITU-D, Telecommunication Development; los tres son sectores de la ITU, de modo que la antigua expresión genérica «sector correspondiente a Telecomunicaciones» no distinguía bien la respuesta. A1-50 encaja en organizaciones internacionales; no se asigna tema A2 específico de organismos internacionales de normalización.', 'corregida'],
  [2565, [40], ['II-15'], ['asignación de pesos', 'decisión multicriterio', 'método Delphi', 'AHP', 'utilidades relativas'], [s.delphi, s.ahp], '', 'Se conserva la clave conforme a la taxonomía concreta del bloque 17 de ITIC Academy v2026.2: Delphi se presenta como asignación directa y AHP/Saaty y utilidades relativas como indirectas. La clasificación directo/indirecto depende del esquema didáctico adoptado y no es una propiedad universal acordada en la literatura; por eso se identifica expresamente ese marco. Las fuentes originales sustentan los procedimientos Delphi y AHP, mientras que la adscripción a la taxonomía es curricular. A1-40/A2-II-15.', 'corregida']
];

const edits = {
  2561: {
    texto: 'Según el CMM for Software del SEI, versión 1.1, señale la afirmación FALSA:',
    opciones: [
      'El modelo define cinco niveles de madurez.',
      'Todos los niveles, incluido el nivel 1 (inicial), se descomponen en áreas de procesos clave.',
      'Las áreas de procesos clave identifican ámbitos en los que centrarse para alcanzar los objetivos del nivel correspondiente.',
      'El nivel 1 no tiene áreas de procesos clave; los niveles superiores sí se estructuran mediante ellas.'
    ],
    respuesta_correcta: 1
  },
  2562: {
    texto: 'En una VPN de acceso remoto basada en IPsec y configurada en modo túnel, ¿cómo se transporta el tráfico entre el host remoto y la red corporativa a través de Internet?',
    opciones: [
      'Como paquetes IP sin protección ni encapsulado, porque la red corporativa ya es privada.',
      'Mediante una conexión directa que no atraviesa la red pública.',
      'Como datos de aplicación cifrados, sin proteger ni encapsular el tráfico IP del túnel.',
      'Dentro de un túnel IPsec protegido que atraviesa la red pública.'
    ],
    respuesta_correcta: 3
  },
  2563: {
    texto: 'Según Parnas, ¿qué objetivos puede favorecer una modularización adecuada de un sistema software?',
    opciones: [
      'Aumentar exclusivamente la velocidad del procesador y eliminar las pruebas.',
      'Garantizar la ausencia total de mantenimiento y de errores.',
      'Mejorar la flexibilidad y la comprensibilidad y permitir acortar el tiempo de desarrollo.',
      'Maximizar únicamente la portabilidad, con independencia de los criterios usados para dividir los módulos.'
    ],
    respuesta_correcta: 2
  },
  2564: {
    texto: '¿Qué sector de la Unión Internacional de Telecomunicaciones (ITU) se ocupa de la normalización de las telecomunicaciones?',
    opciones: ['ITU-T.', 'ITU-R.', 'ITU-D.', 'ITU-C.'],
    respuesta_correcta: 0
  },
  2565: {
    texto: 'En la clasificación de asignación de pesos utilizada por ITIC Academy en su bloque 17 (versión 2026.2), señale la afirmación correcta:',
    opciones: [
      'Delphi es indirecto; AHP y utilidades relativas son directos.',
      'Delphi y AHP son directos; utilidades relativas es indirecto.',
      'Delphi, AHP y utilidades relativas son métodos directos.',
      'Delphi es directo; AHP y utilidades relativas son indirectos.'
    ],
    respuesta_correcta: 3
  }
};

apply({ numero: '450', fecha: '2026-10-28', records, edits });
