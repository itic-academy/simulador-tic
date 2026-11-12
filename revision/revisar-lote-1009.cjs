const fs=require('node:fs');
const aplicar=require('./aplicar-lote.cjs');
const records=[
 [5366,[116],['IV-14'],['NGN','ITU-T Y.2001','redes de nueva generación'],[
  {url:'https://www.itu.int/rec/T-REC-Y.2001',referencia:'ITU-T Recommendation Y.2001, General overview of NGN (in force): defines NGN as a packet-based network, with service functions independent of transport, QoS-supported broadband transport, open access and generalized mobility.'},
  {url:'https://www.itu.int/en/ITU-T/gsi/ngn/Pages/definition.aspx',referencia:'ITU-T overview reproduces the defining NGN characteristics and confirms the terminology in the question.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria A1 GSI 2025, tema 116: NGN/IMS, VoIP/ToIP and convergent services.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria A2 GSI 2025, tema IV.14: NGN/IMS and convergent services.'},
  {url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',referencia:'ITIC Academy, block Protocols 2026: NGN/IMS, VoIP, QoS and convergent services; directly checked for curricular mapping.'}
 ],null,'ITU-T Y.2001 remains in force; the wording is substantially the recommendation’s NGN definition. Answer D. Minor punctuation and terminology normalization do not alter the proposition. Academy coverage confirmed in Protocols 2026.','vigente'],
 [5367,[125],['IV-12'],['TCP Wrappers','control de acceso','histórica','Unix'],[
  {url:'https://manpages.ubuntu.com/manpages/jammy/man5/hosts.allow.5.html',referencia:'hosts_access(5), Ubuntu Jammy manpage: host access control for network daemons uses client/server patterns and hosts.allow/hosts.deny.'},
  {url:'https://manpages.ubuntu.com/manpages/noble/man3/hosts_access.3.html',referencia:'hosts_access(3), Ubuntu Noble manpage: libwrap implements rules-based access controls for network services.'},
  {url:'https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/8/html/8.0_release_notes/RHEL_8_0_release',referencia:'Red Hat Enterprise Linux 8 release notes: tcp_wrappers was removed; use firewall rules or application-level configuration instead. This marks the technology as legacy, not its historical purpose.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria A1 GSI 2025, tema 125: network security, firewalls and access control.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria A2 GSI 2025, tema IV.12: network security and access control.'},
  {url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',referencia:'ITIC Academy, block 48 Security in Networks & Application, 2026: network access controls, firewalls and security mechanisms; curriculum mapping checked.'}
 ],null,'Reactivo histórico: TCP Wrappers/libwrap controls which clients may connect to supported network daemons, traditionally through hosts.allow and hosts.deny. It is not a low-layer firewall substitute; the technology is absent from RHEL 8 and should not be presented as a current deployment recommendation. Original answer A describes its historical purpose.','historica'],
 [5368,[123],['IV-15'],['GSM','EIR','IMEI','comunicaciones móviles'],[
  {url:'https://www.etsi.org/deliver/etsi_ts/123000_123099/123002/11.04.00_60/ts_123002v110400p.pdf',referencia:'ETSI TS 123 002 / 3GPP TS 23.002, §4.1.1.3, EIR: equipment identities (IMEIs) may be classified into white, grey and black lists; the EIR supports identifying equipment barred from service. Primary 3GPP/ETSI specification.'},
  {url:'https://www.etsi.org/deliver/etsi_ts/123000_123099/123016/18.00.00_60/ts_123016v180000p.pdf',referencia:'ETSI TS 123 016 / 3GPP TS 23.016, current Release 18 specification on international mobile equipment identities and EIR-related procedures; corroborates the equipment-identity function.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria A1 GSI 2025, tema 123: mobile communications and generations of mobile telephony.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria A2 GSI 2025, tema IV.15: mobile communication systems and generations.'},
  {url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',referencia:'ITIC Academy, block 46 Wireless/Mobile 2026: GSM and mobile network architecture; checked for curricular coverage.'}
 ],null,'The original answer C captures the blacklist purpose but overstates the EIR as a database only of forbidden mobiles. Reframe the question around its role: it records equipment identities (IMEI) and supports checking whether equipment is barred. Keep C as the intended answer, explicitly limited to the blacklist.','corregida'],
 [5369,[125],['II-13','IV-12'],['DAC','control de acceso','seguridad lógica'],[
  {url:'https://csrc.nist.gov/glossary/term/discretionary_access_control',referencia:'NIST CSRC Glossary, Discretionary Access Control: the owner of an object, or an authorized subject, may decide who is permitted access.'},
  {url:'https://csrc.nist.gov/glossary/term/mandatory_access_control',referencia:'NIST CSRC Glossary, Mandatory Access Control: access is constrained by a central authority and security labels, distinguishing MAC from owner-discretionary control.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria A1 GSI 2025, tema 125: network security and access control.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria A2 GSI 2025, temas II.13 (logical security) and IV.12 (network access control).'},
  {url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',referencia:'ITIC Academy, block 48 Security in Networks & Application, 2026: logical and network access controls; curriculum mapping checked.'}
 ],null,'The phrase «dirigido al usuario» did not uniquely distinguish identity-based access from DAC. Rewrite the criterion as control in which an object owner grants or revokes permissions: DAC (D). Identity-based mechanisms use subject identity but are not a synonym for the DAC policy model.','corregida'],
 [5370,[47,125],['II-13'],['smishing','phishing','ingeniería social','SMS'],[
  {url:'https://www.cisa.gov/sites/default/files/publications/Phishing%2520General%2520Security%2520Postcard_6.24.2021_508cV2.pdf',referencia:'CISA phishing awareness material defines smishing as phishing via text messages.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria A1 GSI 2025, temas 47 (security risks) and 125 (network security and attacks).'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria A2 GSI 2025, tema II.13: information-system security and cybersecurity.'},
  {url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',referencia:'ITIC Academy, block 48 Security in Networks & Application, 2026: phishing and social engineering; curriculum mapping checked.'}
 ],null,'Answer B. Smishing is phishing delivered through SMS/text messages; it may use links or requests to induce disclosure or action. It is distinct from voice phishing (vishing) and ordinary email phishing.','vigente']
];
const edits={
 5366:{texto:'Según la definición de NGN de la Recomendación UIT-T Y.2001, ¿qué red basada en paquetes permite utilizar múltiples tecnologías de transporte de banda ancha con QoS, mantiene independientes las funciones de servicio y transporte, facilita el acceso abierto a redes y servicios y admite movilidad generalizada?',opcion:[3,'NGN (red de próxima generación).']},
 5367:{texto:'Históricamente, ¿qué control proporcionaba TCP Wrappers (libwrap) en sistemas Unix que lo soportaban?',opciones:['Restringía el acceso de clientes a determinados demonios de red mediante reglas de hosts.allow y hosts.deny.','Filtraba paquetes en una capa inferior y hacía innecesario un cortafuegos.','Exigía un entorno gráfico para configurar cada servicio.','Interceptaba remotamente paquetes TCP y se configuraba mediante Java.']},
 5368:{texto:'En la arquitectura GSM, ¿qué función cumple principalmente el Equipment Identity Register (EIR)?',opciones:['Registra qué móviles están bajo cobertura en cada momento.','Mantiene identidades de abonado autorizadas para usar la red.','Registra identidades de equipo (IMEI) y permite consultar listas, incluida la lista negra de equipos a los que se deniega el servicio.','Almacena la facturación de cada móvil.']},
 5369:{texto:'¿Qué modelo de control de acceso permite al propietario de un recurso decidir qué sujetos pueden acceder y con qué permisos?',opciones:['Control no discrecional administrado centralmente.','Control de acceso obligatorio (MAC), basado en política y etiquetas de seguridad.','Control basado exclusivamente en la identidad del sujeto; no especifica quién puede conceder permisos.','Control de acceso discrecional (DAC).']},
 5370:{texto:'¿Qué nombre recibe el phishing realizado mediante mensajes de texto SMS enviados a un teléfono móvil?',opcion:[1,'Smishing (SMS phishing).']}
};
const logFile=require('node:path').join(__dirname,'cambios-lote-1009.json');
if(!fs.existsSync(logFile)) aplicar({numero:'1009',fecha:'2026-11-12',records,edits});
const file=require('node:path').join(__dirname,'..','preguntas_preparatic.json');
const data=JSON.parse(fs.readFileSync(file,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
 5366:'ITIC Academy, bloque Protocolos 2026: redes NGN/IMS, VoIP y QoS; cotejo curricular directo.',
 5367:'ITIC Academy, bloque 48 Seguridad de redes y aplicación, 2026: controles de acceso a servicios y cortafuegos; cotejo curricular directo. Se mantiene como conocimiento histórico.',
 5368:'ITIC Academy, bloque 46 Comunicaciones inalámbricas y móviles, 2026: arquitectura GSM y redes móviles; cotejo curricular directo.',
 5369:'ITIC Academy, bloque 48 Seguridad de redes y aplicación, 2026: control lógico de acceso; cotejo curricular directo.',
 5370:'ITIC Academy, bloque 48 Seguridad de redes y aplicación, 2026: phishing e ingeniería social; cotejo curricular directo.'
};
for(const c of log.cambios){
 const q=data.preguntas.find(q=>q.id===c.id);q.revision.estado=records.find(r=>r[0]===c.id)[7];
 q.revision.observaciones=records.find(r=>r[0]===c.id)[6];q.comentarios=records.find(r=>r[0]===c.id)[6];
 q.clasificacion.bloque_academia=academy[c.id];
 q.clasificacion.nota='Cotejo curricular directo en el material académico de ITIC Academy indicado en revision/README.md; las conclusiones técnicas se apoyan en las fuentes primarias de la ficha.';
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
