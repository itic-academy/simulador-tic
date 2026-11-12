const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const solarwinds='https://documentation.solarwinds.com/en/success_center/dameware/content/licensing_and_activation.htm';
const vinagre='https://packages.fedoraproject.org/pkgs/vinagre/vinagre/index.html';
const tight='https://www.tightvnc.com/licensing.php';
const rdesktop='https://github.com/rdesktop/rdesktop/blob/master/COPYING';
const xen='https://xenproject.org/projects/hypervisor/';
const virtuozzo='https://docs.virtuozzo.com/master/index.html';
const alfresco='https://docs.alfresco.com/content-services/7.2/';
const wiki='https://wiki.c2.com/?WikiWikiWeb';
const owl='https://www.w3.org/TR/owl2-overview/';
const rml='https://rml.io/docs/rml/introduction/';
const constitution='https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=0';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5666,[69],[],['escritorio remoto','licencia propietaria','Dameware','Vinagre','TightVNC','rdesktop','software libre'],[
  ref(solarwinds,'SolarWinds, licensing and activation, Dameware Mini Remote Control: producto bajo clave/licencia del proveedor, con trial limitado; las instalaciones con licencia central se activan en servidor.'),
  ref(vinagre,'Fedora Packages, paquete Vinagre: cliente de escritorio remoto de GNOME; licencia indicada GPL-2.0-or-later. Se contrasta con el archivo upstream de GNOME.'),
  ref('https://wiki.gnome.org/Apps/Vinagre','GNOME Wiki Archive, Vinagre: proyecto de visor VNC/RDP/SPICE y acceso a fuentes upstream; se usa como evidencia de identidad del producto, no como fuente del tipo de licencia.'),
  ref(tight,'TightVNC, condiciones de licencia por versión: TightVNC 2 se distribuye bajo GPL; TightVNC 4.0 actual es closed-source, pero su versión base es gratis incluso para uso comercial y solo el cifrado TLS 1.3 requiere Pro. Esto demuestra que «propietario» y «requiere pago para uso ordinario» no son sinónimos.'),
  ref('https://www.tightvnc.com/whatsnew.php','TightVNC, registro de versiones: TightVNC 4.0.0 se publicó el 25-10-2026; versión 4 vigente junto a 2.8.90 de la rama 2.'),
  ref(rdesktop,'rdesktop, archivo COPYING del repositorio upstream: licencia GNU GPL.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 69: software de código abierto/libre y aplicaciones; corresponde al contraste de licencias, no a una lista de clientes remotos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX: no se identifica un epígrafe específico de licencias de estas utilidades de escritorio remoto; no se fuerza una clasificación A2.')
 ],null,'Corregida, respuesta B. El enunciado se acota a la herramienta cuyo uso estándar requiere adquirir licencia del proveedor: Dameware Mini Remote Control; SolarWinds ofrece trial y activación/licenciamiento comercial. Se versionan opciones libres: Vinagre 3.22 usa GPL-2.0-or-later, TightVNC 2.8.90 se ofrece bajo GPL v2 y rdesktop 1.9.x bajo GPL v3+. TightVNC 4.0 (octubre de 2026) es closed-source, pero su base gratuita permite uso comercial; solo las funciones Pro, incluido TLS 1.3, requieren suscripción. «Propietario» no equivale necesariamente a «de pago», y la versión debe indicarse. A1-69 por licencias de software; no se fuerza un epígrafe A2.','corregida'],
 [5667,[57,132],['IV-6'],['virtualización','hipervisor','Xen','VMware ESXi','Virtuozzo','Alfresco','ECM'],[
  ref(xen,'Xen Project, Hypervisor: presenta Xen como plataforma de virtualización abierta/hipervisor.'),
  ref(virtuozzo,'Virtuozzo Documentation: incluye guías de Virtuozzo Server, máquinas virtuales y herramientas de virtualización.'),
  ref(alfresco,'Alfresco Content Services 7.2, documentación del fabricante: define el producto como plataforma Enterprise Content Management (ECM), con gestión documental, colaboración y gobernanza del contenido; no es hipervisor.'),
  ref('https://www.broadcom.com/products/vmware/cloud-foundation/vsphere','Broadcom VMware vSphere: plataforma de virtualización y gestión de infraestructura basada en ESXi.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 57 (virtualización de servidores) y 132 (virtualización de sistemas/puestos de trabajo).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.6: virtualización/consolidación de servidores y recursos.')
 ],null,'Corregida, respuesta B. La pregunta se reformula para preguntar cuál es una plataforma de gestión de contenido empresarial (ECM), no un hipervisor/virtualizador: Alfresco Content Services. Xen, VMware vSphere/ESXi y Virtuozzo sí son soluciones de virtualización. Se elimina el enunciado «no es una plataforma» sin precisar qué clase de plataforma se compara. A1-57/132 y A2-IV-6.','corregida'],
 [5668,[65,77],['III-12'],['wiki','Web 2.0','edición colaborativa','hipertexto','páginas enlazadas'],[
  ref(wiki,'Ward Cunningham, WikiWikiWeb/Portland Pattern Repository, sitio original del concepto: páginas web enlazadas que se pueden crear y editar colaborativamente desde un navegador.'),
  ref('https://www.w3.org/standards/','W3C, estándares web: contexto de arquitectura y herramientas del ecosistema web; la característica distintiva de edición colaborativa la aporta el modelo wiki, no un formato de sindicación o un mashup.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 65 (arquitectura y desarrollo web) y 77 (lenguajes/herramientas para redes globales y navegadores).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web, tecnologías/estándares y servicios web.')
 ],null,'Corregida, respuesta A. Un wiki es un sitio con páginas enlazadas cuyo contenido pueden crear/modificar colaborativamente usuarios autorizados mediante el navegador. La definición se acota a edición directa de páginas: un mashup integra servicios/datos; un blog organiza entradas cronológicas; un agregador recopila fuentes/feeds. La descripción original se basaba en la definición histórica de Ward Cunningham, con formulación literal innecesaria. A1-65/77 y A2-III-12.','corregida'],
 [5669,[76,77],['III-12'],['Web semántica','OWL','Web Ontology Language','RDF','RML','ontologías'],[
  ref(owl,'W3C Recommendation OWL 2, Document Overview: OWL es el Web Ontology Language, un lenguaje de ontologías de la Web Semántica con significado formal.'),
  ref(rml,'RML.io, RDF Mapping Language: RML es un lenguaje real que expresa reglas para mapear datos heterogéneos al modelo RDF; por ello la opción «RML» hacía ambigua la pregunta original, que preguntaba genéricamente por una tecnología utilizada en Web Semántica.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 76 (descripción semántica de datos y ontologías) y 77 (estándares web).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web, estándares y servicios web.')
 ],null,'Corregida, respuesta C. Se pregunta por el nombre oficial del lenguaje de ontologías de la Web Semántica: OWL (Web Ontology Language), normalizado por W3C. El reactivo original era ambiguo: RML también existe y sirve para transformar datos estructurados al modelo RDF, aunque no es el lenguaje de ontologías citado. Por eso se especifica la función/nombre buscados y se conserva RML como distractor solo frente a ese criterio. A1-76/77 y A2-III-12.','corregida'],
 [5670,[3],['I-1'],['Constitución Española','artículo 148','competencias autonómicas','montes','aprovechamientos forestales'],[
  ref(constitution,'Constitución Española, texto consolidado BOE actualizado el 20-05-2026, arts. 148.1.8, 149.1.3, 149.1.9 y 149.1.32.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 3: Constitución (III), Comunidades Autónomas y organización territorial.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema I.1: Constitución Española y organización constitucional.')
 ],null,'Corregida, respuesta B. El artículo 148.1.8 de la Constitución permite que las Comunidades Autónomas asuman competencias en montes y aprovechamientos forestales. En cambio, relaciones internacionales, legislación sobre propiedad intelectual/industrial y autorización para convocar referendos figuran entre competencias exclusivas estatales del artículo 149.1 (apartados 3, 9 y 32). La atribución autonómica concreta se completa en el marco constitucional y sus Estatutos; no implica que todas las Comunidades tengan automáticamente idéntico alcance. A1-3/A2-I-1.','corregida']
];
const edits={
 5666:{texto:'¿Cuál de estas herramientas requiere adquirir del proveedor una licencia para su uso estándar después del período de prueba?',opciones:['Vinagre 3.22 (GNU GPL-2.0-or-later).','Dameware Mini Remote Control (SolarWinds).','TightVNC 2.8.90 (GNU GPL v2).','rdesktop 1.9.x (GNU GPL v3 o posterior).'],respuesta_correcta:1},
 5667:{texto:'¿Cuál de estos productos es una plataforma de gestión de contenido empresarial (ECM), no un hipervisor o plataforma de virtualización de servidores?',opciones:['Xen Project Hypervisor.','Alfresco Content Services.','VMware vSphere/ESXi.','Virtuozzo Server.'],respuesta_correcta:1},
 5668:{texto:'¿Qué tipo de sitio web permite crear y editar colaborativamente páginas enlazadas directamente desde el navegador?',opciones:['Un wiki.','Un mashup, que integra datos o servicios de distintas fuentes.','Un blog, organizado principalmente en entradas cronológicas.','Un agregador de feeds, que recopila publicaciones de otras fuentes.'],respuesta_correcta:0},
 5669:{texto:'¿Qué lenguaje de la Web Semántica tiene como nombre desarrollado Web Ontology Language y se utiliza para definir ontologías con semántica formal?',opciones:['RTF.','RML (RDF Mapping Language).','OWL (Web Ontology Language).','Jabsys.'],respuesta_correcta:2},
 5670:{texto:'Según el artículo 148.1 de la Constitución Española, ¿qué materia pueden asumir las Comunidades Autónomas como competencia?',opciones:['Relaciones internacionales.','Los montes y aprovechamientos forestales.','La autorización para convocar consultas populares por vía de referéndum.','La legislación sobre propiedad intelectual e industrial.'],respuesta_correcta:1}
};
aplicar({numero:'1069',fecha:'2026-11-12',records,edits});
