const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1199',fecha:'2026-11-13',records:[
 [6316,['125'],['IV-12'],['intranet','DMZ','segmentación de red','dominios de seguridad'],[
  src('https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/800-Esquema_Nacional_de_Seguridad/811-Interconexion_en_el_ESN-sep11.pdf','CCN-STIC-811, Interconexión en el ENS, glosario: una DMZ es una zona o segmento de red con requisitos de seguridad específicos, aislada o protegida del resto de sistemas.'),
  src('https://www.ccn-cert.cni.es/publico/seriesCCN-STIC/series/400-Guias_Generales/401-glosario_abreviaturas/topics/2111.html','CCN-STIC-400, glosario, entrada DMZ: subred física o lógica que añade una capa entre Internet y la red privada interna; el acceso externo queda limitado a los equipos situados en ella.'),
  src('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes, actualización 2026: intranet/extranet, redes y segmentación; cotejo curricular, no fuente de la clave.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 125: seguridad en redes, cortafuegos, control de accesos y herramientas de prevención.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad en redes y seguridad perimetral.')
 ],{texto:'¿Qué opción describe mejor el papel de la intranet y de la DMZ en la segmentación de seguridad de una organización?',opcion:[2,'Zonas de seguridad con distinto nivel de confianza; la DMZ se separa de la red interna y expone servicios con acceso externo controlado.']},'La opción C recoge la diferencia esencial entre las zonas: la intranet es la red interna y la DMZ es una zona intermedia, separada de ella, donde se alojan servicios cuyo acceso externo se controla. Se corrige la definición anterior, que confundía dominio administrativo con zona de seguridad y podía sugerir que las máquinas DMZ carecen de acceso exterior.', 'corregida'],
 [6317,['45'],['I-9'],['ENI','auditoría','ENS','periodicidad'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331','Real Decreto 4/2010, texto consolidado del ENI: no fija una periodicidad de auditoría regular ordinaria como la indicada en las opciones.'),
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191','Real Decreto 311/2022, art. 31.1: el ENS sí exige auditoría regular ordinaria al menos cada dos años; la pregunta mezclaba ambos Esquemas.'),
  src('https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk','ITIC Academy, bloque 20, temas 45–46, Interoperabilidad, actualización 2026: ENI y sus dimensiones; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 45: ENI e interoperabilidad de sistemas.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: ENS, ENI y guías CCN-STIC.')
 ],{texto:'Respecto de la auditoría periódica ordinaria, ¿qué establece el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad (ENI)?'},'La opción D es correcta: el RD 4/2010 no fija una auditoría ordinaria semestral, anual o bienal. La periodicidad mínima de dos años corresponde al artículo 31 del ENS, RD 311/2022. Se corrige el enunciado porque atribuía al ENI una obligación de auditoría que no establece y podía confundirse con el ENS.','corregida'],
 [6318,['106'],[],['ITIL 4','principios guía','gestión de servicios'],[
  src('https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565','PeopleCert, ITIL 4 Foundation: los siete principios guía orientan la adopción de prácticas ITIL y su adaptación a las necesidades específicas.'),
  src('https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque 41 ITIL y COBIT, actualización 2026: ITIL 4, principios guía y gestión de servicios; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 106: gestión de servicios e infraestructuras TIC y bases conceptuales de ITIL.'),
  src(a2,'El programa GSI A2 2025 cotejado no contiene un epígrafe específico de ITIL 4; no se fuerza equivalencia con materias de operación.')
 ],null,'La opción C expresa la función de los principios guía: orientan las decisiones y permiten adaptar las prácticas de gestión de servicios al contexto. No definen contratos (A), actividades de la cadena de valor necesarias para un objetivo (B), ni combinaciones de actividades y prácticas (D).', 'vigente'],
 [6319,['49'],['I-10'],['ORVE','GEISER','registro electrónico','servicios en la nube'],[
  src('https://administracionelectronica.gob.es/ctt/sir/infoadicional','PAe/CTT, información adicional de SIR: describe ORVE como servicio en la nube e identifica GEISER como servicio en la nube con funcionalidades de registro más amplias.'),
  src('https://administracionelectronica.gob.es/ctt/geiser','PAe/CTT, ficha GEISER: solución integral de registro en modo nube para organismos públicos.'),
  src('https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk','ITIC Academy, bloque 23 Servicios comunes, tema 49 A1/A2, actualización 2026: servicios compartidos de interoperabilidad y registro administrativo.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 49: infraestructuras y servicios comunes, incluido SIR.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.10: instrumentos de cooperación, infraestructuras y servicios comunes e interconexión.')
 ],null,'La respuesta es “Las 2 anteriores”: la ficha PAe/CTT de SIR califica ORVE como servicio en la nube y explica que GEISER amplía sus funcionalidades de registro; la ficha propia de GEISER también lo describe en modo nube. Se responde según las fichas oficiales de servicio consultadas.', 'vigente'],
 [6320,['48'],['I-9'],['ENS','medidas de seguridad','marco organizativo','marco operacional','medidas de protección'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191','Real Decreto 311/2022, anexo II, apartado 1.2: las medidas del ENS se dividen en marco organizativo, marco operacional y medidas de protección.'),
  src('https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22 Seguridad, ENS y ciberseguridad, actualización 2026: estructura y medidas del ENS; cotejo curricular.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 48: ENS y CCN-STIC.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.9: ENS, ENI y guías CCN-STIC.')
 ],null,'La tercera familia son las medidas de protección. El anexo II, apartado 1.2 del RD 311/2022 distingue expresamente marco organizativo [org], marco operacional [op] y medidas de protección [mp]. Por ello la opción A (“organizativas”) completa la enumeración.', 'vigente']
]});
