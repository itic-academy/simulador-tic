const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');

const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rfc4632='https://datatracker.ietf.org/doc/html/rfc4632';
const rules='https://www.aiai.ed.ac.uk/publications/documents/1990-PRE/87-baa-rule-based-es.pdf';
const boeOrder='https://www.boe.es/buscar/act.php?id=BOE-A-2008-6804';
const ituHandbook='https://www.itu.int/dms_pub/itu-t/opb/hdb/t-hdb-out.10-2009-1-pdf-e.pdf';
const ituDwdm='https://www.itu.int/rec/T-REC-G.694.1-202010-I';
const ituCwdm='https://www.itu.int/rec/T-REC-G.694.2-200312-I/en';
const ecma404='https://ecma-international.org/publications-and-standards/standards/ecma-404/';
const academyNetworks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academyAi='https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const academyContracts='https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk';
const academyJson='https://drive.google.com/file/d/1zk8UbyZCGo2GZrgnrA4aiwQxa8zi6S7U/view?usp=drivesdk';

const sources={
  4901:[
    {url:rfc4632,referencia:'IETF RFC 4632, CIDR: define el uso de prefijos para identificar bloques IPv4. La máscara 255.255.240.0 equivale a /20; aplicando AND a 192.228.17.15 se obtiene la dirección de red 192.228.16.0.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP, direccionamiento IPv4/IPv6.'},
    {url:a2,referencia:'Convocatoria A2 GSI AGE 2025, tema II.8: TCP/IP, direccionamiento y encaminamiento.'}
  ],
  4902:[
    {url:rules,referencia:'AIAI, University of Edinburgh, «Rule-Based Expert Systems»: explica ventajas de rendimiento por la dirección fijada de inferencia y la limitación correspondiente de reutilizar reglas en razonamientos con objetivos/direcciones diferentes; respalda el doble efecto preguntado.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 70: inteligencia artificial y sistemas expertos.'},
    {url:a2,referencia:'Convocatoria A2 GSI AGE 2025, tema III.5: fundamentos de inteligencia artificial y tecnologías asociadas.'}
  ],
  4903:[
    {url:boeOrder,referencia:'BOE, Orden EHA/1049/2008, de 10 de abril, título oficial: «de declaración de bienes y servicios de contratación centralizada». La respuesta se refiere a identificar la orden por su denominación y fecha, no a resumir todas las modificaciones posteriores.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 11: contratación pública y Ley de Contratos del Sector Público.'}
  ],
  4904:[
    {url:ituHandbook,referencia:'ITU-T, Handbook on optical fibres, cables and systems: indica que sistemas CWDM o DWDM sin amplificadores de línea se emplean para cubrir distancias de hasta aproximadamente 80 km en redes metro/acceso; por tanto, 80 km por sí solos no determinan DWDM.'},
    {url:ituDwdm,referencia:'ITU-T G.694.1, rejilla espectral DWDM: especifica una rejilla de canales densa, pero no selecciona DWDM por la sola distancia del enlace.'},
    {url:ituCwdm,referencia:'ITU-T G.694.2, rejilla espectral CWDM: especifica separación de canales CWDM; la elección requiere capacidad, presupuesto óptico, interfaces y requisitos de servicio.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 113: redes de transporte y JDSxWDM.'},
    {url:a2,referencia:'Convocatoria A2 GSI AGE 2025, tema IV.10: tecnologías WDM en redes de área extensa.'}
  ],
  4905:[
    {url:ecma404,referencia:'Ecma International, ECMA-404, The JSON Data Interchange Syntax: especificación normativa de la sintaxis de textos JSON, segunda edición, diciembre de 2017, también ISO/IEC 21778.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 77: lenguajes y herramientas web, incluidos HTML, CSS y XML; JSON es un formato relacionado de intercambio, aunque el tema no lo menciona nominalmente.'},
    {url:a2,referencia:'Convocatoria A2 GSI AGE 2025, tema III.12: aplicaciones y servicios web, estándares e interoperabilidad; correspondencia contextual, sin afirmar que el programa cite expresamente JSON.'}
  ]
};

const academy={
  4901:[academyNetworks,'ITIC Academy 2026, bloque 42 de redes, apartado de direccionamiento IP: cotejo curricular del cálculo de prefijos IPv4 y redes; la operación se comprueba con CIDR/IETF.'],
  4902:[academyAi,'ITIC Academy 2026, bloque 32 de IA y ciencia de datos, sección 6 «IA simbólica y sistemas expertos»: incluye sistemas expertos y motores de inferencia; la ventaja y limitación de fijar dirección se contrasta con la referencia académica citada.'],
  4903:[academyContracts,'ITIC Academy 2026, bloque 5 de contratación, presupuestos y compra TIC: cotejo de contratación pública; la identificación del instrumento se verifica directamente en el BOE.'],
  4904:[academyNetworks,'ITIC Academy 2026, bloque 42 de redes, tema 113 y sección WDM: cotejo de CWDM/DWDM y redes de transporte; sus apuntes no permiten concluir que solo DWDM sea válido a 80 km.'],
  4905:[academyJson,'ITIC Academy, temas 65/66/67/72/77/106: el material incluye JSON como apartado 4.1.1 y el tema 77 de lenguajes de marca/XML; cotejo de cobertura, no autoridad normativa sobre la especificación ECMA.']
};

const records=[
 [4901,['115'],['II-8'],['IPv4','máscara de red','CIDR','prefijo /20'],sources[4901],null,
  'Respuesta C. La máscara 255.255.240.0 es /20: los 4 bits altos del tercer octeto pertenecen a la red, por lo que el tamaño del bloque en ese octeto es 16. El valor 17 cae en el intervalo 16–31 y su dirección de red es 192.228.16.0. Se añade el prefijo para que el cálculo pueda reproducirse.', 'corregida'],
 [4902,['70'],['III-5'],['inteligencia artificial','sistemas expertos','reglas','dirección de inferencia','encadenamiento'],sources[4902],null,
  'Respuesta A, con precisión. La dirección de inferencia fijada en las reglas puede reducir la búsqueda y mejorar la eficiencia para el razonamiento previsto; esa misma orientación limita reutilizar el conocimiento cuando se necesita inferir en sentido inverso o con otros objetivos. La ventaja y la limitación son dos efectos de la misma decisión de representación.', 'corregida'],
 [4903,['11'],[],['contratación pública','contratación centralizada','Orden EHA/1049/2008'],sources[4903],null,
  'Respuesta C. El instrumento es la Orden EHA/1049/2008, de 10 de abril, cuyo título es la declaración de bienes y servicios de contratación centralizada. La grafía MINHA/1048 no corresponde a la denominación publicada. Se cita la orden y fecha históricas exactas y no se extrapola el reactivo a las reglas actuales de centralización.', 'corregida'],
 [4904,['113'],['IV-10'],['WDM','CWDM','DWDM','SAN','clúster geográfico','pendiente de ambigüedad'],sources[4904],null,
  'Pendiente de ambigüedad; no se valida la clave heredada DWDM. La distancia de 80 km no basta para seleccionar DWDM: la guía ITU-T indica que tanto CWDM como DWDM sin amplificadores pueden cubrir aproximadamente ese alcance. Harían falta capacidad/canales requeridos, presupuesto óptico, fibra y transceptores, latencia y solución SAN. Se conservan el enunciado, opciones y clave originales sin certificar una respuesta única; reformular con los requisitos ausentes o aceptar ambas si se pregunta solo por alcance.', 'pendiente_ambiguedad'],
 [4905,['65','77'],['III-12'],['JSON','ECMA-404','ISO/IEC 21778','intercambio de datos'],sources[4905],null,
  'Respuesta A. ECMA-404 es la especificación de la sintaxis de intercambio JSON (también ISO/IEC 21778). ECMA-262 especifica ECMAScript y define, entre otras cosas, su interacción/mapeo con JSON; para evitar esa posible confusión, se pregunta expresamente por la especificación de la sintaxis de textos JSON. La edición publicada por Ecma es la segunda, de diciembre de 2017.', 'corregida']
];

const edits={
  4901:{texto:'¿A qué dirección de red pertenece 192.228.17.15 si se aplica la máscara 255.255.240.0 (/20)?',opciones:['192.228.0.0','192.228.8.0','192.228.16.0','192.228.17.0'],respuesta_correcta:2},
  4902:{texto:'En una representación del conocimiento mediante reglas de producción, ¿qué característica puede ser a la vez una ventaja y una limitación?',opciones:['La dirección de inferencia está fijada: puede hacer más eficiente el razonamiento previsto, pero limita reutilizar las reglas para inferir en otra dirección.','La representación mediante reglas carece de una dirección de inferencia y por eso no puede ejecutar encadenamientos.','La modularidad exige que todas las reglas estén ordenadas y referencien directamente a las demás.','Añadir una regla siempre altera necesariamente todas las reglas existentes.'],respuesta_correcta:0},
  4903:{texto:'¿Qué orden, de 10 de abril de 2008, se titula «de declaración de bienes y servicios de contratación centralizada»?',opciones:['Orden MINHA/1048/2008.','Orden EHA/1048/2008.','Orden EHA/1049/2008.','Orden MINHA/1049/2008.'],respuesta_correcta:2},
  4905:{texto:'¿Qué estándar de Ecma especifica la sintaxis de intercambio de textos JSON?',opciones:['ECMA-404.','ECMA-334.','ECMA-262.','ECMA-402.'],respuesta_correcta:0}
};

aplicar({numero:'916',fecha:'2026-11-11',records,edits});

const root=path.join(__dirname,'..');
const bankPath=path.join(root,'preguntas_preparatic.json');
const logPath=path.join(__dirname,'cambios-lote-916.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);
 const [url,detail]=academy[c.id];
 q.clasificacion.bloque_academia=`${detail} El material académico se usa para cotejo curricular, no sustituye la fuente normativa o técnica primaria.`;
 q.clasificacion.nota=`${q.revision.estado}. Cotejo ITIC Academy: ${detail} Fuentes y alcance documentados en el registro de cambios.`;
 q.revision.observaciones+=` ${detail}`;
 q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url,referencia:`ITIC Academy: ${detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy añadido al lote 916.');
