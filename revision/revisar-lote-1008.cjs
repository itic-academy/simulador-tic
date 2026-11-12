const aplicar=require('./aplicar-lote.cjs');
const fs=require('node:fs'),path=require('node:path');
const ref=(url,referencia)=>({url,referencia});
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rfc791='https://www.rfc-editor.org/rfc/rfc791';
const rfc4632='https://www.rfc-editor.org/rfc/rfc4632';
const rfc8200='https://www.rfc-editor.org/rfc/rfc8200';
const rfc4291='https://www.rfc-editor.org/rfc/rfc4291';
const rfc2675='https://www.rfc-editor.org/rfc/rfc2675';
const rfc1812='https://www.rfc-editor.org/rfc/rfc1812';
const g729='https://www.itu.int/rec/t-rec-g.729';
const plc='https://www.itu.int/rec/T-REC-G.711-199909-I%21AppI/en';
const academy='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';

const records=[
 [5361,['115'],['II-8'],['IPv4','direccionamiento por clases','clase C','CIDR'],[
  ref(rfc791,'RFC 791 describe el formato histórico class C: 21 bits de número de red y 8 bits locales (prefijo por defecto /24).'),
  ref(rfc4632,'RFC 4632, BCP 122: CIDR reemplaza la asignación y el encaminamiento classful; denomina /24 «legacy Class C» y considera obsoleta la planificación original por clases.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 115: arquitectura IP, encaminamiento y convivencia de IPv4/IPv6.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema II.8: TCP/IP, OSI, direccionamiento y encaminamiento.'),
  ref(academy,'ITIC Academy, bloque Protocolos 2026: IPv4, IPv6, redes IP, direccionamiento y encaminamiento; cotejo curricular directo.'),
 ],null,'La respuesta A es correcta solo en la perspectiva histórica: en el direccionamiento classful, clase C asignaba 24 bits de red y 8 de host (red por defecto /24), adecuada para redes pequeñas. El enunciado queda fechado como histórico, porque el enrutamiento moderno usa CIDR y no asigna direcciones por clase.', 'historica'],
 [5362,['115'],['II-8'],['IPv6','unicast','multicast','anycast','jumbogramas'],[
  ref(rfc8200,'RFC 8200 especifica la cabecera base IPv6 fija de 40 octetos y los encabezados de extensión; el diseño separa y simplifica funciones respecto de IPv4.'),
  ref(rfc4291,'RFC 4291 define los tipos unicast, anycast y multicast, y dice expresamente que IPv6 no tiene direcciones broadcast: su función se cubre con multicast.'),
  ref(rfc2675,'RFC 2675 define la opción Jumbo Payload para cargas IPv6 mayores de 65.535 octetos (jumbograms).'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 115: transición IPv4/IPv6 y funcionalidades específicas de IPv6.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema II.8: TCP/IP, direccionamiento y encaminamiento.'),
  ref(academy,'ITIC Academy, bloque Protocolos 2026, IPv4/IPv6 y funcionalidades específicas de IPv6; cotejo curricular directo.'),
 ],null,'La respuesta C es la incorrecta: IPv6 dispone de unicast, multicast y anycast, pero no de broadcast. La multidifusión sustituye las funciones que en IPv4 se resolvían con broadcast. Las cabeceras de extensión y los jumbogramas sí están normalizados.', 'corregida'],
 [5363,['115'],['II-8'],['IPv4','CIDR','subred /26','dirección de host'],[
  ref(rfc4632,'RFC 4632 describe la notación CIDR por longitud de prefijo y da el tamaño de bloque para /26: 64 direcciones.'),
  ref(rfc1812,'RFC 1812, requisitos para routers IPv4, distingue las direcciones de red/subred y de broadcast dirigidas frente a direcciones de host en el reenvío.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 115: arquitectura de redes IP y encaminamiento.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema II.8: direccionamiento y encaminamiento TCP/IP.'),
  ref(academy,'ITIC Academy, bloque Protocolos 2026, direccionamiento IPv4/CIDR y encaminamiento; cotejo curricular directo.'),
 ],null,'La respuesta C (132.26.41.124) es asignable a un host. La dirección 132.26.41.90 pertenece a la subred /26 con máscara 255.255.255.192, cuyo rango es .64–.127; .64 es la dirección de subred y .127 el broadcast, por lo que las direcciones de host son .65–.126. .128 inicia la subred siguiente y .55 queda fuera.', 'vigente'],
 [5364,['116'],['IV-14'],['VoIP','G.729','CS-ACELP','códec de voz'],[
  ref(g729,'ITU-T G.729, en vigor: codificación de voz a 8 kbit/s mediante CS-ACELP; la recomendación forma parte de los códecs de voz utilizados en sistemas de telefonía IP.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 116: NGN/IMS, VoIP, ToIP y comunicaciones unificadas.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema IV.14: redes convergentes y VoIP.'),
  ref(academy,'ITIC Academy, bloque Protocolos 2026, NGN/IMS, VoIP y comunicaciones convergentes; cotejo curricular directo.'),
 ],null,'La respuesta C (G.729) es correcta: la recomendación ITU-T especifica un codificador de voz CS-ACELP de 8 kbit/s. Es un códec, no el único empleado en VoIP; G.705, G.708 y G.768 no son alternativas equivalentes de codificación de voz.', 'vigente'],
 [5365,['116'],['IV-14'],['Packet Loss Concealment','PLC','VoIP','pérdida de paquetes'],[
  ref(plc,'ITU-T G.711 Appendix I, en vigor, se titula «A high quality low-complexity algorithm for packet loss concealment with G.711»; describe PLC en una señal de audio codificada/paquetizada, transmitida por red y reconstruida en el receptor.'),
  ref(boeA1,'Convocatoria A1 GSI 2025, tema 116: VoIP y servicios convergentes.'),
  ref(boeA2,'Convocatoria A2 GSI 2025, tema IV.14: VoIP, redes convergentes y comunicaciones unificadas.'),
  ref(academy,'ITIC Academy, bloque Protocolos 2026, VoIP y calidad de servicio sobre IP; cotejo curricular directo.'),
 ],null,'La respuesta B es correcta: en telefonía IP, Packet Loss Concealment (PLC) intenta disimular la pérdida de paquetes de voz en la reproducción del receptor. No retransmite paquetes ni es una política de descarte de Frame Relay o un mecanismo de TCP.', 'corregida'],
];
const edits={
  5361:{texto:'En el direccionamiento IPv4 histórico por clases, ¿para qué tamaño de red era más adecuada una dirección de clase C?',opciones:['Para una red pequeña, con 24 bits de red y 8 bits de host (prefijo por defecto /24).','Para grandes organizaciones que requieren un número muy alto de subredes con una única clase C.','Para direccionamiento multicast.','Para usos experimentales y futuros.'],respuesta_correcta:0,comentarios:'Históricamente, la respuesta A es correcta: clase C daba 8 bits de host y un bloque por defecto /24. El direccionamiento por clases dejó de ser el mecanismo de asignación y encaminamiento de Internet al desplegarse CIDR; la mención se conserva únicamente como contenido histórico.'},
  5362:{texto:'Respecto de IPv6, señale la afirmación INCORRECTA:',opciones:['La cabecera base tiene longitud fija de 40 octetos y elimina varios campos de IPv4, dejando funciones opcionales a encabezados de extensión.','IPv6 admite encabezados de extensión para añadir información opcional al paquete.','IPv6 define direcciones unicast, multicast, anycast y también direcciones broadcast.','IPv6 permite jumbogramas mediante la opción Jumbo Payload.'],respuesta_correcta:2,comentarios:'La respuesta C es incorrecta: IPv6 no define broadcast; sus funciones se realizan mediante multicast. La cabecera base de IPv6 mide 40 octetos y los jumbogramas están definidos para cargas mayores de 65.535 octetos.'},
  5363:{texto:'La dirección 132.26.41.90 pertenece a la subred 132.26.41.90/26. ¿Cuál de estas direcciones puede asignarse a otro host de esa misma subred?',comentarios:'La respuesta C (132.26.41.124) es válida. Un /26 divide el último octeto en bloques de 64: la subred es .64–.127, la dirección de red es .64 y el broadcast .127; el rango asignable es .65–.126.'},
  5365:{texto:'En telefonía IP con audio paquetizado, ¿qué describe el algoritmo PLC (Packet Loss Concealment)?',comentarios:'La respuesta B es correcta: PLC es una técnica de procesamiento de voz que intenta ocultar perceptualmente los paquetes de audio perdidos. No implica retransmisión de tramas ni descarte por congestión.'}
};
aplicar({numero:'1008',fecha:'2026-11-12',records,edits});
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-1008.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyText='ITIC Academy, bloque Protocolos 2026: IPv4/IPv6, TCP/IP, direccionamiento, encaminamiento, NGN/IMS, VoIP y calidad del servicio; cotejo curricular directo.';
for(const entry of log.cambios){const q=bank.preguntas.find(x=>x.id===entry.id);q.clasificacion.bloque_academia=academyText;q.clasificacion.nota=`Cotejo curricular realizado: ${academyText}`;entry.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
