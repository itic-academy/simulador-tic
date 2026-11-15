const aplicar=require('./aplicar-lote.cjs');
const une='https://www.une.org/normalizacion_documentos/Apoyo%20a%20la%20sanidad.pdf';
const ministerio='https://industria.gob.es/es-es/servicios/calidad/paginas/legislacion-basica.aspx?faq=normalizaci%C3%B3n';
const rd='https://www.boe.es/buscar/doc.php?id=BOE-A-2015-13530';
const cenelec='https://boss.cen.eu/media/BOSS%20CENELEC/ref/ir1_e.pdf';
const en='https://boss.cen.eu/media/BOSS%20CEN/ref/ir2_e.pdf';
const mtom='https://www.w3.org/TR/soap12-mtom/';
const xop='https://www.w3.org/TR/xop10/';
const role='https://learn.microsoft.com/en-us/windows/win32/wmisdk/server-feature-provider';
const guid='https://learn.microsoft.com/en-us/windows/win32/ad/object-names-and-identities';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const edits={
  6876:{texto:'Respecto de los organismos de normalización electrotécnica, señale la afirmación incorrecta:',opciones:['La IEC es un organismo internacional de normalización en electrotecnia.','AENOR sigue siendo el organismo nacional de normalización que representa a España ante la IEC y CENELEC.','CENELEC es el organismo europeo de normalización electrotécnica.','Los documentos europeos de normalización electrotécnica aprobados por CENELEC se publican como normas europeas (EN).'],respuesta_correcta:1},
  6878:{texto:'¿Qué especificación del W3C define el mecanismo de optimización de la transmisión de mensajes SOAP?',opciones:['XML-binary Optimized Packaging (XOP), que es el nombre del mecanismo SOAP.','XML-binary Optimized Packaging (XOP), que es un formato de empaquetado utilizado por MTOM.','SOAP Message Transmission Optimization Mechanism (MTOM).','Representational State Transfer (REST), que es el mecanismo de optimización de SOAP.'],respuesta_correcta:2},
  6879:{texto:'Según la definición del proveedor de funciones de servidor de Microsoft, ¿qué es un rol de servidor?',opciones:['Una función asignada a una persona administradora.','Un grupo de componentes que proporciona funciones para un área funcional específica del servidor.','Una característica opcional que siempre es independiente de los roles.','Un conjunto de políticas de usuario que no instala componentes en el servidor.'],respuesta_correcta:1},
  6880:{texto:'En Active Directory Domain Services, ¿de qué tamaño es el GUID almacenado en el atributo objectGUID de un objeto?',opciones:['32 bits.','64 bits.','128 bits.','256 bits.'],respuesta_correcta:2}
};
const records=[
[6876,[50],[],['IEC','UNE','AENOR','CENELEC','organismos de normalización','normas europeas EN'],[
{url:une,referencia:'UNE, informe institucional: identifica a UNE como organismo español de normalización y miembro de IEC, CEN y CENELEC.'},
{url:ministerio,referencia:'Ministerio de Industria y Turismo, legislación básica de normalización: el organismo español de normalización es UNE y es miembro español de IEC y CENELEC.'},
{url:rd,referencia:'Real Decreto 1072/2015, modificación de la infraestructura legal de normalización; identifica la Asociación Española de Normalización (UNE) como entidad designada para esta función.'},
{url:cenelec,referencia:'Reglamento interno CEN-CENELEC, parte 1: define la función europea de CENELEC en electrotecnia y la adopción de normas europeas EN.'},
{url:en,referencia:'Reglamento interno CEN-CENELEC, parte 2: una European Standard (EN) es un documento normativo puesto a disposición por CEN y/o CENELEC.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 50: organizaciones internacionales y nacionales de normalización.'}
],edits[6876],'Se actualiza la antigua referencia a AENOR: desde la separación institucional efectiva en 2017, UNE es el organismo nacional de normalización español y miembro de IEC/CENELEC; AENOR ya no ejerce esa representación como organismo de normalización. La pregunta distingue la norma europea EN de las siglas de las organizaciones.', 'corregida'],
[6877,[57],['II-1'],['miniordenadores','sistemas medios y pequeños','criterios de adquisición','ambigüedad'],null,{},'Se conserva la pregunta y su clave originales, pero queda pendiente por ambigüedad. «Equipo mini» no identifica un tipo, contexto de uso, carga de trabajo ni requisitos de adquisición; modularidad, RAID, RISC e interconexión pueden ser deseables según el equipo y el escenario, y las fuentes consultadas no establecen una característica universalmente esencial. La documentación curricular cubre sistemas grandes, medios y pequeños, pero no resuelve cuál sería la característica singular exigida por esta pregunta.', 'pendiente_ambiguedad'],
[6878,[65,77],['III-12'],['SOAP','W3C','MTOM','XOP','XML-binary Optimized Packaging','servicios web'],[
{url:mtom,referencia:'W3C Recommendation SOAP Message Transmission Optimization Mechanism: especifica el mecanismo abstracto y su serialización optimizada de mensajes SOAP.'},
{url:xop,referencia:'W3C Recommendation XML-binary Optimized Packaging: define el empaquetado XOP; MTOM utiliza este formato como parte de la optimización.'},
{url:'https://www.w3.org/press-releases/2005/xmlp/',referencia:'Comunicado W3C de las recomendaciones de servicios web: distingue expresamente XOP (empaquetado XML-binario) de MTOM (mecanismo de optimización de transmisión SOAP).'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 65 y 77: interoperabilidad de servicios web, XML y compatibilidad con estándares.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.12: servicios web, estándares y protocolos asociados.'}
],edits[6878],'Se corrige el posible doble sentido entre las dos opciones XOP: XOP significa XML-binary Optimized Packaging y es formato utilizado por MTOM, cuyo nombre completo es SOAP Message Transmission Optimization Mechanism. Se pregunta directamente por la especificación W3C del mecanismo.', 'corregida'],
[6879,[61],['II-2'],['Windows Server','roles de servidor','características','administración de sistemas'],[
{url:role,referencia:'Microsoft Learn, Server Feature Provider: define un rol de servidor como grupo de componentes que proporcionan funciones para un área funcional específica (por ejemplo, impresión, archivos o control de dominio).'},
{url:'https://learn.microsoft.com/en-us/windows-server/administration/server-manager/add-remove-roles-features',referencia:'Microsoft Learn, administración de Windows Server: documenta la instalación y eliminación de roles, servicios de rol y características como categorías diferenciadas.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 61: sistemas operativos Microsoft, fundamentos y administración.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.2: características técnicas, funcionales y de administración de Windows y otros sistemas operativos.'}
],edits[6879],'La pregunta original permitía confundir dos formulaciones generales de roles. Se fija la definición explícita de Microsoft Server Feature Provider y se distingue de características opcionales y de la asignación de funciones a personas.', 'corregida'],
[6880,[122],['II-2'],['Active Directory','objectGUID','GUID','identificadores de objetos','Microsoft'],[
{url:guid,referencia:'Microsoft Learn, Object Names and Identities: Active Directory asigna el objectGUID al crear un objeto y lo define como un GUID de 128 bits; no cambia al renombrar o mover el objeto.'},
{url:'https://learn.microsoft.com/en-us/windows/win32/api/guiddef/ns-guiddef-guid',referencia:'Microsoft Learn, estructura GUID: define su representación como valor de 128 bits.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 122: servicios de directorio.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.2: sistemas operativos Windows y su administración.'}
],edits[6880],'Se sustituye la antigua pregunta negativa, que juntaba varias afirmaciones de Active Directory, por una comprobación directa del tamaño de objectGUID. Microsoft indica que es un identificador de 128 bits asignado al crear el objeto y persistente ante cambios de nombre o ubicación.', 'corregida']
];
aplicar({numero:'1311',fecha:'2026-11-15',records,edits});
