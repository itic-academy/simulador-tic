const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rfc4044='https://www.rfc-editor.org/rfc/rfc4044.html';
const nist34='https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf';
const nist53='https://csrc.nist.gov/CSRC/media/Projects/risk-management/800-53%20Downloads/800-53r5/SP_800-53_v5_1-derived-OSCAL.pdf';
const wsdl11='https://www.w3.org/TR/wsdl.html';
const wsdl20='https://www.w3.org/TR/wsdl20/';
const ostep='https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf';
const ref=(url,referencia)=>({url,referencia});
const hardware='https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk';
const os='https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const tech='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const records=[
 [5601,[56],['IV-5'],['Fibre Channel','World Wide Name','WWN','SAN','identificador de nodo y puerto'],[
  ref(rfc4044,'IETF RFC 4044, Fibre Channel Management MIB, convención FcNameIdOrZero: WWN asociado a entidad Fibre Channel; originalmente 64 bits, y longitud de 128 bits definida para uso futuro; tamaños codificados de 8 o 16 octetos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 56: almacenamiento para sistemas grandes y departamentales.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.5: arquitectura, tipos, protocolos y administración del almacenamiento.')
 ],null,'Corregida para limitar el concepto a Fibre Channel y evitar la generalización “en una red de almacenamiento”. RFC 4044 define la WWN de una entidad FC; describe la forma inicial de 64 bits y una longitud de 128 bits para uso futuro, así que la opción tradicional de ocho octetos es correcta solo con esa acotación.','corregida'],
 [5602,[56],['IV-3'],['backup','copia incremental','copia diferencial','restauración','archivo creado o modificado'],[
  ref(nist34,'NIST SP 800-34 Rev. 1, § 5.1.2: la copia incremental captura los archivos creados o modificados desde la copia anterior, sea del tipo que sea; la recuperación puede requerir varias operaciones.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 56: sistemas de almacenamiento y copias de seguridad.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.3: procedimientos de backup y recuperación.')
 ],null,'Corregida. “Desde la última copia normal” y marcar archivos como copiados describían comportamientos dependientes de herramientas y del bit de archivo, no la definición general. NIST define incremental respecto de la copia inmediatamente anterior, sea completa o incremental; la diferencial, en cambio, acumula cambios desde la última completa.','corregida'],
 [5603,[65],['III-12'],['WSDL','SOAP','servicios web','descripción de interfaces','XML'],[
  ref(wsdl11,'W3C Note Web Services Description Language 1.1, § 3: especifica el binding SOAP 1.1 para describir endpoints, operaciones y mensajes SOAP.'),
  ref(wsdl20,'W3C Recommendation WSDL 2.0 Part 1: lenguaje XML para describir servicios web; el documento complementario Part 2 define, entre otros, bindings SOAP.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web e interconexión con sistemas y servicios.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.12: estándares y protocolos de servicios web e interoperabilidad.')
 ],null,'La respuesta WSDL se mantiene, pero se precisa que se pregunta por el lenguaje de descripción de servicios e interfaces. WSDL describe el servicio y puede declarar un binding SOAP; SOAP es el protocolo/formato de mensajería, UDDI un registro y REST un estilo arquitectónico, no sustitutos de WSDL en esta pregunta.','corregida'],
 [5604,[34],['IV-1'],['inventario de componentes','gestión de sistemas','hardware','software','topología de red'],[
  ref(nist53,'NIST SP 800-53 Rev. 5, CM-8 System Component Inventory: el inventario incluye componentes de hardware y software, nombres de máquina y direcciones de red para componentes conectados; la organización define información adicional según sus necesidades. No prescribe un diagrama de topología como campo de inventario.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 34: organización y funcionamiento de centros de sistemas de información, incluidos sistemas y microinformática.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.1: administración del sistema operativo y software de base.')
 ],null,'Corregida y acotada al contenido mínimo de un inventario de componentes. El inventario registra los equipos, software y, para los componentes conectados, nombres y direcciones de red. Un esquema topológico puede ser un artefacto útil de arquitectura o documentación, pero no es por ello un campo mínimo de cada registro de inventario. NIST deja además información complementaria a criterio de la organización.','corregida'],
 [5605,[59],['IV-1'],['Round Robin','planificación de CPU','quantum','conmutación de contexto','tiempo de retorno'],[
  ref(ostep,'OSTEP, capítulo 7, Scheduling: define turnaround como finalización menos llegada y analiza Round Robin, quantum y planificación preventiva; el resultado numérico se obtiene aplicando literalmente los datos del enunciado.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 59: fundamentos de sistemas operativos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.1: administración y fundamentos del sistema operativo.')
 ],null,'Corregida para explicitar las condiciones necesarias: ambos procesos llegan en t=0, P1 se ejecuta primero y cada cambio de proceso cuesta 5 ms; no se añade coste inicial ni después de finalizar el último proceso. La secuencia es P1 0–10, cambio 10–15, P2 15–25, cambio 25–30, P1 30–40, cambio 40–45 y P2 45–50. Por tanto, el retorno/turnaround de P2 es 50 ms.','corregida']
];
const edits={
 5601:{texto:'En Fibre Channel, ¿qué afirmación describe correctamente una World Wide Name (WWN) tradicional?',opciones:['Es un identificador de una entidad Fibre Channel; las WWN se definieron inicialmente con 64 bits (8 octetos).','Es uno de los servidores DNS raíz.','Es un dominio de Internet basado en IPv6.','Es un protocolo que identifica equipos con independencia de la red y del sistema operativo.'],respuesta_correcta:0},
 5602:{texto:'¿Qué describe una copia de seguridad incremental en la definición general, sin asumir el comportamiento de una herramienta concreta respecto del bit de archivo?',opciones:['Copia todos los archivos seleccionados en cada ejecución.','Copia los archivos creados o modificados desde la copia de seguridad inmediatamente anterior, que puede ser completa o incremental.','Copia los archivos modificados desde la última copia completa, pero no los creados.','Copia todos los archivos modificados desde la última copia completa y siempre restablece el bit de archivo.'],respuesta_correcta:1},
 5603:{texto:'¿Qué lenguaje XML se emplea para describir las interfaces, operaciones y bindings de un servicio web, incluido un binding SOAP?',opciones:['WSDL.','UDDI.','SOAP.','REST.'],respuesta_correcta:0},
 5604:{texto:'En un inventario de componentes de sistemas, ¿cuál de estos elementos no es por sí mismo un campo mínimo de cada registro, aunque pueda documentarse aparte como artefacto de arquitectura?',opciones:['Identificación de los equipos y componentes hardware.','Software instalado o gestionado en cada equipo.','Un diagrama de topología de red.','Nombre de máquina y dirección de red de los componentes conectados.'],respuesta_correcta:2},
 5605:{texto:'Dos procesos llegan en t=0 y están listos: P1 necesita 20 ms de CPU y P2 15 ms. Con Round Robin, cuanto de 10 ms y un coste de 5 ms solo entre procesos cuando cambia el proceso ejecutado (sin coste de despacho inicial ni tras la finalización), se ejecuta primero P1. ¿Cuál es el tiempo de retorno de P2?',opciones:['35 ms.','40 ms.','50 ms.','55 ms.'],respuesta_correcta:2}
};
aplicar({numero:'1056',fecha:'2026-11-12',records,edits});
