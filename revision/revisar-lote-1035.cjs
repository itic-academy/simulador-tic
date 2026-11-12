const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive={
  databases:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
  mobile:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',
  agile:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',
  networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
  security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk'
};
const records=[
 [5496,[125],['IV-12'],['IPsec','VPN','ESP','AES','3DES','algoritmos de cifrado','IKE','Diffie-Hellman','PSK'],[
  {url:'https://www.rfc-editor.org/rfc/rfc8221.html',referencia:'RFC 8221, algoritmos ESP/AH: AES-CBC de 128 bits MUST implementarse; 3DES-CBC está marcado SHOULD NOT, así que solo se mantiene como algoritmo histórico y no como recomendación actual.'},
  {url:'https://www.rfc-editor.org/rfc/rfc9395.html',referencia:'RFC 9395 (2023): depreca IKEv1 y actualiza el estado de algoritmos antiguos relacionados; las recomendaciones actuales se orientan a IKEv2.'},
  {url:'https://www.rfc-editor.org/rfc/rfc4301.html',referencia:'RFC 4301, Security Architecture for the Internet Protocol: separa los protocolos/servicios IPsec, la negociación de asociaciones y los algoritmos de protección de datos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 125: seguridad en redes y técnicas criptográficas.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.12: seguridad en redes, protocolos seguros y técnicas criptográficas.'},
  {url:drive.security,referencia:'ITIC Academy 2026, bloque 48 Seguridad en redes y aplicaciones: VPN/IPsec y algoritmos; mapa temático.'}
 ],null,'La opción A empareja dos algoritmos de cifrado que han aparecido en ESP/IPsec: AES y 3DES. Se precisa que 3DES es legado y el IETF lo marca SHOULD NOT; por tanto, la respuesta es una identificación histórica, no una configuración recomendada para nuevas VPN. Diffie–Hellman es intercambio de claves, PSK es material de autenticación y IKE es el protocolo de negociación, no cifradores.', 'corregida'],
 [5497,[63],['III-4'],['modelo entidad-relación','Chen','entidades','relaciones','relación de relaciones','modelo E/R básico'],[
  {url:'https://doi.org/10.1145/320434.320440',referencia:'Peter P.-S. Chen, “The Entity-Relationship Model—Toward a Unified View of Data”, ACM TODS 1(1), 1976: define conjuntos de relaciones como asociaciones entre n entidades y distingue entidades, relaciones y atributos.'},
  {url:'https://dspace.mit.edu/entities/publication/3324116b-72fd-415b-877e-90c6e1bfd3b3',referencia:'MIT, ficha y copia del trabajo original de Chen sobre el modelo E/R: fuente de contexto histórico.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 63: modelos de datos y sistemas gestores de bases de datos.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.4: modelado de datos, diseño de bases de datos y modelo lógico.'},
  {url:drive.databases,referencia:'ITIC Academy 2026, bloque 29 Bases de Datos: modelos conceptuales y entidad-relación; mapa temático.'}
 ],null,'Se mantiene A, acotando la pregunta al modelo E/R básico de Chen: una relación enlaza entidades, y una asociación en la que una relación participe como tal no se representa directamente sin convertir esa relación en una entidad del modelo. No se afirma que el modelo prohíba relaciones reflexivas, n-arias o atributos de relaciones: Chen contempla las tres posibilidades.', 'corregida'],
 [5498,[124],['III-12'],['aplicaciones híbridas','Ionic','Onsen UI','PhoneGap','Swift','SwiftUI','aplicaciones móviles'],[
  {url:'https://developer.apple.com/swift/',referencia:'Apple Developer: Swift es un lenguaje de programación para las plataformas Apple; SwiftUI es un framework de interfaz distinto de Swift.'},
  {url:'https://onsen.io/v2/guide/',referencia:'Onsen UI, guía oficial: componentes de interfaz para aplicaciones móviles híbridas y web.'},
  {url:'https://ionicframework.com/docs',referencia:'Ionic Framework, documentación oficial: framework de UI para crear aplicaciones móviles multiplataforma.'},
  {url:'https://phonegap.com/about/faq',referencia:'PhoneGap FAQ: PhoneGap Build y servicios asociados dejaron de mantenerse; se considera una tecnología histórica, aunque el nombre siga apareciendo en bancos antiguos.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 124: tecnologías y desarrollo de aplicaciones móviles.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web, multiplataforma y multidispositivo.'},
  {url:drive.mobile,referencia:'ITIC Academy 2026, bloque 47 Aplicaciones Móviles: plataformas, tecnologías y desarrollo móvil.'}
 ],null,'Se conserva C y se distingue Swift, lenguaje de programación, de SwiftUI, framework de interfaces de Apple. Onsen UI e Ionic se usan para desarrollo híbrido; PhoneGap fue una plataforma histórica basada en Cordova, pero PhoneGap Build y sus servicios se retiraron, lo que se advierte para no recomendarlo como herramienta actual.', 'corregida'],
 [5499,[37],['III-2'],['Extreme Programming','XP','valores ágiles','comunicación','simplicidad','retroalimentación','coraje','respeto'],[
  {url:'https://agilealliance.org/glossary/xp/',referencia:'Agile Alliance, glosario XP: identifica los cinco valores como comunicación, simplicidad, feedback, coraje y respeto, con explicación de cada uno.'},
  {url:'https://extremeprogrammingalliance.com/about-extreme-programming-xp/extreme-programming-xp-values/',referencia:'Extreme Programming Alliance: lista y describe los valores de XP; el quinto, respeto, corresponde a la formulación de cinco valores difundida en la segunda edición de Extreme Programming Explained.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 37: metodologías ágiles de gestión de proyectos.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del desarrollo y metodologías.'},
  {url:drive.agile,referencia:'ITIC Academy 2026, bloque 15 Metodologías Ágiles y Ciclo de Vida: Extreme Programming y principios/valores ágiles.'}
 ],null,'La opción C es correcta: comunicación, simplicidad, retroalimentación, coraje y respeto son los cinco valores de XP en la formulación posterior de la metodología. Se conserva “respeto” para distinguirla de listados iniciales que recogían solo cuatro valores.', 'corregida'],
 [5500,[111,118],['II-8','IV-8'],['STP','Spanning Tree Protocol','BPDU','Bridge Protocol Data Unit','IEEE 802.1D'],[
  {url:'https://www.cisco.com/c/en/us/td/docs/routers/ios-xe/lan-wan/lan-wan/m_lsw-span-tree-prot.html',referencia:'Cisco, Spanning Tree Protocol: desarrolla el nombre Bridge Protocol Data Unit (BPDU) y describe cómo los switches intercambian BPDUs de configuración para calcular la topología sin bucles.'},
  {url:'https://ieee802.org/1/pages/802.1w.html',referencia:'IEEE 802.1w, Rapid Reconfiguration of Spanning Tree: suplemento del estándar de puentes MAC que define cambios al funcionamiento del puente para reconfiguración rápida; la denominación BPDU y el intercambio STP se documentan directamente en Cisco.'},
  {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 111 y 118: protocolos OSI, redes locales y dispositivos de interconexión.'},
  {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.8 y IV.8: protocolos OSI y redes locales.'},
  {url:drive.networks,referencia:'ITIC Academy 2026, bloque 42 Redes: puentes/switches, Ethernet y spanning tree.'}
 ],null,'Se conserva C con pluralización: las unidades de protocolo que los bridges/switches intercambian en STP son BPDUs (Bridge Protocol Data Units). BPDU es el nombre de una unidad individual, no la denominación plural de los mensajes intercambiados.', 'corregida']
];
const edits={
 5496:{texto:'En una configuración IPsec/ESP heredada, ¿qué opción empareja dos algoritmos que se han usado para cifrar el tráfico?',opciones:['3DES y AES.','AES y Diffie–Hellman.','3DES y PSK.','IKE y PSK.'],respuesta_correcta:0},
 5497:{texto:'En el modelo entidad-relación básico de Chen, ¿qué necesidad de modelado no se representa directamente sin convertir una relación en una entidad?',opciones:['Relacionar una relación con otra como participante de una nueva relación.','Relacionar más de dos entidades mediante una relación n-aria.','Representar una relación reflexiva de una entidad consigo misma.','Asignar atributos a una entidad o a una relación.'],respuesta_correcta:0},
 5498:{texto:'¿Cuál de las siguientes opciones es un lenguaje de programación y no un framework para desarrollar aplicaciones móviles híbridas?',opciones:['Onsen UI.','Ionic Framework.','Swift (el lenguaje, no SwiftUI).','PhoneGap (plataforma histórica basada en Cordova).'],respuesta_correcta:2},
 5499:{texto:'En la formulación de cinco valores de Extreme Programming (XP), ¿cuáles son esos valores?',opciones:['Comunicación, humildad, coraje, eficiencia y proactividad.','Coraje, resiliencia, multidisciplinaridad, interoperabilidad y trazabilidad.','Simplicidad, comunicación, retroalimentación, coraje y respeto.','Coraje, multipresencia, redistribución, interoperabilidad y estabilidad.'],respuesta_correcta:2},
 5500:{texto:'¿Cómo se denominan en plural las unidades de protocolo que intercambian los bridges/switches en STP?',opciones:['PDUs.','PDIs.','BPDUs.','SPDUs.'],respuesta_correcta:2}
};
const logFile=path.join(__dirname,'cambios-lote-1035.json');
if(!fs.existsSync(logFile))aplicar({numero:'1035',fecha:'2026-11-12',records,edits});
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankFile,'utf8'));
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const academy={
  5496:'ITIC Academy 2026, bloque 48 Seguridad en redes: IPsec/VPN y protección criptográfica del tráfico.',
  5497:'ITIC Academy 2026, bloque 29 Bases de Datos: modelo conceptual entidad-relación y restricciones de representación.',
  5498:'ITIC Academy 2026, bloque 47 Aplicaciones Móviles: tecnologías de desarrollo híbrido y nativo.',
  5499:'ITIC Academy 2026, bloque 15 Metodologías Ágiles y Ciclo de Vida: valores de Extreme Programming.',
  5500:'ITIC Academy 2026, bloque 42 Redes: bridges/switches y spanning tree.'
};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);q.clasificacion.bloque_academia=academy[c.id];q.clasificacion.nota='Cotejado con el programa oficial A1/A2 vigente y el material de academia 2026 indicado como mapa temático; las precisiones se apoyan en RFC, documentación técnica del fabricante o literatura original citada.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bankFile,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
