const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ieee8022='https://www.ieee802.org/2/';
const ieeeArchitecture='https://standards.ieee.org/wp-content/uploads/import/documents/tutorials/macgrp.pdf';
const poe='https://www.ieee802.org/3/at/';
const poeNaming='https://www.ieee802.org/3/poep_study/email/msg00154.html';
const dmz='https://csrc.nist.gov/glossary/term/demilitarized_zone';
const nistFirewall='https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-41r1.pdf';
const snmpPorts='https://www.rfc-editor.org/rfc/rfc3417.html';
const usm='https://www.rfc-editor.org/rfc/rfc3414.html';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5656,[111,118],['II-8','IV-8'],['IEEE 802','OSI','capa de enlace','LLC','MAC'],[
  ref(ieee8022,'IEEE 802.2 Working Group: desarrolla el estándar Logical Link Control (LLC).'),
  ref(ieeeArchitecture,'IEEE 802, Overview and Architecture: en LAN, LLC y MAC son subcapas del nivel de enlace OSI; MAC controla el acceso al medio y LLC presta el control lógico del enlace.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 111 (OSI) y 118 (redes de área local/IEEE 802).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas II.8 (OSI/TCP-IP) y IV.8 (redes locales).')
 ],null,'Corregida, respuesta A. En la arquitectura IEEE 802, el nivel de enlace de datos del modelo OSI se divide en LLC (Logical Link Control, común) y MAC (Medium Access Control, específico del medio); el nivel físico sigue siendo una capa separada. Se formula como subcapas del enlace, no como reemplazo o renombrado de los niveles OSI.','corregida'],
 [5657,[110,118],['IV-7','IV-8'],['PoE','PoE+','IEEE 802.3af','IEEE 802.3at','Type 1','Type 2'],[
  ref(poe,'IEEE 802.3at Task Force: registra la aprobación de IEEE Std 802.3at-2009 como enmienda de mejora de alimentación sobre Ethernet.'),
  ref(poeNaming,'IEEE 802.3 Power over Ethernet Plus Study Group: nomenclatura propuesta/del grupo distingue 802.3at Type 2/PoE+ de 802.3af Type 1/PoE.'),
  ref('https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/infra/poe/poe-configuration-guide/g-poe/c-poe.html','Cisco, PoE Configuration Guide: 802.3af = Type 1/PoE y 802.3at = Type 2/PoE+, con 30 W máximos PSE; 802.3bt define tipos posteriores de mayor potencia.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 110 (cableado) y 118 (LAN/Ethernet).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV.7 (cableado) y IV.8 (LAN).')
 ],null,'Corregida, respuesta A. La enmienda IEEE 802.3at introdujo históricamente PoE Type 2, conocido como PoE+, como ampliación de IEEE 802.3af Type 1. Se especifica «Type 2» para no confundirlo con 802.3bt Type 3/4, que ofrece potencias superiores y es posterior.','corregida'],
 [5658,[119],['IV-12'],['DMZ','zona desmilitarizada','red perimetral','subred filtrada','seguridad perimetral'],[
  ref(dmz,'NIST CSRC Glossary, «demilitarized zone»: red perimetral o subred filtrada que separa la red interna más confiable de la red externa menos confiable.'),
  ref(nistFirewall,'NIST SP 800-41 Rev. 1, sección 5.4.1: firewalls/DMZ, hosts expuestos y reglas para el tráfico entre DMZ, redes externas e internas.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 119: arquitectura de redes Intranet/Extranet e implantación en organizaciones.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.12: seguridad de redes y seguridad perimetral.')
 ],null,'Corregida, respuesta A. Una DMZ o red perimetral aloja servicios que deben ser accesibles desde redes externas y se separa de la red interna más confiable mediante políticas de cortafuegos. No queda «libre de ataques» ni habilita confianza/acceso irrestricto hacia la LAN interna; tampoco es sinónimo de honeypot.','corregida'],
 [5659,[118],['IV-9'],['SNMP','puerto UDP 161','petición-respuesta','trap 162','monitorización'],[
  ref(snmpPorts,'RFC 3417 § 7: las aplicaciones responder de comandos SNMP escuchan en UDP 161; las receptoras de notificaciones en UDP 162.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 118: monitorización y gestión SNMP de redes LAN.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.9: monitorización y control de redes, gestión SNMP.')
 ],null,'Corregida, respuesta B (161). En la asignación convencional de transporte SNMP, el command responder recibe peticiones en UDP 161; las notificaciones/traps se reciben en UDP 162. El enunciado precisa petición-respuesta para distinguir ambos puertos.','corregida'],
 [5660,[118],['IV-9','IV-12'],['SNMPv3','USM','RFC 3414','User-based Security Model','seguridad de gestión'],[
  ref(usm,'RFC 3414: especificación del User-based Security Model (USM) para SNMP versión 3; integra el conjunto de estándares SNMPv3/STD 62.'),
  ref('https://www.rfc-editor.org/rfc/rfc3411.html','RFC 3411, arquitectura SNMP: define los subsistemas de seguridad y el modelo USM como uno de los modelos compatibles.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 118: gestión SNMP en redes de área local.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas IV.9 (SNMP) y IV.12 (seguridad de redes).')
 ],null,'Corregida, respuesta C (RFC 3414). La RFC 3414 especifica el modelo de seguridad basado en usuario USM para SNMPv3. RFC 1441 pertenece al desarrollo de SNMPv2; RFC 3854 trata la protección de contenido X.400 con S/MIME y no define USM. La RFC 3414 tiene actualizaciones posteriores para el subsistema de transporte, pero sigue siendo la especificación base del modelo citado.','corregida']
];
const edits={
 5656:{texto:'En la arquitectura IEEE 802 para LAN, ¿cómo se subdivide el nivel de enlace de datos del modelo OSI?',opciones:['En las subcapas LLC (Logical Link Control) y MAC (Medium Access Control).','El nivel físico se subdivide en LLC y MAC.','Se añaden tres capas nuevas: física, LLC y MAC, que sustituyen al enlace OSI.','Los niveles OSI físico y de enlace cambian sus nombres a LLC y MAC.'],respuesta_correcta:0},
 5657:{texto:'¿Qué enmienda de IEEE 802.3 introdujo históricamente PoE Type 2 (PoE+), ampliando la alimentación de IEEE 802.3af Type 1?',opciones:['IEEE 802.3at.','IEEE 802.3ag (Ethernet OAM).','IEEE 802.3bt, que definió los posteriores Type 3/4.','No hubo una ampliación de IEEE 802.3af.'],respuesta_correcta:0},
 5658:{texto:'¿Qué describe correctamente una DMZ o red perimetral en una arquitectura de seguridad?',opciones:['Una subred para servicios que necesitan exposición externa, separada de la red interna confiable mediante políticas de cortafuegos.','Una subred inmune a ataques externos donde deben alojarse las bases de datos críticas internas.','Una red a la que se permite acceso irrestricto a la LAN porque está «desmilitarizada».','Un tipo de honeypot.'],respuesta_correcta:0},
 5659:{texto:'En la asignación convencional de transporte SNMP, ¿qué puerto UDP utiliza el agente/command responder para recibir peticiones y operaciones de lectura/escritura?',opciones:['169.','161.','171.','179.'],respuesta_correcta:1},
 5660:{texto:'¿Qué RFC especifica el User-based Security Model (USM) para SNMPv3?',opciones:['RFC 1157.','RFC 1441.','RFC 3414.','RFC 3854.'],respuesta_correcta:2}
};
aplicar({numero:'1067',fecha:'2026-11-12',records,edits});
