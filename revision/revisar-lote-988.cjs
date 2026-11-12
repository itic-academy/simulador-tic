const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const pan = 'https://www.bluetooth.com/specifications/specs/personal-area-networking-profile-1-0/';
const openstack = 'https://docs.openstack.org/neutron/latest/install/overview.html';
const neutron = 'https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html';
const license = 'https://governance.openstack.org/tc/reference/licensing.html';
const ibm = 'https://www.ibm.com/think/topics/san-vs-nas';
const soap11 = 'https://www.w3.org/TR/soap11/';
const soap12 = 'https://www.w3.org/TR/soap12-part0/';
const com = 'https://learn.microsoft.com/en-us/windows/win32/com/security-in-com';
const sam = 'https://learn.microsoft.com/en-us/windows/win32/secmgmt/built-in-and-account-domains';
const dacl = 'https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces';
const uac = 'https://learn.microsoft.com/en-us/windows-server/security/user-account-control/user-account-control-overview';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const b46 = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const b25 = 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk';
const b26 = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const b28 = 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const b27 = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const b48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';

const records = [
  [5261, ['114'], ['IV-11'], ['Bluetooth', 'PAN', 'Personal Area Network', 'red de área personal'], [
    ref(pan, 'Bluetooth SIG, Personal Area Networking Profile 1.0: define cómo dos o más dispositivos Bluetooth forman una red ad hoc PAN y cómo se accede a una red remota mediante un punto de acceso.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 114: redes inalámbricas y Bluetooth.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.11: redes inalámbricas, protocolos, características y modos de operación.'),
    ref(b46, 'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026: perfiles y conexiones Bluetooth.')
  ], null, 'Una conexión Bluetooth entre dispositivos personales pertenece al ámbito PAN (Personal Area Network). El perfil PAN de Bluetooth contempla redes ad hoc entre dispositivos; LAN, MAN y NAS no describen esa clase de red.', 'vigente'],
  [5262, ['55'], ['II-1'], ['OpenStack', 'Neutron', 'IaaS', 'SaaS', 'Apache License 2.0'], [
    ref(openstack, 'Documentación oficial de OpenStack/Neutron: OpenStack es una plataforma de cloud de código abierto que proporciona una solución IaaS mediante servicios complementarios.'),
    ref(neutron, 'Documentación de OpenStack Networking: Neutron ofrece la API para definir conectividad y direccionamiento; administra redes, subredes, puertos y servicios de red virtual.'),
    ref(license, 'Comité Técnico de OpenStack, requisitos de licenciamiento: los proyectos oficiales deben seguir Apache License 2.0 (o condiciones permitidas de compatibilidad/sublicencia).'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 55: cloud computing, IaaS, PaaS, SaaS y nubes.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.1: computación en la nube, base tecnológica, componentes y capacidades.'),
    ref(b25, 'ITIC Academy, bloque 25 «Cloud Computing», actualización 2026: modelos IaaS, PaaS y SaaS.')
  ], null, 'La afirmación falsa es D. OpenStack es software para desplegar infraestructuras cloud y presta principalmente IaaS; sus servicios (incluido Neutron) exponen APIs para gestionar recursos y redes. No es, por sí mismo, una solución SaaS de aplicaciones finales. Se corrige la errata «Open5tack» a «OpenStack».', 'corregida'],
  [5263, ['56'], ['IV-5'], ['NAS', 'SAN', 'almacenamiento de ficheros', 'almacenamiento de bloques'], [
    ref(ibm, 'IBM, SAN vs. NAS: NAS ofrece acceso a nivel de fichero a través de la red de datos; SAN ofrece almacenamiento a nivel de bloque a los servidores y suele usar una fabric/red de almacenamiento. Los despliegues IP y soluciones unificadas hacen inexactas las formulaciones absolutas sobre infraestructura física.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 56: sistemas de almacenamiento de sistemas grandes y departamentales.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.5: arquitectura, tipos, componentes, protocolos y administración del almacenamiento.'),
    ref(b26, 'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», actualización 2026: DAS, NAS y SAN, acceso a fichero/bloque y redes de almacenamiento.')
  ], null, 'La opción B expresa la diferencia funcional típica: NAS sirve ficheros por la red de datos; SAN presenta almacenamiento de bloques a servidores mediante una red/fabric de almacenamiento, frecuentemente dedicada. Se elimina la afirmación absoluta de que toda SAN requiere crear una red física nueva: también hay SAN sobre IP y almacenamiento unificado.', 'corregida'],
  [5264, ['58'], ['III-12'], ['SOAP', 'Simple Object Access Protocol', 'SOAP 1.1', 'SOAP 1.2', 'servicios web'], [
    ref(soap11, 'W3C, especificación SOAP 1.1, título oficial «Simple Object Access Protocol» (W3C Note, 08-05-2000).'),
    ref(soap12, 'W3C, SOAP 1.2 Primer, apartado de cambios: SOAP 1.2 deja de desarrollar el nombre como acrónimo; la expansión de la opción B corresponde a la denominación histórica de SOAP 1.1.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, cliente-servidor y arquitectura SOA.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones y servicios web, estándares y protocolos asociados.'),
    ref(b28, 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», actualización 2026: servicios web y protocolos.')
  ], null, 'Para SOAP 1.1, la expansión histórica es Simple Object Access Protocol (opción B). La precisión importa: en SOAP 1.2 el W3C indica que el nombre dejó de tratarse como acrónimo y no se desarrolla de esa forma.', 'corregida'],
  [5265, ['48', '61'], ['II-2', 'II-13'], ['Windows', 'COM', 'SAM', 'DACL', 'UAC', 'seguridad'], [
    ref(com, 'Microsoft Learn, Security in COM: COM tiene su propio modelo de seguridad, con seguridad de activación y de llamadas; por eso el enunciado original, que decía que COM no estaba relacionado con seguridad, era demasiado amplio.'),
    ref(sam, 'Microsoft Learn, Built-in and Account Domains: SAM administra cuentas de los dominios Built-in y Account locales (en equipos que no son controladores de dominio).'),
    ref(dacl, 'Microsoft Learn, DACLs and ACEs: una DACL identifica los usuarios/grupos a quienes se permite o deniega acceso a objetos protegibles.'),
    ref(uac, 'Microsoft Learn, User Account Control Overview: UAC ayuda a mitigar el impacto de programas maliciosos y controla la elevación de privilegios.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 48 (ENS/seguridad) y 61 (sistemas operativos Microsoft).'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas II.2 (Windows y administración de sistemas operativos) y II.13 (seguridad física y lógica).'),
    ref(b27, 'ITIC Academy, bloque 27 «Sistemas operativos», actualización 2026: Windows, cuentas y controles de acceso.'),
    ref(b48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», actualización 2026: seguridad lógica y controles de acceso.')
  ], null, 'Se corrige la pregunta porque COM sí tiene mecanismos de seguridad en Windows (activación, autenticación, autorización y seguridad de llamadas). El nuevo enunciado pregunta qué sigla no identifica una base local de cuentas (SAM), una lista de control de acceso (DACL) o el mecanismo de elevación de privilegios (UAC); en ese marco acotado, la respuesta es COM.', 'corregida']
];

const edits = {
  5262: {
    texto: '¿Cuál de las siguientes afirmaciones es FALSA en relación con el proyecto OpenStack?',
    comentarios: 'La afirmación falsa es D. OpenStack es software para desplegar infraestructuras cloud y presta principalmente IaaS; sus servicios (incluido Neutron) exponen APIs para gestionar recursos y redes. No es, por sí mismo, una solución SaaS de aplicaciones finales. Se corrige la errata «Open5tack» a «OpenStack». '
  },
  5263: {
    texto: '¿Cuál de las siguientes opciones describe correctamente las arquitecturas NAS y SAN en sus usos habituales?',
    opcion: [1, 'En NAS los clientes acceden normalmente a ficheros a través de la red de datos; una SAN proporciona a los servidores acceso a nivel de bloque mediante una red o fabric de almacenamiento, que puede ser dedicada o implementarse sobre IP.'],
    comentarios: 'NAS sirve ficheros por la red de datos; SAN presenta almacenamiento de bloques a servidores mediante una red/fabric de almacenamiento, frecuentemente dedicada. También existen SAN sobre IP y almacenamiento unificado, por lo que no se afirma que siempre haga falta una red física nueva.'
  },
  5264: {
    texto: 'En la denominación de SOAP 1.1 publicada por el W3C, ¿qué significan las siglas SOAP?',
    comentarios: 'Para SOAP 1.1, la expansión histórica es Simple Object Access Protocol (opción B). En SOAP 1.2, el W3C indica que el nombre dejó de tratarse como acrónimo y no se desarrolla de esa forma.'
  },
  5265: {
    texto: '¿Cuál de estas siglas no designa una base de datos local de cuentas, una lista de control de acceso o un mecanismo de elevación de privilegios de Windows?',
    comentarios: 'COM no es una base de cuentas, una DACL ni un mecanismo de elevación; sin embargo, COM sí tiene seguridad de activación y de llamadas. SAM administra cuentas locales, DACL controla permisos de objetos y UAC interviene en la elevación de privilegios.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-988.json'))) {
  aplicar({ numero: '988', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-988.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5261: ['ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026: Bluetooth y perfiles de conectividad personal.', 'Cotejo A1-114/A2-IV.11; Bluetooth PAN es una red de área personal.'],
  5262: ['ITIC Academy, bloque 25 «Cloud Computing», actualización 2026: IaaS, PaaS, SaaS y servicios de infraestructura cloud.', 'Cotejo A1-55/A2-II.1; OpenStack despliega infraestructura IaaS, no una aplicación SaaS final.'],
  5263: ['ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», actualización 2026: NAS/SAN y almacenamiento de fichero o bloque.', 'Cotejo A1-56/A2-IV.5; se evita afirmar que toda SAN exige una red física dedicada.'],
  5264: ['ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», actualización 2026: servicios web y protocolos.', 'Cotejo A1-58/A2-III.12; la expansión corresponde a SOAP 1.1, no al nombre tal como se trata en SOAP 1.2.'],
  5265: ['ITIC Academy, bloques 27 «Sistemas operativos» y 48 «Seguridad en redes y en el nivel de aplicación», actualización 2026: Windows, cuentas, control de acceso y seguridad lógica.', 'Cotejo A1-48/A1-61/A2-II.2/A2-II.13; se hace explícito que COM también tiene seguridad, aunque no es SAM, DACL ni UAC.']
};
const reason = 'Cotejo curricular individual con ITIC Academy accesible en Drive y los programas oficiales A1/A2 de 2025.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 988 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
