const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const academy = (id, title, detail) => src(
  `https://drive.google.com/file/d/${id}/view?usp=drivesdk`,
  `ITIC Academy, ${title}, edición 2026: ${detail}; cotejo curricular, no fuente jurídica o estadística primaria.`
);
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lgp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614';
const lgs = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977';
const dependency = 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-21990';
const sepe = 'https://www.sepe.es/HomeSepe/es/que-es-el-sepe/estadisticas/datos-avance.html';

apply({ numero: '1246', fecha: '2026-11-14', records: [
  [6551, ['12', '13'], [], ['Ley General Presupuestaria', 'anticipos de tesorería', 'fondos europeos', 'reintegro de ayudas', 'créditos ampliables'], [
    src(lgp, 'Ley 47/2003, General Presupuestaria, texto consolidado vigente, artículos 82.2, 84 y 86.2: los anticipos pendientes de cancelar para acciones y programas financiados o cofinanciados por fondos europeos pueden cancelarse en el ejercicio siguiente; el artículo 84 remite el reintegro y responsabilidad financiera a la LGS y normativa de la Unión; los créditos de liquidaciones definitivas autonómicas son ampliables.'),
    src(a1, 'Convocatoria GSI A1 2025, temas 12 y 13: presupuestos, modificaciones y ejecución del gasto; régimen jurídico de subvenciones públicas.'),
    academy('1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ', 'bloque 05, contratación, presupuestos y compra TIC', 'incluye Presupuestos Generales del Estado, ejecución/control del gasto y subvenciones; cada literal del reactivo se coteja con los artículos citados de la LGP.'),
    academy('1PsTULo7b5iqnrNx7LQ2mPfkMPyecv6iF', 'bloque 05, edición documental de contratación y presupuestos', 'material actualizado a 01-10-2026; sirve para comprobar el encaje curricular A1-12/A1-13, no para decidir el sentido legal de los anticipos.')
  ], {}, 'La afirmación incorrecta es D (índice 3). El artículo 82.2 LGP dice que los anticipos para acciones o programas financiados/cofinanciados por fondos europeos pendientes al cierre «podrán cancelarse en el ejercicio siguiente»; el enunciado invierte esa posibilidad al decir que no podrán. Las restantes afirmaciones se corresponden con los arts. 86.2 y 84 LGP.', 'vigente'],

  [6552, ['12'], [], ['Ley General Presupuestaria', 'clasificación económica', 'créditos de personal', 'presupuesto del Estado', 'artículo 43'], [
    src(lgp, 'Ley 47/2003, General Presupuestaria, texto consolidado vigente, artículo 43.1: en el presupuesto del Estado los créditos de personal y de gastos corrientes en bienes y servicios se especifican a nivel de artículo; el artículo 44 contiene otra regla para organismos autónomos y Seguridad Social.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 12: estructura del presupuesto, clasificación de gastos y modificaciones presupuestarias.'),
    academy('1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ', 'bloque 05, contratación, presupuestos y compra TIC', 'incluye estructura y clasificación económica del presupuesto, materia A1-12; el nivel de especificación se verifica con los arts. 43 y 44 LGP.')
  ], { texto: 'Conforme al artículo 43.1 de la Ley 47/2003, en el presupuesto del Estado, ¿a qué nivel se especifican los créditos destinados a gastos de personal?', opciones: ['A nivel de concepto.', 'A nivel de artículo.', 'A nivel de capítulo.', 'Al nivel que corresponda conforme a su concreta clasificación económica.'], respuesta_correcta: 1 }, 'Se mantiene B, pero se precisa el ámbito: el artículo 43.1 regula el presupuesto del Estado y especifica los créditos de personal a nivel de artículo. No debe generalizarse esta respuesta a organismos autónomos o a la Seguridad Social, cuyo artículo 44 establece una regla distinta (nivel de capítulo). A1-12.', 'corregida'],

  [6553, ['13', '25'], [], ['subvenciones públicas', 'BDNS', 'publicidad', 'transparencia', 'Ley General de Subvenciones'], [
    src(lgs, 'Ley 38/2003, General de Subvenciones, texto consolidado vigente, artículo 20.8: la Base de Datos Nacional de Subvenciones (BDNS) opera como sistema nacional de publicidad de las subvenciones; el artículo 20 regula sus funciones y publicidad.'),
    src(a1, 'Convocatoria GSI A1 2025, temas 13 y 25: régimen de subvenciones públicas; transparencia, gobierno abierto y rendición de cuentas.'),
    academy('1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ', 'bloque 05, contratación, presupuestos y compra TIC', 'trata el régimen de subvenciones y sus instrumentos de publicidad; la función legal se comprueba con el artículo 20.8 LGS.'),
    academy('1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE', 'bloque 06, economía, sociedad, empleo y transformación digital', 'cotejo transversal con transparencia y publicación de información pública; la calificación legal se apoya en la LGS y en la IGAE.')
  ], { texto: 'Según el artículo 20.8 de la Ley General de Subvenciones, ¿qué función desempeña la Base de Datos Nacional de Subvenciones (BDNS)?', opciones: ['Es el sistema regulador de subvenciones.', 'Opera como sistema nacional de publicidad de subvenciones.', 'Es el sistema de control presupuestario de las subvenciones.', 'Es el sistema de control financiero de las subvenciones.'], respuesta_correcta: 1 }, 'Se mantiene B y se fija la referencia legal. El artículo 20.8 LGS dispone que la BDNS opere como sistema nacional de publicidad de subvenciones. La IGAE la administra y custodia; la publicidad de los datos no convierte a la BDNS en el órgano regulador ni en el órgano de control financiero. A1-13/A1-25; el programa A2 no tiene un tema específico de subvenciones.', 'vigente'],

  [6554, ['16'], ['I-5'], ['dependencia', 'Ley 39/2006', 'catálogo de servicios', 'teleasistencia', 'ayuda a domicilio', 'centro de día'], [
    src(dependency, 'Ley 39/2006, de promoción de la autonomía personal y atención a las personas en situación de dependencia, texto consolidado vigente, artículos 15 y 22–25: incluye teleasistencia, ayuda a domicilio y centros de día o de noche dentro del catálogo de servicios.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 16: estructura social, discapacidad y dependencia.'),
    src(a2, 'Convocatoria GSI A2 2025, tema I.5: discapacidad y dependencia, régimen jurídico.'),
    academy('1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE', 'bloque 06, economía, sociedad, empleo y transformación digital', 'incluye A1-16 y los contenidos de dependencia y discapacidad del A2; el catálogo se contrasta con la Ley 39/2006 vigente.')
  ], {}, 'Se confirma B. El artículo 15 de la Ley 39/2006 enumera, entre otros, los servicios de teleasistencia, ayuda a domicilio y centro de día o de noche. Formación, sede electrónica y ambulancia no son los servicios de la opción correcta del catálogo de dependencia.', 'vigente'],

  [6555, ['17'], [], ['mercado de trabajo', 'paro registrado', 'SEPE', 'estadística mensual', 'Comunidades Autónomas'], [
    src(sepe, 'SEPE, Resumen de estadística mensual: organiza la publicación en resúmenes mensuales y apartados de paro registrado nacional, provincial y autonómico; la página ofrece la serie 2025–2026 con variaciones mensuales.'),
    src('https://www.sepe.es/HomeSepe/es/que-es-el-sepe/estadisticas/datos-avance/grafico-paro-registrado.html', 'SEPE, gráficos del paro registrado: series y evolución mensual por sexo, edad, sectores y comunidades autónomas.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 17: mercado de trabajo, principales magnitudes y políticas públicas de empleo.'),
    academy('1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE', 'bloque 06, economía, sociedad, empleo y transformación digital', 'incluye el tema A1-17 y las principales magnitudes del mercado laboral; periodicidad y series se validan en las publicaciones estadísticas mensuales del SEPE.')
  ], { texto: '¿Con qué periodicidad publica el SEPE la estadística de paro registrado?', opciones: ['Semanal.', 'Mensual.', 'Trimestral.', 'Interanual.'], respuesta_correcta: 1 }, 'Se mantiene B. El SEPE estructura su publicación estadística del paro registrado como estadística mensual y ofrece los resultados nacionales, provinciales y autonómicos, con variaciones entre meses. A1-17; no se asigna A2 porque el programa oficial A2 no contiene un epígrafe específico de mercado de trabajo o paro registrado.', 'corregida']
] });
