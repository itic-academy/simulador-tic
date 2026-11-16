const apply = require('./aplicar-lote.cjs');

const lo = 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const lpac = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20261001&tn=1';
const lssice = 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758';
const lcsp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902&p=20260409&tn=1';

const records = [
  [7706, [27], ['I-7'], ['LOPDGDD', 'artículo 32', 'bloqueo de datos', 'responsable del tratamiento'], [
    { url: lo, referencia: 'LO 3/2018 consolidada, artículo 32.1: el responsable del tratamiento debe bloquear los datos cuando proceda su rectificación o supresión. Los apartados 2–4 delimitan el bloqueo y el 5 permite excepciones por las autoridades de protección de datos en supuestos tasados.' }
  ], {
    texto: 'Según el artículo 32 de la Ley Orgánica 3/2018, cuando proceda la rectificación o supresión de datos personales, ¿quién está obligado a bloquearlos?',
    opciones: ['El responsable del tratamiento.', 'El encargado del tratamiento en todo caso.', 'El delegado de protección de datos.', 'La AEPD debe decidir caso por caso si procede bloquearlos.'],
    respuesta_correcta: 0
  }, 'Vigente A. El artículo 32.1 atribuye la obligación al responsable del tratamiento. Bloquear significa identificar y reservar los datos, impidiendo su tratamiento salvo para exigir posibles responsabilidades durante el plazo de prescripción; la ley prevé excepciones tasadas que pueden fijar las autoridades de protección de datos.', 'vigente'],
  [7707, [8], ['I-8'], ['Ley 39/2015', 'artículo 27', 'copias auténticas', 'funcionarios habilitados', 'registro interoperable'], [
    { url: lpac, referencia: 'Ley 39/2015 consolidada en BOE, artículo 27.1: debe mantenerse actualizado un registro u otro sistema equivalente de funcionarios habilitados para expedir copias auténticas; debe ser interoperable e interconectado con los de otras Administraciones.' }
  ], {
    texto: 'Conforme a la Ley 39/2015, ¿qué obligación establece su artículo 27 para las Administraciones Públicas en relación con los funcionarios habilitados para expedir copias auténticas?',
    opciones: ['Mantener actualizado un registro u otro sistema equivalente, interoperable e interconectado, de los funcionarios habilitados para expedir copias auténticas.', 'Crear necesariamente una red informática única para intercambiar toda la información entre Administraciones.', 'Ambas afirmaciones.', 'Ninguna de las anteriores.'],
    respuesta_correcta: 0
  }, 'Corregida A. El artículo 27.1 exige un registro u otro sistema equivalente de funcionarios habilitados para expedir copias auténticas, con interoperabilidad e interconexión. No impone en esos términos una red única para todo intercambio de información; la opción B confundía esa obligación específica con otros mecanismos de cooperación y consulta.', 'corregida'],
  [7708, [22], ['I-6'], ['LSSICE', 'Ley 34/2002', 'contratación electrónica', 'comunicaciones comerciales', 'servicios de la sociedad de la información'], [
    { url: lssice, referencia: 'Ley 34/2002 consolidada en BOE, artículos 21.1–2 y 23.1–2, y anexo, letra a): el artículo 21 prohíbe como regla el correo comercial no solicitado, pero prevé una excepción para clientes con relación contractual previa y productos o servicios propios similares; los contratos electrónicos producen efectos si concurren consentimiento y demás requisitos, sin acuerdo previo sobre el uso de medios electrónicos. El anexo incluye servicios no pagados por el destinatario cuando constituyen actividad económica del prestador.' }
  ], {
    texto: 'Conforme a la Ley 34/2002, ¿qué afirmación sobre contratación electrónica y comunicaciones comerciales es correcta?',
    opciones: [
      'Las comunicaciones publicitarias por correo electrónico están prohibidas sin excepción, incluso si existe relación contractual previa y se anuncian productos propios similares.',
      'Un contrato electrónico solo es válido si las partes acordaron previamente utilizar medios electrónicos.',
      'El contrato electrónico produce los efectos previstos por el ordenamiento si concurren el consentimiento y los demás requisitos de validez; no hace falta un acuerdo previo para utilizar medios electrónicos.',
      'La Ley 34/2002 solo reconoce efectos a los contratos electrónicos cuando ambas partes son prestadores de servicios de la sociedad de la información.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. La opción A ignoraba la excepción del artículo 21.2 para comunicaciones a clientes sobre productos o servicios propios similares, con posibilidad de oposición. El artículo 23.1–2 reconoce efectos a los contratos electrónicos si reúnen consentimiento y requisitos de validez y no exige acuerdo previo sobre el medio electrónico. La definición del anexo tampoco requiere que el destinatario pague directamente: comprende servicios no remunerados por él cuando sean actividad económica del prestador.', 'corregida'],
  [7709, [11], [], ['Ley 9/2017', 'LCSP', 'prescripciones técnicas', 'igualdad de acceso', 'competencia', 'marcas y procedencia'], [
    { url: lcsp, referencia: 'Ley 9/2017 consolidada en BOE (última modificación del Código de Contratos: 09/04/2026), artículo 126.1 y 126.6: las prescripciones técnicas deben garantizar acceso en condiciones de igualdad y no crear obstáculos injustificados; la referencia a una fabricación, procedencia, marca o tipo concretos se admite solo excepcionalmente, si se justifica y con las cautelas legales, incluida la mención «o equivalente» cuando corresponda.' }
  ], {
    texto: 'Según el artículo 126 de la Ley 9/2017, ¿cuál es la regla general para establecer las prescripciones técnicas de un contrato público?',
    opciones: [
      'Deben dar acceso en condiciones de igualdad y no crear obstáculos injustificados a la competencia.',
      'Deben identificar la marca que ofrezca la mayor calidad, aunque no exista justificación vinculada al objeto.',
      'Deben exigir siempre una fabricación o procedencia geográfica determinadas.',
      'Todas las anteriores son falsas.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. El artículo 126.1 exige igualdad de acceso y prohíbe obstáculos injustificados a la competencia. La mención a una marca, origen o fabricación concreta no es la regla general: solo cabe en los supuestos excepcionales legalmente previstos, justificados y con la referencia «o equivalente» cuando proceda.', 'corregida'],
  [7710, [11], [], ['Ley 9/2017', 'LCSP', 'división en lotes', 'ofertas integradoras', 'solvencia', 'contrato por lotes'], [
    { url: lcsp, referencia: 'Ley 9/2017 consolidada en BOE, artículo 99.4–7: permite limitar, con justificación, los lotes a los que licita un operador y los adjudicables a cada uno; para ofertas integradoras la solvencia corresponde al conjunto de lotes ofertados; por defecto cada lote es un contrato, salvo previsión distinta del pliego y la regla particular de ofertas integradoras.' }
  ], {
    texto: 'Según el artículo 99 de la Ley 9/2017, señale la afirmación correcta sobre los contratos divididos en lotes:',
    opciones: [
      'El órgano de contratación puede limitar, justificándolo en el expediente, los lotes a los que se puede licitar y los que se pueden adjudicar a un mismo licitador.',
      'Si se admiten ofertas integradoras, la solvencia económica, financiera y técnica exigida corresponde al conjunto de lotes por los que se licita la oferta integradora.',
      'Como regla general cada lote constituye un contrato, salvo previsión distinta del pliego; si se presentan ofertas integradoras, todas las ofertas integradoras constituyen un contrato.',
      'Todas las afirmaciones anteriores son correctas.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. Se corrigió la antigua opción B: la LCSP no establece siempre la solvencia de forma independiente por lote; el artículo 99.5.d la refiere al conjunto de lotes de la oferta integradora. La posibilidad de limitar lotes requiere justificación (art. 99.4) y, si se limita el número adjudicable, criterios objetivos y no discriminatorios. El artículo 99.7 fija como regla que cada lote sea un contrato, con las excepciones expresas del pliego y de las ofertas integradoras.', 'corregida']
];

apply({ numero: '1481', fecha: '2026-11-16', records });
