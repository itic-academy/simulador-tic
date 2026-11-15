const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce='https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520&tn=1';
const records=[
[7196,[2],['I-2'],['Tribunal Constitucional','magistrados','cese','mayoría simple','LOTC'],[
{url:'https://www.boe.es/buscar/act.php?id=BOE-A-1979-23709&p=20240802&tn=1',referencia:'Ley Orgánica 2/1979 del Tribunal Constitucional, art. 23.1–2, texto consolidado: el Pleno decide por mayoría simple solo el cese por incapacidad judicial o incompatibilidad sobrevenida (causas tercera y cuarta); las causas quinta a séptima exigen tres cuartas partes.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 2: Tribunal Constitucional, naturaleza, organización y atribuciones.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I-2: composición y atribuciones del Tribunal Constitucional.'}
],null,'La opción A es la única pareja de causas de cese/vacante que el Pleno resuelve por mayoría simple: incapacidad e incompatibilidad sobrevenida. La expiración del nombramiento y la renuncia aceptada las decreta el Presidente; las demás causas requieren mayoría de tres cuartas partes del Pleno, conforme al art. 23 LOTC.','vigente'],
[7197,[3],['I-1'],['Constitución','competencias estatales','espacio aéreo','transporte aéreo'],[
{url:ce,referencia:'Constitución Española, art. 149.1.20.ª, texto consolidado a 20-05-2026: competencia exclusiva estatal sobre control del espacio aéreo, tránsito y transporte aéreo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 3: organización política y administrativa de las Comunidades Autónomas y distribución territorial.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I-1: Constitución y derechos/deberes fundamentales.'}
],null,'La competencia sobre control del espacio aéreo, tránsito y transporte aéreo es exclusiva del Estado por el art. 149.1.20.ª CE. No es un caso de legislación estatal básica con desarrollo legislativo autonómico.','vigente'],
[7198,[3],['I-1'],['Constitución','autonomía financiera','tributos autonómicos','territorialidad'],[
{url:ce,referencia:'Constitución Española, art. 157.2, texto consolidado a 20-05-2026: las CCAA no podrán en ningún caso adoptar medidas tributarias sobre bienes situados fuera de su territorio ni obstaculizar la libre circulación.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 3: Comunidades Autónomas y organización territorial.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I-1: Constitución Española.'}
],null,'La opción correcta es «no, en ningún caso», conforme al art. 157.2 CE. La prohibición no se salva porque el contribuyente resida en la Comunidad ni mediante autorización administrativa; el límite constitucional se refiere a las medidas tributarias sobre bienes extraterritoriales.','vigente'],
[7199,[3],['I-1'],['Constitución','artículo 151','estatutos de autonomía','referéndum provincial'],[
{url:ce,referencia:'Constitución Española, art. 151.2.5.ª, texto consolidado a 20-05-2026: si una o varias provincias no aprueban el proyecto estatutario, ello no impide constituir la Comunidad Autónoma entre las restantes.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 3: procedimiento autonómico y organización territorial.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I-1: Constitución Española.'}
],null,'La opción B reproduce la regla del art. 151.2.5.ª CE: la falta de aprobación del proyecto por una o varias provincias no impide que las restantes constituyan la Comunidad Autónoma proyectada, según establezca la ley orgánica.','vigente'],
[7200,[4],['I-8'],['Administración General del Estado','organización central','organización territorial','Ley 40/2015'],[
{url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20260929&tn=1',referencia:'Ley 40/2015, art. 55.2, texto consolidado: la AGE comprende Organización Central (Ministerios y servicios comunes), Organización Territorial y AGE en el exterior. No enumera una «organización sectorial» como cuarto componente.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 4: Administración pública y Administración General del Estado; tema 6: organización territorial.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema I-8: régimen jurídico del sector público y Ley 40/2015.'}
],null,'La opción incorrecta es C. El art. 55.2 de la Ley 40/2015 enumera tres componentes: Organización Central, Organización Territorial y Administración General del Estado en el exterior. La central integra los Ministerios y servicios comunes; «organización sectorial» no forma parte de esa enumeración legal.','vigente']
];
aplicar({numero:'1375',fecha:'2026-11-15',records});
