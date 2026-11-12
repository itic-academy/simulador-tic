const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const rfc='https://datatracker.ietf.org/doc/html/rfc1661';
const eur='https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18';
const amend='https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX%3A32024R1183';
const snia='https://www.snia.org/education/storage_networking_primer/san/what_san';
const fc='https://www.snia.org/education/what-is-fibre-channel';
const iscsi='https://www.snia.org/education/what-is-iscsi';
const db2='https://www.ibm.com/docs/en/db2/11.5.x?topic=cr-database-accessibility-during-backward-phase-crash-recovery-hadr-takeover';
const oracle='https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/database-concepts.pdf';
const nist='https://csrc.nist.gov/glossary/term/spyware';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records=[
 [5761,[108],['II-8'],['PPP','LCP','NCP','HDLC','LAPB','SDLC'],[
  ref(rfc,'IETF RFC 1661, §§ 1, 2, 3.4 y 5: PPP usa LCP para establecer/configurar el enlace y NCP para configurar protocolos de capa de red; su entramado predeterminado se denomina HDLC-like, no incorpora HDLC como protocolo de control PPP. LAPB y SDLC son protocolos distintos.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 108: redes, protocolos y conceptos de interconexión.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelos TCP/IP y OSI, protocolos y direccionamiento.'),
 ],null,'Corregida, respuesta C (LCP). El original preguntaba qué protocolo no forma parte de PPP pero incluía varios protocolos que no son componentes de su suite: LAPB, HDLC y SDLC. Se reescribe para que exista una única respuesta correcta: LCP forma parte de PPP y negocia/establece el enlace; PPP usa NCP para protocolos de red y un entramado HDLC-like. A1-108/A2-II.8.','corregida'],
 [5762,[80],['I-6'],['eIDAS','firma electrónica cualificada','artículo 25','Reglamento (UE) 910/2014'],[
  ref(eur,'EUR-Lex, Reglamento eIDAS, texto consolidado vigente a 18-10-2024: arts. 3.12 y 25. El art. 25.1 impide negar efecto/admisibilidad por el solo formato electrónico o por no ser cualificada; el art. 25.2 equipara la cualificada a la manuscrita. El actual art. 25 ya no incluye el antiguo apartado 3.'),
  ref(amend,'Reglamento (UE) 2024/1183, art. 1.23: suprime el art. 25.3 anterior; no debe mantenerse como regla vigente una cita literal de ese apartado.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 80: identidad/firma electrónica y marco europeo y nacional.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.6: régimen jurídico de identidad/firma electrónica y Reglamento eIDAS.'),
 ],null,'Corregida, respuesta C (48 meses). El original incluía como opción B el antiguo art. 25.3, suprimido por el Reglamento (UE) 2024/1183, por lo que además de los 48 meses contenía otra afirmación desactualizada. Se actualiza B a la definición vigente del art. 3.12: una firma cualificada es una firma avanzada creada mediante un dispositivo cualificado y basada en un certificado cualificado. El texto vigente no fija 48 meses como duración universal. A1-80/A2-I.6.','corregida'],
 [5763,[56],['IV-5'],['SAN','almacenamiento','Fibre Channel','iSCSI','NAS','DAS'],[
  ref(snia,'SNIA, What Is a SAN?: red especializada de alta velocidad que proporciona acceso de red a almacenamiento; presenta los dispositivos al host como almacenamiento local y puede usar Fibre Channel, Ethernet o InfiniBand.'),
  ref(fc,'SNIA, What Is Fibre Channel?: una SAN conecta hosts con almacenamiento compartido, normalmente con acceso a bloques; Fibre Channel suele usar fibra óptica, pero también puede usar cobre.'),
  ref(iscsi,'SNIA, What Is iSCSI?: iSCSI transporta SCSI por TCP/IP y puede utilizarse para crear una SAN sobre una red compartida o dedicada.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 56: sistemas y arquitecturas de almacenamiento.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.5: almacenamiento, arquitectura, componentes y protocolos.'),
 ],null,'Corregida, respuesta A. Una SAN es una red especializada que conecta hosts con almacenamiento compartido y suele proporcionar acceso a bloques; no exige exclusivamente fibra óptica. Fibre Channel es común, pero Ethernet/iSCSI también puede formar una SAN. La fibra es usual en Fibre Channel, aunque no exclusiva. La respuesta se actualiza para retirar la limitación tecnológica del original. A1-56/A2-IV.5.','corregida'],
 [5764,[63],['III-4','IV-2'],['recuperación de transacciones','UNDO','REDO','rollback','rollforward','SGBD'],[
  ref(db2,'IBM Db2 11.5, recuperación ante caída: reproduce cambios de transacciones desde los logs (forward/redo) y revierte las transacciones no confirmadas (backward/undo).'),
  ref(oracle,'Oracle Database Concepts 26, recuperación de instancia: aplica redo para avanzar/reaplicar cambios y undo para revertir cambios no confirmados.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 63: sistemas de gestión de bases de datos.'),
  ref(a2,'Convocatoria GSI A2 2025, temas III.4 (concurrencia/transacciones y resolución de conflictos) y IV.2 (administración de SGBD); el epígrafe se usa como encaje, no como cita literal de UNDO/REDO.'),
 ],null,'Corregida, respuesta D. Se aclara que la recuperación del SGBD combina avance/reaplicación (forward recovery, REDO) con retroceso/deshacer (backward recovery, UNDO); durante la recuperación tras una caída se reaplican cambios registrados y se revierten los de transacciones no confirmadas. El original usaba «hacia delante y hacia atrás» sin explicar los conceptos. A1-63/A2-III.4 y IV.2.','corregida'],
 [5765,[125,127],['II-13'],['spyware','software espía','malware','privacidad','NIST'],[
  ref(nist,'NIST CSRC Glossary, definición citada de CNSSI 4009-2022 y NIST SP 800-128: software instalado secreta o subrepticiamente para recopilar información sobre personas u organizaciones sin su conocimiento; tipo de código malicioso.'),
  ref(a1,'Convocatoria GSI A1 2025, tema 125 (tipos de ataques y herramientas de prevención) y tema 127 (ciberseguridad).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.13: seguridad física y lógica y herramientas de ciberseguridad.'),
 ],null,'Corregida, respuesta B. Se sustituye la definición estrecha y no generalizable del original (software de compañías añadido a descargas para estudios de mercado) por una definición precisa: el spyware se instala subrepticiamente para recopilar información sin conocimiento de las personas u organizaciones afectadas. No es sinónimo de cookie. A1-127/A2-II.13.','corregida'],
];
const edits={
 5761:{texto:'¿Cuál de los siguientes protocolos forma parte del Point-to-Point Protocol (PPP) para establecer y configurar el enlace?',opciones:['LAPB','HDLC','LCP','SDLC'],respuesta_correcta:2},
 5762:{texto:'Indique cuál de las siguientes afirmaciones no es correcta según el Reglamento (UE) 910/2014 (eIDAS) vigente:',opciones:['No se denegarán efectos jurídicos ni admisibilidad como prueba a una firma electrónica por el mero hecho de ser electrónica o no ser cualificada.','Una firma electrónica cualificada es una firma avanzada creada mediante un dispositivo cualificado y basada en un certificado cualificado de firma electrónica.','Las firmas electrónicas cualificadas tendrán una validez de 48 meses.','Una firma electrónica cualificada tendrá un efecto jurídico equivalente al de una firma manuscrita.'],respuesta_correcta:2},
 5763:{texto:'¿Cuál es la descripción más precisa de una red de área de almacenamiento (SAN)?',opciones:['Red especializada que proporciona a los hosts acceso a dispositivos de almacenamiento compartido, normalmente como almacenamiento de bloques; puede utilizar, entre otras tecnologías, Fibre Channel o Ethernet/iSCSI.','Almacenamiento conectado directamente a un servidor que procesa las peticiones de archivos.','Sistema que por definición carece de escalabilidad y solo puede conectar un único servidor.','Dispositivo conectado a una LAN que ofrece almacenamiento de archivos mediante protocolos como SMB o NFS, propio de una NAS.'],respuesta_correcta:0},
 5764:{texto:'En la recuperación de transacciones de un SGBD ante un fallo, ¿qué dos operaciones se combinan habitualmente?',opciones:['Detectar el fallo y detener definitivamente el sistema.','Prevenir el fallo e ignorar las transacciones incompletas.','Aplicar semáforos y monitores al registro de transacciones.','Reaplicar cambios confirmados mediante REDO (avance) y deshacer cambios no confirmados mediante UNDO (retroceso).'],respuesta_correcta:3},
 5765:{texto:'Según la definición de NIST/CNSSI, ¿qué caracteriza al spyware?',opciones:['Es software de alto secreto utilizado exclusivamente por servicios de inteligencia estatales.','Software instalado secreta o subrepticiamente para recopilar información sobre personas u organizaciones sin su conocimiento; se considera un tipo de código malicioso.','Es otro nombre para las cookies, que siempre constituyen software malicioso.','Es una denominación incorrecta que no se refiere a ningún tipo de software.'],respuesta_correcta:1}
};
aplicar({numero:'1088',fecha:'2026-11-12',records,edits});
