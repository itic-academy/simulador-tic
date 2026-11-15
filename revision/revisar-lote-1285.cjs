const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({numero:'1285',fecha:'2026-11-15',records:[
  [6746,[53],['II-1'],['hardware','garantía','RMA','reemplazo de equipo'],[
    src('https://www.cisco.com/c/en/us/products/warranties/warranty-faq.html','Cisco, preguntas sobre garantía de hardware: describe el proceso de Return Materials Authorization (RMA); en el proceso Return to Factory se emite un número RMA y el reemplazo se envía tras devolver y aceptar el producto defectuoso.'),
    src('https://www.cisco.com/c/dam/en_us/about/ac50/ac142/docs/srca-edcs.pdf','Cisco Supplier Root Cause Analysis Requirements, apartado 3: define Return Merchandise Authorization y requiere una autorización/número RMA para devolver el material.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 53: equipos departamentales, servidores y centros de proceso de datos.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.1: tecnologías de ordenadores y sus componentes.'),
    src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26 (Hardware, servidores, CPD, almacenamiento y virtualización), versión 2026: cotejo del ámbito curricular de hardware y equipamiento; el material no prescribe un procedimiento universal del fabricante para RMA.')
  ],{texto:'Un punto de acceso defectuoso aún está cubierto por la garantía. ¿Qué trámite se inicia normalmente con el fabricante o distribuidor para autorizar su devolución y solicitar reparación o sustitución?',opciones:[
    'CRM',
    'MTTR',
    'CBH',
    'RMA'
  ],respuesta_correcta:3},'Se conserva D. RMA es la autorización de devolución de material/producto que el fabricante o distribuidor asigna para tramitar una devolución bajo garantía, reparación o sustitución. El identificador RMA por sí mismo no garantiza un reembolso: el remedio depende de la garantía y de las condiciones del proveedor.','corregida'],

  [6747,[48,127],['II-13'],['ciberseguridad','Estrategia Nacional de Ciberseguridad','Ley 36/2015','seguridad nacional'],[
    src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10389','Ley 36/2015, de Seguridad Nacional, artículos 10, 14, 15 y 21: incluye la ciberseguridad entre los ámbitos de especial interés y atribuye funciones respecto de la Estrategia de Seguridad Nacional y de estrategias de segundo nivel.'),
    src('https://www.boe.es/buscar/doc.php?id=BOE-A-2021-21884','Real Decreto 1150/2021, de 28 de diciembre: aprueba la Estrategia de Seguridad Nacional 2021, no una Estrategia Nacional de Ciberseguridad 2021.'),
    src('https://www.boe.es/buscar/doc.php?id=BOE-A-2025-10371','Orden PJC/522/2025, de 23 de mayo: inicia el procedimiento para elaborar una nueva Estrategia Nacional de Ciberseguridad; el acuerdo identifica la ENCS 2019 como la vigente hasta entonces.'),
    src('https://www.dsn.gob.es/sites/default/files/documents/Estrategia%20Nacional%20de%20Ciberseguridad%202019.pdf','Departamento de Seguridad Nacional, Estrategia Nacional de Ciberseguridad 2019, resumen ejecutivo: la estrategia desarrolla las previsiones de la Estrategia de Seguridad Nacional 2017 en ciberseguridad.'),
    src(a1,'BOE-A-2025-25938, anexo I, temas 48 y 127: ENS/Estrategia de Seguridad Nacional y Estrategia Nacional de Ciberseguridad.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.13: seguridad física/lógica, ciberseguridad, incidentes y forense.'),
    src('https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22 (ENS, ciberseguridad y estrategia), versión 2026: cubre expresamente A1-48/A1-127 y contenidos A2 de ENS/ciberseguridad; cotejo curricular.')
  ],{texto:'Sobre ciberseguridad y el marco español de Seguridad Nacional, señale la afirmación correcta. No confunda la Estrategia de Seguridad Nacional con la Estrategia Nacional de Ciberseguridad.',opciones:[
    'La Ley 36/2015 no incluye la ciberseguridad entre los ámbitos de especial interés de la Seguridad Nacional.',
    'El Real Decreto 1150/2021 aprobó una «Estrategia Nacional de Ciberseguridad 2021».',
    'La Ley 36/2015 fija expresamente la aprobación de una Estrategia Nacional de Ciberseguridad cada cinco años.',
    'La Estrategia Nacional de Ciberseguridad 2019 desarrolla las previsiones de la Estrategia de Seguridad Nacional 2017 en el ámbito de la ciberseguridad.'
  ],respuesta_correcta:3},'Se conserva D y se precisa la distinción entre ambos documentos. La Ley 36/2015 sí incluye la ciberseguridad entre los ámbitos de especial interés (art. 10). El RD 1150/2021 aprobó la Estrategia de Seguridad Nacional 2021; la ENCS 2019 declara que desarrolla la ESN 2017 en ciberseguridad. La ley no establece una obligación quinquenal específica para la ENCS: el periodo de revisión que menciona se refiere a la Estrategia de Seguridad Nacional. En 2025 se inició el procedimiento para elaborar una nueva ENCS.','corregida'],

  [6748,[43],['II-14'],['Expat','MIT','licencia permisiva','venta de software','software libre'],[
    src('https://opensource.org/license/mit','Open Source Initiative, texto de la licencia MIT: autoriza, entre otras acciones, vender copias del software y exige conservar el aviso de copyright y el permiso en copias o partes sustanciales.'),
    src('https://spdx.org/licenses/Expat.html','SPDX License List, licencia Expat (MIT): identifica el texto de licencia Expat y sus condiciones de redistribución.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 43: protección jurídica de programas de ordenador y control de legalidad del software.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema II.14: software libre y propietario, características y tipos de licencias.'),
    src('https://drive.google.com/file/d/1MjRX0kL8jEBZwHIpUag4NyJJnh_VGsVG/view?usp=drivesdk','ITIC Academy, tema 43, Protección jurídica de programas de ordenador: cubre A1-43 y A2-II.14, licencias y derechos; cotejo curricular, no sustituye al texto de la licencia.')
  ],{texto:'Con respecto al texto de la licencia Expat (una forma permisiva conocida como MIT), ¿qué afirmación es correcta?',opciones:[
    'Al modificar un programa con licencia Expat, los cambios deben publicarse bajo GPL.','No se pueden vender copias del software.','Los cambios deben publicarse obligatoriamente bajo Expat.','Se pueden distribuir y vender copias, conservando los avisos de copyright y permiso exigidos por la licencia.'
  ],respuesta_correcta:3},'Se conserva D y se concreta la condición de redistribución. La licencia permite usar, modificar, distribuir, sublicenciar y vender copias; exige conservar los avisos de copyright y permiso correspondientes. No impone copyleft ni obliga a relicenciar las modificaciones bajo GPL o Expat. «MIT» tiene variantes textuales, por lo que la conclusión se refiere al texto Expat/MIT indicado, no a cualquier licencia denominada MIT sin examinarla.','corregida'],

  [6749,[19],['I-6'],['Ley de Mercados Digitales','DMA','guardianes de acceso','datos personales','consentimiento'],[
    src('https://eur-lex.europa.eu/eli/reg/2022/1925/oj?locale=es','Reglamento (UE) 2022/1925, Ley de Mercados Digitales, artículo 5, apartado 2: prohíbe las operaciones descritas sobre datos personales y el inicio de sesión con fines de combinación, salvo elección específica del usuario y consentimiento conforme al RGPD.'),
    src('https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es','Reglamento (UE) 2016/679 (RGPD), artículos 4.11 y 7: define el consentimiento y sus condiciones.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 19: impacto de las TIC en la economía y los mercados digitales.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema I.6: sociedad de la información y Agenda Digital.'),
    src('https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6 (Economía, sociedad, empleo y transformación digital), actualización 2026: cubre el contexto económico/digital del epígrafe; no se halló tratamiento específico de los artículos del DMA, cuya respuesta se verifica en EUR-Lex.')
  ],{texto:'En ausencia de que se haya presentado al usuario final una elección específica y se haya obtenido su consentimiento conforme al RGPD, ¿qué permite hacer en todo caso el artículo 5.2 de la Ley de Mercados Digitales al guardián de acceso?',opciones:[
    'Tratar para publicidad en línea los datos personales de usuarios de servicios de terceros que usan servicios básicos de plataforma del guardián.','Iniciar la sesión de usuarios finales en otros servicios del guardián para combinar datos personales.','Cruzar datos personales del servicio básico de plataforma pertinente con otros servicios que el guardián preste por separado, incluidos otros servicios básicos, y viceversa.','Ninguna de las respuestas anteriores.'
  ],respuesta_correcta:3},'Se conserva D; se añade la condición que faltaba en el enunciado. El artículo 5.2 del Reglamento (UE) 2022/1925 prohíbe las tres operaciones descritas salvo que se presente al usuario una elección específica y este consienta conforme a los artículos 4.11 y 7 del RGPD. «En todo caso» sin esa excepción, ninguna de A–C está permitida.','corregida'],

  [6750,[56],['IV-5'],['LTO-9','cintas magnéticas','almacenamiento','compatibilidad generacional','copias de seguridad'],[
    src('https://www.lto.org/lto-generation-compatibility/','LTO Ultrium, tabla de compatibilidad generacional: las unidades LTO-9 leen y escriben cartuchos LTO-8 y LTO-9; no leen LTO-7.'),
    src('https://www.lto.org/faqs-about-lto/','LTO Ultrium, FAQ: confirma que las unidades LTO-9 solo leen cartuchos LTO-9 y LTO-8.'),
    src(a1,'BOE-A-2025-25938, anexo I, tema 56: sistemas de almacenamiento y copias de seguridad.'),
    src(a2,'BOE-A-2025-26262, anexo IX, tema IV.5: almacenamiento de datos, tipos, componentes y administración.'),
    src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26 (Hardware, servidores, almacenamiento y virtualización), versión 2026: cotejo curricular de medios y sistemas de almacenamiento; compatibilidad contrastada con el consorcio LTO.')
  ],{texto:'Según la compatibilidad generacional oficial del formato LTO, ¿qué soportes puede leer y escribir una unidad LTO-9?',opciones:[
    'Únicamente soportes LTO-9.','Soportes LTO-8 y LTO-9.','Leer LTO-8 y leer/escribir LTO-9.','Leer LTO-7, LTO-8 y LTO-9; escribir LTO-8 y LTO-9.'
  ],respuesta_correcta:1},'Se conserva B. La compatibilidad oficial de LTO-9 es de lectura y escritura con medios LTO-8 y LTO-9 solamente; no hay lectura de dos generaciones atrás (LTO-7) en una unidad LTO-9.','corregida']
]});
