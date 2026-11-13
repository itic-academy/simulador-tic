const apply=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const src=(url,referencia)=>({url,referencia});
apply({numero:'1195',fecha:'2026-11-13',records:[
 [6296,['106'],['IV-3'],['ITIL','gestión de incidencias','prioridad','impacto','urgencia'],[
  src('https://www.ontario.ca/page/go-its-44-itsm-terminology-reference-model','Gobierno de Ontario, GO-ITS 44 ITSM Terminology Reference Model, apéndice B: utiliza impacto y urgencia para establecer la prioridad de incidentes; el nivel de prioridad es el resultado, no un factor de entrada equivalente.'),
  src('https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque 41 ITIL y COBIT (2026): incluye gestión de servicios y de incidencias; cotejo de cobertura temática.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 106: gestión de servicios, incidencias e ITIL.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.3: gestión de incidencias.')
 ],null,'Se corrige el enunciado circular. La prioridad del incidente se determina normalmente a partir de su impacto y urgencia, según la matriz adoptada por la organización; «prioridad» es el resultado de esa valoración. La opción C formula esa relación; las opciones A y B por separado son insuficientes y D queda descartada.','corregida'],
 [6297,['4'],[],['Ley 40/2015','AGE','órganos superiores','órganos directivos','Subdirector General'],[
  src('https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&lang=es&p=20260929&tn=1#art55','Ley 40/2015, art. 55.3, texto consolidado consultado: en la organización central son órganos superiores los Ministros y Secretarios de Estado; los Subdirectores generales figuran entre los órganos directivos.'),
  src('https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk','ITIC Academy, bloque 01 Constitución, organización del Estado y AGE (2026): organización central de la Administración General del Estado; cotejo temático A1-4.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 4: Administración General del Estado y sus órganos centrales.'),
  src(a2,'El programa GSI A2 2025 cotejado no contiene un tema específico sobre la clasificación orgánica de la AGE; no se asigna código A2 por analogía.')
 ],null,'La opción A es correcta: los Subdirectores generales son órganos directivos según el art. 55.3.b.3.º de la Ley 40/2015. Ministros y Secretarios de Estado son órganos superiores (art. 55.3.a), no directivos.','vigente'],
 [6298,['96'],['III-7'],['pruebas de software','McCabe','basis path testing','caja blanca','caminos básicos'],[
  src('https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf','NIST SP 500-235, Structured Testing: A Testing Methodology Using the Cyclomatic Complexity Metric, escrito por Watson y McCabe: identifica structured testing como basis path testing y lo define mediante estructura de control y cobertura de caminos.'),
  src('https://csrc.nist.gov/glossary/term/white_box_testing','NIST CSRC Glossary, white-box testing: metodología que requiere conocimiento explícito de la estructura interna del objeto evaluado; coherente con el análisis de flujo de control usado en basis path testing.'),
  src('https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39 Calidad y mantenimiento (2026): procesos, técnicas y herramientas de pruebas de software; cotejo A1-96/A2-III-7.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 96: técnicas y herramientas de pruebas de software.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.7: pruebas de software, hardware, procedimientos y datos.')
 ],null,'La respuesta B es correcta. La prueba de caminos básicos (basis path/structured testing), basada en la complejidad ciclomática de McCabe, analiza la estructura de control del programa y diseña caminos de prueba; por ello es una técnica estructural o de caja blanca, no una prueba de caja negra, integración por definición ni beta.','vigente'],
 [6299,['115'],['IV-13'],['IPv4','Mobile IP','Home Agent','agente base','RFC 5944','túnel IP'],[
  src('https://www.rfc-editor.org/rfc/rfc5944.html','RFC 5944, IP Mobility Support for IPv4, §§1 y 4.2.3: el Home Agent es un router de la red de origen que mantiene la ubicación registrada, intercepta datagramas dirigidos a la dirección de origen del móvil y los tuneliza a su care-of address.'),
  src('https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes (actualización 2026): Internet, arquitectura, redes y encaminamiento; cotejo curricular general.'),
  src('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43 Protocolos (actualización 2026): redes IP, direccionamiento y encaminamiento; cotejo curricular general.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 115: arquitectura y funcionamiento de redes IP.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.13: arquitectura y principios de funcionamiento de Internet.')
 ],null,'La opción B es correcta en el contexto de Mobile IPv4 de RFC 5944. El Home Agent se sitúa en la red de origen, mantiene el registro de localización y tuneliza los datagramas dirigidos a la home address hacia la care-of address registrada. El agente extranjero (opción C) pertenece a la red visitada y presta servicios de encaminamiento allí.','vigente'],
 [6300,['53','57','132'],['II-1','IV-6'],['virtualización','hipervisor','virtualización completa','sistema operativo invitado','hardware virtual'],[
  src('https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-125.pdf','NIST SP 800-125, Guide to Security for Full Virtualization Technologies: cada sistema operativo invitado corre en una máquina virtual sobre hardware virtual; el hipervisor gestiona los invitados y controla el flujo de instrucciones hacia el hardware físico.'),
  src('https://csrc.nist.gov/pubs/sp/800/125/a/r1/final','NIST SP 800-125A Rev. 1, Security Recommendations for Hypervisor Deployment on Servers: define hypervisor, VM, recursos virtualizados e invitados independientes.'),
  src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque Hardware, servidores, CPD, almacenamiento y virtualización (2026): hipervisores, máquinas virtuales y consolidación; cotejo A1-53/A1-57/A1-132/A2-II-1/A2-IV-6.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, temas 53, 57 y 132: servidores, sistemas multiusuario y virtualización.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, temas II.1 y IV.6: tecnologías actuales de ordenadores y virtualización/consolidación de servidores.')
 ],null,'Se corrige la opción B: cada invitado conserva su propio sistema operativo y kernel, pero ejecuta sobre hardware virtual presentado por el hipervisor; no accede directamente al hardware físico como si no hubiera virtualización. El hipervisor gestiona los invitados y media el acceso a los recursos físicos.','corregida']
],edits:{
 6296:{texto:'En la gestión de incidencias de TI, ¿de qué factores se suele calcular la prioridad de un incidente?',opciones:['Del impacto, sin considerar el tiempo disponible para resolverlo.','De la urgencia, sin valorar el alcance del efecto.','De la combinación de impacto y urgencia, conforme a la matriz de prioridad de la organización.','De una clasificación de prioridad que no depende del impacto ni de la urgencia.'],respuesta_correcta:2},
 6300:{opciones:['Los sistemas operativos invitados comparten un kernel único proporcionado por el hipervisor.','Cada sistema operativo invitado tiene su propio kernel y se ejecuta en hardware virtual presentado y gestionado por el hipervisor.','El hipervisor emula completamente cada sistema operativo invitado, lo que garantiza una ejecución más rápida y eficiente.','El hipervisor proporciona necesariamente una única interfaz de usuario para todos los sistemas operativos invitados.'],respuesta_correcta:1}
}});
