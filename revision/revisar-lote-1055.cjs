const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const pert='https://revistasonline.inap.es/index.php/DA/article/download/5199/5253/5431';
const universal='https://www.udinstitute.org/principles';
const wcag='https://www.w3.org/TR/WCAG22/';
const iso25010='https://www.iso.org/standard/78176.html';
const iso25010old='https://www.iso.org/standard/35733.html';
const iso9241='https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/06/35/63500.html';
const datacenter='https://www.digitalpolicy.gov.hk/en/our_work/data_governance/policies_standards/practice_guides/doc/Practice_Guide_on_Data_Centre_Security.pdf';
const nistPhysical='https://csrc.nist.rip/publications/nistpubs/800-12/800-12-html/chapter15.html';
const intel='https://download.intel.com/design/chipsets/datashts/29068801.pdf';
const intelClassic='https://www.intel.com/content/www/us/en/gaming/resources/how-to-choose-a-motherboard.html';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5596,[35],['III-2'],['PERT','matriz de encadenamientos','sucesoras','actividades finales','planificación de proyectos'],[
  ref(pert,'Instituto Nacional de Administración Pública, Documentación Administrativa 223 (1990), artículo de técnica PERT: define la matriz cuadrada por número de actividades, marca precedencias y explica que las columnas sin X son actividades sin sucesoras, cuyo suceso final coincide con el final del proyecto.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 35: dirección, planificación y seguimiento de proyectos TIC.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2: gestión y planificación de proyectos y sus técnicas.'),
  ref('https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk','ITIC Academy, material Gantt/PERT, planificación y técnicas de proyecto; cotejo curricular de PERT y precedencias.')
 ],null,'Se conserva B y se corrigen erratas menores del enunciado. La fuente de Documentación Administrativa del INAP describe exactamente la convención de la matriz de encadenamientos: fila = actividad que necesita haber concluido la precedente indicada en la columna; por ello, una columna sin marcas representa una actividad sin sucesoras y con suceso final coincidente con el fin del proyecto. La matriz es cuadrada por número de actividades, no de sucesos; el cuadro de prelaciones descrito en esa fuente tiene dos columnas.','vigente'],
 [5597,[44],['III-14'],['diseño universal','siete principios','uso equiparable','uso flexible','poco esfuerzo físico','tolerancia al error','WCAG robusto'],[
  ref(universal,'The RL Mace Universal Design Institute / Center for Universal Design, lista de los siete principios: uso equitativo, flexibilidad, simple/intuitivo, información perceptible, tolerancia al error, bajo esfuerzo físico, tamaño/espacio de aproximación y uso.'),
  ref(wcag,'W3C WCAG 2.2, principio 4 “Robust” (Robusto): pertenece a los principios de accesibilidad WCAG, no a la lista histórica de siete principios de Diseño Universal del Center for Universal Design.'),
  ref('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy 2026, bloque Análisis, diseño y construcción de sistemas: diseño de interfaces y UX; encaje general con diseño centrado en las personas.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 44: accesibilidad, usabilidad, W3C, diseño universal y adaptativo.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.14: accesibilidad, diseño universal y usabilidad.')
 ],null,'Se conserva D y se especifica que la lista comparada es el modelo de siete principios del Center for Universal Design (CUD). “Robusto” no forma parte de esos siete principios; es el nombre de uno de los cuatro principios WCAG (perceptible, operable, comprensible y robusto), por lo que se aclara la taxonomía para evitar la ambigüedad entre marcos.','corregida'],
 [5598,[44],['III-14'],['ISO/IEC 25010','ISO 9241-11','calidad de producto','usabilidad','capacidad de interacción'],[
  ref(iso25010,'ISO/IEC 25010:2023, edición vigente del modelo de calidad del producto para TIC y software, edición 2 publicada en noviembre de 2023.'),
  ref(iso25010old,'ISO/IEC 25010:2011, edición anterior retirada/sustituida; su modelo de calidad del producto incluía la característica “usabilidad”.'),
  ref(iso9241,'ISO 9241-11:2018, edición actual confirmada por ISO en 2023: marco vigente para comprender y aplicar la usabilidad a sistemas interactivos, productos y servicios.'),
  ref('https://www.iso.org/standard/78177.html','ISO/IEC 25019:2023, modelo de calidad en uso de sistemas y software; estándar vigente separado del modelo de calidad del producto.'),
  ref('https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy 2026, bloque Análisis, diseño y construcción, diseño de interfaces de aplicaciones y UX.'),
  ref('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk','ITIC Academy 2026, tecnologías de sistemas de información, tema A1 65: UX y desarrollo web.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 44: accesibilidad y usabilidad.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.14: accesibilidad, diseño universal y usabilidad.')
 ],null,'Se actualiza la pregunta para distinguir las normas que el enunciado original confundía. ISO/IEC 25010:2011 contenía “usabilidad” como característica del modelo de calidad del producto y ha sido retirada/sustituida por la edición vigente ISO/IEC 25010:2023; el modelo de calidad en uso tiene hoy su norma separada ISO/IEC 25019:2023. Para el marco y concepto de usabilidad se cita ISO 9241-11:2018, vigente. Se pregunta ahora por la edición actual del modelo SQuaRE de calidad del producto; correcta A.','corregida'],
 [5599,[53],['II-13','IV-6'],['CPD','centro de proceso de datos','seguridad física','señalización','acceso restringido'],[
  ref(datacenter,'Gobierno de la Región Administrativa Especial de Hong Kong, Practice Guide on Data Centre Security, § 6.5.9: como control para proteger salas críticas establece no colocar señales que indiquen su ubicación, salvo que lo exija una norma.'),
  ref(nistPhysical,'NIST SP 800-12, capítulo 15, seguridad física y ambiental: delimita centros de datos/salas de servidores como áreas que requieren controles de acceso físico para restringir entradas y proteger recursos.'),
  ref('https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk','ITIC Academy, bloque Hardware v2 2026, temas A1 52/53/54: servidores y centros de proceso de datos, diseño, implantación y gestión.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 53: servidores y diseño/implantación/gestión de CPD.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas II.13 y IV.6: seguridad física y protección/dimensionamiento de CPD.')
 ],null,'Se conserva la opción B, pero se acota a señalización pública que identifica innecesariamente la ubicación del CPD a visitantes no autorizados. La guía gubernamental de seguridad de centros de datos citada indica no señalizar la ubicación de salas/áreas críticas, salvo obligación legal. Las puertas de tamaño suficiente para el traslado de equipos, la ausencia de ventanas y la refrigeración pueden formar parte de un diseño seguro cuando se combinan con controles físicos; el tamaño por sí solo no determina la seguridad.','corregida'],
 [5600,[54],['IV-3'],['chipset','northbridge','southbridge','x86 clásico','AGP','controlador de memoria'],[
  ref(intel,'Intel 815 Chipset Family, 82815 GMCH Datasheet: el Graphics and Memory Controller Hub conecta la memoria del sistema y la interfaz AGP; el I/O Controller Hub integra IDE y USB, entre otras E/S.'),
  ref(intelClassic,'Intel, guía de selección de placa base: describe como diseño clásico la división chipset northbridge/southbridge y sitúa AGP y memoria en la ruta de alto rendimiento/northbridge.'),
  ref('https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk','ITIC Academy, bloque Hardware v2 2026, § “Chipset (bridges)”, tema A1 54: arquitecturas de ordenadores, buses y chipset.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 54: dispositivos personales de PC y microinformática.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.3: mantenimiento de equipos e instalaciones; correspondencia de hardware sin afirmar que el programa tenga un tema independiente de northbridge.')
 ],null,'La pregunta se conserva como histórica y se concreta al diseño x86 con chipset dividido. En un ejemplo primario de Intel (815), el GMCH/northbridge gestiona la memoria y AGP; IDE, USB y otras E/S se sitúan en el ICH/southbridge. En equipos actuales estas funciones suelen integrarse en el procesador o en un hub distinto, por lo que no se presenta la división clásica como arquitectura vigente universal.','historica']
];
const edits={
 5596:{texto:'En la matriz de encadenamientos usada para construir una red PERT, ¿qué significa que una columna no contenga ninguna marca “X”?',opciones:['Que la actividad de esa columna no tiene actividades precedentes y puede iniciar el proyecto.','Que la actividad representada en esa columna no precede a ninguna otra; no tiene sucesoras y su suceso final coincide con el suceso final del proyecto.','Que la actividad de esa columna tiene duración nula.','Que la matriz tiene una fila por suceso, aunque haya más actividades que sucesos.'],respuesta_correcta:1},
 5597:{texto:'En la lista clásica de siete principios de Diseño Universal del Center for Universal Design, ¿cuál NO es uno de ellos?',opciones:['Uso equitativo.','Flexibilidad en el uso.','Que el diseño exija poco esfuerzo físico.','Robusto.'],respuesta_correcta:3},
 5598:{texto:'¿Cuál es la edición vigente de ISO/IEC 25010 que sustituyó a ISO/IEC 25010:2011 como modelo de calidad del producto para sistemas y software?',opciones:['ISO/IEC 25010:2023.','ISO 8859.','ISO 14000.','ISO/IEC 14496.'],respuesta_correcta:0},
 5599:{texto:'En el diseño de seguridad física de un CPD, ¿qué medida divulgaría innecesariamente su ubicación a visitantes no autorizados y, salvo obligación legal, debería evitarse?',opciones:['Puertas con dimensiones adecuadas para introducir y retirar equipos, con control de acceso.','Señalización pública que identifica explícitamente la ubicación de la sala crítica.','Evitar ventanas exteriores en el área segura.','Disponer de refrigeración y monitorización ambiental.'],respuesta_correcta:1},
 5600:{texto:'En un chipset x86 clásico dividido en northbridge (MCH/GMCH) y southbridge (ICH), como el Intel 815, ¿qué función corresponde al northbridge?',opciones:['Controlador de memoria del sistema e interfaz AGP.','Controladores IDE y SATA.','Controladores USB y FireWire.','Super I/O (puertos serie y paralelo), audio y LAN.'],respuesta_correcta:0}
};
aplicar({numero:'1055',fecha:'2026-11-12',records,edits});
